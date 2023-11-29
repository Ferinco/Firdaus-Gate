import styled from "styled-components";
import { Button } from "../custom/Button";

export default function Services() {
  return (
    <Container className="py-5">
      <div className="container d-flex py-5 align-items-center gap-5">
        <div className="left d-flex flex-column align-items-center">
        <h6 className="pre-header">join us</h6>
          <div className="image-wrapper d-flex gap-2 ">
          <div className=" image"></div>
          <div className=" image"></div>
          <div className=" image"></div>
        </div>
        </div>
        <div className="right d-flex flex-column gap-3">
        <h6 className="pre-header">join us</h6>
          <h2 className="">The School for Everyone.</h2>
          <p>
Firdaus-Gate Model Schools is an institution for all, we offer admission for students of different age amd classes. Enroll your child(ren) now and join this gret citadel of learning
          </p>
          <Button blue>Enroll Now</Button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
background: white !important;
  .container {
    flex-direction: row-reverse !important;
    gap: 100px;
    justify-content: space-between !important;
  }
  .left {
    h6 {
      display: none;
      
    }
  }
  .image-wrapper {
    height: 400px;
    width: auto;
    flex-wrap: no-wrap;
    .image {
      width: 150px;
      height: 100%;
      border-radius: 30px;
      &:first-child {
        background-color: purple;
        margin-top: 10px;
      }
      &:nth-child(2) {
        background-color: blue;
        margin-top: 40px;
      }
      &:nth-child(3) {
        background-color: black;
      }
    }
  }
  .right {
    padding-right: 10px;
    max-width: 450px;
    color: black !important;
    h2 {
      font-size: 45px ;
      font-weight: 800;
    }
    Button {
      width: fit-content;
    }

  }

  @media (max-width: 768px) {
  .container {
    flex-direction: column !important;
    align-items: center;
    gap: 50px !important;
  }
  .left{
    gap: 20px;
        h6{
            display: flex ;
        }
    }
  .image-wrapper {
    height: fit-content;
    .image {
      width: 150px;
      height: 150px;
      &:first-child {
        background-color: purple;
        margin-top: 20px;
      }
      &:nth-child(2){
        background-color: blue;
        margin-top: 0;
      }
      &:last-child{
        display: none;
      }
    }
  }

  .right {
    text-align: center;
    justify-content: center;
    align-items: center;
    max-width: 90%;
    h6{
        display: none;
    }
    h2 {
      font-size: 36px !important;
    }
    p {
      font-size: 14px;
    }
  }
}
`;
