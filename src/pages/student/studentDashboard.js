import React, { useState, useEffect } from "react";
import axios from "axios";
import { ReportService } from "../../services/reportService";
import { toast } from "react-hot-toast";
import { useAuth } from "../../hooks/useAuth";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useAppContext } from "../../contexts/Context";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentTerm } from "../../redux/slices/term";
import { PATH_DASHBOARD } from "../../routes/paths";
import { generatePdfApi } from "../../api/axios";
import { OverlayLoading } from "../../components/OverlayLoading";
import {
  BasicClasses,
  JuniorClasses,
  KgClasses,
  NurseryClasses,
  SeniorClasses,
} from "../../configs/classConfig";
import { SubjectService } from "../../services/subjectService";
import { UserService } from "../../services/userService";
import {
  GetActiveTerm,
  GetStudentClass,
} from "../../components/custom/teacherClass";
import { CircularProgress } from "../../components/custom";

export default function StudentDashboard() {
  const { user } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const [selectedClass, setSelectedClass] = React.useState(user.currentClass);
  const classes = [...JuniorClasses];
  const currentClass = classes.filter((item) => item.code === selectedClass);
  const [subjects, setSubjects] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const {
    termName,
    setTermName,
    studentClass,
    setStudentClass,
    activeSession,
    setActiveSession,
  } = useAppContext();
  const [visibleSubjects, setVisibleSubjects] = useState(5);
  const [session, setSession] = useState("");

  const getTeachers = async (filter) => {
    try {
      setLoading(true);
      const result = await UserService.findUsers({
        role: "teacher",
        subjectTaught: subjects,
        ...filter,
      });
      console.log(result);
      const { list, totalPages, currentPage, total, limit } = result.data;
      setLoading(false);
      setTeachers(list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const userId = user._id;
    fetchSubjects(userId);
    getTeachers();
    GetStudentClass(user, setStudentClass);
    GetActiveTerm(activeSession, setSession);
  }, [user, setStudentClass, activeSession, setSession]);
  const fetchSubjects = async (userId) => {
    try {
      const { data } = await SubjectService.getSubjects(userId);
      setSubjects(data.subjects.slice(1));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  //fetch current term
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentTerm())
      .unwrap()
      .then((res) => {
        setTermName(res[res.length - 1]?.term);
        setActiveSession(res[res.length - 1].session);
      });
  }, []);
  console.log(termName);

  //downloading current report

  //get time for welcome message
  const currentTime = new Date().getHours();
  const [greeting, setGreeting] = useState(getGreeting(currentTime));
  function getGreeting(currentTime) {
    switch (true) {
      case currentTime >= 0 && currentTime < 12:
        return "Good morning,";
      case currentTime >= 12 && currentTime < 18:
        return "Good afternoon,";
      default:
        return "Good evening,";
    }
  }
  return (
    <>
      {loading && <CircularProgress />}
      <Dashboard className="py-5">
        <div className="big-tab d-flex flex-row justify-content-between p-3">
          <div className="text d-flex flex-column justify-content-center gap-2">
            <h4 className="mb-0">
              {greeting} {user.firstName}
            </h4>
            <p className="mb-0">Welcome back to your dashboard.</p>
          </div>
          <div className="icon-div">
            <Icon className="icon" icon="streamline-emojis:graduation-cap" />
          </div>
        </div>
        <div className="middle-div row mt-5 mr-0 ml-0">
          <div className="left-div col-lg-8 p-0 m-0">
            <div className="div p-0 m-0">
              <div className="infos d-flex flex-row gap-3 m-0 p-3">
                <div className="info p-3">
                  <div className="icon-div p-2">
                    <Icon
                      icon="entypo:graduation-cap"
                      color="rgba(69 72 172 / 70%)"
                      className="icon"
                    />
                  </div>
                  <h6 className="mb-0 mt-2">{studentClass}</h6>
                  <p>current class</p>
                </div>
                <div className="info p-3">
                  <div className="icon-div p-2">
                    <Icon
                      icon="emojione-monotone:books"
                      color="brown"
                      className="icon"
                    />
                  </div>
                  <h6 className="mb-0 mt-2">{subjects.length}</h6>
                  <p>Subjects offered</p>
                </div>
                <div className="info d-flex flex-column justify-content-between p-3">
                  <div className="small-div d-flex flex-row align-items-center py-1 px-2">
                    <Icon
                      icon="basil:calendar-solid"
                      color="rgba(69 72 172 / 70%)"
                      width="24"
                      height="24"
                    />
                    <div className="text-div d-flex flex-column">
                      <p className="mb-0 small-p">Current Term</p>
                      <h6 className="mb-0 small-h6">{termName}</h6>
                    </div>
                  </div>
                  <div className="small-div d-flex flex-row align-items-center py-1 px-2">
                    <Icon
                      icon="carbon:report"
                      color="rgba(69 72 172 / 70%)"
                      width="30"
                      height="30"
                    />
                    <div className="text-div d-flex flex-column">
                      <p className="mb-0 small-p">Current Session</p>

                      <h6 className="mb-0 small-h6">{session}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-wrapper ">
              <div className="bottom-div py-4 px-3 d-flex flex-column-reverse flex-wrap gap-1 justify-content-between">
                <div className="d-flex flex-row gap-2 flex-wrap">
                  <button className="result-btn">
                <Link
                  className="react-router-link d-flex flex-row align-items-center gap-3"
                  to={PATH_DASHBOARD.student.viewReport}
                >
                <div className="d-flex flex-column text-start">
                  <h6 className="m-0 small-h6 ">Current Result</h6>
                  <p className="m-0">view and download</p>
                </div>
                <div className="result-icon">
                <Icon icon="fluent-mdl2:poll-results" height="30px" color="white"/>
                </div>
                </Link>
                  </button>
                  <button className="result-btn">
                <Link
                  className="react-router-link d-flex flex-row align-items-center gap-3"
                  to={PATH_DASHBOARD.student.results}
                >
                <div className="d-flex flex-column text-start">
                  <h6 className="small-h6 m-0">Results Archive</h6>
                  <p className="m-0">search and download</p>
                </div>
                <div className="result-icon">
                <Icon icon="material-symbols-light:archive-outline" height="40px" color="white"/>                </div>
                </Link>
                  </button>
                </div>
                <div className="assignment d-flex flex-column px-3 py-3 gap-2">
                  <h6 className="m-0">Assignments</h6>
                  <p className="m-0">
                    you get notified when you have a new assignment
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="right-div col-lg-4 d-flex flex-column justify-content-center py-4 gap-5">
            <div className=" d-flex flex-column">
              <h6>Teachers</h6>
              <div className=" d-flex flex-wrap gap-1 align-items-center justify-content-between">
                {teachers.slice(0, visibleSubjects).map((teacher, index) => (
                  <div
                    key={index}
                    className={`d-flex flex-column align-items-center justify-content-center ${
                      index === 0 ? "" : "margined"
                    }`}
                  >
                    <div className="initial h-100 d-flex justify-content-center align-items-center">
                      <p className="m-0"></p>
                    </div>
                    <p className="m-0">
                      {teacher.gender === "male" ? "Mr." : "Mrs."}
                      {teacher.lastName.length > 4
                        ? `${teacher.lastName.slice(0, 4)}...`
                        : teacher.lastName}
                    </p>
                  </div>
                ))}

                {visibleSubjects < teachers.length && (
                  <Link
                    to={PATH_DASHBOARD.student.myTeachers}
                    className="view-more"
                  >
                    View More>
                  </Link>
                )}
              </div>
            </div>
            <div className=" d-flex flex-column">
              <h6>Subjects</h6>
              <div className="d-flex flex-wrap gap-1 align-items-center justify-content-between">
                {subjects.slice(0, visibleSubjects).map((subject, index) => (
                  <div
                    key={index}
                    className={`d-flex flex-column align-items-center justify-content-center ${
                      index === 0 ? "" : "margined"
                    }`}
                  >
                    <div
                      className={`initial h-100 d-flex justify-content-center align-items-center `}
                    >
                      <p className="m-0">
                        {subject.name.length > 3
                          ? `${subject.name.slice(0, 3)}...`
                          : subject.name}
                      </p>
                    </div>
                  </div>
                ))}

                {visibleSubjects < subjects.length && (
                  <Link
                    to={PATH_DASHBOARD.student.mySubjects}
                    className="view-more"
                  >
                    View More>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </Dashboard>
    </>
  );
}
const Dashboard = styled.div`
  background-color: #f5f5f5 !important;
  margin: 0 !important;
  height: fit-content !important;
  padding-left: 32px !important;
  padding-right: 32px !important;
  .result-icon{
  }
  .result-btn{
    font-size: 13px;
    padding: 3px 15px;
    border-radius: 10px;
    font-weight: 600;
    border: 0 !important;
    background-color: rgba(69 72 172 / 70%);
    color: white;
    p{
      font-weight: 400;
    }
    &:hover{
      transition: 0.3s;
    background-color: rgba(69 72 172 / 90%);


    }
  }
  .view-more {
    font-size: 14px !important;
  }
  .small-h6 {
    font-size: 13px;
  }
  .small-p{
    font-size: 12px;
  }
  h6 {
    font-weight: 600 !important;
  }

  .assignment {
    background-color: #f1f1f1;
    border-radius: 10px;
    p {
      color: orangered;
    }
  }
  .bottom-wrapper {
    padding-right: 50px;
    @media screen and (max-width: 768px) {
      padding-right: 0 !important;
    }
  }
  .bottom-div {
    height: 200px;
    border-radius: 30px;
    background-color: white;
    flex-wrap: nowrap !important;
    @media screen and (max-width: 530px) {
      height: auto;
      gap: 30px !important;
    }
    .download-link {
      padding: 10px;
      background-color: green;
      color: white !important;
      width: fit-content;
      border-radius: 5px;
      height: fit-content;
    }
  }
  .initial {
    width: 70px;
    height: 70px !important;
    border-radius: 50%;
    background-color: rgba(158, 160, 231, 0.7);
    color: blue;
    border: 3px solid white;

    p {
      /* font-size: 25px; */
      /* font-weight: 600; */
    }
  }
  .spinner-border {
    font-size: 9px !important;
    width: 12px !important;
    height: 12px !important;
  }
  .big-tab {
    border-radius: 30px;
    z-index: 99;
    background-color: rgba(69 72 172 / 70%);
    backdrop-filter: blur(10px);
    height: 180px;
    .text {
      color: white;
    }
    .icon-div {
      .icon {
        font-size: 200px;
        @media (max-width: 558px) {
          font-size: 150px;
        }
        @media (max-width: 506px) {
          font-size: 130px;
        }
        @media (max-width: 485px) {
          font-size: 100px;
        }
        @media (max-width: 455px) {
          font-size: 70px;
        }
      }
    }
  }
  .margined {
    margin-left: -30px !important;
    .initial {
      border: 3px solid white;
    }
  }
  .div {
    overflow-x: auto !important;
    margin-top: 0 !important;
  }
  .left-div {
    display: flex;

    flex-direction: column;
    justify-content: space-between;
    p{
    font-size: 13px;
  }
  }
  .infos {
    width: 634px !important;
    overflow-x: auto !important;

    .info {
      height: 150px !important;
      width: 200px !important;
      border-radius: 20px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      .icon-div {
        border-radius: 10px;
        background-color: #f0f0f0;
      }
      .icon {
        font-size: 50px !important;
      }
      &:last-child {
        .small-div {
          border-radius: 10px;
          height: 55px;
          gap: 10px;
          background-color: #f0f0f0;
          .available-reports {
            line-height: 0.8 !important;
          }
        }
      }
    }
  }
  .right-div {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 20px;
    background-color: white;
    @media screen and (max-width: 991px){
      margin-top: 15px;
    }
    p {
      font-size: 13px;
      color: grey;
    }
    height: auto;
    h6 {
    }
  }

  @media screen and (max-width: 1100px) {
    padding-left: 24px !important;
    padding-right: 24px !important;
  }
`;
