import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function ContactUs() {
  return (
    <Contact className="d-flex justify-content-center">
      <div className="py-0 container row d-flex w-100 justify-content-between py-4 w-100 p-0">
        <div className="col-md-4 d-flex flex-row gap-3 align-items-center">
        <Link className="m-0 react-router-link ">&#8592; Find Our School {" "} </Link>
          <Icon icon="teenyicons:school-outline" className="icon"/>
        </div>
        <div className="col-md-4 d-flex flex-column gap-0 align-items-center middle h-100 ">
        <Link className="m-0 react-router-link span">Call Us On</Link>
          <Link className="m-0 react-router-link">09134786486</Link>
        </div>
        <div className="col-md-4 d-flex flex-row gap-3 align-items-center div">
          <Icon icon="cil:envelope-letter" className="icon"/>
          <Link className="m-0 react-router-link ">Send Us an Email {" "} &#8594;</Link>
        </div>
      </div>
    </Contact>
  );
} 
const Contact = styled.div`
background:#0f0f0f;
color: white;
.col-md-4{
  padding:15px 0px;
    }
  .span{
    color:blue !important;
  }
.container{
  padding: 0 !important;
@media screen and (max-width: 767px){
  .col-md-4{
justify-content:center !important;
padding:7px 0px;
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
