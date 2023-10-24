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

export default function StudentDashboard() {
  const { user } = useAuth();
  const [weeks, setWeeks] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [termName, setTermName] = useState("");
  const [begin, setBegin] = useState();
  const [currentTerm, setCurrentTerm] = useState({});
  const [loading, setLoading] = React.useState(false);
  const [selectedClass, setSelectedClass] = React.useState(user.currentClass);

  //fetch current term
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentTerm())
      .unwrap()
      .then((res) => {
        console.log(res.data.startDate);
        setCurrentTerm(res.data);
        setStartDate(new Date(res.data.startDate));
        setTermName(res.data.name);
        console.log(currentTerm);
        console.log(startDate);
      });
  }, []);
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
    }
  }, [startDate]);
  const lastWeek = weeks.length - 1;

  //downloading current report
  async function downloadReport(term) {
    try {
      setLoading(true);
      const data = await ReportService.downloadReport({
        classSection: selectedClass?.startsWith("JSS") ? "junior" : "senior",
        selectedTerm: term,
        selectedClass,
        student: user._id,
      });

      if (data?.success) {
        await axios
          .post(
            generatePdfApi,
            { html: data.data },
            { responseType: "arraybuffer" }
          )
          .then(({ data }) => {
            const blob = new Blob([data]);
            const url = window.URL.createObjectURL(blob);
            var link = document.createElement("a");
            link.href = url;
            link.setAttribute(
              "download",
              `${user.admissionNumber}-${term}.pdf`
            );
            document.body.appendChild(link);
            link.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(link);

            toast.success("Report downloaded successfully");
          })
          .catch((error) => {
            toast.error("Error downloading report");
            console.error(error);
          });
      }

      setLoading(false);
    } catch (error) {
      console.error("An error occurred:", error);
      setLoading(false);
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      }
      if (error?.response?.status === 404) {
        toast.error("Report is currently unavailable!");
      } else {
        toast.error("Network error, try again later");
      }
    }
  }

  return (
    <Dashboard>
      {loading && <OverlayLoading />}
      <div className="middle-div d-flex flex-row justify-content-between align-items-center p-5">
        <div className="wrapper-div  justify-content-between gap-3">
          <div className="big-tab d-flex flex-row justify-content-between p-3">
            <div className="text">
              <h5>Hi, welcome</h5>
              <p>
                This is your personal dashboard which only you have access to.
                Navigate through diferrent paths to complete any desired action.
              </p>
            </div>
            <div className="icon-div">
              <Icon className="icon" icon="streamline-emojis:graduation-cap" />
            </div>
          </div>
          <div className="details-wrapper mt-5">
            <div className="mobile-details d-flex d-lg-none flex-row py-2 gap-2 px-4 justify-content-between">
              <div className="info">
                current term{" "}
                <h5>
                  {termName === "" ? (
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    termName
                  )}
                </h5>
              </div>
              <div className="info">
                current week{" "}
                <h5>
                  {lastWeek < 0 ? (
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    lastWeek
                  )}
                </h5>
              </div>
              <div className="info"></div>
            </div>
          </div>
          <div className="tabs w-100 pt-5 pt-lg-0 ">
            <div className="d-none mobile-tabs row">
              <div className="tab col-4 d-flex flex-column justify-content-center align-items-center p-1">
                current term
                <h5>
                  {termName === "" ? (
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    termName
                  )}
                </h5>
              </div>
              <div className="tab col-4 d-flex flex-column justify-content-center align-items-center p-1">
                current week
                <h5>
                  {lastWeek < 0 ? (
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    lastWeek
                  )}
                </h5>
              </div>
              <div className="tab col-4 d-flex flex-column justify-content-center align-items-center p-1">
                current week
                <h5>
                  {lastWeek < 0 ? (
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    lastWeek
                  )}
                </h5>
              </div>
            </div>
            <div className="sub-tabs d-flex flex-column gap-2 justify-content-center">
              <div className="sub-tab px-3 d-flex justify-content-between align-items-center">
                <div>
                  <p>number of subjects offered</p>
                  <h6>15</h6>
                </div>
                <div className="icon-div">
                  <Icon icon="mdi:bookshelf" className="icon" />
                </div>
              </div>
              <div className="sub-tab px-3 d-flex justify-content-between align-items-center">
                <div>
                  <p>current department</p>
                  <h6>Science</h6>
                </div>
                <div className="icon-div">
                  <Icon
                    icon="material-symbols:label-rounded"
                    rotate={1}
                    className="icon"
                  />
                </div>
              </div>
            </div>
            <Link
              to={PATH_DASHBOARD.student.results}
              className="tab d-flex flex-row"
            >
              <div className="tab-right">
                <div className="icon-div">
                  <Icon
                    icon="icon-park-twotone:table-report"
                    className="icon"
                  />
                </div>
                <div className="text d-flex flex-column">
                  <h6>RESULTS</h6>
                  <p>View Results</p>
                </div>
              </div>
              <div className="tab-left">
                <Icon
                  icon="icon-park-twotone:table-report"
                  className="big-icon"
                />
              </div>
            </Link>

            <div className="tab ">
              <div className="tab-right">
                <div className="icon-div">
                  <Icon icon="ion:calendar" className="icon" />
                </div>
                <div className="text d-flex flex-column">
                  <h6>SCHEME</h6>
                  <p>Class Scheme</p>
                </div>
              </div>
              <div className="tab-left">
                <Icon icon="ion:calendar" className="big-icon" />
              </div>
            </div>
            <div className="details d-none d-lg-flex flex-lg-column p-2 gap-2">
              <div className="info">
                current Term
                <h5>
                  {termName === "" ? (
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    termName
                  )}
                </h5>
              </div>
              <div className="info">
                current week{" "}
                <h5>
                  {lastWeek < 0 ? (
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  ) : (
                    lastWeek
                  )}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dashboard>
  );
}
const Dashboard = styled.div`
  height: 100vh;
  background: #f1f1f1 !important;
  overflow-x: hidden !important;
  .spinner-border {
    font-size: 9px !important;
    width: 12px !important;
    height: 12px !important;
  }
  .middle-div {
    background-color: #f1f1f1;
    align-items: center;
    height: auto;
    gap: 50px;
    overflow: hidden !important;
    justify-content: center !important;
    .big-tab {
      border-radius: 30px;
      z-index: 99;
      background-color: rgba(158, 160, 231, 0.7);
      border: 1px solid #9ea0e7;
      backdrop-filter: blur(10px);
      box-shadow: 0 0 10px rgba(158, 160, 231, 0.5);
      height: 180px;
      .text {
        color: white;
        margin-top: 20px;
      }
      .icon-div {
        .icon {
          font-size: 200px;
        }
      }
    }
    .details {
      width: fit-content;
      border-radius: 30px;
      .info {
        width: 120px;
        height: 90px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 7px;
        p {
          font-weight: 500;
        }
        &:first-child {
          background-color: #8080ff;
          color: white;
        }
        &:nth-child(2) {
          background-color: #d9a26b;
          color: white;
        }
      }
    }
    .details-wrapper {
      width: 100% !important;
      overflow: hidden !important;
    }
    .mobile-details {
      width: fit-content;
      width: 100% !important;
      overflow: hidden !important;
      box-shadow: 0 0 10px rgba(158, 160, 231, 0.5);
      .info {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        &:first-child {
          background-color: #8080ff;
          color: white;
        }
        &:nth-child(2) {
          background-color: #d9a26b;
          color: white;
        }
        &:nth-child(3) {
          background-color: #65655d;
          color: white;
        }
      }
    }
    .sub-tabs {
      height: 200px;
    }
    .sub-tab {
      width: 250px;
      height: auto;
      border-radius: 10px;
      padding-top: 5px;
      &:first-child {
        background-color: #b3b3b3;
        .icon-div {
          background-color: #9ea0e7;
          .icon {
            color: black;
          }
        }
      }
      &:nth-child(2) {
        background-color: #d9a26b;
        .icon-div {
          background-color: #e98f35;
        }
      }
      p {
        font-size: 13px;
      }
      .icon {
        font-size: 30px;
      }
      .icon-div {
        padding: 7px;
        border-radius: 50%;
      }
    }
    .tabs {
      gap: 30px;
      margin-left: 3px !important;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .tab {
        border-radius: 30px;
        height: 200px;
        /* width: 200px; */
        overflow: hidden;
        justify-content: space-between;
        display: flex;
        flex-direction: row;
        align-items: center !important;
        padding: 15px;
        text-decoration: none !important;
        cursor: pointer;
        .tab-right {
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          gap: 20px;
        }
        .tab-left {
          margin-right: -50% !important;
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
        &:nth-child(4) {
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
        &:nth-child(3) {
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
  }

  @media screen and (max-width: 1100px) {
    .btns {
      display: flex !important;
      flex-direction: row;
      align-items: center;
      flex-direction: row;
      gap: 40px;
      .profile-btn,
      .nav-btn {
        font-weight: 600 !important;
        font-size: 30px;
      }
    }
    .middle-div {
      .wrapper {
        width: 100%;
      }
      .big-tab {
        z-index: 0;
      }
    }
  }
  @media screen and (max-width: 767px) {
    .middle-div {
      .big-tab {
        height: auto;
        .text {
          color: white;
          margin-top: 10px;
        }
        .icon-div {
          margin-right: -50px;
          .icon {
            font-size: 70px;
          }
        }
      }
      .tabs {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        .tab {
          .tab-left {
            margin-right: -20% !important;
          }
        }
      }
    }
  }
  @media screen and (max-width: 600px) {
    .middle-div {
      padding: 24px !important;
    }
    .details-wrapper {
      display: none !important;
    }
    .sub-tabs {
      width: 100% !important;
      /* background-color: white; */
      border-radius: 20px;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
    }
    .mobile-tabs {
      margin-top: 50px !important;
      display: flex !important;
      align-items: center;
      justify-content: center !important;
      gap: 5px;
      flex-wrap: nowrap;
      margin-right: 0 !important;
      margin-left: 0 !important;
      .tab {
        height: 120px !important;
        text-align: center;
        padding: 5px 10px !important;
        h5 {
          font-size: 17px;
        }
        p {
          font-size: 13px;
        }
        &:first-child {
          background-color: #65655d;
          color: white !important;
        }
        &:nth-child(2) {
          background-color: #d9a26b;
          color: white !important;
        }
      }
    }
  }
`;
