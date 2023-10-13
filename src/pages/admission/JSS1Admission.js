import React from "react";
import styled from "styled-components";
import { Button } from "../../components/custom";
import { Link } from "react-router-dom";
import { PATH_PAGE } from "../../routes/paths";

export default function JSS1Admission() {
  const currentYear = new Date().getFullYear();
  const oneYearFromNow = new Date();
  oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);

  return (
    <div className="container">
      <p className="text-primary">ADMISSION INTO JSS1</p>

      <div>
        <h3>Entrance Examination into JSS1</h3>
        <p>
          {currentYear + "/" + oneYearFromNow.getFullYear()} &nbsp; academic
          session into JSS1 classes is ongoing.
          <br /> Admission forms can be obtained online via the college website
          or at the Exams and Records unit of the college.
        </p>
      </div>

      <Link to={PATH_PAGE.admissionForm}>
        <Button>Proceed to apply</Button>
      </Link>
    </div>
  );
}

const Wrapper = styled.div``;
