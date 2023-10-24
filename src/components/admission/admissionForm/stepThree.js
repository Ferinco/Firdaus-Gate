import { useForm } from "react-hook-form";
import React from "react";
import PropTypes from "prop-types";
import { api } from "../../../api/axios";
import { usePaystackPayment } from "react-paystack";

const config = {
  reference: new Date().getTime().toString(),
  email: "user@example.com",
  amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
  publicKey: "pk_test_04dd699dfc4661f56ad39113ba41e9c5e9af44e5",
};
StepThree.propTypes = {
  setStep: PropTypes.any,
};
export default function StepThree({ setStep }) {
  const { handleSubmit, register } = useForm({
    defaultValues: {},
  });
  const initializePayment = usePaystackPayment(config);
  function onSave() {
    initializePayment(handleSuccess, onClose);
  }
  const handleSuccess = async (reference) => {
    console.log(reference);
    await api
      .get("/admission/create")
      .then(({ data }) => {
        console.log(data);
        setStep(4);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onClose = () => {
    console.log("closed");
  };
  return (
    <form onSubmit={handleSubmit(onSave)}>
      <div className="">
        <h5>Confirm and pay</h5>
        <p>Payment of Admission fee for Ifeanyi Lucky</p>
      </div>

      <button
        className="w-100 btn btn-primary"
        type="button"
        onClick={() => {
          initializePayment(handleSuccess, onClose);
        }}
      >
        Continue
      </button>
    </form>
  );
}
