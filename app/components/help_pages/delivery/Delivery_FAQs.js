import React, { useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
const Dropdown = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="help_dropdown_container">
      <button type="button" className="help_dropdown-trigger" onClick={onToggle}>
        {title}
        <span className="help_dropdown-trigger-icon">{isOpen ? <GrSubtractCircle style={{fontSize:"2rem"}}/> : <IoIosAddCircleOutline style={{fontSize:"2.1rem"}}/> }</span>
      </button>
      {isOpen && <div className="help_dropdown-content">{children}</div>}
    </div>
  );
};

const Delivery_FAQs = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleToggleDropdown = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const dropdownData = [
    {
      title: "Where is my order?",
      content: (
        <>
          <p>If you haven't got your order yet, it might be because it is still out for delivery. Perhaps the courier have tried to deliver but you weren't in? They will try up to 3 times.</p>
          <p>Standard Delivery takes three (3) to seven (7) days.</p>
          <p>Next Day Delivery for the next day if you order before 8pm (excludes Public / Bank holidays).</p>
          <p>You can track your order with the unique tracking number you got in our dispatch email. If you can't find this email, you can get the tracking reference number in your order history.</p>
        </>
      ),
    },
    // Add more objects for other dropdowns
  ];

  return (
    <>
      <div className="help_folder_tital">
        <h1>Delivery FAQs</h1>
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

export default Delivery_FAQs;
