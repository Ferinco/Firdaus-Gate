import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { toast } from "react-hot-toast";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/custom/Button";
import { UserService } from "../../services/userService";
import { useAuth } from "../../hooks/useAuth";

export default function CreateStudents() {
  const [success, setSuccess] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const phoneRegEx =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  //yup resolvers
  const schema = yup.object({
    firstName: yup.string().required("first name is required"),
    lastName: yup.string().required("last name is required"),
    middleName: yup.string().optional(),
    admissionNumber: yup.string().required("enter admission number"),
    email: yup.string().email().required("email is required"),
    parentPhone: yup
      .string()
      .matches(phoneRegEx, "phone number is invalid")
      .required("phone number is required")
      .min(10, "phone number is invalid")
      .max(11, "phone number is invalid"),
  });
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      admissionNumber: "",
      email: "",
      firstName: "",
      lastName: "",
      middleName: "",
      role: "student",
      parentPhone: "",
      gender: "",
      department: "",
      currentClass: "",
    },
  });
  const selectedCurrentClass = watch("currentClass");
//   const selectedClass = watch("classHandled");
  //submission of the form
  const onSubmit = async (data) => {
    console.log(data);
    setIsLoading(true);
    const formData = new FormData();
    formData.append("values", JSON.stringify({...data, password:`${data.firstName}${data.admissionNumber}`}));
    await UserService.createUser(formData)
      .then((res) => {
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
  };
  console.log(errors);
  return (
    <div>
      <Wrapper className="p-5">
        <div className="head d-flex flex-column py-3">
          <h4>Create Student Profile</h4>
          <p>enter student's details to create his/her profile</p>
        </div>
        <div className="form-wrapper d-flex justify-content-center flex-column align-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex flex-row input-div my-2">
              <div className="d-flex flex-column">
                <label htmlFor="firstName" className="label">
                  first name
                </label>
                <input
                  placeholder="Enter First name"
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
                <label htmlFor="admissionNumber" className="label">
                  admission number
                </label>
                <input
                  placeholder="Admission Number"
                  name="admissionNumber"
                  type="text"
                  {...register("admissionNumber")}
                />
                <p className="error-message">
                  {errors.admissionNumber?.message
                    ? `*${errors.admissionNumber?.message}`
                    : ""}
                </p>
              </div>
            </div>
            <div className="selects row my-2">
              <div className="d-flex flex-column col-6">
                <label htmlFor="gender" className="label">
                  Gender
                </label>
                <select name="gender" {...register("gender")}>
                  <option value="" disabled>
                    Gender
                  </option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                </select>
              </div>

              <div className="d-flex flex-column col-6">
                <label htmlFor="Class" className="label">
                  Class
                </label>
                <select name="currentClass" {...register("currentClass")}>
                  <option value="" disabled>
                    class
                  </option>
                  <option value="FGKGC_001">KG 1</option>
                  <option value="FGKGC_002">KG 2</option>
                  <option value="FGNSC_001">NURSERY 1</option>
                  <option value="FGNSC_002">NURSERY 2</option>
                  <option value="FGBSC_001">BASIC 1</option>
                  <option value="FGBSC_002">BASIC 2</option>
                  <option value="FGBSC_003">BASIC 3</option>
                  <option value="FGBSC_004">BASIC 4</option>
                  <option value="FGBSC_005">BASIC 5</option>
                  <option value="FGBSC_006">BASIC 6</option>
                  <option value="FGJSC_001">JSS 1</option>
                  <option value="FGJSC_002">JSS 2</option>
                  <option value="FGJSC_003">JSS 3</option>
                  <option value="FGSSC_001">SSS 1</option>
                  <option value="FGSSC_002">SSS 2</option>
                  <option value="FGSSC_003">SSS 3</option>
                </select>
              </div>
            </div>
            {
                selectedCurrentClass.startsWith("FGSSC") && (
                    <div className="d-flex flex-column mt-4">
                    <label htmlFor="department" className="label">
                     Department
                    </label>
                    <select name="department" {...register("department")}>
                      <option value="" disabled>
                        Dept.
                      </option>
                      <option value="GEN">General</option>
                      <option value="SCI">Science</option>
                      <option value="ART">Art</option>
                      <option value="COM">commercial</option>
                    </select>
                  </div>
                )
            }
            <div className="mt-4 d-flex flex-column">
              <label htmlFor="parentPhone" className="label">
                Parent phone number
              </label>

              <input
                placeholder="Parent phone"
                name="parentPhone"
                type="tel"
                {...register("parentPhone")}
              />
              <p className="error-message">
                {errors.parentPhone?.message
                  ? `*${errors.parentPhone?.message}`
                  : ""}
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
      background-color: #f5f5f5;
      margin-left: 10px;
      padding-right: 5px;
      font-size: 14px;
      z-index: 99 !important;
      color: grey;
      width: fit-content;
      text-transform: capitalize;
    }
  }
  select {
    border-radius: 10px;
    padding: 14px 16px;
    background: transparent;
    border: 1px solid grey;
    outline: none;
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
    font-size: 13px;
    font-weight: 500;
  }
`;
