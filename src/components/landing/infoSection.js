import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

export default function Info(){
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
  };
    return(
        <Container className="d-flex flex-column gap-5 d-flex">
<div className="left  p-5">
    <h2>
        Take a peak at our top notch facilities
    </h2>
</div>
<div className="right ">
<div >
        <Slider {...settings} >
     <div className="d-flex">
     <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
     </div>
        </Slider>
      </div>
</div>
        </Container>

    )
}
const Container = styled.div`
height:500px;
flex-wrap: nowrap;
overflow: hidden !important;
.left{
    border:1px solid red;
    h2{
        font-size: 45px;
    }
}
`