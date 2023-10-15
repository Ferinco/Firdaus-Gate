import React from "react";
import { useSelector } from "react-redux";

export default function StepFour({ setStep }) {
  const admissionData = useSelector((state) => state.admission);
  const handleSubmit = () => {
    console.log(admissionData);
    setStep(1);
  };
  return (
    <div>
      <h1>Confirm details</h1>

      <button className="btn btn-primary w-100" onClick={handleSubmit}>
        Submit{" "}
      </button>
    </div>
  );
}
