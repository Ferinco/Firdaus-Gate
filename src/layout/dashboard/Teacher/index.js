import { Outlet } from "react-router-dom";
import React from "react";
import TeacherSidebar from "./sidebar";
import styled from "styled-components"

export default function TeacherDashboardLayout(){
    return(
        <div className="d-flex flex-row">
        <TeacherSidebar />
        <div style={{ marginLeft: '260px'}}>
        <Outlet />
      </div>

      
      </div>
    )
}
// const Wrapper = styled.div`
// position:relative;`

