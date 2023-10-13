import axios from "axios";
const api = axios.create({
  // baseURL: "https://firdausgate-api.cyclic.app/api/v1",
  baseURL: process.env.REACT_APP_API,
});

export const generatePdfApi = "https://generate-pdf-emhz.onrender.com/to-pdf";

api.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

export { api };
