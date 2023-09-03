import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/custom/Button";
import styled from "styled-components";
import Input from "../../components/custom/Input";
import { InputSelect } from "../../components/custom";

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

  // add new and fresh input components for subject
  const addSubjectField = () => {
    setSubjects([...subjects, defaultSubjectValues]);
  };

  const { handleSubmit, register, getValues, setValue } = useForm({
    defaultValues: {
      subjects: [
        {
          subject: "",
          continuousAssessmentScore: 1,
          examScore: 1,
          totalWeightedAverage: 1,
          positionGrade: 1,
          comment: "",
        },
      ],
      status: "DRAFT",
      term: "FIRST_TERM",
    },
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const handleChange = (index, e) => {
    console.log(e);
    const { name, value } = e.target;
    const list = [...subjects];
    list[index][name] = value;
    setSubjects(list);
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
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* SUBJECT INPUT */}
        {subjects.map((subject, index) => {
          const {} = subject;
          return (
            <Wrapper className="results-field py-4">
              <div className="">
                <div>
                  <label>
                    <small>Subject</small>
                  </label>
                  <InputSelect
                    onChange={(e) => {
                      console.log(e.target.value);
                      handleChange(index, e);
                    }}
                  >
                    <option value="English">English</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Accounting">Accounting</option>
                    <option value="Social studies">Social studies</option>
                  </InputSelect>
                </div>
              </div>

              <div className="">
                <div>
                  <label>
                    <small>C.A score</small>
                  </label>
                  <Input placeholder="C.A score" />
                </div>
              </div>

              <div className="">
                <div>
                  <label>
                    <small>Exam score</small>
                  </label>
                  <Input placeholder="Exam score" />
                </div>
              </div>
              <div className="">
                <div>
                  <label>
                    <small>Total Weighted Ave. </small>
                  </label>

                  <Input placeholder="Total Weighted Average" />
                </div>
              </div>
              <div className="">
                <div>
                  <label>
                    <small>Position grade</small>
                  </label>

                  <Input placeholder="Position grade" />
                </div>
              </div>
              <div className="">
                <div>
                  <label>
                    <small>Comment</small>
                  </label>

                  <Input placeholder="Comment" />
                </div>
              </div>
            </Wrapper>
          );
        })}

        <Button onClick={addSubjectField}>Add new</Button>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
const Wrapper = styled.div`
  width: 100% !important;
  display: flex;
  /* grid-template-columns: repeat(6, 1fr); */

  gap: 10px;
`;
