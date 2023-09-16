import { api } from "../api/axios";
import { useAppContext } from "../contexts/Context";
import { useNavigate } from "react-router-dom";
import { PATH_PAGE } from "../routes/paths";

export const loginAuth = async (values) => {
  const { data } = await api.post("/auth/login", { ...values });
  const token = data.token;
  if (token) {
    localStorage.setItem("user", JSON.stringify(data));
  }
  return data;
};

export const registerAuth = async ({
  firstName,
  lastName,
  middleName,
  admissionNumber,
  password,
  email,
  role,
}) => {
  const { data } = await api.post("/auth/register", {
    firstName,
    lastName,
    middleName,
    admissionNumber,
    password,
    email,
    role,
  });
  return data;
};
