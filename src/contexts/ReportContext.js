import React, { createContext, useState, useReducer } from "react";
import { ReportService } from "../services/reportService";

const initialState = {
  users: [],
  reports: [],
};
export const ReportContext = createContext({
  ...initialState,
  createReport: () => Promise.resolve(),
  getReports: () => Promise.resolve(),
});

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_REPORTS":
      return { ...state, reports: action.payload };
    case "CREATE_REPORT":
      return { ...state, reports: state.reports.push(action.payload) };
    default:
      return state;
  }
};

const ReportProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function createReport(reportData) {
    await ReportService.createReport(reportData)
      .then((res) => {
        console.log(res);
        dispatch({
          type: "CREATE_REPORT",
          payload: res,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function getReports() {
    await ReportService.getReports().then((response) => {
      dispatch({
        type: "GET_REPORTS",
        payload: response,
      });
    });
  }

  return (
    <ReportContext.Provider
      value={{ ...state, createReport, getReports: getReports }}
    >
      {children}
    </ReportContext.Provider>
  );
};

export default ReportProvider;
