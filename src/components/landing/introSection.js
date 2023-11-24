import styled from "styled-components";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
export default function IntroSection() {
  return (
    <Container className="py-5">
      <div className="container d-flex align-items-center flex-column gap-5">
        <div className="header d-flex flex-column justify-content-center align-items-center">
          <h6 className="pre-header">what we offer</h6>
          <h2>Some of our core services that make us the best</h2>
        </div>
        <div className="div d-flex justify-content-between p-0 m-0 gap-3">
          <div>
            <div className="icon-div">
              <Icon className="icon" icon="ion:bed" />
            </div>
            <h6>Day and Boarding</h6>
            <p> Providing a nurturing environment for both day students and boarders.</p>
          </div>
          <div>
            <div className="icon-div">
              <Icon className="icon" icon="mdi:wan" />
            </div>
            <h6>Tech Driven</h6>
            <p> Integrating cutting-edge technology to enhance learning experiences and innovation.</p>
          </div>
          <div>
            <div className="icon-div">
              <Icon className="icon" icon="mdi:islam" />
            </div>
            <h6>Islam Studies</h6>
            <p>Fostering religious growth through comprehensive Islamic education programs.</p>
          </div>
          <div>
            <div className="icon-div">
              <Icon className="icon" icon="fa6-solid:people-line"/>
            </div>
            <h6>Social</h6>
            <p>Cultivating a vibrant community through diverse extracurricular and social initiatives.</p>
          </div>
        </div>
        <Link className="link mt-4">
          learn more{" "}
          <Icon
            icon="system-uicons:arrow-up"
            color="white"
            rotate={1}
            className="icon"
          />
        </Link>
      </div>
    </Container>
  );
}
const Container = styled.div`
  h2 {
    max-width: 600px;
    font-size: 45px;
    text-align: center;
    font-weight: 800;
  }
  background-color: white;
  h6 {
    margin-top: 20px;
  }
  .icon-div {
    width: fit-content;
    padding: 5px 7px;
    border-radius: 5px;
    background-color: blue;
    .icon {
      font-size: 30px;
      color: white;
    }
  }
  .link {
    text-decoration: none !important;
    font-weight: 700;
    color: white;
    border: 1px solid blue;
    padding: 10px 30px;
    border-radius: 10px;
    background-color: blue;
  }
  @media screen and (max-width: 768px) {
    h2 {
      font-size: 36px;
      text-align: left;
    }
    .div {
      flex-direction: column;
    }
  }
`;
