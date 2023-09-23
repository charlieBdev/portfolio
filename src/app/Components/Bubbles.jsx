'use client'

import React, { useState, useEffect } from "react";

export const Bubbles = () => {
  const [bubbles, setBubbles] = useState([]);
  const currentDate = new Date();
  const currentYear= currentDate.getFullYear();

  const getRandomColor = () => {
    const colors = [
      "244, 114, 182",
      "34, 211, 238",
      "52, 211, 153",
      "253, 224, 71",
      "251, 146, 60",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  useEffect(() => {
    const initialBubbles = [];
    for (let i = 0; i < currentYear; i++) {
      initialBubbles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * 50,
        color: getRandomColor(),
      });
    }
    setBubbles(initialBubbles);
  }, []);

  return (
    <div
      className="bg-inherit mt-24 fixed top-0 left-0 w-full h-full pointer-events-none"
    >
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: bubble.x,
            top: bubble.y,
            width: bubble.radius,
            height: bubble.radius,
            borderRadius: "50%",
            backgroundColor: `rgba(${bubble.color}, 0.2)`,
            border: `1px solid rgba(${bubble.color}, 0.8)`,
          }}
        />
      ))}
    </div>
  );
};
