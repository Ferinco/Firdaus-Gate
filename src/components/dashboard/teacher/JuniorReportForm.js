import React, { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import styled from "styled-components";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import JuniorPerformanceForm from "./juniorPerformanceForm";
import { Button, CircularProgress } from "../../custom";
import { juniorSchoolSubjects } from "../../../constants/subjects";
import { createReports } from "../../../redux/slices/reports";
import { useAuth } from "../../../hooks/useAuth";
import { useTerm } from "../../../hooks/useTerm";

const performanceValues = juniorSchoolSubjects.map((item) => {
  return {
    subject: item,
    continuousAssessmentScore: "",
    totalWeightedAverage: "",
    sumTestScores: "",
  };
});
const defaultSubjectValues = [...performanceValues];
export default function JuniorReportForm({ students, isLoading, reportYear }) {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { currentTerm } = useTerm();
  const [loading, setLoading] = useState(false);

  const { register, control, watch, setValue, handleSubmit, reset } = useForm({
    defaultValues: {
      classSection: "junior",
      // Number 1
      attendance: {
        school: {
          timesSchoolOpenedAndActivities: "",
          timesPresent: "",
          timesAbsent: "",
          timesPunctual: "",
        },
        sportAndAthletics: {
          timesSchoolOpenedAndActivities: "",
          timesPresent: "",
          timesAbsent: "",
          timesPunctual: "",
        },
        otherOrganizedActivities: {
          timesSchoolOpenedAndActivities: "",
          timesPresent: "",
          timesAbsent: "",
          timesPunctual: "",
        },
      },
      // Number 2 (CONDUCT)
      conduct: {
        comments: "",
      },
      // Number 3 (Physical development, health and cleanliness)
      physicalHealth: {
        height: {
          beginningOfTerm: "",
          endOfTerm: "",
        },
        weight: {
          beginningOfTerm: "",
          endOfTerm: "",
        },
        daysAbsentDueToIllness: "",
        natureOfIllness: "",
        cleanlinessRating: "",
        remarks: "",
      },

      // Number 4 (Performance in subject)
      position: "",
      performance: defaultSubjectValues,
      numberOfStudents: "",
      //   Number 5 (Sport)
      sports: {
        ballGames: "",
        track: "",
        throws: "",
        swimming: "",
        jumps: "",
      },
      // Number 6 (Clubs, youth organization etc.)
      clubs: {
        organization: "",
        officeHeld: "",
        significantContribution: "",
      },
      // and lastly
      classTeacherSignature: "",
      principalComment: "",
      classTeacherComment: "",
      schoolReopens: "",
      student: "",
      reportClass: user.classHandled,
      reportTerm: currentTerm.name,
      reportYear: reportYear || "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "performance",
  });

  const watchPerformance = watch("performance", fields);

  const onSubmit = (values) => {
    console.log(values);
    setLoading(true);
    dispatch(createReports({ reportData: values }))
      .unwrap()
      .then((res) => {
        setLoading(false);
        toast.success("Report card has been created successfully");
        // reset();
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        if (error.response.data.message)
          toast.error(error.response.data.message);
        toast.error("Error creating student report, try again later");
      });
  };
  return (
    <Wrapper>
      {loading && <CircularProgress />}
      {!loading && (
        <div className="p-md-5 p-3">
          <h2>Junior report form</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <select {...register("student")}>
              {!isLoading &&
                students.map((student) => (
                  <option key={student._id} value={student._id}>
                    {student.admissionNumber}/{student.firstName}{" "}
                    {student.lastName}
                  </option>
                ))}
            </select>
            <div className="card p-3 my-5 attendance-div d-flex flex-column gap-3">
              <h6>
                Attendance <br /> (Regularity & Punctuality)
              </h6>
              <div className="d-flex flex-column flex-md-row gap-2">
                <div className="d-flex field flex-column">
                  <label>No of times school opened</label>
                  <input
                    type="text"
                    {...register(
                      "attendance.school.timesSchoolOpenedAndActivities"
                    )}
                    placeholder="number of times school opened"
                  />
                </div>
                <div className="d-flex field flex-column">
                  <label>No of times present</label>
                  <input
                    type="text"
                    {...register("attendance.school.timesPresent")}
                    placeholder="number of times present"
                  />
                </div>
                <div className="d-flex field flex-column">
                  <label>No of times Absent</label>
                  <input
                    type="text"
                    {...register("attendance.school.timesAbsent")}
                    placeholder="number of times absent"
                  />
                </div>
              </div>
            </div>

            <div className="card my-5 p-3 conduct-div gap-3">
              <h6>2. CONDUCT</h6>
              <div className="d-flex flex-column field">
                <label>Comments</label>
                <textarea
                  type="text"
                  {...register("conduct.comments")}
                  placeholder="comments"
                />
              </div>
            </div>

            <div className="card my-5 p-3 physicals-div">
              <h6>3. PHYSICAL DEVELOPMENT, HEALTH AND CLEANLINESS</h6>
              <div className="d-flex flex-column mt-3 gap-3">
                <div className="d-flex row justify-content-between">
                  <div className="col-md-6 d-flex flex-column">
                    <label>Height (Beginning of Term)</label>
                    <input
                      type="text"
                      {...register("physicalHealth.height.beginningOfTerm")}
                      placeholder="Height (Beginning of Term)"
                    />
                  </div>
                  <div className="col-md-6 d-flex flex-column">
                    <label>Height (End of Term)</label>
                    <input
                      type="text"
                      {...register("physicalHealth.height.endOfTerm")}
                      placeholder="Height (End of Term)"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 d-flex flex-column">
                    <label>Weight (Beginning of Term)</label>
                    <input
                      type="text"
                      {...register("physicalHealth.weight.beginningOfTerm")}
                      placeholder="Weight (Beginning of Term)"
                    />
                  </div>
                  <div className="col-md-6 d-flex flex-column">
                    <label>Weight (End of Term)</label>
                    <input
                      type="text"
                      {...register("physicalHealth.weight.endOfTerm")}
                      placeholder="Weight (End of Term)"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 d-flex flex-column">
                    <label>Number of Days Absent Due to Illness</label>
                    <input
                      type="text"
                      {...register("physicalHealth.daysAbsentDueToIllness")}
                      placeholder="Number of Days Absent Due to Illness"
                    />
                  </div>
                  <div className="col-md-6 d-flex flex-column">
                    <label>Nature of Illness</label>
                    <input
                      type="text"
                      {...register("physicalHealth.natureOfIllness")}
                      placeholder="Nature Illness"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 d-flex flex-column">
                    <label>Cleanliness Rating</label>
                    <input
                      type="text"
                      {...register("physicalHealth.cleanlinessRating")}
                      placeholder="Cleanliness Rating"
                    />
                  </div>
                  <div className="col-md-6 d-flex flex-column">
                    <label>Remarks</label>
                    <textarea
                      type="text"
                      {...register("physicalHealth.remarks")}
                      placeholder="...Remarks"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="card my-4 p-3 results-div">
              <h6>4. PERFORMANCE IN SUBJECTS</h6>
              {fields.map((item, index) => {
                return (
                  <div key={item.id} className="result-row mt-3">
                    <JuniorPerformanceForm
                      index={index}
                      control={control}
                      watch={watchPerformance}
                      remove={remove}
                      setValue={setValue}
                      field={item}
                    />
                  </div>
                );
              })}
              <Button
                className="mt-3 submit-btn"
                type="button"
                onClick={() =>
                  append({
                    continuousAssessmentScore: "",
                    totalWeightedAverage: "",
                    sumTestScores: "",
                  })
                }
                blue
              >
                Add new
              </Button>
            </div>

            <div className="card my-4 sports-div my-5 p-3">
              <div>
                <h6>5. SPORT </h6>
                <div>
                  <p>Level Attained</p>
                </div>
              </div>
              <div className="d-flex flex-row sports-field flex-wrap gap-3">
                <div className="d-flex flex-column ">
                  <label>Ball Games </label>
                  <input
                    type="text"
                    {...register("sports.ballGames")}
                    placeholder="Ball games"
                  />
                </div>
                <div className="d-flex flex-column ">
                  <label>Track</label>
                  <input
                    type="text"
                    {...register("sports.track")}
                    placeholder="Track"
                  />
                </div>
                <div className="d-flex flex-column ">
                  <label>Throws</label>
                  <input
                    type="text"
                    {...register("sports.throws")}
                    placeholder="Throws"
                  />
                </div>
                <div className="d-flex flex-column ">
                  <label>Swimming</label>
                  <input
                    type="text"
                    {...register("sports.swimming")}
                    placeholder="Swimming"
                  />
                </div>
                <div className="d-flex flex-column ">
                  <label>Jumps</label>
                  <input
                    type="text"
                    {...register("sports.jumps")}
                    placeholder="Jumps"
                  />
                </div>
              </div>
            </div>

            <div className="card my-4 clubs-div my-5 p-3">
              <div>
                <h6>6. CLUB, YOUTH ORGANIZATION ETC. </h6>
              </div>
              <div className="d-flex flex-row clubs-field flex-wrap gap-3">
                <div className="d-flex flex-column ">
                  <label>Organization </label>
                  <input
                    type="text"
                    {...register("clubs.organization")}
                    placeholder="Organization"
                  />
                </div>
                <div className="d-flex flex-column ">
                  <label>Office Held</label>
                  <input
                    type="text"
                    {...register("clubs.officeHeld")}
                    placeholder="Office Held"
                  />
                </div>
                <div className="d-flex flex-column ">
                  <label>Significant Contribution</label>
                  <input
                    type="text"
                    {...register("clubs.significantContribution")}
                    placeholder="Significant Contribution"
                  />
                </div>
              </div>
            </div>

            <div className="my-4 card my-5 p-3 d-flex flex-wrap flex-row gap-3 end-div">
              <div className="d-flex flex-column">
                <label>Class teacher's comments </label>
                <textarea
                  type="text"
                  {...register("classTeacherComment")}
                  placeholder="class teacher's comments"
                />
              </div>

              <div className="d-flex flex-column">
                <label>School re-opens</label>
                <input
                  type="date"
                  {...register("schoolReopens")}
                  placeholder=""
                  className="date-input"
                />
              </div>
            </div>

            <div>
              <Button type="submit" blue>
                Submit
              </Button>
            </div>
          </form>
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  select {
    border-radius: 10px;
    padding: 5px;
    outline: 0;
  }
  label {
    font-size: 14px;
    color: black;
  }

  .row {
    justify-content: space-between !important;
  }
  .physicals-div,
  .sports-div,
  .clubs-div,
  .attendance-div,
  .end-div {
    input {
      padding: 5px 10px;
      border-radius: 5px;
      background-color: #f1f1f1;
      border: 0;
      outline: 0;
      border: 1px solid grey;
      width: fit-content;
    }
  }
  .results-div {
    .submit-btn {
      width: fit-content;
    }
  }
  textarea {
    background-color: #f1f1f1;
    border: 1px solid grey;
    padding: 5px 10px;
    border-radius: 5px;
    max-width: 300px;
  }
  .attendance-div {
  }

  .card {
    border-radius: 20px;
    border: 0;
  }
  .conduct-div {
  }
`;
