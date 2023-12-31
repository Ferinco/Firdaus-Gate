import { styled } from "styled-components";
import { useAuth } from "../../hooks/useAuth";
import { useState} from "react";
import { AllSubjects } from "../../configs/allSubjects";
import {Link, useParams} from "react-router-dom"
import { PATH_DASHBOARD } from "../../routes/paths";

export default function Assign() {
  const { user } = useAuth();

  const [open, setOpen] = useState(false);
  function OpenSelect() {
    setOpen(true);
  }
  const subjectsArray = user.subjectTaught
    .split(",")
    .map((subject) => subject.trim());
    const filteredSubjects = AllSubjects.filter(subject => subjectsArray.includes(subject.code));
console.log(filteredSubjects)





  return (
    <Container className="container py-5">
        <div>
      <button onClick={OpenSelect}>New Assignment +</button>
      {open ? (
          filteredSubjects.map((subject) => (
                <Link to={`${PATH_DASHBOARD.teacher.setAssignments}/${subject._id}`}>{subject.name}</Link>
          ))
      ) : (
        ""
      )}
        </div>
        <div className="mt-5">
            <h6>
                active Assignments
            </h6>
            <div className="d-flex flex-row gap-2">
            <div className="card p-3">
                <div className="d-flex flex-column text-center">
                <h3>M</h3>
                <p>Mathematics</p>
                </div>
            </div>
            <div className="card p-3">
                <div className="d-flex flex-column text-center">
                <h3>M</h3>
                <p>Mathematics</p>
                </div>
            </div>
            </div>
        </div>
    </Container>
  );
}
const Container = styled.div`
  p {
    color: red;
  }
  .card{
    width: fit-content;
  }
`;
