




import { Outlet } from "react-router-dom";
import FeesSidebar from "./sidebar";
import styled from "styled-components";

export default function SchoolFeesLayout(){
    return(
        <Container>
        <FeesSidebar />
        <div className="outlet p-0">
          <Outlet />
        </div>
      </Container>
    );
  }
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    .outlet {
      width: 75% !important;
      height: 100vh;
      padding: 0 !important;
    }
    @media screen and (max-width: 1100px) {
      flex-direction: column !important;
      .outlet {
        width: 100% !important;
        margin-top: 220px;
      }
    }`
