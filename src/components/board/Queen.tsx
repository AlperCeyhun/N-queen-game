import React, { useState } from "react";



const Queen: React.FC = () => {

  const [isHovered, setIsHovered] = useState(false);

  const handleHover = (hovering: boolean) => {
    setIsHovered(hovering);
    console.log(hovering ? "Hovering over the queen!" : "Not hovering.");
  };
  return (
    <div className="flex justify-center items-center h-full z-10"
    onMouseEnter={() => handleHover(true)}
    onMouseLeave={() => handleHover(false)}>
      <span className="text-5xl text-black font-bold">♕</span>
    </div>
  );
};
export default Queen;