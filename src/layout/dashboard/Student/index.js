import { Outlet } from "react-router-dom";
import StudentSidebar from "./sidebar";
export default function StudentDashboardLayout(){
    return(
        <div className="d-flex flex-row">
            <StudentSidebar/>
            <Outlet/>
        </div>
    )
}