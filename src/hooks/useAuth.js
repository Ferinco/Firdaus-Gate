import { createContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = createContext(AuthContext)