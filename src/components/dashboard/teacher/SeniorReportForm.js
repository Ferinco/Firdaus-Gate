import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import toast from "react-hot-toast";
import lodash from "lodash";
import styled from "styled-components";
import { Button } from "../../../components/custom/Button";
import { Input } from "../../../components/custom";
import SeniorPerformanceForm from "./seniorPerformanceForm";
import { CircularProgress } from "../../../components/custom";
import { useDispatch } from "react-redux";
import { fetchStudents } from "../../../redux/slices/users";
import { createReports } from "../../../redux/slices/reports";
import { useAuth } from "../../../hooks/useAuth";
import { seniorSchoolSubjects } from "../../../constants/subjects";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "../../../routes/paths";

SeniorReportForm.propTypes = {
  students: PropTypes.array,
  isLoading: PropTypes.bool,
};
export default function SeniorReportForm({ students, isLoading }) {
  const { user } = useAuth();
  const dispatch = useDispatch();

  // science subject list default values
  const scienceSubject = seniorSchoolSubjects
    .filter((item) => item.department.includes("science"))
    .map((item) => {
      return {
        subject: item.name,
        continuousAssessmentScore: "",
        examScore: "",
        totalWeightedAverage: "",
        positionGrade: "",
        comment: "",
      };
    });

  // commercial subject default values
  const commercialSubject = seniorSchoolSubjects
    .filter((item) => item.department.includes("commercial"))
    .map((item) => {
      return {
        subject: item.name,
        continuousAssessmentScore: "",
        examScore: "",
        totalWeightedAverage: "",
        positionGrade: "",
        comment: "",
      };
    });

  // art subject list default values
  const artSubject = seniorSchoolSubjects
    .filter((item) => item.department.includes("art"))
    .map((item) => {
      return {
        subject: item.name,
        continuousAssessmentScore: "",
        examScore: "",
        totalWeightedAverage: "",
        positionGrade: "",
        comment: "",
      };
    });
  // Default values for subject's grade (general)
  const defaultSubjectValues = seniorSchoolSubjects.map((item) => {
    return {
      subject: item.name,
      continuousAssessmentScore: "",
      examScore: "",
      totalWeightedAverage: "",
      positionGrade: "",
      comment: "",
    };
  });
  const [loading, setLoading] = React.useState(false);
  // React hook form implementation
  const { register, control, handleSubmit, watch, getValues, setValue, reset } =
    useForm({
      defaultValues: {
        // (1) PERFORMANCE IN SUBJECT
        performance:
          (user.department === "science" && scienceSubject) ||
          (user.department === "commercial" && commercialSubject) ||
          (user.department === "art" && artSubject) ||
          defaultSubjectValues,
        // (2) ATTENDANCE
        attendance: {
          timesSchoolOpened: "",
          timePresent: "",
          timeAbsent: "",
        },

        // (3) PERSONAL TRAIT
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
        // (4) PERSONAL SKILLS
        personalSkills: {
          literary: "",
          technical: "",
          innovative: "",
          sporting: "",
          quranMemorization: "",
          hadithSkill: "",
          arabiyyaAndFiqhu: "",
          cultural: "",
        },
        // (5) AFFECTIVE DOMAIN
        affectiveDomain: {
          punctuality: "",
          politeness: "",
          attentiveness: "",
          neatness: "",
          initiative: "",
          perseverance: "",
          teamWork: "",
          leadershipSpirit: "",
          relationshipWithTeachers: "",
          attitudeToWork: "",
          health: "",
          emotionalStability: "",
          innovative: "",
        },
        // (6)

        // (7) SPORT
        sports: {
          ballGames: "",
          track: "",
          throws: "",
          swimming: "",
          jumps: "",
        },
        reportClass: user.classHandled,
        classTeacherComment: "",
        student: "",
        classSection: "senior",
      },
    });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "performance",
  });
  const onSubmit = async (values) => {
    console.log(values);
    setLoading(true);
    dispatch(createReports({ reportData: values }))
      .unwrap()
      .then((res) => {
        setLoading(false);
        reset();
        toast.success("Report card has been created successfully");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        if (error.response.data.message)
          toast.error(error.response.data.message);
        else {
          toast.error("Error creating student report, try again later");
        }
      });
  };

  const watchPerformance = watch("performance", fields);

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
        <Wrapper className="container-fluid w-100 p-3">
          <div className="">
            <h3 className="">Create result for student</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {students.length ? (
              <div className="">
                <select {...register("student")}>
                  <option value="" disabled>
                    Select Student
                  </option>
                  {!isLoading &&
                    students.map((student) => (
                      <option key={student._id} value={student._id}>
                        {student.admissionNumber} - {student.firstName}{" "}
                        {student.lastName}
                      </option>
                    ))}
                </select>
              </div>
            ) : (
              <p className="text-muted">
                <small>
                  You do not have any student, create a new student profile{" "}
                  <Link to={PATH_DASHBOARD.teacher.create}>here</Link>
                </small>
              </p>
            )}

            {/* SUBJECT INPUT */}

            <div className="card my-4 p-3 results-div">
              {" "}
              {fields.map((item, index) => {
                return (
                  <div key={item.id} className="result-row mt-3">
                    <SeniorPerformanceForm
                      index={index}
                      control={control}
                      watchPerformance={watchPerformance}
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
            </div>

            {/* ATTENDANCE (REGULARITY AND PUNCTUALITY) */}
            <div className="card attendance-div my-5 p-3">
              <p className="lead">ATTENDANCE (Regularity & Punctuality)</p>
              <div className="d-flex gap-3 attendance-field">
                <div>
                  <input
                    placeholder="Times School Opened"
                    {...register("attendance.timesSchoolOpened")}
                  />
                </div>
                <div>
                  <input
                    placeholder="Time Present"
                    {...register("attendance.timePresent")}
                  />
                </div>
                <div>
                  <input
                    placeholder="Time Absent"
                    {...register("attendance.timeAbsent")}
                  />
                </div>
              </div>
            </div>

            {/* SPORTS */}
            <div className="card my-5 sports-div p-3">
              <p className="lead">Sports</p>
              <div className="my-2 d-flex flex-wrap div">
                {Object.keys(getValues().sports).map((item) => {
                  return (
                    <div className="form-check" key={item}>
                      <label>{lodash.capitalize(item)}</label>
                      <Input
                        onChange={(e) =>
                          setValue(`sports.${item}`, e.target.value)
                        }
                        type="text"
                      />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* PERSONAL TRAIT */}
            <div className="card my-5 traits-div p-3">
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

            {/* PERSONAL SKILLS */}
            <div className="card my-5 personal-div p-3">
              <p className="lead">Personal skills</p>
              <div className="my-2 d-flex flex-wrap traits-div">
                {Object.keys(getValues().personalSkills).map((item) => {
                  return (
                    <div className="form-check" key={item}>
                      <label>{lodash.capitalize(item)}</label>
                      <Input
                        onChange={(e) =>
                          setValue(`personalSkills.${item}`, e.target.value)
                        }
                        type="text"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            {/* AFFECTIVE DOMAIN */}
            <div className="card my-5 domain-div p-3">
              <p className="lead">Affective domain</p>
              <div className="my-2 d-flex flex-wrap traits-div">
                {Object.keys(getValues().affectiveDomain).map((item) => {
                  return (
                    <div className="form-check" key={item}>
                      <label>{lodash.capitalize(item)}</label>
                      <Input
                        onChange={(e) =>
                          setValue(`affectiveDomain.${item}`, e.target.value)
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
                  rows={4}
                  cols={50}
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
  select {
    border-radius: 10px;
    padding: 5px;
    outline: 0;
    max-width: 120px;
    background-color: #f5f5f5;
    color: grey;
  }
  label {
    font-size: 14px;
    color: black;
  }

  input {
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #f1f1f1;
    border: 0;
    outline: 0;
    border: 1px solid grey;
    max-width: 120px;
  }
  .card {
    border-radius: 20px;
    border: 0;
  }
  .sports-div{
    .div{
      margin: 0 !important;
      justify-content: left;
      align-items: start;
    }
  }
  @media screen and (max-width: 550px) {
    .card {
   padding-left:7px !important;
   padding-right:7px !important;

  }
  input {
    max-width: 90px;
  }
  }
`;
