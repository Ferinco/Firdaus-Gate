import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../custom/Button";


export default function LandingHero() {


  return (
    <Wrapper className="">
     <div className="container py-5">
     <div className="row">
        <div className="col-md-6 d-flex ">
          <div className="my-5 d-flex flex-column gap-3"> 
            <h1 className="display-3 fw-bolder">
              Firdaus-Gate Group of Schools
            </h1>
            <div className="">
              <p className="">
Stiil in progress we will update the about and the school's info later...
this part should contain a short intro on the school's mission and some other related things.....
              </p>
            </div>
            <div className="button-group d-flex flex-row">
              <Button blue>Get started</Button>
              <span> </span>
              <Button white>About us</Button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="image">

          </div>
        </div>
      </div>
     </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
background: linear-gradient(1turn, hsla(0, 0%, 100%, 0.01), #fff 85%),
    radial-gradient(
      ellipse at top left,
      rgba(13, 110, 253, 0.5),
      transparent 50%
    ),
    radial-gradient(
      ellipse at top right,
      rgba(255, 228, 132, 0.5),
      transparent 50%
    ),
    radial-gradient(
      ellipse at center right,
      rgba(113, 44, 249, 0.5),
      transparent 50%
    ),
    radial-gradient(
      ellipse at center left,
      rgba(254, 51, 132, 0.5),
      transparent 50%
    );
height: 90vh;
.row{
  justify-content: space-between;
align-items: center;

}
.container{
  height: 100%;
  display: flex;
justify-content: center;
}

p{
  font-size: 17px;
}
justify-content: left;
align-items: start;
text-align: left;
  .button-group {
    gap: 10px;
    justify-content: start !important;
    align-items: left;
  }
  .image{
    max-width: 400px;
    height:500px;
    border:1px solid red;
    border-radius: 30px;
  }
`;
