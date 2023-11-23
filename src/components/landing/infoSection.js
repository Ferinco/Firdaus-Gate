import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
const images = [
  {
    image: "",
    id: 0
  },
  {
    image: "",
    id: 1
  },
  {
    image: "",
    id: 2
  },
  {
    image: "",
    id: 3
  },
  {
    image: "",
    id: 4
  },

  // Add more image URLs as needed
];
const IDs = [
  1,
  2,
  3,
  4,
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
  const [ActiveID, setActiveID] = useState(0)
  const [facilityName, setFacilityName] = useState("Laboratories, FGMS.")
  const [quote, setQuote] = useState("Our standard and well equipped science, economics and computer laboratories")
  const [activeImage, setActiveImage] = useState("image0.png")


useEffect(()=>{
  const timeOut = setInterval(()=>{
setActiveID((prevID)=> (prevID + 1) % 5)
  }, 4000)
  return () => clearInterval(timeOut)
}, [])

useEffect(()=>{
  if (ActiveID === 1) {
    setFacilityName("Library, FGMS.");
    setQuote("Spacious and well equipped multipurpose library")
    setActiveImage("image1.png");

  } else if (ActiveID === 2) {
    setFacilityName("Hostel Facilities, FGMS.");
    setQuote("Healthy hostel facilities...")
    setActiveImage("image2.png");

  }
else if (ActiveID === 3) {
  setFacilityName("Sports' Facilities, FGMS.");
  setQuote("Standard sports facilities")
  setActiveImage("image3.png");

} 
else if (ActiveID === 4) {
  setFacilityName("School Mosque, FGMS.");
  setQuote("Standard mosque")
  setActiveImage("image3.png");

}
else {
    setFacilityName("Laboratories, FGMS.");
    setQuote("Our standard and well equipped science, economics and computer laboratories")
    setActiveImage("image0.png");

  }
})

  return (
    <Info className=" p-0">
<div className="row">
<div className="col-md-6 left p-5 d-flex flex-column align-items-start justify-content-center">
<h6>Our Facilities</h6>
  <h2 className="display-5">Take a peak at some of our top class facilities</h2>
  <p>
   {quote}
  </p>
  <div className="indicators d-flex gap-1">
  {
    images.map((image, id)=>(
      <Icon icon="octicon:dash-24" color={ActiveID === id ? "white" : "grey"} className="indicator" id={image.id}/>

    ))
  }
  </div>
  <div><h5>{facilityName}</h5></div>
</div>
<div className="col-md-6 right">
<img src={activeImage}/>
</div>


</div>
    </Info>
  );
};

const Info = styled.div`
background-image: linear-gradient(to right, #00008b, #000000) !important;
height: 600px;
.right{
  background: white !important;
  height: 600px;
}
.left{
color:white;
h6{
  color:blue;
}
.indicator{
  font-size:48px !important;
}
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
