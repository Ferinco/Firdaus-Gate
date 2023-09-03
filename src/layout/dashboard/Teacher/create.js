import { Button } from "../../../components/custom/Button";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import {Header} from "../../../components/custom/Header"
import styled from "styled-components"
import axios from "axios";
export default function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { firstname, lastname, admissionNumber, email, gender } = data;
    axios.post(
      "https://64e27cacab003735881908fa.mockapi.io/students/studentsData",
      { firstname, lastname, admissionNumber, email, gender }
    );
    console.log(
data
    )
  };
  return (
    <div>

    <Wrapper className="container d-flex py-5 flex-column pl-lg-5">
      <div>
        <h5 style={{color: "blue" }}>Create Student Profile</h5>
        <h3>enter details here...</h3>
      </div>
  <div className="form-wrapper d-flex justify-content-center flex-column align-center ">

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
            name="lastname"
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
        <div className="my-3">
          <input
            placeholder="email address"
            name="email"
            type="email"
            {...register("email", { required: true })}
          />
        </div>
        <div className="my-3">
         <label htmlFor="gender" style={{fontWeight: "700"}}> Gender:</label>
         <select {
          ...register("gender", { required: true })
         } className="select px-2 py-1 ml-3">
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
        </div>
        <div className="mt-4">
          <Button blue type="submit">
            Create Profile
          </Button>
        </div>
      </form>
  </div>
    </Wrapper>
    </div>
  );
}
const Wrapper = styled.div`
max-width: 500px;
gap:20px;
.form-wrapper{
max-width: 700px;
.select{
  border-radius:5px;
  background-color: #f5f5f5;
  border:0 !important;
}
}
  input{
    border-radius: 10px;
  padding: 14px 16px;
  background-color: #f1f1f1;
  border: none;
  outline: none;
width: 300px;

  }
`
