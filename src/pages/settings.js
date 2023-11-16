import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { Button } from "../components/custom/Button";
import { Icon } from "@iconify/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserService } from "../services/userService";
import { api } from "../api/axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

export default function Settings() {
  const [isLoading, setLoading] = useState(false);
  const [activeNav, setActiveNav] = useState("Profile");
  const [previewImage, setPreviewImage] = useState(null);
  const [signatureFile, setSignatureFile] = useState("");
  const phoneRegEx =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const { user } = useAuth();

  const schema = yup.object({
    teacherSignature: yup
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
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      tel: user.role === "student" ? user.parentPhone : user.tel,
      teacherSignature: user.teacherSignature,
    },
  });
  console.log(errors);
  const onSubmitProfile = async (data) => {
    const formData = new FormData();
    formData.append("values", JSON.stringify(data));
    formData.append("teacherSignature", signatureFile);
    try {
      setLoading(true)
      const data = await UserService.updateUser(user._id, formData);
      toast.success("Profile edited successfully");
      setLoading(false)
    }catch (error) {
      console.log(error);
      setLoading(false);
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong, try again later");
      }
    }
  };
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSignatureFile(event.target.files[0]);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Wrapper className="d-flex flex-column py-5 container">
             <Helmet>
        <title>Settings | FGMS</title>
                <meta name="keywords" content="change password, profile" />
      </Helmet>
      <h4>Account Settings</h4>
      <div className="navigators d-flex flex-row gap-4 mt-4">
        <div
          onClick={() => {
            setActiveNav("Profile");
          }}
          className={activeNav === "Profile" ? "navigator active" : "navigator"}
        >
          <Icon icon="icomoon-free:profile" className="icon" /> Profile
        </div>
        <div
          onClick={() => {
            setActiveNav("Security");
          }}
          className={
            activeNav === "Security" ? "navigator active" : "navigator"
          }
        >
          <Icon icon="mdi:key" className="icon" /> Security
        </div>
      </div>
      {activeNav === "Profile" ? (
        <div className="div mt-5 p-3">
          <form
            className="profile-div"
            onSubmit={handleSubmit(onSubmitProfile)}
          >
            <div className="row">
              <div className="d-flex flex-column col-md-6 name mt-3">
                <label htmlFor="firstName" className="label">
                  First name
                </label>
                <input
                  value={user.firstName}
                  name="firstName"
                  type="text"
                  {...register("firstName")}
                  readOnly
                />
              </div>
              <div className="d-flex flex-column col-md-6 name mt-3">
                <label htmlFor="lastName" className="label">
                  Last name
                </label>
                <input
                  value={user.lastName}
                  name="lastName"
                  type="text"
                  {...register("lastName")}
                  readOnly
                />
              </div>
            </div>
            <div className="row">
              <div className="d-flex flex-column col-md-6 id mt-3">
                <label htmlFor="id" className="label">
                  {user.role === "student" ? "admission number" : "teaacher id"}
                </label>
                <input
                  name="id"
                  value={
                    user.role === "student"
                      ? user.admissionNumber
                      : user.teacherId
                  }
                />
              </div>
              <div className="d-flex flex-column col-md-6 class mt-3">
                <label htmlFor="class" className="label">
                  {user.role === "student" ? "current class" : "class handled"}
                </label>
                <input
                  readOnly
                  value={
                    user.role === "student"
                      ? user.currentClass
                      : user.classHandled
                  }
                  name="class"
                />
              </div>
            </div>
            {user.role === "teacher" && (
              <div className="teacherSignature mt-3">
                <label htmlFor="teacherSignature" className="label">
                  Add Signature:
                </label>
                <input
                  type="file"
                  name="teacherSignature"
                  {...register("teacherSignature")}
                  onChange={handleFileChange}
                  accept="image/*"
                />
                {errors.photo && (
                  <p className="error">{errors.photo.message}</p>
                )}
                <div>
                  {previewImage ? (
                    <img
                      src={previewImage}
                      alt="Preview"
                      style={{ maxWidth: "200px" }}
                    />
                  ) : (
                    <img
                      src={getValues().teacherSignature}
                      alt="Preview"
                      style={{ maxWidth: "200px" }}
                    />
                  )}
                </div>
              </div>
            )}
            <div className="row ">
              <div className="d-flex flex-column col-md-6 email mt-3">
                <label htmlFor="email" className="label">
                  Email address
                </label>
                <input readOnly value={user.email} name="email" />
              </div>
              <div className="d-flex flex-column col-md-6 mt-3">
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
            <Button
                    blue
                    type="submit"
                    className="button"
                    disabled={isLoading === true}
                  >
                    {isLoading ? (
                      <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    ) : (
                      "Save Changes"
                    )}
                  </Button>
            </div>
          </form>
        </div>
      ) : (
        <ChangePassword />
      )}
    </Wrapper>
  );
}

