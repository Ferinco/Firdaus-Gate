import styled from "styled-components";
import { Button } from "../custom/Button";
import { Link } from "react-router-dom";
import { PATH_PAGE } from "../../routes/paths";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function AdmissionSection() {
      //aos animation setup
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
          duration: 300,
          easing: "ease",
          once: true,
          mirror: false,
          anchorPlacement: "top-bottom",
        });
      }, []);
    
  return (
    <Wrapper>
      <div className="join-us p-5 d-flex flex-column justify-content-center align-items-center">
        <h2>Ready to Join Us?</h2>
        <p>
          We offer various services that will equip you with the knowledge and
          skills you need to become a world class individual in every sphere of
          your life. Apply to be a student with just simple steps now.
        </p>
        <Button blue>
          <Link to={PATH_PAGE.admission} className="react-router-link">
            Start Admission
          </Link>
        </Button>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: #f1f1f1 !important;
  .join-us {
    text-align: center;
    p {
      max-width: 700px;
    }
  }
  h2 {
    font-size: 45px;
    font-weight: 800;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 36px !important;
    }
  }
`;
