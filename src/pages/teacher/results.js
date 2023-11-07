import React, { useEffect } from "react";
import styled from "styled-components";
import { getReports } from "../../redux/slices/reports";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import AddCSV from "../../components/AddCSV";
import { CircularProgress } from "../../components/custom";
export default function Results() {
  const {user} = useAuth()
  const dispatch = useDispatch()
  const [CSVOpen, setCSVOpen] = useState(false);
  const [csvData, setCsvData] = useState([]);
  useEffect(() => {
    dispatch(getReports({teacherId: user._id}))
  }, [dispatch, user._id]);
const {reports, isLoading} = useSelector((state)=> state.reports)
  return (
    <div>
      <Wrapper>
      {isLoading ? <CircularProgress /> : ""}
      {CSVOpen && (
        <AddCSV
          onClose={() => setCSVOpen(false)}
          setData={setCsvData}
          data={csvData}
          // handleSubmit={createCsvUsers}
        />
      )}
        <div className="container d-flex flex-column p-5">
<div>
  <h4>Reports</h4>
</div>
{reports > 0 ? (
  <>
{reports.map((result)=>(
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
      </Wrapper>
    </div>
  );
}
const Wrapper = styled.div``;
