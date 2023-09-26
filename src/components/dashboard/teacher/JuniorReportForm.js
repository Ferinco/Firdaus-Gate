import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import styled from "styled-components";

export default function JuniorReportForm({ students, isLoading }) {
  const defaultSubjectValues = {
    continuousAssessmentScore: "",
    totalWeightedAverage: "",
    sumTestScores: "",
  };
  const { register, control } = useForm({
    defaultValues: {
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

      // Number 3 (Physical development, health and cleanliness)
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

      // Number 4 (Performance in subject)
      position: "",
      performance: [defaultSubjectValues],
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
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "performance",
  });
  return (
    <Wrapper>
      <div>
        <h2>Junior report form</h2>

        <form>
          <div>
            <label>No of times school opened</label>
            <input type="text" placeholder="number of times school opened" />
          </div>
          <div>
            <label>No of times school opened</label>
            <input type="text" placeholder="" />
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
