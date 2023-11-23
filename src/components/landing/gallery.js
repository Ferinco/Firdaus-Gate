import styled from "styled-components";
import Marquee from "react-fast-marquee";
import { Button } from "../custom/Button";
export default function Gallery() {
  const marqueImages1 = [
    "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698717/Firdaus/IMG-20230901-WA0010_wpqd5y.jpg",
    "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698100/Firdaus/Screenshot_20221226-182710_1_jrfr32.jpg",
    "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698093/Firdaus/Screenshot_20220823-083706_1_we5dio.jpg",
    "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698090/Firdaus/Screenshot_20220823-083631_1_pqmhtr.jpg",
    "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698087/Firdaus/Screenshot_20220823-083433_2_poesu0.jpg",
    "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698086/Firdaus/Screenshot_20220823-083433_1_cne8do.jpg",
    "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698084/Firdaus/Screenshot_20220822-213231_1_echgsu.jpg",
    "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698084/Firdaus/Screenshot_20220822-213241_1_lxseka.jpg",
  ];
  const marqueImages2 = [
    "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698722/Firdaus/IMG-20230901-WA0012_zbvsdw.jpg",
    "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698100/Firdaus/Screenshot_20221226-182710_1_jrfr32.jpg",
    "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698724/Firdaus/IMG-20230901-WA0014_jur3yh.jpg",
    "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698090/Firdaus/Screenshot_20220823-083631_1_pqmhtr.jpg",
    "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698717/Firdaus/IMG-20230901-WA0009_1_h32p6p.jpg",
    "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698086/Firdaus/Screenshot_20220823-083433_1_cne8do.jpg",
    "https://res.cloudinary.com/duvwweuhj/image/upload/v1700698101/Firdaus/Screenshot_20221226-182739_1_za3qn6.jpg",
  ];
  return (
    <Container className="py-5">
      <div className="header d-flex flex-column justify-content-center align-items-center">
        <h6>GALLERY</h6>
        <h2>
          View multiple photos that say alot about us and our top notch services
        </h2>
      </div>
      <div className="d-flex flex-column body py-5 gap-4">
        <Marquee direction="left" speed={30} className="d-flex gap-3">
          <div className="d-flex flex-row gap-3">
            {marqueImages1.map((image) => (
              <div className="image">
                <img src={image} />
              </div>
            ))}
          </div>
        </Marquee>
        <Marquee direction="left" speed={60} className="d-flex gap-3">
          <div className="d-flex flex-row gap-3">
            <div className="text">sports</div>
            <div className="text">science</div>
            <div className="text">art</div>
            <div className="text">commercial</div>
            <div className="text">debate</div>
            <div className="text">culture</div>
            <div className="text">excursions</div>
            <div className="text">tech</div>
            <div className="text">sports</div>
            <div className="text">science</div>
            <div className="text">art</div>
            <div className="text">commercial</div>
            <div className="text">debate</div>
            <div className="text">culture</div>
            <div className="text">excursions</div>
            <div className="text">tech</div>
          </div>
        </Marquee>
        <Marquee direction="left" speed={30} className="d-flex gap-3">
          <div className="d-flex flex-row gap-3 ">
            {marqueImages2.map((image) => (
              <div className="image">
                <img src={image} />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      <div className="d-flex justify-content-center">
        <Button blue>View More</Button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  overflow: hidden !important;
  background-image: linear-gradient(to right, #00008b, #000000) !important;
  color: white;
  h6 {
    color: blue;
  }
  .image {
    width: 200px;
    height: 200px;
    background-color: purple;
    border-radius: 30px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }
  .text {
    padding: 10px;
    background-color: #ffff;
    color: black;
    font-weight: 700;
    border-radius: 10px;
  }
  .body {
    transform: rotate(-3deg);
  }
  .header {
    h2 {
      font-size: 50px;
      font-weight: 900;
      text-align: center;
      max-width: 700px;
    }
  }
  @media screen and (max-width: 768px) {
    .header {
      h2 {
        font-size: 36px;
      }
    }
    .image {
      width: 150px;
      height: 150px;
      background-color: purple;
    }
  }
`;
