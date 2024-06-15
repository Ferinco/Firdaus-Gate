import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import Logo from "../logo";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import { useState } from "react";
import { PATH_AUTH, PATH_PAGE } from "../../routes/paths";
import { PATH_DASHBOARD } from "../../routes/paths";
import { Button } from "../../components/custom";
import { useAppContext } from "../../contexts/Context";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [closer, setCloser] = useState(false);
  const { termName } = useAppContext();

  useEffect(() => {
    Aos.init({
      // Global settings:
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      offset: 120,
      delay: 0,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  useEffect(() => {
    if (isOpen === "true") {
      const timeOut = setTimeout(() => {}, 5000);
      setCloser(true);
      return () => clearTimeout(timeOut);
    } else setCloser(false);
  }, []);

  return (
    <NavigationBar className="navigation-bar">
      <div className=" first-navbar d-flex ">
        <div className="div d-flex justify-content-between w-100 px-5">
          <div className="first-navbar-div">
            <p className=" px-3">Raising Role Model and Achievers</p>
          </div>
          <div className="first-navbar-div d-flex">
            <p className="px-3 py-2">Office Hour : 09:00am - 4:00pm</p>
          </div>
        </div>
      </div>
      <div className={`second-navbar p-0 ${isOpen ? "unsticky" : ""}`}>
        <div className=" div d-flex justify-content-between px-5 py-0 align-items-center w-100 h-100">
          <div className=" d-flex flex-row gap-3 header ">
            <div className="d-none icon-div align-items-center m-0">
              <Icon
                icon={isOpen ? "iconamoon:sign-times" : "eva:menu-2-fill"}
                color="black"
                className="icon m-0"
                onClick={() => {
                  setIsOpen((prev) => !prev);
                }}
              />
            </div>
            <div
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="100"
              data-aos-offset="0"
              data-aos-duration="500"
            >
              <Logo />
            </div>
          </div>
          <ul className="menu-links d-flex align-items-center h-100 mb-0">
            <li>
              <a className="nav-link">about <Icon icon="ic:baseline-keyboard-arrow-down" className="drop-icon" width="1.2em" height="1.2em"  style={{color: "black"}} /></a>
              <ul className="dropdown px-1 pb-1">
                <Link className="react-router-link" to={PATH_PAGE.about}>
                  about us
                </Link>
                <Link className="react-router-link">founder's profile</Link>
                <Link className="react-router-link">principal's profile</Link>
                <Link className="react-router-link">Management and staff</Link>
              </ul>{" "}
            </li>
            <li>
              <a className="nav-link">admission <Icon icon="ic:baseline-keyboard-arrow-down" className="drop-icon" width="1.2em" height="1.2em"  style={{color: "black"}} /></a>
              <ul className="dropdown px-1 pb-1">
                <Link className="react-router-link" to={PATH_PAGE.admission}>
                  Student admission portal
                </Link>
                <Link
                  className="react-router-link"
                  to={PATH_PAGE.jss1Admission}
                >
                  admission into JSS1
                </Link>
                <Link className="react-router-link" to={PATH_PAGE.continue}>
                  continue admission
                </Link>
              </ul>
            </li>
            <li>
              <a className="nav-link">portal <Icon icon="ic:baseline-keyboard-arrow-down" className="drop-icon" width="1.2em" height="1.2em"  style={{color: "black"}} /></a>
              <ul className="dropdown px-1 pb-1">
                <Link
                  className="react-router-link"
                  to={PATH_DASHBOARD.student.index}
                >
                  student portal
                </Link>
                {/* <Link
                  className="react-router-link"
                  to={PATH_DASHBOARD.teacher.index}
                >
                  staff portal
                </Link> */}
                {/* <Link className="react-router-link">
                  school fees payment
                  <br />
                  (existing students)
                </Link>
                <Link className="react-router-link">
                  school fees payment
                  <br />
                  (new students)
                </Link> */}
              </ul>
            </li>
            <li>
              <Link className="nav-link" to={PATH_PAGE.gallery}>
                gallery
              </Link>
            </li>
            <li>
              <a className="nav-link">news</a>
            </li>
            <div className="link-group px-2 nav-link d-flex align-items-center gap-2">
              {" "}
              <li>
                <a className="p-0 book-apt">Book Appointment</a>
              </li>
              <li>
                <a className="contact-btn m-0 d-flex justify-content-center align-items-center p-0">
                  <Button blue>
                    {" "}
                    <a
                      className="p-0"
                      href="#contactUs"
                      style={{ color: "white" }}
                    >
                      Contact Us
                    </a>
                  </Button>{" "}
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>

      <div className={`mobile-nav d-flex ${isOpen ? "opened" : "closed"}`}>
        <div className="links py-0 px-2">
          <div className="logo-div py-3">
            <Logo />
          </div>
          <div className="nav-links mt-5">
            <nav
              id="sidebar"
              className="col-md-3 col-lg-2 d-md-block bg-light sidebar"
            >
              <div className="position-sticky">
                {/* Section 1 */}
                <div className="accordion drop-link" id="section1">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading1">
                      <button
                        className="accordion-button"
                        // type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse1"
                        aria-expanded="true"
                      >
                        About
                      </button>
                    </h2>
                    <div
                      id="collapse1"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading1"
                      data-bs-parent="#section1"
                    >
                      <div className="accordion-body d-flex flex-column">
                        <Link className="react-router-link">
                          founder's profile
                        </Link>
                        <Link className="react-router-link">
                          principal's profile
                        </Link>
                        <Link className="react-router-link">
                          Managemnet and staff
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Section 2 */}
                <div className="accordion drop-link" id="section2">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading2">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse2"
                        aria-expanded="true"
                      >
                        Admission
                      </button>
                    </h2>
                    <div
                      id="collapse2"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading2"
                      data-bs-parent="#section2"
                    >
                      <div className="accordion-body d-flex flex-column">
                        <Link
                          className="react-router-link"
                          to={PATH_PAGE.admission}
                        >
                          Student admission portal
                        </Link>
                        <Link
                          className="react-router-link"
                          to={PATH_PAGE.jss1Admission}
                        >
                          admission into JSS1
                        </Link>
                        <Link className="react-router-link">
                          continue admission
                        </Link>
                        <Link className="react-router-link">
                          admission letter
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="accordion drop-link" id="section3">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="heading3">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse3"
                        aria-expanded="true"
                      >
                        Portal
                      </button>
                    </h2>
                    <div
                      id="collapse3"
                      className="accordion-collapse collapse"
                      aria-labelledby="heading3"
                      data-bs-parent="#section3"
                    >
                      <div className="accordion-body d-flex flex-column">
                        <Link
                          className="react-router-link"
                          to={PATH_DASHBOARD.student.index}
                        >
                          student portal
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <Link className="nav-link" to={PATH_PAGE.gallery}>
                  Gallery
                </Link>

                {/* <li>
                  <a className="nav-link">News</a>
                </li> */}
              </div>
            </nav>
          </div>
        </div>
        <div
          className={`closing-div p-3 ${
            closer ? "active-closer" : "unactive-closer"
          }`}
        >
          <div className="d-flex icon-div">
            <Icon
              icon={"iconamoon:sign-times"}
              color="black"
              className="icon"
              onClick={() => {
                setIsOpen((prev) => !prev);
              }}
            />
          </div>
        </div>
      </div>
    </NavigationBar>
  );
}
const NavigationBar = styled.div`
  position: fixed !important;
  top: 0 !important;
  top: 0 !important;
  width: 100% !important;
  z-index: 9999;
  .book-apt{
    color: blue !important;
    font-size: 13px !important;
    padding: 6px 16px !important;
    border: 10px;
    border-radius: 9px;
    &:hover{
  background-color: #eff4fb;
  transition: 0.3ms;
    }
  }
  .sidebar {
    background-color: white !important;
  }
  .closing-div {
    .icon-div {
      justify-content: right;
    }
  }
  .react-router-link {
    text-decoration: none !important;
    color: inherit !important;
    text-transform: capitalize !important;
    font-size: 14px !important;
    padding: 7px 10px !important;
    &:hover {
      background-color: blue;
      color: white !important;
      border-radius: 5px;
    }
  }
  .icon {
    font-size: 40px;
    font-weight: 700 !important;
  }
  .first-navbar {
    background-color: #f5f5f5;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    position: relative;
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
    height: 90px;
    align-items: center;
    z-index: 999;
    width: 100%;
    transition: background-color 0.5s ease, box-shadow 0.3s ease;
    transition: 0.5s !important;
    position: relative !important;
    @media screen and (max-width: 982px) {
        height: 68px !important;
      }
    .div {
      align-items: center;
      height: 90px;
      background-color: white;
      @media screen and (max-width: 982px) {
        padding-right: 12px !important;
        padding-left: 24px !important;
        height: 68px !important;
      }
      .header {
      }
      .contact-btn {
        Button {
          text-transform: capitalize !important;
          padding: 6px 16px !important;
          font-size: 13px !important;
          font-weight: 600;
        }
      }
      .icon {
        font-size: 30px;
      }
      .header {
        .icon {
          margin-top: 10px;
        }
      }
    }
    .dropdown {
      border-radius: 10px;
      padding-top: 30px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }
    ul {
      padding: 0;
      list-style: none;
    }
    ul li {
      display: inline-block;
      position: relative;
      /* line-height: 21px; */
      text-align: left;
    }
    ul li a {
      display: block;
      padding: 8px 19px;
      text-decoration: none;
    }
    .nav-link {
      text-transform: capitalize;
      font-size: 14px !important;
      font-weight: 500 !important;
    }
    ul li a:hover {
      cursor: pointer;
    }
    ul li ul.dropdown {
      width: 200px; /* Set width of the dropdown */
      background: white;
      display: none;
      position: absolute;
      z-index: 999;
      left: 0;
    }
    ul li:hover ul.dropdown {
      display: block; /* Display the dropdown */
    }
    ul li ul.dropdown li {
      display: block;
    }
  }

  .mobile-nav {
    display: none !important;
  }
  @media screen and (max-width: 1110px) {
    width: 100vw !important;
    overflow: hidden !important;
    justify-content: left !important;
    align-items: left !important;
    .second-navbar {
      position: fixed;
      /* z-index: 9999 !important; */
      background-color: white !important;
    }
    .sticky {
      margin-top: 0px !important;
      background: white;
    }
    .closing-div {
      display: block;
      height: 100%;
      width: 30%;
      backdrop-filter: blur(3px);
    }
    .home-icon {
      display: none;
    }
    .nav-links {
      margin-top: 120px !important;
    }
    .mobile-nav {
      width: 100%;
      z-index: 999;
      position: fixed;
      justify-content: start;
      height: 100vh;
      display: flex !important;
      background-color: rgba(0, 0, 0, 0.1);
      .logo-div {
        position: fixed !important;
        z-index: 99;
        background-color: white !important;
        width: 65%;
      }
      .links {
        background: white !important;
        width: 70%;
        overflow-y: auto !important;
        a {
          padding: 16px 20px;
        }
      }
    }
    .drop-link {
      border-bottom: 1px solid #f1f1f1;
      background-color: white !important;

      button,
      .accordion-header {
        background: transparent !important;
        border: 0 !important;
        &:hover {
          outline: 0 !important;
          border: 0 !important;
        }
      }
      .accordion-item {
        border: 0 !important;
        background-color: white !important;
      }
    }
    .closed {
      margin-left: -2000px !important;
      transition: 0.3s;
      /* display:none; */
    }
    .opened {
      margin-left: 0 !important;
      transition: 0.3s;
      display: flex !important;
      position: fixed !important;
      /* overflow-y: auto !important; */
    }
    .unsticky {
      display: none !important;
    }
    .icon-div {
      margin-left: -12px !important;
    }
    .react-router-link {
      &:hover {
        background-color: white;
        color: blue !important;
      }
    }
  }
  @media screen and (min-width: 992px) and (max-width: 1200px) {
  }
  @media screen and (max-width: 1110px) {
    .first-navbar,
    .middle-nav {
      display: none !important;
    }
    .menu-links {
      display: none !important;
    }
    .icon-div {
      display: flex !important;
    }
  }
`;
