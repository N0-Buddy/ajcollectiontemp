"use client"
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GoChecklist } from "react-icons/go";
import Link from "next/link";
import { RiRefundFill } from "react-icons/ri";
import { GrServices } from "react-icons/gr";
import { MdOutlinePolicy } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { RiErrorWarningFill } from "react-icons/ri";
import { RiContactsLine } from "react-icons/ri";
import CompleteOrder from "../components/help_pages/Orders&payment/completeorder";
import Place_Order from "../components/help_pages/Orders&payment/placingorder";
import Product_info from "../components/help_pages/Orders&payment/productinfo";
import Return_One from "../components/help_pages/Returns&Refnds/Our_services/returnone";
import Refunds from "../components/help_pages/Returns&Refnds/Our_services/refunds";
import Frasers_Plus from "../components/help_pages/Our_services/frasersplus";
import Term_Con from "../components/help_pages/sitepolicies/term&cond";
import Site_policy from "../components/help_pages/sitepolicies/other_policies";
import Privacy_cook from "../components/help_pages/sitepolicies/privacy_cookies";
import Delivery_Methods from "../components/help_pages/delivery/Delivery_method";
import Delivery_FAQs from "../components/help_pages/delivery/Delivery_FAQs";
import Black_day from "../components/help_pages/blackfriday/black_sunday";
import Gettind_start from "../components/help_pages/myaccount/gettingstarted";
import Technical_issue from "../components/help_pages/myaccount/technicalissue";
import Contact from "../components/help_pages/contactus/contact";
const page = () => {
    event.preventDefault()
    // dropdown one state
    const [dropdownOneVisible, setDropdownOneVisible] = useState(false);
    const [dropdownTwoVisible, setDropdownTwoVisible] = useState(false);
    const [dropdownThreeVisible, setDropdownThreeVisible] = useState(false);
    const [dropdownfourVisible, setDropdownfourVisible] = useState(false);
    const [dropdownfiveVisible, setDropdownfiveVisible] = useState(false);
    const [dropdownsixVisible, setDropdownsixVisible] = useState(false);
    const [dropdownsevenVisible, setDropdownsevenVisible] = useState(false);
    const [dropdowneightVisible, setDropdowneightVisible] = useState(false);

    const closeAllDropdowns = () => {
        setDropdownOneVisible(false);
        setDropdownTwoVisible(false);
        setDropdownThreeVisible(false);
        setDropdownfourVisible(false);
        setDropdownfiveVisible(false);
        setDropdownsixVisible(false);
        setDropdownsevenVisible(false);
        setDropdowneightVisible(false);
    };

    const toggleDropdown = (dropdownNumber) => {
        if (dropdownNumber === 1) {
            setDropdownOneVisible(!dropdownOneVisible);
            setDropdownTwoVisible(false);
            setDropdownThreeVisible(false);
            setDropdownfourVisible(false);
            setDropdownfiveVisible(false);
            setDropdownsixVisible(false);
            setDropdownsevenVisible(false);
            setDropdowneightVisible(false);
        } else if (dropdownNumber === 2) {
            setDropdownTwoVisible(!dropdownTwoVisible);
            setDropdownOneVisible(false);
            setDropdownThreeVisible(false);
            setDropdownfourVisible(false);
            setDropdownfiveVisible(false);
            setDropdownsixVisible(false);
            setDropdownsevenVisible(false);
            setDropdowneightVisible(false);
        } else if (dropdownNumber === 3) {
            setDropdownThreeVisible(!dropdownThreeVisible);
            setDropdownOneVisible(false);
            setDropdownTwoVisible(false);
            setDropdownfourVisible(false);
            setDropdownfiveVisible(false);
            setDropdownsixVisible(false);
            setDropdownsevenVisible(false);
            setDropdowneightVisible(false);
        } else if (dropdownNumber === 4) {
            setDropdownfourVisible(!dropdownfourVisible);
            setDropdownOneVisible(false);
            setDropdownTwoVisible(false);
            setDropdownThreeVisible(false);
            setDropdownfiveVisible(false);
            setDropdownsixVisible(false);
            setDropdownsevenVisible(false);
            setDropdowneightVisible(false);
        } else if (dropdownNumber === 5) {
            setDropdownfiveVisible(!dropdownfiveVisible);
            setDropdownOneVisible(false);
            setDropdownTwoVisible(false);
            setDropdownThreeVisible(false);
            setDropdownfourVisible(false);
            setDropdownsixVisible(false);
            setDropdownsevenVisible(false);
            setDropdowneightVisible(false);
        } else if (dropdownNumber === 6) {
            setDropdownsixVisible(!dropdownsixVisible);
            setDropdownOneVisible(false);
            setDropdownTwoVisible(false);
            setDropdownThreeVisible(false);
            setDropdownfiveVisible(false);
            setDropdownfourVisible(false);
            setDropdownsevenVisible(false);
        } else if (dropdownNumber === 7) {
            setDropdownsevenVisible(!dropdownsevenVisible);
            setDropdownOneVisible(false);
            setDropdownTwoVisible(false);
            setDropdownThreeVisible(false);
            setDropdownfiveVisible(false);
            setDropdownsixVisible(false);
            setDropdownfourVisible(false);
            setDropdowneightVisible(false);
        } else if (dropdownNumber === 8) {
            setDropdowneightVisible(!dropdowneightVisible);
            setDropdownOneVisible(false);
            setDropdownTwoVisible(false);
            setDropdownThreeVisible(false);
            setDropdownfiveVisible(false);
            setDropdownsixVisible(false);
            setDropdownfourVisible(false);
            setDropdownsevenVisible(false);
        } else {
            closeAllDropdowns();
        }
    };

    // Toggle dropdown two
    // const toggledropdowntwo = () => {
    //     setDropdownTwoVisible(!dropdownTwoVisible);
    //     setDropdownOneVisible(false);
    // };

    // For Hold click Hover effect
    const [isActive, setIsActive] = useState(false);

    const toggleHover = (chold) => {
        setIsActive(chold);
    };
    // For Bolding text on Click
    const [selectedLink, setSelectedLink] = useState(null);

    const handleLinkClick = (link) => {
        setSelectedLink(link);
    };
    // for handling link click
    const [handdling_link_click, sethanddling_link_click] = useState(false);

    const handleLinkClickContent = (link) => {
        sethanddling_link_click(link);

        // Check if the clicked link is "Placing Orders"

    };
    return (
        <>
            <div className="help_main_contain">
                <div className="help_head">
                    <div className="help_return_to_homepage">
                        <h1>BACK TO SITE</h1>
                    </div>
                    <div className="help_Brand_logo">
                        <h1>AZHAR</h1>
                    </div>

                </div>
                <div className="help_Intro_txt">
                    <h1>How can we help you?</h1>
                </div>
                <div className="help_main_content">
                    <div className="help_left_slider">

                        <div className="help_dropdowns">
                            <div className={`help_dropdown_one  ${isActive === 'b' ? 'active' : ''}`}
                                onClick={() => {
                                    toggleDropdown(1)
                                    toggleHover('b')
                                }}>
                                <div className="help_dropdown_categories">
                                    <div
                                        className="help_dropdown_name"
                                    >

                                        <h3><GoChecklist style={{ float: "left", marginRight: "1rem", fontSize: "1.5rem" }} />Orders & Payments</h3>
                                        <span
                                            style={{
                                                transform: dropdownOneVisible
                                                    ? "rotate(0deg)"
                                                    : "rotate(270deg)",
                                            }}
                                        >
                                            <MdOutlineKeyboardArrowDown style={{ fontSize: "1.8rem", fontWeight: "bolder" }} />
                                        </span>
                                    </div>
                                    <div
                                        className={`help_dropdown_show help_dropdown_one_show ${dropdownOneVisible ? "show" : ""
                                            }`}
                                    >
                                        <div className={`help_for_openon_click`} onClick={() => handleLinkClickContent('a')}>
                                            <div className={`help_dropdown_category ${selectedLink === 'a' ? 'bold' : ''}`}
                                                onClick={() => handleLinkClick('a')}>
                                                <Link href="">
                                                    Completed Order </Link>

                                                <MdOutlineKeyboardArrowDown style={{ transform: "rotate(270deg)", fontSize: "1.4rem" }} />
                                            </div>
                                        </div>
                                        <div className={`help_for_openon_click`} onClick={() => handleLinkClickContent('b')}>
                                            <div className={`help_dropdown_category ${selectedLink === 'b' ? 'bold' : ''}`} onClick={() => handleLinkClick('b')}>
                                                <Link href="">
                                                    Placing Ordersr</Link>
                                                <MdOutlineKeyboardArrowDown style={{ transform: "rotate(270deg)", fontSize: "1.4rem" }} />
                                            </div>
                                        </div>
                                        <div className={`help_for_openon_click`} onClick={() => handleLinkClickContent('c')}>
                                            <div className={`help_dropdown_category ${selectedLink === 'c' ? 'bold' : ''}`} onClick={() => handleLinkClick('c')}>
                                                <Link href="">
                                                    Product Info </Link>

                                                <MdOutlineKeyboardArrowDown style={{ transform: "rotate(270deg)", fontSize: "1.4rem" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`help_dropdowndropdown_two ${isActive === 'a' ? 'active' : ''}`}
                                onClick={() => {
                                    toggleDropdown(2)
                                    toggleHover('a')
                                }}
                            >
                                <div className="help_dropdown_categories">
                                    <div
                                        className="help_dropdown_name"
                                    >
                                        <h3><RiRefundFill style={{ float: "left", marginRight: "1rem", fontSize: "1.5rem" }} />Returns & Refunds</h3>
                                        <span
                                            style={{
                                                transform: dropdownTwoVisible
                                                    ? "rotate(0deg)"
                                                    : "rotate(270deg)",
                                            }}
                                        >
                                            <MdOutlineKeyboardArrowDown style={{ fontSize: "1.8rem", fontWeight: "bolder" }} />
                                        </span>
                                    </div>
                                    <div
                                        className={`help_dropdown_show help_dropdown_two_show ${dropdownTwoVisible ? "show" : ""
                                            }`}
                                    >
                                        <div className={`help_for_openon_click`} onClick={() => handleLinkClickContent('d')}>
                                            <div className={`help_dropdown_category ${selectedLink == 'd' ? 'bold' : ''}`} onClick={() => handleLinkClick('d')}>
                                                <Link href={""}>   Returns</Link>
                                                <MdOutlineKeyboardArrowDown style={{ transform: "rotate(270deg)", fontSize: "1.4rem" }} />
                                            </div>
                                        </div>
                                        <div className={`help_for_openon_click`} onClick={() => handleLinkClickContent('e')}>
                                            <div className={`help_dropdown_category ${selectedLink == 'e' ? 'bold' : ''}`} onClick={() => handleLinkClick('e')}>
                                                <Link href={""}>   Refunds</Link>
                                                <MdOutlineKeyboardArrowDown style={{ transform: "rotate(270deg)", fontSize: "1.4rem" }} />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className={`help_dropdowndropdown_three ${isActive === 'q' ? 'active' : ''}`}
                                onClick={() => {
                                    toggleDropdown(3)
                                    toggleHover('q')
                                }}>
                                <div className="help_dropdown_categories">
                                    <div
                                        className="help_dropdown_name"
                                    >
                                        <h3><GrServices style={{ float: "left", marginRight: "1rem", fontSize: "1.5rem" }} /> Financial Services</h3>
                                        <span
                                            style={{
                                                transform: dropdownThreeVisible
                                                    ? "rotate(0deg)"
                                                    : "rotate(270deg)",
                                            }}
                                        >
                                            <MdOutlineKeyboardArrowDown style={{ fontSize: "1.8rem", fontWeight: "bolder" }} />
                                        </span>
                                    </div>
                                    <div
                                        className={`help_dropdown_show help_dropdown_four_show ${dropdownThreeVisible ? "show" : ""
                                            }`}
                                    >
                                        <div className={`help_for_openon_click`} onClick={() => handleLinkClickContent('f')}>
                                            <div className={`help_dropdown_category ${selectedLink == 'f' ? 'bold' : ''}`} onClick={() => handleLinkClick('f')}>
                                                <Link href="">Frasers Plus</Link>
                                                <MdOutlineKeyboardArrowDown style={{ transform: "rotate(270deg)", fontSize: "1.4rem" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`help_dropdowndropdown_four ${isActive === 'f' ? 'active' : ''}`}
                                onClick={() => {
                                    toggleDropdown(4)
                                    toggleHover('f')
                                }}>
                                <div className="help_dropdown_categories">
                                    <div
                                        className="help_dropdown_name"
                                    >
                                        <h3><MdOutlinePolicy style={{ float: "left", marginRight: "1rem", fontSize: "1.5rem" }} />Site Policies</h3>
                                        <span
                                            style={{
                                                transform: dropdownfourVisible
                                                    ? "rotate(0deg)"
                                                    : "rotate(270deg)",
                                            }}
                                        >
                                            <MdOutlineKeyboardArrowDown style={{ fontSize: "1.8rem", fontWeight: "bolder" }} />
                                        </span>
                                    </div>
                                    <div
                                        className={`help_dropdown_show help_dropdown_four_show ${dropdownfourVisible ? "show" : ""
                                            }`}
                                    >
                                        <div className={`help_for_openon_click`} onClick={() => handleLinkClickContent('g')}>
                                            <div className={`help_dropdown_category ${selectedLink == 'g' ? 'bold' : ''}`} onClick={() => handleLinkClick('g')}>
                                                <Link href="">Terms & Conditions</Link>
                                                <MdOutlineKeyboardArrowDown style={{ transform: "rotate(270deg)", fontSize: "1.4rem" }} />
                                            </div>
                                        </div>
                                        <div className={`help_for_openon_click`} onClick={() => handleLinkClickContent('h')}>
                                            <div className={`help_dropdown_category ${selectedLink == 'h' ? 'bold' : ''}`} onClick={() => handleLinkClick('h')}>
                                                <Link href="">Other Policies</Link>
                                                <MdOutlineKeyboardArrowDown style={{ transform: "rotate(270deg)", fontSize: "1.4rem" }} />
                                            </div>
                                        </div>
                                        <div className={`help_for_openon_click`} onClick={() => handleLinkClickContent('i')}>
                                            <div className={`help_dropdown_category ${selectedLink == 'i' ? 'bold' : ''}`} onClick={() => handleLinkClick('i')}>
                                                <Link href="">Privacy and Cookies Policy</Link>
                                                <MdOutlineKeyboardArrowDown style={{ transform: "rotate(270deg)", fontSize: "1.4rem" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`help_dropdowndropdown_five ${isActive === 'g' ? 'active' : ''}`}
                                onClick={() => {
                                    toggleDropdown(5)
                                    toggleHover('g')
                                }}>
                                <div className="help_dropdown_categories">
                                    <div
                                        className="help_dropdown_name"
                                    >
                                        <h3><TbTruckDelivery style={{ float: "left", marginRight: "1rem", fontSize: "1.5rem" }} />Delivery</h3>
                                        <span
                                            style={{
                                                transform: dropdownfiveVisible
                                                    ? "rotate(0deg)"
                                                    : "rotate(270deg)",
                                            }}
                                        >
                                            <MdOutlineKeyboardArrowDown style={{ fontSize: "1.8rem", fontWeight: "bolder" }} />
                                        </span>
                                    </div>
                                    <div
                                        className={`help_dropdown_show help_dropdown_four_show ${dropdownfiveVisible ? "show" : ""
                                            }`}
                                    >
                                        <div className={`help_for_openon_click`} onClick={() => handleLinkClickContent('j')}>
                                        <div className={`help_dropdown_category ${selectedLink == 'j' ? 'bold' : ''}`} onClick={() => handleLinkClick('j')}>
                                            <Link href="">Delivery Methods</Link>
                                            <MdOutlineKeyboardArrowDown style={{ transform: "rotate(270deg)", fontSize: "1.4rem" }} />
                                        </div>
                                        </div>
                                        <div className={`help_for_openon_click`} onClick={() => handleLinkClickContent('k')}>
                                        <div className={`help_dropdown_category ${selectedLink == 'k' ? 'bold' : ''}`} onClick={() => handleLinkClick('k')}>
                                            <Link href="">Dekivery FAQs</Link>
                                            <MdOutlineKeyboardArrowDown style={{ transform: "rotate(270deg)", fontSize: "1.4rem" }} />
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`help_dropdowndropdown_six ${isActive === 'e' ? 'active' : ''}`}
                                onClick={() => {
                                    toggleDropdown(6)
                                    toggleHover('e')
                                }}>
                                <div className="help_dropdown_categories">
                                    <div
                                        className="help_dropdown_name"
                                    >
                                        <h3><CgProfile style={{ float: "left", marginRight: "1rem", fontSize: "1.5rem" }} />My Account</h3>
                                        <span
                                            style={{
                                                transform: dropdownsixVisible
                                                    ? "rotate(0deg)"
                                                    : "rotate(270deg)",
                                            }}
                                        >
                                            <MdOutlineKeyboardArrowDown style={{ fontSize: "1.8rem", fontWeight: "bolder" }} />
                                        </span>
                                    </div>
                                    <div
                                        className={`help_dropdown_show help_dropdown_four_show ${dropdownsixVisible ? "show" : ""
                                            }`}
                                    >
                                         <div className={`help_for_openon_click`} onClick={() => handleLinkClickContent('l')}>
                                        <div className={`help_dropdown_category ${selectedLink == 'l' ? 'bold' : ''}`} onClick={() => handleLinkClick('l')}>
                                            <Link href="">Getting Started</Link>
                                            <MdOutlineKeyboardArrowDown style={{ transform: "rotate(270deg)", fontSize: "1.4rem" }} />
                                        </div>
                                        </div>
                                        <div className={`help_for_openon_click`} onClick={() => handleLinkClickContent('m')}>
                                        <div className={`help_dropdown_category ${selectedLink == 'm' ? 'bold' : ''}`} onClick={() => handleLinkClick('m')}>
                                            <Link href="">Technical Issues</Link>
                                            <MdOutlineKeyboardArrowDown style={{ transform: "rotate(270deg)", fontSize: "1.4rem" }} />
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`help_dropdowndropdown_seven ${isActive === 'l' ? 'active' : ''}`}
                                onClick={() => {
                                    toggleDropdown(7)
                                    toggleHover('l')
                                }}>
                                <div className="help_dropdown_categories">
                                    <div
                                        className="help_dropdown_name"
                                    >
                                        
                                        <h3><RiErrorWarningFill style={{ float: "left", marginRight: "1rem", fontSize: "1.5rem" }} />Black Friday</h3>
                                        <span
                                            style={{
                                                transform: dropdownsevenVisible
                                                    ? "rotate(0deg)"
                                                    : "rotate(270deg)",
                                            }}
                                        >
                                            <MdOutlineKeyboardArrowDown style={{ fontSize: "1.8rem", fontWeight: "bolder" }} />
                                        </span>
                                    </div>
                                    <div
                                        className={`help_dropdown_show help_dropdown_four_show ${dropdownsevenVisible ? "show" : ""
                                            }`}
                                    >
                                        <div className={`help_for_openon_click`} onClick={() => handleLinkClickContent('n')}>
                                        <div className={`help_dropdown_category ${selectedLink == 'n' ? 'bold' : ''}`} onClick={() => handleLinkClick('n')}>
                                            <Link href="">Help</Link>
                                            <MdOutlineKeyboardArrowDown style={{ transform: "rotate(270deg)", fontSize: "1.4rem" }} />
                                        </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className={`help_dropdowndropdown_eight ${isActive === 'xz' ? 'active' : ''}`}
                                onClick={() => {
                                    toggleDropdown(8)
                                    toggleHover('xz')
                                }}>
                                <div className="help_dropdown_categories">
                                    <div
                                        className="help_dropdown_name"
                                    >
                                        <h3><RiContactsLine style={{ float: "left", marginRight: "1rem", fontSize: "1.5rem" }} />Contact Us</h3>
                                        <span
                                            style={{
                                                transform: dropdowneightVisible
                                                    ? "rotate(0deg)"
                                                    : "rotate(270deg)",
                                            }}
                                        >
                                            
                                            <MdOutlineKeyboardArrowDown style={{ fontSize: "1.8rem", fontWeight: "bolder" }} />
                                        </span>
                                    </div>
                                    <div
                                        className={`help_dropdown_show help_dropdown_four_show ${dropdowneightVisible ? "show" : ""
                                            }`}
                                    >
                                          <div className={`help_for_openon_click`} onClick={() => handleLinkClickContent('z')}>
                                        <div className={`help_dropdown_category ${selectedLink == 'n' ? 'bold' : ''}`} onClick={() => handleLinkClick('z')}>
                                            <Link href="">Contacts</Link>
                                            <MdOutlineKeyboardArrowDown style={{ transform: "rotate(270deg)", fontSize: "1.4rem" }} />
                                        </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="help_right_slider_detail">
                         {/* <div className="help_left_slider-1">

                        <div className="help_dropdowns">
                            <div className={`help_dropdown_one  ${isActive === 'b' ? 'active' : ''}`}
                                onClick={() => {
                                    toggleDropdown(1)
                                    toggleHover('b')
                                }}>
                                <div className="help_dropdown_categories">
                                    <div
                                        className="help_dropdown_name"
                                    >

                                        <h3><GoChecklist style={{ float: "left", marginRight: "1rem", fontSize: "1.5rem" }} />Orders & Payments</h3>
                                        <span
                                            style={{
                                                transform: dropdownOneVisible
                                                    ? "rotate(0deg)"
                                                    : "rotate(270deg)",
                                            }}
                                        >
                                            <MdOutlineKeyboardArrowDown style={{ fontSize: "1.8rem", fontWeight: "bolder" }} />
                                        </span>
                                    </div>
                                    <div
                                        className={`help_dropdown_show help_dropdown_one_show ${dropdownOneVisible ? "show" : ""
                                            }`}
                                    >
                                        <div className={`help_for_openon_click`} onClick={() => handleLinkClickContent('a')}>
                                            <div className={`help_dropdown_category ${selectedLink === 'a' ? 'bold' : ''}`}
                                                onClick={() => handleLinkClick('a')}>
                                                <Link href="">
                                                    Completed Order </Link>

                                                <MdOutlineKeyboardArrowDown style={{ transform: "rotate(270deg)", fontSize: "1.4rem" }} />
                                            </div>
                                        </div>
                                        <div className={`help_for_openon_click`} onClick={() => handleLinkClickContent('b')}>
                                            <div className={`help_dropdown_category ${selectedLink === 'b' ? 'bold' : ''}`} onClick={() => handleLinkClick('b')}>
                                                <Link href="">
                                                    Placing Ordersr</Link>
                                                <MdOutlineKeyboardArrowDown style={{ transform: "rotate(270deg)", fontSize: "1.4rem" }} />
                                            </div>
                                        </div>
                                        <div className={`help_for_openon_click`} onClick={() => handleLinkClickContent('c')}>
                                            <div className={`help_dropdown_category ${selectedLink === 'c' ? 'bold' : ''}`} onClick={() => handleLinkClick('c')}>
                                                <Link href="">
                                                    Product Info </Link>

                                                <MdOutlineKeyboardArrowDown style={{ transform: "rotate(270deg)", fontSize: "1.4rem" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`help_dropdowndropdown_two ${isActive === 'a' ? 'active' : ''}`}
                                onClick={() => {
                                    toggleDropdown(2)
                                    toggleHover('a')
                                }}
                            >
                                <div className="help_dropdown_categories">
                                    <div
                                        className="help_dropdown_name"
                                    >
                                        <h3><RiRefundFill style={{ float: "left", marginRight: "1rem", fontSize: "1.5rem" }} />Returns & Refunds</h3>
                                        <span
                                            style={{
                                                transform: dropdownTwoVisible
                                                    ? "rotate(0deg)"
                                                    : "rotate(270deg)",
                                            }}
                                        >
                                            <MdOutlineKeyboardArrowDown style={{ fontSize: "1.8rem", fontWeight: "bolder" }} />
                                        </span>
                                    </div>
                                    <div
                                        className={`help_dropdown_show help_dropdown_two_show ${dropdownTwoVisible ? "show" : ""
                                            }`}
                                    >
                                        <div className={`help_for_openon_click`} onClick={() => handleLinkClickContent('d')}>
                                            <div className={`help_dropdown_category ${selectedLink == 'd' ? 'bold' : ''}`} onClick={() => handleLinkClick('d')}>
                                                <Link href={""}>   Returns</Link>
                                                <MdOutlineKeyboardArrowDown style={{ transform: "rotate(270deg)", fontSize: "1.4rem" }} />
                                            </div>
                                        </div>
                                        <div className={`help_for_openon_click`} onClick={() => handleLinkClickContent('e')}>
                                            <div className={`help_dropdown_category ${selectedLink == 'e' ? 'bold' : ''}`} onClick={() => handleLinkClick('e')}>
                                                <Link href={""}>   Refunds</Link>
                                                <MdOutlineKeyboardArrowDown style={{ transform: "rotate(270deg)", fontSize: "1.4rem" }} />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className={`help_dropdowndropdown_three ${isActive === 'q' ? 'active' : ''}`}
                                onClick={() => {
                                    toggleDropdown(3)
                                    toggleHover('q')
                                }}>
                                <div className="help_dropdown_categories">
                                    <div
                                        className="help_dropdown_name"
                                    >
                                        <h3><GrServices style={{ float: "left", marginRight: "1rem", fontSize: "1.5rem" }} /> Financial Services</h3>
                                        <span
                                            style={{
                                                transform: dropdownThreeVisible
                                                    ? "rotate(0deg)"
                                                    : "rotate(270deg)",
                                            }}
                                        >
                                            <MdOutlineKeyboardArrowDown style={{ fontSize: "1.8rem", fontWeight: "bolder" }} />
                                        </span>
                                    </div>
                                    <div
                                        className={`help_dropdown_show help_dropdown_four_show ${dropdownThreeVisible ? "show" : ""
                                            }`}
                                    >
                                        <div className={`help_for_openon_click`} onClick={() => handleLinkClickContent('f')}>
                                            <div className={`help_dropdown_category ${selectedLink == 'f' ? 'bold' : ''}`} onClick={() => handleLinkClick('f')}>
                                                <Link href="">Frasers Plus</Link>
                                                <MdOutlineKeyboardArrowDown style={{ transform: "rotate(270deg)", fontSize: "1.4rem" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`help_dropdowndropdown_four ${isActive === 'f' ? 'active' : ''}`}
                                onClick={() => {
                                    toggleDropdown(4)
                                    toggleHover('f')
                                }}>
                                <div className="help_dropdown_categories">
                                    <div
                                        className="help_dropdown_name"
                                    >
                                        <h3><MdOutlinePolicy style={{ float: "left", marginRight: "1rem", fontSize: "1.5rem" }} />Site Policies</h3>
                                        <span
                                            style={{
                                                transform: dropdownfourVisible
                                                    ? "rotate(0deg)"
                                                    : "rotate(270deg)",
                                            }}
                                        >
                                            <MdOutlineKeyboardArrowDown style={{ fontSize: "1.8rem", fontWeight: "bolder" }} />
                                        </span>
                                    </div>
                                    <div
                                        className={`help_dropdown_show help_dropdown_four_show ${dropdownfourVisible ? "show" : ""
                                            }`}
                                    >
                                        <div className={`help_for_openon_click`} onClick={() => handleLinkClickContent('g')}>
                                            <div className={`help_dropdown_category ${selectedLink == 'g' ? 'bold' : ''}`} onClick={() => handleLinkClick('g')}>
                                                <Link href="">Terms & Conditions</Link>
                                                <MdOutlineKeyboardArrowDown style={{ transform: "rotate(270deg)", fontSize: "1.4rem" }} />
                                            </div>
                                        </div>
                                        <div className={`help_for_openon_click`} onClick={() => handleLinkClickContent('h')}>
                                            <div className={`help_dropdown_category ${selectedLink == 'h' ? 'bold' : ''}`} onClick={() => handleLinkClick('h')}>
                                                <Link href="">Other Policies</Link>
                                                <MdOutlineKeyboardArrowDown style={{ transform: "rotate(270deg)", fontSize: "1.4rem" }} />
                                            </div>
                                        </div>
                                        <div className={`help_for_openon_click`} onClick={() => handleLinkClickContent('i')}>
                                            <div className={`help_dropdown_category ${selectedLink == 'i' ? 'bold' : ''}`} onClick={() => handleLinkClick('i')}>
                                                <Link href="">Privacy and Cookies Policy</Link>
                                                <MdOutlineKeyboardArrowDown style={{ transform: "rotate(270deg)", fontSize: "1.4rem" }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`help_dropdowndropdown_five ${isActive === 'g' ? 'active' : ''}`}
                                onClick={() => {
                                    toggleDropdown(5)
                                    toggleHover('g')
                                }}>
                                <div className="help_dropdown_categories">
                                    <div
                                        className="help_dropdown_name"
                                    >
                                        <h3><TbTruckDelivery style={{ float: "left", marginRight: "1rem", fontSize: "1.5rem" }} />Delivery</h3>
                                        <span
                                            style={{
                                                transform: dropdownfiveVisible
                                                    ? "rotate(0deg)"
                                                    : "rotate(270deg)",
                                            }}
                                        >
                                            <MdOutlineKeyboardArrowDown style={{ fontSize: "1.8rem", fontWeight: "bolder" }} />
                                        </span>
                                    </div>
                                    <div
                                        className={`help_dropdown_show help_dropdown_four_show ${dropdownfiveVisible ? "show" : ""
                                            }`}
                                    >
                                        <div className={`help_for_openon_click`} onClick={() => handleLinkClickContent('j')}>
                                        <div className={`help_dropdown_category ${selectedLink == 'j' ? 'bold' : ''}`} onClick={() => handleLinkClick('j')}>
                                            <Link href="">Delivery Methods</Link>
                                            <MdOutlineKeyboardArrowDown style={{ transform: "rotate(270deg)", fontSize: "1.4rem" }} />
                                        </div>
                                        </div>
                                        <div className={`help_for_openon_click`} onClick={() => handleLinkClickContent('k')}>
                                        <div className={`help_dropdown_category ${selectedLink == 'k' ? 'bold' : ''}`} onClick={() => handleLinkClick('k')}>
                                            <Link href="">Dekivery FAQs</Link>
                                            <MdOutlineKeyboardArrowDown style={{ transform: "rotate(270deg)", fontSize: "1.4rem" }} />
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`help_dropdowndropdown_six ${isActive === 'e' ? 'active' : ''}`}
                                onClick={() => {
                                    toggleDropdown(6)
                                    toggleHover('e')
                                }}>
                                <div className="help_dropdown_categories">
                                    <div
                                        className="help_dropdown_name"
                                    >
                                        <h3><CgProfile style={{ float: "left", marginRight: "1rem", fontSize: "1.5rem" }} />My Account</h3>
                                        <span
                                            style={{
                                                transform: dropdownsixVisible
                                                    ? "rotate(0deg)"
                                                    : "rotate(270deg)",
                                            }}
                                        >
                                            <MdOutlineKeyboardArrowDown style={{ fontSize: "1.8rem", fontWeight: "bolder" }} />
                                        </span>
                                    </div>
                                    <div
                                        className={`help_dropdown_show help_dropdown_four_show ${dropdownsixVisible ? "show" : ""
                                            }`}
                                    >
                                         <div className={`help_for_openon_click`} onClick={() => handleLinkClickContent('l')}>
                                        <div className={`help_dropdown_category ${selectedLink == 'l' ? 'bold' : ''}`} onClick={() => handleLinkClick('l')}>
                                            <Link href="">Getting Started</Link>
                                            <MdOutlineKeyboardArrowDown style={{ transform: "rotate(270deg)", fontSize: "1.4rem" }} />
                                        </div>
                                        </div>
                                        <div className={`help_for_openon_click`} onClick={() => handleLinkClickContent('m')}>
                                        <div className={`help_dropdown_category ${selectedLink == 'm' ? 'bold' : ''}`} onClick={() => handleLinkClick('m')}>
                                            <Link href="">Technical Issues</Link>
                                            <MdOutlineKeyboardArrowDown style={{ transform: "rotate(270deg)", fontSize: "1.4rem" }} />
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={`help_dropdowndropdown_seven ${isActive === 'l' ? 'active' : ''}`}
                                onClick={() => {
                                    toggleDropdown(7)
                                    toggleHover('l')
                                }}>
                                <div className="help_dropdown_categories">
                                    <div
                                        className="help_dropdown_name"
                                    >
                                        
                                        <h3><RiErrorWarningFill style={{ float: "left", marginRight: "1rem", fontSize: "1.5rem" }} />Black Friday</h3>
                                        <span
                                            style={{
                                                transform: dropdownsevenVisible
                                                    ? "rotate(0deg)"
                                                    : "rotate(270deg)",
                                            }}
                                        >
                                            <MdOutlineKeyboardArrowDown style={{ fontSize: "1.8rem", fontWeight: "bolder" }} />
                                        </span>
                                    </div>
                                    <div
                                        className={`help_dropdown_show help_dropdown_four_show ${dropdownsevenVisible ? "show" : ""
                                            }`}
                                    >
                                        <div className={`help_for_openon_click`} onClick={() => handleLinkClickContent('n')}>
                                        <div className={`help_dropdown_category ${selectedLink == 'n' ? 'bold' : ''}`} onClick={() => handleLinkClick('n')}>
                                            <Link href="">Help</Link>
                                            <MdOutlineKeyboardArrowDown style={{ transform: "rotate(270deg)", fontSize: "1.4rem" }} />
                                        </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className={`help_dropdowndropdown_eight ${isActive === 'xz' ? 'active' : ''}`}
                                onClick={() => {
                                    toggleDropdown(8)
                                    toggleHover('xz')
                                }}>
                                <div className="help_dropdown_categories">
                                    <div
                                        className="help_dropdown_name"
                                    >
                                        <h3><RiContactsLine style={{ float: "left", marginRight: "1rem", fontSize: "1.5rem" }} />Contact Us</h3>
                                        <span
                                            style={{
                                                transform: dropdowneightVisible
                                                    ? "rotate(0deg)"
                                                    : "rotate(270deg)",
                                            }}
                                        >
                                            
                                            <MdOutlineKeyboardArrowDown style={{ fontSize: "1.8rem", fontWeight: "bolder" }} />
                                        </span>
                                    </div>
                                    <div
                                        className={`help_dropdown_show help_dropdown_four_show ${dropdowneightVisible ? "show" : ""
                                            }`}
                                    >
                                          <div className={`help_for_openon_click`} onClick={() => handleLinkClickContent('z')}>
                                        <div className={`help_dropdown_category ${selectedLink == 'n' ? 'bold' : ''}`} onClick={() => handleLinkClick('z')}>
                                            <Link href="">Contacts</Link>
                                            <MdOutlineKeyboardArrowDown style={{ transform: "rotate(270deg)", fontSize: "1.4rem" }} />
                                        </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div> */}
                        {handdling_link_click === 'a' && <CompleteOrder />}
                        {handdling_link_click === 'b' && <Place_Order />}
                        {handdling_link_click === 'c' && <Product_info />}
                        {handdling_link_click === 'd' && <Return_One />}
                        {handdling_link_click === 'e' && <Refunds />}
                        {handdling_link_click === 'f' && <Frasers_Plus />}
                        {handdling_link_click === 'g' && <Term_Con />}
                        {handdling_link_click === 'h' && <Site_policy/>}
                        {handdling_link_click === 'i' && <Privacy_cook/>}
                        {handdling_link_click === 'j' && <Delivery_Methods/>}
                        {handdling_link_click === 'k' && <Delivery_FAQs/>}
                        {handdling_link_click === 'l' && <Gettind_start/>}
                        {handdling_link_click === 'm' && <Technical_issue/>}
                        {handdling_link_click === 'n' && <Black_day/>}
                        {handdling_link_click === 'z' && <Contact/>}

                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default page