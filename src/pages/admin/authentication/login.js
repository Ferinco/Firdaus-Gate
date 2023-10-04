import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { PATH_DASHBOARD, PATH_PAGE } from "../../../routes/paths";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../../../components/custom/Button";
export default function AdminLogin() {
  const { login } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      role: "admin",
    },
  });

  const onSubmit = async (values) => {
    try {
      setIsSubmitting(true);
      await login(values);
      toast.success("Admin login successful");
      navigate(PATH_DASHBOARD.admin.index);
    } catch (error) {
      setIsSubmitting(false);
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Network error, try again later");
      }
    }

    console.log(values);
  };
  return (
    <Wrapper className="d-flex justify-content-center">
      <div className="d-flex flex-column form-wrapper p-5">
        <div className="header d-flex flex-column">
          <div className="logo-img mb-2">
            <Link react-router-link to={PATH_PAGE.home}>
              <img src="/images/logo.png" />
            </Link>
          </div>
          <div>
            <h6>Admin Login</h6>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="my-2 d-flex flex-column">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input type="email" required aria-required {...register("email")} />
          </div>

          <div className="my-2 d-flex flex-column">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              required
              aria-required
              {...register("password")}
            />
          </div>
          <div className="mt-4">
            <Button
              blue
              type="submit"
              className="button"
              disabled={isSubmitting === true}
            >
              {isSubmitting ? (
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #f1f1f1;
  height: 100vh;
  align-items: center;
  .form-wrapper {
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 500px !important;
    z-index: 999;
    background-color: white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .header {
    justify-content: center;
    align-items: center;
  }
  .form {
    width: 100%;
  }
  .label {
    font-weight: 700;
    text-transform: capitalize;
  }
  button {
    width: 100%;
    border-radius: 10px;
  }
  input {
    border-radius: 10px;
    padding: 14px 16px;
    background: transparent;
    border: 1px solid grey;
    outline: none;
    width: 100%;
  }
  .logo-img {
    width: 70px;
    height: 70px;
    img {
      height: 100%;
      object-fit: cover;
      width: 100%;
      display: block;
    }
  }
`;
