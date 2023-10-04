import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../../components/custom/Button";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useAppContext } from "../../../contexts/Context";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuth } from "../../../hooks/useAuth";
import { PATH_PAGE } from "../../../routes/paths";

export default function TeacherLogin() {
  const { setPasswordVisibility, passwordVisibility } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const schema = yup.object({
    teacherId: yup.string().required("enter your teacher ID"),
    password: yup.string().required("enter your password"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      role: "teacher",
      password: "",
      teacherId: "",
    },
  });
  const onSubmit = async (data) => {
    setIsLoading(true);
    console.log(errors);
    await login(data)
      .then((res) => {
        // navigate(PATH_DASHBOARD.teacher.index);
        setIsLoading(false);
        toast.success("teacher login successful");
        console.log(res);
      })
      .catch((error) => {
        setIsLoading(false);
        if (error?.response?.data?.message) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Network error, try again later");
        }
      });
  };
  return (
    <Wrapper>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 left">
            <div className="left-image"></div>
          </div>
          <div className="col-md-4 right">
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
                    {...register("teacherId")}
                  />
                  <p className="error-message">{errors.teacherId?.message}</p>
                </div>
                <div className="my-3">
                  <div className="my-3">
                    <input
                      placeholder="Password"
                      name="password"
                      type="password"
                      {...register("password")}
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
                  <Button
                    blue
                    type="submit"
                    className="button"
                    disabled={isLoading === true}
                  >
                    {isLoading ? (
                      <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    ) : (
                      "Sign in"
                    )}
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
  .button {
    width: 100%;
  }
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
