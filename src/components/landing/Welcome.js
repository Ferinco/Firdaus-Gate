import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Card from "../custom/card";
import { HEADER } from "../custom/Header";
export default function Welcome() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="welcome">
      <HEADER black>
        <h5>WELCOME</h5>
      </HEADER>
      <div className="wrapper">
        <div className="welcome-left" data-aos="zoom-in-down">
          <div className="image">
            <img src="./images/samson.jpeg" />
          </div>
        </div>
        <div className="welcome-right" data-aos="fade-left">
          <h3>Firdaus-Gate Group of Schools</h3>
          <p>knowledge is freedom</p>

          <p className="text">
            At Firdaus-gates group of sschools, we ffufbisa fuyfds gfdufds
            fgsduydfds fdguyfgdgf d sfgdshfsd ebdure tbs thre us al ewuas
            sdahdfhdgfgdfhdguyfg
          </p>
          <div className="body">
            <Card
              image='data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="512" height="512" viewBox="0 0 512 512"%3E%3Cpath fill="blue" d="M472 328h-24v-64a24.027 24.027 0 0 0-24-24H272v-64h32a24.028 24.028 0 0 0 24-24V80a24.028 24.028 0 0 0-24-24h-96a24.028 24.028 0 0 0-24 24v72a24.028 24.028 0 0 0 24 24h32v64H88a24.027 24.027 0 0 0-24 24v64H40a24.028 24.028 0 0 0-24 24v72a24.028 24.028 0 0 0 24 24h80a24.028 24.028 0 0 0 24-24v-72a24.028 24.028 0 0 0-24-24H96v-56h144v56h-24a24.028 24.028 0 0 0-24 24v72a24.028 24.028 0 0 0 24 24h80a24.028 24.028 0 0 0 24-24v-72a24.028 24.028 0 0 0-24-24h-24v-56h144v56h-24a24.028 24.028 0 0 0-24 24v72a24.028 24.028 0 0 0 24 24h80a24.028 24.028 0 0 0 24-24v-72a24.028 24.028 0 0 0-24-24ZM216 88h80v56h-80ZM112 360v56H48v-56Zm176 0v56h-64v-56Zm176 56h-64v-56h64Z"%2F%3E%3C%2Fsvg%3E'
              header="Tech Driven"
            />
            <Card image='data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="512" height="512" viewBox="0 0 512 512"%3E%3Cpath fill="blue" d="M472 328h-24v-64a24.027 24.027 0 0 0-24-24H272v-64h32a24.028 24.028 0 0 0 24-24V80a24.028 24.028 0 0 0-24-24h-96a24.028 24.028 0 0 0-24 24v72a24.028 24.028 0 0 0 24 24h32v64H88a24.027 24.027 0 0 0-24 24v64H40a24.028 24.028 0 0 0-24 24v72a24.028 24.028 0 0 0 24 24h80a24.028 24.028 0 0 0 24-24v-72a24.028 24.028 0 0 0-24-24H96v-56h144v56h-24a24.028 24.028 0 0 0-24 24v72a24.028 24.028 0 0 0 24 24h80a24.028 24.028 0 0 0 24-24v-72a24.028 24.028 0 0 0-24-24h-24v-56h144v56h-24a24.028 24.028 0 0 0-24 24v72a24.028 24.028 0 0 0 24 24h80a24.028 24.028 0 0 0 24-24v-72a24.028 24.028 0 0 0-24-24ZM216 88h80v56h-80ZM112 360v56H48v-56Zm176 0v56h-64v-56Zm176 56h-64v-56h64Z"%2F%3E%3C%2Fsvg%3E' header="Experienced Teachers" />
            <Card image='data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="512" height="512" viewBox="0 0 512 512"%3E%3Cpath fill="blue" d="M472 328h-24v-64a24.027 24.027 0 0 0-24-24H272v-64h32a24.028 24.028 0 0 0 24-24V80a24.028 24.028 0 0 0-24-24h-96a24.028 24.028 0 0 0-24 24v72a24.028 24.028 0 0 0 24 24h32v64H88a24.027 24.027 0 0 0-24 24v64H40a24.028 24.028 0 0 0-24 24v72a24.028 24.028 0 0 0 24 24h80a24.028 24.028 0 0 0 24-24v-72a24.028 24.028 0 0 0-24-24H96v-56h144v56h-24a24.028 24.028 0 0 0-24 24v72a24.028 24.028 0 0 0 24 24h80a24.028 24.028 0 0 0 24-24v-72a24.028 24.028 0 0 0-24-24h-24v-56h144v56h-24a24.028 24.028 0 0 0-24 24v72a24.028 24.028 0 0 0 24 24h80a24.028 24.028 0 0 0 24-24v-72a24.028 24.028 0 0 0-24-24ZM216 88h80v56h-80ZM112 360v56H48v-56Zm176 0v56h-64v-56Zm176 56h-64v-56h64Z"%2F%3E%3C%2Fsvg%3E' header="Serane Environment" />
          </div>
          <div className="end">
            <p>
              Mr. chairman <br /> <span>Chairman</span>
            </p>
            <a href="">23455664747</a>
          </div>
        </div>
      </div>
    </div>
  );
}
