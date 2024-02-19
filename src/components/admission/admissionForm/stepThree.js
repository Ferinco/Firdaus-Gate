import React from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { api, supportApi } from "../../../api/axios";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { usePaystackPayment } from "react-paystack";
import admission from "../../../redux/slices/admission";
import styled from "styled-components";
import IconButton from "../../custom/IconButton";
import axios from "axios";
import { PaymentService } from "../../../services/paymentService";

StepThree.propTypes = {
  setStep: PropTypes.any,
};

export default function StepThree({ setStep }) {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm({
    defaultValues: {},
  });

  const { student, parent } = useSelector((state) => state.admission);
  console.log(student);

  const config = {
    reference: new Date().getTime().toString(),
    email: parent.parentEmailAddress,
    amount: 12000 * 100,
    publicKey: process.env.REACT_APP_PUBLIC_KEY,
    // currency: 'NGN',
  };

  const saveResponse = async (response, student, parent) => {
    try {
      const data = await PaymentService.postRefernce(
        response.reference,
        response.transaction,
        student.firstName,
        student.surname,
        student.gender,
        student.presentClass,
        student.classOfInterest,
        student.dayOrBoarding,
        parent.parentEmailAddress,
        parent.parentPhoneNumber
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  const initializePayment = usePaystackPayment(config);
  const onSuccess = (response) => {
    console.log(response);
    console.log(student)
    saveResponse(response, student, parent);
    navigate("/admission/admission-form/payment-success", { state: response });
  };
  

  const onClose = () => {
    console.log("closed");
  };
  const goBack = () => {
    setStep(2);
  };

  return (
    <Wrapper>
      <div className="header-section pb-2 d-flex flex-column justify-content-center align-items-center">
        <h4 className="title p-0 m-0">CONFIRM & PAY</h4>
        <p className="m-0">Confirm your Details and Proceed to Make Payment</p>
      </div>
      <div className="section">
        <p className="sub-header">Student's Information</p>

        <div className="row mt-3">
          <div className="col-6">
            <p>First Name</p>
            <p className="item">{student?.firstName}</p>
          </div>
          <div className="col-6">
            <p>Surname</p>
            <p className="item">{student?.surname}</p>
          </div>
          <div className="col-6 mt-2">
            <p>Other Names</p>
            <p className="item">{student?.middleName}</p>
          </div>
          <div className="col-6 mt-2">
            <p>Date of Birth</p>
            <p className="item">{student?.dateOfBirth}</p>
          </div>
          <div className="col-6 mt-2">
            <p>Gender</p>
            <p className="item">{student?.gender}</p>
          </div>
          <div className="col-6 mt-2">
            <p>Present Class</p>
            <p className="item">{student?.presentClass}</p>
          </div>
          <div className="col-6 mt-2">
            <p>Class of Interest</p>
            <p className="item">{student?.classOfInterest}</p>
          </div>
          <div className="col-6 mt-2">
            <p> School of Interest</p>
            <p className="item">{student?.schoolOfInterest}</p>
          </div>
          <div className="col-6 mt-2">
            <p> Day or Boarding</p>
            <p className="item">{student?.dayOrBoarding}</p>
          </div>
          <div className="col-6 mt-2">
            <p> Phone Number</p>
            <p className="item">{student?.phone}</p>
          </div>
          <div className="col-6 mt-2">
            <p> State of Origin </p>
            <p className="item">{student?.stateOfOrigin}</p>
          </div>
          <div className="col-6 mt-2">
            <p> Nationality</p>
            <p className="item">{student?.nationality}</p>
          </div>
          <div className="col-6 mt-2">
            <p> Local Government Area </p>
            <p className="item">{student?.localGovernmentArea}</p>
          </div>
          <div className="col-6 mt-2">
            <p>Residential Address</p>
            <p className="item">{student?.residentialAddress}</p>
          </div>
        </div>
      </div>
      <div className="section mt-4">
        <p className="sub-header">Parent's Information</p>
        <div className="row mt-3">
          <div className="col-6">
            <p> Parent Name</p>
            <p className="item">{parent?.parentName}</p>
          </div>
          <div className="col-6">
            <p> Parent's phone</p>
            <p className="item">{parent?.parentPhoneNumber}</p>
          </div>
          <div className="col-6 mt-2">
            <p> Parent's email</p>
            <p className="item">{parent?.parentEmailAddress}</p>
          </div>
          <div className="col-6 mt-2">
            <p> Occupation</p>
            <p className="item">\ {parent?.parentOccupation}</p>
          </div>
          <div className="col-6 mt-2">
            <p> Residential Address</p>
            <p className="item">{parent?.residentialAddress}</p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end align-items-center">
        <IconButton
          className=" mr-3"
          icon={"solar:arrow-left-line-duotone"}
          text={"Back"}
          onClick={() => goBack()}
          type="button"
        />
        <button
          className=" btn btn-primary m-0"
          type="button"
          onClick={() => {
            initializePayment(onSuccess, onClose);
          }}
        >
          Continue
        </button>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-image: url(/images/logo.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  /* filter: blur(10px); */
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(
      255,
      255,
      255,
      0.8
    ); /* Adjust the alpha value for transparency */
  }
  .header-section {
    border-bottom: 1px solid #0d6efd;
    position: relative;
  }
  .sub-header {
    background-color: #0d6efd;
    color: white;
    padding: 10px;
    position: relative;
    text-transform: capitalize !important;
    \ span {
      color: blue !important;
    }
    text-transform: uppercase;
  }
  .row {
    p {
      margin: 0;
      font-size: 15px;
      font-weight: 400;
    }
  }

  button {
    position: relative;
  }

  .item {
    font-weight: 500 !important;
    text-transform: capitalize;
  }
`;
