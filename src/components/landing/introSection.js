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
        <div className="header d-flex flex-column justify-content-left align-items-left text-start w-100 gap-2">
          {/* <h6 className="pre-header">what we offer</h6> */}
          <h2 className="text-start">We have everything.</h2>
          <p>We do everything we can to make learning easy.</p>
        </div>
        <div className="div row d-flex justify-content-between p-0 m-0">
          <div className="item-div p-3 col-lg-3">
            <div className="icon-div">
              <Icon className="icon" icon="ion:bed" />
            </div>
            <h6>Day and Boarding</h6>
            <p>
              {" "}
              We cultivate nurturing environments for both day students and boarders, ensuring holistic growth and development.            </p>
          </div>
          <div className="item-div p-3 col-lg-3">
            <div className="icon-div">
              <Icon className="icon" icon="mdi:wan" />
            </div>
            <h6>Tech Driven</h6>
            <p>
              {" "}
              Leveraging cutting-edge technology to enhance learning experiences and foster innovation.
            </p>
          </div>
          <div className="item-div p-3 col-lg-3">
            <div className="icon-div">
              <Icon className="icon" icon="mdi:islam" />
            </div>
            <h6>Islam Studies</h6>
            <p>
              Fostering religious growth through comprehensive Islamic education
              programs.
            </p>
          </div>
          <div className="item-div p-3 col-lg-3">
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
height: 100% !important;
  h2 {
    max-width: 300px;
    font-size: 36px;
    /* text-align: center !important; */
    font-weight: 600 !important;
    line-height: 1.4;

  }
  h6 {
    margin-top: 20px;
  }
.div{
  p{
    font-size:14px !important;
  }
  h6{
    font-weight: 600 !important;
  }
}
  .icon-div {
    width: fit-content;
    padding: 7px 10px;
    border-radius: 5px;
    background-color: blue;
    .icon {
      font-size: 22px;
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
padding-left: 0 !important;
    }


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
      /* font-size: 30px; */
      max-width: 768px !important;
      text-align: left;
      font-weight: 600 !important;
    }
    .div {
      flex-direction: column;
    }
  }
`;
