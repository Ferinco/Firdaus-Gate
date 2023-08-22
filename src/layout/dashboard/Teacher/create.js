import { Button } from "../../../components/custom/Button";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { firstname, lastname, admissionNumber } = data;
    axios.post(
      "https://64e27cacab003735881908fa.mockapi.io/students/studentsData",
      { firstname, lastname, admissionNumber }
    );
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-3">
          <input
            placeholder="firstname"
            name="firstname"
            type="text"
            {...register("firstname", { required: true })}
          />
        </div>
        <div className="my-3">
          <input
            placeholder="lastname"
            name="firstname"
            type="text"
            {...register("lastname", { required: true })}
          />
        </div>
        <div className="my-3">
          <input
            placeholder="admission number"
            name="admissionNumber"
            type="number"
            {...register("admissionNumber", { required: true })}
          />
        </div>
        <div className="mt-4">
          <Button blue type="submit">
            Sign in
          </Button>
        </div>
      </form>
    </div>
  );
}
