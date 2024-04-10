import { styled } from "styled-components";
import { useAuth } from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { AllSubjects } from "../../configs/allSubjects";
import { Link, useParams } from "react-router-dom";
import { PATH_DASHBOARD } from "../../routes/paths";
import { Table } from "react-bootstrap";
import {
  ElementarySubjects,
  BasicSubjects,
  JuniorSubjects,
  SeniorSubjects,
} from "../../configs/subjectsConfig";
import { get } from "lodash";
import { useForm } from "react-hook-form";
import { CircularProgress } from "../../components/custom";
import { Icon } from "@iconify/react";
import axios from "axios";
import toast from "react-hot-toast";

export default function Assign() {
  const [loading, setLoading] = useState(true);
  const [checking, setChecking] = useState(false);

  useEffect(() => {
    getSubjects();
    setLoading(false);
  }, []);
  function getSubjects() {
    if (
      user.subjectTaught.startsWith("FJS") ||
      user.subjectTaught.startsWith("FSS")
    ) {
      setTeacherSubjects([...JuniorSubjects, ...SeniorSubjects]);
    } else if (user.subjectTaught.startsWith("FES")) {
      setTeacherSubjects(ElementarySubjects);
    } else if (user.subjectTaught.startsWith("FBS")) {
      setTeacherSubjects(BasicSubjects);
    } else {
      setTeacherSubjects(SeniorSubjects);
    }
  }

  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [teacherSubjects, setTeacherSubjects] = useState([]);

  //state for onclick of "add new assignment"
  function OpenSelect() {
    setOpen(true);
  }

  //make the teachers' subjects taught strings into an array
  const subjectsArray = user.subjectTaught
    .split(",")
    .map((subject) => subject.trim());

  //filter the subject taught against the school subjects data
  const filteredSubjects = teacherSubjects.filter((subject) =>
    subjectsArray.includes(subject.code)
  );
  console.log(filteredSubjects);
  console.log(user.subjectTaught);

  //submision of filter select
  const onSubmit = async (data) => {
    console.log(data);
  };

  //to get first member of the filtered subjects
  const [firstSubject, setFirstSubject] = useState(filteredSubjects[0]);

  //to filter table
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      subjectSelected: firstSubject?.name,
    },
  });

  //fetch asignment history
  const [history, setHistory] = useState([]);
  const [subjectCode, setSubjectCode] = useState();

  console.log(filteredSubjects[0]);
  console.log(filteredSubjects[0]?.code);
  console.log(subjectCode);

  const getHistory = async () => {
    setChecking(true);
    try {
      const response = await axios.get(
        `https://ferrum-sever.onrender.com/api/assignments/subject/${subjectCode}`
      );
      console.log(response);
      setHistory(response.data);
      if(response.data.length < 1){
        toast.error("No record for this subject");
      }
    } catch (error) {
      console.log(error);
      if (subjectCode === undefined) {
        toast.error("Please select a subject");
      } else{
        toast.error("No record for this subject");
      }
    } finally {
      setChecking(false);
    }
  };
  console.log(history);
  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <Container className="py-5">
            <div className="container d-flex flex-row gap-2 first-div">
              <div className="first-div d-flex p-3 gap-3 no-wrap">
              <button onClick={OpenSelect} className="new-tab p-2">
                New Assignment +
              </button>

              {open
                ? filteredSubjects.map((subject) => (
                    <Link
                      to={`${PATH_DASHBOARD.teacher.setAssignments}/${subject.code}`}
                      className="react-router-link subject-tile d-flex flex-column justify-content-center align-items-center p-2 gap-2"
                    >
                      <div className="icon-div p-2 d-flex justify-content-center align-items-center">
                        <h6 className="text-left m-0">
                          {subject.name.charAt(0)}
                        </h6>
                      </div>
                      <p className="m-0">
                        {subject.name.length > 9
                          ? `${subject.name.slice(0, 9)}...`
                          : subject.name}
                      </p>
                    </Link>
                  ))
                : ""}

              </div>
            </div>
            {/* <div className=" container mt-5">
            <h6>Active Assignments</h6>
            <div className="d-flex flex-row gap-2 second-div">
              <div className="subject-tile py-3">
                <div className="d-flex flex-column text-center">
                  <h3>M</h3>
                  <p>Mathematics</p>
                </div>
              </div>
              <div className="subject-tile py-3">
                <div className="d-flex flex-column text-center">
                  <h3>M</h3>
                  <p>Mathematics</p>
                </div>
              </div>
            </div>
          </div> */}
            <div className="table-div mt-5 py-5">
              <div className="container">
                <div className="table-header d-flex flex-row justify-content-between">
                  <div className="d-flex flex-column">
                    <h6>History</h6>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="d-flex flex-row align-items-center gap-2">
                        <select
                          name="subjectSelected"
                          {...register("subjectSelected")}
                          onChange={(e) => {
                            setSubjectCode(e.target.value);
                          }}
                        >
                          <option value="" disabled selected>
                            select subject
                          </option>

                          {filteredSubjects.map((subject) => (
                            <option value={subject.code}>{subject.name}</option>
                          ))}
                        </select>
                        <button className="filter-btn" onClick={getHistory}>
                          check
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* <button className="clear-btn">clear all</button> */}
                </div>
                <Table className="table-bordered mt-3">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Date Assigned</th>
                      <th>Deadline</th>
                      <th>Assignment Title</th>
                      <th>Assignment Topic</th>
                      <th>No. of Submissions</th>
                      <th></th>
                    </tr>
                  </thead>
                  {history.length > 0 ? (
                    <tbody>
                      {history.map((answer, index) => (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{answer?.dateGiven}</td>
                          <td>{answer?.deadline}</td>
                          <td>{answer?.title}</td>
                          <td>{answer?.topic}</td>
                          <td>{answer?.answers?.length}</td>
                          <td>
                            <Link
                              className="view-button "
                              to={`${PATH_DASHBOARD.teacher.giveAssignments}/${answer._id}`}
                            >
                              view
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  ) : (
                    ""
                  )}
                </Table>
              </div>
            </div>
          </Container>
          {checking ? <CircularProgress /> : ""}
        </>
      )}
    </>
  );
}
const Container = styled.div`
  p {
    color: red;
  }
  .card {
    width: fit-content;
  }
  .first-div{
    overflow-x: auto !important;
  }
  .new-tab {
    height: 100px;
    background-color: rgba(69 72 172 / 70%);
    color: white;
    border: 0 !important;
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .table-div {
    background-color: white !important;
    height: 500px !important;
    width: 100% !important;
    overflow-x: auto;
    td{
      font-size: 14px;
    }
    th{
      font-weight: 500;
    }
  }
  .subject-tile {
    height: 100px;
    width: 120px !important;
    border: 1px solid blue;
    text-align: center;
    background-color: white;
    border: 1px solid white;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    /* box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.04) 0px 10px 10px -5px; */
    border-radius: 10px;
    p {
      font-size: 13px;
      color: black;
      font-weight: 600;
    }
    h6 {
      color: blue;
      font-size: 20px;
      text-transform: capitalize;
    }
    .icon-div {
      background-color: #f1f1f1;
      overflow: hidden;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      .icon {
        font-size: 35px;
      }
    }
  }
  .first-div,
  .second-div {
    overflow-x: auto !important;
  }
  .clear-btn {
    padding: 5px 10px;
    height: fit-content;
    font-weight: 600;
    font-size: 14px;
    color: red;
    background-color: white;
    border: 1px solid red;
    &:hover {
      background-color: red;
      color: white;
    }
  }
  .filter-btn {
    padding: 1px 10px;
    height: fit-content;
    font-size: 14px;
    background-color: white;
    color: blue;
    border: 1px solid blue;
    border-radius: 5px;
    &:hover {
      background-color: blue;
      color: white;
    }
  }
  select {
    border-radius: 10px;
    padding: 5px 10px;
  }
`;
