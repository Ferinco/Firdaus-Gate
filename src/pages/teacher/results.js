import React, { useEffect } from "react";
import styled from "styled-components";
import { getReports } from "../../redux/slices/reports";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import AddCSV from "../../components/AddCSV";
import { Button, CircularProgress } from "../../components/custom";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { PATH_DASHBOARD } from "../../routes/paths";
export default function Results() {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const [CSVOpen, setCSVOpen] = useState(false);
  const [csvData, setCsvData] = useState([]);
  useEffect(() => {
    dispatch(getReports({ teacherId: user._id }));
  }, [dispatch, user._id]);
  const { reports, isLoading } = useSelector((state) => state.reports);
  return (
    <div>
      {isLoading ? <CircularProgress /> : ""}
      <Wrapper className="container py-5">
        {CSVOpen && (
          <AddCSV
            onClose={() => setCSVOpen(false)}
            setData={setCsvData}
            data={csvData}
            // handleSubmit={createCsvUsers}
          />
        )}
        {user.classHandled === "none" ? (
          <div>
            <div>
              <h3>REPORTS</h3>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center mt-5">
             <div className="icon-div p-3">
             <Icon icon="ph:barricade-light" className="big-icon" color="grey"/>
             </div>
             <div className="texts d-flex flex-column  text-center mt-1">
<p className="m-0 p-1">Permission Denied</p>
<p className="m-0 p-2">you have to be a class teacher to create reports</p>
<Link to={PATH_DASHBOARD.teacher.index}>Dashboard</Link>
             </div>

            </div>
          </div>
        ) : (
          <div className="d-flex flex-column">
            <div>
              <h4>REPORTS</h4>
            </div>
            {reports > 0 ? (
              <>
                {reports.map((result) => (
                  <div key={result._id}>{result}</div>
                ))}
              </>
            ) : (
              <div className="d-flex flex-column justify-content-center align-items-center mt-5">
                <p className="text-muted">No reports created yet</p>
                <button onClick={() => setCSVOpen(true)} className="csv-button">
                  Import CSV file
                </button>
              </div>
            )}
          </div>
        )}
      </Wrapper>
    </div>
  );
}
const Wrapper = styled.div`
.icon-div{
  border: 1px dashed grey;
  border-radius: 50%;
}
  .big-icon{
    font-size: 200px !important;
  }
  .p-1{
    font-size:25px;
  }
`;
