import React, { useState, useEffect} from "react";
import styled from "styled-components";
import { Button } from "../custom/Button";


const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  // Add more image URLs as needed
];

const CarouselContainer = styled.div`
  perspective: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100% !important;
`;

const CarouselWrapper = styled.div`
  width: 400px;
  height: 300px;
  position: relative;
  transform-style: preserve-3d;
  margin-left: 100px !important;
`;

const CarouselSlide = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transition: transform 1s; /* Adjust the duration as needed */
  transform: rotateY(${(props) => props.rotation}deg) translateZ(200px);
  &.active {
    transform: rotateY(0deg) translateZ(200px);
  }
  .image {
    width: 200px;
    margin-left: -50px;
    background-color: purple;
    border-radius: 30px;
    
  }
`;
export default function LandingHero() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Automatically change the active image every 3 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <Wrapper className="">
     <div className="container py-5">
     <div className="row">
        <div className="col-md-6 d-flex ">
          <div className="my-5 d-flex flex-column gap-3"> 
            <h1 className="display-3 fw-bolder">
              Firdaus-Gate Group of Schools
            </h1>
            <div className="">
              <p className="">
Stiil in progress we will update the about and the school's info later...
this part should contain a short intro on the school's mission and some other related things.....
              </p>
            </div>
            <div className="button-group d-flex flex-row">
              <Button blue>Get started</Button>
              <span> </span>
              <Button white>About us</Button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
        <CarouselContainer>
      <CarouselWrapper>
        {images.map((image, index) => (
          <CarouselSlide
            key={index}
            rotation={(index - currentIndex) * 45}
            className={index === currentIndex ? 'active' : ''}
          >
            <div className="image"></div>
          </CarouselSlide>
        ))}
      </CarouselWrapper>
    </CarouselContainer>
        </div>
      </div>
     </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
background: linear-gradient(1turn, hsla(0, 0%, 100%, 0.01), #fff 85%),
    radial-gradient(
      ellipse at top left,
      rgba(13, 110, 253, 0.5),
      transparent 50%
    ),
    radial-gradient(
      ellipse at top right,
      rgba(255, 228, 132, 0.5),
      transparent 50%
    ),
    radial-gradient(
      ellipse at center right,
      rgba(113, 44, 249, 0.5),
      transparent 50%
    ),
    radial-gradient(
      ellipse at center left,
      rgba(254, 51, 132, 0.5),
      transparent 50%
    );
height: 90vh;
.row{
  justify-content: space-between;
align-items: center;

}
.container{
  height: 100%;
  display: flex;
justify-content: center;
}
.col-md-4{
  
}
p{
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
  .image{
    max-width: 400px;
    height:400px;
    background-color: purple;
    border-radius: 30px;
  }
`;
