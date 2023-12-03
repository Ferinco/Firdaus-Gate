import styled from "styled-components";

export default function About() {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center py-5">
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
      <div className=" why-div row w-100">
        <div className="col-md-6 d-flex flex-column p-5">
        <h6 className="pre-header">about us</h6>
<h2>The headline for this part</h2>
        </div>
        <div className="col-md-6 black-div h-100">
        </div>
        <div>
          
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
    background: purple !important;
    height: 500px;
  }
  .why-div{
  height:400px;
  }
  .black-div{
  background:black;
  }
`;
