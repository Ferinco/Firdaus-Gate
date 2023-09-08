import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { PATH_DASHBOARD } from "../../../routes/paths";
export default function AdminDashboard() {
  return (
    <Wrapper className="">
      <div className="d-flex flex-column left p-5">
        <h4>Good Afternoon, Mr Lawal</h4>
        <p>welcome to your dashboard</p>
      </div>

      <div className="middle-div px-5">
      <div className="overviews p-3 py-5">
        <div className="circle-div"></div>
        <div className="circle-div"></div>
        <div className="circle-div"></div>
        <div className="circle-div"></div>
      </div>
      </div>
      <div className="tabs d-flex flex-column py-4 px-5">
        <Link
          className="react-router-link tab d-flex flex-row justify-content-between px-3 py-2"
          to={PATH_DASHBOARD.admin.createTeachers}
        >
          <div className="d-flex flex-column mt-3 text">
            <h6>Create Profile</h6>
            <p>create a new teacher profile</p>
          </div>
          <div className="icon-div">
            <Icon className="icon" icon="typcn:user-add" color="white" />
          </div>
        </Link>
        <Link
          className="react-router-link tab d-flex flex-row justify-content-between px-3 py-2"
          to={PATH_DASHBOARD.teacher.create}
        >
          <div className="d-flex flex-column  mt-3 text">
            <h6>Add Subject Scheme</h6>
            <p>upload the term's scheme of work</p>
          </div>
          <div className="icon-div">
            <Icon className="icon" icon="pepicons-pencil:list" color="black" />
          </div>
        </Link>
        <Link
          className="react-router-link tab d-flex flex-row justify-content-between px-3 py-2"
          to={PATH_DASHBOARD.teacher.create}
        >
          <div className="d-flex flex-column  mt-3 text">
            <h6>Term Calender</h6>
            <p>post the timeline for the current term</p>
          </div>
          <div className="icon-div">
            <Icon className="icon" icon="solar:calendar-bold" color="black" />
          </div>
        </Link>
        <Link
          className="react-router-link tab d-flex flex-row justify-content-between px-3 py-2"
          to={PATH_DASHBOARD.teacher.create}
        >
          <div className="d-flex flex-column  mt-3 text">
            <h6>Post a Project</h6>
            <p>Give your student(s) a project to work on</p>
          </div>
          <div className="icon-div">
            <Icon className="icon" icon="ph:potted-plant-fill" color="black" />
          </div>
        </Link>
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
        color: #b3b3b3;
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
