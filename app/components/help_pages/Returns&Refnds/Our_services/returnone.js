import React, { useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import { FaBoxArchive } from "react-icons/fa6";
import { IoExit } from "react-icons/io5";
import { SiGooglemessages } from "react-icons/si";
import { AiFillPoundCircle } from "react-icons/ai";
const Dropdown = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="help_dropdown_container">
      <button type="button" className="help_dropdown-trigger" onClick={onToggle}>
        {title}
        <span className="help_dropdown-trigger-icon">{isOpen ? <GrSubtractCircle style={{ fontSize: "2rem" }} /> : <IoIosAddCircleOutline style={{ fontSize: "2.1rem" }} />}</span>
      </button>
      {isOpen && <div className="help_dropdown-content">{children}</div>}
    </div>
  );
};

const Return_One = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleToggleDropdown = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const dropdownData = [
    {
      title: "Extended Christmas Returns Policy",
      content: (
        <>
          <p>We are happy to offer an exchange or credit note for items purchased after Tuesday 31st October 2023 returned unworn and in perfect saleable condition within its original packaging until Sunday 7th January 2024. Refunds will only be offered in accordance with your statutory rights (which remain unaffected). Please retain the receipt as proof of purchase.</p>
        </>
      ),
    },
    {
      title: "Return Online - UK",
      content: (
        <>
          <p>You can now return your online Missguided order in a few easy steps. You have 28 days to return your order from the date it’s delivered. Exclusions apply, please see our Returns Policy below for more details.</p>
          <p>If your item is faulty, incorrect or exceeds 10kg in weight then please contact our Customer Service team ahead of making a return.</p>
          <p>Unfortunately, we are unable to accept returns of online orders in stores, including click & collect orders.</p>
          <div className="help_return_btn">
            <a href="">START A RETURN</a>
          </div>
          <div className="help_return_btn_info">
            <div className="help_return_btn_info_des">
              <div className='help_return_btn_info_des_icon'>
                <FaBoxArchive style={{ fontSize: "3rem" }} />
              </div>
              <div className='help_return_btn_info_des_con'>
                <p>Securely repack your items.</p>
              </div>
            </div>
            <div className="help_return_btn_info_des">
              <div className='help_return_btn_info_des_icon'>
                <IoExit style={{ fontSize: "3.5rem" }} />
              </div>
              <div className='help_return_btn_info_des_con'>
                <p>
                  Login to our returns portal using your order number and email address. Select your preferred tracked returns service. We have print at home, paperless and collection options available.
                </p>
              </div>
            </div>
            <div className="help_return_btn_info_des">
              <div className='help_return_btn_info_des_icon'>
                <SiGooglemessages style={{ fontSize: "3rem" }} />
              </div>
              <div className='help_return_btn_info_des_con'>
                <p>
                  You’ll be emailed a shipping label or QR code to scan at your chosen drop-off point or collection point.
                </p>
              </div>
            </div>
            <div className="help_return_btn_info_des">
              <div className='help_return_btn_info_des_icon'>
                <AiFillPoundCircle style={{ fontSize: "3rem" }} />
              </div>
              <div className='help_return_btn_info_des_con'>
                <p>
                  Keep an eye out for updates and tracking. You’ll get an email once we receive your returned item. Most returns are processed in a few days, but the money can take up to 14 days to appear back in your account.
                </p>
              </div>
            </div>
          </div>

          <div className="help_goottoknow_sec">
            <div className="help_goottoknow_sec_content">
              <div className="help_goottoknow_sec_title">
                <h1>Good to know...</h1>
              </div>
              <div className="help_goottoknow_sec_des">
                <ul>
                  <li>By choosing a paid service through our returns portal you will be provided with a fully tracked return service back to our warehouse.</li>
                  <li>Please keep your orders separate, as returning more than 1 order in 1 parcel may delay your refund.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="help_return_policyies">
            <h1>RETURNS POLICY OVERVIEW</h1>
            <ul>
              <li>Items must not be used, worn or washed</li>
              <li>Items must be in original packaging and all tags attached</li>
              <li>Personalised items will not be accepted unless the text is incorrect, or the item is faulty</li>
              <li>Underwear, swimwear (unless the hygiene sticker is still in place) and pierced jewellery cannot be returned for hygiene reasons</li>
              <li>Items which deteriorate or expire rapidly, magazines, items that are sealed for hygiene reasons, computer games with the seal broken or any items that have been inseparably mixed after delivery, cannot be returned</li>
            </ul>

          </div>
        </>
      ),
    },
    {
      title: "Return Online - Non UK",
      content: (
        <>
          <p>Return your online order in a few easy steps. You have 28 days to return your order from the date it's delivered. Exclusions apply, please see our Returns Policy below for more details.</p>
          <p>If your item is faulty, incorrect or exceeds 10kg in weight, please contact our Customer Service team ahead of making a return.</p>
          <p>If you've had items delivered to you from Adidas or Reebok, these should be returned directly to the supplier. A pre-paid returns label will be included in your order, please repackage your items and return them using this label. If the label is missing, please contact our Customer Services team. These items cannot be returned to store.</p>
          <div className="help_goottoknow_sec">
            <div className="help_goottoknow_sec_content">
              <div className="help_goottoknow_sec_title">
                <h1>Good to know...</h1>
              </div>
              <div className="help_goottoknow_sec_des">
                <ul>
                  <li>By choosing a paid service through our returns portal you will be provided with a fully tracked return service back to our warehouse.</li>
                  <li>Please keep your orders separate, as returning more than 1 order in 1 parcel may delay your refund.</li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="help_return_policyies">
            <h1>RETURNS POLICY OVERVIEW</h1>
            <ul>
              <li>Items must not be used, worn or washed</li>
              <li>Items must be in original packaging and all tags attached</li>
              <li>Personalised items will not be accepted unless the text is incorrect, or the item is faulty</li>
              <li>Underwear, swimwear (unless the hygiene sticker is still in place) and pierced jewellery cannot be returned for hygiene reasons</li>
              <li>Items which deteriorate or expire rapidly, magazines, items that are sealed for hygiene reasons, computer games with the seal broken or any items that have been inseparably mixed after delivery, cannot be returned</li>
            </ul>
          </div>
          </>
          ),
    },
          {
            title: "Can I exchange an online order?",
          content: (
          <>
            <p>In the event you change your mind, you can return an online item for a full refund only. We cannot exchange goods purchased online.  </p>

          </>
          ),
    },
          {
            title: "Can I return more than one order in the same parcel?",
          content: (
          <>
            <p>Please return each order separately and include any packaging that forms part of the goods with your valid proof of purchase.</p>
          </>
          ),
    },
          // Add more objects for other dropdowns
          ];

          return (
          <>
            <div className="help_folder_tital">
              <h1>Complete Order</h1>
            </div>
            <div className="help_dropdown_containers">
              {dropdownData.map((data, index) => (
                <Dropdown
                  key={index}
                  title={data.title}
                  isOpen={openDropdownIndex === index}
                  onToggle={() => handleToggleDropdown(index)}
                >
                  {data.content}
                </Dropdown>
              ))}
            </div>
          </>
          );
};

          export default Return_One;
