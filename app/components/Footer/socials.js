import React from "react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const FooterSocials = () => {
  return (
    <div className="footer_socials">
      <div className="footer_social_link">
        <a href="https://www.facebook.com/">
          <FaFacebookF />
        </a>
      </div>
      <div className="footer_social_link">
        <a href="https://twitter.com/">
          <RiTwitterXFill />
        </a>
      </div>
      <div className="footer_social_link">
        <a href="https://www.instagram.com/">
          <FaInstagram />
        </a>
      </div>
      <div className="footer_social_link">
        <a href="https://www.tiktok.com/">
          <FaTiktok />
        </a>
      </div>
    </div>
  );
};

export default FooterSocials;
