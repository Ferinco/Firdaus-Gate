import React from "react";
import styled from "styled-components";
import { InputSelect, Input } from "../../custom";
import { seniorSchoolSubjects } from "../../../constants/subjects";
import { Controller } from "react-hook-form";

const JuniorPerformanceForm = ({
  remove,
  index,
  control,
  watch,
  setValue,
  field,
}) => {
  const getWA =
    Number(watch[index].continuousAssessmentScore) +
    Number(watch[index].sumTestScores);
  React.useEffect(() => {
    setValue(`performance.${index}.totalWeightedAverage`, getWA);
  }, [watch[index].continuousAssessmentScore, watch[index].examScore]);

  return (
    <Wrapper className=" py-4">
      <div className=" fields">
        <div className="field d-flex flex-column">
          <label>
            <small>Subject</small>
          </label>
          <Controller
            render={({ field }) => (
              <Input placeholder="Select subject" {...field} />
            )}
            name={`performance.${index}.subject`}
            control={control}
          />
        </div>
        <div className="field">
          <label>
            <small>C.A score</small>
          </label>
          <Controller
            render={({ field }) => <Input placeholder="C.A score" {...field} />}
            name={`performance.${index}.continuousAssessmentScore`}
            control={control}
          />
        </div>
        <div className="field">
          <label>
            <small>Exam score</small>
          </label>

          <Controller
            render={({ field }) => (
              <Input placeholder="Exam score" {...field} />
            )}
            name={`performance.${index}.sumTestScores`}
            control={control}
          />
        </div>

        <div className="field">
          <label>
            <small>T.W Average </small>
          </label>

          <Input placeholder="Total Weighted Average" value={getWA} />
        </div>
      </div>
      <div>
        <button className="remove-btn" onClick={() => remove(index)}>
          X
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
border-bottom: 1px solid #f1f1f1;
  .fields {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  /* grid-template-columns: repeat(6, 1fr); */

  gap: 10px;
  .remove-btn {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: red;
    font-size: 12px;
    color: white;
    border: 0;
  }
`;

export default JuniorPerformanceForm;
