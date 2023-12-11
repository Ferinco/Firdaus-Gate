import styled from "styled-components";
import { Button } from "../components/custom/Button";
import { Icon } from "@iconify/react";

export default function About() {

  const Reasons = [
    {
      name: "Govt. Approved",
      icon: "fluent:certificate-32-regular",
    },
    {
      name: "Compitent Staff",
      icon: "icon-park-outline:necktie",
    },
    {
      name: "Standard Facilities",
      icon: "material-symbols-light:lab-panel-outline",
    },
    {
      name: "Guaranteed Security",
      icon: "iconamoon:shield-light",
    },
    {
      name: "Tech Oriented",
      icon: "material-symbols:computer-outline",
    },
    {
      name: "Affordable",
      icon: "ion:card-outline",
    },
    {
      name: "Islamic Studies",
      icon: "carbon:worship-muslim",
    },

  ]
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center pt-5">
      <div className="px-5 row">
        <div className="col-md-6">
          <h2>The Great Citadel of Knowledge and Faith</h2>
        </div>
        <div className="col-md-6">
          <p>
            Since our establishment in 1999, we have been the best at dedicating
            our resources to building a better society.
          </p>
          <p>
            Since our establishment in 1999, we have been the best at dedicating
            our resources to building a better society.
          </p>
        </div>
      </div>
      <div className="image-div w-100"></div>
      <div className="row p-5 w-100">
        <div className="col-md-6">
          <h2>Our Mission</h2>
        </div>
        <div className="col-md-6">
          <p>
            In partnership with our parents and staff, we recognise that each
            child is an individual with values, creative mind and need to
            succed.
          </p>
          <p>
            To maintain a high level of moral standards in line with with
            Islamic Teachings with respect to individual needs of the pupil;
            foster a caring and creative environment; emphasizes the social,
            emotional, spiritual, physical and intellectual development of each
            child without neglecting our immediate environment.
          </p>
        </div>
      </div>
      <div className="vision-div w-100 p-5 d-flex flex-column gap-2">
      <h6 className="pre-header">our vision</h6>
        <h3>
          "Our vision is to equip students to be able to compete with their
          peers and withstand future challenges with sound Islamic and moral
          values."
        </h3>
        <div className="d-flex flex-row align-items-center gap-2 justify-content-end">
          <p className="m-0">-</p>
          <div className="founder-image"></div>
          <div className="d-flex flex-column">
            <h6 className="m-0">Mr Wahab</h6>
            <p className="m-0">Founder</p>
          </div>
        </div>
      </div>
      <div className=" why-div row w-100">
        <div className="col-md-6 d-flex flex-column p-5">
          <h6 className="pre-header">why firdaus-gate</h6>
          <h2>We are here to offer the best services to you and your wards.</h2>
          <p>
Over the years, we have offered standard and top notch services to our clients accross the country. We have always been dedicated to improving lives through quality education; which is beyond books and knowledge about science and art. We offer proper education that touches every sphere of what it takes to bring up a child the right way!
          </p>
        </div>
        <div className="col-md-6 black-div h-100 p-5 d-flex flex-row gap-5 flex-wrap">
          <div className="row ">
            {
            Reasons.map((Reason)=>(
              <div className="d-flex flex-column gap-2 align-items-center justify-content-center text-center reason col-md-3">
              <div className="icon-div d-flex align-items-center justify-content-center">
                <Icon icon={Reason.icon} className="icon"/>
              </div>
              <div className="text-div">
                <h6 className="m-0">{Reason.name}</h6>
              </div>
            </div>
            ))
            }
          </div>
        </div>
      </div>
      <div className="last-div w-100">
        <div className="join-us p-5 d-flex flex-column justify-content-center align-items-center">
          <h2>Ready to Join Us?</h2>
          <p>
            We offer various services that will equip you with then knowledge
            and skills you need to become a world class individual in every
            sphere of your life. Applly to be a student with just simple steps
            now.
          </p>
          <Button white>Join Us</Button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .container,
  .row {
  }
  .image-div {
    height: 450px;
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.1)
      ),
      url("https://res.cloudinary.com/duvwweuhj/image/upload/v1700698716/Firdaus/main-image.jpg") !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
  }
  .why-div {
    height: 400px;
  }
  .black-div {
    background: black;
    .reason {
      .icon-div {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: white;
        .icon{
          color: black;
          font-size: 30px;
        }
      }
      color: white;
      text-transform: capitalize;
      h6{
        font-weight: 500 !important;
      }
    }
  }
  .vision-div {
    height: auto;
    color: black;
    background-color: #f5f5f5;
    h6 {
      font-weight: 600 !important;
    }
  }
  .founder-image {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: black;
  }
  .join-us {
    text-align: center;
    p {
      max-width: 700px;
    }
  }
  .last-div {
    background: #f5f5f5;
  }
  h3{
    font-size: 30px;
  }
  h2{
        font-size: 45px;
    }
    @media screen and (max-width: 768px){
    h2{
        font-size: 36px !important;
    }
}
`;
