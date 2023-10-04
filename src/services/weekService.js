import {api} from "../api/axios"
export const WeeksService = {
    createWeeks: async (values) => {
        const { data } = await api.post("/weeks/create-weeks", values);
        return data;
      },
      getWeeks: async () => {
        const { data } = await api.get("/weeks/get-weeks");
        return data;
      },
}