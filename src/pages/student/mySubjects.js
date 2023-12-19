import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../api/axios";

export default function Subjects() {
  const { user } = useAuth();
  const [isLoading, setLoading] = useState(false);
  const [subjectData, setSubjectData] = useState([]);

  const getData = async () => {
    try {
      const { data } = await api.get(`/subjects/get/${user._id}`);
      setSubjectData(data.data.subjects);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(subjectData);
  React.useEffect(() => {
    getData();
  }, []);

  return <div>S</div>;
}
