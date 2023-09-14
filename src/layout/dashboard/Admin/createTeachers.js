import React, { useState } from "react";
import { useForm, handleSubmit } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../../components/custom/Button";
import { styled } from "styled-components";
import { UserService } from "../../../services/userService";
import toast from "react-hot-toast";
export default function CreateTeachers() {
  //  yup resolvers

  const schema = yup.object({
    firstName: yup.string().required("first name is required"),
    lastName: yup.string().required("last name is required"),
    middleName: yup.string().optional(),
    teacherId: yup.number().required("enter admission number"),
    email: yup.string().email().required("email is required"),
    mobileNumber: yup.number().max(11).required("email is required"),
    password: yup.string().min(5).max(12).required("set a passowrd"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null])
      .required("passwords must match!"),
  });
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      teacherId: "",
      confirmPassword: "",
      email: "",
      firstName: "",
      lastName: "",
      middleName: "",
      password: "",
      role: "teacher",
    },
  });
  const onsubmit = async(data)=>{
await UserService.createUser(data)
.then((res)=>{
  console.log(res);
  setIsLoading(false);
  setSuccess(true);
  toast.success("Account Successfully created!");
  reset();
})
.catch((error) => {
  console.log(error);
  setIsLoading(false);
  toast.error(`${error.response?.data.message}`);
});
  }
  const [sucess, setSuccess] = useState(false);
  const [loading, setIsLoading] = useState(false);
  return (
    <div>
      {" "}
      <Wrapper className="p-5">
        <div className="head d-flex flex-column py-3">
          <h4>Create Teacher Profile</h4>
          <p>enter teacher's details to create his/her profile</p>
        </div>
        <div className="form-wrapper d-flex justify-content-center flex-column align-center">
          <form onsubmit={handleSubmit(onsubmit)}>
            <div className="d-flex flex-row input-div my-2">
              <div className="d-flex flex-column">
                <label htmlFor="firstName" className="label">
                  first name
                </label>
                <input
                  placeholder="Enter Firstname"
                  name="firstName"
                  type="text"
                  {...register("firstName")}
                />
                <p className="error-message">
                  {errors.firstName?.message
                    ? `*${errors.firstName?.message}`
                    : ""}
                </p>
              </div>
              <div className="d-flex flex-column">
                <label htmlFor="lastName" className="label">
                  last name
                </label>
                <input
                  placeholder="Enter Lastname"
                  name="lastName"
                  type="text"
                  {...register("lastName")}
                />
                <p className="error-message">
                  {errors.lastName?.message
                    ? `*${errors.lastName?.message}`
                    : ""}
                </p>
              </div>
            </div>
            <div className="d-flex flex-row input-div my-2">
              <div className="d-flex flex-column">
                <label htmlFor="middleName" className="label">
                  middle name
                </label>

                <input
                  placeholder="Enter Middle name"
                  name="middleName"
                  type="text"
                  {...register("middleName")}
                />
              </div>

              <div className="d-flex flex-column">
                <label htmlFor="teacherId" className="label">
                  teacher ID
                </label>
                <input
                  placeholder="Teacher ID"
                  name="teacherId"
                  type="text"
                  {...register("teacherId")}
                />
                <p className="error-message">
                  {errors.teacherId?.message
                    ? `*${errors.teacherId?.message}`
                    : ""}
                </p>
              </div>
            </div>
            <div className="my-2 d-flex flex-column">
              <label htmlFor="mobileNumber" className="label">
                Mobile number
              </label>

              <input
                placeholder="Mobile Number"
                name="mobileNumber"
                type="text"
                {...register("mobileNumber")}
              />
              <p className="error-message">
                {errors.mobileNumber?.message ? `*${errors.mobileNumber?.message}` : ""}
              </p>
            </div>
            <div className="my-2 d-flex flex-column">
              <label htmlFor="email" className="label">
                email
              </label>

              <input
                placeholder="Email 
            Address"
                name="email"
                type="email"
                {...register("email")}
              />
              <p className="error-message">
                {errors.email?.message ? `*${errors.email?.message}` : ""}
              </p>
            </div>
            <div className="d-flex flex-row input-div my-2">
              <div className="d-flex flex-column">
                <label htmlFor="password" className="label">
                  password
                </label>

                <input
                  placeholder="
            Password"
                  name="password"
                  type="password"
                  {...register("password")}
                />
                <p className="error-message">
                  {errors.password?.message
                    ? `*${errors.password?.message}`
                    : ""}
                </p>
              </div>
              <div className="d-flex flex-column">
                <label htmlFor="confirmPassword" className="label">
                  confirm passowrd
                </label>
                <input
                  placeholder="Confirm 
            Password"
                  name="confirmPassword"
                  type="password"
                  {...register("confirmPassword")}
                />
                <p className="error-message">
                  {errors.confirmPassword?.message
                    ? `*${errors.confirmPassword?.message}`
                    : ""}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <Button
                blue
                type="submit"
                className="button"
                disabled={loading === true}
              >
                {loading ? (
                  <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : (
                  "Create Profile"
                )}
              </Button>
            </div>
          </form>
        </div>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  .form-wrapper {
    max-width: 420px;
    .select {
      border-radius: 5px;
      background-color: #f5f5f5;
      border: 0 !important;
    }
    .button {
      width: 100%;
    }
    .input-div {
      gap: 10px;
    }
    .label {
      font-weight: 500;
      margin-bottom: -10px !important;
      background-color: #f1f1f1;
      margin-left: 10px;
      padding-right: 5px;
      font-size: 14px;
      z-index: 1;
      color: grey;
      width: fit-content;
      text-transform: capitalize;
    }
  }
  input {
    border-radius: 10px;
    padding: 14px 16px;
    background: transparent;
    border: 1px solid grey;
    outline: none;
    width: 100%;
  }
  .spinner-border {
    width: 25px;
    height: 25px;
  }
  .error-message {
    color: orangered;
    padding-left: 7px;
    font-size: 14px;
    font-weight: 500;
  }
`;
