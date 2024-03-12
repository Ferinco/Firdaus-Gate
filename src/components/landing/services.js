import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { Button } from "../custom/Button";
import { Link } from "react-router-dom";
import { PATH_PAGE } from "../../routes/paths";
import { useEffect } from "react";

export default function Services() {
  //aos animation setup
  useEffect(() => {
    Aos.init({
      // Global settings:
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      offset: 120,
      delay: 0,
      duration: 400,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <Container className="py-5" data-aos="fade-up" data-aos-duration="5000">
      <div className="container d-flex py-5 align-items-center gap-5">
        <div className="left d-flex flex-column align-items-center">
          <h6 className="pre-header">join us</h6>
          <div className="image-wrapper d-flex flex-column gap-2 ">
            <div
              className=" image"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              data-aos-duration="1000"
            >
              <img src="https://res.cloudinary.com/duvwweuhj/image/upload/v1700698715/Firdaus/IMG-20230901-WA0005_wsy9ri.jpg" />
            </div>
            <div
              className=" image"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="100"
              data-aos-offset="0"
              data-aos-duration="1000"
            >
              <img src="https://res.cloudinary.com/duvwweuhj/image/upload/v1700698084/Firdaus/Screenshot_20220822-213231_1_echgsu.jpg" />
            </div>{" "}
            <div
              className=" image"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="400"
              data-aos-duration="1000"
              data-aos-offset="0"
            >
              <img src="https://res.cloudinary.com/duvwweuhj/image/upload/v1700698102/Firdaus/Screenshot_20221226-182747_1_rruqtm.jpg" />
            </div>{" "}
          </div>
        </div>
        <div className="right d-flex flex-column gap-3">
          <h6 className="pre-header">join us</h6>
          <h2 className="">The School for Everyone.</h2>
          <p>
            Firdaus-Gate Model Schools is an institution for all, we offer
            admission for students of different age amd classes. Enroll your
            child(ren) now and join this gret citadel of learning
          </p>
          <Link className="react-router-link" to={PATH_PAGE.admission}>
            <Button blue>Enroll Now</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background: linear-gradient(to right, #ffff, #f5f5f5, #f5f5f5);
  h2 {
    font-weight: 500 !important;
  }
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
      width: 500px;
      height: 130px;
      border-radius: 30px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      overflow: hidden !important;
      &:hover{
      img{
        scale: 1.05;
        transition: 0.5s !important;
      }
    }
      img {
        width: 100%;
        height: 100%;
        overflow: hidden;
        object-fit: cover;
        border-radius: 30px;
      }
      &:first-child {
        background-color: purple;
        margin-left: 10px;
      }
      &:nth-child(2) {
        background-color: blue;
        margin-left: 40px;
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
      font-size: 45px;
      font-weight: 800;
      @media (max-width: 768px) {
        font-weight: 600 !important;
      }
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
    .left {
      gap: 20px;
      h6 {
        display: flex;
      }
    }
    .image-wrapper {
      height: fit-content;
      .image {
        width: 320px;
        height: 150px;
        &:first-child {
          background-color: purple;
          margin-top: 20px;
        }
        &:nth-child(2) {
          background-color: blue;
          margin-top: 0;
        }
        &:last-child {
          display: none;
        }
      }
    }

    .right {
      text-align: center;
      justify-content: center;
      align-items: center;
      max-width: 90%;
      h6 {
        display: none;
      }
      h2 {
        font-size: 36px !important;
        font-weight: 600 !important;
      }
      p {
        font-size: 14px;
      }
    }
  }
`;
