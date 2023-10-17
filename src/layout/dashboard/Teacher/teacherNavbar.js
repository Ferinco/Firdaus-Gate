import { styled } from "styled-components";
import { useAppContext } from "../../../contexts/Context";
import { Icon } from "@iconify/react";
import { useAuth } from "../../../hooks/useAuth";
export default function TeacherNavbar() {
  const { setIsSidebarOpen, setIsProfileOpen, isProfileOpen } = useAppContext();
  const { user } = useAuth();
  return (
    <Wrapper className="head container-fluid d-flex flex-row p-5 justify-content-between w-100">
      <div></div>
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
          <Icon icon="mdi:account-tie" className="profile-btn" color="white" />
        </div>
        <div
          className={`profile flex-column align-center py-3 justify-content-between mr-4 ${
            isProfileOpen ? "open" : "close"
          }`}
        >
          <div className="div d-flex flex-column justify-content-center align-items-center">
            <div className="image">
              <Icon icon="icon-park-solid:necktie" className="icon" />
            </div>

            <h5>
              {user.firstName} {user.lastName}
            </h5>
            <p className="email">{user.email}</p>
            <div className="row ">
            <span className="col-6">{user.role}</span>
            <p className="col-6">{user.gender}</p>
            </div>
            <div className="d-flex flex-row align-items-baseline gap-1"><span>ID: </span><h6>{user.teacherId}</h6></div>
            <div className="d-flex subject flex-row align-items-baseline gap-1"><span>Subject Handled: </span><h6>{user.subjectTaught}</h6></div>
          </div>
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
  );
}
const Wrapper = styled.div`
  align-items: center;
  background-color: white;
  height: 80px;
  .btns {
    display: flex !important;
    flex-direction: row;
    align-items: center;
    flex-direction: row;
    gap: 20px;
    .profile-div {
      padding: 5px;
      border: 1px solid black;
      border-radius: 50%;
      background-color: black;
      cursor: pointer;
    }
    .profile-btn {
      display: flex !important;
    }
    .profile-btn,
    .nav-btn {
      font-size: 25px;
      font-weight: 600 !important;
    }
    .nav-btn {
      display: none;
    }
  }
  .profile {
    height: auto;
    width: 270px;
    display: none;
    align-items: center;
    border-radius: 30px;
    background-color: white;
    overflow-x: hidden;
    color: grey;
    .div{
      width: 90%;
      margin: auto;
     p{
      display: inline-block;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 600;
  text-transform: capitalize;
     }
     span{
  font-weight: 600;
  text-transform: capitalize;
     }
     .email{
      text-transform: lowercase !important;
     }
     .subject{
      span{
        text-overflow: ellipsis;
      }
     }
    }
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
  @media screen and (max-width: 1100px) {
    .btns {
      .nav-btn {
        display: block !important;
        font-weight: 600 !important;
        font-size: 30px;
      }
    }
  }
`;
