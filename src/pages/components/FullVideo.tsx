"use client"; // Required for client-side rendering in Next.js

import React, { useState } from "react";
import Image from "next/image";

const FullVideo: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoClick = () => {
    setShowVideo(true); // Show video when the image wrapper is clicked
  };

  return (
    <section className="laptop-img video-full-banner bg-brown">
      <div className="container-fluid" >
        <div
          className="img-laptop full-width-video"
          data-aos="fade-up"
          onClick={handleVideoClick}
          style={{ cursor: "pointer", position: "relative" }}
        >
          {!showVideo ? (
            <div className="video-image-wrapper" data-aos="fade-up">
              <Image
                className="img-fluid"
                src="/img/full-video.png"
                alt="Laptop Image"
                width={1400}
                height={700}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ) : (
            <div className="iframe-container">
              <iframe
                className="iframe-responsive"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/9qUw2Xfzlps?autoplay=1&rel=0" // Ensure autoplay
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FullVideo;
