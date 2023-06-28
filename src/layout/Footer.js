import { Icon } from "@iconify/react";
export default function Footer() {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="footer-top">
          <div className="map">
            <h3>Find our school</h3>{" "}
            <Icon className="icon" icon="lucide:school" />
          </div>
          <div className="call">
            <h3>Call us now</h3> <p>+234653647536</p>
          </div>
          <div className="appointment">
            <Icon className="icon" icon="clarity:clock-line" />
            <h3>Book an appointment</h3>
          </div>
        </div>
        <div className="footer-middle">
          <div className="section">
            <div className="header">
              <h5>THE SCHOOL</h5>
              <p>
                We aim at creating and enabling environment which fosters
                learning, as it empowers the students with equal opportunities
                to explore and grow, challenging and reinforcing their
                abilities. We are dedicated to ensuring constant provision of
                formidable foundation through rigorous academic programmes,
                coupled with in-depth exposure to cultural and multi-cultural
                practices without neglect to Islamic values
              </p>
            </div>
          </div>
          <div className="section">
            <div className="header">
              <h5>PORTAL</h5>
            </div>
            <ul className="links">
              <li>
                <a href="">Student Portal</a>
              </li>
              <li>
                <a href="">Teacher Portal</a>
              </li>
              <li>
                <a href="">School Fees Portal</a>
              </li>
              <li>
                <a href="">Parents</a>
              </li>
            </ul>
          </div>
          <div className="section">
            <div className="header">
              <h5>ADMISSION</h5>
            </div>
            <ul className="links">
              <li>Start Admission</li>
              <li>Continue Admission</li>
              <li>Admission Letter</li>
            </ul>
          </div>
          <div className="section">
            <div className="header">
              <h5>REACH US</h5>
              <p></p>
            </div>
            <ul className="links">
              <li>About us</li>
              <li>Mission and Vision</li>
              <li>Our gallery</li>
              <li>Facilities</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>copyright shii!</p>
        </div>
      </div>
    </div>
  );
}
