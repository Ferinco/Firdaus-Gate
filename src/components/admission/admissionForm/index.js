import React, { useState } from "react";
import StepOne from "./stepOne";
import StepThree from "./stepThree";
import StepTwo from "./stepTwo";
import StepFour from "./stepFour";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PATH_PAGE } from "../../../routes/paths";

export default function AdmissionFormSteps() {
  const [step, setStep] = React.useState(1);
  const renderForm = () => {
    switch (step) {
      case 1:
        return <StepOne setStep={setStep} />;
      case 2:
        return <StepTwo setStep={setStep} />;
      case 3:
        return <StepThree setStep={setStep} />;
      case 4:
        return <StepFour setStep={setStep} />;
      default:
        return <StepOne />;
    }
  };
  const renderTitle = () => {
    switch (step) {
      case 1:
        return "Student Information";
      case 2:
        return "Parent Information";
      case 3:
        return "Confirm and Pay";
      default:
        return "Student Information";
    }
  };
  const renderSubTitle = () => {
    switch (step) {
      case 1:
        return "Inputs with * are required";
      case 2:
        return "Inputs with * are required";
      case 3:
        return "h;hiorhwo'rweo";
      default:
        return "Student Information";
    }
  };
  const [overlay, setOverlay] = useState(false);
  function ConfirmExit() {
    setOverlay(true);
  }
  return (
    <Wrapper className="d-flex flex-column pb-3 ">
      <div className="header d-flex flex-row justify-content-start align-items-center px-3">
        <Link
          className="react-router-link"
          onClick={() => {
            ConfirmExit();
          }}
        >
          home
        </Link>
      </div>
      <div className="container ">
        <div className="step-indicator d-flex justify-content-between align-items-center py-5">
          <div className="d-flex flex-column">
          <h3 className="m-0 pl-2">{renderTitle()}</h3>
          <p className="m-0 pl-2">{renderSubTitle()}</p>
          </div>
          <div>
            <span className="display-4">{step}</span>
            <span className="display-6" style={{ opacity: 0.4 }}>
              /4
            </span>
          </div>
        </div>
        <div className="row mx-auto justify-content-center">
          <div className="w-100">
            <div className="card">
              <div className="card-body">
                <div>{renderForm()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {overlay ? (
        <div className="overlay d-flex justify-content-center align-items-center">
          <div className="overlay-options p-3">
            <p>Are you sure you want to stop filling the application form?</p>
            <div className=" buttons d-flex gap-3">
              <button
                className="left"
                onClick={() => {
                  setOverlay(false);
                }}
              >
                <Link className="react-router-link" to={PATH_PAGE.admission}>
                  yes
                </Link>
              </button>
              <button
                className="right"
                onClick={() => {
                  setOverlay(false);
                }}
              >
                no
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
.step-indicator{
p{
color:red;
}
}
  .header {
    height: 50px !important;
    color: blue;
    text-decoration: underline;
  }
  .overlay {
    width: 75% !important;
    height: 50px !important;
    position: absolute !important;
    height: 100vh !important;
    z-index: 999;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(2px);
    position: fixed;
    top: 0;
    right: 0;
    .overlay-options {
      border-radius: 10px;
    }
  }
`;
