import React, { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";

const Favourites = () => {
  // Changing icon on hover
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div className="favourites">
      <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {isHovered ? <BsHeartFill /> : <BsHeart />}
      </span>
    </div>
  );
};

export default Favourites;
