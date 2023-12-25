import AccountInfoNavigation from "@/app/components/AccountInformation/navigation";
import Footer from "@/app/components/Footer/footer";
import Navigation from "@/app/components/Navgation/navigation";
import React from "react";

const AiChangePassword = () => {
  return (
    <>
      <Navigation />
      <div className="change_pass">
        <AccountInfoNavigation />
        <div className="chng_pass_content">
          <div className="chng_pass_details">
            <div className="chng_pass_details_title">
              <h1>Change password</h1>
            </div>
            <p>
              Enter your old and new passwords to change the login credentials
              for your account. You use these details to sign in, so please keep
              them confidential.
            </p>
          </div>
          <form className="chng_pass_form">
            <label for="curpass">Current password:</label>
            <input type="text" id="curpass" name="curpass" required />
            <span className="pass_change_notice">
              Password must be 6 or more characters in length.
            </span>
            <label for="newpass">New password:</label>
            <input type="text" id="newpass" name="newpass" required />

            <label for="confpass">Confirm password:</label>
            <input type="text" id="confpass" name="confpass" required />

            <button type="submit" value="Submit">
              Change password
            </button>

            <span className="forgot_pass">Forgot Password</span>
            <span className="cancel_pass_change">Cancel</span>
          </form>
          <p className="chng_pass_notice">
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

export default AiChangePassword;
