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
//get time for welcome message
  const currentTime = new Date().getHours();
  const [greeting, setGreeting] = useState(getGreeting(currentTime));
function getGreeting(currentTime){
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

      {loading && <OverlayLoading />}
    <Dashboard className="py-5">
          <div className="big-tab d-flex flex-row justify-content-between p-3">
            <div className="text d-flex flex-column justify-content-center gap-2">
              <h4 className="mb-0">{greeting} {user.firstName}</h4>
              <p className="mb-0">
                This is your personal dashboard which only you have access to.
                Navigate through diferrent paths to complete any desired action.
              </p>
            </div>
            <div className="icon-div">
              <Icon className="icon" icon="streamline-emojis:graduation-cap" />
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
  .spinner-border {
    font-size: 9px !important;
    width: 12px !important;
    height: 12px !important;
  }
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
      }
      .icon-div {
        .icon {
          font-size: 200px;
          @media (max-width: 558px){
            font-size: 150px;
          }
          @media (max-width: 506px){
            font-size: 130px;
          }
          @media (max-width: 485px){
            font-size: 100px;
          }
          @media (max-width: 455px){
            font-size: 70px;
          }
        }
      }
    }


  @media screen and (max-width: 1100px) {
    padding-left: 24px !important;
  padding-right: 24px !important;
  }
`;
