import React from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { api } from "../../../api/axios";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { usePaystackPayment } from "react-paystack";
import admission from "../../../redux/slices/admission";
import styled from "styled-components";

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
    email: parentInformation.parentEmailAddress,
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
    <Wrapper>
      <div className="header-section pb-2 d-flex flex-column justify-content-center align-items-center">
        <h4 className="title p-0 m-0">CONFIRM & PAY</h4>
        <p className="m-0">Payment of Admission fee for {studentInformation?.surname}{" "}{studentInformation?.surname}</p>
      </div>
      <div className="section">
        <h5 className="sub-header">Student Information</h5>

        <div className="row mt-3">
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
              {studentInformation?.middleName}
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
      <div className="section mt-4">
        <h5 className="sub-header">Parent Information</h5>
        <div className="row mt-3">
          <div className="col-6">
            <p>
              <strong> Parent Name</strong>
              <br />
              {parentInformation?.parentName}
            </p>
          </div>
          <div className="col-6">
            <p>
              <strong> Parent's phone</strong>
              <br />
              {parentInformation?.parentPhoneNumber}
            </p>
          </div>
          <div className="col-6">
            <p>
              <strong> Parent's email</strong>
              <br />
              {parentInformation?.parentEmailAddress}
            </p>
          </div>
          <div className="col-6">
            <p>
              <strong> Occupation</strong>
              <br />
              {parentInformation?.parentOccupation}
            </p>
          </div>
          <div className="col-6">
            <p>
              <strong> Residential Address</strong>
              <br />
              {parentInformation?.residentialAddress}
            </p>
          </div>
        </div>
      </div>
      <button
        className="w-100 btn btn-primary mt-4"
        type="button"
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        Continue
      </button>
    </Wrapper>
  );
}
const Wrapper = styled.div`
background-image: url(/images/logo.png);
background-repeat: no-repeat;
background-position: center;
background-size: contain;
/* filter: blur(10px); */
position:relative;
&:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8); /* Adjust the alpha value for transparency */
  }
.header-section{
border-bottom: 1px solid grey;
position: relative;
}
.sub-header{
  background-color: grey;
  color: white;
  padding: 10px;
  position: relative;
  span{
    color:blue !important;
  }
  text-transform: uppercase;
}
.row{
  p{
    color:grey;
    strong{
      color: black !important;
    }
  }
}
button{
  position: relative;
}
`


