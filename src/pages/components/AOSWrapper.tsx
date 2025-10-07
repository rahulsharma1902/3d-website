import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface AOSWrapperProps {
  children: React.ReactNode;
}

const AOSWrapper: React.FC<AOSWrapperProps> = ({ children }) => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Default animation duration
      easing: "ease-in-out", // Default easing
      once: true, // Whether animation should happen only once
    });
  }, []);

  return <>{children}</>;
};

export default AOSWrapper;
