import React from "react";
import "../navbar.css";
import Logo from "../logo.png";

export default function Navbar() {
  return (
    <div className="navigation-bar">
      <div className="wrapper">
        <div className="multi_color_border"></div>
        <div className="top_nav">
          {/* <div class="row"> */}
          {/* <div class="col-lg-12"> */}
          {/* <div class="d-flex flex-row align-items-center"> */}
          <div class="site-branding left">
            <a class="home-link logo" rel="home">
              <img src={Logo} id="logo-img" className="img-center" alt="logo" />
            </a>
            <a href="" className="brand-name">
              Firdaus Gate <br />
              Group of Schools
            </a>
          </div>
          <div className="widget_info d-flex flex-row align-items-center justify-content-end">
            <div className="widget_icon">
              <i className="flaticon-call"></i>
            </div>
            <div className="widget_content">
              <h5 className="widget_title">+2349032494949</h5>
              <p className="widget_desc">Make A Call</p>
            </div>
          </div>
          <div className="widget_info">
            <div className="widget_icon">
              <i className="flaticon-email"></i>
            </div>
            <div className="widget_content">
              <h5 className="widget_title">enquiries@taidobcollege.org</h5>
              <p className="widget_desc">Quick Contact</p>
            </div>
          </div>
          <div className="widget_info d-flex flex-row align-items-center justify-content-end">
            <div className="widget_icon">
              <i className="flaticon-worldwide"></i>
            </div>
            <div className="widget_content">
              <h5 className="widget_title">Phase II, Asero Housing Estate,</h5>
              <p className="widget_desc">
                Asero, Abeokuta, Ogun State, Nigeria.
              </p>
            </div>
          </div>
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
        </div>
        <div className="bottom_nav">
          <nav>
            <ul className="left">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Writing</a>
              </li>
              <li>
                <a href="#">Design</a>
              </li>
              <li>
                <a href="#">Marketing</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Map</a>
              </li>
              <li>
                <a href="#">Articles</a>
              </li>
            </ul>
            <ul className="right">
              <li>
                <a href="#">Home</a>
              </li>
            </ul>
          </nav>

          {/* <nav id="menu" class="menu">
                                        <ul class="dropdown">
                                           <li class="active"><a href="index"><i class="fa fa-home"></i></a></li>

                                            <li class="has-submenu"><a href="#">About</a>
                                                <ul class="sub-menu">
                                                    <li class=""><a href="about">About Us</a></li>
                                                    <li class=""><a href="awards">Awards &amp; Laurels</a></li>
                                                    <li><a href="facilities">Facilities</a></li>
                                                    <li><a href="founder">Founder's Profile</a></li>
                                                    <li><a href="principal">Principal's Profile</a></li>
                                                    <li><a href="management">Management &amp; Staff</a></li>
                                                    <li><a href="#">Career Opportunities</a></li>
                                                    <li><a href="schoolBill.pdf">School Bill</a></li>
                                                   
                                                </ul>
                                            </li>

                                            <li class="has-submenu"><a href="#">Entrepreneurship</a>
                                                <ul class="sub-menu">
                                                    <li><a href="https://broadconcepthub.org">About Entrepreneurship</a></li>
                                                   
                                                    <li><a href="enterpreneurBill.pdf">Entrepreneurship Bill</a></li>
                                                     <li><a href="https://broadconcepthub.org/register" target="_blank">Register</a></li>
                                                   
                                                </ul>
                                            </li>
                                            <li class="has-submenu"><a href="#">Download</a>
                                                <ul class="sub-menu">
                                                    <li><a href="termlyBulletin.pdf">Termly Bulletin</a></li>
                                                   
                                                    <li><a href="academicCalender.pdf">Academic Calender</a></li>
                                                     <li><a href="https://task.taidobcollege.org/">SS3 WASSCE <br/>Preparatory Assessments</a></li>
                                                    <li><a href="college_operational_guideline.pdf">Operational Guidelines</a></li>
                                                      <li><a href="entrepreneuship-assignment">Mid Term Entrepreneuship Assignment</a></li>
                                                        <li><a href="pre-wassce-assignment">WASSCE Preparatory Assessment</a></li>
                                                            <li><a href="jamb-assignment">JAMB Preparatory Assessment</a></li>
                                                         <li><a href="SECOND TERM NEWSLETTER FINAL.pdf" download="">Newsletter</a></li>
                                                            
                                                     <li><a href="holiday-assignment">Holiday Assignment</a></li>
                                                </ul>
                                            </li>
                                             <li class="has-submenu"><a href="#">Portal</a>
                                                <ul class="sub-menu">
                                                    <li class=""><a href="https://taidobcollege.educare.school/login">Portal Login</a></li>
                                                    <li class=""><a href="https://taidobcollege.educare.school/admission-form">School fees payment<br/>(Existing Students)</a></li>
                                                    <li><a href="https://taidobcollege.educare.school/admission-form">School fees payment<br/>(New Students)</a></li>
                                                    <li><a href="https://paystack.com/pay/taidobcollege-lesson">Online Class Payment</a></li>
                                                     <li ><a href="input_reg_num.php">SUMMER 2021 CBT RESULTS</a></li>
                                                   
                                                </ul>
                                            </li>

                                             <li class="has-submenu"><a href="#">Admission</a>
                                                <ul class="sub-menu">
                                                    <li><a href="https://taidobcollege.educare.school/admission-form">Student Admission Portal</a></li>
                                                     <li><a href="https://taidobcollege.educare.school/admission-form" >Admission into JS1</a></li>
                                                    <li><a href="https://taidobcollege.educare.school/admission-form" >Admission into<br/> Mid Stream</a></li>
                                                    <li><a href="https://taidobcollege.educare.school/admission-form" >Online Admission</a></li>

                                                     <li><a href="admission-into-js1">Admission into JS1</a></li>
                                                    <li><a href="admission-into-other-classes">Admission into<br/> Mid Stream</a></li>
                                                    <li><a href="online-admission">Online Admission</a></li>
                                                    
                                                </ul>
                                            </li>
                                              <li class="has-submenu"><a href="#">Gallery</a>
                                                <ul class="sub-menu">
                                                    <li><a href="gallery">Gallery</a></li>
                                                    <li><a href="facilities">Facilities</a></li>
                                                    <li><a href="videos">Event Videos</a></li>
                                                </ul>
                                            </li>   
                                             <li><a href="news">News</a></li>
                                        </ul>
                                    </nav> */}
        </div>
      </div>
    </div>
  );
}
