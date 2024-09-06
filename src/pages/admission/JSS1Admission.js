import React from "react";
import styled from "styled-components";
import { Button } from "../../components/custom";
import { Link } from "react-router-dom";
import { PATH_PAGE } from "../../routes/paths";
import { useDocumentTitle } from "../../hooks/useTitle";

export default function JSS1Admission() {
  useDocumentTitle('FGMS - Admission')

  const currentYear = new Date().getFullYear();
  const oneYearFromNow = new Date();
  oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);

  return (
    <Wrapper className="py-5">
      <div className="container">
        <p className="text-primary">ENTRANCE EXAMINATION</p>

        <div className="body-div mt-5">
          <h3>Schedule For Entrance Examinations</h3>
          <p className="mb-0 mt-3">
            Enrollment Now Open for{" "}
            {currentYear + "/" + oneYearFromNow.getFullYear()} &nbsp; Academic
            year <br />
            Entrance Examination Dates:
          </p>
          <ul className="mt-2">
            <li>
              - <b> 6th of July, 2024</b>
            </li>
            <li>
              - <b> 10th of August, 2024</b>
            </li>
            <li>
              - <b> 24th of August, 2024</b>
            </li>


          </ul>
              Time : <b>9:00am</b> prompt <br/>
          Venue : School Hall
        </div>
        <p className="mt-4">
          You can purchase admission form here on the school website by clicking
          on the button below, or you can visit the school at 6/8 Balogun
          Street, off Igodo Road, Omo-Olope Area, Magboro, Ogun State.
        </p>
        <Link to={PATH_PAGE.admissionForm}>
          <Button>Purchase Form</Button>
        </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
.container{
  width: 450px;
  margin: 0;
}
  li {
    /* font-size: 19px !important; */
  }
`;
