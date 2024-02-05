import React from "react";
import { useSelector } from "react-redux";

export default function StepFour({ setStep }) {
  const admissionData = useSelector((state) => state.admission);

  return (
    <div>
      <h4 className="py-3">Admission Confirmation</h4>

      <p>
        We've received your admission application and payment. Thank you for
        choosing Firdaus Gate Model Schools. Your application is now under
        review.
      </p>
      <ul>
        <li>Application ID: [Your Application ID]</li>
        <li>Payment Confirmation: [Payment Confirmation Number]</li>
        <li>Program: [Program/Admission Type]</li>
      </ul>

      <p>Expect updates via email or phone. We're excited to have you apply.</p>

      <div className="py-4">
        <button>Download Receipt</button>
      </div>
    </div>
  );
}
