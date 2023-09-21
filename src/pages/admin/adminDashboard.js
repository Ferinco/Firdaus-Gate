import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { PATH_DASHBOARD } from "../../routes/paths";
import { useAuth } from "../../hooks/useAuth";
export default function AdminDashboard() {
  const { user } = useAuth();
  const TabsConfig = [
    {
      link: PATH_DASHBOARD.admin.createTeachers,
      title: "Create Profile",
      subTitle: "create a new teacher profile",
      icon: "typcn:user-add",
      iconColor: "white",
    },
    {
      link: PATH_DASHBOARD.admin.teachersList,
      title: "Set Term",
      subTitle: "Set the current term",
      icon: "pepicons-pencil:list",
      iconColor: "black",
    },
    {
      link: PATH_DASHBOARD.admin.studentsList,
      title: "Term Calendar",
      subTitle: "Upload calendar for the current term",
      icon: "solar:calendar-bold",
      iconColor: "black",
    },
    {
      link: PATH_DASHBOARD.admin.studentsList,
      title: "Notify",
      subTitle: "Send a general notification to your staff",
      icon: "solar:calendar-bold",
      iconColor: "black",
    },
  ];
  return (
    <Wrapper className="">
      <div className="d-flex flex-column left p-5">
        <h4>Good Afternoon, Mr {user.lastName}</h4>
        <p>welcome to your dashboard</p>
      </div>

      <div className="middle-div px-5">
        <div className="overviews p-3 py-5">
          <div className="circle-div">
            <p>current term</p>
          </div>
          <div className="circle-div">
            <p>active teachers</p>
          </div>
          <div className="circle-div">
            <p>active students</p>
          </div>
          <div className="circle-div">
            <p>active applications</p>
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
        &:first-child {
          background: red;
        }
        &:nth-child(2) {
          background: blue;
        }
        &:nth-child(3) {
          background: purple;
        }
        &:last-child {
          background: black;
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
      min-width: 320px;
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
`;
