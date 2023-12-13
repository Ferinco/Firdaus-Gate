import styled from "styled-components";
import { Button } from "../components/custom/Button";
import { Icon } from "@iconify/react";
import { useEffect } from "react";
import ContactUs from "../components/landing/contactSection";
export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
  ];
  return (
    <div>
    <Container className="d-flex flex-column justify-content-center align-items-center pt-5">
      <div className="p-5 row body">
        <div className="col-md-6">
          <h2>The Great Citadel of Knowledge and Faith</h2>
        </div>
        <div className="col-md-6 d-flex flex-column gap-3">
          <p className="m-0">
            Since our establishment in 1999, we have been the best at dedicating
            our resources to building a better society through the power of
            education and proper Iman in children.
          </p>
          <p className="m-0">
            It has always been our life-long gaol to ensure that we make
            students that are fit for the standards of the society by equiping
            them with thw right knowledge, skills and enhancing their potentials
            with no limiit.
          </p>
        </div>
      </div>
      <div className="image-div w-100"></div>
      <div className="row p-5 w-100 body">
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
      <div className="vision-div w-100 p-5 d-flex flex-column gap-2 body">
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
      <div className=" why-div d-flex flex-row justify-content-between w-100 p-5 gap-5 body">
        <div className="white-div d-flex flex-column gap-3 w-50">
          <h6 className="m-0 pb-2">WHY FIRDAUS-GATE ?</h6>
          <h2>We are here to offer the best services to you and your wards.</h2>
          <p>
            Over the years, we have offered standard and top notch services to
            our clients accross the country. We have always been dedicated to
            improving lives through quality education; which is beyond books and
            knowledge about science and art. We offer proper education that
            touches every sphere of what it takes to bring up a child the right
            way!
          </p>
        </div>
        <div className="black-div h-100 d-flex flex-row gap-5 flex-wrap h-100 w-50 p-0">
          <div className="row reasons h-100">
            {Reasons.map((Reason) => (
              <div className="d-flex flex-column gap-2 align-items-center justify-content-center text-center reason col-md-3">
                <div className="icon-div d-flex align-items-center justify-content-center">
                  <Icon icon={Reason.icon} className="icon" />
                </div>
                <div className="text-div">
                  <h6 className="m-0">{Reason.name}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="objectives d-flex flex-column p-5 body">
        <div className="header d-flex justify-content-left text-left">
          <h2>Our Objectives</h2>
        </div>
        <div className="content d-flex flex-row nowrap justify-content-between w-100 gap-4 align-items-center">
          <div className="left d-flex flex-column">
            <ul className="m-0 p-0 d-flex flex-column flex-wrap gap-2">
              <li>To build proper Iman in students.</li>
              <li>
                To continually provide a standard platform for learning, with
                commitment and enthusiastic students, teachers and staff.
              </li>
              <li>
                To improve the standardd of the schools amongst the Muslim
                Community.
              </li>
              <li>
                To ensure that all students are given equal opportunities
                regardless of Cultural, Ethnic or Financial background.
              </li>
              <li>
                To equip students with requisite sills required to survive in
                their natural environment.
              </li>
              <li>
                To capture the Muslim children currently enrolled in non Islamic
                schools in our immediate sphere of operation.
              </li>
              <li></li>
            </ul>
          </div>
          <div className="right d-flex flex-column gap-3">
            <div className="image ml-5">
              <img src="https://res.cloudinary.com/duvwweuhj/image/upload/v1700698715/Firdaus/IMG-20230901-WA0004_1_pc92lu.jpg" />
            </div>
            <div className="image">
              <img src="https://res.cloudinary.com/duvwweuhj/image/upload/v1700698088/Firdaus/Screenshot_20220823-083549_1_jkdrmj.jpg" />
            </div>
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
    <ContactUs/>
    </div>
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
      url("https://res.cloudinary.com/duvwweuhj/image/upload/v1702391876/Firdaus/Screenshot_20220822-213149_1_fyehx3.jpg") !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
  }
  .why-div {
    height: auto;
    background-color: black;
    color: white;
    gap:10px !important;
    @media screen and (max-width: 1009px) {
      display: flex;
      flex-direction: column !important;
      .black-div, .white-div{
        width:100% !important;
      }
      .reason{
        margin-top: 20px;
      }
    }
  }
  .black-div {
    background: black;
    height: inherit !important;
    @media screen and (max-width: 1009px) {
padding-top: 0 ;
    }
    .reason {
      .icon-div {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: white;
        .icon {
          color: black;
          font-size: 30px;
        }
      }
      color: white;
      text-transform: capitalize;
      h6 {
        font-weight: 500 !important;
      }
    }
  }
  .vision-div {
    height: auto;
    color: black;
    /* background-color: #f5f5f5; */
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
  .objectives {
    .content {
      @media screen and (max-width: 1009px) {
        display: flex;
        flex-direction: column-reverse !important;
      }
    }
    .right {
      .image {
        height: 150px;
        width: 400px;
        overflow: hidden;
        border-radius: 20px;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        @media screen and (max-width:500px) {
          width:300px !important;
        }
        &:first-child {
          background-color: purple;
          margin-top: 10px;
        }
        &:nth-child(2) {
          background-color: blue;
          margin-right: 40px;
        }
        img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }
      }
    }
  }
  .last-div {
    background: #f5f5f5;
  }
  h3 {
    font-size: 30px;
  }
  h2 {
    font-size: 45px;
  }
  @media screen and (max-width:767px){

    }

  @media screen and (max-width: 768px) {
    margin-top: 80px !important;
    .body{
    padding-right: 32px !important; 
    padding-left: 32px !important; 

    }
    h2 {
      font-size: 36px !important;
    }
    .reasons{
      display: grid !important;
      grid-template-columns: repeat(3, 1fr) !important;
    }
  }
  @media screen and (max-width:382px) {
    .reasons{
      display: grid !important;
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }
`;
