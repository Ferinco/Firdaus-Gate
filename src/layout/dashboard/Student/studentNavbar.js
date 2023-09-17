import { styled } from "styled-components"
import { useAppContext } from "../../../contexts/Context";
import { Icon } from "@iconify/react";
import { useAuth } from "../../../hooks/useAuth";
export default function StudentNavbar(){
    const { setIsSidebarOpen, setIsProfileOpen, isProfileOpen } = useAppContext();
    const {user} = useAuth()
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
          <div
          className={`profile flex-column align-center py-5 px-3 justify-content-between ${
            isProfileOpen ? "open" : "close"
          }`}
        >
          <div className="image">
            <Icon icon="fa-solid:graduation-cap" className="icon" />
          </div>

          <div>
            <div className="name d-flex flex-column">
              <h5>
                {user.firstName}{" "}{user.lastName}
              </h5>
              <p>{user.email}</p>
              <p>Male</p>
              <h6>{user.admissionNumber}</h6>
            </div>
            <div className="info d-flex flex-row"></div>
          </div>
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
    .profile {
      height: 400px;
      width: 270px;
      display: flex;
      align-items: center;
      border-radius: 30px;
      background-color: white;
      .image {
        height: 90px;
        width: 90px;
        border-radius: 50%;
        display: flex;
        background-color: #f5f5f5;
        justify-content: center;
        align-items: center;
        .icon {
          font-size: 50px;
          color: black;
        }
      }
      .name {
        align-items: center;
        justify-content: center;
        text-align: center;
        p {
          font-size: 17px !important;
        }
        h6 {
          color: grey;
        }
      }
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
      .profile {
      display: none !important;
    }
    .open {
      display: flex !important;
      z-index: 999;
      transition: 0.3s;
      position: absolute;
      right: 20px !important;
      top: 100px !important;
    }
    .close {
      margin-right: -1000px !important;
    }
    }
}
`