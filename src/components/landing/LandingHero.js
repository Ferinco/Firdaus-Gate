import React from "react";
import styled from "styled-components";
import { Button } from "../custom";

export default function LandingHero() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="text-center my-5">
            <h1 className="display-3 fw-bolder">
              Firdaus Gate Group of Schools
            </h1>
            <div className="mx-5 m-4">
              <p className="text-muted mx-md-5">
                Lorem ipsum et dolor sit a met, loading for transactions dolor
                sit a met is wokring on the background dam killer baby
              </p>
            </div>
            <div className="button-group">
              <Button>Get started</Button>
              <span> </span>
              <Button variant="transparent">About us</Button>
            </div>
          </div>
        </div>
      </div>

      {/* HERO IMAGE SECTION */}

      <HeroImagesContainer>
        <div className="img_wrapper" />
        <div className="img_wrapper" />
        <div className="img_wrapper" />
        <div className="img_wrapper" />
      </HeroImagesContainer>
    </div>
  );
}

const HeroImagesContainer = styled.div`
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
`;
