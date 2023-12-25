import React, { useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import Link from 'next/link';
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

const Frasers_Plus = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const handleToggleDropdown = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const dropdownData = [
    {
      title: "What is Frasers Plus?  ",
      content: (
        <>
          <p>Frasers Plus is a credit product which enables you to split the cost of your order into monthly installments</p>
          <p>You'll now see Frasers Plus as a payment option during checkout when you buy from us online. So if you'd prefer to split the cost of your order you can select Frasers Plus to apply for an account during checkout.</p>
          <p>If you want to learn more about Frasers Plus or if you need any support from the Frasers Plus team, you can find more information here - <Link href="/" style={{fontWeight:"bold",textDecoration:"underline" }}>FrasersbPlus</Link></p>
          <h1 style={{fontWeight:"bold"}}>Complaints about your Frasers Plus account</h1>
          <p>We are committed to providing you with the best experience possible but appreciate that sometimes things can go wrong. If you have a complaint about your Frasers Plus account, we recommend you firstly contact Frasers Group Financial Services who provide and manage your Frasers Plus account.</p>
          <p>We act as a credit broker and not a lender, and are an appointed representative of GAME Retail Limited who are authorised and regulated by the FCA (firm reference number: 652341).</p>
          <p>If you have a complaint about how your finance was introduced then please contact us directly and we will do everything we can to resolve the matter promptly. Contact details are below.</p>
          <p>Please note: Any enquiries or complaints regarding purchases, including deliveries, should be directed to our <Link href={"/"} style={{fontWeight:"bold", textDecoration:"underline"}}> customer services team</Link> . </p>
          <div className="help_freser_plus_acoount_comp">
          <h1 style={{fontWeight:"bold"}}>How to make a complaint about your Frasers Plus account?</h1>
          <table>
            <tbody>
                <tr>
                    <td style={{width:"50%", fontWeight:"bold"}}>
                        Complaint type
                    </td>
                    <td style={{width:"50%", fontWeight:"bold"}}>
                        Who should I contact
                    </td>
                </tr>
                <tr>
                    <td style={{width:"50%"}}>
                        <h1>My complaint is about:</h1>
                        <ul>
                            <li>The Frasers Plus Account or App,</li>
                            <li>Frasers Plus payment,</li>
                            <li>Frasers Plus terms and conditions,</li>
                            <li>Frasers Plus communications.</li>
                            <li>Frasers Plus marketing,</li>
                            <li>The actions of one of our colleagues in conversation about Frasers Plus.</li>
                        </ul>
                    </td>
                    <td style={{width:"50%"}}>
                        <ul>
                        <li><Link href={"/"} style={{fontWeight:"bold", textDecoration:"underline"}}>Frasers Group Financial Services</Link> – via:</li>
                            <li>the Frasers Plus App Chat, <br /> 
                            <Link href={"/"} style={{fontWeight:"bold"}}>Contact us form</Link></li>
                        </ul>
                    </td>
                </tr>
            </tbody>
          </table>
          <h1 style={{fontWeight:"bold",marginTop:"1rem"}}>What happens after I make a complaint?</h1>
          <li style={{listStyle:"outside", marginTop:"1rem",marginLeft:"1rem"}}>
          We take all complaints seriously and we will do everything we can to resolve them quickly.
          </li>
          <li style={{listStyle:"outside", marginTop:"1rem", marginLeft:"1rem"}}>We will acknowledge your complaint promptly and keep you updated. In most cases, you’ll receive our final response within 8 weeks from receipt of your complaint. If we’re unable to resolve your complaint within 8 weeks, we’ll explain the reason why and tell you when we expect to be able to resolve it.</li>

          <h1 style={{fontWeight:"bold"}}>What if I am unhappy with your final response?</h1>
          <p>If you are not satisfied with the outcome of your complaint or you haven’t received a response within 8 weeks of us receiving your complaint, then you have the right to refer your complaint to the Financial Ombusdman Service who offer a free and independent review service. You can contact them by (1) post: Exchange Tower, London, E14 9SR, (2) telephone: 0800 023 4567, or (3) by sending an email to complaint.info@financial-ombudsman.org.uk. You'll need to contact them within 6 months of receiving our final response email. </p>
          </div>
        </>
      ),
    },
    // Add more objects for other dropdowns
  ];

  return (
    <>
      <div className="help_folder_tital">
        <h1>Frasers Plusr</h1>
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

export default Frasers_Plus