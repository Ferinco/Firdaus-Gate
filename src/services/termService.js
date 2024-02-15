import { values } from "lodash";
import { api, supportApi } from "../api/axios";

export const TermService = {
  createTerm: async (values) => {
    const { data } = await supportApi.post("/api/set-terms", values);
    return data;
  },
  getCurrentTerm: async () => {
    const { data } = await supportApi.get("/api/term");
    return data;
  },
  updateTerm: async(values) =>{
    const { data } = await supportApi.put("/api/updateTerm", values);
    return data
  }
};
