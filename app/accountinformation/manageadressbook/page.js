import React from "react";
import AccountInfoNavigation from "@/app/components/AccountInformation/navigation";
import Footer from "@/app/components/Footer/footer";
import Navigation from "@/app/components/Navgation/navigation";

const AiManageAdress = () => {
  return (
    <div className="adress_book">
      <Navigation />
      <AccountInfoNavigation />
      <div className="adress_book_block">
        <div className="ab_detail ab_block">
          <h1>Adress Book</h1>
          <p className="ab_info">
            This page allows you to manage up to a total of 6 addresses used
            during the checkout process.
          </p>
        </div>
        <div className="ab_adresses ab_block">No adress found.</div>
        <div className="ab_buttons ab_block">
          <button className="ab_add_adress ab_button">
            Enter a new adress
          </button>
          <button className="ab_add_adress_in_store ab_button">
            Add a collection in store adress
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AiManageAdress;
