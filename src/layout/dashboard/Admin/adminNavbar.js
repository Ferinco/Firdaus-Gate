import { styled } from "styled-components";
import { useAppContext } from "../../../contexts/Context";
import { Icon } from "@iconify/react";
import { useAuth } from "../../../hooks/useAuth";
export default function AdminNavbar() {
  const { setIsSidebarOpen, setIsProfileOpen, isProfileOpen, isSidebarOpen } = useAppContext();
  const { user } = useAuth();
  const firstLetter = user.firstName.charAt(0);
  console.log(firstLetter)
  return (
    <Wrapper className="head container-fluid d-flex flex-column justify-content-center">
      <div className="btns d-flex flex-row justify-content-between w-100 align-items-center">
      <div
          onClick={() => {
            setIsSidebarOpen((prevState) => !prevState);
            setIsProfileOpen(false);
          }}
          className={ isSidebarOpen? "animate-bar" : ""}
        >
          <Icon icon="ri:menu-3-fill" className="nav-btn" />
        </div>
        <div
          className={`profile-div d-flex flex-row justify-content-center align-items-center p-2 ${isProfileOpen ? "animate-profile" : ""}`}
          onClick={() => {
            setIsSidebarOpen
              ? setIsSidebarOpen(false)
              : setIsSidebarOpen(false);
            setIsProfileOpen((prevState) => !prevState);
          }}
        >
          <div className="circle-profile d-flex justify-content-center align-items-center text-align-center"><p className="m-0">{firstLetter}</p></div>
          <div className={`d-flex flex-column profile-text mb-1`}>
            <h6>{user.firstName}&nbsp;{user.lastName}</h6>
            <p className="mb-0">{user.email}</p>
            </div>
          {/* <Icon icon="mdi:account-tie" className="profile-btn" color="white" /> */}
        </div>
        <div
          className={`profile flex-column align-center justify-content-between align-items-start py-3 ${
            isProfileOpen ? "open" : "close"
          }`}
        >
           {/* <div className="image">
            <Icon icon="fa-solid:user-tie" className="icon" colr="blue" />
          </div> */}
          <div className="name p-0 w-100">
<p className="mb-0 px-3">{user.firstName}{" "}{user.lastName}</p>
<p className="mb-0 px-3 text-muted">{user.email}</p>

          </div>
          {/* <div className="div p-0 w-100">
            <p className="mb-0 px-3 text-transform-capitalize">{user.role}</p>
          </div> */}
          </div>
       
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  align-items: center;
  background-color: white;
height: 80px !important;
position: fixed;
width: calc(100vw - 280px);
z-index:999 !important;
    padding-left: 32px;
    padding-right: 32px;
  .btns {
    .profile-div {
      cursor: pointer;
      border-radius: 10px;
      gap: 7px;
      transition:all ease-in-out 0.4s;
      &:hover{
        background-color: #f1f1f1;
      }
  
    }
    .circle-profile{
    height:32px ;
    width: 32px;
    border-radius: 50%;
    background-color: black;
    p{
      color: white;
      font-weight: 600;
      text-transform: capitalize;
    }
    }
    .profile-text{
      line-height: 0.2;
      h6{
        font-size: 14px;
        text-transform: capitalize;
      }
      p{
font-size: 12px;
font-weight: 500 !important;
      }
    }
    .profile-btn {
      display: flex !important;
    }
    .profile-btn,
    .nav-btn {
      font-size: 25px;
    }
    .nav-btn {
      display: none;
    }
  }
  .profile {
    height: 200px;
    width: 200px;
    display: none;
    border-radius: 20px;
    background-color: white;
    overflow: hidden;
    color: black;
    transition:all ease-in-out 0.4s;
    opacity: 0.1 !important;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    .image {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      display: flex;
      background-color: #f5f5f5;
      justify-content: center;
      align-items: center;
      .icon {
        font-size: 30px;
        color: black;
      }
    }
.name, .div{
  border-bottom: 1px solid #f1f1f1;
  p{
    font-size: 14px;
  }
}
.div{
p{
  text-transform: capitalize !important;
}
  }
}
  .open {
    display: flex !important;
    z-index: 999;
    transition: 0.3s;
    position: absolute;
    right: 32px !important;
    top: 80px !important;
    transition:all ease-in-out 0.4s;
    opacity: 1 !important;
    @media screen and (max-width: 1100px) {
right:24px !important;
  }

  }
  .close {
    transition:all ease-in-out 0.4s;
    opacity: 0.1 !important;

  }
  .animate-profile{
    margin-right: -0.3px !important;
    transition: 0.3s;
    .profile-text{
      display:none !important;
    }
  }
  .animate-bar{
    margin-left: 250px !important;
    transition: 0.3s;

  }

  @media screen and (max-width:500px){
    .animate-bar{
margin-left: 0 !important;
    }
    }
    @media screen and (max-width: 1100px) {
    width: 100%;
    padding-left: 24px !important;
    padding-right: 24px !important;
    .btns {
      .nav-btn {
        display: block !important;
        font-weight: 600 !important;
        font-size: 30px;
      }
    }
  }
`;
