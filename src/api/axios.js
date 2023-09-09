import axios from "axios";
const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

api.interceptors.request.use((req) => {
  if (localStorage.getItem("accessToken")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
  }
  return req;
});

export { api };
