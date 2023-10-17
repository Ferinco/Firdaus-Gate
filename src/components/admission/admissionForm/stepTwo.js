import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import IconButton from "../../custom/IconButton";
import { useDispatch } from "react-redux";
import { parentInformation } from "../../../redux/slices/admission";

StepTwo.propTypes = {
  setStep: PropTypes.any,
};
export default function StepTwo({ setStep }) {
  const dispatch = useDispatch();
  const { handleSubmit, register } = useForm({
    defaultValues: {
      parent: {
        parentName: "",
        motherPhoneNumber: "",
        motherEmailAddress: "",
        parentOccupation: "",
        fatherPhoneNumber: "",
        fatherEmailAddress: "",
        residentialAddress: "",
      },

      guardian: {
        guardianName: "",
        guardianProfession: "",
        guardianPhoneNumber: "",
        guardianEmailAddress: "",
        guardianResidentialAddress: "",
      },
    },
  });
  const onSave = (values) => {
    setStep(3);
    dispatch(parentInformation(values));
  };
  return (
    <div className="">
      <h5>Parent's/Guardian Information</h5>
      <form className="" onSubmit={handleSubmit(onSave)}>
        <div className="mb-3">
          <label className="form-label">Parent Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Parent Name"
            {...register("parent.parentName")}
          />
        </div>

        <div className="row">
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">Mother Phone Number</label>
              <input
                type="text"
                className="form-control"
                {...register("parent.motherPhoneNumber")}
                placeholder="Mother phone number"
              />
            </div>
          </div>{" "}
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">Mother Email Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Mother email address"
                {...register("parent.motherEmailAddress")}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">Father Phone Number</label>
              <input
                type="text"
                className="form-control"
                {...register("parent.fatherPhoneNumber")}
                placeholder="Father phone number"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">Father Email Address</label>
              <input
                type="text"
                className="form-control"
                {...register("parent.fatherEmailAddress")}
                placeholder="Father email address"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">Parent Occupation</label>
              <input
                type="text"
                className="form-control"
                placeholder="Parent Occupation"
                {...register("parent.parentOccupation")}
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-6 mb-3">
            <div>
              <label className="form-label">Residential Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Residential Address"
                {...register("parent.residentialAddress")}
              />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-end">
          <IconButton
            className=" mr-3"
            icon={"solar:arrow-left-line-duotone"}
            text={"Back"}
            onClick={() => setStep(1)}
            type="button"
          />
          <IconButton
            className="btn-primary"
            type="submit"
            text={"Next step"}
          />
        </div>
      </form>
    </div>
  );
}
