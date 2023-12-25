import React from "react";
import Navigation from "../components/Navgation/navigation";
import Image from "next/image";
import Footer from "../components/Footer/footer";

const Cart = () => {
  return (
    <div>
      <Navigation />
      <div className="cart_page">
        <div className="my_bag">
          <h1 className="mb_title">My Bag</h1>
          <div className="mb_orders">
            <div className="mb_order">
              <div className="mb_order_img">
                <Image
                  src={"/imgs/sg/sg1.jpg"}
                  alt="order image"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="mb_order_details">
                <div className="mb_order_details_div">
                  <div className="mb_order_title">
                    Azhars collection tailored contarast kit
                  </div>
                  <div className="mb_order_size_clr">
                    <div className="mb_order_clr">Color &#58; Purple</div>
                    <div className="mb_order_size"> Size &#58; (10)</div>
                  </div>
                </div>
                <div className="mb_order_remove">Remove</div>
              </div>
              <div className="mb_order_qty">
                <div className="mb_order_qty_decrease mb_order_in_dc"> - </div>
                <div className="mb_order_selected_qty">1</div>
                <div className="mb_order_qty_increase mb_order_in_dc"> + </div>
              </div>
              <div className="mb_order_price">
                <div className="mb_order_was mb_order_price_summary">
                  <span className="mb_was mb_price_title">Was</span>
                  <span className="mb_was_price mb_price">$5,000</span>
                </div>
                <div className="mb_order_current mb_order_price_summary">
                  <span className="mb_current mb_price_title">Price</span>
                  <span className="mb_current_price mb_price">$2,000</span>
                </div>
                <div className="mb_order_total mb_order_price_summary">
                  <span className="mb_total mb_price_title">Total</span>
                  <span className="mb_total_price mb_price">$2,000</span>
                </div>
              </div>
            </div>
            <div className="mb_order">
              <div className="mb_order_img">
                <Image
                  src={"/imgs/sg/sg2.jpg"}
                  alt="order image"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="mb_order_details">
                <div className="mb_order_details_div">
                  <div className="mb_order_title">
                    Azhars collection tailored contarast kit
                  </div>
                  <div className="mb_order_size_clr">
                    <div className="mb_order_clr">Color &#58; Purple</div>
                    <div className="mb_order_size"> Size &#58; (10)</div>
                  </div>
                </div>
                <div className="mb_order_remove">Remove</div>
              </div>
              <div className="mb_order_qty">
                <div className="mb_order_qty_decrease mb_order_in_dc"> - </div>
                <div className="mb_order_selected_qty">1</div>
                <div className="mb_order_qty_increase mb_order_in_dc"> + </div>
              </div>
              <div className="mb_order_price">
                <div className="mb_order_was mb_order_price_summary">
                  <span className="mb_was mb_price_title">Was</span>
                  <span className="mb_was_price mb_price">$5,000</span>
                </div>
                <div className="mb_order_current mb_order_price_summary">
                  <span className="mb_current mb_price_title">Price</span>
                  <span className="mb_current_price mb_price">$2,000</span>
                </div>
                <div className="mb_order_total mb_order_price_summary">
                  <span className="mb_total mb_price_title">Total</span>
                  <span className="mb_total_price mb_price">$2,000</span>
                </div>
              </div>
            </div>
            <div className="mb_order">
              <div className="mb_order_img">
                <Image
                  src={"/imgs/sg/sg3.jpg"}
                  alt="order image"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="mb_order_details">
                <div className="mb_order_details_div">
                  <div className="mb_order_title">
                    Azhars collection tailored contarast kit
                  </div>
                  <div className="mb_order_size_clr">
                    <div className="mb_order_clr">Color &#58; Purple</div>
                    <div className="mb_order_size"> Size &#58; (10)</div>
                  </div>
                </div>
                <div className="mb_order_remove">Remove</div>
              </div>
              <div className="mb_order_qty">
                <div className="mb_order_qty_decrease mb_order_in_dc"> - </div>
                <div className="mb_order_selected_qty">1</div>
                <div className="mb_order_qty_increase mb_order_in_dc"> + </div>
              </div>
              <div className="mb_order_price">
                <div className="mb_order_was mb_order_price_summary">
                  <span className="mb_was mb_price_title">Was</span>
                  <span className="mb_was_price mb_price">$5,000</span>
                </div>
                <div className="mb_order_current mb_order_price_summary">
                  <span className="mb_current mb_price_title">Price</span>
                  <span className="mb_current_price mb_price">$2,000</span>
                </div>
                <div className="mb_order_total mb_order_price_summary">
                  <span className="mb_total mb_price_title">Total</span>
                  <span className="mb_total_price mb_price">$2,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order_summary">
          <h2 className="mb_os_title">Order Summary</h2>
          <div className="mb_os_details">
            <div className="mb_os_items mb_item_details">
              <h4 className="mb_os_total_items">3 items</h4>
              <span className="mb_os_total_price">$99</span>
            </div>
            <div className="mb_os_savings mb_item_details">
              <h4 className="mb_os_savings_title">Savings</h4>
              <span className="mb_os_total_savings"> -$199</span>
            </div>
            <div className="mb_os_total mb_item_details">
              <h4 className="mb_os_total_title">Total</h4>
              <span className="mb_os_total"> $99</span>
            </div>
          </div>
          <button className="mb_continue_shopping">Continue securely</button>
          <div className="mb_payments">
            <Image
              src={"/imgs/footer/paymethods.svg"}
              width={1000}
              height={1000}
              alt="payment methods"
            />
          </div>
          <div className="mb_promotional_code">
            <p>Do you have a promotional code</p>
            <input type="text" />
            <button>Apply</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
