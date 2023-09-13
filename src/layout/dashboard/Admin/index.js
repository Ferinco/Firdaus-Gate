import { Outlet } from "react-router-dom"
import AdminSidebar from "./sidebar"
import { styled } from "styled-components"
import AdminNavbar from "./adminNavbar"
export { default as AdminDashboard} from "./adminDashboard"
export { default as CreateTeachers} from "./createTeachers"
export { default as StudentsList} from "./studentsList"
export { default as TeacherLists} from "./teachersList"



export default function AdminDashboardLayout(){
    return(
        <Wrapper className="d-flex flex-row">
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