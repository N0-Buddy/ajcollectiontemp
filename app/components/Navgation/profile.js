import Link from "next/link";
import React, { useState } from "react";
import { BsPerson, BsPersonFill } from "react-icons/bs";

const Profile = () => {
  // Changing icon on hover
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="profile">
      <Link href={"/login"}>
        <span onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {isHovered ? <BsPersonFill /> : <BsPerson />}
        </span>
      </Link>
    </div>
  );
};

export default Profile;
