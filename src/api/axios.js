import axios from "axios";
const api = axios.create({
  baseURL: "https://firdausgate-api.cyclic.app/api/v1",
});

api.interceptors.request.use((req) => {
  if (localStorage.getItem("accessToken")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
  }
  return req;
});

export { api };
