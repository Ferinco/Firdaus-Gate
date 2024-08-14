import { Link } from "react-router-dom";
import { PATH_DASHBOARD, PATH_PAGE } from "../../../routes/paths";
import styled from "styled-components";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "../../../components/custom";

export default function NavLinks() {
  const Links = [
    {
      mainLink: "About",
      sublinks: [
        {
          title: "about us",
          to: PATH_PAGE.about,
        },
        {
          title: "founder's profile",
          to: PATH_PAGE.about,
        },
        {
          title: "principal's profile",
          to: PATH_PAGE.about,
        },
        {
          title: "management and staff",
          to: PATH_PAGE.about,
        },
      ],
    },
    {
      mainLink: "Admission",
      sublinks: [
        {
          title: "student admission portal",
          to: PATH_PAGE.admission,
        },
        {
          title: "entrance examination",
          to: PATH_PAGE.jss1Admission,
        },
        {
          title: "continue admission",
          to: PATH_PAGE.continue,
        },
      ],
    },
    {
      mainLink: "Portal",
      sublinks: [
        {
          title: "student portal",
          to: PATH_DASHBOARD.student.index,
        },
      ],
    },
  ];
  return (
    <Div className="menu-links d-flex align-items-center h-100 mb-0">
      {Links.map((navlink, index) => (
        <li key={index}>
          <a className="nav-link">
            {navlink.mainLink}
            <Icon
              icon="ic:baseline-keyboard-arrow-down"
              className="drop-icon"
              width="1.2em"
              height="1.2em"
              style={{ color: "black" }}
            />
          </a>
          <ul className="dropdown px-1 pb-1">
            {navlink.sublinks.map((sublink, index) => (
              <Link className="react-router-link" to={sublink.to} key={index}>
                {sublink.title}
              </Link>
            ))}
          </ul>
        </li>
      ))}
      <li>
        <Link className="nav-link" to={PATH_PAGE.gallery}>
          gallery
        </Link>
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
              <a className="p-0" href="#contactUs" style={{ color: "white" }}>
                Contact Us
              </a>
            </Button>{" "}
          </a>
        </li>
      </div>
    </Div>
  );
}

const Div = styled.ul`
  padding: 0;
  list-style: none;
  li {
    display: inline-block;
    position: relative;
    text-align: left;
    a {
      display: block;
      padding: 8px 19px;
      text-decoration: none;
      text-transform: capitalize;
      font-size: 14px !important;
      font-weight: 500 !important;
      &:hover {
        cursor: pointer;
      }
    }

    .dropdown {
      padding: 0;
      list-style: none;
      border-radius: 10px;
      padding-top: 30px;
      box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
      width: 200px;
      background: white;
      display: none;
      position: absolute;
      z-index: 999;
      left: 0;
    }

    &:hover {
      .dropdown {
        display: block;
      }
    }
  }
  .contact-btn {
    Button {
      text-transform: capitalize !important;
      padding: 6px 16px !important;
      font-size: 13px !important;
      font-weight: 600;
    }
  }
`;
