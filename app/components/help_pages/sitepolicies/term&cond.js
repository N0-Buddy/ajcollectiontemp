import React, { useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";
import Link from 'next/link';
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

const Term_Con = () => {
    const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

    const handleToggleDropdown = (index) => {
        setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const dropdownData = [
        {
            title: "WHO WE ARE",
            content: (
                <>
                    <p>If you access the Website, and/or place an order for goods, you agree to be bound by these terms and conditions. Please read these terms and conditions carefully before accessing and/or ordering any goods from the Website.</p>
                    <p>You should save a copy of these terms and conditions for future reference and if you have any questions about the Website please contact Customer Services.</p>
                    <p>The following definitions are used in these terms</p>
                    <div className="help_term_cond_table">
                        <table>
                            <tbody>
                                <tr>
                                    <td className='.help_term_cond_table_heading'>
                                        Customer,You
                                    </td>
                                    <td className='.help_term_cond_table_descrip' >

                                        You, the customer accessing and/or using the Website.</td>
                                </tr>
                                <tr >
                                    <td className='.help_term_cond_table_heading'>Website</td>
                                    <td className='.help_term_cond_table_descrip'>

                                        www.missguided.co.uk</td>
                                </tr>
                                <tr>
                                    <td className='.help_term_cond_table_heading'>Seller, us, we</td>
                                    <td className='.help_term_cond_table_descrip'>

                                        Wareshop2 Limited registered address is Unit A, Brook Park East, Shirebrook, NG20 8RY, Company Number: 09870840, Registered location: England and VAT Number: GB 231 5087 33</td>
                                </tr>
                                <tr >
                                    <td className='.help_term_cond_table_heading'>Website Operator</td>
                                    <td className='.help_term_cond_table_descrip'>

                                        Missguided Retail Ltd registered address is Missguided Retail Ltd Unit A, Brook Park East, Meadow Lane, Shirebrook, NG20 8RY. Company Number 12298767, Registered location: England.</td>
                                </tr>
                                <tr >
                                    <td className='.help_term_cond_table_heading'>Customer Services</td>
                                    <td className='.help_term_cond_table_descrip'>

                                        Contact Us</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </>
            ),
        },
        {
            title: "PLACING AN ORDER",
            content: (
                <>
                    <p><strong style={{ fontWeight: "bold" }}>ADD TO BAG:</strong> Select the product(s) you want to buy from the Website (including the size, colour (where applicable) and the quantity (the default will be one (1) unit and there is a limit of ninety nine (99) units per item. To order quantities greater than 99 units per item, please contact Customer Services who will be able to assist you with your order). Click 'Add to Bag'.</p>
                    <p><strong style={{ fontWeight: "bold" }}> CHECKOUT:</strong>Once you have added all of the products you wish to order, click on the ‘My Bag’ icon in the top right hand corner. Review the contents of your bag and make sure all specifications meet your requirements then, click "Continue Securely"..</p>
                    <p><strong style={{ fontWeight: "bold" }}>ACCOUNT/GUEST: </strong> Enter your email address. If you already have an account, you will be asked to enter your password to log in, or you can choose to continue as a guest without logging in. If you do not have an account, you will be given the opportunity to register for an account or to continue as a guest</p>
                    <p><strong style={{ fontWeight: "bold" }}> DELIVERY:</strong> Select your preferred delivery method. Not all delivery options are available for all products.</p>
                    <p><strong style={{ fontWeight: "bold" }}> PAYMENT: </strong>Select your preferred payment type on our secure payment page. Your payment will be collected from you by, or on behalf of, the Seller (depending which payment option you choose). You should also enter any gift card/vouchers/promo codes on this page. On receipt of your order, an authorisation will be created on your account which will refer to the Website brand. This will show on your bank statement as a reservation of funds which allocates the money to your order but will not be taken until your order has been picked and processed. In the event that your order cannot be fulfilled, a request will be sent to your bank to cancel the authorisation. If the authorisation still remains after several days, please contact your bank to request that they act upon the cancellation of the payment.</p>
                    <p><strong style={{ fontWeight: "bold" }}> ORDER ACKNOWLEDGEMENT:</strong> Following submission of your order you will be sent an automated order acknowledgement to the email address used to place the order. An order acknowledgement does not mean that your order has been accepted. All orders are subject to availability of the products and formal acceptance by the Seller (which is in the order confirmation)..</p>
                    <p><strong style={{ fontWeight: "bold" }}> ORDER CONFIRMATION:</strong> When your order has been picked, packed and is ready for delivery, you will receive an email confirming that the Seller has accepted your order. This is when a contract for you to purchase the goods from the Seller is formed. The contract to sell goods to you only relates to those goods listed in the confirmation email. By placing an order through the Website, you warrant that you are legally capable of entering into a binding contract.</p>
                </>
            ),
        },
        {
            title: "DESCRIPTION AND PRICING OF GOODS",
            content: (
                <>
                    <p>A description of the main characteristics and prices of goods are on the product pages of the Website.</p>
                    <p><strong style={{ fontWeight: "bold" }}> For Customers based in the UK and the EU: </strong>the price includes all applicable taxes.</p>
                    <p><strong style={{ fontWeight: "bold" }}> For Customers based outside the UK and outside the EU:</strong> the prices for goods on the Website may not include all applicable taxes. Please see  <Link href="/" style={{ fontWeight: "bold", textDecoration: "underline" }}>Customs Charges and Import Duties for further details. </Link></p>
                    <p>Prices and offers may vary and may only be available for limited periods. All prices and offers are subject to availability and may be withdrawn or amended at our discretion. The prices on the Website may differ to prices in our retail stores, catalogues or elsewhere.</p>
                    <p>The Website contains a large number of goods and it is possible that, despite our best efforts, some of the goods listed on the Website may be incorrectly priced. If we discover an error in the price of the goods you have ordered we will inform you as soon as possible. We will give you the option of reconfirming your order at the correct price or cancelling it.</p>
                    <p>
                        The Seller is under no obligation to sell incorrectly priced goods to you at the incorrect price.
                    </p>
                </>
            ),
        },
        {
            title: "DELIVERY AND RETURNS ",
            content: (
                <>
                    <p>Delivery costs are additional to the displayed price and vary depending on the delivery service you select, the country of delivery and the quantity/weight of goods ordered.</p>
                    <p>If your order is particularly heavy it may be subject to extra delivery charges. If any order is subject to extra delivery charges you will be advised of the additional cost before delivery of your order begins. You have the option to cancel the order if you do not wish to pay any additional delivery costs.</p>
                    <p>
                        Please note we are currently unable to deliver to PO Boxes.
                        Some items cannot be cancelled or returned, <Link href="/" style={{ fontWeight: "bold", textDecoration: "underline" }}>click here for more details</Link>
                    </p>

                    <p> <Link href={"/"} style={{ fontWeight: "bold" }}>Click Here </Link> to view our UK delivery options.We always aim to dispatch all goods in stock as quickly as possible. The maximum UK delivery lead h1time for goods is 30 days unless specifically agreed by We with you.</p>
                    <h1 style={{ fontWeight: "bold" }}>Delivery of pre-order Items </h1>
                    <p> If you pre-order goods with a launch date, then we will reserve your goods and hold the whole order until the day before the launch date. We will dispatch the pre-ordered goods via Express Delivery the day before the launch date, if delivery is within the UK.</p>
                    <h1 style={{ fontWeight: "bold" }}>Split delivery </h1>
                    <p> We may split delivery of your order into several parcels based on stock availability. You will not be charged extra for this method of shipping. Any additional consignments for delivery in the UK will be sent using the "UK Delivery option: Express Delivery".</p>
                    <p> <Link href={"/"} style={{ fontWeight: "bold" }}>Cancellation period for online purchases </Link> In addition to your statutory rights (whereby you have 14 days from the date of delivery of your purchase(s) to notify us of a cancellation, followed by 14 days from the date of notification to return the unwanted purchase(s)), you have 28 days from the day after your items are delivered (or someone receives the items for you) or you collect your online purchase items from one of our stores (UK Mainland only) to change your mind and return the items back to us.</p>
                    <p>If your order consists of multiple items or parts which are delivered on different days, then the cancellation period (in respect of your whole order) ends on the day 28 days after the day on which the last of the items or parts are delivered to you (or a person you have nominated to receive the order)</p>
                    <p>If your order contains items shipped to you by one of our direct suppliers, the cancellation period may differ, please see the dropship /marketplace terms. </p>
                    <p>For all valid items returned within the cancellation period, you may notify us that you are cancelling your order but you do not have to. If you choose to do this, please contact us <Link href={"/"} style={{ fontWeight: "bold", textDecoration: "underline" }}> here</Link> or write to us by post at:
                        <strong style={{ fontWeight: "bold" }}
                        >
                            Customer Returns <br />
                            Unit B <br />
                            Brook Park East <br />
                            Shirebrook <br />
                            UNITED KINGDOM <br />
                            NG20 8RY <br />
                        </strong>
                    </p>
                    <p>

                        Please give us a clear statement that you would like to cancel which includes your name, address, details of the order you wish to cancel and some contact information such as a telephone number or email address.</p>
                </>
            ),
        },
        {
            title: "GENERAL",
            content: (
                <>
                    <h1 style={{ fontWeight: "bold" }}>Limitation of liability</h1>

                    <ol>
                        <li>The Seller shall only be liable to you for the purchase price of the goods and any proven losses that you suffer as a result of the Seller 's failure to comply (whether arising in contract, tort (including negligence), breach of statutory duty or otherwise) which are a foreseeable consequence of such failure.</li>
                        <li>The Seller will not be liable for the following types of loss:
                            <ol>
                                <li>loss of income or revenue; or</li>
                                <li>waste of management or office time.</li>
                            </ol>
                        </li>
                        <li>Nothing in these terms and conditions is intended to exclude or limit the Seller 's liability for:</li>
                        <ol>
                            <li>death or personal injury caused by the Seller's negligence;</li>
                            <li>fraud or fraudulent misrepresentation;</li>
                            <li>any breach of the obligations implied by section 12 of the Sale of Goods Act 1979;
                            </li>
                            <li>defective products under the Consumer Protection Act 1987; or</li>
                            <li>any other matter for which it would be illegal for the Seller to exclude or attempt to exclude its liability.</li>
                        </ol>
                        <li>Whilst the Seller adopts industry standard protections against computer viruses, it is not able to warrant that this website is free from computer viruses or any other malicious or impairing computer program.</li>
                    </ol>
                </>
            ),
        },
        // Add more objects for other dropdowns
    ];

    return (
        <>
            <div className="help_folder_tital">
                <h1>Complete Order</h1>
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

export default Term_Con;
