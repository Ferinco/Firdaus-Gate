import axios from "axios";
const api = axios.create({
  baseURL: process.env.REACT_APP_MAIN_API,
});

export const generatePdfApi = "https://generate-pdf-emhz.onrender.com/to-pdf";

api.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

const supportApi = axios.create({
  baseURL: process.env.REACT_APP_SUPPORT_API,
})
supportApi.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

export { api };
export {supportApi}
