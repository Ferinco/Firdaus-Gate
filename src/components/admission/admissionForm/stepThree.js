import React from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { api } from "../../../api/axios";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { usePaystackPayment } from "react-paystack";
import admission from "../../../redux/slices/admission";
import styled from "styled-components";
import IconButton from "../../custom/IconButton";

StepThree.propTypes = {
  setStep: PropTypes.any,
};

export default function StepThree({ setStep }) {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm({
    defaultValues: {},
  });

  const { student, parent } = useSelector(
    (state) => state.admission
  );
  console.log(student);

  const config = {
    reference: new Date().getTime().toString(),
    email: parent.parentEmailAddress,
    amount: 12000 * 100,
    publicKey: "pk_test_04dd699dfc4661f56ad39113ba41e9c5e9af44e5",
    // currency: 'NGN',
  };
  const initializePayment = usePaystackPayment(config);
  const onSuccess = (response) => {
    console.log(response);
    navigate("/admission/admission-form/payment-success", { state: response });

    // api
    //   .post("/admission/create", { payment: reference })
    //   .then(({ data }) => {
    //     console.log(data);
    //     // setStep(4);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     toast.error("Something went wrong, try again later");
    //   });
  };

  const onClose = () => {
    console.log("closed");
  };
  const goBack = () => {
    setStep(2);
  };

  return (
    <Wrapper>
      <div className="header-section pb-2 d-flex flex-column justify-content-center align-items-center">
        <h4 className="title p-0 m-0">CONFIRM & PAY</h4>
        <p className="m-0">
          Payment of Admission fee for{" "}
          <b>
            {" "}
            {student?.firstName} {student?.surname}{" "}
          </b>
        </p>
      </div>
      <div className="section">
        <h5 className="sub-header">Student Information</h5>

        <div className="row mt-3">
          <div className="col-6">
            <p>
               First Name
               </p>
              <p className="item">
              {student?.firstName}
              </p>
          </div>
          <div className="col-6">
          <p>
               Surname
               </p>
              <p className="item">
              {student?.surname}
              </p>
          </div>
          <div className="col-6">
          <p>
               Other Names
               </p>
              <p className="item">
              {student?.middleName}
              </p>
          </div>
          <div className="col-6">
          <p>
               Date of Birth
               </p>
              <p className="item">
              {student?.dateOfBirth}
              </p>
          </div>
          <div className="col-6">
          <p>
               Gender
               </p>
              <p className="item">
              {student?.gender}
              </p>
          </div>
          <div className="col-6">
          <p>
               Present Class
               </p>
              <p className="item">
              {student?.presentClass}
              </p>
          </div>
          <div className="col-6">
          <p>
               Class of Interest
               </p>
              <p className="item">
              {student?.classOfInterest}
              </p>
          </div>
          <div className="col-6">
            <p>
              <strong> School of Interest</strong>
              <br />
              {student?.schoolOfInterest}
            </p>
          </div>
          <div className="col-6">
            <p>
              <strong> Day or Boarding</strong>
              <br />
              {student?.dayOrBoarding}
            </p>
          </div>
          <div className="col-6">
            <p>
              <strong> Phone Number</strong>
              <br />
              {student?.phone}
            </p>
          </div>
          <div className="col-6">
            <p>
              <strong> State of Origin </strong>
              <br />
              {student?.stateOfOrigin}
            </p>
          </div>
          <div className="col-6">
            <p>
              <strong> Nationality</strong>
              <br />
              {student?.nationality}
            </p>
          </div>
          <div className="col-6">
            <p>
              <strong> Local Government Area </strong>
              <br />
              {student?.localGovernmentArea}
            </p>
          </div>
          <div className="col-6">
            <p>
              <strong>Residential Address</strong>
              <br />
              {student?.residentialAddress}
            </p>
          </div>
        </div>
      </div>
      <div className="section mt-4">
        <h5 className="sub-header">Parent Information</h5>
        <div className="row mt-3">
          <div className="col-6">
            <p>
              <strong> Parent Name</strong>
              <br />
              {parent?.parentName}
            </p>
          </div>
          <div className="col-6">
            <p>
              <strong> Parent's phone</strong>
              <br />
              {parent?.parentPhoneNumber}
            </p>
          </div>
          <div className="col-6">
            <p>
              <strong> Parent's email</strong>
              <br />
              {parent?.parentEmailAddress}
            </p>
          </div>
          <div className="col-6">
            <p>
              <strong> Occupation</strong>
              <br />
              {parent?.parentOccupation}
            </p>
          </div>
          <div className="col-6">
            <p>
              <strong> Residential Address</strong>
              <br />
              {parent?.residentialAddress}
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end align-items-center">
          <IconButton
            className=" mr-3"
            icon={"solar:arrow-left-line-duotone"}
            text={"Back"}
            onClick={() => goBack()}
            type="button"
          />
      <button
        className=" btn btn-primary mt-4"
        type="button"
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        Continue
      </button>
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
    span {
      color: blue !important;
    }
    text-transform: uppercase;
  }
  .row {
    p {
      color: grey;
      strong {
        color: black !important;
      }
    }
  }
  button {
    position: relative;
  }
`;
