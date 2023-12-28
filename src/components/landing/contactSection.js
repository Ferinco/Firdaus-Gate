import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function ContactUs() {
  return (
    <Contact className="d-flex justify-content-center" id="contactUs">
      <div className="py-0 container row d-flex w-100 justify-content-between py-4 w-100 p-0">
        <div className="col-md-4 d-flex flex-row gap-3 align-items-center">
        <Link className="m-0 react-router-link ">&#8592; Find Our School {" "} </Link>
          <Icon icon="teenyicons:school-outline" className="icon"/>
        </div>
        <div className="col-md-4 d-flex flex-column gap-0 align-items-center middle h-100 ">
        <Link className="m-0 react-router-link span">Call Us On</Link>
          <a className="m-0 react-router-link" href="tel:+2349055512553">09055512553</a>
        </div>
        <div className="col-md-4 d-flex flex-row gap-3 align-items-center div">
          <Icon icon="cil:envelope-letter" className="icon"/>
          <a className="m-0 react-router-link " href="mailto:firdausgateschools@gmail.com">Send Us an Email {" "} &#8594;</a>
        </div>
      </div>
    </Contact>
  );
} 
const Contact = styled.div`
height: auto;
background-color:#0f0f0f;
color: white;
@media screen and (max-width: 767px){
  background-color:black;

}
.col-md-4{
  padding:15px 0px;
background-color:#0f0f0f;

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
    color:blue !important;
    font-size: 40px;
}
.react-router-link{
    font-size: 20px;
}
`;
