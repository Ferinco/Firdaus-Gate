import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Card from "./card";
export default function Welcome() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="welcome">
      <div className="welcome-header">
        <h5>Welcome</h5>
      </div>
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
              image=""
              header="Tech Driven"/>
                <Card
              image=""
              header="Experienced Teachers"/>
                <Card
              image=""
              header="Serane Environment"/>
            </div>
            <div  className="end">
              <p>Mr. chairman <br/> <span>Chairman</span></p>
              <a href="">23455664747</a>
            </div>
            
          </div>
      </div>
    </div>
  );
}
