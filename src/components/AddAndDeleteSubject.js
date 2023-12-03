import { useState } from "react";
import { api } from "../api/axios";
import { identity } from "lodash";
import { useEffect } from "react";

export default function AddAndDeleteSubject({ studentId }) {
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const result = await api.get(`/subjects/get/${studentId}`);
      console.log(result);
      if (result.success) {
        setSubjects(result.data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const removeSubject = async (subjectCode) => {
    try {
      setLoading(true);
      const result = await api.delete(
        `/subjects/remove/${subjectCode}/${studentId}`
      );
      console.log(result);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const addSubject = async (subject) => {
    const result = await api.post("/subjects/add", {
      subjects: subject,
      user_id: identity,
    });
    console.log(result);
  };

  useEffect(() => {
    (async () => getData())();
  });
  return (
    <div>
      <form></form>
    </div>
  );
}
