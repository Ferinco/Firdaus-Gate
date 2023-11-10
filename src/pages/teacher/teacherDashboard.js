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

const TabsConfig = [
  {
    link: PATH_DASHBOARD.teacher.create,
    title: "Create Profile",
    subTitle: "create a new student profile",
    icon: "typcn:user-add",
    iconColor: "black",
  },
  {
    link: PATH_DASHBOARD.teacher.addScheme,
    title: "Add Subject Scheme",
    subTitle: "Upload subject scheeme for the term",
    icon: "pepicons-pencil:list",
    iconColor: "white",
  },
  {
    link: PATH_DASHBOARD.teacher.createResult,
    title: "Create reports",
    subTitle: "Upload reports on students performances",
    icon: "uil:create-dashboard",
    iconColor: "white",
  },
  {
    link: PATH_DASHBOARD.admin.studentsList,
    title: "Post Projects",
    subTitle: "Post a project for your students to work on",
    icon: "ph:potted-plant-fill",
    iconColor: "black",
  },
];

export default function TeacherDashboard() {
  const [weeks, setWeeks] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [begin, setBegin] = useState();
  const [end, setEnd] = useState();
  const [endDate, setEndDate] = useState(null);
  const [termName, setTermName] = useState("");
  const [currentTerm, setCurrentTerm] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentTerm())
      .unwrap()
      .then((res) => {
        console.log(res.data.startDate);
        setCurrentTerm(res.data);
        setStartDate(new Date(res.data.startDate));
        setEndDate(new Date(res.data.endDate));
        setTermName(res.data.name);
        console.log(currentTerm);
        console.log(startDate);
      });
  }, []);

  console.log(currentTerm);
  console.log(startDate);
  // const begin =
  // const end = endDate.toLocaleDateString('en-us',{year: "numeric", month:"short", day: "numeric", weekday: "short"})
  console.log(begin, end);
  useEffect(() => {
    if (startDate !== null) {
      const currentDate = new Date();
      const dateDifference = currentDate - startDate;
      const weeksDifference = Math.max(
        Math.ceil(dateDifference / (1000 * 3600 * 24 * 7)),
        0
      );
      setWeeks(new Array(weeksDifference));
      setBegin(
        startDate.toLocaleDateString("en-us", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      );
      setEnd(
        endDate.toLocaleDateString("en-us", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      );
    }
  }, [startDate]);

  console.log(startDate);
  console.log(weeks);

  const lastWeek = weeks.length - 1;
  console.log(lastWeek);
  console.log(weeks);

  //get current time
  const { user } = useAuth();
  console.log(user);
  let currentTime = new Date().getHours();
  const [greeting, setGreeting] = useState(getGreeting(currentTime));
  const [title, setTitle] = useState("");
  const [students, setStudents] = useState();
  const [maleGender, setMaleGender] = useState();
  const [femaleGender, setFemaleGender] = useState();

  console.log(currentTerm);

  //fetching class length details
  useEffect(() => {
    const FetchStudents = async () => {
      try {
        const res = await UserService.findUsers({ role: "student" });
        const Data = res.data;
        const male = Data.filter((user) => user.gender === "male");
        setMaleGender(male.length);
        const female = Data.filter((user) => user.gender === "female");
        setFemaleGender(female.length);
        setStudents(Data.length);
      } catch (error) {
        console(error);
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
      if (user.gender === "male") {
        setTitle("Mr");
      } else setTitle("Mrs");
    }
    getTitle();
  }, []);

  return (
    <Dashboard className="p-5">
      <div className="head d-flex flex-column container py-3 justify-content-center px-0 mx-0">
        <h4 className="mt-3">
          <span>{greeting} </span>
          {title} {user.firstName} <span></span>
        </h4>
        <p className="text-muted">Welcome to your dashboard.</p>
      </div>
      <div className="infos d-flex flex-row gap-3">
        <div className="info p-3">
          <div className="info-text">
            <p className="mb-0">Current term</p>
            <h6>
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
        <div className="info p-3">
          <div className="info-text">
            <p className="mb-0">Class Handled</p>
            <h5>
              {user.classHandled? (
<h6>{user.classHandled}</h6>
              ) : (
               "None"
              )}
            </h5>
          </div>
          <div className="icon-div">
          </div>
        </div>
        <div className="info p-3">
          <div className="info-text">
            <p className="mb-0">Subject Taught</p>
            <h5>
              {user.subjectTaught? (
<h6>{user.subjectTaught}</h6>
              ) : (
               "None"
              )}
            </h5>
          </div>
        </div>
      </div>

      <div className="tabs d-flex flex-column mt-5">
        <h5>Tabs</h5>
        {TabsConfig.map(({ icon, title, subTitle, iconColor, link }, index) => (
          <Link
            className="react-router-link tab d-flex flex-row justify-content-between px-3 py-2 gap-1"
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
    </Dashboard>
  );
}
const Dashboard = styled.div`
  background-color: #f5f5f5 !important;
  margin: 0 !important;
  height: fit-content !important;
  /* height: fit-content; */
  .head {
    h4 {
      font-weight: 800 !important;
    }
    p {
      font-weight: 600;
    }
  }
  .spinner-border {
    font-size: 9px !important;
    width: 12px !important;
    height: 12px !important;
  }
  
  .infos {
    .info {
      width: 200px;
      height: 180px;
      border-radius: 15px;
      overflow: hidden;
      background-color: white;
.big-icon{
  font-size: 200px !important;
}
.icon-div{
  background-color: #f1f1f1;
  overflow: hidden;
  border-radius: 10px;
}
    }
  }
  .tabs {
    gap: 10px;
    width: 100% !important;
    .tab {
      max-width: 400px !important;
      height: 100px !important;
      border-radius: 10px;
      align-items: center;
      overflow: hidden;
      .icon-div {
        padding: 10px;
        border-radius: 50%;
        /* border:1px solid black; */
      }
      .text {
        text-align: left;
      overflow: hidden;
p{
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
`;
