import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const Testimonials = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,  
          autoplaySpeed: 3000, 
        },
      },
    ],
  };
  
  
  const testimonials = [
    {
      name: "Mrs Fatima Ahmed",
      role: "Parent",
      content: "Our family is extremely grateful for the positive impact this school has had on our children. The Islamic values integrated into the curriculum provide a nurturing environment for their academic and spiritual growth.",
      image: ""
    },
    {
      name: "Zayd Malik",
      role: "Student",
      content: "Being a student at this school has been a truly enriching experience. The teachers are not just educators; they are mentors who guide us not only in our studies but also in developing strong character and leadership skills.",
      image: ""
    },
    {
      name: "Mr Rahman",
      role: "Parent",
      image: "",
      content: "I appreciate the school's commitment to academic excellence and Islamic values. The school has created a holistic learning environment that goes beyond textbooks, ensuring our children thrive academically and morally.",
    },
    {
      name: "Isma'il Abdullah",
      role: "Pupil",
      image: "",
      content: "I'm grateful to be part of a school that celebrates diversity and embraces Islamic principles. The school's emphasis on critical thinking and creativity has prepared me not only for academic success but also for a bright future ahead.",
    },
    {
      name: "Mrs Ali",
      role: "Parent",
      image: "",
      content: "Choosing this school for our children was the best decision we made. The dedicated staff and teachers go above and beyond to provide a high-quality education while instilling a deep sense of Islamic values. Our kids love going to school every day.",
    },
    {
      name: "Amina Ahmed",
      role: "Student",
      image: "",
      content: "I'm proud to be part of a school where I can freely express my faith and identity. The supportive community and engaging lessons have not only enhanced my academic skills but also shaped me into a confident and compassionate individual.",
    },
    {
      role: "Parent",
      image: "",
      content: "Mr. and Mrs. Dejo express their gratitude to Firdaus-Gate for fostering an environment where their children thrive academically and morally. They also commended our strong commitment to Islamic values.",
    },
    {
      image: "",
      role: "Student",
      content: "Being an alumnus of this school, I can confidently say that the education and values instilled here continue to guide me in my career and personal life. The memories and lessons are cherished forever.",
    },
    {
      image: "",
      role: "Parent",
      content: "Mrs. Ahmed praises the school for its dedicated teachers and staff who create a positive and inclusive learning environment. The emphasis on Islamic principles is evident in her child's holistic development.",
    },
  ];

  return (
    <Container className=" py-5">
      <div className="div container">
    <div className="header d-flex flex-column justify-content-center align-items-center">
    <h6 className="pre-header">Testimonials</h6>
    <h2 className="mt-4">What our Clients say About us.</h2>
    </div>
    <div className=" pt-3">
      <Slider {...sliderSettings} className="">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="pr-4 testimony ">
            <div className="testimonial-card text-center d-flex flex-column justify-content-center align-items-center">
              <p>{testimonial.content}</p>
              <div className="client-info d-flex flex-row gap-2 align-items-center mt-2">
                <div className="author-image"></div>
                <p className="m-0">
                - {testimonial.name}, {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
background-color: linear-gradient(to right, #ffff, #ebffff, #f5f5f5);
background-repeat: no-repeat;
background-position: center;
background-size: contain;
.client-info{
font-weight: 600;
}
    h2 {
      font-size: 45px;
      font-weight: 800;
      text-align: center;
      @media (max-width: 768px) {
            font-size: 36px !important;
          }
    }
    .author-image{
      width: 50px;
      height:50px;
      background: purple;
      border-radius: 50%;
    }
    .slick-dots {
  margin-top: 50px;
}
    @media screen and (max-width: 768px) {
      .testimonial-card{
      justify-content: center;
      text-align: center;
    }
    }
`
export default Testimonials;
