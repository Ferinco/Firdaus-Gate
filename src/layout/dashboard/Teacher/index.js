import { Outlet } from "react-router-dom";
import React from "react";
import TeacherSidebar from "./sidebar";

export default function TeacherDashboardLayout(){
    return(
        <div className="d-flex flex-row">
        <TeacherSidebar />
        <Outlet />
      
      </div>
    )
}

