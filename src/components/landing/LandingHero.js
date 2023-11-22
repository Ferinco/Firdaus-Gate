import React, { useState, useEffect} from "react";
import styled from "styled-components";
import { Button } from "../custom/Button";
import {Helmet} from "react-helmet"

const images = [
  {
className: "image image-1",
content: ""
  },
  {
    className: "image image-2",
    content: ""
      },
      {
        className: "image image-1",
        content: ""
          },

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
    border-radius: 30px;
    height:250px;
    border-radius: 30px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}
.image-1{
  background-image: url('/images/photo-1.png');
}  
.image-2{
  background-image:url(/images/photo-2.png);
}
.image-2{
  background-image:url(/images/photo-3.png);
}
`;
export default function LandingHero() {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 156);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
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
    <Wrapper >

     <div className={`container py-2 ${isSticky ? 'sticky' : ''}`}>
     <div className="row">
        <div className="col-md-6 d-flex left">
          <div className="my-5 d-flex flex-column gap-3 text-div"> 
            <h1 className="">
              Firdaus-Gate Model Schools
            </h1>
            <div className="">
              <p className="">
              Assalamu Alaikum! Welcome to Firdaus Gate Model Schools, where education meets faith. In our school, we nurture minds, hearts, and character. Explore the enriching blend of academics and Islamic values...
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
            <div className={image.className}></div>
            
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
margin-top:70px;
.sticky{
  margin-top:140px !important;
}
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
        font-weight:800 !important;
    }
    p{
      font-size: 16px;
    }

  .text-div{
    padding-bottom: 0 !important;
  }
  .container{
    padding-bottom: 0 !important;
}
  }
`;
