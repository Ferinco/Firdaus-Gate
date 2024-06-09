import styled from "styled-components";
import { Icon } from "@iconify/react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Button } from "../custom";
export default function OfferSection() {
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
    <Container className="py-5">
      <div className="container" data-aos="fade-up" data-aos-duration="1000">
        <div className="header d-flex flex-column justify-content-center align-items-center">
        <h2 className="mobile-header d-none">Why you Should Choose Us.</h2>
        </div>
        <div className="div d-flex flex-row justify-content-between align-items-center">
          <div className="left d-flex flex-column">
            <div className="image-wrapper d-flex">
              <img src="https://res.cloudinary.com/duvwweuhj/image/upload/v1713078874/offer-section_quteus.png" />
            </div>
          </div>
          <div className="right d-flex flex-column justify-content-left align-items-start gap-3">
            <h2 className="mt-2 desktop-header">Why you Should Choose Us.</h2>
            <p>
              Our school is the ultimate choice for students, backed by
              government certification. Our extensive experience in education
              guarantees a nurturing environment for academic growth. Our team
              of competent teachers is committed to guiding you towards success.
              With our government certification, your achievements hold value in
              the competitive landscape. Trust us for an educational journey
              that leads to a promising future.
            </p>
            <div className="button w-100 d-flex">
              <Button white>Application Form</Button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bottom-div w-100 mt-5"></div> */}
    </Container>
  );
}
const Container = styled.div`
  background: white !important;
  .image-wrapper {
    flex-wrap: no-wrap;
    width: 550px;
    height: 600px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      display: block;
    }
    @media screen and (max-width: 590px) {
      width: 350px;
    height: 350px !important;

      height: fit-content !important;
    }
  }
  h5 {
    font-size: 21px;
  }

  h2 {
    font-size: 45px;
    max-width: 400px;
    text-align: start;
    font-weight: 600 !important;
    line-height: 1.4;
  }

  .small-header {
    color: blue;
    text-transform: uppercase;
  }

  .right {
    max-width: 700px !important;
    p {
      max-width: 500px;
      line-height: 1.7;
    }
  }

  .bottom-div {
    height: 300px;
    background: linear-gradient(to right, #ffff, #f5f5f5, #f5f5f5);
  }

  @media screen and (max-width: 1199px) {
    .desktop-header{
      display: none !important;
    }
    .mobile-header{
      display: flex !important;
    }
    .div {
      flex-direction: column !important;
      align-items: center;
      gap: 15px !important;
    }
    .right {
      width: 100% !important;
      text-align: center;
      p {
        max-width: 100vw;
        line-height: 1.7;
      }
    }
    h2{
      text-align: center;
    }
    .button{
      flex-direction: row;
      justify-content: center;
    }
  }
`;
