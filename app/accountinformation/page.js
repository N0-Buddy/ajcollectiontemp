import React from "react";
import Navigation from "../components/Navgation/navigation";
import Link from "next/link";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import AccountInfoNavigation from "../components/AccountInformation/navigation";
const accountinformation = () => {
  return (
    <>
      <Navigation />
      <AccountInfoNavigation />
      <div className="info_main_container">
        <div className="info_welcome_content">
          <div className="info_welcome_description">
            <h1>Welcome</h1>
            <p>
              welcome to you account dashboard. Select below to update your
              personal details, manage address book as well as view your order
              history.
            </p>
          </div>
          <div className="info_welcome_btn">
            <button> Continue Shoping</button>
          </div>
        </div>
        <div className="info_boxes">
          <div className="info_detail_help">
            <div className="info_detail_contact_border">
              <div className="info_details_section">
                <h1>Edit your details</h1>
                <div className="info_detail_about">
                  <h2>Account details</h2>
                  <p>
                    Edit your personal details, to update your account
                    information
                  </p>
                </div>
                <Link href={"/accountinformation/editpersonalization"}>
                  <button className="info_detail_abouT_btn">Edit</button>
                </Link>
              </div>
              <div className="info_contact_address">
                <h1>Contact address</h1>
                <p>
                  Manage your addresses to be used during the checkout process.{" "}
                </p>
                <div className="info_contact_btn">
                  <Link href={"/accountinformation/manageadressbook"}>
                    <button>Manage address book</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="info_help_section">
              <h1>Need help with your order?</h1>
              <p>
                <Link href={"/"}>
                  <GoDotFill className="info_help_icon" />
                  Change or cancel your order
                </Link>
              </p>
              <p>
                <Link href={"/"}>
                  <GoDotFill className="info_help_icon" />
                  You have not received your order
                </Link>
              </p>
              <p>
                <Link href={"/"}>
                  <GoDotFill className="info_help_icon" />
                  Where we deliver to
                </Link>
              </p>
              <p>
                <Link href={"/"}>
                  <GoDotFill className="info_help_icon" />
                  View more
                </Link>
              </p>
              <p>
                <Link href={"/"}>
                  <GoDotFill className="info_help_icon" />
                  Payment options
                </Link>
              </p>
            </div>
          </div>
          <div className="info_order_and_payment_detail">
            <div className="info_order">
              <h1>Your Order</h1>
              <p>
                View your order history, to view a detailed overview of recent
                and past orders.
              </p>
              <button>View my order</button>
            </div>
            <div className="info_payment_detail">
              <h1>Payment details</h1>
              <p>Review and manage your cards, making ordering even easier.</p>
              <Link href={"/"}>Manage your cards</Link>

              <div className="info_pay_methods">
                <Link href={"/"}>
                  <Image
                    className="lord_img"
                    src={"/imgs/footer/paymethods.svg"}
                    alt="Payment methods"
                    height={1000}
                    width={1000}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default accountinformation;
