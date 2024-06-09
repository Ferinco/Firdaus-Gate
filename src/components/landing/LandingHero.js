import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../custom/Button";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { PATH_PAGE } from "../../routes/paths";
import Aos from "aos";
import "aos/dist/aos.css";

export default function LandingHero() {
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
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <Wrapper>
      <div className={`h-100`}>
        <div className="row h-100 hero-bg">
          <div className="col-md-4 d-flex left flex-row h-100 py-5">
            <div
              className="my-5 d-flex flex-column gap-3 text-div justify-content-center"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="100"
              data-aos-offset="0"
              data-aos-duration="500"
            >
              <h1 className="display-3">Firdaus-Gate Model Schools</h1>
              <div className="">
                <p className="desktop-p">
                  Assalamu Alaikum! Welcome to Firdaus Gate Model Schools, where
                  education meets faith. In our school, we nurture minds,
                  hearts, and character. Explore the enriching blend of
                  academics and Islamic values...
                </p>
                <p className="mobile-p d-none">
                  Welcome to our school, Firdaus Gate Model Schools, where we
                  nurture minds to become excellent in education and faith.
                </p>
              </div>
              <div className="button-group d-flex flex-row p-0">
                <Button blue className="px-5 py-2 desktop-btn">
                  <Link className="react-router-link" to={PATH_PAGE.about}>
                    About Us
                  </Link>
                </Button>
                <Button blue className="d-none mobile-btn">
                  <Link className="react-router-link" to={PATH_PAGE.about}>
                    About Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: 100vh;
  margin-top: 88px;
  color: white;
  @media screen and (max-width: 982px) {
    margin-top: 66px !important;
  }
  Button {
    /* border-radius: 0 !important; */
  }
  .row {
    justify-content: space-between;
    align-items: center;
  }
  .left {
    /* background-image: linear-gradient(to left, #00008b, #000000) !important; */
    padding-right: 48px;
    padding-left: 48px;
  }
  .hero-bg {
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.1)
      ),
      url("https://res.cloudinary.com/duvwweuhj/image/upload/v1700698716/Firdaus/main-image.jpg") !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
  }
  .text-div {
    z-index: 99;
    h1 {
      width: 600px;
      /* color: white !important; */
      text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4),
        0px 8px 13px rgba(0, 0, 0, 0.1), 0px 18px 23px rgba(0, 0, 0, 0.1);
    }
    p {
      max-width: 400px !important;
      font-weight: 300 !important;
    }
  }

  justify-content: left;
  align-items: start;
  text-align: left;
  .button-group {
    gap: 10px;
    justify-content: start !important;
    align-items: left;
  }

  @media (max-width: 768px) {
    height: 500px !important;
    h1 {
      font-size: 42px !important;
    }
    .desktop-p {
      display: none;
    }
    .mobile-p {
      display: block !important;
    }
    .desktop-btn {
      display: none !important;
    }  .mobile-btn {
      display: block !important;
      width: 200px;
    }
    .button-group {
  justify-content: center !important;
  }

    text-align: center !important;
    .left {
      background: transparent !important;
      padding-bottom: 0 !important;
    }
    h1 {
      width: auto !important;
      text-shadow: none !important;
      font-size: 50px;
      font-weight: 600 !important;
    }
    p {
    }

    .text-div {
      padding-bottom: 0 !important;
    }
    .container {
      padding-bottom: 0 !important;
    }
  }
`;
