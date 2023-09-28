import { api } from "../api/axios";

export const ReportService = {
  createReport: async (reportData) => {
    const { data } = await api.post("/reports/create", reportData);
    return data;
  },
  getReports: async (params) => {
    const { data } = await api.get("/reports", { params: params });
    return data;
  },

  downloadReport: async (query) => {
    const { classSection, selectedTerm, selectedClass, student } = query;

    const { data } = await api.get(`/reports/download`, {
      params: { classSection, selectedTerm, selectedClass, student },
      responseType: "arraybuffer",
    });
    return data;
  },
};
