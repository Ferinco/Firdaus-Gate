import { useForm } from "react-hook-form";
import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { studentInformation } from "../../../redux/slices/admission";
import IconButton from "../../custom/IconButton";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

StepOne.propTypes = {
  setStep: PropTypes.any,
};
const phoneRegEx =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const schema = yup.object({
  firstName: yup
    .string("First name should contain letters only")
    .required("First name is required"),
  surname: yup
    .string("Surname should contain letters only")
    .required("Surname is required"),
  middleName: yup.string("Middle name should contain letters only").optional(),
  dateOfBirth: yup
    .date("Date of birth is required")
    .required("Date of birth is required")
    .nullable("Date of birth is required"),
  gender: yup
    .string()
    .oneOf(["male", "female"], "Gender is required")
    .required("Gender is required"),
  phone: yup
    .string()
    .matches(phoneRegEx, "phone number is invalid")
    .required("phone number is required")
    .min(10, "phone number is invalid")
    .max(11, "phone number is invalid"),
  classOfInterest: yup
    .string()
    .oneOf(
      [
        "KG 1",
        "KG 2",
        "NURSERY 1",
        "NURSERY 2",
        "BAISC 1",
        "BASIC 2",
        "BASIC 3",
        "BASIC 4",
        "BASIC 5",
        "BASIC 6",
        "JSS 1",
        "JSS 2",
        "SSS 1",
        "SSS 2",
      ],
      "Class of interest is required"
    )
    .required("Class of interest is required"),
  presentClass: yup
    .string()
    .oneOf(
      [
        "KG 1",
        "KG 2",
        "NURSERY 1",
        "NURSERY 2",
        "BASIC 1",
        "BASIC 2",
        "BASIC 3",
        "BASIC 4",
        "BASIC 5",
        "BASIC 6",
        "JSS 1",
        "JSS 2",
        "SSS 1",
        "SSS 2",
      ],
      "Class of interest is required"
    )
    .required("Select your present class"),
  religion: yup.string(),
  residentialAddress: yup.string().required("Residential address is required"),
  dayOrBoarding: yup
    .string()
    .oneOf(["day", "boarding"], "This field is required"),
  schoolOfInterest: yup
    .string()
    .oneOf(
      ["nursery", "primary", "junior", "senior"],
      "Select your school of interest"
    ),
});

