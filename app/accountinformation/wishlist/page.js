import React from 'react'
import { IoIosMail } from "react-icons/io";
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/app/components/Footer/footer';
import Navigation from '@/app/components/Navgation/navigation';
import AccountInfoNavigation from '@/app/components/AccountInformation/navigation';
const Wishlist = () => {
    return (
        <>
            <Navigation />
            <AccountInfoNavigation/>
            <div className="wish_main">
                <div className="wish_heading">
                    <h1>
                        Wish List
                    </h1>
                    <div className="wish_content_button">
                        <div className="wish_content">
                            Save all the things you want here and when you're ready to buy simply add any items to your bag. Please check that the size and colour of your items are correct before you purchase. Be aware that the Item is not reserved whilst it is in your wish list. Items will remain in your wish list until you choose to remove them.
                        </div>
                        <div className="wish_btn">
                            <Link href={"/"}>< IoIosMail />Share your wish list</Link>
                        </div>
                    </div>
                    <div className="wish_list_sections">
                        <div className="wish_list_section">
                            <div className="wish_product_group">
                                <div className="wish_item_details">
                                    <div className="wish_product_detail">
                                        <div className="wish_product_img">
                                            <Image
                                                src={"/imgs/wishlist/wishlist.png"}
                                                width={150}
                                                height={100}
                                                alt="Category Image"
                                            ></Image>
                                        </div>
                                        <div className="wish_product_description">
                                            <div className="wish_product_link_text">
                                                <Link href={"/"}>Azhar Petitle Floral Print Ruched Mini Dress</Link>

                                            </div>
                                            <div className="wish_product_colour">
                                                <span className='productcolortext'>Colour: </span>
                                                <span className='productcolor'>Black</span>
                                            </div>
                                            <div className="wish_product_size">
                                                <span className='productsizetext'>Size: </span>
                                                <span className='productsie'> 6(2XS)</span>
                                            </div>
                                            <div className="wish_remove_btn">
                                                <Link href={"/"} >x Remove</Link>
                                            </div>
                                            <div className="wish_list_product_price">
                                                <span>$4.50</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wish_addtobag_btn">
                                        <Link href={"/"}>ADD TO BAG</Link>
                                    </div>
                                </div>


                                {/* ==================Dummy Wish List Cards=========================== */}

                                <div className="wish_item_details">
                                    <div className="wish_product_detail">
                                        <div className="wish_product_img">
                                            <Image
                                                src={"/imgs/wishlist/wishlist-1.png"}
                                                width={150}
                                                height={100}
                                                alt="Category Image"
                                            ></Image>
                                        </div>
                                        <div className="wish_product_description">
                                            <div className="wish_product_link_text">
                                                <Link href={"/"}>Azhar Petitle Floral Print Ruched Mini Dress</Link>

                                            </div>
                                            <div className="wish_product_colour">
                                                <span className='productcolortext'>Colour: </span>
                                                <span className='productcolor'>temp Black</span>
                                            </div>
                                            <div className="wish_product_size">
                                                <span className='productsizetext'>Size: </span>
                                                <span className='productsie'>temp 6(2XS)</span>
                                            </div>
                                            <div className="wish_remove_btn">
                                                <Link href={"/"} >x Remove</Link>
                                            </div>
                                            <div className="wish_list_product_price">
                                                <span>$4.50</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wish_addtobag_btn">
                                        <Link href={"/"}>ADD TO BAG</Link>
                                    </div>
                                </div>


                                {/* ==================Dummy Wish List Cards=========================== */}
                                <div className="wish_item_details">
                                    <div className="wish_product_detail">
                                        <div className="wish_product_img">
                                            <Image
                                                src={"/imgs/wishlist/wishlist-2.png"}
                                                width={150}
                                                height={100}
                                                alt="Category Image"
                                            ></Image>
                                        </div>
                                        <div className="wish_product_description">
                                            <div className="wish_product_link_text">
                                                <Link href={"/"}>Azhar Petitle Floral Print Ruched Mini Dress</Link>

                                            </div>
                                            <div className="wish_product_colour">
                                                <span className='productcolortext'>Colour: </span>
                                                <span className='productcolor'>temp Black</span>
                                            </div>
                                            <div className="wish_product_size">
                                                <span className='productsizetext'>Size: </span>
                                                <span className='productsie'>temp 6(2XS)</span>
                                            </div>
                                            <div className="wish_remove_btn">
                                                <Link href={"/"} >x Remove</Link>
                                            </div>
                                            <div className="wish_list_product_price">
                                                <span>$4.50</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="wish_addtobag_btn">
                                        <Link href={"/"}>ADD TO BAG</Link>
                                    </div>
                                </div>

                                <div className="wish_update_wishlist">
                                    <Link href={"/"}>+ Update Wish List</Link>
                                </div>
                            </div>
                            
                        </div>
                        <div className="wish_Continue_Shoping">
                                    <Link href={"/"}>Continue Shoping</Link>
                                </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Wishlist