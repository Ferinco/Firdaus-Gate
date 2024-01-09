import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { CircularProgress } from "../../components/custom";
import styled from "styled-components";
import {
  GetStudentClass,
  GetTeacherClass,
} from "../../components/custom/teacherClass";
import { useAppContext } from "../../contexts/Context";
import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "../../routes/paths";
import {
  ElementarySubjects,
  BasicSubjects,
  JuniorSubjects,
  SeniorSubjects,
} from "../../configs/subjectsConfig";

export default function AboutMe() {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const { studentClass, setStudentClass } = useAppContext();
  const { teacherClass, setTeacherClass } = useAppContext();
  const [teacherSubjects, setTeacherSubjects] = useState([]);

  function getSubjects() {
    if (
      user?.subjectTaught.startsWith("FJS") ||
      user?.subjectTaught.startsWith("FSS")
    ) {
      setTeacherSubjects([...JuniorSubjects, ...SeniorSubjects]);
    } else if (user?.subjectTaught.startsWith("FES")) {
      setTeacherSubjects(ElementarySubjects);
    } else if (user?.subjectTaught.startsWith("FBS")) {
      setTeacherSubjects(BasicSubjects);
    } else {
      setTeacherSubjects(SeniorSubjects);
    }
  }

  useEffect(() => {
    GetStudentClass(user, setStudentClass);
    GetTeacherClass(user, setTeacherClass);
    getSubjects();
    setIsLoading(false);
  }, [user, setStudentClass, setTeacherClass]);

  //make the teachers' subjects taught strings into an array
  const subjectsArray = user?.subjectTaught
    .split(",")
    .map((subject) => subject.trim());

  const filteredSubjects = teacherSubjects.filter((subject) =>
    subjectsArray.includes(subject.code)
  );

  return (
    <div>
      {isLoading && user === null && <CircularProgress />}
      {isLoading ? <CircularProgress /> : ""}
      <AboutWrapper className="div d-flex flex-column pt-0 pb-5 px-0">
        <div className="back-div w-100 p-0"></div>
        <div className="body container">
          <div className="headers d-flex flex-row justify-content-between align-items-center">
            <div className="profile d-flex flex-column">
              <div className="profile-image "></div>
              <h6 className="text-capitalize ">
                {user?.firstName} {user?.middleName} {user?.lastName}
              </h6>
            </div>
            <div className="buttons d-flex flex-row gap-2">
              <button className="transfer-btn ">
                <Link
                  className="react-router-link"
                  to={
                    user.role === "student"
                      ? PATH_DASHBOARD.student.accountSettings
                      : PATH_DASHBOARD.teacher.accountSettings
                  }
                >
                  Settings
                </Link>
              </button>
            </div>
          </div>
          <div className="content">
            <div className=" d-flex flex-column mt-4">
              <div className="info d-flex justify-content-between">
                <p className="text-capitalize">first name:</p>{" "}
                <h6 className="text-capitalize w-50">{user?.firstName}</h6>
              </div>
              <div className="info d-flex justify-content-between">
                <p className="text-capitalize w-50">middle name:</p>{" "}
                <h6 className="text-capitalize w-50">{user?.middleName}</h6>
              </div>
              <div className="info d-flex justify-content-between">
                <p className="text-capitalize w-50">last name:</p>{" "}
                <h6 className="text-capitalize w-50">{user?.lastName}</h6>
              </div>

              <div className="info d-flex justify-content-between">
                <p className="text-capitalize w-50">gender:</p>{" "}
                <h6 className="text-capitalize w-50">{user?.gender}</h6>
              </div>
              <div className="info d-flex justify-content-between">
                <p className="text-capitalize w-50">
                  {user.role === "student"
                    ? "admission number:"
                    : "teacher id:"}
                </p>{" "}
                <h6 className="text-capitalize w-50">
                  {user.role === "student"
                    ? user?.admissionNumber
                    : user?.teacherId}
                </h6>
              </div>
              <div className="info d-flex justify-content-between">
                <p className="text-capitalize w-50">
                  {user.role === "student"
                    ? "current class:"
                    : "class handled:"}
                </p>{" "}
                <h6 className="text-capitalize w-50">
                  {user.role === "student" ? studentClass : teacherClass}
                </h6>
              </div>
              {user.role === "teacher" ? (
                <div className="info d-flex justify-content-between">
                  <p className="text-capitalize w-50">subject(s) taught</p>{" "}
                  <h6 className="text-capitalize w-50">
                    {filteredSubjects.map((subject) => (
                      <h6 className="text-capitalize w-50">{subject.name}</h6>
                    ))}
                  </h6>
                </div>
              ) : (
                ""
              )}
              <div className="info d-flex justify-content-between">
                <p className="text-capitalize w-50">department :</p>{" "}
                <h6 className="text-capitalize w-50">{user?.department}</h6>
              </div>
              <div className="info d-flex justify-content-between">
                <p className="text-capitalize w-50">email :</p>{" "}
                <h6 className="w-50">
                  {" "}
                  {user?.email.length > 15
                    ? `${user?.email.slice(0, 15)}...`
                    : user?.email}
                </h6>
              </div>
              <div className="info d-flex justify-content-between">
                <p className="text-capitalize w-50">
                  {user.role === "student" ? "parent phone:" : "phone:"}
                </p>{" "}
                <h6 className="text-capitalize w-50">
                  {user.role === "student" ? user?.parentPhone : user?.tel}
                </h6>
              </div>
            </div>
          </div>
        </div>

        {/* <h4>STUDENT INFO</h4> */}
      </AboutWrapper>
    </div>
  );
}

const AboutWrapper = styled.div`
  .back-div {
    height: 200px;
    z-index: 9;
    background: linear-gradient(
        to right,
        rgba(0, 0, 0, 0.7),
        rgba(0, 0, 0, 0.1)
      ),
      url("https://res.cloudinary.com/duvwweuhj/image/upload/v1700698715/Firdaus/IMG-20230901-WA0004_1_pc92lu.jpg") !important;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
  }
  .profile-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: red;
    z-index: 999 !important;
    margin-top: -20px;
    border: 5px solid white;
  }
  .headers {
    .transfer-btn {
      border-radius: 10px;
      border: 1px solid blue;
      color: blue;
      &:hover {
        border: 1px solid blue;
        color: white;
        background-color: blue;
      }
    }
    .deactivate-btn {
      border-radius: 10px;
      border: 1px solid black;
      color: black;
      &:hover {
        border: 1px solid black;
        color: white;
        background-color: black;
      }
    }
    .activate-btn {
      border-radius: 10px;
      border: 1px solid green;
      color: green;
      &:hover {
        border: 1px solid green;
        color: white;
        background-color: green;
      }
    }
    button {
      height: fit-content;
      padding: 3px 10px;
      font-size: 13px;
    }
  }
  .content {
  }
  @media (max-width: 1100px) {
  }
  @media screen and (max-width: 570px) {
    width: 100% !important;
  }
`;
