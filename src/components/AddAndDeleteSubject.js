import { useState } from "react";
import { api } from "../api/axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  ArtsSubjects,
  BasicSubjects,
  CommercialSubjects,
  ElementarySubjects,
  JuniorSubjects,
  ScienceSubjects,
  SeniorSubjects,
} from "../configs/subjectsConfig";
import toast from "react-hot-toast";
import { UserService } from "../services/userService";

export default function AddAndDeleteSubject({ studentId }) {
  const [subjects, setSubjects] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const allSubjects = [...SeniorSubjects];
  const [selectedSubject, setSelectedSubject] = useState({});
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const getData = async () => {
    try {
      setLoading(true);
      const { data } = await api.get(`/subjects/get/${studentId}`);
      if (data.success) {
        setSubjects(data.data.subjects);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const removeSubject = async (subjectCode) => {
    const newSubjects = subjects.filter(
      (subject) => subjectCode !== subject.code
    );
    setSubjects(newSubjects);
    // try {
    //   setLoading(true);
    //   const { data } = await api.delete(
    //     `/subjects/remove/${subjectCode}/${studentId}`
    //   );
    //   console.log(data.data);
    // } catch (error) {
    //   setLoading(false);
    //   console.log(error);
    // }
  };
  const addSubject = (subject) => {
    const newSubjects = [...subjects, subject];
    setSubjects(newSubjects);
  };

  useEffect(() => {
    (async () => getData())();
  }, []);

  const updateChanges = async () => {
    try {
      setLoading(true);
      const result = await api.put(`/subjects/update/${studentId}`, {
        subjects,
      });

      if (selectedDepartment.length) {
        const formData = new FormData();
        formData.append(
          "values",
          JSON.stringify({ department: selectedDepartment })
        );
        const result2 = await UserService.updateUser(studentId, formData);
      }
      setLoading(false);
      console.log(result);
      toast.success("Subjects updated successfully");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Error updating subjects");
    }
  };
  return (
    <div>
      <div>
        <div className="mb-2">
          <select
            className="form-select"
            onChange={(e) => setSelectedDepartment(e.target.value)}
          >
            <option disabled>Select department</option>
            <option value={"science"}>Science</option>
            <option value="commercial">Commercial</option>
            <option value="art">Art</option>
          </select>
        </div>
        <div className="d-flex gap-2 justify-content-between mb-4">
          <select
            className="form-select"
            onChange={(e) => setSelectedSubject(JSON.parse(e.target.value))}
          >
            <option disabled>Select subject</option>
            {SeniorSubjects.map((item) => (
              <>
                <option key={item.code} value={JSON.stringify(item)}>
                  {item.name}
                </option>
              </>
            ))}
          </select>
          <button
            className="btn-primary btn-sm btn"
            onClick={() => addSubject(selectedSubject)}
          >
            Add
          </button>
        </div>
      </div>
      <div>
        {subjects.length > 0 ? (
          <>
            {subjects.map((subject) => {
              return (
                <div className="py-1 d-flex justify-content-between">
                  <div>{subject.name}</div>
                  <button
                    className="text-sm btn btn-danger btn-sm"
                    onClick={() => removeSubject(subject.code)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </>
        ) : (
          "..loading"
        )}
      </div>
      <button
        disabled={isLoading}
        className="btn btn-primary w-100 mt-4"
        onClick={updateChanges}
      >
        Save changes
      </button>
    </div>
  );
}
