import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { Button } from "../custom/Button";
import { PATH_PAGE } from "../../routes/paths";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Icon } from "@iconify/react";
export default function AboutSection() {
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
      duration: 300,
      easing: "ease",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <Container className="py-5" data-aos="fade-up" data-aos-duration="1000">
      <div className="container d-flex flex-row-reverse align-items-center">
        <div className="left d-flex flex-column align-items-center">
          <div className="image-wrapper d-flex gap-2 ">
            <img src="https://res.cloudinary.com/duvwweuhj/image/upload/v1712949299/firdaus-mesh_shgeip.png" />
          </div>
        </div>
        <div className="right d-flex flex-column gap-3">
          {/* <h6 className="pre-header">about us</h6> */}
          <h2>The Place Where you Grow and Learn.</h2>
          <p>
            Firdaus-Gate Model Schools, established in 1999 has dedicated her
            resources to raise future leaders. We have since then provided
            students with skills, resources and enlightment to harness their
            potential and talents, aimed at making them the best they can be.
            Over the years, we have remained committed to the pursuit of our
            vision: to nuture students and build in them, proper{" "}
            <b>Iman(faith)</b>, making them responsible and be of good impact to
            the society.
          </p>
          {/* <Button blue>
        <Link className="react-router-link" to={PATH_PAGE.about}>  Read More{" "}
          <Icon
            icon="system-uicons:arrow-up"
            color="white"
            rotate={1}
            className="icon"
          /></Link>
        </Button> */}
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  /* background: linear-gradient(to right, #ffff, #f5f5f5, #f5f5f5); */
  .container {
    gap: 100px;
    justify-content: space-between !important;
    @media screen and (max-width: 590px) {
      flex-direction: column-reverse !important;
    }
  }
  .left {
    h6 {
      display: none;
    }
    @media screen and (max-width: 991px) {
      h6 {
        display: flex !important;
      }
    }
  }
  .image-wrapper {
    flex-wrap: no-wrap;
    width: 600px;
    height: 700px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    @media screen and (max-width: 590px) {
      width: 100vw;
    height: fit-content !important;
    }
  }
  .right {
    padding-right: 10px;
    @media screen and (max-width: 991px) {
      align-items: center;
      max-width: 90%;
      p {
        padding: 0 !important;
        margin: 0 !important;
      }
      h6 {
        display: none;
      }
    }
    h2 {
      font-size: 45px;
      font-weight: 600 !important;
      line-height: 1.1;
    }
    Button {
      width: fit-content;
    }
  }

  @media (max-width: 768px) {
    margin-top: 30px;
    h2 {
      font-size: 36px !important;
      font-weight: 600 !important;
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
        width: 150px;
        height: 300px;
        &:first-child {
          background-color: purple;
          margin-top: 0px;
        }
        &:last-child {
          display: none;
        }
      }
    }
  }
  @media screen and (min-width: 590px) and (max-width: 1199px) {
    .container {
      flex-direction: column !important;
      align-items: center;
      gap: 15px !important;
    }
  }
  @media (max-width: 1199px) {
    .container{
      gap:  0 !important;
    }
    .right{
        text-align: center;
        justify-content: center;
      }

  }
`;
