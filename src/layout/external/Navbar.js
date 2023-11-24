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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 156);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <NavigationBar className="navigation-bar">
      <div className=" first-navbar d-none d-lg-block d-xl-flex ">
        <div className="div d-flex justify-content-between px-0 w-100 px-5">
          <div className="first-navbar-div">
            <p className=" px-3">Raising Role Model and Achievers</p>
          </div>
          <div className="first-navbar-div d-flex">
            <p className="px-3 py-2">Office Hour : 09:00am - 4:00pm</p>
          </div>
        </div>
      </div>
      <div className={`second-navbar`}>
        <div className=" div d-flex justify-content-between py-3 px-5">
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
          <ul>
          <li><a>about</a></li>

        <li>
            <a>admission &#9662;</a>
            <ul class="dropdown">
                <Link className="react-router-link">Student admission portal</Link>
                <Link className="react-router-link">admission into JSS1</Link>
                <Link className="react-router-link">continue admission</Link>
                <Link className="react-router-link">admission letter</Link>
            </ul>
        </li>
        <li>
            <a>portal &#9662;</a>
            <ul class="dropdown">
                <Link className="react-router-link">student portal</Link>
                <Link className="react-router-link">teacher portal</Link>
                <Link className="react-router-link">school fees payment<br/>(existing students)</Link>
                <Link className="react-router-link">school fees payment<br/>(new students)</Link>

            </ul>
        </li>
        <li><a >news</a></li>
        <li><a >contact</a></li>

    </ul>
          {/* <div className=" d-none d-lg-flex d-xl-flex  flex-row align-items-center">
            <Icon className="icon mr-2" icon="carbon:phone-filled" color="blue" />
            <div className="info d-flex flex-column">
              <h6>+2349055512553</h6>
              <p>Give Us A Call</p>
            </div>
          </div>
          <div className=" d-none d-lg-flex d-xl-flex  flex-row align-items-start">
            <Icon className="icon mr-2" icon="fa6-solid:envelope-open-text" color="blue"  />
            <div className="info d-flex flex-column">
              <h6>firdausgateschools@gmail.com</h6>
              <p>Mail Us</p>
            </div>
          </div>
          <div className=" d-none d-lg-flex d-xl-flex  flex-row align-items-start">
            <Icon className="icon mr-2" icon="game-icons:world" color="blue" />
            <div className="info d-flex flex-column">
              <h6>6/8 Balogun Street, Off Igodo Road,</h6>
              <p>Omo-Olope Area, Magbooro, Ogun State.</p>
            </div>
          </div> */}
        </div>
      </div> 
    </NavigationBar>
  );
}
const NavigationBar = styled.div`
/* display: none !important; */
  .closing-div {
    display: none;
  }
  .react-router-link {
    text-decoration: none !important;
    color: inherit !important;
    text-transform: capitalize !important;
    font-size: 14px !important;
    padding: 5px 10px !important;
    &:hover{
      background-color: blue;
      color: white !important;
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
    height: 90px !important;
    align-items: center;
    .div {
      align-items: center;
      height: 100px;
      .icon{
       font-size: 30px;
      }
      .header {
        .icon {
          margin-top: 10px;
        }
      }
    }
    .dropdown{
     border-radius: 10px;
     padding-top: 30px;
    }
    ul{
        padding: 0;
        list-style: none;
    }
    ul li{
        display: inline-block;
        position: relative;
        /* line-height: 21px; */
        text-align: left;
    }
    ul li a{
        display: block;
        padding: 8px 25px;
        text-decoration: none;
    }
    a{
      text-transform: uppercase;
      font-weight: 500;
      font-size: 15px;
    }
    ul li a:hover{
cursor: pointer;
    }
    ul li ul.dropdown{
        width: 180px; /* Set width of the dropdown */
        background: white;
        display: none;
        position: absolute;
        z-index: 999;
        left: 0;
    }
    ul li:hover ul.dropdown{
        display: block;	/* Display the dropdown */
    }
    ul li ul.dropdown li{
        display: block;
    }
  }
  .sticky{
    position: fixed !important;
    margin-top: -156px !important;
    width:100% !important;
    z-index:9999;
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
    .sticky{
    margin-top: 0 !important;
    z-index:9999;
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
