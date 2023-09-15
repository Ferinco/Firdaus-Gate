import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { Button } from "../../../components/custom/Button";
import styled from "styled-components";
import Input from "../../../components/custom/Input";
import ReportSubjectForm from "./ReportSubjectForm";
import { OverlayLoading } from "../../../components/OverlayLoading";
import toast from "react-hot-toast";
import lodash from "lodash";

export default function CreateResult() {
  // Default values for subject's grade
  const defaultSubjectValues = {
    subject: "",
    continuousAssessmentScore: "",
    examScore: "",
    totalWeightedAverage: "",
    positionGrade: "",
    comment: "",
  };

  const [loading, setLoading] = React.useState(false);
  // React hook form implementation

  const { register, control, handleSubmit, reset, watch, getValues, setValue } =
    useForm({
      defaultValues: {
        result: [defaultSubjectValues],
        attendance: {
          timesSchoolOpened: "",
          timePresent: "",
          timeAbsent: "",
        },
        personalTrait: {
          punctuality: "",
          neatness: "",
          leadership: "",
          trait: "",
          demeanor: "",
          honesty: "",
          respect: "",
          mixing: "",
          obedience: "",
          teamWork: "",
        },
        reportClass: "",
        reportTerm: "",
        classTeacherComment: "",
        student: "",
      },
    });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "result",
  });
  const onSubmit = async (values) => {
    console.log(values);
  };

  const watchResult = watch("result", fields);

  const handleSave = () => {
    toast.success("Student report has been saved");
  };

  return (
    <Wrapper className="container-fluid w-100 px-5 pb-3">
      <div className="py-3">
        <h3 className="">Create result for student</h3>
      </div>

      {/* GRADING FORM STARTS HERE */}
      {loading ? (
        <OverlayLoading />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* SUBJECT INPUT */}

          {fields.map((item, index) => {
            return (
              <div key={item.id} className="result-row mt-3">
                <ReportSubjectForm
                  index={index}
                  control={control}
                  watchResult={watchResult}
                  remove={remove}
                  setValue={setValue}
                  field={item}
                />
              </div>
            );
          })}
          <Button
            className="mt-3"
            onClick={() =>
              append({
                comment: "",
                continuousAssessmentScore: "",
                examScore: "",
                positionGrade: "",
                subject: "",
                totalWeightedAverage: "",
              })
            }
            blue
          >
            Add new
          </Button>

          <div className="my-5">
            <p className="lead">ATTENDANCE (Regularity & Punctuality)</p>
            <div className="d-flex gap-3 attendance-field">
              <div>
                <Input
                  placeholder="Times School Opened"
                  {...register("attendance.timesSchoolOpened")}
                />
              </div>
              <div>
                <Input
                  placeholder="Time Present"
                  {...register("attendance.timePresent")}
                />
              </div>
              <div>
                <Input placeholder="Time Absent" />
              </div>
            </div>
          </div>
          <div className="my-3">
            <p className="lead">Personal trait</p>
            <div className="my-2 d-flex flex-wrap traits-div">
              {Object.keys(getValues().personalTrait).map((item) => {
                return (
                  <div className="form-check" key={item}>
                    <label>{lodash.capitalize(item)}</label>
                    <Input
                      onChange={(e) =>
                        setValue(`personalTrait.${item}`, e.target.value)
                      }
                      type="number"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="d-flex gap-3">
            <Button type="submit" onClick={handleSave}>
              Save
            </Button>
            <Button type="submit" blue>
              Publish
            </Button>
          </div>
        </form>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 !important;
  width: 100% !important;
  .result-row {
    padding: 10px;
    background-color: white;
    border-radius: 20px;
    width: 100% !important;
  }
  .attendance-field {
    background-color: white;
    border-radius: 20px;
    padding: 40px 10px;
    width: fit-content !important;
  }
  .traits-div {
    background-color: white;
    border-radius: 20px;
    padding: 40px 10px;
  }
  .lead {
    font-weight: 600;
    padding-bottom: 10px;
    border-bottom: 1px solid white;
  }
`;