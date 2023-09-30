import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentTerm } from "../redux/slices/term";

export const useTerm = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentTerm());
  }, [dispatch]);

  const { currentTerm, isLoading } = useSelector((state) => state.term);
  let activeTerm = "";

  if (!isLoading) {
    if (currentTerm.name === "FIRST TERM") activeTerm = "1st";
    if (currentTerm.name === "SECOND TERM") activeTerm = "2nd";
    if (currentTerm.name === "THIRD TERM") activeTerm = "3rd";
  }
  return {
    currentTerm: {
      position: activeTerm,
      name: currentTerm.name,
      endDate: currentTerm.endDate,
      startDate: currentTerm.startDate,
    },
  };
};
