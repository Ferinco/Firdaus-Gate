import { styled } from "styled-components";
import { useAppContext } from "../../../contexts/Context";
import { Icon } from "@iconify/react";
import { useAuth } from "../../../hooks/useAuth";
export default function TeacherNavbar() {
  const { setIsSidebarOpen, setIsProfileOpen, isProfileOpen } = useAppContext();
  const {user} = useAuth()
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
          className={`profile flex-column align-center py-5 px-3 justify-content-between ${
            isProfileOpen ? "open" : "close"
          }`}
        >
          <div className="image">
            <Icon icon="icon-park-solid:necktie" className="icon" />
          </div>
          <div className="name d-flex flex-column">
            <h5>{user.firstName}{" "}{user.lastName}</h5>
            <p>{user.email}</p>
            <p>Male</p>
            <p>{user.role}</p>
            <h6>{user.teacherId}</h6>
          </div>
          <div className="info d-flex flex-row"></div>
          <div className="number d-flex flex-row">
            <h5>JSS2</h5>
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
    gap: 40px;
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
    height: 400px;
    width: 300px;
    display: none;
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
