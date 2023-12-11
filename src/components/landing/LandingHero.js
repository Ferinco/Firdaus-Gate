import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../custom/Button";
import { Helmet } from "react-helmet";

const images = [
  {
    className: "image image-1",
    content: "",
  },
  {
    className: "image image-2",
    content: "",
  },
  {
    className: "image image-1",
    content: "",
  },

  // Add more image URLs as needed
];

const CarouselContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MobileImage = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
    height: 300px;
    background-color: purple;
  }
`;
export default function LandingHero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <Wrapper>
      <div className={` h-100 ${isSticky ? "sticky" : ""}`}>
        <div className="row h-100 hero-bg">
          <div className="col-md-4 d-flex left flex-row h-100 py-5">
            <div className="my-5 d-flex flex-column gap-3 text-div justify-content-center">
              <h1 className="display-3">Firdaus-Gate Model Schools</h1>
              <div className="">
                <p className="">
                  Assalamu Alaikum! Welcome to Firdaus Gate Model Schools, where
                  education meets faith. In our school, we nurture minds,
                  hearts, and character. Explore the enriching blend of
                  academics and Islamic values...
                </p>
              </div>
              <div className="button-group d-flex flex-row">
                <Button blue>Get started</Button>
                <span> </span>
                <Button white>About us</Button>
              </div>
            </div>
          </div>
          <div className="col-md-8 right h-100">
            <CarouselContainer></CarouselContainer>
          </div>
        </div>
      </div>
      <MobileImage></MobileImage>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: calc(100vh - 70px);
  color: white;
  .sticky {
    margin-top: 70px;
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
      text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4),
        0px 8px 13px rgba(0, 0, 0, 0.1), 0px 18px 23px rgba(0, 0, 0, 0.1);
    }
    p {
      max-width: 400px !important;
    }
  }
  .container {
    height: 100%;
    display: flex;
    justify-content: center;
  }
  .col-md-4 {
  }
  p {
    font-size: 17px;
  }
  justify-content: left;
  align-items: start;
  text-align: left;
  .button-group {
    gap: 10px;
    justify-content: start !important;
    align-items: left;
  }
  .image {
    max-width: 400px;
    height: 400px;
    background-color: purple;
    border-radius: 30px;
  }

  @media (max-width: 768px) {
    margin-top: 80px;
    height: auto !important;
    .hero-bg{
      background: transparent !important;
    }
    .left {
      background: transparent !important;
      color: black;
    }
    h1 {
      width: auto !important;
      text-shadow: none !important;
      font-size: 50px;
    }
    p {
      /* font-size: 16px; */
      color: black;
    }

    .text-div {
      padding-bottom: 0 !important;
    }
    .container {
      padding-bottom: 0 !important;
    }
  }
`;
