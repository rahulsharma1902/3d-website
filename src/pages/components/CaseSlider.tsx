"use client"; // Required for Next.js client-side rendering

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CaseSliderHead = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Current active slide index
  const videoData = [
    {
      thumbnail: "/img/full-video.png",
      videoUrl: "https://www.youtube.com/embed/9qUw2Xfzlps?autoplay=1&rel=0",
    },
    {
      thumbnail: "/img/full-video.png",
      videoUrl: "https://www.youtube.com/embed/example2?autoplay=1&rel=0",
    },
    {
      thumbnail: "/img/full-video.png",
      videoUrl: "https://www.youtube.com/embed/example3?autoplay=1&rel=0",
    },
    {
      thumbnail: "/img/full-video.png",
      videoUrl: "https://www.youtube.com/embed/example4?autoplay=1&rel=0",
    },
    {
      thumbnail: "/img/full-video.png",
      videoUrl: "https://www.youtube.com/embed/example5?autoplay=1&rel=0",
    },
  ];
  const totalSlides = videoData.length;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (_, next) => {
      setCurrentSlide(next);
    },
  };

  const progressPercentage = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <section className="case_slider bg-brown pb_100">
      <div className="container">
        <div className="video_slider pb-0" data-aos="fade-up">
          <Slider {...settings}>
            {videoData.map((video, index) => (
              <div key={index} className="vd_slider">
                <div
                  className="img-laptop full-width-video"
                  style={{ cursor: "pointer", position: "relative" }}
                >
                  <Image
                    className="img-fluid"
                    src={video.thumbnail}
                    alt={`Thumbnail ${index + 1}`}
                    width={1400}
                    height={700}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>
            ))}
          </Slider>

          {/* Progress Bar */}
          <div className="progress" style={{ marginTop: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: `${progressPercentage}%`,
                height: "5px",
                backgroundColor: "#F7892F",
              }}
              aria-valuenow={progressPercentage}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>

          {/* Slide Numbers */}
          <div className="slides-numbers" style={{ marginTop: "10px", textAlign: "right" }}>
            <span className="active">{String(currentSlide + 1).padStart(2, "0")}</span> -{" "}
            <span className="total">{String(totalSlides).padStart(2, "0")}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseSliderHead;
