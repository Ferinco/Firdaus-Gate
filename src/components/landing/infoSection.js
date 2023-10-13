import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
const images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image1.jpg",
  "image2.jpg",
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

const CarouselSlide = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transition: transform 0.5s;
  transform: rotateY(${(props) => props.rotation}deg) translateZ(200px);
  &.active {
    transform: rotateY(0deg) translateZ(200px);
  }
  .image {
    width: 200px;
    height: 200px;
    margin-left: -50px;
    background-color: purple;
    border-radius: 30px;
    @media screen and (max-width: 390px) {
    width: 180px;
    margin-left: -10px;

}
  }
`;

const ThreeDCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };
  const tabItems = [
    {
      name: "Science Laboratory",
      id: 0,
    },
    { name: " Sports and Gaming", id: 1 },
    { name: "Economics Laboratory", id: 2 },
    { name: " Computer Laboratory", id: 3 },
    { name: "Hostel Facilities", id: 4 },
  ];
  

  return (
    <Info className=" p-0">
      <div className="row m-auto align-items-center p-0 container">
        <div className="col-lg-6 py-5 d-flex flex-column gap-4">
          <h2>Take a peak at our world class facilities</h2>
          <div className="d-flex flex-column gap-1">
            {tabItems.map((tabItem) => (
              <h5 id={tabItem.id} className={tabItem.id === currentIndex ? "activeTab" : ""}>{tabItem.name}</h5>
            ))}
          </div>
        </div>
        <div className="col-lg-6">
          <CarouselContainer className="d-flex flex-column ">
            <CarouselWrapper>
              {images.map((image, index) => (
                <CarouselSlide
                  key={index}
                  rotation={(index - currentIndex) * 45}
                  className={index === currentIndex ? "active" : ""}
                >
                  <div
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="image"
                  ></div>
                </CarouselSlide>
              ))}
            </CarouselWrapper>
            <div className="buttons d-flex gap-3">
              <button side="left" onClick={prevImage}>
                <Icon icon="ic:outline-less-than" className="icon" />
              </button>
              <button side="right" onClick={()=>{
                nextImage()
              }}>
                <Icon icon="ic:outline-greater-than" className="icon" />
              </button>
            </div>
          </CarouselContainer>
        </div>
      </div>
    </Info>
  );
};

const Info = styled.div`
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  background-color: white !important;
  .row {
    height: 100% !important;
    justify-content: center;
  }
  .col-lg-6 {
    h2 {
      font-size: 45px;
    }
    .buttons {
      justify-content: flex-end;
      position: absolute;
      margin-top: 280px;
      margin-right: -300px;
      button {
        border: none;
        font-size: 24px;
        cursor: pointer;
        background-color: transparent;
        .icon {
          font-size: 30px;
          color: blue;
        }

        /* position: absolute; */
        top: 50%;
        transform: translateY(-50%);
        ${(props) => (props.side === "left" ? "left: 10px;" : "right: 10px;")}
      }
    }
  }
  .activeTab {
  transform: scale(1.05);
  transition:0.5s !important;
  padding: 10px 25px;
  /* background-color: grey; */
  border-bottom: 2px solid blue;
  width: fit-content;
  color: black;
  font-size: 20px !important;
}


  @media screen and (max-width: 768px){
    h2{
        font-size: 36px !important;
    }
}
@media screen and (max-width: 390px) {
  .buttons {
      margin-right: -250px !important;
    }
}
`;

export default ThreeDCarousel;
