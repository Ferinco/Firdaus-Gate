import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
const images = [
  {
    image:
      "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698084/Firdaus/Screenshot_20220822-213231_1_echgsu.jpg",
    id: 0,
  },
  {
    image: "",
    id: 1,
  },
  {
    image: "",
    id: 2,
  },
  {
    image:
      "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698087/Firdaus/Screenshot_20220823-083433_2_poesu0.jpg",
    id: 3,
  },
  {
    image: "",
    id: 4,
  },

  // Add more image URLs as needed
];
const IDs = [
  1, 2, 3, 4,
  // Add more image URLs as needed
];
const CarouselContainer = styled.div`
  perspective: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100% !important;
  margin-top: 100px;
`;

const CarouselWrapper = styled.div`
  width: 400px;
  height: 300px;
  position: relative;
  transform-style: preserve-3d;
  margin-left: 100px !important;
  @media screen and (max-width: 390px) {
    width: 300px;
  }
`;

const ThreeDCarousel = () => {
  const [ActiveID, setActiveID] = useState(0);
  const [facilityName, setFacilityName] = useState("Laboratories, FGMS.");
  const [quote, setQuote] = useState(
    "Our school's state-of-the-art laboratories exemplify excellence, equipped with cutting-edge technology, ensuring the highest educational standards for students."
  );
  const [activeImage, setActiveImage] = useState(
    "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698084/Firdaus/Screenshot_20220822-213231_1_echgsu.jpg"
  );

  useEffect(() => {
    const timeOut = setInterval(() => {
      setActiveID((prevID) => (prevID + 1) % 5);
    }, 5000);
    return () => clearInterval(timeOut);
  }, []);

  useEffect(() => {
    if (ActiveID === 1) {
      setFacilityName("Library, FGMS.");
      setQuote(
        "The library, a bastion of knowledge, hosts an extensive collection, nurturing intellectual growth and fostering academic excellence for all its patrons."
      );
      setActiveImage(
        "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698723/Firdaus/IMG-20230901-WA0013_esps5y.jpg"
      );
    } else if (ActiveID === 2) {
      setFacilityName("Hostel Facilities, FGMS.");
      setQuote(
        "Our modern hostels provide a comfortable and secure living environment, promoting a sense of community and well-being."
      );
      setActiveImage(
        "https://res.cloudinary.com/duvwweuhj/image/upload/v1703759457/xsmagszb_rk8unj.png"
      );
    } else if (ActiveID === 3) {
      setFacilityName("Sports' Facilities, FGMS.");
      setQuote(
        "Our top-notch sports facilities offer a dynamic space for physical activity, fostering teamwork, fitness, and skill development."
      );
      setActiveImage(
        "https://res.cloudinary.com/duvwweuhj/image/upload/v1703758950/hdao4a7l_lmpgbb.png"
      );
    } else if (ActiveID === 4) {
      setFacilityName("School Mosque, FGMS.");
      setQuote(
        "The school's mosque stands as a sacred space devoted to Islamic teachings, nurturing faith, knowledge, and religious devotion among students, fostering a strong connection to Islam."
      );
      setActiveImage(
        "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698084/Firdaus/Screenshot_20220822-213231_1_echgsu.jpg"
      );
    } else {
      setFacilityName("Laboratories, FGMS.");
      setQuote(
        "Our school's state-of-the-art laboratories exemplify excellence, equipped with cutting-edge technology, ensuring the highest educational standards for students."
      );
      setActiveImage(
        "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698084/Firdaus/Screenshot_20220822-213231_1_echgsu.jpg"
      );
    }
  });

  return (
    <Info className=" px-0 ">
      <div className="row">
        <div className="col-md-7 left p-5 d-flex flex-column align-items-start justify-content-center container ">
          <div className="container d-flex flex-column contents gap-2">
            <h6 className="pre-header p-0">FACILITIES</h6>
            <h2 className="">Take a Look at our World Class Facilities.</h2>
            <p className="qoute">{quote}</p>
          <div className="d-flex flex-column gap-1">
          <div className="indicators d-flex gap-1">
              {images.map((image, id) => (
                <Icon
                  icon="octicon:dash-16"
                  color={ActiveID === id ? "white" : "grey"}
                  className="indicator"
                  id={image.id}
                />
              ))}
            </div>
            <div>
              <p className="facility-name">- {facilityName}</p>
            </div>
          </div>
          </div>
        </div>
        <div className="col-md-5 right">
          <img src={activeImage} />
        </div>
      </div>
    </Info>
  );
};

const Info = styled.div`
  height: 550px;

  .fac-header {
    font-weight: 400 !important;
  }
  .facility-name {
    font-size: 14px !important;
    text-transform: uppercase;
  }
  .contents{
    max-width: 600px !important;
  }
  .right {
    height: 550px;
    overflow: hidden;
    margin: 0 !important;
    padding: 0 !important;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      margin: 0 !important;
    }
  }
  .left {
    color: white;
    background-color: rgba(0, 0, 0, 0.1);
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.95),
        rgba(0, 0, 0, 0.95)
      ),
      url("https://res.cloudinary.com/duvwweuhj/image/upload/v1702391861/Firdaus/Screenshot_20221226-182654_1_eu6doz.jpg") !important;
    margin: 0 !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: cover !important;
    h6 {
      /* color: blue; */
    }
    h2 {
      font-size: 32px;
      font-weight: 600 !important;
      color: white !important;
      line-height: 1.5 !important;
    }
    .indicator {
      font-size: 48px !important;
      font-weight: 800 !important;
    }
  }
  @media screen and (max-width: 767px) {
    height: auto !important;
    .left {
      height: 500px;
      padding-left: 20px !important;
      padding-right: 20px !important;
      h2 {
        line-height: 1.5;
      }
    }
    .right {
      height: 200px;
    }
  }
  @media screen and (max-width: 390px) {
    .buttons {
      margin-right: -250px !important;
    }
  }
  @media screen and (max-width: 991px) {
    h2 {
      font-size: 24px !important;
      font-weight: 600 !important;
    }
  }
`;

export default ThreeDCarousel;
