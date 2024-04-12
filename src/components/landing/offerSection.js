import styled from "styled-components";
import { Icon } from "@iconify/react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function OfferSection() {
      //aos animation setup
  useEffect(() => {
    Aos.init({
      // Global settings:
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      offset: 120,
      delay: 0,
      duration: 300,
      easing: "ease",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <Container>
      <div className="container py-5" data-aos="fade-up" data-aos-duration="1000">
        <div className="header d-flex flex-column justify-content-center align-items-center">
          <p className="small-header">Why choose us?</p>
          <h2 className="mt-2">Why you Should Trust us With your Ward(s)</h2>
        </div>
        {/* <div className="body row">
          <div className="col-md-4 d-flex flex-column">
            <h5>20+ years experience</h5>
            <div className="image">
              <img src="https://res.cloudinary.com/duvwweuhj/image/upload/v1703762440/experience_fs8rhc.jpg" />
            </div>
            <p>
              For over 20 years, we have been in operation and have delivered
              well!
            </p>
          </div>
          <div className="col-md-4 d-flex flex-column">
            <h5>Compitent workers</h5>
            <div className="image">
              <img src="https://res.cloudinary.com/duvwweuhj/image/upload/v1703761195/muslim_teacher_evh4im.jpg" />
            </div>

            <p>
              Our workers are well trained and experienced in their respective
              fields.
            </p>
          </div>
          <div className="col-md-4 d-flex flex-column">
            <h5>Accredited and certified</h5>
            <div className="image">
              <img src="https://res.cloudinary.com/duvwweuhj/image/upload/v1703761550/certified_gfkovk.jpg" />
            </div>

            <p>Our school is government screened, accredited and certified.</p>
          </div>
        </div> */}
      </div>
    </Container>
  );
}
const Container = styled.div`
  background: white !important;

  h5 {
    font-size: 21px;
  }
  .header {
    h2 {
      font-size: 45px;
      max-width: 600px;
      text-align: center;
      font-weight: 600 !important;

    }
  }
  .small-header{
    color: blue;
    text-transform: uppercase;
  }
  .image {
    width: 300px;
    height: 300px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

    img {
      width: 100%;
      height: 100%;
      overflow: hidden;
      object-fit: cover;
    }
  }
  .body {
    .d-flex {
      justify-content: center;
      align-items: center;
      text-align: center;
      margin-top: 50px;
      p {
        margin-top: 20px;
      }
    }
  }
  .icon {
    font-size: 40px;
  }
  .icon-div {
    padding: 10px;
    border-radius: 5px;
    background-color: white;
  }
  @media screen and (max-width: 768px) {
    .body {
      padding: 0 20px;
    }
    h2 {
      font-size: 36px !important;
      font-weight: 600 !important;
    }
  }
  .image {
    width: 200px;
    height: 200px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

    img {
      width: 100%;
      height: 100%;
      overflow: hidden;
      object-fit: cover;
    }
  }
`;
