"use client";
import React, { useState } from "react";
import WebTitle from "./webTitle";
import Brand from "./brand";
import Profile from "./profile";
import Favourites from "./favourites";
import Cart from "./cart";
import Navbar from "./navbar";
import Searchbar from "./searchbar";
import Darkmode from "./darkmode";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="web_title_div">
        <WebTitle />
      </div>
      <div className="navbar_div">
        <Navbar />
      </div>
      <div className="brand_div">
        <Brand />
      </div>
      <div className="darkmode_div">
        <Darkmode />
      </div>
      <div className="profile_div">
        <Profile />
      </div>
      <div className="favourties_div">
        <Favourites />
      </div>
      <div className="cart_div">
        <Cart />
      </div>
      <div className="searchbar_div">
        <Searchbar />
      </div>
    </div>
  );
};

export default Navigation;
