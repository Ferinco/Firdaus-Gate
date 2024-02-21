import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../../components/custom/Button";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { PATH_PAGE } from "../../../routes/paths";
import { toast } from "react-hot-toast";
import { useAuth } from "../../../hooks/useAuth";
import { Helmet } from "react-helmet";
import { useAppContext } from "../../../contexts/Context";
import { Icon } from "@iconify/react";

export default function StudentLogin() {
  const { setPasswordVisibility, passwordVisibility } = useAppContext();
  const [success, setSuccess] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      admissionNumber: "",
      password: "",
      role: "student",
    },
  });

  {
    /* form submission */
  }
  console.log(from);
  const onSubmit = async (data) => {
    setIsLoading(true);
    console.log(data);
    await login(data)
      .then((res) => {
        console.log(res);
        setIsLoading(false);
        setSuccess(true);
        toast.success("Logged in successfully");
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
      <Helmet>
        <title>Login | FGMS</title>
        <meta
          name="description"
          content="FGMS Student Portal - Firdaus-Gate Model Schools student portal is available to all newly admitted (fresh) and returning students. Kindly follow the link to sign in to your portal."
        />

        <meta
          name="keywords"
          content="student, pupil, portal, login, sign im, sign, firdaus login, firdaus-gate"
        />
      </Helmet>
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
                <h3 className="fw-bolder">Hello Student!</h3>
                <p>Sign in to your dashboard.</p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="my-3">
                  <input
                    placeholder="Admission number"
                    name="admissionNumber"
                    type="text"
                    {...register("admissionNumber")}
                  />
                </div>
                <div className="my-3">
                  <div className="my-3 password-field">
                    <input
                      placeholder="Password"
                      name="password"
                      type={passwordVisibility === true ? "text" : "password"}
                      {...register("password")}
                    />
                    <i
                      onClick={() => {
                        setPasswordVisibility(!passwordVisibility);
                      }}
                      className="eye-icon"
                    >
                      <Icon
                        icon={
                          passwordVisibility === false
                            ? "fluent:eye-off-24-filled"
                            : "iconoir:eye-solid"
                        }
                        className="icon"
                      />
                    </i>
                    <p className="error-message">{errors.password?.message}</p>
                  </div>
                  <div className="action d-flex flex-row justify-content-end">
                    <Link className="m-0">Forgot password?</Link>
                  </div>
                </div>
                <div className="">
                  <Button
                    blue
                    type="submit"
                    className="button"
                    disabled={loading === true}
                  >
                    {loading ? (
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
  .row {
    height: 95% !important;
    align-items: center;
    .password-field {
      align-items: center;
      .eye-icon {
        margin-left: -30px;
        font-size: 15px;
        cursor: pointer;
        .icon {
          font-size: 20px !important;
        }
      }
    }
  }
  .container-fluid,
  .left {
    height: 100%;
  }
  .button {
    width: 100%;
  }
  @media (max-width: 768px) {
    .col-md-8.left {
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
        .spinner-border {
          width: 25px;
          height: 25px;
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
      .errorMsg {
        font-size: 15px;
        padding-left: 7px;
      }
      width: 400px;
    }
  }
`;
