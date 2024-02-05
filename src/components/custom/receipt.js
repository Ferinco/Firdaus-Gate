import { styled } from "styled-components";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRef } from "react";
import generatePDF from "react-to-pdf";
import { Icon } from "@iconify/react";
export default function Receipt() {
  const location = useLocation();
  const { reference } = location.state;
  const { transaction } = location.state;
  const { status } = location.state;


  console.log(reference);
  const { student, parent } = useSelector(
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
        <div className="header d-flex flex-column justify-content-start gap-3" >
          <div className="div d-flex flex-row justify-content-start align-items-start gap-3">
            <img src="/images/logo.png" />
       
          </div>
          <div className="div d-flex flex-row justify-content-between">
          <div className="school-info">
            <h6 className="m-0">Firdaus-Gate Model Schools</h6>
            <p className="m-0">13, Omo-Olope Area, Magboro, Abeokuta, Ogun</p>
            <p className="m-0">firdausgateschools@gmail.com</p>
            <p className="m-0">09055512553</p>

          </div>
          <div className="school-info">
            <h6 className="m-0">Admission Form Receipt</h6>
            <p className="m-0">Generated on</p>

          </div>
          </div>
        </div>
        <div className="middle mt-4 d-flex flex-row justify-content-center">
          <p className="sub-header">Admission form receipt -Original</p>
        </div>
        <div className="content-div row">
          <table className="table table-bordered">
            <thead>
            <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="first">Name</td>
                <td className="item">{student?.firstName} {" "}{student?.surname}</td>
              </tr>
              <tr>
              <td className="first">Current Class</td>
              <td><p className="item">{student?.presentClass}</p></td>
              </tr>
              <tr>
              <td className="first">Applied Class</td>
              <td><p className="item">{student?.classOfInterest}</p></td>
              </tr>
              <tr>
                
              <td className="first">Email</td>
                <td><p className="item">{parent?.parentEmailAddress}</p></td>
               
              </tr>
              <tr>
                
              <td className="first">Phone Number</td>
                <td><p className="item">{student?.phone}</p></td>
               
              </tr>
            </tbody>
          </table>
        </div>
        <div className="middle mt-4 d-flex flex-row justify-content-center">
          <p className="sub-header">Transaction Information</p>
        </div>
        <div className="content-div row">
          <table className="table table-bordered">
            <thead>
            <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="first">Payment Status</td>
                <td className="item">{status}</td>
              </tr>
              <tr>
              <td>Refernce ID</td>
              <td><p className="item">{reference}</p></td>
              </tr>
              <tr>
              <td>Transaction ID</td>
              <td><p className="item">{transaction}</p></td>
              </tr>
              <tr>
                
              <td>Payment Purpose</td>
                <td><p className="item">Admission Form</p></td>
               
              </tr>
              <tr>
                
              <td>Payment Aknowledged</td>
                <td><p className="item">By Bursar (Mr. Lagbaja)</p></td>
               
              </tr>
            </tbody>
          </table>
        </div>
        <div className="amount-div d-flex flex-row justify-content-between p-1 mt-4">
              <p className="mt-3">Total Amount Paid</p>
              <h2>12,000.00</h2>
        </div>
        <div className="end-div d-flex flex-row align-items-center gap-1 mt-5 p-1">
        <Icon icon="lets-icons:info-alt-light" />  
        <p>Kindy download a copy of the receipt for reference.</p>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  height: auto;
  .school-info{
    p{
      font-size: 13px;
    }
  }
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
    height:auto !important;
  }
  .header {
    align-items: center;

      img {
        display: block;
        width: 120px !important;
        height: 90px !important;
        object-position: center;
      }
    
    .div{
      width: 100%;
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
  .amount-div{
    height: 70px;
    background-color: #f5f5f5;
    padding: 8px !important;

    p{
      font-size: 20px;
      align-items: center !important;
      margin: 0;
      height: fit-content;
      justify-self: center !important;
      align-self: center;
    }
    h2{
      margin: 0;
      font-weight: 600 !important;
      height: fit-content;
      align-self: center;
    }
  }
  .content-div {
  }
  .right {
    align-items: flex-end;
  }
  .amount-div {
    
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
  .sub-header {
    background-color: #0d6efd;
    color: white;
    padding: 10px;
    position: relative;
    text-transform: capitalize !important;
    width: 100%;
    text-align: start;
  span {
      color: blue !important;
    }
    text-transform: uppercase;
  }
  .table{
    width: 804px !important;
    margin: auto;
  }
  thead{
    display: none !important;
  }
  td{
    background-color: #f5f5f5 !important;
    font-size: 13px;
  }
  .item{
    font-weight: 500 !important;
    width: 60%;
  }
  .first{
    width: 30%;
  }
  p{
    margin: 0 !important;
  }
  .end-div{
    height: 50px;
    background-color: #fbfbac;
    padding: 8px !important;
    p{
      font-size: 12px;
    }
  }

`;
