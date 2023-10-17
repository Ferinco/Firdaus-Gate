import React from "react";
import StepOne from "./stepOne";
import StepThree from "./stepThree";
import StepTwo from "./stepTwo";
import StepFour from "./stepFour";
import styled from "styled-components";

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
  return (
    <Wrapper className="container">
      <div className="step-indicator d-flex justify-content-between align-items-center py-5">
        <h3 className="">{renderTitle()}</h3>
        <div>
          <span className="display-4">{step}</span>
          <span className="display-6" style={{ opacity: 0.4 }}>
            /4
          </span>
        </div>
      </div>
      <div className="row mx-auto justify-content-center">
        <div className="col-md-8 my-3">
          <div className="card">
            <div className="card-body">
              <div>{renderForm()}</div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