const ChangePassword = () => {
  const passwordSchemaValidate = yup.object({
    newPassword: yup.string().required("Please enter new password"),
    oldPassword: yup.string().required("Please enter old password"),
    confirmNewPassword: yup
      .string()
      .oneOf([yup.ref("newPassword"), null], "passwords must match")
      .required("confirm your password"),
  });
  const [isLoading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: { oldPassword: "", confirmNewPassword: "", newPassword: "" },
    resolver: yupResolver(passwordSchemaValidate),
  });

  const onSubmitSecurity = async (data) => {
    console.log(data);
    try {
      setLoading(true);
      const response = await api.put("/users/change-password", {
        oldPassword: data.oldPassword,
        newPassword: data.newPassword,
      });
      toast.success("Password changed successfully");
      setLoading(false);
      console.log(response);
    } catch (error) {
      console.log(error);
      setLoading(false);
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong, try again later");
      }
    }
  };

  return (
    <div className="out mt-5 p-3">
      <form
        className="security-div d-flex flex-column gap-2"
        onSubmit={handleSubmit(onSubmitSecurity)}
      >
        <div className="d-flex flex-column">
          <label htmlFor="oldPassword" className="label">
            Old Password
          </label>
          <input
            type="password"
            name="oldPassword"
            {...register("oldPassword")}
          />
          <p className="error-message">
            {errors.oldPassword?.message
              ? `*${errors.oldPassword?.message}`
              : ""}
          </p>
        </div>
        <div className="d-flex flex-column">
          <label htmlFor="newPassword" className="label">
            New Password
          </label>
          <input
            type="password"
            name="newPassword"
            {...register("newPassword")}
          />
          <p className="error-message">
            {errors.newPassword?.message
              ? `*${errors.newPassword?.message}`
              : ""}
          </p>
        </div>
        <div className="d-flex flex-column">
          <input
            type="password"
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
        <Button
                    blue
                    type="submit"
                    className="button"
                    disabled={isLoading === true}
                  >
                    {isLoading ? (
                      <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    ) : (
                      "Change Password"
                    )}
                  </Button>
        </div>
      </form>
    </div>
  );
};

const Wrapper = styled.div`
  height: auto;
  background-color: #f5f5f5;
  padding-left: 32px;
  padding-right: 32px;
  .div {
    background-color: white !important;
    border-radius: 20px;
    max-width: 500px;
  }
  .profile-div {
    max-width: 600px;
  }
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
  .out {
    max-width: 400px;
    background: white !important;
    border-radius: 20px;
  }
  .active {
    border-bottom: 2px solid blue;
    color: black;
    transition: 0.3s;
  }
  .label {
    font-weight: 600;
    margin-bottom: -10px !important;
    background-color: white;
    margin-left: 10px;
    padding-right: 5px;
    font-size: 13px;
    z-index: 99 !important;
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
  .name,
  .id,
  .class {
    input {
      color: grey !important;
    }
  }
  .error-message {
    color: orangered;
    padding-left: 7px;
    font-size: 13px;
    font-weight: 500;
  }
  .icon {
    font-size: 15px;
  }
  @media (max-width:1100px){
    padding-left: 24px;
  padding-right: 24px;
  }
  button{
    width:183.5px !important;
  }
  .spinner-border {
          width: 25px;
          height: 25px;
        }
`;
