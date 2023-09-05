import { api } from "../api/axios";

export const ReportService = {
  createReport: async (reportData) => {
    const { data } = await api.post("/report", reportData);
    return data;
  },
};
