import styled from "styled-components"
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
// import Navbar from "./layout/navbar"
export default function DashboardLayout() {
  return (
    <Wrapper>
        {/* <Navbar/> */}
      <Sidebar />
      <Outlet />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: row !important;
  /* height: 100vh; */
  position: relative;
  justify-content: space-between !important;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
  /* .sidebarWrapper{ */
  
    /* width: 25%; */
    /* @media screen and (max-width: 600px) {
    display: none;

}
@media screen and (min-width: 601px)and (max-width: 1000px)  {
    width: 100%;
}
  } */
`;

