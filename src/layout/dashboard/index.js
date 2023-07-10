import styled from "styled-components"
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
export default function DashboardLayout() {
  return (
    <Wrapper>
      <div className="sidebarWrapper"><Sidebar /></div>
      <Outlet />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  /* height: 100vh; */
  position: relative;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
  .sidebarWrapper{
  
    width: 25%;
    @media screen and (max-width: 600px) {
    width: 100%;

}
@media screen and (min-width: 601px)and (max-width: 1000px)  {
    width: 100%;
}
  }
`;

