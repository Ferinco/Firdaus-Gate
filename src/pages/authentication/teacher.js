import React from "react";
import styled from "styled-components";
import Input from "../../components/custom/Input";
import { Button } from "../../components/custom/Button";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"
import { PATH_DASHBOARD } from "../../routes/paths"
import { PATH_PAGE } from "../../routes/paths"
export default function Teacher(){
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log(errors);
   return navigate(PATH_DASHBOARD.student.index)
  };
  return (
    <Wrapper>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 left">
            <div className="left-image"></div>
          </div>
          <div className="col-md-6 right">
            <div className="login-wrapper pl-sm-0 d-flex flex-column">
              <div className="logo-img mb-2">
              <Link react-router-link to={PATH_PAGE.home}>
          <img src="/images/logo.png" />

        </Link>
              </div>
              <div className="text-center mb-4">
                <h3 className="fw-bolder">Welcome back!</h3>
                <p>You are a world class teacher.</p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="my-3">
                  
                    <input
      placeholder="Teacher ID"
      name="teacherId"
      type="text"
      // {...register("teacherId", {
      //   required: 'Admission number is required',
      //   validate: value => value === '1908112' || 'Admission number is incorrect'
      // })}
    />
    {/* {errors.admissionNumber && (
      <p className="errorMsg" style={{ color: "red" }}>
        {errors.admissionNumber.message}
      </p>
    )} */}
                </div>
                <div className="my-3">
                <div className="my-3">
                <input
      placeholder="Password"
      name="password"
      type="passowrd"
      // {...register("password", {
      //   required: 'Input your password',
      //   validate: value => value === 'Ismail360' || 'incorrect password'
      // })}
    />
    {/* {errors.password && (
      <p className="errorMsg" style={{ color: "red" }}>
        {errors.password.message}
      </p>
    )} */}
                </div>
                </div>
                <div className="mt-4">
                  <Button blue type="submit">
                    Sign in
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;

  .row {
    height: 95% !important;
    align-items: center;
  }
  .container-fluid,
  .left {
    height: 100%;
  }
  @media (max-width: 768px) {
    .col-md-6.left {
      display: none;
    }
  }

  .left-image {
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)),
      url(/images/photo-3.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-top: 15px;
    min-height: 100%;
    width: 100%;

    border-radius: 20px;
  }
  .right {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: space-around;
    .login-wrapper {
      .logo-img {
        height: 70px;
        width: 70px;
        display: flex;
        justify-content: center;
        justify-self: center;
        margin: auto;
        img {
          display: block;
          height: 100%;
          width: 100%;
          object-fit: cover;
          overflow: hidden;
        }
      }
      input{
        border-radius: 10px;
  padding: 14px 16px;
  background-color: #f1f1f1;
  border: none;
  outline: none;
  width: 100%;
      }
      .errorMsg{
        font-size: 15px;
        padding-left:7px;
      }
      width: 400px;
    }
  }
`;

// Anuoluwapo Famakinwa
