import React, { useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import Link from 'next/link';
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

const Gettind_start = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleToggleDropdown = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const dropdownData = [
    {
      title: "How do I register for an account?",
      content: (
        <>
          <p>Register an account with us to get the benefit of having your orders and order history in one place and you can take advantage of our expedited check-out system.</p>
          <p>When you create your account you can opt in to receive our newsletters, keeping you up to date on the latest trends, special offers and promotions.</p>
          <p>To register with your active, valid email address, please click <Link href={""} style={{fontWeight:"bold", textDecoration:"underline"}}> here</Link>.</p>
          <p>Once you have followed the steps of setting up your account you can update your details using the  <Link href={""} style={{fontWeight:"bold", textDecoration:"underline"}}>My Account </Link>section of our site. Here you can manage your addresses, payment cards and keep an eye on your orders.</p>
        </>
      ),
    },
    {
      title: "How do I create or change my password",
      content: (
        <>
          <p>Register an account with us to get the benefit of having your orders and order history in one place and you can take advantage of our expedited check-out system.</p>
          <p>When you create your account you can opt in to receive our newsletters, keeping you up to date on the latest trends, special offers and promotions.</p>
          <p>To register with your active, valid email address, please click  <Link href={""} style={{fontWeight:"bold", textDecoration:"underline"}}>here </Link>. You will be asked to create a password for your account.</p>
          <p>If you already have an account with us but can't remember your password, you can use the  <Link href={""} style={{fontWeight:"bold", textDecoration:"underline"}}>forgotten password </Link>link to re-set it by following the steps.</p>
          You can manage your account and your password in the <Link href={""} style={{fontWeight:"bold", textDecoration:"underline"}}> My Account </Link>section.
        </>
      ),
    },
    {
      title: "How do I create or change my email address?",
      content: (
        <>
          <p>For our customers’ security we don’t allow change of email address.</p>
          <p>If you need to use an alternative email address, we’d ask you to create a new account.</p>
        </>
      ),
    },
    {
      title: "How do I buy online?",
      content: (
        <>
          <p>You can search for items in a few different ways, to then add them to your shopping cart.. </p>
          <p>There's a search function at the top left of the website, look for the magnifying glass icon, but you can also look through our different categories for inspiration. </p>
          <p>As you search your way through, you will see the different items found in that search or under that category for you to make your selection around colour, size and quantity before adding it to your basket.</p>
          <p>When you're happy with your selection you can proceed to checkout where you will select your preferred delivery option, make your payment and look forward to receiving your items.</p>
        </>
      ),
    },
    {
      title: "How do I pre-order an item?",
      content: (
        <>
          <p>Sometimes we offer special products to pre-order, which gives you the ability to order these items before their official launch or before stock becomes available for everyone.</p>
          <p>The pre-order item, along with any other items you have selected for that order, will be processed for shipment once the stock becomes available. This means the whole order is only shipped once the pre-order item is available.</p>
          <p>We show dates on the site for the expected available date for our pre-order items, but they can change and should be taken as a guide. We will keep you updated as soon as we send it out.</p>
          <p>When you place an order with us, your bank will put an authorisation hold of the amount against the order. This will show as a pending amount on your statement.</p>
          <p>We will only charge you once the order has dispatched.</p>
        </>
      ),
    },
    {
      title: "Unsubscribe/Delete Account",
      content: (
        <>
          <p>Having an account is free and enables you to shop easily without having to enter your details each time. It also gives you an easy overview of your order history.</p>
          <p>If you want to deactivate your account, please contact us confirming your registered email address and name on the account. </p>
          <p>Once we have cancelled your account you will receive an email confirmation.</p>
        </>
      ),
    },
    // Add more objects for other dropdowns
  ];

  return (
    <>
      <div className="help_folder_tital">
        <h1>Getting Started</h1>
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

export default Gettind_start;
