
import "../navbar.css";
import React from "react";
import "../navbar.css";
import { Icon } from '@iconify/react';


export default function Navbar() {
  return (
    <div className="navigation-bar">
      <div className="wrapper">
        {/* <div className="not-nav">
          <div className="content">
            <div className="header">
              <p>Building the Future with Knowledge and Faith</p>
            </div>
            <div className="body">
              <div className="time"><p>Offce Hour: 8:00am - 4:00pm</p></div>
              <button>Book Appointment</button>
            </div>
          </div>
        </div> */}
        <div className="top_nav">
          <div className="site-branding left">
            <a className="home-link logo" rel="home">
              <img src="./images/Firdaus_logo.png" id="logo-img" className="img-center" alt="logo" />
            </a>
            <a href="" className="brand-name">
              Firdaus-Gate <br />
              Group of Schools
            </a>
          </div>
          <div className="widget_info d-flex flex-row align-items-center justify-content-end">
            <div className="widget_icon">
            <Icon className="icon" icon="fluent:call-16-regular" />
            </div>
            <div className="widget_content">
              <h5 className="widget_title">+2345334353647</h5>
              <p className="widget_desc">Make A Call</p>
            </div>
          </div>
          <div className="widget_info d-flex flex-row align-items-center justify-content-end">
            <div className="widget_icon">
            <Icon className="icon" icon="iconamoon:email-thin" />
            </div>
            <div className="widget_content">
              <h5 class="widget_title">enquiries@firdaus-gate.org</h5>
              <p class="widget_desc">Quick Contact</p>
            </div>
          </div>
          <div className="widget_info d-flex flex-row align-items-center justify-content-end">
            <div className="widget_icon">
            <Icon className="icon" icon="game-icons:world" color="blue" />
            </div>
            <div class="widget_content">
              <h5 class="widget_title">6/8 Balogun Street, off Igodo Road,</h5>
              <p class="widget_desc">Magboro, Omo-Olope Area, Ogun State, Nigeria.</p>
            </div>
          </div>
          </div>
   
       
        <div className="bottom_nav">
          <nav>
            <ul className="left">
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
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
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

                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
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

                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    Portal Login
                  </a>
                  <a className="dropdown-item" href="#">
                    School Fees Payment <br />
                    (New Students)
                  </a>
                  <a className="dropdown-item" href="#">
                    School Fees Payment <br />
                    (Existing Students)
                  </a>
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
            </ul>
            <ul className="right">
              <li className="nav-contact">
                <a href="#">CONTACT</a>
              </li>
            </ul>
          </nav>
        </div>
        </div>
      </div>
  );
}
