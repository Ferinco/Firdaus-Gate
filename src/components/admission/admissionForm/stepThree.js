import React from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { api } from "../../../api/axios";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { usePaystackPayment } from "react-paystack";
import admission from "../../../redux/slices/admission";

StepThree.propTypes = {
  setStep: PropTypes.any,
};

export default function StepThree({ setStep }) {
  const { handleSubmit, register } = useForm({
    defaultValues: {},
  });

  const { studentInformation, parentInformation } = useSelector(
    (state) => state.admission
  );

  const config = {
    reference: new Date().getTime().toString(),
    email: parentInformation.parent.fatherEmailAddress,
    amount: 12000 * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: "pk_test_04dd699dfc4661f56ad39113ba41e9c5e9af44e5",
  };
  const initializePayment = usePaystackPayment(config);
  const onSuccess = (reference) => {
    console.log(reference);

    api
      .post("/admission/create", { payment: reference })
      .then(({ data }) => {
        console.log(data);
        setStep(4);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Something went wrong, try again later");
      });
  };

  const onClose = () => {
    console.log("closed");
  };
  console.log(studentInformation);

  return (
    <div>
      <div className="">
        <h4>Confirm & pay</h4>
        <p>Payment of Admission fee for Ifeanyi Lucky</p>
      </div>
      <div>
        <h5>Student Information</h5>

        <div className="row">
          <div className="col-6">
            <p>
              <strong> First Name</strong>
              <br />
              {studentInformation?.firstName}
            </p>
          </div>
          <div className="col-6">
            <p>
              <strong> Surname</strong>
              <br />
              {studentInformation?.surname}
            </p>
          </div>
          <div className="col-6">
            <p>
              <strong> Other Names</strong>
              <br />
              {studentInformation?.otherNames}
            </p>
          </div>
          <div className="col-6">
            <p>
              <strong> Date of Birth</strong>
              <br />
              {studentInformation?.dateOfBirth}
            </p>
          </div>
          <div className="col-6">
            <p>
              <strong> Gender</strong>
              <br />
              {studentInformation?.gender}
            </p>
          </div>
          <div className="col-6">
            <p>
              <strong> Present Class</strong>
              <br />
              {studentInformation?.presentClass}
            </p>
          </div>
          <div className="col-6">
            <p>
              <strong> Class of Interest</strong>
              <br />
              {studentInformation?.classOfInterest}
            </p>
          </div>
          <div className="col-6">
            <p>
              <strong> School of Interest</strong>
              <br />
              {studentInformation?.schoolOfInterest}
            </p>
          </div>
          <div className="col-6">
            <p>
              <strong> Day or Boarding</strong>
              <br />
              {studentInformation?.dayOrBoarding}
            </p>
          </div>
          <div className="col-6">
            <p>
              <strong> Phone Number</strong>
              <br />
              {studentInformation?.phone}
            </p>
          </div>
          <div className="col-6">
            <p>
              <strong> State of Origin </strong>
              <br />
              {studentInformation?.stateOfOrigin}
            </p>
          </div>
          <div className="col-6">
            <p>
              <strong> Nationality</strong>
              <br />
              {studentInformation?.nationality}
            </p>
          </div>
          <div className="col-6">
            <p>
              <strong> Local Government Area </strong>
              <br />
              {studentInformation?.localGovernmentArea}
            </p>
          </div>
          <div className="col-6">
            <p>
              <strong>Residential Address</strong>
              <br />
              {studentInformation?.residentialAddress}
            </p>
          </div>
        </div>
      </div>
      <div>
        <h5>Parent Information</h5>
      </div>
      <button
        className="w-100 btn btn-primary"
        type="button"
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        Continue
      </button>
    </div>
  );
}
