import { useState } from "react";
import "./ImageCompare.css";
import ImgA from "../assets/a.png";
import ImgB from "../assets/b.png";

export default function ImageCompare() {
  const [position, setPosition] = useState(50); // start in the middle

  const handleMove = (e) => {
    const container = e.currentTarget.getBoundingClientRect();
    const newPos = ((e.clientX - container.left) / container.width) * 100;
    setPosition(Math.min(100, Math.max(0, newPos)));
  };

  return (
    <div
      className="compare-container"
      onMouseMove={handleMove}
      onTouchMove={(e) => handleMove(e.touches[0])}
    >
      {/* Image A, revealed from left */}
      <div
        className="compare-side"
        style={{ width: `${position}%`, left: 0 }}
      >
        <img src={ImgA} alt="Image A" className="compare-img" />
      </div>

      {/* Image B, revealed from right */}
      <div
        className="compare-side"
        style={{ width: `${100 - position}%`, right: 0 }}
      >
        <img src={ImgB} alt="Image B" className="compare-img" />
      </div>

      {/* Divider line + knob */}
      <div className="compare-divider" style={{ left: `${position}%` }}>
        <div className="compare-knob"></div>
      </div>
    </div>
  );
}