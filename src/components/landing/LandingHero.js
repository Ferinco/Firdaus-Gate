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
@media screen and (max-width: 768px) {
  display: none;
  
}
`;

const CarouselWrapper = styled.div`
  width: 400px;
  height: 300px;
  position: relative;
  transform-style: preserve-3d;
  margin-left: 100px !important;
`;

const MobileImage = styled.div`
display: none;
@media screen and (max-width: 768px) {
  display: block;
  width: 100%;
  height:250px;
  background-color: purple;
  
}
`
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
    margin-left: -100px;
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
        <div className="col-md-6 d-flex left">
          <div className="my-5 d-flex flex-column gap-3 text-div"> 
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
    <MobileImage>
      </MobileImage> 
    </Wrapper>
  );
}
const Wrapper = styled.div`

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

  @media(max-width: 768px){
    height: auto !important;
    h1{
        font-size: 48px;
    }
    p{
      font-size: 16px;
    }
    .image{
    max-width: 250px;
    height:250px;
    background-color: purple;
    border-radius: 30px;
  }
  .text-div{
    padding-bottom: 0 !important;
  }
  .container{
    padding-bottom: 0 !important;
}
  }
`;
