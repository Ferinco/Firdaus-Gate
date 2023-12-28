import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../redux/slices/users";
import { Button, CircularProgress } from "../../components/custom";
import { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import { fetchSubjects } from "../../redux/slices/subjects";
import AddAndDeleteSubject from "../../components/AddAndDeleteSubject";
import { api } from "../../api/axios";
import toast from "react-hot-toast";
export default function EditTeacher() {
  const [activeNav, setActiveNav] = useState("Profile");
  const [currentPage, setCurrentPage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useSelector((state) => state.users || {});

  useEffect(() => {
    setCurrentPage(changePageContent(activeNav));
  }, [activeNav]);
  const onSubmitSecurity = async (data) => {
    console.log("data");
  };

  const phoneRegEx =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  //validations for edit form
  const schema = yup.object({
    firstName: yup.string().required("input first name"),
    lastName: yup.string().required("input last name"),
    newPassword: yup
      .string()
      .required("set a password")
      .min(5, "new password must be at least 5 characters")
      .max(12, "new password must not be more than 12 characters"),
    tel: yup
      .string()
      .matches(phoneRegEx, "phone number is invalid")
      .required("phone number is required")
      .min(10, "phone number is invalid")
      .max(11, "phone number is invalid"),
    confirmNewPassword: yup
      .string()
      .oneOf([yup.ref("newPassword"), null], "passwords must match")
      .required("confirm your password"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      tel: user?.role === "student" ? user?.parentPhone : user?.tel,

      newPassword: "",
      signature: "",
      class: user?.role === "student" ? user?.currentClass : user?.classHandled,
      id: user?.role === "student" ? user?.admissionNumber : user?.teacherId,
    },
  });

  console.log(currentPage);
  function changePageContent(activeNav) {
    switch (activeNav) {
      case "Password":
        return <ChangePassword />;
      case "Portfolio":
        return <ChangePortfolio />;
      case "Profile":
        return <ChangeProfile />;
      default:
        return null;
    }
  }
  return (
    <>
      {isLoading && user === null && <CircularProgress />}
      <Wrapper className="py-5 mt-4">
        <div className="navigators d-flex flex-row gap-3">
          <div
            onClick={() => {
              setActiveNav("Profile");
            }}
            className={
              activeNav === "Profile" ? "navigator active" : "navigator"
            }
          >
            <Icon icon="icomoon-free:profile" className="icon" /> Profile
          </div>
          <div
            onClick={() => {
              setActiveNav("Password");
            }}
            className={
              activeNav === "Password" ? "navigator active" : "navigator"
            }
          >
            <Icon icon="mdi:key" className="icon" /> Password
          </div>
          <div
            onClick={() => {
              setActiveNav("Portfolio");
            }}
            className={
              activeNav === "Portfolio" ? "navigator active" : "navigator"
            }
          >
            <Icon icon="zondicons:portfolio" className="icon" /> Portfolio
          </div>
        </div>

        <div>{currentPage}</div>
      </Wrapper>
    </>
  );
}

const ChangeProfile = () => {
  const { identity } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [previewProfilePhoto, setPreviewProfilePhoto] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState("");
  const { user } = useSelector((state) => state.users || {});
  useEffect(() => {
    dispatch(fetchUser({ id: identity }));
  }, [identity, dispatch]);

  const onSubmitProfile = async (data) => {
    console.log(data);
  };
  const phoneRegEx =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  //validations for edit form
  const schema = yup.object({
    firstName: yup.string().required("input first name"),
    lastName: yup.string().required("input last name"),
    tel: yup
      .string()
      .matches(phoneRegEx, "phone number is invalid")
      .required("phone number is required")
      .min(10, "phone number is invalid")
      .max(11, "phone number is invalid"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      tel: user?.role === "student" ? user?.parentPhone : user?.tel,
      class: user?.role === "student" ? user?.currentClass : user?.classHandled,
      id: user?.role === "student" ? user?.admissionNumber : user?.teacherId,
    },
  });

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    setProfilePhoto(event.target.files[0]);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  console.log(user);
  return (
    <div className="div p-3">
      <form className="profile-div" onSubmit={handleSubmit(onSubmitProfile)}>
      <div className="photo-upload-container">
        <label htmlFor="photo" className="rounded-input">
          {previewProfilePhoto ? (
            <div className="profile-image">
            <img src={previewProfilePhoto} alt="Preview" className="rounded-preview" />
            </div>
          ) : (
            <span>Upload Photo</span>
          )}
          <input
            type="file"
            accept="image/*"
            id="photo"
            {...register('photo')}
            onChange={handlePhotoChange}
          />
        </label>
      </div>
        <div className="row">
          <div className="d-flex flex-column col-md-6">
            <label htmlFor="firstName" className="label">
              First name
            </label>
            <input
              name="firstName"
              defaultValue={user?.firstName}
              type="text"
              {...register("firstName")}
            />
            <p className="error-message">
              {errors.firstName?.message ? `*${errors.firstName?.message}` : ""}
            </p>
          </div>
          <div className="d-flex flex-column col-md-6">
            <label htmlFor="lastName" className="label">
              Last name
            </label>
            <input
              name="lastName"
              defaultValue={user?.lastName}
              type="text"
              {...register("lastName")}
            />
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col-md-6 id mt-3">
            <label htmlFor="id" className="label">
              {user?.role === "student" ? "admission number" : "teaacher id"}
            </label>
            <input
              name="id"
              defaultValue={user?.admissionNumber}
              readOnly
              {...register("id")}
              className="id"
            />
          </div>
          <div className="d-flex flex-column col-md-6 class mt-3">
            <label htmlFor="class" className="label">
              {user?.role === "student" ? "current class" : "class handled"}
            </label>
            <input
              defaultValue={user?.currentClass}
              name="class"
              readOnly
              {...register("class")}
            />
          </div>
        </div>
        <div className="row">
          <div className="d-flex flex-column col-md-6 email mt-3">
            <label htmlFor="email" className="label">
              Email address
            </label>
            <input
              readOnly
              value={user?.email}
              name="email"
              className="email"
            />
          </div>
          <div className="d-flex flex-column col-md-6 mt-3">
            <label htmlFor="tel" className="label">
              {user?.role === "student" ? "Parent phone" : "Phone number"}
            </label>
            <input
              defaultValue={
                user?.role === "teacher" ? user?.tel : user?.parentPhone
              }
              name="tel"
              {...register("tel")}
            />
            <p className="error-message">
              {errors.tel?.message ? `*${errors.tel?.message}` : ""}
            </p>
          </div>
        </div>

        <div className="button-div d-flex justify-content-end mt-4">
          <Button blue>Save Changes</Button>
        </div>
      </form>
    </div>
  );
};
const ChangePassword = () => {
  const { identity } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useSelector((state) => state.users || {});
  useEffect(() => {
    dispatch(fetchUser({ id: identity }));
  }, [identity, dispatch]);
  const schema = yup.object({
    newPassword: yup
      .string()
      .required("set a password")
      .min(5, "new password must be at least 5 characters")
      .max(12, "new password must not be more than 12 characters"),
    confirmNewPassword: yup
      .string()
      .oneOf([yup.ref("newPassword"), null], "passwords must match")
      .required("confirm your password"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      newPassword: "",
    },
  });
  const onSubmitSecurity = async (data) => {
    setIsLoading(true);
    await api
      .put(`/users/change-password-for-student/${identity}`, {
        newPassword: data.newPassword,
      })
      .then((res) => {
        toast.success("Password changed successfully");
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error("Something went wrong, try again");
        setIsLoading(false);
      });
  };
  return (
    <div className="div p-3">
      <form
        className="security-div d-flex flex-column gap-2"
        onSubmit={handleSubmit(onSubmitSecurity)}
      >
        <div className="d-flex flex-column">
          <label htmlFor="newPassword" className="label">
            New Password
          </label>
          <input
            name="newPassword"
            {...register("newPassword")}
            placeholder="New password"
          />
          <p className="error-message">
            {errors.newPassword?.message
              ? `*${errors.newPassword?.message}`
              : ""}
          </p>
        </div>
        <div className="d-flex flex-column">
          <input
            name="confirmNewPassword"
            {...register("confirmNewPassword")}
            placeholder="Confirm new password"
          />
          <p className="error-message">
            {errors.confirmNewPassword?.message
              ? `*${errors.confirmNewPassword?.message}`
              : ""}
          </p>
        </div>

        <div className="button-div d-flex justify-content-end mt-4">
          <Button disabled={isLoading} blue>
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
};
const ChangePortfolio = () => {
  const dispatch = useDispatch();
  const { identity } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useSelector((state) => state.users || {});
  useEffect(() => {
    dispatch(fetchSubjects({ id: identity }));
  }, [identity, dispatch]);
  console.log(user.subjectTaught);
  return (
    <div className="div mt-5 p-3">
      <p> Edit portfolio, add and delete subject, change student department etc</p>
      {["FGSSC_002", "FGSSC_003", "FGSSC_001"].includes(user.currentClass) ? (
        <AddAndDeleteSubject studentId={identity} />
      ) : (
        <h4>Cannot change subject for this student</h4>
      )}
    </div>
  );
};

const Wrapper = styled.div`
  padding-left: 32px !important;
  padding-right: 32px !important;
  .navigator {
    padding-bottom: 10px;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    color: grey;
    gap: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 2px solid transparent;
  }
  .active {
    border-bottom: 2px solid black;
    color: black;
    transition: 0.3s;
  }
  .port {
    height: 400px !important;
    width: 400px !important;
    border: 1px solid red;
  }
  .div {
    background: white !important;
    border-radius: 20px;
    max-width: 500px;
  }
  .label {
    font-weight: 600;
    margin-bottom: -10px !important;
    background-color: white;
    margin-left: 10px;
    padding-right: 5px;
    font-size: 13px;
    z-index: 99;
    color: grey;
    width: fit-content;
    text-transform: capitalize;
  }
  input {
    border-radius: 10px;
    padding: 14px 16px;
    background: transparent;
    border: 1px solid grey !important;
    outline: none;
    width: 100%;
  }
  .email,
  .id,
  .class {
    input {
      color: grey !important;
    }
  }
  .photo-upload-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.rounded-input {
  position: relative;
  overflow: hidden;
  display: inline-block;
  cursor: pointer;

  span {
    display: block;
    padding: 10px;
    background-color: #3498db;
    color: #fff;
    border-radius: 5px;
    text-align: center;
  }

  img.rounded-preview {
    width: 100%;
    border-radius: 5px;
  }

  input[type='file'] {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }
}
.profile-image{
    width:100px;
    height:100px;
    overflow: hidden;
    border-radius: 50%;
    img{
      width:100%;
      height: 100%;
      object-fit: cover;
      display: block;

    }
  }
`;