export default function StepOne({ setStep }) {
  const [studentPhoto, setStudentPhoto] = useState("");
  const dispatch = useDispatch();
  const { student } = useSelector((state) => state.admission);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    shouldUnregister: true,
    defaultValues: {
      firstName: student?.firstName,
      surname: student?.surname,
      middleName: student?.middleName,
      dateOfBirth: student?.dateOfBirth,
      presentClass: student?.presentClass,
      gender: student?.gender,
      phone: student?.phone,
      schoolOfInterest: student?.schoolOfInterest,
      classOfInterest: student?.classOfInterest,
      nationality: student?.nationality,
      stateOfOrigin: student?.stateOfOrigin,
      localGovernmentArea: student?.localGovernmentArea,
      religion: student?.religion,
      residentialAddress: student?.residentialAddress,
      dayOrBoarding: student?.dayOrBoarding,
      primarySchoolAttended: student?.primarySchoolAttended,
      secondarySchoolAttended: student?.primarySchoolAttended,
      birthCertificate: student?.birthCertificate,
      previousClassResult: student?.previousClassResult,
    },
  });

  const SelectedSchoolOfInterest = watch("schoolOfInterest");
  const handleStudentPhotoChange = (e) => {
    setStudentPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const onSave = (values) => {
    dispatch(
      studentInformation({
        ...values,
        dateOfBirth: values.dateOfBirth.toISOString(),
      })
    );
    setStep(2);
  };
  return (
    <Wrapper className="">
      <form className="" onSubmit={handleSubmit(onSave)}>
        <div className="row">
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">Student Photo</label>
              <input
                type="file"
                onChange={handleStudentPhotoChange}
                className="form-control"
                placeholder="student photo"
                accept="image/*"
              />
            </div>
            {studentPhoto && (
              <img
                src={studentPhoto}
                alt="alt"
                style={{
                  marginTop: "10px",
                  borderRadius: "50%",
                  height: "60px",
                  width: "60px",
                }}
              />
            )}
          </div>
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">
                Surname<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Surname"
                {...register("surname")}
              />
              <p className="error-message">
                {errors.surname?.message ? `${errors.surname?.message}` : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">
                First Name<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                {...register("firstName")}
              />
              <p className="error-message">
                {errors.firstName?.message
                  ? `${errors.firstName?.message}`
                  : ""}
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">Middle Name</label>
              <input
                type="text"
                className="form-control"
                {...register("middleName")}
                placeholder="middleName"
              />
              <p className="error-message">
                {errors.middleName?.message
                  ? `${errors.middleName?.message}`
                  : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">
                Date of Birth<span>*</span>
              </label>
              <input
                type="date"
                className="form-control"
                placeholder="Date of Birth"
                {...register("dateOfBirth")}
              />
              <p className="error-message">
                {errors.dateOfBirth?.message
                  ? `${errors.dateOfBirth?.message}`
                  : ""}
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">
                Present Class<span>*</span>
              </label>
              <select
                name="presentClass"
                {...register("presentClass")}
                className="form-select"
              >
                <option value="" disabled>
                  Present class
                </option>
                <option value="KG 1">KG 1</option>
                <option value="KG 2">KG 2</option>
                <option value="NURSERY 1">NURSERY 1</option>
                <option value="NURSERY 2">NURSERY 2</option>
                <option value="BASIC 1">BASIC 1</option>
                <option value="BASIC 2">BASIC 2</option>
                <option value="BASIC 3">BASIC 3</option>
                <option value="BASIC 4">BASIC 4</option>
                <option value="BASIC 5">BASIC 5</option>
                <option value="BASIC 6">BASIC 6</option>
                <option value="JSS 1">JSS 1</option>
                <option value="JSS 2">JSS 2</option>
                <option value="SSS 1">SSS 1</option>
                <option value="SSS 2">SSS 2</option>
              </select>
              <p className="error-message">
                {errors.presentClass?.message
                  ? `${errors.presentClass?.message}`
                  : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">
                Gender<span>*</span>
              </label>
              <select className="form-select" {...register("gender")}>
                <option value="" disabled>
                  -- select --
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <p className="error-message">
                {errors.gender?.message ? `${errors.gender?.message}` : ""}
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">
                Phone<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Phone"
                {...register("phone")}
              />
              <p className="error-message">
                {errors.phone?.message ? `${errors.phone?.message}` : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">
                School of Interest<span>*</span>
              </label>
              <select className="form-select" {...register("schoolOfInterest")}>
                <option value="" disabled>
                  School of Interest
                </option>
                <option value="nursery">NURSERY SCHOOL</option>
                <option value="primary">PRIMARY SCHOOL</option>
                <option value="junior">JUNIOR SECONDARY SCHOOL</option>
                <option value="senior">SENIOR SECONDARY SCHOOL</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">
                Class of Interest<span>*</span>
              </label>
              <select className="form-select" {...register("classOfInterest")}>
                <option value="" disabled>
                  Class of Interest
                </option>
                {SelectedSchoolOfInterest === "nursery" ? (
                  <>
                    <option value="KG 1">KG 1</option>
                    <option value="KG 2">KG 2</option>
                    <option value="NURSERY 1">NURSERY 1</option>
                    <option value="NURSERY 2">NURSERY 2</option>
                  </>
                ) : (
                  ""
                )}
                {SelectedSchoolOfInterest === "primary" ? (
                  <>
                    <option value="BASIC 1">BASIC 1</option>
                    <option value="BASIC 2">BASIC 2</option>
                    <option value="BASIC 3">BASIC 3</option>
                    <option value="BASIC 4">BASIC 4</option>
                    <option value="BASIC 5">BASIC 5</option>
                    <option value="BASIC 6">BASIC 6</option>
                  </>
                ) : (
                  ""
                )}
                {SelectedSchoolOfInterest === "junior" ? (
                  <>
                    <option value="JSS 1">JSS 1</option>
                    <option value="JSS 2">JSS 2</option>
                    {/* <option value="JSS 3">JSS 3</option> */}
                  </>
                ) : (
                  ""
                )}

                {SelectedSchoolOfInterest === "senior" ? (
                  <>
                    <option value="SSS 1">SSS 1</option>
                    <option value="SSS 2">SSS 2</option>
                    {/* <option value="SSS 3">SSS 3</option> */}
                  </>
                ) : (
                  ""
                )}
              </select>
              <p className="error-message">
                {errors.classOfInterest?.message
                  ? `${errors.classOfInterest?.message}`
                  : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">
                Nationality<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                {...register("nationality")}
                placeholder="Nationality"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">
                State of Origin<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                {...register("stateOfOrigin")}
                placeholder="State of Origin"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">
                Local Govt. Area<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                {...register("localGovernmentArea")}
                placeholder="Local Govt. Area"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">
                Religion<span>*</span>
              </label>
              <select className="form-select" {...register("religion")}>
                <option value="islam" disabled>
                  Islam
                </option>

                <option value="islam">Islam</option>
                <option value="christianity">Christianity</option>
              </select>
              <p className="error-message">
                {errors.religion?.message ? `${errors.religion?.message}` : ""}
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">
                Residential Address<span>*</span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Residential Address"
                {...register("residentialAddress")}
              />
              <p className="error-message">
                {errors.residentialAddress?.message
                  ? `${errors.residentialAddress?.message}`
                  : ""}
              </p>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">
                Do you want to be a Day or Boarding Student<span>*</span>
              </label>
              <select
                type="text"
                className="form-select"
                placeholder="Do you want to be a Day or Boarding Student"
                {...register("dayOrBoarding")}
              >
                <option value="" disabled>
                  -- select --
                </option>
                <option value="day">Day</option>
                <option value="boarding">Boarding</option>
              </select>
              <p className="error-message">
                {errors.dayOrBoarding?.message
                  ? `${errors.dayOrBoarding?.message}`
                  : ""}
              </p>
            </div>
          </div>
          -
        </div>{" "}
        {/* <button className="btn-primary btn w-100"> Next</button> */}
        <div className="d-flex justify-content-end">
          <IconButton
            className="btn-primary"
            icon={"solar:arrow-right-line-duotone"}
            text={"Next step"}
            iconRight
          />
        </div>
      </form>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  p {
    margin: 0 !important;
  }
  .form-label {
    font-weight: 500;
    font-size: 14px;
    color: grey;
    text-transform: capitalize;
    color: black;
    margin-bottom: -7px;
    span {
      color: red !important;
    }
  }
  input,
  option {
    outline: none !important;
    color: grey;
  }
  .error-message {
    color: orangered;
    margin-top: 7px;
    font-size: 13px;
    font-weight: 500;
  }
`;
