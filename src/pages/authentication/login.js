import React from "react";
import styled from "styled-components";
import Input from "../../components/custom/Input";
import { Button } from "../../components/custom/Button";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
                <img src="/images/logo.png" />
              </div>
              <div className="text-center mb-4">
                <h3 className="fw-bolder">Hello Student!</h3>
                <p>Sign in to your dashbard.</p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="my-3">
                  <Input
                    placeholder="Email address / Admission number"
                    name="admissionNumber"
                    type="text"
                    {...register("admissionNumber", { required: true })}
                  />
                  {errors.admmissionNumber && errors.admmissionNumber.type === "required" && (
                    <p className="errorMsg" style={{ color: "red" }}>
                      Email is required.
                    </p>
                  )}
                </div>
                <div className="my-3">
                  <Input
                    placeholder="Password"
                    name="password"
                    type="password"
                    {...register("password", { required: true })}
                  />
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
      width: 400px;
    }
  }
`;

// Anuoluwapo Famakinwa
