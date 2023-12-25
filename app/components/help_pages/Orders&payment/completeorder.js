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

const CompleteOrder = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleToggleDropdown = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const dropdownData = [
    {
      title: "Wrong/Faulty item recevied",
      content: (
        <>
          <p>We’re sorry to hear there are issues with your order.</p>
          <p>Please use our contact form and attach images of the wrong/faulty items, and we'll investigate this for you.</p>
          <p>Thank you for your patience while we put this right.</p>
        </>
      ),
    },
    {
      title: "I'm missing item(s) from my order",
      content: (
        <>
          <p>We’re sorry there’s items missing in your order.</p>
          <p>Before contacting our customer service team, please make sure to check your emails as we will notify you if any items have either been dispatched separately (if your order contains more than one item) or an item was out of stock when packing.</p>
          <p>If you look at your email and notice that there is a “0” in the quantity column on your invoice, this means that we did not have the stock of the item to send to you at the time of shipping.</p>
          <p>If the delivery note says an item should be in your parcel but it isn't, please get in touch with us. Be sure to include any information about which item(s) you believe are missing, including what products you have already received from your order.</p>
        </>
      ),
    },
    {
      title: "Why has my order/item(s) been cancelled?",
      content: (
        <>
          <p>Sorry your order or item(s) have been cancelled.</p>
          <p>If the item(s) you've ordered are out of stock at the time of packing your order, we need to cancel it.</p>
          <p>An order will also be cancelled if the billing address details don't match the details your bank has on record.</p>
          <p>We send an email out to confirm the cancellation and you have not been charged.</p>
        </>
      ),
    },
    {
      title: "My order has been cancelled but it appears that I have still been charged",
      content: (
        <>
          <p>If your order has been cancelled, you will be refunded to your original method of payment within 3-5 days. </p>
          <p>The time might depend on your banks processes. </p>
        </>
      ),
    },
    {
      title: "I haven't received my gift card",
      content: (
        <>
          <p>Please check your or the recipient’s junk folder if you haven’t received your gift card or eVoucher.</p>
          <p>If you still can’t find it, please contact us and we will be happy to help.</p>
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

export default CompleteOrder;
