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



const MobileImage = styled.div`
display: none;
@media screen and (max-width: 768px) {
  display: block;
  width: 100%;
  height:250px;
  background-color: purple;
  
}
`
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

     <div className={` h-100 ${isSticky ? 'sticky' : ''}`}>
     <div className="row h-100">
        <div className="col-md-4 d-flex left flex-row h-100 p-5">
          <div className="my-5 d-flex flex-column gap-3 text-div justify-content-center"> 
            <h1 className="display-3 fw-bolder">
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
        <div className="col-md-8 right h-100">
        <CarouselContainer>
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

                  height: 100vh;
                  color:white;
.sticky{
  margin-top:140px !important;
}
.row{
  justify-content: space-between;
align-items: center;

}
.left{
  background-image: linear-gradient(to right, #00008b, #000000) !important;
}
.right{
  background:  url('https://res.cloudinary.com/duvwweuhj/image/upload/v1700698715/Firdaus/IMG-20230901-WA0005_wsy9ri.jpg') !important;
                  background-size: cover !important;
                  background-repeat: no-repeat !important;
                  background-position:center !important;
}
.text-div{
  z-index: 99;
h1{
  width: 600px !important;
}
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

  .text-div{
    padding-bottom: 0 !important;
  }
  .container{
    padding-bottom: 0 !important;
}
  }
`;
