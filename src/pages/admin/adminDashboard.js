import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentTerm } from "../../redux/slices/term";
import { fetchUsers } from "../../redux/slices/users";
import { unwrapResult } from "@reduxjs/toolkit";
import { PATH_DASHBOARD } from "../../routes/paths";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Pie } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import "../../chart-js-setup";
const TabsConfig = [
  {
    link: PATH_DASHBOARD.admin.createTerm,
    title: "Set Term",
    subTitle: "Set the current term",
    icon: "pepicons-pencil:list",
    iconColor: "white",
  },
  {
    link: PATH_DASHBOARD.admin.createTeachers,
    title: "Create Teacher",
    subTitle: "create a new teacher account",
    icon: "mingcute:necktie-fill",
    iconColor: "black",
  },
  {
    link: PATH_DASHBOARD.admin.createStudents,
    title: "Create Student",
    subTitle: "create a new teacher account",
    icon: "bxs:graduation",
    iconColor: "white",
  },
];

export default function AdminDashboard() {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const [Teachers, setTeachers] = useState("");
  const [Students, setStudents] = useState("");
  const [termName, setTermName] = useState("");
  const [currentTerm, setCurrentTerm] = useState("");
  const [applications, setApplications] = useState("");
  const [femaleStudents, setFemaleStudents] = useState("");
  const [maleStudents, setMaleStudents] = useState("");
  const [maleTeachers, setMaleTeachers] = useState("");
  const [femaleTeachers, setFemaleTeachers] = useState("");

  //current term
  useEffect(() => {
    dispatch(fetchCurrentTerm())
      .unwrap()
      .then((res) => {
                setTermName(res[res.length - 1]?.term);
      })
      .catch((error) => {
              });
  }, []);

  //number of students
  useEffect(() => {
    const FetchStudents = async (limit) => {
      try {
        const results = await dispatch(
          fetchUsers({ role: "student", limit: 500 })
        );
        const users = unwrapResult(results);
        const Length = users.data.total;
        setStudents(Length);
        const { list } = users.data;
        //female students
        const females = list.filter((female) => female.gender === "female");
        setFemaleStudents(females.length);

        //male students
        const males = list.filter((male) => male.gender === "male");
        setMaleStudents(males.length);
      } catch (error) {
              }
    };
    FetchStudents();
  }, []);

  useEffect(() => {
    const checkPayment = async () => {
      try {
        const results = await axios.get(
          "https://ferrum-sever.onrender.com/api/allpayments"
        );
        setApplications(results.data);
      } catch (error) {
              } finally {
      }
    };
    checkPayment();
  }, []);
  //number of teachers
  useEffect(() => {
    const FetchTeachers = async (limit) => {
      try {
        const results = await dispatch(
          fetchUsers({ role: "teacher", limit: 500 })
        );
                const users = unwrapResult(results);
        const Length = users.data.total;
                setTeachers(Length);
        const { list } = users.data;
        //female students
        const females = list.filter((female) => female.gender === "female");
        setFemaleTeachers(females.length);

        //male students
        const males = list.filter((male) => male.gender === "male");
        setMaleTeachers(males.length);
      } catch (error) {
              }
    };
    FetchTeachers();
  }, []);

  //getting current hour
  const currentTime = new Date().getHours();
  const [greeting, setGreeting] = useState(getGreeting(currentTime));
  function getGreeting(currentTime) {
    switch (true) {
      case currentTime >= 0 && currentTime < 12:
        return "Good Morning,";
      case currentTime >= 12 && currentTime < 18:
        return "Good Afternoon,";
      default:
        return "Good Evening,";
    }
  }

  //pie chart data
  const pieData = {
    labels: ["Active", "Deactivated"],
    datasets: [
      {
        label: "No. of Students",
        data: [106, 0],
        backgroundColor: ["#4682B4", "red"],
        borderWidth: 1,
      },
    ],
  };

  //doughnut chart data
  const StudentData = {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "No. of Students",
        data: [maleStudents, femaleStudents],
        backgroundColor: ["#5F9EA0", "#355E3B"],
        borderColor: ["#5F9EA0", "#355E3B"],
        borderWidth: 1,
      },
    ],
  };

  const TeacherData = {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "No. of Teachers",
        data: [maleTeachers, femaleTeachers],
        backgroundColor: ["#5F9EA0", "#355E3B"],
        borderColor: ["#5F9EA0", "#355E3B"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Wrapper className="py-5">
      <div className="d-flex flex-row left w-100 justify-content-between align-items-center first-div flex-wrap gap-4 md-gap-0">
        <div className="logo-div">
          <img src="./images/logo.png" />
        </div>
        <div className="d-flex flex-column intro gap-2">
          <h4>Firdaus-Gate Model Schools Admin Dashboard</h4>
          <p>www.firdausgateschools.com</p>
        </div>
        <div className="d-flex flex-column about gap-2">
          <div className="admin d-flex flex-row justify-content-between">
            <div className="child d-flex flex-column">
              <p>Current Administrator:</p>
              <h6>
                {user?.firstName} {user?.lastName}
              </h6>
            </div>
            <Link
              className="pencil-btn react-router-link"
              to={PATH_DASHBOARD.admin.accountSettings}
            >
              <Icon
                icon="octicon:pencil-24"
                width="1.0em"
                height="1.0em"
                style={{ color: "black" }}
              />
            </Link>
          </div>
          <div className="child">
            <p>Personal Email Address:</p>
            <h6 className="email">queenlatheefahh@gmail.com</h6>
          </div>
        </div>
        <div className="d-flex flex-column about gap-2">
          <div className="child">
            <p>Official Email Address:</p>
            <h6 className="email">
              {user?.email.length > 20
                ? `${user?.email.slice(0, 20)}...`
                : user?.email}
            </h6>
          </div>
          <div className="child">
            <p>Telephone:</p>
            <h6 className="email">{user?.tel}</h6>
          </div>
        </div>
      </div>
      <div className="middle-div py-3">
        <div className="overviews p-0 py-3">
          <Link
            className="circle-div react-router-link d-flex flex-row justify-content-start align-items-center gap-3 p-3"
            to={PATH_DASHBOARD.admin.createTerm}
          >
            <Icon
              icon="solar:calendar-broken"
              width="2.5em"
              height="2.5em"
              style={{ color: "#030c8a" }}
            />
            <div className="d-flex flex-column">
              <p>current term</p>
                <>
                  {termName === "" ? (
                    <div className="spinner-border" role="status">
                      <span className="sr-only"></span>
                    </div>
                  ) : (
                    <h5>
                      {termName}
                    </h5>
                  )}
                </>
            </div>
          </Link>
          <Link
            className="circle-div react-router-link d-flex flex-row justify-content-start align-items-center gap-3 p-3"
            to={PATH_DASHBOARD.admin.teachersList}
          >
            <Icon
              icon="la:chalkboard-teacher"
              width="2.5em"
              height="2.5em"
              style={{ color: "green" }}
            />
            <div className="d-flex flex-column">
              <p>active teachers</p>
              <>
                {Teachers === "" ? (
                  <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                  </div>
                ) : (
                  <h5>
                    {Teachers}
                  </h5>
                )}
              </>
            </div>
          </Link>
          <Link
            className="circle-div react-router-link d-flex flex-row justify-content-start align-items-center gap-3 p-3"
            to={PATH_DASHBOARD.admin.studentsList}
          >
            <Icon
              icon="fluent:people-community-48-regular"
              width="2.5em"
              height="2.5em"
              style={{ color: "#ffb366" }}
            />
            <div className="d-flex flex-column">
              <p>active students</p>
              <>
                {Students === "" ? (
                  <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                  </div>
                ) : (
                  <h5>
                    {Students}

                  </h5>

                )}
              </>
            </div>
          </Link>
          <Link
            className="circle-div react-router-link d-flex flex-row justify-content-start align-items-center gap-3 p-3"
            to={PATH_DASHBOARD.admin.applications}
          >
            <Icon
              icon="fluent:form-multiple-28-regular"
              width="2.5em"
              height="2.5em"
              style={{ color: "#1c1c1c" }}
            />
            <div className="d-flex flex-column">
              <p> applications</p>
              <>
                {applications === "" ? (
                  <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                  </div>
                ) : (
                  <h5>
                    { applications?.length}
                  </h5>
                )}
              </>
            </div>
          </Link>
        </div>
      </div>
      <div className="tabs row">
        <div className="col-lg-8 plate px-lg-2">
          <div className="content d-flex flex-column justify-content-between align-items-center p-3">
            <div className="d-flex flex-row justify-content-between w-100">
              <h4>Population Data</h4>
              <Icon
                icon="iconamoon:arrow-top-right-1-bold"
                width="1.2em"
                height="1.2em"
                style={{ color: "black" }}
              />
            </div>
            <div className="d-flex flex-row justify-content-between flex-wrap align-items-center mt-3">
              <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
                <Doughnut data={StudentData} />
                <div className="d-flex flex-row gap-4">
                  <div className="population d-flex flex-column justify-content-center align-items-center">
                    <h5>{femaleStudents}</h5>
                    <p>Female Students</p>
                  </div>{" "}
                  <div className="population d-flex flex-column justify-content-center align-items-center">
                    <h5>{maleStudents}</h5>
                    <p>Male Students</p>
                  </div>{" "}
                </div>
              </div>
              <div className="d-flex flex-column gap-3 justify-content-center align-items-center">
                <Doughnut data={TeacherData} />
                <div className="d-flex flex-row gap-4">
                  <div className="population d-flex flex-column justify-content-center align-items-center">
                    <h5>{femaleTeachers}</h5>
                    <p>Female Teachers</p>
                  </div>{" "}
                  <div className="population d-flex flex-column justify-content-center align-items-center">
                    <h5>{maleTeachers}</h5>
                    <p>Male Teachers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 plate px-lg-2">
          <div className="content d-flex flex-column justify-content-between align-items-center p-3">
            <h4 className="head">Students Summary</h4>
            <div className="chart-summary d-flex flex-row gap-2">
              <div className="active-users"></div>
              <div className="inactive-users"></div>
            </div>
            <div className="chart ">
              <Pie data={pieData} />
            </div>
            <div className="users d-flex flex-row w-100 justify-content-between">
              <div className="d-flex flex-column align-items-center">
                <h5>106</h5>
                <p>Active students</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <h5>0</h5>
                <p>Deactivated students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background: linear-gradient(to bottom, white 7%, #f1f1f1 93%) !important;
  padding-left: 32px !important;
  padding-right: 32px !important;
  p,
  h5,
  h4,
  h6 {
    margin: 0 !important;
  }
  .logo-div {
    width: 120px;
    height: 120px;
    border: 1px solid #f1f1f1;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .pencil-btn {
    border: 0 !important;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }
  .first-div {
    p {
      font-weight: 300 !important;
    }
    .intro {
      max-width: 260px;
      h4 {
        font-weight: 500 !important;
        font-size: 18px;
      }
      p {
        font-size: 14px !important;
      }
    }
    .about {
      .admin {
        width: 250px;
      }
      p {
        font-size: 15px !important;
      }
      h6 {
        font-weight: 500 !important;
        font-size: 14px;
      }

      .child {
        line-height: 1;
      }
    }
  }
  .middle-div {
    overflow-x: auto !important;
    .overviews {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      gap: 20px;
      width: fit-content;
      .circle-div {
        width: 270px !important;
        height: 100px;
        border-radius: 10px;
        display: flex;
        border: 1px solid #f1f1f1;
        &:hover {
          scale: 1.02;
        }
        p {
          font-weight: 300;
          font-size: 16px;
          color: black;
          text-transform: uppercase;
        }
        h5 {
          color: black;
          font-weight: 600 !important;
          font-size: 20px;
        }
        &:first-child {
          border-bottom: 2px solid #030c8a;
        }
        &:nth-child(2) {
          border-bottom: 2px solid green;
          p {
            color: black !important;
          }
          h5 {
            color: black !important;
          }
        }
        &:nth-child(3) {
          border-bottom: 2px solid #ffb366;
        }
        &:last-child {
          border-bottom: 2px solid #1c1c1c;
        }
      }
      .overviews {
        width: 100% !important;
        overflow-x: scroll !important;
      }
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .tabs {
    height: fit-content;
    margin-top: 50px;
    .content {
      height: 100%;
      border: 1px solid #f1f1f1;
      border-radius: 10px;
      background-color: white;
      text-align: center;
      .population,
      .users {
        margin-top: 15px;
        p {
          font-size: 12px !important;
        }
        h5 {
          font-weight: 500 !important;
        }
      }
      h4 {
        font-weight: 400 !important;
      }
    }
  }
  .spinner-border {
    font-size: 12 !important;
    width: 14px !important;
    height: 14px !important;
  }

  @media screen and (max-width: 1100px) {
    padding-left: 24px !important;
    padding-right: 24px !important;
  }
`;
