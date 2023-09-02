import styled from "styled-components"
// import Sidebar from "../layout/dashboard/sidebar"
import Menubar from "../layout/dashboard/menubar";
export default function Dashboard(){
    return(
        <DASHBOARD>
            {/* <Sidebar/> */}
            <Menubar/>
        </DASHBOARD>
    )
}
const DASHBOARD = styled.div`
display: flex;
flex-direction: row;
height:100vh;
@media screen and (max-width: 1000px) {
    flex-direction: column;
}
`