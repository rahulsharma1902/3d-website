import React from "react";
import { useProgress } from "@react-three/drei";

const LoadingScreen: React.FC = () => {
  const { progress } = useProgress(); // Get progress from useProgress

  return (
    <div
      className="page-loader"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        background: "#f5f5f5", // Optional background color
      }}
    >
      <div
        className="page-loader-wrp"
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        <div
          className="loader-box"
          style={{
            maxWidth: "400px",
            margin: "auto",
          }}
        >
          {/* Numeric Progress Display */}
          <div className="text-zero">
            <p
              style={{
                fontFamily: "PP Formula Condensed, sans-serif",
                fontSize: "100px",
                fontWeight: "200",
                lineHeight: "1.4",
                letterSpacing: "0.03em",
                marginBottom: "20px",
              }}
            >
              {Math.floor(progress).toString().padStart(3, "0")}
            </p>
          </div>

          {/* Progress Bar */}
          <div
            className="progress-bar-container"
            style={{
              padding: "6px 0",
              border: "1px solid #000",
              borderRadius: "5px",
              overflow: "hidden",
              marginTop: "20px",
            }}
          >
            <div
              className="progress-bar"
              style={{
                width: `${progress}%`,
                backgroundImage: `url('/img/line.svg')`,
                backgroundRepeat: "repeat-x",
                backgroundSize: "contain",
                height: "20px",
                transition: "width 0.1s linear", // Smooth progress bar transition
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
