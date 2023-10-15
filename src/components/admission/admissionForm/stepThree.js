import { useForm } from "react-hook-form";
import React from "react";
import PropTypes from "prop-types";

StepThree.propTypes = {
  setStep: PropTypes.any,
};
export default function StepThree({ setStep }) {
  const { handleSubmit, register } = useForm({
    defaultValues: {},
  });

  function onSave(values) {
    setStep(4);
  }
  return (
    <form onSubmit={handleSubmit(onSave)}>
      <div className="">
        <h2>Payment</h2>
      </div>

      <button className="w-100 btn btn-primary" type="submit">
        Continue
      </button>
    </form>
  );
}
