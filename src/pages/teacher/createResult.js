import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import toast from "react-hot-toast";
import lodash from "lodash";
import styled from "styled-components";
import { Button } from "../../components/custom/Button";
import { Input } from "../../components/custom";
import ReportSubjectForm from "./ReportSubjectForm";
import { CircularProgress } from "../../components/custom";
import { ReportService } from "../../services/reportService";
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentNames } from "../../redux/slices/students";
import { useAuth } from "../../hooks/useAuth";

export default function CreateResult() {
  const {user} = useAuth()
  const dispatch = useDispatch()
  const studentNames = useSelector((state)=> state.students.studentNames)
console.log(studentNames)
  useEffect(()=>{
    dispatch(fetchStudentNames("student", user._id))
  }, [dispatch])
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

  const { register, control, handleSubmit, watch, getValues, setValue } =
    useForm({
      defaultValues: {
        result: [defaultSubjectValues],
        attendance: {
          timesSchoolOpened: 0,
          timePresent: 0,
          timeAbsent: 0,
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

    setLoading(true);
    await ReportService.createReport(values)
      .then((response) => {
        console.log(response);
        setLoading(false);
        toast.success("Report card has been created successfully");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        toast.error("Error creating student report, try again later");
      });
  };

  const watchResult = watch("result", fields);

  const handleSave = () => {
    toast.success("Student report has been saved");
  };

  return (
    <>
      {/* GRADING FORM STARTS HERE */}
      {loading ? (
        <div className="h-100">
          <div className="d-flex align-items-center justify-content-center">
            <CircularProgress />
          </div>
        </div>
      ) : (
        <Wrapper className="container-fluid w-100 px-5 pb-3">
          <div className="py-3">
            <h3 className="">Create result for student</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="">
              <label> Select student </label>
              <select {...register("student")}>
              {studentNames.map((name) => (
        <option key={name}>{name}</option>
      ))}

              </select>
            </div>
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
              type="button"
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

            {/* ATTENDANCE (REGULARITY AND PUNCTUALITY) */}
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
                  <Input
                    placeholder="Time Absent"
                    {...register("attendance.timeAbsent")}
                  />
                </div>
              </div>
            </div>

            {/* PERSONAL TRAIT */}
            <div className="my-5">
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
                        type="text"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CLASS TEACHER COMMENT */}
            <div className="my-3">
              <p className="lead">Class teacher comment</p>
              <div className="card">
                <textarea
                className="text-area"
                  {...register("classTeacherComment")}
                  placeholder="Class teacher comment"
                />
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
        </Wrapper>
      )}
    </>
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
  .card{
    background-color: white;
    border-radius: 20px;
    padding: 40px 10px;
  }
  .text-area{
    border: 0;
    outline: 0;
  }
`;
