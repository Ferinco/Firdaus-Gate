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
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 9,
        },
      },
    ],
  };
  const testimonials = [
    {
      name: "Mrs Fatima Ahmed",
      role: "Parent",
      content: "Our family is extremely grateful for the positive impact this school has had on our children. The Islamic values integrated into the curriculum provide a nurturing environment for their academic and spiritual growth.",
    },
    {
      name: "Zayd Malik",
      role: "Student",
      content: "Being a student at this school has been a truly enriching experience. The teachers are not just educators; they are mentors who guide us not only in our studies but also in developing strong character and leadership skills.",
    },
    {
      name: "Mr Rahman",
      role: "Parent",
      content: "As a parent, I appreciate the school's commitment to academic excellence and Islamic values. The inclusive and supportive community has created a holistic learning environment that goes beyond textbooks, ensuring our children thrive academically and morally.",
    },
    {
      name: "Isma'il Abdullah",
      role: "Pupil",
      content: "I'm grateful to be part of a school that celebrates diversity and embraces Islamic principles. The school's emphasis on critical thinking and creativity has prepared me not only for academic success but also for a bright future ahead.",
    },
    {
      name: "Mrs Ali",
      role: "Parent",
      content: "Choosing this school for our children was the best decision we made. The dedicated staff and teachers go above and beyond to provide a high-quality education while instilling a deep sense of Islamic values. Our kids love going to school every day.",
    },
    {
      name: "Amina Ahmed",
      role: "Student",
      content: "I'm proud to be part of a school where I can freely express my faith and identity. The supportive community and engaging lessons have not only enhanced my academic skills but also shaped me into a confident and compassionate individual.",
    },
    {
      role: "Parent",
      content: "Mr. and Mrs. Khan express their gratitude to the school for fostering an environment where their child thrives academically and morally. The commitment to Islamic values is truly commendable.",
    },
    {
      role: "Student",
      content: "Being an alumnus of this school, I can confidently say that the education and values instilled here continue to guide me in my career and personal life. The memories and lessons are cherished forever.",
    },
    {
      role: "Parent",
      content: "Mrs. Ahmed praises the school for its dedicated teachers and staff who create a positive and inclusive learning environment. The emphasis on Islamic principles is evident in her child's holistic development.",
    },
  ];

  return (
    <Container className="container py-5">
    <div className="header d-flex flex-column justify-content-center align-items-center">
    <h6 className="pre-header">Testimonials</h6>
    <h2 className="">What our Clients say About us.</h2>
    </div>
    <div className="py-5">
      <Slider {...sliderSettings} className="">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="pr-4">
            {/* Testimonial Card */}
            <div className="testimonial-card">
              {/* Testimonial Content */}
              <p>{testimonial.content}</p>
              {/* Client Information */}
              <p className="client-info">
                - {testimonial.name}, {testimonial.role}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </Container>
  );
};
const Container = styled.div`
    h2 {
      font-size: 45px ;
      font-weight: 800;
    }
    
`
export default Testimonials;
