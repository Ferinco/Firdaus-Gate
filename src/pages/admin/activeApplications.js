import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { OverlayLoading } from "../../components/OverlayLoading";
import { CircularProgress } from "../../components/custom";
import { PaymentService } from "../../services/paymentService";
import axios from "axios";

//the whole component...
export default function ActiveApplications() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkPayment = async () => {
      try {
        const results = await axios.get("https://ferrum-sever.onrender.com/api/confirmpayment/reference")
        console.log(results);
      } catch (error) {
        console.log(error);
      }

    };
    checkPayment()
  }, []);
  return (
    <>
      {isLoading ? <CircularProgress /> : ""}

      <Container className="py-5">
        <div>
          <h4>Active Applications</h4>
          <p>view pending and succesful applications from outsiders.</p>
        </div>
        <div className="mt-5 d-flex">
          <h4>No applications at the moment</h4>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding-right: 32px !important;
  padding-left: 32px !important;
  @media screen and (max-width: 1100px) {
    padding-right: 24px !important;
    padding-left: 24px !important;
  }
`;
