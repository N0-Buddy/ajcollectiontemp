import AccountInfoNavigation from "@/app/components/AccountInformation/navigation";
import Footer from "@/app/components/Footer/footer";
import Navigation from "@/app/components/Navgation/navigation";
import React from "react";

const AiManageCards = () => {
  return (
    <div className="manage_cards">
      <Navigation />
      <AccountInfoNavigation />
      <div className="manage_cards_block">
        <div className="mc_detail mc_block">
          <h1>Manage Cards</h1>
          <p className="ab_info">
            Below are all the payment methods that you have listed on your
            account..
          </p>
        </div>
        <div className="mc_cards mc_block">No cards found.</div>
        <p className="mc_notice">
          This website is secure and your personal details are protected. For
          more information, view our <a href="/">Terms & Conditions</a> and our{" "}
          <a href="/">Security, Privacy & Cookie Policy.</a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default AiManageCards;
