import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/slices/users";
import { useAuth } from "../../hooks/useAuth";
import {
  SeniorReportForm,
  JuniorReportForm,
} from "../../components/dashboard/teacher";
import { fetchCurrentTerm } from "../../redux/slices/term";

export default function CreateResult() {
  const { user } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers({ classTeacher: user._id }));
  }, [dispatch, user._id]);

  const { users, isLoading } = useSelector((state) => state.users);

  return (
    <>
      {user.classHandled.startsWith("JSS") ? (
        <JuniorReportForm students={users} isLoading={isLoading} />
      ) : (
        <SeniorReportForm students={users} isLoading={isLoading} />
      )}
    </>
  );
}
