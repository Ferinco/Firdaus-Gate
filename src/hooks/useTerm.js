import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentTerm } from "../redux/slices/term";

export const useTerm = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrentTerm());
  }, [dispatch]);

  const currentTerm = useSelector((state) => state.term);

  return { currentTerm };
};
