import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PATH_PAGE } from "../../routes/paths";
import { PATH_DASHBOARD } from "../../routes/paths";
import { Icon } from "@iconify/react";
function Footer() {
  const Year = new Date().getFullYear();
  console.log(Year);
  return (
    <Container className="d-flex flex-column">
      <div className="first py-5 d-flex flex-column justify-content-between ">
        <div className="d-flex flex-row justify-content-between w-100 align-items-center flex-wrap">
          <div className="brief">
            <p className="header ">Firdaus Gate Model Schools</p>
            <p className="not-link">
              Establised in 1999, we have since dedicated our resources to
              raising future leaders; making them responsible, confident and be
              of good impact to the society without neglect to proper FAITH.
            </p>
          </div>
          <div className="news-link d-flex flex-row ">
            <Link className="react-router-link"> latest news &#8594;</Link>
          </div>
        </div>
        <div className="links d-flex flex-row w-100 justify-content-between mt-4 flex-wrap">
          <div className="d-flex flex-column">
            <p className="header ">Links</p>
            <Link className="react-router-link py-2">About Us</Link>
            <Link className="react-router-link py-2">Our Mission</Link>
            <Link className="react-router-link py-2">Our Vision</Link>
            <Link className="react-router-link py-2">Gallery</Link>
          </div>
          <div className="d-flex flex-column">
            <p className="header ">Admission</p>
            <Link className="react-router-link py-2" to={PATH_PAGE.jss1Admission}>Admission Into JSS1</Link>
            <Link className="react-router-link py-2" to={PATH_PAGE.admissionForm}>Admssion Portal</Link>
            <Link className="react-router-link py-2">Continue Admission</Link>
            <Link className="react-router-link py-2">Admission Letter</Link>
          </div>
          <div className="d-flex flex-column">
            <p className="header ">Portal</p>
            <Link className="react-router-link py-2" to={PATH_DASHBOARD.student.index}>Student</Link>
            <Link className="react-router-link py-2" to={PATH_DASHBOARD.teacher.index}>Teacher</Link>
            <Link className="react-router-link py-2">School Fees</Link>
          </div>
          <div className="reach ">
            <p className="header ">Reach Us</p>
            <div className="d-flex flex-row gap-1 align-items-end" >
            <Icon icon="system-uicons:location" className="icon"/>
              <p className="no-link m-0 pl-2 d-flex flex-row flex-wrap">
                6/8 Balogun Street, off Igodo Road, Omo-Olope Area, Magboro, Ogun State.
              </p>
            </div>
            <div className="mt-2">
              <Link className="react-router-link d-flex flex-row gap-1 align-items-end">
              <Icon icon="iconamoon:phone-thin" rotate={1} className="icon"/>
                <p className="no-link m-0 pl-2">
                  0905512553
                </p>
              </Link>
            </div>
            <div className="mt-2">
              <Link className="react-router-link d-flex flex-row gap-1 align-items-end">
              <Icon icon="material-symbols-light:mail-outline" className="icon" />
                <p className="m-0 pl-2 no-link">
                firdausgateschools@gmail.com
                </p>
                </Link>
            </div>
            <div className="social-media d-flex flex-row gap-2 mt-4">
                <Link className="react-router-link">
                <Icon className="social-icon" icon="ic:baseline-whatsapp" />
                </Link>
                <Link className="react-router-link">
                <Icon className="social-icon" icon="ei:sc-facebook" />
                </Link>
                <Link className="react-router-link">
                <Icon className="social-icon" icon="ri:instagram-line" />
                </Link>
                <Link className="react-router-link">
                <Icon className="social-icon" icon="prime:linkedin" />
                </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="end py-3">
        <p className="m-0">
          Copyright &#169; {Year} <b>Firdaus-Gate Model Schools</b>
        </p>
      </div>
    </Container>
  );
}
const Container = styled.div`
  background: black;
  color: white;
  .first{
  padding-right:48px ;
  padding-left:48px ;

  }
  .social-icon{
    font-size: 20px;
    color:white;
  }
  .no-link {
    font-size:16px !important;
  }
  .brief {
    p {
      max-width: 600px;
    }
  }
  .links{
@media screen and (max-width: 840px){
gap: 20px !important;
}
  }
  .header{
  font-size:20px;
  font-weight: 600;
  margin-bottom: 10px !important;
  }
  .end {
    border-top: 1px solid grey;
    text-align: center;
  }
  .react-router-link{
    font-size:16px !important;
  }
  .icon{
    font-size: 25px !important;
    color: white;
  }
  .reach{
    max-width:540px !important;
    @media screen and (max-width:982px){
      margin-top: 10px;
    }
  }
`;
export default Footer;
