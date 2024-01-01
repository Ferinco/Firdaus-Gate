import { styled } from "styled-components";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import { AllSubjects } from "../../configs/allSubjects";
import { Link, useParams } from "react-router-dom";
import { PATH_DASHBOARD } from "../../routes/paths";
import { Table } from "react-bootstrap";

export default function Assign() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  //state for onclick of "add new assignment"
  function OpenSelect() {
    setOpen(true);
  }

  //make the teachers' subjects taught strings into an array
  const subjectsArray = user.subjectTaught
    .split(",")
    .map((subject) => subject.trim());

    //filter the subject taught against the school subjects data
  const filteredSubjects = AllSubjects.filter((subject) =>
    subjectsArray.includes(subject.code)
  );
  console.log(filteredSubjects);

  return (
    <Container className="py-5">
      <div className="container d-flex flex-row gap-2 first-div">
        <button onClick={OpenSelect} className="new-tab p-2">
          New Assignment +
        </button>
        {open
          ? filteredSubjects.map((subject) => (
              <Link
                to={`${PATH_DASHBOARD.teacher.setAssignments}/${subject._id}`}
                className="react-router-link subject-tile d-flex justify-content-center align-items-center p-3"
              >
                {subject.name}
              </Link>
            ))
          : ""}
      </div>
      <div className=" container mt-5">
        <h6>active Assignments</h6>
        <div className="d-flex flex-row gap-2 second-div">
          <div className="subject-tile p-3">
            <div className="d-flex flex-column text-center">
              <h3>M</h3>
              <p>Mathematics</p>
            </div>
          </div>
          <div className="subject-tile p-3">
            <div className="d-flex flex-column text-center">
              <h3>M</h3>
              <p>Mathematics</p>
            </div>
          </div>
        </div>
      </div>
      <div className="table-div mt-5 py-5">
        <div className="container">
          <div className="table-header d-flex flex-row justify-content-between">
          <div className="d-flex flex-column">
        <h6>History</h6>
{
  filteredSubjects.map((subject)=>(
    <select name="subjectSelect">
      <option>
        {subject.name}
      </option>
    </select>
  ))
}
          </div>
<button>clear all</button>
          </div>
<Table className="table-bordered mt-3">
  <th>date assigned</th>
  <th>deadline</th>
  <th>assignment title</th>
  <th>assignment topic</th>
  <th>no. of submissions</th>

</Table>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  p {
    color: red;
  }
  .card {
    width: fit-content;
  }
  .new-tab {
    height: 100px;

  }
  .table-div {
    background-color: white !important;
    height: 500px !important;
    width: 100% !important;
  }
  .subject-tile{
    height: 100px;
    border: 1px solid blue;
    text-align: center;
    
  }
  .first-div, .second-div{
    overflow-x: auto !important;
  }
`;
