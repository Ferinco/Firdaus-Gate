import { styled } from "styled-components";
import { useAppContext } from "../../../Context";
import { Icon } from "@iconify/react";
export default function  AdminNavbar (){
     const { setIsSidebarOpen, setIsProfileOpen, isProfileOpen } = useAppContext();
return(
    <Wrapper className="head container-fluid d-flex flex-row p-5 justify-content-between w-100">
    <div>
      
    </div>
    <div className="btns">
      <div
       className="profile-div"
        onClick={() => {
          setIsSidebarOpen
            ? setIsSidebarOpen(false)
            : setIsSidebarOpen(false);
          setIsProfileOpen((prevState) => !prevState);
        }}
      >
        <Icon icon="mdi:account-tie" className="profile-btn" color="white"/>
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
      display: flex !important;
      flex-direction: row;
      align-items:center;
      flex-direction: row;
      gap: 40px;
      .profile-div{
        padding: 5px;
        border: 1px solid black;
        border-radius: 50%;
        background-color: black;
        cursor: pointer;
      }
      .profile-btn{
        display: flex !important;
      }
      .profile-btn, .nav-btn{
        font-size: 25px;
        font-weight: 600 !important;
      }
       .nav-btn{
     display:none;
      }
    }
    @media screen and (max-width: 1100px) {
    .btns {

   .nav-btn{
    display:block !important;
        font-weight: 600 !important;
        font-size: 30px;
      }
    }
  }
 `