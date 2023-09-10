import React from "react";
import { useForm, useFieldArray, Conroller, Controller } from "react-hook-form";
import { Button } from "../../../components/custom/Button";
import styled from "styled-components";
import Input from "../../../components/custom/Input";
import { InputSelect } from "../../../components/custom";
import ReportSubjectForm from "./ReportSubjectForm"
import { ReportService } from "../../../services/reportService";
import { OverlayLoading } from "../../../components/OverlayLoading";
import { Icon } from "@iconify/react";
import { seniorSchoolSubjects } from "../../../constants/subjects";
import toast from "react-hot-toast";

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
          punctuality: false,
          neatness: false,
          leadership: false,
          trait: false,
          demeanor: false,
          honesty: false,
          respect: false,
          mixing: false,
          obedience: false,
          teamWork: false,
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
    // try {
    // setLoading(true)
    //   const data = await  ReportService.createReport(subjects)
    // setLoading(false)
    // }
    // catch(error){
    //   console.log(error)
    // setLoading(false)
    // }
  };

  const watchResult = watch("result", fields);

  const handleSave = () => {
    toast.success("Student report has been saved");
  };

  return (
    <Wrapper className="container w-100 px-5">
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
                <Input placeholder="Times School Opened" />
              </div>
              <div>
                <Input placeholder="Time Present" />
              </div>
              <div>
                <Input placeholder="Time Absent" />
              </div>
            </div>
          </div>
          <div className="my-2">
            {Object.keys(getValues().personalTrait).map((item) => {
              return (
                <div className="form-check" key={item}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    {...register(`personalTrait.${item}`)}
                    value=""
                  />
                  <label>{item}</label>
                </div>
              );
            })}
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
.result-row{
  padding: 10px;
 background-color: white;
 border-radius: 20px;
}
.attendance-field{
  background-color: white;
 border-radius: 20px;
 padding: 40px 10px;
}
`
