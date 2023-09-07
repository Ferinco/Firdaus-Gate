import AdminSidebar from "./sidebar"
import { styled } from "styled-components"
import AdminNavbar from "./adminNavbar"
import { Outlet } from "react-router-dom"
export default function AdminDashboardLayout(){
    return(
        <Wrapper>
            <AdminSidebar/>
            <div style={{backgroundColor: "#f1f1f1", height: "100%"}} className="outlet">
       <AdminNavbar/>
        <Outlet />
      </div>

      
      </Wrapper>
    )
}
const Wrapper = styled.div`
position:relative;
.outlet{
    width:80%;
}
@media screen and (max-width: 1100px){
    .outlet{
        width:100% !important;
    }
}`