import React from "react";
import { useForm, useFieldArray, Conroller, Controller } from "react-hook-form";
import { Button } from "../../components/custom/Button";
import styled from "styled-components";
import Input from "../../components/custom/Input";
import { InputSelect } from "../../components/custom";
import ReportSubjectForm from "../../components/dashboard/teacher/ReportSubjectForm";
import { ReportService } from "../../services/reportService";
import { OverlayLoading } from "../../components/OverlayLoading";
import { Icon } from "@iconify/react";
import { seniorSchoolSubjects } from "../../constants/subjects";

export default function CreateResult() {
  // Default values for subject's grade
  const defaultSubjectValues = {
    subject: "",
    continuousAssessmentScore: 0,
    examScore: 0,
    totalWeightedAverage: 0,
    positionGrade: 0,
    comment: "",
  };

  const [loading, setLoading] = React.useState(false);
  // React hook form implementation

  const { register, control, handleSubmit, reset } = useForm({
    defaultValues: { result: [defaultSubjectValues] },
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
  return (
    <div className="container w-100 px-5">
      <div className="py-3">
        <h3 className="">Create result for student</h3>
      </div>

      {/* GRADING FORM STARTS HERE */}
      {loading ? (
        <OverlayLoading />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* SUBJECT INPUT */}
          {fields.map((item, index) => (
            <div key={item.id}>
              <ReportSubjectForm
                register={register}
                index={index}
                control={control}
              />
            </div>
          ))}

          <Button
            onClick={() =>
              append({
                comment: "",
                continuousAssessmentScore: 0,
                examScore: 0,
                positionGrade: 0,
                subject: "",
                totalWeightedAverage: 0,
              })
            }
          >
            Add new
          </Button>
          <Button type="submit" blue>
            Submit
          </Button>
        </form>
      )}
    </div>
  );
}
