import { useForm } from "react-hook-form";
import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { studentInformation } from "../../../redux/slices/admission";
import IconButton from "../../custom/IconButton";

StepOne.propTypes = {
  setStep: PropTypes.any,
};
export default function StepOne({ setStep }) {
  const [studentPhoto, setStudentPhoto] = React.useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      surname: "",
      otherNames: "",
      dateOfBirth: "",
      presentClass: "",
      gender: "",
      phone: "",
      schoolOfInterest: "",
      classOfInterest: "",
      nationality: "",
      stateOfOrigin: "",
      localGovernmentArea: "",
      religion: "",
      residentialAddress: "",
      dayOrBoarding: "",
      primarySchoolAttended: "",
      secondarySchoolAttended: "",
      birthCertificate: "",
      previousClassResult: "",
    },
  });

  const handleStudentPhotoChange = (e) => {
    setStudentPhoto(URL.createObjectURL(e.target.files[0]));
  };

  const onSave = (values) => {
    dispatch(studentInformation(values));
    setStep(2);
  };
  return (
    <div className="">
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
              <label className="form-label">Surname</label>
              <input
                type="text"
                className="form-control"
                placeholder="Surname"
                {...register("surname")}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                {...register("surname")}
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">Other Names</label>
              <input
                type="text"
                className="form-control"
                {...register("otherNames")}
                placeholder="Other Names"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">Date of Birth</label>
              <input
                type="date"
                className="form-control"
                placeholder="Date of Birth"
                {...register("dateOfBirth")}
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">Present Class</label>
              <input
                type="text"
                className="form-control"
                {...register("presentClass")}
                placeholder="Present Class"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">Gender</label>
              <select className="form-select" {...register("gender")}>
                <option value="" disabled>
                  -- select --
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                placeholder="Phone"
                {...register("phone")}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">School of Interest</label>
              <input
                type="text"
                className="form-control"
                placeholder="School of interest"
                {...register("schoolOfInterest")}
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">Class of Interest</label>
              <input
                type="text"
                className="form-control"
                placeholder="Class of interest"
                {...register("classOfInterest")}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">Nationality</label>
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
              <label className="form-label">State of Origin</label>
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
              <label className="form-label">Local Govt. Area</label>
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
              <label className="form-label">Religion</label>
              <input
                type="text"
                className="form-control"
                {...register("religion")}
                placeholder="Religion"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">Residential Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Residential Address"
                {...register("residentialAddress")}
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">
                Do you want to be a Day or Boarding Student
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
    </div>
  );
}
