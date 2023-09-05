import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/custom/Button";
import styled from "styled-components";
import Input from "../../components/custom/Input";
import { InputSelect } from "../../components/custom";
import ReportSubjectForm from "../../components/dashboard/teacher/ReportSubjectForm";
import { ReportService } from "../../services/reportService";

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
  const [subjects, setSubjects] = React.useState([defaultSubjectValues]);
  const [loading, setLoading] = React.useState(false);
  const { setValue } = useForm({
    defaultValues: [defaultSubjectValues],
  });
  // add new and fresh input components for subject
  const addSubjectField = () => {
    setSubjects([...subjects, defaultSubjectValues]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(subjects);
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

  const handleChange = (index, subject, value) => {
    const updatedFields = [...subjects];
    updatedFields[index][subject] = value;
    setSubjects(updatedFields);
  };
  const handleRemoveSubject = (index) => {
    const rows = [...subjects];
    rows.splice(index, 1);
    setSubjects(rows);
  };
  return (
    <div className="container w-100 px-5">
      <div className="py-3">
        <h3 className="">Create result for student</h3>
      </div>

      {/* GRADING FORM STARTS HERE */}
      <form onSubmit={handleSubmit}>
        {/* SUBJECT INPUT */}
        {subjects.map((subject, index) => {
          const {} = subject;
          return (
            <ReportSubjectForm
              subjects={subjects}
              setSubjects={setSubjects}
              index={index}
              subject
              handleChange={handleChange}
              setValue={setValue}
            />
          );
        })}

        <Button onClick={addSubjectField}>Add new</Button>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
