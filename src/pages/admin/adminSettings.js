import { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { Button } from "../../components/custom/Button";
import { Icon } from "@iconify/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserService } from "../../services/userService";
import { api } from "../../api/axios";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";


export default function AccountSettings() {
  const [activeNav, setActiveNav] = useState("Profile");
  const [isLoading, setLoading] = useState(false)
  const phoneRegEx =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const { user } = useAuth();

  const schema = yup.object({
    firstName: yup.string().required("first name is required"),
    lastName: yup.string().required("last name is required"),
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
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      tel: user.tel,
    },
  });

  const onSubmitProfile = async (data) => {
    const formData = new FormData();
    formData.append("values", JSON.stringify(data));
    try {
      setLoading(true);
      const data = await UserService.updateUser(user._id, formData);
      toast.success("Profile edited successfully");
      setLoading(false);

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


  return (
    <Wrapper className="d-flex flex-column py-5">
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
                  name="firstName"
                  type="text"
                  {...register("firstName")}
                />
                  <p className="error-message">
                  {errors.firstName?.message ? `*${errors.firstName?.message}` : ""}
                </p>
              </div>
              <div className="d-flex flex-column col-md-6 name mt-3">
                <label htmlFor="lastName" className="label">
                  Last name
                </label>
                <input name="lastName" type="text" {...register("lastName")} />
                <p className="error-message">
                  {errors.lastName?.message ? `*${errors.lastName?.message}` : ""}
                </p>
              </div>
            </div>
            <div className="row">
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
<ChangePassword/>
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
            placeholder="Input old password"

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
            placeholder="New password"
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
}

const Wrapper = styled.div`
  padding-right: 32px !important;
  padding-left: 32px !important;
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
    background-color: white;
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
  .email{
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
  @media screen and (max-width: 1100px) {
    padding-right: 24px !important;
  padding-left: 24px !important;
  }
  button{
    width:183.5px !important;
  }
  .spinner-border {
          width: 25px;
          height: 25px;
 }
`;
