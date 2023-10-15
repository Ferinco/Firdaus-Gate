import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import IconButton from "../../custom/IconButton";

StepTwo.propTypes = {
  setStep: PropTypes.any,
};
export default function StepTwo({ setStep }) {
  const { handleSubmit, register } = useForm({
    defaultValues: {},
  });
  const onSave = (values) => {
    setStep(3);
  };
  return (
    <form onSubmit={handleSubmit(onSave)}>
      <div className="">
        <h2>Step two2 form</h2>

        <div className="d-flex justify-content-between">
          <IconButton
            className="btn-secondary"
            icon={"solar:arrow-left-line-duotone"}
            text={"Back"}
            onClick={() => setStep(1)}
            type="button"
          />
          <IconButton
            className="btn-primary"
            type="submit"
            text={"Next step"}
          />
        </div>
      </div>
    </form>
  );
}
