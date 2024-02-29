import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
export default function CheckAdmission() {
  const location = useLocation();
  const {
    firstName,
    classOfInterest,
    surname,
    parentEmailAddress,
    reference,
    transaction,
    parentPhoneNumber,
    gender,
    presentClass,
  } = location.state;

  console.log(firstName);
  return (
    <Wrapper className="container py-5">
      <div className="content-div">
        <div className="top-div p-2 w-100 d-flex flex-row mt-4 align-items-center gap-1 p-1">
          <p className="m-0">
            Your admission form has been successfully submitted to the school
            management
          </p>
        </div>
        <div className="row mt-4">
          <div className="col-md-6 py-2 px-4 d-flex flex-column">
            <p>First Name</p>
            <h6>{firstName}</h6>
          </div>
          <div className="col-md-6 py-2 px-4 d-flex flex-column">
            <p>Surname</p>
            <h6>{surname}</h6>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6 py-2 px-4 d-flex flex-column">
            <p>Parent Phone No.</p>
            <h6>{parentPhoneNumber}</h6>
          </div>
          <div className="col-md-6 py-2 px-4 d-flex flex-column">
            <p>Parent Email</p>
            <h6>{parentEmailAddress}</h6>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6 py-2 px-4 d-flex flex-column">
            <p>Present Class</p>
            <h6>{presentClass}</h6>
          </div>
          <div className="col-md-6 py-2 px-4 d-flex flex-column">
            <p>Class Applied For</p>
            <h6>{classOfInterest}</h6>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6 py-2 px-4 d-flex flex-column">
            <p>Reference ID</p>
            <h6>{reference}</h6>
          </div>
          <div className="col-md-6 py-2 px-4 d-flex flex-column">
            <p>Transaction ID</p>
            <h6>{transaction}</h6>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6 py-2 px-4 d-flex flex-column ">
            <p>Admission Status</p>
          </div>
          <div className="col-md-6 py-2 px-4 d-flex flex-column">
            <button disabled className="px-2 py-1">
              Approved
            </button>
          </div>
        </div>
        <div className="end-div p-2 w-100 d-flex flex-row mt-4 align-items-center gap-1 p-1">
          <Icon icon="lets-icons:info-alt-light" />

          <p>Your admission has been aproved</p>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .row mt-4 {
    border-collapse: collapse !important;
  }
  p,
  h6 {
    margin: 0 !important;
  }
  p {
    font-size: 14px;
  }
  h6 {
    text-transform: capitalize;
    font-weight: 500 !important;
  }
  .end-div,
  .top-div {
    position: relative;
    height: 50px;
    background-color: #fbfbac;
    padding: 8px !important;
    p {
      font-size: 12px;
    }
  }
  button {
    font-size: 12px;
    color: green;
    font-weight: 600;
    width: fit-content;
    border: 0 !important;
    background-color: #9afd9a;
    border-radius: 10px;
  }
  .content-div {
    background-image: url(/images/logo.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    position: relative;
    background-color: #f1f1f1;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(255, 255, 255, 0.8);
      
    }
  }
`;
