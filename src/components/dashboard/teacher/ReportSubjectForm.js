import React from "react";
import styled from "styled-components";
import Input from "../../custom/Input";
import { InputSelect } from "../../custom";
import { seniorSchoolSubjects } from "../../../config/subjects";

const ReportSubjectForm = ({ index, handleChange }) => {
  return (
    <Wrapper className="results-field py-4">
      <div className="">
        <div>
          <label>
            <small>Subject</small>
          </label>
          <InputSelect
            onChange={(e) => handleChange(index, "subject", e.target.value)}
          >
            {seniorSchoolSubjects.map((subject, index) => (
              <option value={subject} key={index}>
                {subject}
              </option>
            ))}
          </InputSelect>
        </div>
      </div>

      <div className="">
        <div>
          <label>
            <small>C.A score</small>
          </label>
          <Input
            placeholder="C.A score"
            onChange={(e) =>
              handleChange(index, "continuousAssessmentScore", e.target.value)
            }
          />
        </div>
      </div>

      <div className="">
        <div>
          <label>
            <small>Exam score</small>
          </label>
          <Input
            placeholder="Exam score"
            onChange={(e) => handleChange(index, "examScore", e.target.value)}
          />
        </div>
      </div>
      <div className="">
        <div>
          <label>
            <small>Total Weighted Ave. </small>
          </label>

          <Input
            placeholder="Total Weighted Average"
            onChange={(e) =>
              handleChange(index, "totalWeightedAverage", e.target.value)
            }
          />
        </div>
      </div>
      <div className="">
        <div>
          <label>
            <small>Position grade</small>
          </label>

          <Input
            placeholder="Position grade"
            onChange={(e) =>
              handleChange(index, "positionGrade", e.target.value)
            }
          />
        </div>
      </div>
      <div className="">
        <div>
          <label>
            <small>Comment</small>
          </label>

          <Input
            placeholder="Comment"
            onChange={(e) => handleChange(index, "comment", e.target.value)}
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100% !important;
  display: flex;
  /* grid-template-columns: repeat(6, 1fr); */

  gap: 10px;
`;

export default ReportSubjectForm;
