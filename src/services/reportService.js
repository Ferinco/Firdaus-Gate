import { api } from "../api/axios";

export const ReportService = {
  createReport: async (reportData) => {
    const { data } = await api.post("/reports", reportData);
    return data;
  },

  downloadReport: async (params) => {
    const { data } = await api.get("/reports/download/ddie?class=fromfront", {
      responseType: "arrayBuffer",
    });
    return data;
  },
};
