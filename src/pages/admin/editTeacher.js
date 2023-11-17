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
    oldPwd: yup
      .string()
      .required("input old password")
      .min(5, "old password is at least 5 characters")
      .max(12, "old password is not more than 12 characters"),
    newPwd: yup
      .string()
      .required("set a password")
      .min(5, "new password must be at least 5 characters")
      .max(12, "new password must not be more than 12 characters"),
    signature: yup
      .mixed()
      .required("signature is required")
      .test("fileType", "Unsupported file type", (value) => {
        if (value && value.type) {
          return value.type.includes("image");
        }
        return true;
      }),
    tel: yup
      .string()
      .matches(phoneRegEx, "phone number is invalid")
      .required("phone number is required")
      .min(10, "phone number is invalid")
      .max(11, "phone number is invalid"),
    confirmPwd: yup
      .string()
      .oneOf([yup.ref("newPwd"), null], "passwords must match")
      .required("confirm your password"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      tel: user.role === "student" ? user.parentPhone : user.tel,
      oldPwd: "",
      confirmPwd: "",
      newPwd: "",
      signature: "",
      class: user.role === "student" ? user.currentClass : user.classHandled,
      id: user.role === "student" ? user.admissionNumber : user.teacherId,
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
        return null; // Return null or a default component for an unknown case
    }
  }
  return (
    <>
      {isLoading && user === null && <CircularProgress />}
      <Wrapper className="py-5">
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
            <Icon icon="mdi:key" className="icon" /> Portfolio
          </div>
        </div>

        <div>{currentPage}</div>
      </Wrapper>
    </>
  );
}

const ChangeProfile = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const { identity } = useParams();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useSelector((state) => state.users || {});
  useEffect(() => {
    dispatch(fetchUser({ id: identity }));
  }, [identity, dispatch]);

  const onSubmitProfile = async (data) => {
    console.log("data");
  };
  const phoneRegEx =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  //validations for edit form
  const schema = yup.object({
    firstName: yup.string().required("input first name"),
    lastName: yup.string().required("input last name"),
    oldPwd: yup
      .string()
      .required("input old password")
      .min(5, "old password is at least 5 characters")
      .max(12, "old password is not more than 12 characters"),
    newPwd: yup
      .string()
      .required("set a password")
      .min(5, "new password must be at least 5 characters")
      .max(12, "new password must not be more than 12 characters"),
    signature: yup
      .mixed()
      .required("signature is required")
      .test("fileType", "Unsupported file type", (value) => {
        if (value && value.type) {
          return value.type.includes("image");
        }
        return true;
      }),
    tel: yup
      .string()
      .matches(phoneRegEx, "phone number is invalid")
      .required("phone number is required")
      .min(10, "phone number is invalid")
      .max(11, "phone number is invalid"),
    confirmPwd: yup
      .string()
      .oneOf([yup.ref("newPwd"), null], "passwords must match")
      .required("confirm your password"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      tel: user.role === "student" ? user.parentPhone : user.tel,
      oldPwd: "",
      confirmPwd: "",
      newPwd: "",
      signature: "",
      class: user.role === "student" ? user.currentClass : user.classHandled,
      id: user.role === "student" ? user.admissionNumber : user.teacherId,
    },
  });

  return (
    <div className="div p-3">
      <form className="profile-div" onSubmit={handleSubmit(onSubmitProfile)}>
        <div className="row">
          <div className="d-flex flex-column col-md-6">
            <label htmlFor="firstName" className="label">
              First name
            </label>
            <input name="firstName" type="text" {...register("firstName")} />
            <p className="error-message">
              {errors.firstName?.message ? `*${errors.firstName?.message}` : ""}
            </p>
          </div>
          <div className="d-flex flex-column col-md-6">
            <label htmlFor="lastName" className="label">
              Last name
            </label>
            <input name="lastName" type="text" {...register("lastName")} />
          </div>
        </div>
        <div className="row mt-4 mt-3">
          <div className="d-flex flex-column col-md-6 id">
            <label htmlFor="id" className="label">
              {user.role === "student" ? "admission number" : "teaacher id"}
            </label>
            <input name="id" readOnly {...register("id")} />
          </div>
          <div className="d-flex flex-column col-md-6">
            <label htmlFor="class" className="label">
              {user.role === "student" ? "current class" : "class handled"}
            </label>
            <input name="class" readOnly {...register("class")} />
          </div>
        </div>

        <div className="row mt-4 mt-3">
          <div className="d-flex flex-column col-md-6 email">
            <label htmlFor="email" className="label">
              Email address
            </label>
            <input readOnly value={user.email} name="email" />
          </div>
          <div className="d-flex flex-column col-md-6">
            <label htmlFor="tel" className="label">
              {user.role === "student" ? "Parent phone" : "Phone number"}
            </label>
            <input name="tel" {...register("tel")} />
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
  return <div className="pwd-div">edit password</div>;
};
const ChangePortfolio = () => {
  return <div className="pwd-div">edit portfolio</div>;
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
  .div{
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
`;
