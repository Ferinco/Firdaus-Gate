import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import styled from "styled-components";
export default function ContactUs() {
  return (
    <Contact className="d-flex justify-content-center">
      <div className="container row d-flex w-100 justify-content-between py-4 w-100 p-0">
        <div className="col-md-4 d-flex flex-row gap-3 align-items-center">
        <Link className="m-0 react-router-link ">Find Our School {" "} </Link>
          <Icon icon="teenyicons:school-outline" className="icon"/>
        </div>
        <div className="col-md-4 d-flex flex-column gap-0 align-items-center ">
        <Link className="m-0 react-router-link">Call Us On</Link>
          <Link className="m-0 react-router-link">09134786486</Link>
        </div>
        <div className="col-md-4 d-flex flex-row gap-3 align-items-center div">
          <Icon icon="cil:envelope-letter" className="icon"/>
          <Link className="m-0 react-router-link ">Email Us {" "} </Link>
        </div>
      </div>
    </Contact>
  );
} 
const Contact = styled.div`
background:#f5f5f5;
color: black;
.container{

}
.div{

    justify-content: flex-end;
}
.icon{
    color:blue !important;
    font-size: 40px;
}
.react-router-link{
    font-size: 25px;
}
`;
