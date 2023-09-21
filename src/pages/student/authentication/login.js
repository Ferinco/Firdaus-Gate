import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../../components/custom/Button";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "../../../routes/paths";
import { PATH_PAGE } from "../../../routes/paths";
import { loginAuth } from "../../../services/authService";
import { toast } from "react-hot-toast";
import { useAppContext } from "../../../contexts/Context";
import { useAuth } from "../../../hooks/useAuth";

export default function StudentLogin() {
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
        navigate(from, { replace: true });
        setSuccess(true);
        toast.success("Logged in successfully");
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        toast.error(`${error.response?.data.message}`);
      });
  };

  return (
    <Wrapper>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7 left">
            <div className="left-image"></div>
          </div>
          <div className="col-md-5 right">
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
                  <div className="my-3">
                    <input
                      placeholder="Password"
                      name="password"
                      type="passowrd"
                      {...register("password")}
                    />
                  </div>
                </div>
                <div className="mt-4">
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
  }
  .container-fluid,
  .left {
    height: 100%;
  }
  .button {
      width: 100%;
    }
  @media (max-width: 768px) {
    .col-md-7.left {
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
