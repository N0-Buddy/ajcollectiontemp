"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const FooterInfo = () => {
  const [customerServiceDropdownVisible, setCustomerServiceDropdownVisible] =
    useState(false);
  const [informationDropdownVisible, setInformationDropdownVisible] =
    useState(false);
  const [ourCompanyDropdownVisible, setOurCompanyDropdownVisible] =
    useState(false);

  const toggleCustomerServiceDropdown = () => {
    setCustomerServiceDropdownVisible(!customerServiceDropdownVisible);
    setInformationDropdownVisible(false); // Close the other dropdowns
    setOurCompanyDropdownVisible(false);
  };

  const toggleInformationDropdown = () => {
    setInformationDropdownVisible(!informationDropdownVisible);
    setCustomerServiceDropdownVisible(false); // Close the other dropdowns
    setOurCompanyDropdownVisible(false);
  };

  const toggleOurCompanyDropdown = () => {
    setOurCompanyDropdownVisible(!ourCompanyDropdownVisible);
    setCustomerServiceDropdownVisible(false); // Close the other dropdowns
    setInformationDropdownVisible(false);
  };

  return (
    <div className="footer_info">
      <div className="f_info customer_service">
        <div
          className="f_info_show_dropdown"
          onClick={toggleCustomerServiceDropdown}
          style={{ cursor: "pointer" }}
        >
          <span className="f_info_title">Customer Service</span>
          <span
            className="f_info_arrow"
            style={{
              transform: customerServiceDropdownVisible
                ? "rotate(180deg)"
                : "rotate(0)",
            }}
          >
            <IoIosArrowDown />
          </span>
        </div>
        <div
          className={`f_info_links ${
            customerServiceDropdownVisible ? "show" : ""
          }`}
        >
          <a href="" className="f_info_link">
            FAQ&apos;s
          </a>
          <a href="" className="f_info_link">
            Delivery
          </a>
          <a href="" className="f_info_link">
            Refunds &#38; Returns
          </a>
          <a href="" className="f_info_link">
            Customer services
          </a>
          <a href="" className="f_info_link">
            Cookie prefrences
          </a>
        </div>
      </div>
      <div className="f_info information">
        <div
          className="f_info_show_dropdown"
          onClick={toggleInformationDropdown}
          style={{ cursor: "pointer" }}
        >
          <span className="f_info_title">Information</span>
          <span
            className="f_info_arrow"
            style={{
              transform: informationDropdownVisible
                ? "rotate(180deg)"
                : "rotate(0)",
            }}
          >
            <IoIosArrowDown />
          </span>
        </div>
        <div
          className={`f_info_links ${informationDropdownVisible ? "show" : ""}`}
        >
          <a href="" className="f_info_link">
            My account
          </a>
          <a href="" className="f_info_link">
            Gift cards
          </a>
          <a href="" className="f_info_link">
            Track orders
          </a>
          <a href="" className="f_info_link">
            Wish list
          </a>
          <a href="" className="f_info_link">
            Student discounts
          </a>
          <a href="" className="f_info_link">
            Sitemap
          </a>
          {/* Other links */}
        </div>
      </div>
      <div className="f_info our_company">
        <div
          className="f_info_show_dropdown"
          onClick={toggleOurCompanyDropdown}
          style={{ cursor: "pointer" }}
        >
          <span className="f_info_title">Our Company</span>
          <span
            className="f_info_arrow"
            style={{
              transform: ourCompanyDropdownVisible
                ? "rotate(180deg)"
                : "rotate(0)",
            }}
          >
            <IoIosArrowDown />
          </span>
        </div>
        <div
          className={`f_info_links ${ourCompanyDropdownVisible ? "show" : ""}`}
        >
          <a href="" className="f_info_link">
            Terms &#38; Conditions
          </a>
          <a href="" className="f_info_link">
            Promotions terms
          </a>
          <a href="" className="f_info_link">
            Careers
          </a>
          {/* Other links */}
        </div>
      </div>
    </div>
  );
};

export default FooterInfo;
