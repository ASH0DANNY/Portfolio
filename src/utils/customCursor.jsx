import React, { useState, useEffect } from "react";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Track mouse position
  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    document.addEventListener("mousemove", updateCursorPosition);

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

  return (
    <div
      className="fixed -top-5 -left-5 z-50 pointer-events-none bg-transparent"
      style={{
        transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
        transition: "transform 0.1s ease",
      }}
    >
      <div className="w-10 h-10 bg-gray-600 bg-opacity-60 rounded-full cursor-pointer"></div>
    </div>
  );
};

export default CustomCursor;
