import React from "react";
import styled from "styled-components";
import { InputSelect, Input } from "../../custom";
import { seniorSchoolSubjects } from "../../../constants/subjects";
import { Controller } from "react-hook-form";

const SeniorPerformanceForm = ({
  remove,
  index,
  control,
  watchPerformance,
  setValue,
  field,
}) => {
  const getWA =
    Number(watchPerformance[index].continuousAssessmentScore) +
    Number(watchPerformance[index].examScore);

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

  React.useEffect(() => {
    setValue(`performance.${index}.positionGrade`, getPositionGrade());
    setValue(`performance.${index}.comment`, getComment());
    setValue(`performance.${index}.totalWeightedAverage`, getWA);
  }, [
    watchPerformance[index].continuousAssessmentScore,
    watchPerformance[index].examScore,
  ]);

  return (
    <Wrapper className=" py-2 px-2">
      <div className=" fields">
        <div className="field d-flex flex-column">
          <label>
            <small>Subject</small>
          </label>

          <Controller
            render={({ field }) => (
              <select
                className="form-select"
                defaultValue="Select subject"
                {...field}
              >
                {seniorSchoolSubjects.map((item, index) => (
                  <option value={item.name} key={index}>
                    {item.name}
                  </option>
                ))}
              </select>
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
            name={`performance.${index}.examScore`}
            control={control}
          />
        </div>
        <div className="field">
          <label>
            <small>Total W.A </small>
          </label>

          <Input placeholder="Total Weighted Average" value={getWA} />
        </div>
        <div className="field">
          <label>
            <small>Position G</small>
          </label>

          <Input placeholder="Position grade" value={getPositionGrade()} />

          {/* <Controller
            name={`performance[${index}].positionGrade`}
            control={control}
            render={({ field }) => (
              <input
                {...field}
                value={positionGrade} // Set the input value dynamically
              />
            )}
          /> */}
        </div>
        <div className="field">
          <label>
            <small>Comment</small>
          </label>

          <Input
            placeholder="comment"
            value={getComment()}
            onChange={(e) =>
              setValue(`performance.${index}.comment`, e.target.value)
            }
          />
        </div>
      </div>
      <div className="d-flex mt-3 justify-content-end">
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => remove(index)}
        >
          Remove
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .fields {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  /* grid-template-columns: repeat(6, 1fr); */

  gap: 10px;
  .remove-btn {
  }
`;

export default SeniorPerformanceForm;
