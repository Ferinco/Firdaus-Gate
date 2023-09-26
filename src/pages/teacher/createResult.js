import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchStudents } from "../../redux/slices/students";
import { useAuth } from "../../hooks/useAuth";
import {
  SeniorReportForm,
  JuniorReportForm,
} from "../../components/dashboard/teacher";

export default function CreateResult() {
  const { user } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStudents({ teacherId: user._id }));
  }, [dispatch, user._id]);

  const { students, isLoading } = useSelector((state) => state.students);

  return (
    <>
      {user.classHandled.startsWith("JSS") ? (
        <JuniorReportForm students={students} isLoading={isLoading} />
      ) : (
        <SeniorReportForm students={students} isLoading={isLoading} />
      )}
    </>
  );
}
