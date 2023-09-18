import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { PATH_DASHBOARD, PATH_PAGE } from "../../../routes/paths";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function AdminLogin() {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      role: "admin",
      admissionNumber: null,
    },
  });

  const onSubmit = async (values) => {
    try {
      setIsLoading(true);
      await login(values);
      setIsLoading(false);
      toast.success("Admin login successful");
      navigate(PATH_DASHBOARD.admin.index);
    } catch (error) {
      setIsLoading(false);
      toast.error(error.response.data.message);
      console.error(error);
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
            <h4>Admin Login</h4>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-2 d-flex flex-column">
            <label htmlFor="email" className="label">
              email
            </label>
            <input type="email" required aria-required {...register("email")} />
          </div>

          <div className="my-2 d-flex flex-column">
            <label htmlFor="password" className="label">
              password
            </label>
            <input
              type="password"
              required
              aria-required
              {...register("password")}
            />
          </div>
          <div>
            <button type="submit" disabled={isLoading}>
              Login
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border: 1px solid red;
  height: 100vh;
  align-items: center;
  .form-wrapper {
    border: 1px solid green;
    justify-content: center;
    align-items: center;
    height: 500px;
  }
  .label {
    font-weight: 500;
    margin-bottom: -10px !important;
    background-color: white;
    margin-left: 10px;
    padding-right: 5px;
    font-size: 14px;
    z-index: 999;
    color: grey;
    width: fit-content;
    text-transform: capitalize;
  }
  input {
    border-radius: 10px;
    padding: 14px 16px;
    background: transparent;
    border: 1px solid grey;
    outline: none;
    width: 100%;
  }
`;
