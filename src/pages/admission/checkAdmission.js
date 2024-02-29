import styled from "styled-components";
import { useLocation } from "react-router-dom";
export default function CheckAdmission() {
  const location = useLocation();
  const referenceState = location.state;
  console.log(referenceState);
  return (
    <Wrapper className="container my-5">
      <div className="header-section pb-2 d-flex flex-column justify-content-center align-items-center">
      </div>
      <div className="section">
        <p className="sub-header">Admission Information</p>
        <div className="row mt-3">
          <div className="col-6">
            <p>First Name</p>
            <p className="item">{referenceState?.firstName}</p>
          </div>
          <div className="col-6">
            <p>Surname</p>
            <p className="item">{referenceState?.surname}</p>
          </div>
          <div className="col-6 mt-2">
            <p>Gender</p>
            <p className="item">{referenceState?.gender}</p>
          </div>
          <div className="col-6 mt-2">
            <p>Present Class</p>
            <p className="item">{referenceState?.presentClass}</p>
          </div>
          <div className="col-6 mt-2">
            <p>Class Applied For</p>
            <p className="item">{referenceState?.classOfInterest}</p>
          </div>
          <div className="col-6 mt-2">
            <p> Phone Number</p>
            <p className="item">{referenceState?.parentPhoneNumber}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-image: url(/images/logo.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  /* filter: blur(10px); */
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(
      255,
      255,
      255,
      0.8
    ); /* Adjust the alpha value for transparency */
  }
  .header-section {
    border-bottom: 1px solid #0d6efd;
    position: relative;
  }
  .sub-header {
    background-color: #0d6efd;
    color: white;
    padding: 10px;
    position: relative;
    text-transform: capitalize !important;
    \ span {
      color: blue !important;
    }
    text-transform: uppercase;
  }
  .row {
    p {
      margin: 0;
      font-size: 15px;
      font-weight: 400;
    }
  }

  button {
    position: relative;
  }

  .item {
    font-weight: 500 !important;
    text-transform: capitalize;
  }
`;
