import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function ContactUs() {
  return (
    <Contact className="d-flex justify-content-center" id="contactUs">
      <div className="py-0 container row d-flex w-100 justify-content-between py-4 w-100 p-0">
        <div className="col-md-4 d-flex flex-row gap-3 align-items-center">
        <Icon icon="uiw:left-circle-o"  style={{color: "white"}} className="small-icon"/>
        <p className="m-0 react-router-link "> Locate Us {" "} </p>
          <Icon icon="teenyicons:school-outline" className="icon"/>
        </div>
        <div className="col-md-4 d-flex flex-column gap-0 align-items-center middle h-100 ">
        <h6 className="m-0">Call Us On</h6>
          <a className="m-0 react-router-link" href="tel:+2349055512553">09055512553</a>
        </div>
        <div className="col-md-4 d-flex flex-row gap-3 align-items-center justify-content-center div">
          <Icon icon="cil:envelope-letter" className="icon"/>
          <a className="m-0 react-router-link " href="mailto:firdausgateschools@gmail.com">Email Us </a>
          <Icon icon="uiw:right-circle-o"  style={{color: "white"}} className="small-icon"/>
        </div>
      </div>
    </Contact>
  );
} 
const Contact = styled.div`
height: auto;
background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.9),
        rgba(0, 0, 0, 1.0)

      );
color: white;
@media screen and (max-width: 767px){
  background-color:black;

}
.col-md-4{
  padding:30px 0px;
  cursor: pointer;
  &:hover{
    .react-router-link{
    transition: 0.5s;
    color: blue !important;
  }
  .small-icon{
    transition: 0.5s;
    color: blue !important;
  }
}
}
  .span{
    color:blue !important;
  }
.container{
  padding: 0 !important;
@media screen and (max-width: 767px){
gap: 10px;
padding-bottom: 20px !important;
padding-top: 20px !important;

  .col-md-4{
justify-content:center !important;
padding:7px 0px;
background-color:black !important;
height: auto !important;

  }
}
}
.middle{
  background-color:black !important;
  height: inherit;
}
.div{

    justify-content: flex-end;
}
.icon{
    color:#020d9b !important;
    font-size: 40px;
}
.react-router-link{
    font-size: 20px;
    font-weight: 300 !important;
}
h6{
  font-weight: 500 !important;
  font-size: 15px;
  color: blue;
}
`;
