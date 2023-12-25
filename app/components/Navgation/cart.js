import Link from "next/link";
import React, { useState } from "react";
import { BsHandbag, BsHandbagFill } from "react-icons/bs";

const Cart = () => {
  // Changing icon on hover
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div className="cart">
      <Link href={"/cart"}>
        <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {isHovered ? <BsHandbagFill /> : <BsHandbag />}
        </span>
      </Link>
    </div>
  );
};

export default Cart;
