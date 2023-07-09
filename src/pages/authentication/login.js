import React from "react";
import styled from "styled-components";
import Input from "../../components/custom/Input";
import { Button } from "../../components/custom";

export default function Login() {
  return (
    <Wrapper>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 left">
            <div className="left-image" />
          </div>
          <div className="col-md-6 right">
            <div className="login-wrapper pl-sm-0 ">
              <div className="text-center mb-4">
                <h3 className="fw-bolder">Hello Again!</h3>
                <p>Welcome back you've been missed.</p>
              </div>
              <form>
                <div className="my-3">
                  <Input placeholder="Email address / Admission number" />
                </div>
                <div className="my-3">
                  <Input placeholder="Password" />
                </div>
                <div className="mt-4">
                  <Button>Sign in</Button>
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
      width: 400px;
    }
  }
`;

// Anuoluwapo Famakinwa
