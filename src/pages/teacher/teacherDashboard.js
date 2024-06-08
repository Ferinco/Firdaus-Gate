import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { PATH_DASHBOARD } from "../../routes/paths";
import { useAppContext } from "../../contexts/Context";
import { useAuth } from "../../hooks/useAuth";
import { UserService } from "../../services/userService";
import { useEffect } from "react";
import { fetchCurrentTerm } from "../../redux/slices/term";
import { useDispatch, useSelector } from "react-redux";
import { AllSubjects } from "../../configs/allSubjects";

const TabsConfig = [
  {
    link: PATH_DASHBOARD.teacher.create,
    title: "Create Profile",
    subTitle: "create a new student profile",
    icon: "typcn:user-add",
    iconColor: "black",
  },
  {
    link: PATH_DASHBOARD.teacher.assignments,
    title: "Assignments",
    subTitle: "Give assignments...",
    icon: "fluent:pen-16-filled",
    iconColor: "black",
  },
  // {
  //   link: PATH_DASHBOARD.teacher.addScheme,
  //   title: "Subject Scheme",
  //   subTitle: "Upload scheme for the term",
  //   icon: "pepicons-pencil:list",
  //   iconColor: "white",
  // },
];

export default function TeacherDashboard() {
  const [weeks, setWeeks] = useState([]);
  const {
    termName,
    setTermName,
    teacherClass,
    setTeacherClass,
    activeSession,
    setActiveSession,
  } = useAppContext();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentTerm())
      .unwrap()
      .then((res) => {
        setTermName(res[res.length - 1]?.term);
        setActiveSession(res[res.length - 1]?.session);
        setTeacherClass(user.classHandled);
      });
  }, []);

  //get current time
  const { user } = useAuth();
  console.log(user);
  let currentTime = new Date().getHours();
  const [greeting, setGreeting] = useState(getGreeting(currentTime));
  const [subjects, setSubjects] = useState([]);
  const [title, setTitle] = useState("");
  const [students, setStudents] = useState();
  const [maleGender, setMaleGender] = useState();
  const [femaleGender, setFemaleGender] = useState();

  //fetching class length details
  useEffect(() => {
    const FetchStudents = async () => {
      try {
        const res = await UserService.findUsers({
          role: "student",
          currentClass: user?.classHandled,
          status: "active",
        });
        console.log(res.data.list.length);

        if (res.success) {
          const { list } = res.data;
          const male = list.filter((user) => user.gender === "male");
          setMaleGender(male.length);
          const female = list.filter((user) => user.gender === "female");
          setFemaleGender(female.length);
          setStudents(list.length);
          console.log(students);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchStudents();
  }, []);

  //greeting teacher with regards to current time
  function getGreeting(currentTime) {
    switch (true) {
      case currentTime >= 0 && currentTime < 12:
        return "Good Morning,";
      case currentTime >= 12 && currentTime < 18:
        return "Good Afternoon, ";
      default:
        return "Good Evening,";
    }
  }

  useEffect(() => {
    function getTitle() {
      if (user?.gender === "male") {
        setTitle("Mr");
      } else setTitle("Mrs");
    }
    getTitle();
  }, []);

  const subjectsArray = user?.subjectTaught
    .split(",")
    .map((subject) => subject.trim());
  const filteredSubjects = AllSubjects.filter((subject) =>
    subjectsArray.includes(subject.code)
  );
  console.log(filteredSubjects);
  useEffect(()=>{
setSubjects(filteredSubjects)
  }, [])
  return (
    <Dashboard className="py-5">
      <div className="head d-flex flex-column container py-3 justify-content-center px-0 mx-0">
        <h4 className="mt-3 mb-0">
          <span>{greeting} </span>
          {title} {user.firstName} <span></span>
        </h4>
        <p className="text-muted">Welcome to your dashboard.</p>
      </div>
      <div className="divs py-4">
        <div className="infos d-flex flex-row gap-3">
          <div className="info p-4">
            <div className="icon-div p-2">
              <Icon
                icon="basil:calendar-outline"
                className="icon"
                color="blue"
              />
            </div>
            <div className="info-text mt-3">
              <p className="mb-0">Current term</p>
              <h6 className="">
                {termName === "" ? (
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  termName
                )}
              </h6>
            </div>
          </div>
          <div className="info p-4">
            <div className="icon-div p-2">
              <Icon
                icon="streamline:class-lesson"
                color="blue"
                className="icon"
              />
            </div>
            <div className="info-text mt-3">
              <p className="mb-0">Class Handled</p>
              <h5>
                {user.classHandled ? (
                  <h6>
                    {user.classHandled === "none" ? "None" : user.classHandled}
                  </h6>
                ) : (
                  "None"
                )}
              </h5>
            </div>
          </div>
          <div className="info p-4">
            <div className="icon-div p-2">
              <Icon
                icon="fluent:people-team-20-filled"
                color="blue"
                className="icon"
              />
            </div>
            <div className="info-text mt-3">
              <p className="mb-0">Students handled</p>
              <h5>{students ? <h6>{students}</h6> : <h6>None</h6>}</h5>
            </div>
          </div>
          <div className="info p-4">
            <div className="icon-div p-2">
              <Icon icon="tabler:books" color="blue" className="icon" />
            </div>
            <div className="info-text mt-3">
              <p className="mb-0">Subjects Taught</p>
              <h5>
                {user.subjectTaught ? <h6>{subjects.length}</h6> : "None"}
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className="tabs d-flex flex-column mt-5">
        <h5>Tabs</h5>
        {TabsConfig.map(({ icon, title, subTitle, iconColor, link }, index) => (
          <Link
            className="react-router-link tab d-flex flex-row justify-content-between align-items-center px-3 py-2 gap-1"
            to={link}
            key={index}
          >
            <div className="d-flex flex-column text gap-1">
              <h6 className="m-0">{title}</h6>
              <p className="m-0 sub-title">{subTitle}</p>
            </div>
            <div className="icon-div">
              <Icon className="icon" icon={icon} color={iconColor} />
            </div>
          </Link>
        ))}
      </div>
    </Dashboard>
  );
}
const Dashboard = styled.div`
  background-color: #f5f5f5 !important;
  margin: 0 !important;
  height: fit-content !important;
  padding-left: 32px !important;
  padding-right: 32px !important;
  /* height: fit-content; */
  .head {
    h4 {
      font-weight: 600 !important;
    }
    p {
      font-weight: 400;
      color: black;
    }
  }
  .spinner-border {
    font-size: 9px !important;
    width: 12px !important;
    height: 12px !important;
  }
  .divs {
    overflow-x: auto;
  }
  .infos {
    width: fit-content;
    .info {
      width: 200px !important;
      height: 180px;
      border-radius: 15px;
      overflow: hidden;
      background-color: white;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
        rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

      .icon-div {
        background-color: #f1f1f1;
        overflow: hidden;
        border-radius: 10px;
        .icon {
          font-size: 35px;
        }
      }
    }
  }
  .tabs {
    gap: 10px;
    width: 100% !important;
    .tab {
      max-width: 400px !important;
      height: 100px !important;
      border-radius: 15px;
      align-items: center;
      overflow: hidden;
      background-color: white;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
      .icon-div {
        padding: 10px;
        border-radius: 50%;
        /* border:1px solid black; */
      }
      .text {
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        p {
          text-overflow: ellipsis;
        }
      }
      &:nth-child(4) {
        /* background: black; */
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
          /* color: #b3b3b3; */
        }
      }
      &:nth-child(2) {
        /* background: #ffff66; */
        .icon-div {
          background-color: #fbfb87;
        }
        .icon {
          font-size: 30px;
        }
      }
      &:nth-child(3) {
        /* background: #ffb366; */
        color: black !important;
        .icon-div {
          background-color: #d9a26b;
        }
        .icon {
          font-size: 30px;
        }
      }
      &:last-child {
        /* background-color: #8080ff; */
        color: black !important;
        .icon-div {
          background-color: #8c8ce1;
        }
        .icon {
          font-size: 30px;
          color: white !important;
        }
      }
    }
  }
  .mobile-info {
    display: none;
  }
  .middle-div {
    align-items: start;
    justify-content: space-between !important;
    margin: 0 !important;

    .info-wrapper {
      min-height: 460px;
      background-color: black;
      border-radius: 30px;
      width: 350px;
      justify-content: space-between;
      color: grey;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

      p {
        font-size: 13px;
        text-transform: uppercase;
        padding: 3px;
      }
      .term-div {
        min-height: 70px;

        border-radius: 10px;
        background-color: #d9a26b;
        color: white;
      }
      .top-div {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        min-height: 150px;
        gap: 10px;
        overflow: hidden;
        .long {
          border-radius: 10px;
          grid-row-end: span 2;
          width: calc(90% * 400px);
          height: 100%;

          background-color: #8080ff;
          color: white;
        }
        .small {
          border-radius: 10px;
          background-color: #d9a26b;
          width: calc(10% * 400px);
          /* grid-column-end: span 2; */
          height: 100%;
          color: white;
        }
      }
      .bottom-div {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        height: 120px;
        width: 100%;
        justify-content: space-between;
        gap: 20px;
        .div {
          height: 100%;
          border-radius: 10px;
          background-color: #8080ff;
          color: white;
          /* width:100px; */
        }
      }
    }
  }
  @media screen and (max-width: 840px) {
    .mobile-info {
      display: flex !important;
      min-height: 510px;
      background: rgba(0, 0, 0, 1);
      border-radius: 30px;
      min-width: 100%;
      max-width: 350px;
      justify-content: space-between;
      color: grey !important;
      text-align: center !important;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      p {
        font-size: 13px;
        text-transform: uppercase;
        padding: 3px;
      }
      .term-div {
        min-height: 70px;

        border-radius: 10px;
        background-color: #d9a26b;
        color: white;
      }
      .top-div {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        min-height: 150px;
        gap: 10px;
        overflow: hidden;
        .long {
          border-radius: 10px;
          grid-row-end: span 2;
          width: calc(90% * 400px);
          height: 100%;
          background-color: #8080ff;
          color: white;
        }
        .small {
          border-radius: 10px;
          background-color: #d9a26b;
          width: calc(10% * 400px);
          height: 100%;
          color: white;
        }
      }
      .bottom-div {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        height: auto;
        width: 100%;
        justify-content: space-between;
        gap: 20px;
        .div {
          height: 100%;
          border-radius: 10px;
          background-color: #8080ff;
          color: white !important;
          /* width:100px; */
        }
      }
    }
    .info-wrapper {
      display: none !important;
    }
  }
  @media screen and (max-width: 840px) {
    padding: 40px 30px !important;
  }

  @media screen and (max-width: 400px) {
    .mobile-info {
      height: 540px;
      .bottom-div {
        height: auto;
      }
    }
  }
  @media screen and (max-width: 1100px) {
    padding-left: 24px !important;
    padding-right: 24px !important;
  }
`;
