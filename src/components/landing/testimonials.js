import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const testimonials = [
    {
      name: "Tobi",
      content: " gjdfjdgewgf]f dgifldutfuewf giutef fewiyieftrfeu",
      role: "student",
    },
    {
      name: "Tobi",
      content: " gjdfjdgewgf]f dgifldutfuewf giutef fewiyieftrfeu",
      role: "student",
    },
    {
      name: "Tobi",
      content: " gjdfjdgewgf]f dgifldutfuewf giutef fewiyieftrfeu",
      role: "student",
    },
        {
      name: "segun",
      content: " gjdfjdgewgf]f dgifldutfuewf giutef fewiyieftrfeu",
      role: "student",
    },
    {
      name: "Tgajiobi",
      content: " gjdfjdgewgf]f dgifldutfuewf giutef fewiyieftrfeu",
      role: "student",
    },
    {
      name: "danii",
      content: " gjdfjdgewgf]f dgifldutfuewf giutef fewiyieftrfeu",
      role: "student",
    },
  ];
  return (
    <div>
      <Slider {...sliderSettings}>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
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
  );
};

export default Testimonials;
