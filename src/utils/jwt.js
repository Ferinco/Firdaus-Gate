import jwtDecode from "jwt-decode";
import { api } from "../api/axios";
import toast from "react-hot-toast";

const isValidToken = (token) => {
  if (!token) {
    return false;
  }

  const decoded = jwtDecode(token);

  const currentTime = Date.now() / 1000;
  return decoded.exp > currentTime;
};

const handleTokenExpired = (exp) => {
  let expiredTimer;

  window.clearTimeout(expiredTimer);
  const currentTime = Date.now();
  const timeLeft = exp * 1000 - currentTime;
  console.log(timeLeft);
  expiredTimer = window.setTimeout(() => {
    console.log("expired");
toast.error("you have been logged out of your account, in to gain access to your dashboard.")
  }, timeLeft);
};

const setSession = (token) => {
  if (token) {
    localStorage.setItem("token", token);
    api.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
      "token"
    )}`;
    // This function below will handle when token is expired
    // const { exp } = jwtDecode(token);
    // handleTokenExpired(exp);
  } else {
    localStorage.removeItem("token");
    delete api.defaults.headers.common.Authorization;
  }
};

export { isValidToken, setSession, handleTokenExpired };
