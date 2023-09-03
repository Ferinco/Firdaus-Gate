import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Input from "../../components/custom/Input";
import { Button } from "../../components/custom/Button";
import { Icon } from "@iconify/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "../../routes/paths";
import { PATH_PAGE } from "../../routes/paths";
import toast, { Toaster } from "react-hot-toast";
import { useAppContext } from "../../Context";
import axios from "../../api/axios";
export default function Teacher() {
  const {setPasswordVisibility, passwordVisibility} = useAppContext()
  const navigate = useNavigate();
  const [teacherId, setTeacherId] = useState("");
  const [password, setPassword] = useState("");
  const teacherRef = useRef();
  const errorRef = useRef();
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const data = [teacherId, password];
  useEffect(() => {
    teacherRef.current.focus();
  }, []);
  useEffect(() => {
    setErrorMsg("");
  }, [teacherId, password]);
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(data)
    setPassword("");
    setTeacherId("");
    toast.success("login successful")
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
              <form onSubmit={handleSubmit}>
                <div className="my-3">
                  <input
                    placeholder="Teacher ID"
                    name="teacherId"
                    type="text"
                    ref={teacherRef}
                    onChange={(e) => setTeacherId(e.target.value)}
                    value={teacherId}
                    required
                  />
                </div>
                <div className="my-3">
                  <div className="my-3 d-flex flex-row password-field">
                    <input
                      placeholder="Password"
                      name="password"
                      type={passwordVisibility? "password" : "text"}
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      
                    />
                    <i onClick={()=>{
                      (setPasswordVisibility(!passwordVisibility))
                    }} className="eye-icon"><Icon icon="ph:eye-light" /></i>
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
    .password-field{
align-items: center;
.eye-icon{
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
      .errorMsg {
        font-size: 15px;
        padding-left: 7px;
      }
      width: 400px;
    }
  }
`;

// Anuoluwapo Famakinwa
