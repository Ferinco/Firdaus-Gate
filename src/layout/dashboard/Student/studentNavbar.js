import { styled } from "styled-components"
import { useAppContext } from "../../../contexts/Context";
import { Icon } from "@iconify/react";
export default function StudentNavbar(){
    const { setIsSidebarOpen, setIsProfileOpen, isProfileOpen } = useAppContext();
    return(
        <Wrapper className="head container-fluid d-flex flex-row p-5 justify-content-between w-100">
        <div>
          
        </div>
        <div className="btns">
          <div
            className="profile-btn"
            onClick={() => {
              setIsSidebarOpen
                ? setIsSidebarOpen(false)
                : setIsSidebarOpen(false);
              setIsProfileOpen((prevState) => !prevState);
            }}
          >
            <Icon icon="ph:student" />
          </div>
          <div
            onClick={() => {
              setIsSidebarOpen((prevState) => !prevState);
              setIsProfileOpen(false);
            }}
          >
            <Icon icon="ri:menu-3-fill" className="nav-btn" />
          </div>
        </div>
      </Wrapper>
    )
}
const Wrapper = styled.div`
    align-items: center;
    background-color: white;
    height: 80px;
    .btns {
      display: none;
    }
    @media screen and (max-width: 1100px) {
    .btns {
      display: flex !important;
      flex-direction: row;
      align-items:center;
      flex-direction: row;
      gap: 40px;
      .profile-btn, .nav-btn{
        font-weight: 600 !important;
        font-size: 30px;
      }
    }
}
`