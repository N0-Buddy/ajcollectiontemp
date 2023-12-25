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

const Technical_issue = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleToggleDropdown = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const dropdownData = [
    {
      title: "Add to safe sender list",
      content: (
        <>
          <p>Register an account with us to get the benefit of having your orders and order history in one place and you can take advantage of our expedited check-out system.</p>
          <p>Sometimes you may run into trouble and not receive account emails that we are sending to you. That’s problematic because we communicate shipping notifications, billing errors and order updates via email. By adding our email address to your safe sender list, you’ll ensure that you receive our emails into your inbox and reduce the chances of having problems receiving emails from us in the future.</p>
          <p>Each internet service provider (ISP) has spam filters which keep both white-listed addresses and blacklisted addresses. If an address is on a person’s whitelist then mail from the specific sender will be allowed.</p>
          <p>To ensure that you receive our emails please follow the instructions below to add our email addresses to your address book for your specific ISP.</p>
          <h1 style={{fontWeight:"bold",margin:"1rem 0"}}>Hotmail</h1>
            <p>1. Open your inbox</p>
            <p>1. Click "Options" (at the top right-hand corner of the screen) then "More Options" at the bottom of the dropdown list</p>
            <p>3. Select "Safe and Blocked senders" then click "Safe Senders"</p>
            <p>Copy and paste our email address into the box provided and click "add to list"</p>
            <p>4. Our email address has been successfully added to your safe sender list</p>
            <p>5. A dialogue box may appear with the words "The sender of the selected message has been added to your safe senders list". Click OK to confirm</p>
            <p>6. The email address has now been entered into your Outlook contacts list</p>
            
            <h1 style={{fontWeight:"bold",margin:"1rem 0"}}>Yahoo!</h1>
            <p>1. Open your inbox.</p>
            <p>Navigate to an email from us and click the "Add" button next to our email address</p>
            <p>3. If not there already, copy and paste our email address into the email field and click "Save"</p>
            <p>4. A dialogue box may appear with the words "Contact was Added" beside a green checkmark. Click “OK” to close the dialogue box</p>
            <p>5. The email address has now been entered into your Yahoo! address book.</p>
            <h1 style={{fontWeight:"bold",margin:"1rem 0"}}>Microsoft Office Outlook 2007</h1>
            <p>1. Open your inbox</p>
            <p>2. Open the “Tools” menu and click "Options"</p>
            <p>3. On the “Preferences” tab under “Email” click “Junk Email”</p>
            <p>4. Click the “Safe Senders” or “Safe Recipients” tab and select “Add”</p>
            <p>5. In the “Enter an e-mail address or Internet domain name to be added to the list” box, copy and paste our email address and click OK</p>
            <p>6. The email address has now been added to your contacts list.</p>
            <h1 style={{fontWeight:"bold",margin:"1rem 0"}}>AOL Mail</h1>
            <p>1. Open your inbox</p>
            <p>2. Navigate to one of our emails to you. Hover over our email address in the “From” section to open up a small dropdown</p>
            <p>3. Click “Add contact” to confirm</p>
            <p>4. The email address has now been added to your Contacts list</p>
            <h1 style={{fontWeight:"bold",margin:"1rem 0"}}>Google Mail</h1>
            <p>1. Open your inbox</p>
            <p>2. Navigate to an email from us</p>
            <p>3. Click on the "More options" link next to the date</p>
            <p>4. Click on "Add sender to Contacts list" in the options list</p>
            <p>5. The email address has now been entered into your Gmail contacts list.</p>
        </>

      ),
    },
    {
      title: "I’m having problems signing in. What can I do?",
      content: (
        <>
          <p>If you have an account with us, please make sure you are using the same email address and password as you used when setting your account up.</p>
          <p>When you create your account you can opt in to receive our newsletters, keeping you up to date on the latest trends, special offers and promotions.</p>
          <p>If you can't remember your password, you can use the 'forgotten password' link on the sign-in page to reset your password. Click <Link href={""} style={{fontWeight:"bold", textDecoration:"underline"}}>here </Link>to get to the sign-in page, and then follow the steps.</p>
          <p>If you don't have an account you can set one up  <Link href={""} style={{fontWeight:"bold", textDecoration:"underline"}}> here </Link>. This means you have all your order history and details in one place. </p>
          <p>If you're still having problems signing in to your account, please contact us and we'll be happy to help.</p>
        </>
      ),
    },
    {
      title: "I'm experiencing issues using the website",
      content: (
        <>
          <p>We're sorry to hear you are experiencing problems with our website, please see below for some suggestions that should help: </p>
          <ul style={{margin:"1rem 0", marginLeft:"1rem"}}>
            <li style={{listStyle:"outside"}}>Try opening a new browser session if this doesn't work open an incognito window (Google) or New InPrivate window (Edge)</li>
            <li style={{listStyle:"outside"}}>Clear your cache and cookies</li>
            <li style={{listStyle:"outside"}}>Deactivate any plugins</li>
            <li style={{listStyle:"outside"}}>Check your HTTPS settings</li>
            <li style={{listStyle:"outside"}}>Clear your temporary files</li>
            <li style={{listStyle:"outside"}}>Try on an alternative device such as a mobile phone, desktop PC, laptop, or tablet. </li>
          </ul>
          <p>If you've tried all the above and are still struggling, please get in touch with our Customer Services team and we'll get this sorted for you. When contacting us it may help to provide screenshots showing the issue which you need more help with so we can better help you.</p>
        </>
      ),
    },
    {
      title: "I'm experiencing issues with the App",
      content: (
        <>
          <p>We're sorry to hear you are experiencing problems with our App. Please check that you're using the most up-to-date version of the app. </p>
          <p>If you find that you're still experiencing technical difficulties, we'd recommend you try deleting the app and reinstalling it. This tends to resolve most customer issues. </p>
          <p>If the problem persists, please get in touch with our Customers Services team. We'd need to know more about what device you're using, and what errors you're seeing so we can flag the issue with our support teams. When contacting us it may help to provide screenshots showing the issue which you need more help with so we can better help you.</p>
        </>
      ),
    },
    {
      title: "How can I change details and marketing preferences?",
      content: (
        <>
          <p>You can see and manage most of your details when you login.</p>
          <p>Just head over to <h1 style={{fontWeight:"bold"}}>My Account</h1> to manage your account and password, </p>
          <p>Under <h1 style={{fontWeight:"bold"}}>Contact Preferences </h1>for and you'll be able to see your current preferences and make changes to them online.</p>
          <p>The <h1 style={{fontWeight:"bold"}}>Manage Cards</h1> section allows you to update payment details.</p>
        </>
      ),
    },

    // Add more objects for other dropdowns
  ];

  return (
    <>
      <div className="help_folder_tital">
        <h1>Technical Issues</h1>
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

export default Technical_issue;
