import React from "react";
import styled from "styled-components";
import { UserService } from "../../services/userService";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../api/axios";
import { CircularProgress } from "../../components/custom";
export default function MyTeachers() {
  const [classTeacher, setClassTeacher] = React.useState([]);
  const [subjectTeachers, setSubjectTeachers] = React.useState([]);
  const [subjects, setSubjects] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const { user } = useAuth();
  const getClassTeacher = async () => {
    try {
      const result = await UserService.findUsers({
        role: "teacher",
        classHandled: user.currentClass,
      });
      setClassTeacher(result.data.list[0]);
      setLoading(false);
      console.log(result.data.list[0]);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getClassTeacher();
  }, []);

  const getSubjectTeachers = async () => {
    try {
      const { data } = await api.get(`/subjects/get/${user._id}`);
      setSubjects(data.data.subjects);
      const result = await UserService.findUsers({
        role: "teacher",
      });
      setSubjectTeachers(result.data.list);
      setLoading(false);
      console.log(subjects);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getSubjectTeachers();
  }, []);

  console.log(user.currentClass);
  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Container className="container py-5">
          <h5>CLASS TEACHER</h5>
          <div className="big-div col-md-8 d-flex flex-row align-items-center gap-3 flex-wrap p-3">
            <div className="circle-div"></div>
            <div className="texts d-flex flex-column gap-1">
              <h5 className="m-0">
                {classTeacher.gender === "male" ? "Mr." : "Mrs."}{" "}
                {classTeacher.lastName}{" "}
              </h5>
              <p className="m-0">{classTeacher.email}</p>
              <a className="m-0" href="">
                +234{classTeacher.tel}
              </a>
            </div>
          </div>

          <div className="mt-5">
            <div className="header">
              <h5>SUBJECT TEACHERS</h5>
            </div>
            <div className="divs d-flex flex-row flex-wrap gap-5 mt-4 col-md-8">
              {subjectTeachers.map((teacher) => (
                <div className="small-div d-flex flex-row align-items-center gap-3 p-2">
                  <div className="circle-div"></div>
                  <div className="texts d-flex flex-column ">
                    <h6 className="m-0">
                      {teacher.gender === "male" ? "Mr." : "Mrs."}{" "}
                      {teacher.lastName}
                    </h6>
                    <p className="m-0">
                      {subjects.includes(teacher.subjectTaught)
                        ? teacher.subjectTaught
                        : teacher.subjectTaught}
                    </p>
                    <p className="m-0">{teacher.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      )}
    </>
  );
}
const Container = styled.div`
  .big-div {
    height: auto;
    border-radius: 20px;
    background-color: rgb(0 0 0 / 70%);
        color: white;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    .circle-div {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: white;
    }
    @media screen and (max-width: 600px) {
      width: 100% !important;
    }
  }
  .small-div {
    background-color: white;
    width: 320px;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    .circle-div {
      width: 70px;
      height: 70px;
      background-color: black;
      border-radius: 50%;
    }
    .texts {

    }
  }
`;
