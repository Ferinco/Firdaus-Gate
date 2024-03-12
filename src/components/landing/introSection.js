import styled from "styled-components";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Button } from "../custom";
export default function IntroSection() {
  useEffect(() => {
    Aos.init({
      // Global settings:
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      offset: 120,
      delay: 100,
      duration: 1000,
      easing: "ease",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <Container className="py-5" data-aos="fade-up" data-aos-duration="1000">
      <div className="container d-flex align-items-center flex-column gap-5">
        <div className="header d-flex flex-column justify-content-center align-items-center">
          <h6 className="pre-header">what we offer</h6>
          <h2>Some of Our Core Services</h2>
        </div>
        <div className="div d-flex justify-content-between p-0 m-0 gap-3">
          <div className="item-div p-3">
            <div className="icon-div">
              <Icon className="icon" icon="ion:bed" />
            </div>
            <h6>Day and Boarding</h6>
            <p>
              {" "}
              Providing a nurturing environment for both day students and
              boarders.
            </p>
          </div>
          <div className="item-div p-3">
            <div className="icon-div">
              <Icon className="icon" icon="mdi:wan" />
            </div>
            <h6>Tech Driven</h6>
            <p>
              {" "}
              Integrating cutting-edge technology to enhance learning
              experiences and innovation.
            </p>
          </div>
          <div className="item-div p-3">
            <div className="icon-div">
              <Icon className="icon" icon="mdi:islam" />
            </div>
            <h6>Islam Studies</h6>
            <p>
              Fostering religious growth through comprehensive Islamic education
              programs.
            </p>
          </div>
          <div className="item-div p-3">
            <div className="icon-div">
              <Icon className="icon" icon="fa6-solid:people-line" />
            </div>
            <h6>Social</h6>
            <p>
              Cultivating a vibrant community through diverse extracurricular
              and social initiatives.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  h2 {
    max-width: 600px;
    font-size: 45px;
    text-align: center !important;
    font-weight: 800;

  }
  h6 {
    margin-top: 20px;
  }
  .icon-div {
    width: fit-content;
    padding: 5px 7px;
    border-radius: 5px;
    background-color: blue;
    .icon {
      font-size: 30px;
      color: white;
    }
  }
  .item-div {
    background-color: white;
    position: relative;
    z-index: 1 !important;
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center !important;
      align-items: center !important;
      text-align: center !important;
    }
    p{
      font: 15px !important;
    }
    &:hover {
      .icon-div,
      h6,
      p {
        position: relative;
        z-index: 3 !important;
        color: white !important;
      }
      .icon-div {
    width: fit-content;
    background-color: white;
    .icon {
      font-size: 30px;
      color: blue;
    }
  }
    }
  }
  .item-div:before {
    content: "";
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    transition: 0.5s;
    z-index: 2;
    /* display: none; */
  }

  .item-div:hover:before {
    top: 0;
    display: flex;
    transition: 0.5s;
    background: black;
    border-radius: 15px;
  }
  .link {
    text-decoration: none !important;
    font-weight: 700;
    color: white;
    border: 1px solid blue;
    padding: 10px 30px;
    border-radius: 10px;
    background-color: blue;
  }
  @media screen and (max-width: 768px) {
    h2 {
      font-size: 36px;
      text-align: left;
      font-weight: 600 !important;
    }
    .div {
      flex-direction: column;
    }
  }
`;
