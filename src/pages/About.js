import styled from "styled-components";
import { Button } from "../components/custom/Button";

export default function About() {
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
            Since our establishment in 1999, we have been the best at dedicating
            our resources to building a better society.
          </p>
          <p>
            Since our establishment in 1999, we have been the best at dedicating
            our resources to building a better society.
          </p>
        </div>
      </div>
      <div className="vision-div w-100 p-5 d-flex flex-column gap-2">
        <h2>
          "Our vision is to do this and that and this and that and gbogbo kinin
          yen igba awo..."
        </h2>
        <div className="d-flex flex-row align-items-center gap-2">
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
          <h2>The headline for this part</h2>
        </div>
        <div className="col-md-6 black-div h-100"></div>
      </div>
      <div className="last-div w-100">
        <div className="join-us p-5 d-flex flex-column justify-content-center align-items-center">
<h2>Ready to Join Us?</h2>
<p>We offer various services that will equip you with then knowledge and skills you need to become a world class individual in every sphere of your life. Applly to be a student with just simple steps now.</p>
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
    height: 500px;
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
  }
  .vision-div {
    background: blue !important;
    height: auto;
    color: white;
    h6 {
      font-weight: 600 !important;
    }
  }
  .founder-image {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: white;
  }
  .join-us{
    text-align: center;
    p{
      max-width: 700px;
    }

  }
  .last-div{
    background: #f5f5f5;
  }
`;
