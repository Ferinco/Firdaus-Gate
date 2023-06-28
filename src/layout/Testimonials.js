import "bootstrap/dist/css/bootstrap.css";
import Testimony from "./Testimony";
export default function Testimonials() {
  return (
    <div className="testimonials">
      <div className="header">
        <h5>Testimonials</h5>
        <h3>read what our clients say about us</h3>
      </div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Testimony
              image="./images/"
              about="Medical Doctor"
              name="Mr Mohamed saraki"
              texts=" lorem dydf ghjdkh fyf yorgwrygooy goyogdsfo ghf dsfghhjhgsd huif guhuipgfsg upuip"
            />
          </div>
          <div className="carousel-item">
            <Testimony
              image="./images/loye.jpeg"
              about="Nurse"
              name="Oluwadairo Oluwaloye"
              texts=" lorem dydf ghjdkh fyf yorgwrygooy goyogdsfo ghf dsfghhjhgsd huif guhuipgfsg upuip"
            />
          </div>
          <div className="carousel-item">
            <Testimony
              image="./images/male.jpg"
              about="Medical Doctor"
              name="Mr ghdfjgd dffg"
              texts=" lorem dydf ghjdkh fyf yorgwrygooy goyogdsfo ghf dsfghhjhgsd huif guhuipgfsg upuip"
            />
          </div>
          <div className="carousel-item">
            <Testimony
              image="./images/male.jpg"
              about="Medical Doctor"
              name="Bola Tinubu"
              texts=" lorem dydf ghjdkh fyf yorgwrygooy goyogdsfo ghf dsfghhjhgsd huif guhuipgfsg upuip"
            />
          </div>
          <div className="carousel-item">
            <Testimony
              image="./images/male.jpg"
              about="Medical Doctor"
              name="Bill Gates"
              texts=" lorem dydf ghjdkh fyf yorgwrygooy goyogdsfo ghf dsfghhjhgsd huif guhuipgfsg upuip"
            />
          </div>
        </div>
        <ul className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          {/* <li data-target="#carouselExampleIndicators" data-slide-to="5"></li> */}
        </ul>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </a>
      </div>


    </div>
  );
}