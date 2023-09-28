import React from "react";
import { styled } from "styled-components";
import { Icon } from "@iconify/react";
import { CLASS } from "../../constants/class";
import { ReportService } from "../../services/reportService";
import { toast } from "react-hot-toast";
import { OverlayLoading } from "../../components/OverlayLoading";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { getReports } from "../../redux/slices/reports";
import { useTerm } from "../../hooks/useTerm";
import { fetchCurrentTerm } from "../../redux/slices/term";

export default function ResultsPage() {
  const { user } = useAuth();

  const currentTerm = useSelector((state) => state.term);
  console.log(currentTerm);
  const [loading, setLoading] = React.useState(false);
  const [selectedClass, setSelectedClass] = React.useState("JSS1");
  const [selectedTerm, setSelectedTerm] = React.useState(currentTerm);
  const dispatch = useDispatch();

  // React.useEffect(() => {
  //   dispatch(getReports({ student: user._id }));
  // }, [dispatch]);

  // const { reports } = useSelector((state) => state.reports);
  // console.log(reports);
  React.useEffect(() => {
    dispatch(fetchCurrentTerm());
  }, [dispatch]);
  const reportsItem = [
    {
      reportTerm: "FIRST_TERM",

      icon: "icon-park-solid:two-key",
      _id: 4484,
    },
    {
      reportTerm: "SECOND_TERM",
      icon: "icon-park-solid:two-key",
      _id: 4485,
    },
    {
      reportTerm: "THIRD_TERM",
      icon: "icon-park-solid:two-key",
      _id: 4486,
    },
  ];

  // Download handler for report card
  async function downloadReport(term) {
    try {
      setLoading(true);
      const data = await ReportService.downloadReport({
        classSection: "junior",
        selectedTerm: term,
        selectedClass,
        student: user._id,
      });

      const blob = new Blob([data]);
      const url = window.URL.createObjectURL(blob);
      var link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        `${user.admissionNumber}-${selectedTerm}.pdf`
      );
      document.body.appendChild(link);
      link.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);
      setLoading(false);
      toast.success("Result downloaded successfully");
    } catch (error) {
      console.error("An error occurred:", error);
      setLoading(false);
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      }
      if (error.response.status === 404) {
        toast.error("You do not have a report for this session!");
      }
    }
  }
  function changedClass(e) {
    setSelectedClass(e.target.value);
    toast.success(`class has been changed to ${selectedClass}`);
  }
  return (
    <Wrapper className="p-5">
      {loading && <OverlayLoading />}
      <div className="">
        <h4>Reports</h4>
        <p>View reports for each school term</p>
        <div className="select-wrapper d-flex flex-row p-3 justify-content-between center container px-4">
          {/* selection of class */}
          <select onChange={changedClass}>
            {CLASS.map((opt, index) => (
              <option key={index} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <div>
            <span className="d-flex flex-column">
              <p>Current Term:</p> <h4>2nd</h4>
            </span>
          </div>
        </div>
      </div>
      <div className="tabs-wrapper py-5 mt-5">
        <div className="tabs w-100 p-0 py-2 px-3">
          {reportsItem.map((report) => (
            <div
              className="tab "
              onClick={() => downloadReport(report.reportTerm)}
              key={report._id}
            >
              <div className="tab-right">
                <div className="icon-div">
                  <Icon
                    icon={
                      (report.reportTerm === "FIRST_TERM" &&
                        "icon-park-solid:one-key") ||
                      (report.reportTerm === "SECOND_TERM" &&
                        "icon-park-solid:two-key") ||
                      (report.reportTerm === "THIRD_TERM" &&
                        "icon-park-solid:three-key")
                    }
                    className="icon"
                  />
                </div>
                <div className="text d-flex flex-column">
                  <h6>
                    {(report.reportTerm === "FIRST_TERM" && "1ST") ||
                      (report.reportTerm === "SECOND_TERM" && "2ND") ||
                      (report.reportTerm === "THIRD_TERM" && "3RD")}
                  </h6>
                  <p>
                    {" "}
                    {(report.reportTerm === "FIRST_TERM" && "1ST") ||
                      (report.reportTerm === "SECOND_TERM" && "2ND") ||
                      (report.reportTerm === "THIRD_TERM" && "3RD")}{" "}
                    term reports
                  </p>
                </div>
              </div>
              <div className="tab-left">
                <Icon
                  icon={
                    (report.reportTerm === "FIRST_TERM" &&
                      "icon-park-solid:one-key") ||
                    (report.reportTerm === "SECOND_TERM" &&
                      "icon-park-solid:two-key") ||
                    (report.reportTerm === "THIRD_TERM" &&
                      "icon-park-solid:three-key")
                  }
                  className="big-icon"
                />
              </div>
            </div>
          ))}
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
  .select-wrapper {
    width: 100%;
    background-color: white;
    align-items: center;
    border-radius: 30px;
    span {
      align-items: flex-end;
      justify-content: right;
      color: grey;
    }
    select {
      width: 200px !important;
      padding: 10px;
      border: 1px solid grey;
      color: grey;
      border-radius: 10px;
      background: transparent;
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
      cursor: pointer;
      height: 200px;
      width: 250px;
      overflow: hidden;
      justify-content: space-between;
      display: flex;
      flex-direction: row;
      align-items: center !important;
      padding: 15px;
      text-decoration: none !important;
      transition: 0.4s all cubic-bezier(0.215, 0.61, 0.355, 1);
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
      &:hover {
        transform: scale(1.05);
      }
      &:nth-child(2) {
        background-color: #65655d;
        color: white;

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
