"use client"; // Required for Next.js client-side rendering

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

// Import Slick Slider styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutSlider = () => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const slides = [
    { id: 1, src: "/img/p-1.png", name: "Bence", role: "UI/UX Designer" },
    { id: 2, src: "/img/p-2.png", name: "Bence", role: "UI/UX Designer" },
    { id: 3, src: "/img/p-1.png", name: "Bence", role: "UI/UX Designer" },
  ];

  return (
    <section className="about-slider-sec bg-brown">
      <div className="container">
        <div className="slider-width" data-aos="fade-up">
          <Slider {...settings} className="about-slider">
            {slides.map((slide) => (
              <div key={slide.id} className="about-slider-items">
                <div className="box-info-p">
                  <Image
                    className="img-fluid"
                    src={slide.src}
                    alt={`${slide.name} Image`}
                    width={1400}
                    height={700}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="p-info mt-4 d-flex align-items-center">
                  <p className="p-info-1">{slide.name}</p>
                  <p className="p-info-2">{slide.role}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default AboutSlider;
