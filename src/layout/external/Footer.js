import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PATH_PAGE } from "../../routes/paths";
import { PATH_DASHBOARD } from "../../routes/paths";
import { Icon } from "@iconify/react";
function Footer() {
  const Year = new Date().getFullYear();
  return (
    <Container className="d-flex flex-column">
      <div className="first  py-5 d-flex flex-column justify-content-between ">
        <div className="d-flex flex-row justify-content-between w-100 align-items-center flex-wrap">
          <div className="brief">
            <p className="header ">Firdaus Gate Model Schools</p>
            <p className="not-link ">
              Establised in 1999, we have since dedicated our resources to
              raising future leaders; making them responsible, confident and be
              of good impact to the society without neglect to proper FAITH.
            </p>
          </div>
          <div className="news-link d-flex flex-row align-items-center gap-2">
            <Link className="news-link m-0"> latest news</Link>{" "}
            <Icon
              icon="uiw:right-circle-o"
              style={{ color: "white" }}
              className="small-icon"
            />
          </div>
        </div>
        <div className="links d-flex flex-row w-100 justify-content-between mt-4 flex-wrap">
          <div className="d-flex flex-column">
            <p className="header ">About</p>
            <Link className="react-router-link py-1" to={PATH_PAGE.about}>
              About Us
            </Link>
            <Link className="react-router-link py-1" to={PATH_PAGE.about}>
              Our Mission
            </Link>
            <Link className="react-router-link py-1" to={PATH_PAGE.about}>
              Our Vision
            </Link>
            <Link className="react-router-link py-1" to={PATH_PAGE.about}>
              Founder's Profile
            </Link>
            <Link className="react-router-link py-1" to={PATH_PAGE.about}>
              Management and Staff
            </Link>
          </div>
          <div className="d-flex flex-column">
            <p className="header ">Links</p>
            <Link className="react-router-link py-1" to={PATH_PAGE.about}>
              Gallery
            </Link>
            <Link className="react-router-link py-1" to={PATH_PAGE.about}>
              News
            </Link>
            <Link className="react-router-link py-1" to={PATH_PAGE.about}>
              School Bill
            </Link>
          </div>
          <div className="d-flex flex-column">
            <p className="header ">Admission</p>
            <Link
              className="react-router-link py-1"
              to={PATH_PAGE.jss1Admission}
            >
              Admission Into JSS1
            </Link>
            <Link
              className="react-router-link py-1"
              to={PATH_PAGE.admissionForm}
            >
              Student Admission Portal
            </Link>
            <Link className="react-router-link py-1" to={PATH_PAGE.continue}>
              Continue Admission
            </Link>
          </div>
          <div className="d-flex flex-column">
            <p className="header ">Portal</p>
            <Link
              className="react-router-link py-1"
              to={PATH_DASHBOARD.student.index}
            >
              Student Portal Login
            </Link>
            <Link
              className="react-router-link py-1"
              to={PATH_DASHBOARD.teacher.index}
            >
              Staff Portal Login
            </Link>
            <Link
              className="react-router-link py-1"
              to={PATH_DASHBOARD.student.results}
            >
              Check Results
            </Link>
            <Link className="react-router-link py-1">School Fees Portal</Link>
          </div>
          <div className="reach ">
            <p className="header ">Reach Us</p>
            <div className="d-flex flex-column gap-2">
              <div className="d-flex flex-row gap-2 align-items-center">
                <div>
                  <Icon icon="system-uicons:location" className="icon" />
                </div>
                <p className="m-0 text-muted grey">
                  6/8 Balogun Street, off Igodo Road,
                  <br /> Omo-Olope Area, Magboro, Ogun State.
                </p>
              </div>

              <div className="">
                <p className=" d-flex flex-row gap-2 align-items-end m-0">
                  <Icon
                    icon="iconamoon:phone-thin"
                    rotate={1}
                    className="icon"
                  />
                  <a
                    className="m-0 react-router-link"
                    href="tel:+2349055512553"
                  >
                    09055512553
                  </a>
                </p>
              </div>
              <div className="">
                <p className="k d-flex flex-row gap-2 align-items-end m-0">
                  <Icon
                    icon="material-symbols-light:mail-outline"
                    className="icon"
                  />
                  <a
                    className="m-0  react-router-link"
                    href="mailto:firdausgateschools@gmail.com"
                  >
                    firdausgateschools@gmail.com
                  </a>
                </p>
              </div>
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
  /* background: rgb(6, 6, 6); */
  background: linear-gradient(to right, rgba(0, 0, 0, 0.98), rgba(0, 0, 0, 1));
  color: white;
  .header {
    font-weight: 300 !important;
  }
  p {
    font-size: 15px;
  }
  .first {
    padding-right: 48px;
    padding-left: 48px;
  }
  .social-icon {
    font-size: 20px;
    color: white;
  }
  .no-link {
    font-size: 16px !important;
  }
  .brief {
    p {
      max-width: 600px;
    }
  }
  .links {
    @media screen and (max-width: 840px) {
      gap: 20px !important;
    }
  }
  .end {
    border-top: 1px solid grey;
    text-align: center;
    background-color: black !important;
  }
  .react-router-link {
    font-size: 15px;
    &:hover {
      color: white !important;
      transition: 0.3s;
    }
  }
  .icon {
    font-size: 25px !important;
    color: white;
  }
  .reach {
    max-width: 540px !important;
    @media screen and (max-width: 982px) {
      margin-top: 10px;
    }
  }
  .react-router-link {
    color: #a3a3a3 !important;
  }
  .grey {
    color: #a3a3a3 !important;
    line-height: 1.3;
  }
  .news-link {
    text-decoration: none !important;
    color: white;
    font-weight: 300 !important;
    font-size: 14px;
    &:hover{
      transition: 0.5s;
      color: blue !important;
      .small-icon{
        color: blue !important;
      }
    }
  }
  .header {
    font-size: 17px;
    font-weight: 400 !important;
    margin-bottom: 10px !important;
  }
`;
export default Footer;
