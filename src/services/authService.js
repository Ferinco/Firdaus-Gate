import { api } from "../api/axios";

export const loginAuth = async ({admissionNumber, password}) => {
  const { data } = await api.post("/auth/login", {
    admissionNumber,
    password,
  });
  const token = data.token;
  if (token) {
    localStorage.setItem("token", data.token);
  }
  return data;
};
export const registerAuth = async (
 { firstName,
  lastName,
  middleName,
  admissionNumber,
  password,
  email}
) => {
  const { data } = await api.post("/auth/register", {
    firstName,
    lastName,
    middleName,
    admissionNumber,
    password,
    email,
  });
  return data;
};
