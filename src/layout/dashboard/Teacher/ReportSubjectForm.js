import React from "react";
import styled from "styled-components";
import Input from "../../../components/custom/Input";
import { InputSelect } from "../../../components/custom";
import { seniorSchoolSubjects } from "../../../constants/subjects";
import { Controller } from "react-hook-form";

const ReportSubjectForm = ({
  remove,
  index,
  control,
  watchResult,
  setValue,
}) => {
  const getWA =
    Number(watchResult[index].continuousAssessmentScore) +
    Number(watchResult[index].examScore);

  function getPositionGrade() {
    switch (true) {
      case getWA >= 75 && getWA <= 100:
        return "A1";
      case getWA >= 70 && getWA <= 74:
        return "B2";
      case getWA >= 65 && getWA <= 69:
        return "B3";
      case getWA >= 60 && getWA <= 64:
        return "C4";
      case getWA >= 55 && getWA <= 59:
        return "C5";
      case getWA >= 50 && getWA <= 54:
        return "C6";
      case getWA >= 45 && getWA <= 49:
        return "D7";
      case getWA >= 40 && getWA <= 44:
        return "E8";
      case getWA >= 0 && getWA <= 39:
        return "F9";
      default:
        return "";
    }
  }

  function getComment() {
    switch (true) {
      case getWA >= 75 && getWA <= 100:
        return "Excellent";
      case getWA >= 70 && getWA <= 74:
        return "V/Good";
      case getWA >= 65 && getWA <= 69:
        return "Good";
      case getWA >= 60 && getWA <= 64:
        return "Credit";
      case getWA >= 55 && getWA <= 59:
        return "Credit";
      case getWA >= 50 && getWA <= 54:
        return "Credit";
      case getWA >= 45 && getWA <= 49:
        return "Pass";
      case getWA >= 40 && getWA <= 44:
        return "Pass";
      case getWA >= 0 && getWA <= 39:
        return "Fail";
      default:
        return "";
    }
  }
  return (
    <Wrapper className="results-field py-4">
 <div className="fields">
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

          <Input
            placeholder="Total Weighted Average"
            onChange={(e) => {
              setValue(`result.${index}.totalWeightedAverage`, e.target.value);
              console.log(e.target.value);
            }}
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
            value={getPositionGrade()}
            onChange={(e) =>
              setValue(`result.${index}.positionGrade`, e.target.value)
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
            placeholder="comment"
            value={getComment()}
            onChange={(e) =>
              setValue(`result.${index}.comment`, e.target.value)
            }
          />
        </div>
      </div>
 </div>
      <div>
        <button className="remove-btn" onClick={() => remove(index)}>X</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
.fields{
  width: 100% !important;
  display: flex;
  align-items: center;
  gap: 10px;
}
  /* grid-template-columns: repeat(6, 1fr); */

  gap: 10px;
  .remove-btn{
   width: 20px;
   height: 20px;
    border-radius: 50%;
    background-color: red;
    font-size: 12px;
    color: white;
    border: 0;
  }
`;

export default ReportSubjectForm;
