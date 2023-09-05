import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Input from "../../components/custom/Input";
import { Button } from "../../components/custom/Button";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "../../routes/paths";
import { PATH_PAGE } from "../../routes/paths";
import toast, { Toaster } from "react-hot-toast";
import { useAppContext } from "../../Context";
import axios from "../../api/axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
export default function Teacher() {
  const { setPasswordVisibility, passwordVisibility } = useAppContext();
  // const [success, setSuccess] = useState(false);
  // const [errorMsg, setErrorMsg] = useState("");
  const schema = yup.object({
    teacherId: yup.number().required("enter your ID"),
    password: yup.string().required("enter your password"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  function onSubmit(data) {
    // const {teacherId, password} = data;
    console.log(data);
    console.log(errors);
  }
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
                    type="number"
                    // register={{ ...register("teacherId") }}
                    register={{...register("teacherId")}}
                  />
                  <p className="error-message">{errors.teacherId?.message}</p>
                </div>
                <div className="my-3">
                  <div className="my-3">
                    <input
                      placeholder="Password"
                      name="password"
                      type={passwordVisibility ? "password" : "text"}
                      register={{ ...register("password") }}
                    />
                    {/* <i
                      onClick={() => {
                        setPasswordVisibility(!passwordVisibility);
                      }}
                      className="eye-icon"
                    >
                      <Icon icon="ph:eye-light" />
                    </i> */}
                    <p className="error-message">{errors.password?.message}</p>
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
    .password-field {
      align-items: center;
      .eye-icon {
        margin-left: -25px;
        font-size: 15px;
      }
    }
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
      input {
        border-radius: 10px;
        padding: 14px 16px;
        background-color: #f1f1f1;
        border: none;
        outline: none;
        width: 100%;
      }
      .error-message {
        color: orangered;
        padding-left: 7px;
        font-size: 14px;
        font-weight: 500;
      }
      width: 400px;
    }
  }
`;

// Anuoluwapo Famakinwa
