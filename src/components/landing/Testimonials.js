import "bootstrap/dist/css/bootstrap.css";
import { HEADER } from "../custom/Header";
import Testimony from "./Testimony";
export default function Testimonials() {
  return (
    <div className="testimonials">
      
        <HEADER white>
        <h5>TESTMONIALS</h5>
        <h3>read what our clients say about us</h3>
        </HEADER>
      
      <div className="wrapper">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Testimony
                image="./images/Firdaus_logo.png"
                about="Medical Doctor"
                name="Mr Mohamed saraki"
                texts="As a student at Firdaus-Gate, I can confidently say that it is the best educational institution I've ever attended. The school's dedicated and passionate teachers create a nurturing environment where learning thrives. The diverse curriculum encourages exploration and fosters critical thinking. The supportive community promotes personal growth and character development. The state-of-the-art facilities and resources enhance our learning experience. Firdaus-Gates truly prepares us to excel academically, embrace challenges, and become confident leaders. I am grateful to be part of such an exceptional school that equips us for success both inside and outside the classroom."
              />
            </div>
            <div className="carousel-item">
              <Testimony
                image="./images/Firdaus_logo.png"
                about="Nurse"
                name="Oluwadairo Oluwaloye"
                texts=" lorem dydf ghjdkh fyf yorgwrygooy goyogdsfo ghf dsfghhjhgsd huif guhuipgfsg upuip"
              />
            </div>
            <div className="carousel-item">
              <Testimony
                image="./images/Firdaus_logo.png"
                about="Medical Doctor"
                name="Mr ghdfjgd dffg"
                texts="As a proud graduate of Firdaus-Gates, I can attest to the exceptional education I received and the lifelong impact it has had on my success. The school's rigorous academic programs prepared me for higher education and equipped me with invaluable skills for my career. The dedicated faculty and staff provided unwavering support and mentorship throughout my journey. The emphasis on character development and community involvement instilled in me a strong sense of responsibility and compassion. Firdaus-Gates fostered an inclusive and diverse environment that encouraged collaboration and broadened my perspective. I am forever grateful for the invaluable experiences and opportunities that Firdaus-Gates provided, shaping me into the confident and accomplished individual I am today."
              />
            </div>
            <div className="carousel-item">
              <Testimony
                image="./images/Firdaus_logo.png"
                about="Medical Doctor"
                name="Bola Tinubu"
                texts="As a parent, I couldn't be more grateful for the educational experience my child has had at Firdaus-Gates. The school's commitment to academic excellence, combined with a nurturing environment, has truly set the foundation for their future success. The passionate and dedicated teachers go above and beyond to ensure each child reaches their full potential. The strong sense of community and parental involvement create a supportive network that extends beyond the classroom. Firdaus-Gates has not only shaped my child's academic journey but has also instilled in them important values, critical thinking skills, and a love for learning. I am confident that my child is receiving the best education possible, and I couldn't ask for a better school for their growth and development."
              />
            </div>
            <div className="carousel-item">
              <Testimony
                image="./images/Firdaus_logo.png"
                about="Medical Doctor"
                name="Bill Gates"
                texts="As a parent, I couldn't be more grateful for the educational experience my child has had at Firdaus-Gates. The school's commitment to academic excellence, combined with a nurturing environment, has truly set the foundation for their future success. The passionate and dedicated teachers go above and beyond to ensure each child reaches their full potential. The strong sense of community and parental involvement create a supportive network that extends beyond the classroom. Firdaus-Gates has not only shaped my child's academic journey but has also instilled in them important values, critical thinking skills, and a love for learning. I am confident that my child is receiving the best education possible, and I couldn't ask for a better school for their growth and development."
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
    </div>
  );
}
