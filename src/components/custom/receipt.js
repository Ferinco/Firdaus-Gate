import { styled } from "styled-components";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRef } from "react";
import generatePDF from "react-to-pdf";
export default function Receipt() {
  const location = useLocation();
  const { reference } = location.state;
  const { transaction } = location.state;

  console.log(reference);
  const { studentInformation, parentInformation } = useSelector(
    (state) => state.admission
  );
  const componentRef = useRef()
  return (
    <Container className="d-flex flex-column justify-content-between pb-5">
      <div className="d-flex justify-content-between p-5">

        <h5>Receipt</h5>
        <button className="p-2" onClick={()=>
          generatePDF(componentRef, {filename: "receipt.pdf"})}>Download Receipt</button>
      </div>
      <div className="receipt-div p-5" ref={componentRef}>
        <div className="header d-flex flex-row justify-content-between align-center">
          <div className="image">
            <img src="/images/logo.png" />
          </div>
          <div className="school-info">
            <h4 className="m-0">Firdaus-Gate Model Schools</h4>
            <p className="m-0">13, Omo-Olope Area, Magboro</p>
            <p className="m-0">Abeokuta, Ogun</p>
          </div>
        </div>
        <div className="middle mt-4 d-flex flex-row justify-content-center">
          <h4>Admission form receipt -Original</h4>
        </div>
        <div className="content-div row">
          <div className="col-6 d-flex flex-column mt-1">
            <i>Payment Received From:</i>
            <h4>
              {studentInformation?.surname} {studentInformation?.surname}
            </h4>
            <div className="d-flex flex-row align-items-baseline">
              <h6>Admission Number: </h6> &nbsp; <p>N/A</p>
            </div>
            <div className="d-flex flex-row align-items-baseline">
              <h6>Class Applied: </h6> &nbsp;{" "}
              <p> {studentInformation?.classOfInterest}</p>
            </div>
            <div className="d-flex flex-row align-items-baseline">
              <h6>Department: </h6> &nbsp; <p>Science</p>
            </div>
          </div>
          <div className="col-6  right d-flex flex-column mt-1">
            <div className="d-flex flex-row align-items-baseline">
              <h6>Receipt Number: </h6> &nbsp; <p>FGMS/AR/2023/000001</p>
            </div>
            <div className="d-flex flex-row align-items-baseline">
              <h6>Print Date: </h6> &nbsp; <p>03-12-2023</p>
            </div>
            <div className="d-flex flex-row align-items-baseline">
              <h6>Reference ID: </h6> &nbsp; <p>{reference}</p>
            </div>
            <div className="d-flex flex-row align-items-baseline">
              <h6>Transaction ID: </h6> &nbsp; <p>{transaction}</p>
            </div>
            <div className="d-flex flex-row align-items-baseline">
              <h6>Transaction Type: </h6> &nbsp;{" "}
              <p>Admission Form Purchase</p>
            </div>
          </div>
        </div>
        <div className="amount-div d-flex flex-row align-items-center justify-content-between mt-5 px-3 py-1">
          <h6>TOTAL AMOUNT PAID :</h6>
          <h2>12,000</h2>
        </div>
        <div className="end-div d-flex flex-row justify-content-between mt-4 align-items-center">
          <div className="d-flex flex-column">
            <i>Payment Aknowledged:</i>
            <h4>BURSAR</h4>
            <p>kindly make a copy of this receipt for reference purpose</p>
          </div>
          <div>
            <p className="xo p-1">Firdaus-Gate Model Schools</p>
          </div>
        </div>
        <div>
          <p className="warning">note that this is a receipt for admission form purchase and not of admission and thereby does not gurantee your studentship, kindly keep this receipt for reference purpose.</p>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  height: auto;
  p,
  h6,
  h4 {
    margin: 0 !important;
  }
  i {
    color: blue;
    font-weight: 600;
  }
  .receipt-div {
    width: 900px !important;
    margin: auto !important;
    background: white !important;
    border: 1px solid grey;
    height:auto !important;
  }
  .header {
    align-items: center;
    .image {
      height: 100px;
      width: 100px;
      margin-top: -5px !important;
      img {
        object-fit: cover !important;
        display: flex;
        width: 100%;
        height: 100%;
        object-position: center;
      }
    }
  }
  .middle {
    text-align: center !important;
    h4 {
      color: white;
      background-color: grey;
      width: fit-content;
      padding: 7px 15px;
      border-top-right-radius: 15px;
      border-top-left-radius: 15px;
      font-weight: 600 !important;
      text-transform: uppercase;
    }
  }
  .content-div {
    border-top: 2px solid grey;
  }
  .right {
    align-items: flex-end;
  }
  .amount-div {
    border: 2px solid grey;
  }
  .xo {
    border: 1px solid grey;
    font-size: 14px;
  }
  button{
    border: 1px solid green;
    background: green;
    color: white;
    font-size: 15px !important;
  }
  .warning{
    color: red !important;
    text-align: center;
    font-size: 13px;
    margin-top: 20px !important;

  }
`;
