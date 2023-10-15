import React from "react";
import StepOne from "./stepOne";
import StepThree from "./stepThree";
import StepTwo from "./stepTwo";
import StepFour from "./stepFour";

export default function AdmissionFormSteps() {
  const [step, setStep] = React.useState(1);

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
}
