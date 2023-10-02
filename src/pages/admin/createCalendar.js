import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentTerm } from "../../redux/slices/term";

export default function CreateCalendar() {
  const dispatch = useDispatch();
  const { currentTerm } = useSelector((state) => state.term);
  const [weeks, setWeeks] = useState()
  useEffect(() => {
    dispatch(fetchCurrentTerm());
  }, []);
  console.log(currentTerm)
  const startDate =new Date(currentTerm.startDate)
  const endDate =new Date(currentTerm.endDate)
  console.log(endDate)
  console.log(startDate)
  const dateDifference = endDate - startDate
  console.log(dateDifference)
  const weeksDifference = Math.ceil(dateDifference / (1000 * 3600 * 24 * 7))
  console.log(weeksDifference)


  return (
    <div className="p-5">
        <div>
            <h4>Term Calendar</h4>
        </div>
        <div><p>{weeksDifference}{" "}weeks for {currentTerm.name}</p></div>
    </div>
  );
}
