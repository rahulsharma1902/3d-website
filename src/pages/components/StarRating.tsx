// StarRating.tsx
"use client"; // For Next.js client-side rendering

import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Font Awesome
import { FaStar } from "react-icons/fa"; // Font Awesome Star Icon

const StarRating: React.FC = () => {
  const [rating, setRating] = useState<number>(0); // State for the current rating
  const [hover, setHover] = useState<number>(0); // State for hover effect

  return (
    <div style={styles.ratingContainer}>
      <p style={styles.heading}>Rate the Article</p>
      <div style={styles.starWrapper}>
        {[...Array(5)].map((_, index) => {
          const currentRating = index + 1;

          return (
            <div key={index} style={styles.starBox}>
              <FaStar
                size={30}
                color={
                  currentRating <= (hover || rating) ? "#FFD700" : "#FFFFFF"
                } // Yellow when clicked or hovered, White otherwise
                style={styles.starIcon}
                onClick={() => setRating(currentRating)} // Set rating on click
                onMouseEnter={() => setHover(currentRating)} // Highlight on hover
                onMouseLeave={() => setHover(0)} // Remove highlight on mouse leave
              />
            </div>
          );
        })}
      </div>
      <p style={styles.text}>
        {rating > 0 ? `You rated this article ${rating} out of 5` : "No rating"}
      </p>
    </div>
  );
};

// Inline Styles for simplicity
const styles = {
  ratingContainer: {
    textAlign: "left",
    backgroundColor: "#",
    // padding: "20px",
    borderRadius: "8px",
    color: "#FFFFFF",
  },
  heading: {
    marginBottom: "10px",
  },
  starWrapper: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  starBox: {
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#444444",
    border: "1px solid #fff",
    borderRadius: "4px",
    cursor: "pointer",
  },
  starIcon: {
    transition: "color 0.2s ease",
  },
  text: {
    marginTop: "15px",
    fontSize: "16px",
  },
};

export default StarRating;
