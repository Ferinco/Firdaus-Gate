import React from "react";
import styled from "styled-components";
import { Button } from "../custom/Button";

export default function LandingHero() {
  return (
    <Wrapper className="p-5">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="text-center my-5">
            <h1 className="display-3 fw-bolder">
              Firdaus-Gate Group of Schools
            </h1>
            <div className="mx-5 m-4">
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

      {/* HERO IMAGE SECTION */}

      <div className="HeroImageContainer">
        <div className="img_wrapper"></div>
        <div className="img_wrapper"></div>
        <div className="img_wrapper"></div>
        <div className="img_wrapper"></div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
    background: linear-gradient(1turn,hsla(0,0%,100%,.01),#fff 85%),radial-gradient(ellipse at top left,rgba(13,110,253,.5),transparent 50%),radial-gradient(ellipse at top right,rgba(255,228,132,.5),transparent 50%),radial-gradient(ellipse at center right,rgba(113,44,249,.5),transparent 50%),radial-gradient(ellipse at center left,rgba(254,51,132,.5),transparent 50%);
  .button-group {
    gap: 10px;
    justify-content: center !important;
    align-items: center;
  }
  .HeroImageContainer {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    .img_wrapper {
      height: 330px;
      width: 230px;
      background-color: purple;
      border-radius: 50rem;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      &:first-child {
        background-image: url("images/photo-4.png");
      }
      &:last-child {
        background-image: url("images/photo-1.png");
      }
      &:nth-child(2) {
        background-image: url("images/photo-3.png");
        margin-top: 5rem;
      }
      &:nth-child(3) {
        background-image: url("images/photo-2.png");
        margin-top: 5rem;
      }
      @media (max-width: 768px) {
        height: 300px;
        width: 200px;
        &:first-child,
        &:last-child {
          display: none;
        }
        &:nth-child(3),
        &:nth-child(2) {
          margin-top: 0;
        }
      }
    }
  }
`;
