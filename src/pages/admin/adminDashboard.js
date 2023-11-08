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
    title: "Create Account",
    subTitle: "create a new teacher account",
    icon: "typcn:user-add",
    iconColor: "black",
  },
  {
    link: PATH_DASHBOARD.admin.calendar,
    title: "Term Calendar",
    subTitle: "Set calendar for current term",
    icon: "solar:calendar-bold",
    iconColor: "black",
  },
  {
    link: PATH_DASHBOARD.admin.notify,
    title: "Notify",
    subTitle: "Send message to your staff",
    icon: "tabler:bell-filled",
    iconColor: "black",
  },
];

export default function AdminDashboard() {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const { currentTerm, isLoading } = useSelector((state) => state.term);
  // const { users } = useSelector((state) => state.users);
  const [Teachers, setTeachers] = useState("");
  const [Students, setStudents] = useState("");
  const [termName, setTermName] = useState("")

  //current term
  useEffect(() => {
    dispatch(fetchCurrentTerm())
      .unwrap()
      .then((res) => {
        console.log(res);
        setTermName(res.data.name)
      });
  }, []);
  console.log(currentTerm);

  //number of students
  useEffect(() => {
    const FetchStudents = async () => {
      try {
        const results = await dispatch(fetchUsers({ role: "student" }));
        const users = unwrapResult(results);
        const Length = users.data.length;
        console.log(Length);
        setStudents(Length);
      } catch (error) {
        console.log(error);
      }
    };
    FetchStudents();
  }, []);

  //number of teachers
  useEffect(() => {
    const FetchTeachers = async () => {
      try {
        const results = await dispatch(fetchUsers({ role: "teacher" }));
        console.log(results);
        const users = unwrapResult(results);
        const Length = users.data.length;
        console.log(Length);
        setTeachers(Length);
      } catch (error) {
        console.log(error);
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
  return (
    <Wrapper className="">
      <div className="d-flex flex-column left p-5">
        <h4>
          {greeting} Mr {user.lastName}
        </h4>
        <p>welcome to your dashboard</p>
      </div>

      <div className="middle-div px-5">
        <div className="overviews p-3 py-5">
          <div className="circle-div d-flex flex-column justify-content-center align-items-center">
            <p>current term</p>
            <h5>
              {currentTerm ? (
                  <h5>
                  {termName === "" ? (
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    termName
                  )}
                </h5>
              ) : (
                <>
                  <p>
                    Term has ended! or yet to start
                    <br />
                    Set a
                    <Link to={PATH_DASHBOARD.admin.createTerm}> term </Link>, if
                    there are no upcoming term
                  </p>
                </>
              )}
            </h5>
          </div>
          <div className="circle-div d-flex flex-column justify-content-center align-items-center">
            <p>active teachers</p>
            <h5>
                  {Teachers === "" ? (
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    Teachers
                  )}
                </h5>
          </div>
          <div className="circle-div d-flex flex-column justify-content-center align-items-center">
            <p>active students</p>
            <h5>
                  {Students === "" ? (
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    Students
                  )}
                </h5>
          </div>
          <div className="circle-div d-flex flex-column justify-content-center align-items-center">
            <p>active applications</p>
            <h5>0</h5>
          </div>
        </div>
      </div>
      <div className="tabs d-flex flex-column py-4 px-5">
        {TabsConfig.map(({ link, title, subTitle, iconColor, icon }, index) => (
          <Link
            className="react-router-link tab d-flex flex-row justify-content-between px-3 py-2"
            to={link}
            key={index}
          >
            <div className="d-flex flex-column mt-3 text">
              <h6>{title}</h6>
              <p>{subTitle}</p>
            </div>
            <div className="icon-div">
              <Icon className="icon" icon={icon} color={iconColor} />
            </div>
          </Link>
        ))}
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
background-color: #f1f1f1 !important;
  .middle-div {
    overflow: scroll !important;
    .overviews {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      gap: 10px;
      width: fit-content;
      background: white;
      border-radius: 30px;
      .circle-div {
        width: 150px !important;
        height: 150px;
        border-radius: 50%;
        display: flex;
        p {
          font-weight: 600;
          font-size: 13px;
          color: white;
        }
        h5 {
          color: white;
        }
        &:first-child {
          background-color: #030c8a;
        }
        &:nth-child(2) {
          background: #feff37;
          p {
            color: black !important;
          }
          h5 {
            color: black !important;
          }
        }
        &:nth-child(3) {
          background: #ffb366;
        }
        &:last-child {
          background-color: #1c1c1c;
          p,
          h5 {
            color: white;
          }
        }
      }
      .overviews {
        width: 100% !important;
        overflow-x: scroll !important;
      }
    }
  }
  .tabs {
    gap: 20px;
    .tab {
      max-width: 400px;
      height: 80px;
      border-radius: 10px;
      align-items: center;
      background-color: white !important;
      .icon-div {
        padding: 10px;
        border-radius: 50%;
        /* border:1px solid black; */
      }
      .text {
        text-align: left;
      }
      &:first-child {
        background: black;
        .icon-div {
          background-color: #1c1c1c;
        }
        .icon {
          font-size: 30px;
        }
        h6 {
          color: black;
        }
        p {
          color: black;
        }
      }
      &:nth-child(2) {
        background: #ffff66;
        .icon-div {
          background-color: #fbfb87;
        }
        .icon {
          font-size: 30px;
        }
      }
      &:nth-child(3) {
        background: #ffb366;
        .icon-div {
          background-color: #d9a26b;
        }
        .icon {
          font-size: 30px;
        }
      }
      &:last-child {
        background-color: #8080ff;
        .icon-div {
          background-color: #8c8ce1;
        }
        .icon {
          font-size: 30px;
        }
      }
    }
  }
  .spinner-border {
    font-size: 12 !important;
    width: 14px !important;
    height: 14px !important;
  }

  @media screen and (max-width: 500px) {
.middle-div, .tabs{
  padding:  24px !important;

}    
  }
`;
