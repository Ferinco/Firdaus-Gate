import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import IconButton from "../../custom/IconButton";
import { useDispatch } from "react-redux";
import { parentInformation } from "../../../redux/slices/admission";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

StepTwo.propTypes = {
  setStep: PropTypes.any,
};
const phoneRegEx = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const schema = yup.object({
  parentName: yup.string("First name should contain letters only").required("First name is required"),
  parentPhoneNumber: yup
  .string()
  .matches(phoneRegEx, "phone number is invalid")
  .required("phone number is required")
  .min(10, "phone number is invalid")
  .max(11, "phone number is invalid"),
  residentialAddress: yup.string().required("Residential address is required"),
  parentOccupation: yup.string().required("fill in your parent's occupation"),
  parentEmailAddress: yup.string().email("email must be a valid one!").required("parent email is required"),
})
export default function StepTwo({ setStep }) {
  const dispatch = useDispatch();
  const { handleSubmit, register, formState:{errors} } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      parentName: "",
      parentPhoneNumber: "",
      parentEmailAddress: "",
      parentOccupation: "",
      residentialAddress: "",
    },
  });
  const onSave = (values) => {
    setStep(3);
    dispatch(parentInformation(values));
  };
  return (
    <Wrapper className="">
      <h5>Parent's/Guardian Information</h5>
      <form className="row mt-4" onSubmit={handleSubmit(onSave)}>
        <div className="mb-3 col-md-8">
          <label className="form-label">
            Parent's Name <span>*</span>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g Mr Lawal"
            {...register("parentName")}
          />
          <p className="error-message">
            {errors.parentName?.message ? `${errors.parentName?.message}` : ""}
          </p>
        </div>
        <div className=" mb-3 col-md-8">
          <div>
            <label className="form-label">
              Parent's Phone Number <span>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              {...register("parentPhoneNumber")}
              placeholder="Parent's phone number"
            />
                          <p className="error-message">
                  {errors.parentPhoneNumber?.message
                    ? `${errors.parentPhoneNumber?.message}`
                    : ""}
                </p>
          </div>
        </div>{" "}
        <div className=" mb-3 col-md-8">
          <div>
            <label className="form-label">
              Parent's Email Address <span>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Email address"
              {...register("parentEmailAddress")}
            />
                          <p className="error-message">
                  {errors.parentEmailAddress?.message
                    ? `${errors.parentEmailAddress?.message}`
                    : ""}
                </p>
          </div>
        </div>
        <div className=" mb-3 col-md-8">
          <div>
            <label className="form-label">Parent's Occupation<span>*</span></label>
            <input
              type="text"
              className="form-control"
              placeholder="Parent Occupation"
              {...register("parentOccupation")}
            />
                          <p className="error-message">
                  {errors.parentOccupation?.message
                    ? `${errors.parentOccupation?.message}`
                    : ""}
                </p>
          </div>
        </div>
        <div className=" mb-3 col-md-8">
          <div>
            <label className="form-label">Residential Address<span>*</span></label>
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
