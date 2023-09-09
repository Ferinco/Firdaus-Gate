import jwtDecode from "jwt-decode";
import { verify, sign } from "jsonwebtoken";
import { api } from "../api/axios";

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
    // You can do what ever you want here, like show a notification
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

export { isValidToken, setSession, verify, sign, handleTokenExpired };
