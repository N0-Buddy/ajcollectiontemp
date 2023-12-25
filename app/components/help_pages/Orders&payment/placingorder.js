import React, { useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
const Dropdown = ({ title, children, isOpen, onToggle }) => {
    return (
        <div className="help_dropdown_container">
            <button type="button" className="help_dropdown-trigger" onClick={onToggle}>
                {title}
                <span className="help_dropdown-trigger-icon">{isOpen ? <GrSubtractCircle style={{ fontSize: "2rem" }} /> : <IoIosAddCircleOutline style={{ fontSize: "2.1rem" }} />}</span>
            </button>
            {isOpen && <div className="help_dropdown-content">{children}</div>}
        </div>
    );
};

const Place_Order = () => {
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

    const handleToggleDropdown = (index) => {
        setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const dropdownData = [
        {
            title: "What payment option are accepted",
            content: (
                <>
                    <p>We accept most well known payment methods:</p>
                    <p><ul style={{listStyle:"inside"}}>
                       <li>Apple Pay</li> 
                        <li>Gift Cards</li>
                        <li>Maestro</li>
                        <li>Mastercard</li>
                        <li>VISA</li>
                        <li>VISA Debit</li>
                        <li>VISA Electron</li>
                        </ul></p>
                    <p>The Payment Pages used on our site are secure - you can safely enter your card details to pay for your order.</p>
                    <p>There might be some exceptions where certain payment methods won't be available and certain items ordered from our Brand Partners may limit the methods of payment available for your order. You will only see the options available to you in the checkout process. For example, pre-orders can't be paid with PayPal.</p>
                    <p>If you're using a gift card and the amount on the gift card doesn't cover the order cost, you can pay the remaining amount with another accepted method.</p>
                    <p>If you're using a gift card and you don't spend the whole amount, the remaining balance will be stored on that gift card.</p>
                    <p>You can't buy gift cards using gift cards as a payment option.</p>
                </>
            ),
        },
        {
            title: "What is payment authentication?",
            content: (
                <>
                    <p>Payment authentication or 3D secure are fraud prevention initiatives launched by card issuers.</p>
                    <p>Verified by VISA (VbV) and MasterCard Secure Code (MSC) work in the same way, using passwords that you set up with the card provider to protect you when you shop online. You will then be required to enter your password during the payment process when you shop with us.</p>
                    <p style={{fontWeight:"600"}}>How do I activate my card?</p>
                    <p style={{margin:"0"}}>You register your card on your card provider's site by selecting the option to set up payment authentication.</p>
                    <p>You will be prompted to enter your card details and set a password. Once you have registered your card, when you shop online in the future you will only have to enter your password.</p>
                    <p style={{fontWeight:"600"}}>Who do I contact for further information?</p>
                    <p>If you require more information around the payment authentication process, please contact your card issuer directly.</p>
                    <p>If your card is rejected by our online payment processing system, please double check that all of the details entered are matching your billing information.</p>
                    <p>If you are sure you are using a valid card, please try again with the same credit or debit card or place the order again using a different card. If the problem persists, please contact your card provider.</p>
                    <p>We have no control over the payment authentication process so we will be unable to assist with any authentication inquiries.</p>
                    <p>Please note your order will only be processed once we have received authorisation from your payment card issuer to process the payment.</p>
                </>
            ),
        },
        {
            title: "Payment issues",
            content: (
                <>
                    <p>If you are getting error messages when making a payment, please make sure you have entered all the details correct. You might want to contact your bank to make sure there are no problems with your card.</p>
                    <p>If you’re still experiencing problems, please contact us and include as much detail as you can around the error:</p>
                    <p>    <p><ul style={{listStyle:"inside"}}>
                       <li>The error message you are seeing</li> 
                        <li>A description of the problem</li>
                        <li>What payment method you are trying to use</li>
                        <li>What the products are you’re trying to purchase</li>
                        <li>What internet browser you are using or if you are using our app</li>
                        <li>Any other details that could be useful</li>
                        </ul>
                        </p>
                        </p>
                    <p>If your credit/debit card was declined, please check if your card has expired or perhaps your billing address for the card is different from the one you have on file with us.</p>
                    <p>Your card provider will have more information.</p>
                    <p>If you are using PayPal, please contact them directly.</p>
                </>
            ),
        },
        {
            title: "Why is my bank is showing two charges for my order?            ",
            content: (
                <>
                    <p>We only take payment for an item after it has been processed. However, in the interim before processing, we will take an authorisation. An authorisation will show on your bank statement as a reservation of funds that allocates the money to your order. The funds are then debited when we have processed your item(s) for delivery. Sometimes this shows up as two charges and will correct itself within 2-3 working days.  </p>
                    <p>The time might depend on your banks processes. </p>
                    <p>In the event of us not being able to fulfil your order we immediately contact your bank to request that your bank cancels the authorisation. If the authorisation still remains after several days, please contact your bank to request that they act upon our cancellation of the payment.</p>
                </>
            ),
        },
        {
            title: "Can I cancel or make changes to my order?",
            content: (
                <>
                    <p>Once you’ve placed your order, the order starts going through the system straight away, so that we can get it to you as fast as possible.</p>
                    <p>This means you can’t cancel your order or make changes to it. This includes adding or removing items, changing colors or sizes, changing delivery address, delivery option or email address on the order.</p>
                </>
            ),
        },
        {
            title: "Apply Gift Card, eVoucher or Credit Note",
            content: (
                <>
                    <p>Select the items you wish to purchase and proceed to the checkout as normal.  </p>
                    <p>When in the payment stage of checkout you will need to click ‘use Gift Card/eVoucher’ and follow the instructions. </p>
                    <p>If you wish to apply another voucher to the same order please follow the above steps again.</p>
                </>
            ),
        },
        {
            title: "How do I apply a discount code?",
            content: (
                <>
                    <p>Here are the steps to apply your promotional code or discount code to your order.</p>
                    <p>
                        <ol>
                            <li>
                            Add your item(s) for the discount to your bag.
                            </li>
                            <li>
                            Select "View your bag" to make sure you're happy with your item(s) and then select the "Secure Checkout" button.
                            </li>
                            <li>Continue through the checkout process until you reach the payment page.</li>
                            <li>Under the list of payment options you will see an option to "Apply Promotional/Discount Code":
                            Select this option, input your code and then select "Apply.”</li>
                        </ol>
                    </p>
                    <p>If successful, you will see a discount applied to your order on the right-hand side in the "Order Summary.”</p>
                    <p>Please note that terms and conditions apply to all of our promotions and sales. There may be brands or departments that are excluded from our promotions. All promotions are subject to stock availability and promotional codes can no longer be honoured after their end date.</p>
                </>
            ),
        },
        // Add more objects for other dropdowns
    ];

    return (
        <>
            <div className="help_folder_tital">
                <h1>Placing Orders</h1>
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

export default Place_Order;
