import {api} from "../api/axios";

export const loginAuth = async (admissionNumber, password) => {
  const {data} = await api.post("/auth/login", {
    admissionNumber,
    password,
  });
  const token = data.token
  if (token){
    localStorage.setItem("token", data.token)
  }
  return data
};
//  export const registerAuth = async (data) =>{
//     const {data} = await api.post("/auth/register", data)
//  }

