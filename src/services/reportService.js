import { api } from "../api/axios";

export const ReportService = {
  createReport: async (reportData) => {
    const { data } = await api.post("/reports/create", reportData);
    return data;
  },
  getReports: async () => {
    const { data } = await api.get("/reports");
    return data;
  },

  downloadReport: async (query) => {
    const { reportTerm, selectedClass } = query;
    const { data } = await api.get(
      `/reports/download?reportTerm=${reportTerm}&selectedClass=${selectedClass}`,
      { responseType: "arraybuffer" }
    );
    return data;
  },
};
