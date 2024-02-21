import styled from "styled-components";
import { Button } from "../../components/custom";
import { Link } from "react-router-dom";
import { PATH_PAGE } from "../../routes/paths";
import { useState } from "react";
import { PaymentService } from "../../services/paymentService";
import axios from "axios";
export default function ContinueAdmission() {
  const [referenceNo, setReferenceNo] = useState("");
  const submitRef = async (referenceNo) => {
    try {
      const response = await axios.get(
        "https://ferrum-sever.onrender.com/api/confirmpayment/reference",
        {
          params: { referenceNo },
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(referenceNo);
  return (
    <Container className="d-flex flex-column">
      <div className="header d-flex flex-row justify-content-start align-items-center px-3">
        <Link className="react-router-link" to={PATH_PAGE.admission}>
          home!
        </Link>
      </div>
      <div className="content-div d-flex justify-content-center h-100">
        <div className="card d-flex flex-column  p-3">
          <p className="header-text p-0">
            Please enter your payment reference below.
          </p>
          <input
            name="referenceId"
            placeholder="Payment Reference"
            onChange={(e) => {
              setReferenceNo(e.target.value);
            }}
          />
          <Button
            blue
            className="mt-2"
            onClick={() => {
              submitRef();
            }}
          >
            <Link className="react-router-link" mto={PATH_PAGE.admissionForm}>
              Continue
            </Link>
          </Button>
          <p className="mt-2 new-text">
            New Applicant ?{" "}
            <Link
              className="react-router-link new-link"
              to={PATH_PAGE.admissionForm}
            >
              Click here to Apply
            </Link>
          </p>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background: #f5f5f5;
  height: 100vh;
  .header {
    height: 50px !important;
    color: blue;
    text-decoration: underline;
  }
  .card {
    max-width: 500px;
    background: white;
    height: fit-content;
    margin: auto;
  }
  .header-text {
    font-size: 20px;
    text-align: center;
  }

  .new-link {
    color: blue !important;
    &:hover {
      text-decoration: underline !important;
    }
  }
  input {
    padding: 10px 5px;
    border-radius: 5px;
    border: 1px solid grey;
  }
  .new-text {
    font-size: 14px !important;
  }
`;
