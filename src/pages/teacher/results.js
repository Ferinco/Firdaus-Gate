import React, { useEffect } from "react";
import styled from "styled-components";
import { getReports } from "../../redux/slices/reports";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
export default function Results() {
  const {user} = useAuth()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getReports({teacherId: user._id}))
  }, [dispatch, user._id]);
const {reports, isLoading} = useSelector((state)=> state.reports)
  return (
    <div>
      <Wrapper>
        <div className="container d-flex flex-column p-5">
<div>
  <h4>Reports</h4>
</div>
{reports > 0 ? (
  <>
{reports.map((geng)=>(
  <div key={geng._id}>{geng}</div>
))}
  </>
) : (
  <div>
    <h5>No reports created yet</h5>
  </div>
)}
        </div>
      </Wrapper>
    </div>
  );
}
const Wrapper = styled.div``;
