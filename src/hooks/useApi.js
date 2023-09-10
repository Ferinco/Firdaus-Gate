import { ReportContext } from "../contexts/ReportContext";
import { useContext } from "react";

export const useApi = () => useContext(ReportContext);
