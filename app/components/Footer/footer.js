import React from "react";
import FooterInfo from "./footerInfo";
import FooterPrivacy from "./privacy";
import PayMethods from "./paymethods";
import FooterSocials from "./socials";
import FooterCopyright from "./copyright";

const Footer = () => {
  return (
    <div className="footer_grid">
      <div className="footer_information">
        <FooterInfo />
      </div>
      <div className="footer_privacy_link">
        <FooterPrivacy />
      </div>
      <div className="footer_pay_methods">
        <PayMethods />
      </div>
      <div className="footer_socials_comp">
        <FooterSocials />
      </div>
      <div className="footer_copyright_comp">
        <FooterCopyright />
      </div>
    </div>
  );
};

export default Footer;
