import { api, supportApi } from "../api/axios";

export const ReportService = {
  createReport: async (results, currentSession, selectedClass, term) => {
    const { data } = await supportApi.post("/api/saveResults", {results, currentSession, selectedClass, term});
    return data;
  },
  getReports: async (params) => {
    const { data } = await supportApi.get("/api/studentsresults/", { params: params });
    return data;
  },

  // downloadReport: async (query) => {
  //   const { classSection, selectedTerm, selectedClass, student } = query;

  //   const { data } = await api.get(`/reports/download`, {
  //     params: { classSection, selectedTerm, selectedClass, student },
  //   });
  //   return data;
  // },
};
