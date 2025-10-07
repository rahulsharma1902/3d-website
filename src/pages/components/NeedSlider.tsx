"use client"; // Required for Next.js client-side rendering

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NeedSlider = () => {
  const [progress, setProgress] = useState(0);

  const settings = {
    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    beforeChange: (current, next) => {
      const progressPercentage = ((next + 1) / 5) * 100; // Assuming 5 slides
      setProgress(progressPercentage);
    },
  };

  return (
    <section className="needslider-sec understand pb_100 bg-brown">
      <div className="container">
        <div className="need-box mb-50" data-aos="fade-up">
          <h2>Need to understand our clients' opinion on working with us?</h2>
        </div>      
      <div className="content">
        <Slider {...settings} className="need-slider">
          {[...Array(5)].map((_, index) => (
            <div className="slider-w" key={index}>
              <div className="need-slider-box">
                {/* Image Section */}
                <div className="img-box-child-1" data-aos="fade-up">
                  <Image
                    className="img-fluid"
                    src="/img/two-box.png"
                    alt={`Laptop Image ${index + 1}`}
                    width={30}
                    height={15}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                {/* Text Section */}
                <div className="img-box-child-2" data-aos="fade-up">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </div>
                {/* Author Section */}
                <div className="img-box-child-3 pt_12 d-flex justify-content-between align-items-center gap-3" data-aos="fade-up">
                  <div className="box-3part-1">
                    <div className="box-3-child-1 d-flex justify-content-between align-items-center gap-2">
                      <div className="vrglass">
                        <Image
                          className="img-fluid"
                          src="/img/circle-person.jpg"
                          alt="Author Image"
                          width={1400}
                          height={700}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                      <div className="text-box-3">Bence Peeters</div>
                    </div>
                  </div>
                  <div className="box-3part-2">
                    <div className="box-p-1">
                      <p className="pa-1 m-0">Lorem Ipsum</p>
                    </div>
                    <div className="box-p-2 ms-auto">
                      <div className="pa-2">Founder</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {/* Progress Bar */}
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: `${progress}%`,
              height: "5px",
              backgroundColor: "#F7892F",
            }}
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <span className="slider__label sr-only">{progress.toFixed(0)}% completed</span>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default NeedSlider;
