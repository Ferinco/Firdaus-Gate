
import React from "react";
import { Icon } from '@iconify/react';
import styled from 'styled-components'
import Logo from "../logo";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap';
import {useState} from 'react'


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <NavigationBar className="navigation-bar">
      <div className=" first-navbar d-none d-lg-block d-xl-flex ">
      <div className="container d-flex justify-content-between px-0">
          <div className="first-navbar-div"><p className=" px-3">Raising Role Model and Achievers</p></div>
          <div className="first-navbar-div d-flex">
            <p className="px-3 py-2">Office Hour : 09:00am - 4:00pm</p>
          </div>
        </div>
      </div>
       <div className="second-navbar">
       <div className=" container d-flex justify-content-between py-3 px-0">
       <div className="d-lg-none">
 <Icon icon={isOpen? "iconoir:cancel" : 'eva:menu-2-fill'} color="black" className="icon"
 onClick={()=>{
  setIsOpen(!isOpen)
 }}/>
 </div>
          <div className=" d-flex flex-row align-items-start header">
          <Logo/>
          <div className="info d-flex flex-column ml-2"><h6>FIRDAUS GATE</h6><h6>MODEL SCHOOLS</h6></div>
          </div>
          <div className=" d-none d-lg-flex d-xl-flex  flex-row align-items-start">
          <Icon className="icon mr-2" icon="ph:phone-thin" color="blue" />
          <div className="info d-flex flex-column"><h6>+2349065363554</h6><p>Make A Call</p></div>
          </div>
          <div className=" d-none d-lg-flex d-xl-flex  flex-row align-items-start">
          <Icon className="icon mr-2" icon="et:envelope" color="blue" />
          <div className="info d-flex flex-column"><h6>firdausgate@gmail.com</h6><p>Mail Us</p></div>
          </div>
          <div className=" d-none d-lg-flex d-xl-flex  flex-row align-items-start">
          <Icon className="icon mr-2" icon="game-icons:world" color="blue" />
          <div className="info d-flex flex-column"><h6>Phase II, Asero Housing Estate,</h6><p>Asero, Abeokuta, Ogun State, Nigeria.</p></div>
          </div>
        </div>
       </div>
      <div className={`third-navbar d-flex ${isOpen ? 'opened' : 'closed'}`}>
  <div className="d-flex flex-row justify-content-between container py-0 px-0">

  <div className="d-flex flex-row dropdowns">
    <li className="px-2"><Icon icon="ic:round-home" color="blue" /></li>
            <li className="nav-item dropdown">
              <Dropdown>
                <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                 <Link to =''> about us</Link>
                </Dropdown.Toggle>

              </Dropdown>
            </li>
            <li className="nav-item dropdown">
              <Dropdown>
                <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                  portal
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Student portal</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">teacher portal</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item dropdown">
              <Dropdown>
                <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                 admission
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Submenu 1</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Submenu 2</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Submenu 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="nav-item dropdown">
            <Dropdown>
                <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                 <Link to =''> gallery</Link>
                </Dropdown.Toggle>

              </Dropdown>
            </li>
            <li className="nav-item dropdown">
            <Dropdown>
                <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                 <Link to =''> news</Link>
                </Dropdown.Toggle>

              </Dropdown>
            </li>
          </div>
         <a className="d-flex flex-row button">
            CONTACT
         </a>
         
  </div>
      </div>
        {/* <span class="d-block p-2 bg-dark text-white">d-block</span> */}
      </NavigationBar>

  );
}
const NavigationBar = styled.div `
.icon{
  font-size:45px;
}
.first-navbar{
  background-color: #f5f5f5;
  align-items:center;
  justify-content: center;
&-div{
  border-right: 1px solid gray;
  border-left: 1px solid gray;
}
  p{
    display:flex;
  align-items:center;
    justify-self: center;
   height:100%;
   
  }
}
.second-navbar{
  height: 100px !important;

 .info{
  line-height:0.7;
  h6{
    font-weight: 600;
  }
 }
}
.third-navbar{
  align-items:center;
  justify-content: center;
  background-color: rgb(27, 26, 26);
  .container{
    display:flex;
    align-items:center;
  justify-content: center;
  border-left: 1px solid grey;
  .dropdowns{
    display:flex;
    align-items:center;
  justify-content: center;
  list-style: none;
  align-items: center;
  .dropdown{
    display:flex;
    align-items:center;
  justify-content: center;
  height:60px !important;
  #dropdown-basic{
    border-left: 1px solid grey;
    text-transform: uppercase !important;
    color:white !important;
    height:60px;
    border-radius: 0 !important;
  }
  }
  }
  .button{
height: 100%;
padding: 17px;
background-color: blue;
color:white;
  }
  }
}
.dropdown-toggle::after {
  display: none !important;
}
.dropdown-toggle:focus {
  outline: none;
  box-shadow: none;
}
@media screen and (max-width  : 900px){
 width:100vw !important;
 overflow: hidden !important;
 justify-content: left !important;
 align-items: left !important;
 .second-navbar{
  height: 70px !important;
  position: relative !important;
  .container{
    position: fixed !important;
    height:70px !important;
    z-index:999 !important;
    width: 65%;
    align-items: center !important;
    .header{
     padding:0 !important;
     margin-top: 7px !important;
     .info{
      line-height: 0.5 !important;
     }
    }
    .icon{
      font-size: 30px;
    }
 
  }
 }
 .closed{
  margin-left: -1000px;
  transition: 0.3s;

 }
 .opened{
  margin-left: 0;
  transition:0.3s;
  display: flex;
 }
 .third-navbar{
  width:100%;
  align-items:left;
  justify-content:left;
  position: absolute !important;
  z-index:999 !important;
  background-color: white;
  height: calc(100vh - 70px);
  .container{
    width: 100% !important;
    display: flex;
   
    justify-content: left !important;
    align-items: start !important;
    height: 100%;
    .button{
      display: none !important;
    }
    .dropdowns{
      padding-top:30px;
      flex-direction: column !important;
      height: 70%;
      justify-content: space-between;
      width: 70%;
      align-items: start !important;
     
      .dropdown{

  #dropdown-basic{
    border-left: none;
    text-transform: uppercase !important;
    color:black !important;
    height:60px;
    border-radius: 0 !important;
  }
  }
    }
  }
 }
}
`
