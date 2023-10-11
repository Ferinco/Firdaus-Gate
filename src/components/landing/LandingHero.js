import React from "react";
import styled from "styled-components";
import { Button } from "../custom/Button";

export default function LandingHero() {
  return (
    <Wrapper className="p-5">
      <div className="row">
        <div className="col-md-6">
          <div className="text-center my-5">
            <h1 className="display-3 fw-bolder">
              Firdaus-Gate Group of Schools
            </h1>
            <div className="">
              <p className="text-muted mx-md-5">
Stiil in progress we will update the about and the school's info later...
oh, dem killa baby frfr!
              </p>
            </div>
            <div className="button-group d-flex flex-row">
              <Button blue>Get started</Button>
              <span> </span>
              <Button white>About us</Button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
align-items: left;
text-align: left;
  .button-group {
    gap: 10px;
    justify-content: center !important;
    align-items: center;
  }
`;
