"use client";
import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

const AllCategories = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // toggle in or out dropdon
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // handling outside click on dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <div className="all_categories" ref={dropdownRef}>
      <div
        className={`all_categories_show ${isDropdownOpen ? "rotate" : ""}`}
        onClick={toggleDropdown}
      >
        <IoIosArrowDown />
      </div>
      <div className={`all_categories_links ${isDropdownOpen ? "" : "hide"}`}>
        <h1 className="all_categories_heading">All Categories</h1>
        <span className="all_categories_underline"></span>
        <a href="" className="all_category_link">
          Bracelets
        </a>
        <a href="" className="all_category_link">
          Glasses
        </a>
        <a href="" className="all_category_link">
          Jeans
        </a>
        <a href="" className="all_category_link">
          Trousers
        </a>
        <a href="" className="all_category_link">
          Shoes
        </a>
        <a href="" className="all_category_link">
          Watches
        </a>
      </div>
    </div>
  );
};

export default AllCategories;
