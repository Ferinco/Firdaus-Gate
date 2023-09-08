import React from "react";
import styled from "styled-components";
import Input from "../../custom/Input";
import { InputSelect } from "../../custom";
import { seniorSchoolSubjects } from "../../../constants/subjects";
import { Controller } from "react-hook-form";

const ReportSubjectForm = ({ register, index, control }) => {
  const subjects = seniorSchoolSubjects.map((subject) => {
    return [
      {
        name: subject,
      },
    ];
  });
  console.log(subjects);
  return (
    <Wrapper className="results-field py-4">
      <div className="">
        <div>
          <label>
            <small>Subject</small>
          </label>

          <Controller
            render={({ field }) => (
              <InputSelect defaultValue="Select subject" {...field}>
                {seniorSchoolSubjects.map((subject, index) => (
                  <option value={subject} key={index}>
                    {subject}
                  </option>
                ))}
              </InputSelect>
            )}
            name={`result.${index}.subject`}
            control={control}
          />
        </div>
      </div>

      <div className="">
        <div>
          <label>
            <small>C.A score</small>
          </label>
          <Controller
            render={({ field }) => <Input placeholder="C.A score" {...field} />}
            name={`result.${index}.continuousAssessmentScore`}
            control={control}
          />
        </div>
      </div>

      <div className="">
        <div>
          <label>
            <small>Exam score</small>
          </label>

          <Controller
            render={({ field }) => (
              <Input placeholder="Exam score" {...field} />
            )}
            name={`result.${index}.examScore`}
            control={control}
          />
        </div>
      </div>
      <div className="">
        <div>
          <label>
            <small>Total Weighted Ave. </small>
          </label>

          <Controller
            render={({ field }) => (
              <Input placeholder="Total Weighted Average" {...field} />
            )}
            name={`result.${index}.totalWeightedAverage`}
            control={control}
          />
        </div>
      </div>
      <div className="">
        <div>
          <label>
            <small>Position grade</small>
          </label>

          <Controller
            render={({ field }) => (
              <Input placeholder="Position grade" {...field} />
            )}
            name={`result.${index}.positionGrade`}
            control={control}
          />
        </div>
      </div>
      <div className="">
        <div>
          <label>
            <small>Comment</small>
          </label>

          <Controller
            render={({ field }) => <Input placeholder="comment" {...field} />}
            name={`result.${index}.comment`}
            control={control}
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
