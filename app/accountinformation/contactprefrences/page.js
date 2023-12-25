"use client";
import React, { useState } from "react";
import {
  MdOutlineEmail,
  MdOutlineKeyboardArrowDown,
  MdOutlineNotificationAdd,
} from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import Navigation from "@/app/components/Navgation/navigation";
import AccountInfoNavigation from "@/app/components/AccountInformation/navigation";
import Footer from "@/app/components/Footer/footer";

const AiManageCards = () => {
  // question blocks states
  const [isEmailYesSelected, setIsEmailYesSelected] = useState(false);
  const [isSmsYesSelected, setIsSmsYesSelected] = useState(false);
  const [isPostsYesSelected, setIsPostsYesSelected] = useState(false);

  // personal info sates
  const [selectedCity, setSelectedCity] = useState("Faisalabad");
  const [isCountriesVisible, setCountriesVisible] = useState(false);

  // question blocks functions
  const handleEmailYesClick = () => {
    setIsEmailYesSelected(true);
  };

  const handleEmailNoClick = () => {
    setIsEmailYesSelected(false);
  };

  const handleSmsYesClick = () => {
    setIsSmsYesSelected(true);
  };

  const handleSmsNoClick = () => {
    setIsSmsYesSelected(false);
  };

  const handlePostsYesClick = () => {
    setIsPostsYesSelected(true);
  };

  const handlePostsNoClick = () => {
    setIsPostsYesSelected(false);
  };

  // personal info functions
  const handleCountriesToggle = () => {
    setCountriesVisible(!isCountriesVisible);
  };

  const handleCitySelection = (city) => {
    setSelectedCity(city);
    setCountriesVisible(false);
  };

  return (
    <div className="contact_prefrences">
      <Navigation />
      <AccountInfoNavigation />
      <div className="cp_block">
        <div className="cp_detail">
          <h1>Contact Prefrences</h1>
          <p className="cp_info">
            What would you like to hear about? Select your options below and
            we'll keep you in the loop. You can select multiple options and edit
            these preferences at any time. For further information visit our{" "}
            <a href="/">Terms And Conditions</a> and{" "}
            <a href="/">Privacy Policy</a>.
          </p>
        </div>

        <div className="cp_ques_blocks">
          <div className="cp_ques_block_sms cp_ques_block">
            <div className="cp_ques_type cp_ques_block_item">
              <span className="ques_type_icon">
                <MdOutlineEmail />
              </span>
              <span className="ques_type_text">EMAILS</span>
            </div>
            <span className="cp_ques cp_ques_block_item">Receive emails?</span>

            <div className="cp_ques_ans_btn cp_ques_block_item">
              <span
                className={`cp_ques_no cp_question ${
                  !isEmailYesSelected ? "selected" : ""
                }`}
                onClick={handleEmailNoClick}
              >
                No
              </span>
              <span
                className={`cp_ques_yes cp_question ${
                  isEmailYesSelected ? "selected" : ""
                }`}
                onClick={handleEmailYesClick}
              >
                Yes
              </span>
            </div>
            <div className="cp_ans_notice cp_ques_block_item">
              <p className={`cp_ans_no ${!isEmailYesSelected ? "show" : ""}`}>
                You are not currently subscribed to the Missguided newsletter.
              </p>
              <p
                className={`cp_answer_notice_yes ${
                  isEmailYesSelected ? "show" : ""
                }`}
              >
                You are currently subscribed to the Missguided newsletter.
              </p>
            </div>
          </div>
          <div className="cp_ques_block_sms cp_ques_block">
            <div className="cp_ques_type cp_ques_block_item">
              <span className="ques_type_icon">
                <AiOutlineMessage />
              </span>
              <span className="ques_type_text">SMS</span>
            </div>
            <span className="cp_ques cp_ques_block_item">Receive sms?</span>

            <div className="cp_ques_ans_btn cp_ques_block_item">
              <span
                className={`cp_ques_no cp_question ${
                  !isSmsYesSelected ? "selected" : ""
                }`}
                onClick={handleSmsNoClick}
              >
                No
              </span>
              <span
                className={`cp_ques_yes cp_question ${
                  isSmsYesSelected ? "selected" : ""
                }`}
                onClick={handleSmsYesClick}
              >
                Yes
              </span>
            </div>
            <div className="cp_ans_notice cp_ques_block_item">
              <p className={`cp_ans_no ${!isSmsYesSelected ? "show" : ""}`}>
                You are not currently subscribed to the Missguided newsletter.
              </p>
              <p
                className={`cp_answer_notice_yes ${
                  isSmsYesSelected ? "show" : ""
                }`}
              >
                You are currently subscribed to the Missguided newsletter.
              </p>
            </div>
          </div>
          <div className="cp_ques_block_sms cp_ques_block">
            <div className="cp_ques_type cp_ques_block_item">
              <span className="ques_type_icon">
                <MdOutlineNotificationAdd />
              </span>
              <span className="ques_type_text">POST</span>
            </div>
            <span className="cp_ques cp_ques_block_item">Receive posts?</span>

            <div className="cp_ques_ans_btn cp_ques_block_item">
              <span
                className={`cp_ques_no cp_question ${
                  !isPostsYesSelected ? "selected" : ""
                }`}
                onClick={handlePostsNoClick}
              >
                No
              </span>
              <span
                className={`cp_ques_yes cp_question ${
                  isPostsYesSelected ? "selected" : ""
                }`}
                onClick={handlePostsYesClick}
              >
                Yes
              </span>
            </div>
            <div className="cp_ans_notice cp_ques_block_item">
              <p className={`cp_ans_no ${!isPostsYesSelected ? "show" : ""}`}>
                You are not currently subscribed to the Missguided newsletter.
              </p>
              <p
                className={`cp_answer_notice_yes ${
                  isPostsYesSelected ? "show" : ""
                }`}
              >
                You are currently subscribed to the Missguided newsletter.
              </p>
            </div>
          </div>
        </div>

        <div className="cp_personal_info">
          <div className="cppi_living">
            <h2>Where do you live?</h2>
            <h3>City</h3>
            <div
              className="cppi_city_selection"
              onClick={handleCountriesToggle}
            >
              <span className="cppi_selected_city">{selectedCity}</span>
              <span className="cppi_city_selection_arrow">
                <MdOutlineKeyboardArrowDown />
              </span>

              <ul
                className={`cppi_city_selection_list ${
                  isCountriesVisible ? "cities_visible" : "cities_hidden"
                }`}
              >
                <li
                  className="cppi_city"
                  onClick={() => handleCitySelection("Karachi")}
                >
                  Karachi
                </li>
                <li
                  className="cppi_city"
                  onClick={() => handleCitySelection("Lahore")}
                >
                  Lahore
                </li>
                <li
                  className="cppi_city"
                  onClick={() => handleCitySelection("Peshawar")}
                >
                  Peshawar
                </li>
                <li
                  className="cppi_city"
                  onClick={() => handleCitySelection("Dera ghazi khan")}
                >
                  Dera ghazi khan
                </li>
                <li
                  className="cppi_city"
                  onClick={() => handleCitySelection("Multan")}
                >
                  Multan
                </li>
                <li
                  className="cppi_city"
                  onClick={() => handleCitySelection("Queta")}
                >
                  Queta
                </li>
                <li
                  className="cppi_city"
                  onClick={() => handleCitySelection("Islamabad")}
                >
                  Islamabad
                </li>
              </ul>
            </div>
          </div>
          <div className="cppi_birthday">
            <h2>What is your birthday?</h2>
            <p>To send you treat</p>

            <div className="cppi_birthday_age_selection">
              <div className="cppi_day_selection">
                <span>Day</span>
                <input type="text" className="cppi_day" defaultValue="27" />
              </div>
              <div className="cppi_month_selection">
                <span>Month</span>
                <input type="text" className="cppi_month" defaultValue="3" />
              </div>
            </div>
          </div>
        </div>
        <button className="cp_save_btn">Save changes</button>
        <p className="edt_per_notice">
          This website is secure and your personal details are protected. For
          more information, view our <a href="/">Terms & Conditions</a> and our{" "}
          <a href="/">Security, Privacy & Cookie Policy.</a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AiManageCards;
