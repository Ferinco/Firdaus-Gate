import { Icon } from "@iconify/react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function SpecialSection() {
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

  return (
    <Wrapper className="py-5" data-aos="fade-up" data-aos-duration="1000">
      <div className=" container py-5">
        <div className="row">
          <div className="d-flex flex-column col-lg-4 ">
            <h6 className="m-0">WHAT WE OFFER</h6>
            <h2 className="mb-0 mt-2">Learn more about our core services</h2>
            <p className="mt-3 text-muted">
              Firdaus-Gate Model Schools is unlike any other institution, we do
              not only care about our students and pupils' academic excellence,
              but a
            </p>
            <ul className="m-0 p-0 d-flex flex-column gap-2">
              <li className="d-flex flex-row align-items-start gap-1">
                <div>
                  <Icon
                    icon="fluent-emoji-high-contrast:check-mark-button"
                    style={{ color: "blue" }}
                  />
                </div>
                Spacious, well-ventilated rooms for various programmes.
              </li>
              <li className="d-flex flex-row align-items-start gap-1">
                <div>
                  <Icon
                    icon="fluent-emoji-high-contrast:check-mark-button"
                    style={{ color: "blue" }}
                  />
                </div>
                An e-library with internet facility to enable students’ access
                good academic resources online.
              </li>
              <li className="d-flex flex-row align-items-start gap-1">
                <div>
                  <Icon
                    icon="fluent-emoji-high-contrast:check-mark-button"
                    style={{ color: "blue" }}
                  />
                </div>
                A conducive and well structured Mosque for students to observe
                their prayers.
              </li>
              <li className="d-flex flex-row align-items-start gap-1">
                <div>
                  <Icon
                    icon="fluent-emoji-high-contrast:check-mark-button"
                    style={{ color: "blue" }}
                  />
                </div>
                A conducive and well structured Mosque for students to observe
                their prayers.
              </li>
            </ul>
          </div>
          <div className="d-flex row col-lg-8 gap-3 cards ">
            <div className="card d-flex flex-row col-lg-6 gap-3 py-3 pr-2"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="100"
              data-aos-offset="0"
              data-aos-duration="500">
              <div>
                <Icon
                  icon="maki:religious-muslim"
                  style={{ color: "blue", fontSize: "50px" }}
                  className="big-icon"
                />
              </div>
              <div className="d-flex flex-column">
                <h4 className="m-0">ARABIC</h4>
                <p className="m-0">
                  This is one of our core services as we do not neglect our
                  religion and the knowledge of it. We give comprehensive
                  arabic, Quran and Hadith education to children within
                  different scope of age and class.
                </p>
              </div>
            </div>
            <div className="card d-flex flex-row col-lg-5 gap-3 py-3 pr-2"
             data-aos="fade-zoom-in"
             data-aos-easing="ease-in-back"
             data-aos-delay="200"
             data-aos-offset="0"
             data-aos-duration="500">
              <div>
                <Icon
                  icon="bxs:baby-carriage"
                  style={{ color: "blue", fontSize: "50px" }}
                  className="big-icon"
                />
              </div>
              <div className="d-flex flex-column">
                <h4 className="m-0">EYFS</h4>
                <p className="m-0">
                  The school offers Early years foundation school programmes
                  which includes creche, pre-schools and nursery programmes.
                </p>
              </div>
            </div>
            <div className="card d-flex flex-row col-lg-5 gap-3 py-3 pr-2" 
             data-aos="fade-zoom-in"
             data-aos-easing="ease-in-back"
             data-aos-delay="300"
             data-aos-offset="0"
             data-aos-duration="500">
              <div>
                <Icon
                  icon="fa6-solid:children"
                  style={{ color: "blue", fontSize: "43px" }}
                  className="big-icon"
                />
              </div>
              <div className="d-flex flex-column">
                <h4 className="m-0">PYP</h4>
                <p className="m-0">
                  Primary Years Education where we offer comprehensive training
                  and education to prepare our pupils for the secondary
                  education.
                </p>
              </div>
            </div>
            <div className="card d-flex flex-row col-lg-6 gap-3 py-3 pr-2" 
             data-aos="fade-zoom-in"
             data-aos-easing="ease-in-back"
             data-aos-delay="400"
             data-aos-offset="0"
             data-aos-duration="500">
              <div>
                <Icon
                  icon="fluent-emoji-high-contrast:graduation-cap"
                  style={{ color: "blue", fontSize: "50px" }}
                  className="big-icon"
                />
              </div>{" "}
              <div className="d-flex flex-column">
                <h4 className="m-0">SSC</h4>
                <p className="m-0">
                  The Senior School Classes Programmes help nuture our students
                  minds, empowering them with the right knowledge education
                  needed for their chosen career path.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background: linear-gradient(to right, #ffff, #f5f5f5, #f5f5f5);
  .row {
    flex-wrap: nowrap;
    @media screen and (max-width: 991px) {
      flex-wrap: wrap !important;
    }
  }
  .cards {
    margin: 0 !important;
    margin-left: 20px !important;
    flex-wrap: wrap !important;
    @media screen and (max-width: 991px) {
      margin-top: 20px !important;
      margin-left: 0 !important;
    }
  }
  .card {
    border: 0 !important;
    background-color: transparent;
    /* box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px; */
    p {
      font-size: 16px !important;
    }
  }
  h2 {
    font-weight: 500 !important;
  }
  h6 {
    font-weight: 300 !important;
    color: blue;
  }
  h4 {
    font-weight: 400 !important;
    font-size: 20px;
  }
  li {
    font-size: 14px !important;
  }
  Icon {
    font-size: 20px !important;
  }
  h6 {
    font-weight: 500 !important;
  }
  h4 {
    font-weight: 500 !important;
  }
`;
