import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaRobot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Contact = () => {
  return (
    <>
    <div className="help_contact_head">
        Contact Us
    </div>
<div className="help_contact_cards">
    <div className='help_contact_sec_maincard'>
      <FaRobot style={{ fontSize: '35px' }} />
      <h2 className='help_contact_sec_headstyle'>Webchat</h2>
      <p className='help_contact_sec_txtstyle'>Our Webchat is here to assist you.</p>
      <button
      className='help_contact_sec_btn'
      >
        START CHAT
      </button>
    </div>






    <div className='help_contact_sec_maincard'>
      <MdEmail style={{ fontSize: '35px' }} />
      <h2 className='help_contact_sec_headstyle'>Email</h2>
      <p className='help_contact_sec_txtstyle'>We might take a day or two to answer your email.</p>
      <button
      className='help_contact_sec_btn'
      >
        SEND EMAIL
      </button>
    </div>


    <div className='help_contact_sec_maincard'>
      <FaFacebook style={{ fontSize: '35px' }} />
      <h2 className='help_contact_sec_headstyle'>Facebook</h2>
      <p className='help_contact_sec_txtstyle'>Message us on Facebook. We will reply as soon as possible.</p>
      <button
      className='help_contact_sec_btn'
      >
        FACEBOOK
      </button>
    </div>


    <div className='help_contact_sec_maincard'>
      <FaTwitter style={{ fontSize: '35px' }} />
      <h2 className='help_contact_sec_headstyle'>Twitter</h2>
      <p className='help_contact_sec_txtstyle'>Tweet us, and we will do our best to assist.</p>
      <button
      className='help_contact_sec_btn'
      >
        TWITTER
      </button>
    </div>

    </div>
    
    </>
  )
}
export default Contact