import { api } from "../api/axios";

export const ReportService = {
  createReport: async (reportData) => {
    const { data } = await api.post("/reports", reportData);
    return data;
  },

  downloadReport: async (params) => {
    const { id } = params;
    const { data } = await api.get(`/reports/download/${id}`, {
      responseType: "arraybuffer",
    });
    return data;
  },
};
