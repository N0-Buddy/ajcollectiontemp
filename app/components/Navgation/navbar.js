"use client";
import React, { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";
import { LiaBarsSolid } from "react-icons/lia";
import { LiaTimesSolid } from "react-icons/lia";

// ICONS
import { BsPersonAdd, BsPersonFillAdd } from "react-icons/bs";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { BsPersonVcard, BsPersonVcardFill } from "react-icons/bs";
import { RiCustomerServiceLine, RiCustomerServiceFill } from "react-icons/ri";
import { BsBuildings, BsBuildingsFill } from "react-icons/bs";

const Navbar = () => {
  // Hover Effect
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  // Navbar Toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="navbar_sec">
      <div
        className={`toggle ${isMenuOpen ? "active_link" : ""}`}
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <LiaTimesSolid />
        ) : (
          <LiaBarsSolid className={isMenuOpen ? "hidden" : ""} />
        )}
      </div>
      <div className={`background_blur ${isMenuOpen ? "blur" : ""}`} />
      <nav className={`nav_items ${isMenuOpen ? "active_link" : ""}`}>
        <ul className="nav_list">
          <li className="nav_item">
            <a className="nav_link" href="#">
              <span className="category_img">
                <Image
                  src={"/imgs/navbar/tops.jpg"}
                  width={1000}
                  height={1000}
                  alt="Category Image"
                />
              </span>
              <span className="category_name">Tops</span>
              <span className="category_link">
                <RiArrowRightSLine />
              </span>
            </a>
          </li>
          <li className="nav_item">
            <a className="nav_link" href="#">
              <span className="category_img">
                <Image
                  src={"/imgs/navbar/newin.jpg"}
                  width={1000}
                  height={1000}
                  alt="Category Image"
                />
              </span>
              <span className="category_name">New</span>
              <span className="category_link">
                <RiArrowRightSLine />
              </span>
            </a>
          </li>
          <li className="nav_item">
            <a className="nav_link" href="#">
              <span className="category_img">
                <Image
                  src={"/imgs/navbar/autumn.jpg"}
                  width={1000}
                  height={1000}
                  alt="Category Image"
                />
              </span>
              <span className="category_name">Autumn</span>
              <span className="category_link">
                <RiArrowRightSLine />
              </span>
            </a>
          </li>
          <li className="nav_item">
            <a className="nav_link" href="#">
              <span className="category_img">
                <Image
                  src={"/imgs/navbar/clothing.jpg"}
                  width={1000}
                  height={1000}
                  alt="Category Image"
                />
              </span>
              <span className="category_name">Clothing</span>
              <span className="category_link">
                <RiArrowRightSLine />
              </span>
            </a>
          </li>
          <li className="nav_item">
            <a className="nav_link" href="#">
              <span className="category_img">
                <Image
                  src={"/imgs/navbar/dresses.jpg"}
                  width={1000}
                  height={1000}
                  alt="Category Image"
                />
              </span>
              <span className="category_name">Dresses</span>
              <span className="category_link">
                <RiArrowRightSLine />
              </span>
            </a>
          </li>
          <li className="nav_item">
            <a className="nav_link" href="#">
              <span className="category_img">
                <Image
                  src={"/imgs/navbar/trousers.jpg"}
                  width={1000}
                  height={1000}
                  alt="Category Image"
                />
              </span>
              <span className="category_name">Trousers</span>
              <span className="category_link">
                <RiArrowRightSLine />
              </span>
            </a>
          </li>
          <li className="nav_item">
            <a className="nav_link" href="#">
              <span className="category_img">
                <Image
                  src={"/imgs/navbar/shoes.jpg"}
                  width={1000}
                  height={1000}
                  alt="Category Image"
                />
              </span>
              <span className="category_name">Shoes</span>
              <span className="category_link">
                <RiArrowRightSLine />
              </span>
            </a>
          </li>
          <li className="nav_item">
            <a className="nav_link" href="#">
              <span className="category_img">
                <Image
                  src={"/imgs/navbar/deals.jpg"}
                  width={1000}
                  height={1000}
                  alt="Category Image"
                />
              </span>
              <span className="category_name">Deals</span>
              <span className="category_link">
                <RiArrowRightSLine />
              </span>
            </a>
          </li>
          <li className="nav_item">
            <a className="nav_link" href="#">
              <span className="category_img">
                <Image
                  src={"/imgs/navbar/outlet.jpg"}
                  width={1000}
                  height={1000}
                  alt="Category Image"
                />
              </span>
              <span className="category_name">Outlet</span>
              <span className="category_link">
                <RiArrowRightSLine />
              </span>
            </a>
          </li>
          <NavbarLink
            iconOn={<BsPersonFillAdd />}
            iconOff={<BsPersonAdd />}
            linkName="Sign In/Register"
          />
          <NavbarLink
            iconOn={<BsHeartFill />}
            iconOff={<BsHeart />}
            linkName="Wishlist"
          />
          <NavbarLink
            iconOn={<BsPersonVcardFill />}
            iconOff={<BsPersonVcard />}
            linkName="Careers"
          />
          <NavbarLink
            iconOn={<RiCustomerServiceFill />}
            iconOff={<RiCustomerServiceLine />}
            linkName="Customer Service"
          />

          <NavbarLink
            iconOn={<BsBuildingsFill />}
            iconOff={<BsBuildings />}
            linkName="Our Company"
          />
        </ul>
      </nav>
    </section>
  );
};

export default Navbar;

function NavbarLink({ iconOn, iconOff, linkName }) {
  const [isHovered, setHovered] = useState(false);

  // Changing icon on hover
  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <li className="others_navbar_link">
      <a
        className="nav_link"
        href="#"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className="navbar_link_icon">{isHovered ? iconOn : iconOff}</span>
        <span className="navbar_link_name">{linkName}</span>
      </a>
    </li>
  );
}
