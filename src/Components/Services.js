import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Services() {
    useEffect(() => {
        AOS.init();
      }, []);
  return (
    <div className="services">
      {/* <div className="services-header"><h5>Why Firdaus-Gate?</h5> <p>why you should choose us</p></div>
            <div className="services-body"> */}
      <div className="services-list" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <div className="image">
          <img src="./images/firdaus-left.png" />
        </div>
        <div className="text">
            <div className="text-header">
                <h5>Why Firdaus-Gate?</h5>
                <h3>We offer top-notch services that help to nuture great minds and leaders</h3>
            </div>
            <ul 
            className="text-body">
                <li>gdhdjdjjjj</li>
                <li>gdhdjdjjjj</li>
                <li>gdhdjdjjjj</li>
                <li>gdhdjdjjjj</li>
                <li>gdhdjdjjjj</li>

            </ul>
        </div>
      </div>
      <div className="services-picture" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
        <div className="image">
            <img src="./images/firdaus-right.png"/>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
