import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Gallery() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="gallery" >
      <div className="gallery-header" data-aos="fade-right"><h5>Gallery</h5> <h3>A peak at our gallery</h3></div>
      <div className="gallery-photos">
        <div className="photo" data-aos="zoom-in-left">
          <img src="./images/photo-1.png" />
        </div>
        <div className="photo" data-aos="zoom-in-right" data-aos-delay="300">
          <img src="./images/photo-2.png" />
        </div>
        <div className="photo" data-aos="zoom-in-right" data-aos-delay="400">
          <img src="./images/photo-3.png" />
        </div>
        <div className="photo" data-aos="zoom-in-left">
          <img src="./images/photo-4.png" />
        </div>
      </div>
      <div className="gallery-buttons">
        <a href=""><button className="photo-btn">more photos</button></a>
        <a href=""><button className="facility-btn">check facilities</button></a>
      </div>
    </div>
  );
}
