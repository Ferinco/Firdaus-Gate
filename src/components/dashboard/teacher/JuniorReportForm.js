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

const performanceValues = juniorSchoolSubjects.map((item) => {
  return {
    subject: item,
    continuousAssessmentScore: "",
    totalWeightedAverage: "",
    sumTestScores: "",
  };
});
const defaultSubjectValues = [...performanceValues];
export default function JuniorReportForm({ students, isLoading }) {
  const dispatch = useDispatch();
  const { user } = useAuth();
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
      reportTerm: "FIRST_TERM",
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
        reset()
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        toast.error("Error creating student report, try again later");
      });
  };
  return (
    <Wrapper>
      {loading && <CircularProgress />}
      {!loading && (
        <div className="container p-5">
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
            <div className="card p-3 my-5">
              <h6>
                Attendance <br /> (Regularity & Punctuality)
              </h6>
              <div>
                <label>No of times school opened</label>
                <input
                  type="text"
                  {...register(
                    "attendance.school.timesSchoolOpenedAndActivities"
                  )}
                  placeholder="number of times school opened"
                />
              </div>
              <div>
                <label>No of times present</label>
                <input
                  type="text"
                  {...register("attendance.school.timesPresent")}
                  placeholder="number of times present"
                />
              </div>
              <div>
                <label>No of times Absent</label>
                <input
                  type="text"
                  {...register("attendance.school.timesAbsent")}
                  placeholder="number of times absent"
                />
              </div>
            </div>

            <div className="card my-5 p-3">
              <h6>2. CONDUCT</h6>
              <div>
                <label>Comments</label>
                <input
                  type="text"
                  {...register("conduct.comments")}
                  placeholder="comments"
                />
              </div>
            </div>

            <div className="card my-5 p-3">
              <h6>3. PHYSICAL DEVELOPMENT, HEALTH AND CLEANLINESS</h6>
              <div className="row">
                <div className="col-md-6">
                  <div>
                    <label>Height (Beginning of Term)</label>
                    <input
                      type="text"
                      {...register("physicalHealth.height.beginningOfTerm")}
                      placeholder="Height (Beginning of Term)"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label>Height (End of Term)</label>
                    <input
                      type="text"
                      {...register("physicalHealth.height.endOfTerm")}
                      placeholder="Height (End of Term)"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div>
                    <label>Weight (Beginning of Term)</label>
                    <input
                      type="text"
                      {...register("physicalHealth.weight.beginningOfTerm")}
                      placeholder="Weight (Beginning of Term)"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <label>Weight (End of Term)</label>
                    <input
                      type="text"
                      {...register("physicalHealth.weight.endOfTerm")}
                      placeholder="Weight (End of Term)"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label>Number of Days Absent Due to Illness</label>
                <input
                  type="text"
                  {...register("physicalHealth.daysAbsentDueToIllness")}
                  placeholder=""
                />
              </div>
              <div>
                <label>Nature Illness</label>
                <input
                  type="text"
                  {...register("physicalHealth.natureOfIllness")}
                  placeholder=""
                />
              </div>
              <div>
                <label>Cleanliness Rating</label>
                <input
                  type="text"
                  {...register("physicalHealth.cleanlinessRating")}
                  placeholder=""
                />
              </div>
              <div>
                <label>Remarks</label>
                <input
                  type="text"
                  {...register("physicalHealth.remarks")}
                  placeholder=""
                />
              </div>
            </div>

            <div className="card my-4 p-3">
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
                className="mt-3"
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

            <div className="my-4">
              <div>
                <h6>5. SPORT </h6>
                <div>Level Attained</div>
              </div>
              <div>
                <label>Ball Games </label>
                <input
                  type="text"
                  {...register("sports.ballGames")}
                  placeholder="Ball games"
                />
              </div>
              <div>
                <label>Track</label>
                <input
                  type="text"
                  {...register("sports.track")}
                  placeholder=""
                />
              </div>
              <div>
                <label>Throws</label>
                <input
                  type="text"
                  {...register("sports.throws")}
                  placeholder=""
                />
              </div>
              <div>
                <label>Swimming</label>
                <input
                  type="text"
                  {...register("sports.swimming")}
                  placeholder=""
                />
              </div>
              <div>
                <label>Jumps</label>
                <input
                  type="text"
                  {...register("sports.jumps")}
                  placeholder=""
                />
              </div>
            </div>

            <div className="my-4">
              <div>
                <h6>6. CLUB, YOUTH ORGANIZATION ETC. </h6>
              </div>
              <div>
                <label>Organization </label>
                <input
                  type="text"
                  {...register("clubs.organization")}
                  placeholder=""
                />
              </div>
              <div>
                <label>Office Held</label>
                <input
                  type="text"
                  {...register("clubs.officeHeld")}
                  placeholder=""
                />
              </div>
              <div>
                <label>Significant Contribution</label>
                <input
                  type="text"
                  {...register("clubs.significantContribution")}
                  placeholder=""
                />
              </div>
            </div>

            <div className="my-4">
              <div>
                <label>Class teacher's comments </label>
                <input
                  type="text"
                  {...register("classTeacherComment")}
                  placeholder=""
                />
              </div>

              <div>
                <label>School re-opens</label>
                <input
                  type="text"
                  {...register("schoolReopens")}
                  placeholder=""
                />
              </div>
            </div>

            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
.card{
  border-radius: 10px;
}`;
