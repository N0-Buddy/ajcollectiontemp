"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

const AccountInfoNavigation = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <nav className="ai_navbar">
      <div className="ai_nav_menu" onClick={handleDropdownToggle}>
        <div className="ai_nav_show">
          <h4>Account Menu</h4>
          <span
            className="ai_nav_show_arrow"
            style={{
              transform: isDropdownVisible ? "rotate(180deg)" : "rotate(0)",
            }}
          >
            <IoIosArrowDown />
          </span>
        </div>
        <ul
          className={`ai_nav_dropdown ${
            isDropdownVisible ? "dropdown-visible" : "dropdown-hidden"
          }`}
        >
          <li>
            <Link href={"/accountinformation/editpersonalization"}>
              Account details
            </Link>
          </li>
          <li>
            <Link href={"/accountinformation/changepassword"}>
              Change password
            </Link>
          </li>
          <li>
            <Link href={"/accountinformation/manageadressbook"}>
              Adress book
            </Link>
          </li>
          <li>
            <Link href={"/accountinformation/orderhistory"}>My orders</Link>
          </li>
          <li>
            <Link href={"/accountinformation/managecards"}>My cards</Link>
          </li>
          <li>
            <Link href={"/accountinformation/wishlist"}>Wish list</Link>
          </li>
          <li>
            <Link href={"/accountinformation/contactprefrences"}>
              My prefrences
            </Link>
          </li>
          <li className="ai_nav_sign_out">
            <a href="/">Sign Out</a>
          </li>
        </ul>
        <ul className="ai_nav">
          <li>
            <Link href={"/accountinformation/editpersonalization"}>
              Account details
            </Link>
          </li>
          <li>
            <Link href={"/accountinformation/changepassword"}>
              Change password
            </Link>
          </li>
          <li>
            <Link href={"/accountinformation/manageadressbook"}>
              Adress book
            </Link>
          </li>
          <li>
            <Link href={"/accountinformation/orderhistory"}>My orders</Link>
          </li>
          <li>
            <Link href={"/accountinformation/managecards"}>My cards</Link>
          </li>
          <li>
            <Link href="/accountinformation/wishlist">Wish list</Link>
          </li>
          <li>
            <Link href={"/accountinformation/contactprefrences"}>
              My prefrences
            </Link>
          </li>
          <li className="ai_nav_sign_out">
            <a href="/">Sign Out</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AccountInfoNavigation;
