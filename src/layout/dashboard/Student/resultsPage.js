import React from "react";
import { styled } from "styled-components";
import { Icon } from "@iconify/react";
import { CLASS } from "../../../constants/class";
export default function ResultsPage() {
  return (
    <Wrapper className="p-5">
      <div className="">
        <h4>Reports</h4>
        <p>View reports for each school term</p>
        <div className="select-wrapper d-flex flex-row p-3 justify-content-between center container">
          {/* selection of class */}
          <select>
              {CLASS.map((opt, index) => (
                <option key={index}>{opt}</option>
              ))}
          </select>
          <div>
            <span className="d-flex flex-row"><p>Current Term:</p> <h4>2nd</h4></span>
          </div>
        </div>
      </div>
      <div className="tabs-wrapper py-5 mt-5">
    
        <div className="tabs w-100 p-0 py-5 px-3">
          <div className="tab ">
            <div className="tab-right">
              <div className="icon-div">
                <Icon icon="icon-park-solid:one-key" className="icon" />
              </div>
              <div className="text d-flex flex-column">
                <h6>1st</h6>
                <p>1st term reports</p>
              </div>
            </div>
            <div className="tab-left">
              <Icon icon="icon-park-solid:one-key" className="big-icon" />
            </div>
          </div>

          <a href="" download="Adekoya Ismail" className=" tab d-flex flex-row">
            <div className="tab-right ">
              <div className="icon-div">
                <Icon icon="icon-park-solid:two-key" className="icon" />
              </div>
              <div className="text d-flex flex-column">
                <h6>2nd</h6>
                <p>2nd term reports</p>
              </div>
            </div>
            <div className="tab-left">
              <Icon icon="icon-park-solid:two-key" className="big-icon" />
            </div>
          </a>

          <div className="tab ">
            <div className="tab-right">
              <div className="icon-div">
                <Icon icon="icon-park-solid:three-key" className="icon" />
              </div>
              <div className="text d-flex flex-column">
                <h6>3rd</h6>
                <p>3rd term reports</p>
              </div>
            </div>
            <div className="tab-left">
              <Icon icon="icon-park-solid:three-key" className="big-icon" />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .tabs-wrapper {
    background-color: white;
    border-radius: 30px;
  }
  .select-wrapper{
width: 100%;
background-color: white;
align-items: center;
border-radius: 30px;
span{
  gap:10px;
  align-items: baseline;

}
    select{
      width:200px !important;
    }
  }
  .tabs {
    gap: 30px;
    margin-left: 3px !important;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    .tab {
      border-radius: 30px;
      height: 200px;
      width: 250px;
      overflow: hidden;
      justify-content: space-between;
      display: flex;
      flex-direction: row;
      align-items: center !important;
      padding: 15px;
      text-decoration: none !important;
      .tab-right {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 20px;
      }
      .tab-left {
        margin-right: -30% !important;
      }
      .icon-div {
        padding: 10px;
        background-color: white;
        border-radius: 30px;
        width: 50px;
      }
      .icon {
        font-size: 30px;
      }
      &:first-child {
        background-color: #9ea0e7;
        color: white;
        .big-icon {
          font-size: 150px !important;
          color: #d2d3e9;
        }
        .icon {
          color: #9ea0e7;
        }
      }
      &:nth-child(2) {
        background-color: #65655d;
        color: white;
        &:hover {
          transform: scale(1.05);
        }
        .big-icon {
          font-size: 150px !important;
          color: grey;
        }
        .icon {
          color: #65655d;
        }
      }
      &:last-child {
        background-color: #9ea0e7;
        color: white;
        .big-icon {
          font-size: 150px !important;
          color: #d2d3e9;
        }
        .icon {
          color: #9ea0e7;
        }
      }
    }
  }
`;
