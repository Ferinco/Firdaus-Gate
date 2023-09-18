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
      {
        responseType: "arraybuffer",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGZkMmI5ZjUzNjg4ZDUzMTZhOGJiMGMiLCJlbWFpbCI6InNob2xhMTIzQGdtYWlsLmNvbSIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNjk0MzEzMzc2LCJleHAiOjE2OTQ0ODYxNzZ9.8uBaFl8Fc8rHO8BlB8ZXNwIQfdWPgHQyPJo03FDEHpE",
        },
      }
    );
    return data;
  },
};
