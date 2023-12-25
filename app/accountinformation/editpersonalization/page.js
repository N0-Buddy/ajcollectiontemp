import React from "react";
import Navigation from "@/app/components/Navgation/navigation";
import AccountInfoNavigation from "@/app/components/AccountInformation/navigation";
import Footer from "@/app/components/Footer/footer";

const AiEditPersonalDetails = () => {
  return (
    <>
      <Navigation />
      <div className="edt_per">
        <AccountInfoNavigation />
        <div className="edt_per_content">
          <div className="edt_per_details">
            <div className="edt_per_title">
              <h1>Edit personal details</h1>
            </div>
            <p>
              To receive our FREE email newsletter, go to your{" "}
              <a href="/">Contact Preferences</a>
            </p>
          </div>
          <form className="edt_per_form">
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" required />
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" required />

            <label for="email">Email Address:</label>
            <input type="email" id="email" name="email" required />

            <label for="telephone">Telephone:</label>
            <input type="tel" id="telephone" name="telephone" />

            <button type="submit" value="Submit">
              Save changes
            </button>
          </form>
          <p className="edt_per_notice">
            This website is secure and your personal details are protected. For
            more information, view our <a href="/">Terms & Conditions</a> and
            our <a href="/">Security, Privacy & Cookie Policy.</a>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AiEditPersonalDetails;
