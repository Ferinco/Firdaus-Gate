import React from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import Logo from "../logo";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import { useState } from "react";
import { PATH_AUTH } from "../../routes/paths";
import { PATH_DASHBOARD } from "../../routes/paths";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavigationBar className="navigation-bar">
      <div className=" first-navbar d-none d-lg-block d-xl-flex ">
        <div className="container d-flex justify-content-between px-0">
          <div className="first-navbar-div">
            <p className=" px-3">Raising Role Model and Achievers</p>
          </div>
          <div className="first-navbar-div d-flex">
            <p className="px-3 py-2">Office Hour : 09:00am - 4:00pm</p>
          </div>
        </div>
      </div>
      <div className="second-navbar">
        <div className=" container d-flex justify-content-between py-3 px-0">
          <div className=" d-flex flex-row align-center header">
            <div className="d-lg-none pl-3">
              <Icon
                icon={isOpen ? "iconamoon:sign-times" : "eva:menu-2-fill"}
                color="black"
                className="icon"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              />
            </div>
            <Logo />
          </div>
          <div className=" d-none d-lg-flex d-xl-flex  flex-row align-items-start">
            <Icon className="icon mr-1" icon="ph:phone-thin" color="blue" />
            <div className="info d-flex flex-column">
              <h6>+2349055512553</h6>
              <p>Give Us A Call</p>
            </div>
          </div>
          <div className=" d-none d-lg-flex d-xl-flex  flex-row align-items-start">
            <Icon className="icon mr-1" icon="et:envelope" color="blue" />
            <div className="info d-flex flex-column">
              <h6>firdausgateschools@gmail.com</h6>
              <p>Mail Us</p>
            </div>
          </div>
          <div className=" d-none d-lg-flex d-xl-flex  flex-row align-items-start">
            <Icon className="icon mr-1" icon="game-icons:world" color="blue" />
            <div className="info d-flex flex-column">
              <h6>6/8 Balogun Street, Off Igodo Road,</h6>
              <p>Omo-Olope Area, Magbooro, Ogun State.</p>
            </div>
          </div>
        </div>
      </div>
      <div className={`third-navbar d-flex ${isOpen ? "opened" : "closed"}`}>
        <div className="d-flex flex-row justify-content-between container py-0 px-0">
          <div className="d-flex flex-row dropdowns desktop-dropdowns d-none d-lg-flex">
            <li className="px-2">
              <Icon icon="ic:round-home" color="blue" className="home-icon" />
              <div className="logo">
                <Logo />
              </div>
            </li>
            <div className="dropdown show">
              <a
                className="nav-link"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                ABOUT
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#">
                  About Us
                </a>
                <a className="dropdown-item" href="#">
                  Our Mission
                </a>
                <a className="dropdown-item" href="#">
                  Our vision
                </a>
              </div>
            </div>

            <div className="dropdown show">
              <a
                className="nav-link"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                ADMISSION
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a className="dropdown-item" href="#">
                  Start Admssion
                </a>
                <a className="dropdown-item" href="#">
                  Continue Admission
                </a>
                <a className="dropdown-item" href="#">
                  Admssion Letter
                </a>
              </div>
            </div>

            <div className="dropdown show">
              <a
                className="nav-link"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                PORTAL
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <Link className="dropdown-item" to={PATH_AUTH.login}>
                  Student Login
                </Link>
                <Link className="dropdown-item" to={PATH_AUTH.teacher}>
                  Teacher Login
                </Link>
                <Link
                  className="dropdown-item"
                  to={PATH_DASHBOARD.student.index}
                >
                  dashboard
                </Link>
                <Link
                  className="dropdown-item"
                  to={PATH_DASHBOARD.admin.index}
                >
                  admin
                </Link>
              </div>
            </div>

            <div className="dropdown show">
              <a className="nav-link" href="#">
                GALLERY
              </a>
            </div>
            <div className="dropdown show">
              <a className="nav-link" href="#">
                NEWS
              </a>
            </div>
          </div>
          <div className="mobile-dropdown d-flex d-lg-none flex-column">
            <div>
              <a
                class="drop-btn"
                data-toggle="collapse"
                href="#multiCollapseExample2"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                About Us
              </a>
              <div
                class="collapse multi-collapse mobile-links"
                id="multiCollapseExample2"
              >
                <a className="dropdown-item mobile-link" href="#">
                  About Us
                </a>
                <a className="dropdown-item mobile-link" href="#">
                  Our Mission
                </a>
                <a className="dropdown-item mobile-link" href="#">
                  Our vision
                </a>
              </div>
            </div>
            <div>
              <a
                class="drop-btn"
                data-toggle="collapse"
                href="#admission"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                Admission
              </a>
              <div class="collapse multi-collapse mobile-links" id="admission">
                <a className="dropdown-item mobile-link" href="#">
                  Start Admssion
                </a>
                <a className="dropdown-item mobile-link" href="#">
                  Continue Admission
                </a>
                <a className="dropdown-item mobile-link" href="#">
                  Admssion Letter
                </a>
              </div>
            </div>
            <div>
              <a
                class="drop-btn"
                data-toggle="collapse"
                href="#portal"
                role="button"
                aria-expanded="false"
                aria-controls="multiCollapseExample1"
              >
                Portal
              </a>
              <div class="collapse multi-collapse mobile-links" id="portal">
                <Link
                  className="dropdown-item mobile-link"
                  to={PATH_AUTH.login}
                >
                  Student Login
                </Link>
                <Link
                  className="dropdown-item mobile-link"
                  to={PATH_AUTH.teacher}
                >
                  Teacher Login
                </Link>
              </div>
            </div>
            <div>
              <Link className="react-router-link drop-btn">Gallery</Link>
            </div>
            <div>
              <Link className="react-router-link drop-btn">News</Link>
            </div>
          </div>
          <div className="d-flex flex-row contact">
            <a> CONTACT</a>
          </div>
        </div>
        <div
          className="closing-div"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        ></div>
      </div>
    </NavigationBar>
  );
}
const NavigationBar = styled.div`
  .closing-div {
    display: none;
  }
  .react-router-link {
    text-decoration: none !important;
    color: inherit !important;
  }
  .icon {
    font-size: 40px;
    font-weight: 700 !important;
  }
  .first-navbar {
    background-color: #f5f5f5;
    align-items: center;
    justify-content: center;
    &-div {
      border-right: 1px solid gray;
      border-left: 1px solid gray;
    }
    p {
      display: flex;
      align-items: center;
      justify-self: center;
      height: 100%;
    }
  }
  .second-navbar {
    height: 100px !important;
    align-items: center;
    .container {
      align-items: center;
      height: 100px;
      .header {
        .icon {
          margin-top: 10px;
        }
        @media screen and (max-width: 600px) {
          gap: 50px !important;
        }
      }
    }
    .info {
      line-height: 0.7;
      h6 {
        font-weight: 600;
      }
    }
  }
  .third-navbar {
    align-items: center;
    justify-content: center;
    background-color: rgb(27, 26, 26);
    height: 60px;
    .container {
      display: flex;
      align-items: center;
      justify-content: center;
      border-left: 1px solid grey;
      height: 100% !important;
      .desktop-dropdowns {
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        align-items: center;
        .logo {
          display: none;
        }
        .dropdown {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 60px;
          border-left: 1px solid gray;
          display: flex;
          justify-content: center;
          .nav-link {
            padding: 0 30px !important;
            color: white !important;
            text-decoration: none;
          }
        }
        .dropdown-menu {
          margin-top: 17px;
          border-top: 3px solid blue;
          transition: linear 0.5s;
          border-radius: 0;
          background-color: #f5f5f5;
          .dropdown-item {
            &:hover {
              background-color: blue;
              color: white;
            }
          }
        }
      }
      .contact {
        display: flex;
        height: 100%;
        justify-content: center !important;
        align-items: center !important;
        padding: 0 30px !important;
        background-color: blue;
        a {
          display: flex;
          justify-content: center;
          color: white;
          text-decoration: none;
        }
      }
    }
  }

  @media screen and (max-width: 991px) {
    width: 100vw !important;
    overflow: hidden !important;
    justify-content: left !important;
    align-items: left !important;
    .closing-div {
      display: block;
      height: 100%;
      width: 30%;
    }
    .home-icon {
      display: none;
    }
    .second-navbar {
      height: 70px !important;
      position: relative !important;
      overflow: hidden !important;
      .container {
        z-index: 999;
        box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px !important;
        position: fixed !important;
        height: 70px !important;
        z-index: 999 !important;
        padding: auto !important;
        background: white;
        width: 100% !important;
        align-items: center !important;
        .header {
          padding: 0 !important;
          margin-top: 7px !important;
          gap: 30vw;
          .info {
            line-height: 0.5 !important;
          }
        }
        .icon {
          font-size: 30px;
        }
      }
    }
    .closed {
      margin-left: -1000px;
      transition: 0.3s;
    }
    .opened {
      margin-left: 0;
      transition: 0.3s;
      display: flex;
      position: fixed !important;
    }
    .third-navbar {
      width: 100%;
      align-items: start;
      justify-content: start !important;
      position: fixed !important;
      z-index: 999 !important;
      height: calc(100vh - 80px);
      background-color: rgba(0.3, 0.3, 0.3, 0.7);
      .container {
        background-color: white;
        width: 70% !important;
        display: flex;
        margin-left: -9px !important;
        justify-content: center !important;
        align-items: start !important;
        height: 100%;
        .contact {
          display: none !important;
        }
        .mobile-dropdown {
          padding-top: 50px;

          flex-direction: column !important;
          height: 50%;
          justify-content: space-between;
          width: 70%;
          align-items: start !important;
          .drop-btn {
            text-decoration: none !important;
            font-weight: 700;
            color: black;
            font-size: 19px !important;
          }
          .mobile-links {
            border-top: 1px solid blue;
            background-color: #f5f5f5;
            width: 200px;
            .mobile-link {
              padding: 7px !important;
              &:hover {
                background-color: blue;
                color: white;
              }
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 992px) and (max-width: 1200px) {
    .second-navbar {
      background-color: rgb(27, 26, 26);
      .icon {
        color: white !important;
      }
      .header {
        display: none !important;
      }
      .info {
        color: white !important;
      }
    }
    .third-navbar {
      background-color: white;
      height: 70px;
      .home-icon {
        display: none;
      }
      .container {
        .desktop-dropdowns {
          .logo {
            display: flex !important;
          }
          .dropdown {
            border-left: 1px solid gray;
            .nav-link {
              color: black !important;
            }
          }
        }
      }
    }
  }
`;
