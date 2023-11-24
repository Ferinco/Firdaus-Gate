import styled from "styled-components";
import { Button } from "../custom/Button";
export default function AboutSection() {
  return (
    <Container className="py-5">
      <div className="container d-flex py-5 align-items-center">
        <div className="left d-flex flex-column align-items-center">
        <h6 className="pre-header">about us</h6>
        <div className="image-wrapper d-flex gap-2 ">
          <div className=" image"></div>
          <div className=" image"></div>
          <div className=" image"></div>
        </div>
        </div>
        <div className="right d-flex flex-column gap-3">
          <h6 className="pre-header">about us</h6>
          <h2>The place where you grow and learn</h2>
          <p>
         Firdaus-Gate model schools, established in 1999 has dedicated her resources to raise future leaders. We have since then provided students with skills, resources and enlightment to harness their potential and talents, aimed at making them the best they can be. Over the years, we have remained committed to the pursuit of our vision: to nuture students and build in them, proper <b>Iman(faith)</b>, making them responsible and be of good impact to the society.
          </p>
          <Button blue>Read more</Button>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
/* margin-top: 100px; */
    .container{
        gap: 100px;
        justify-content: space-between !important;
        @media screen and (max-width: 991px){
          flex-direction: column !important;
        }
    }
    .left{
      h6{
              display: none;
          }
      @media screen and (max-width: 991px){
          h6{
              display: flex;
          }
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
    @media screen and (max-width: 991px){
      text-align: center;
    justify-content: center;
    align-items: center;
    max-width: 90%;
    h2{
        font-size: 36px;
    }
    p {
      padding: 0 !important;
      margin: 0 !important;
    }
          h6{
              display: none;
          }
        }
    h2{
        font-size: 45px;
        font-weight: 800;
    }
    Button{
        width: fit-content;
    }
  }

@media (max-width: 768px) {
margin-top: 30px;
  .container {
    flex-direction: column;
    align-items: center;
    gap: 50px !important;
  }
  .left{
    gap: 20px;
        h6{
            display: flex;
        }
    }
  .image-wrapper {
    height: fit-content;
    .image {
      width: 150px;
      height: 150px;
      &:first-child {
        background-color: purple;
        margin-top: 0px;
      }
      &:last-child{
        display: none;
      }
    }
  }

}

`;
