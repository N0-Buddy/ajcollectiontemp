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

const Refunds = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleToggleDropdown = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const dropdownData = [
    {
      title: "How will I receive a refund?",
      content: (
        <>
          <p>We try and process all returns as quickly as possible for you to get your refund. You should receive a confirmation email within a week of having returned the item but it takes longer sometimes.</p>
          <p>Any refunds will be refunded to the same payment method you used when you placed the order.</p>
          <p>If your order was paid part or in full by a gift card, the refund will be issued as a gift card or evoucher up to the value of the gift card you used.</p>
         <p style={{marginTop:"3rem"}}>
         We try and process all returns as quickly as possible for you to get your refund. You should receive a confirmation email within a week of having returned the item but it takes longer sometimes.
         </p>
         <p>Any refunds will be refunded to the same payment method you used when you placed the order.</p>
         <p>If your order was paid part or in full by a gift card, the refund will be issued as a gift card or evoucher up to the value of the gift card you used. At which point, any funds owed that are remaining will be refunded onto the other payment methods used.</p>
        </>
      ),
    },
    {
      title: "Why have I been refunded for an item instead of it being exchanged? ",
      content: (
        <>
          <p>When you send back an item for an exchange it depends on stock availability at the time. If we don't have the item you want to exchange, we will process a refund instead.</p>
          <p>You should receive an email with the details of your return and if we are providing you with an exchange or a refund.</p>
        </>
      ),
    },
    {
      title: "When will I receive a refund?",
      content: (
        <>
          <p>We try and process all returns as quickly as possible for you to get your refund, but please give us 7 days to process your return. You should receive a confirmation email when this is done. After this, it may take up to another 7 days for the money to get back to your payment method, as this depends on the banks' processes.</p>
          <p>At certain times of the year, such as Christmas and public holidays, the processing time may be longer.</p>
        </>
      ),
    },
    {
      title: "I can't see a refund on my bank statement",
      content: (
        <>
          <p>Please allow 7 days for the refund to appear in your bank account. </p>
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

export default Refunds;
