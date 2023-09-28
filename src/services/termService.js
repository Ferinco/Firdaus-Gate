import { api } from "../api/axios";

export const TermService = {
  createTerm: async (values) => {
    const { data } = await api.post("/term/create-term", values);
    return data;
  },
  getCurrentTerm: async () => {
    const { data } = await api.get("/term/current-term");
    return data;
  },
};
