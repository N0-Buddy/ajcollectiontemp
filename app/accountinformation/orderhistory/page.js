import React from 'react'
import Link from 'next/link'
import AccountInfoNavigation from '@/app/components/AccountInformation/navigation'
import Navigation from '@/app/components/Navgation/navigation'
import Footer from '@/app/components/Footer/footer'
const page = () => {
    return (
        <>
         <Navigation />
         <AccountInfoNavigation />
         <div className="res_class">
            <div className="order_main_container">
                <div className="order_main_content">
                    <div className="order_history_head">
                        <h1>Order history</h1>
                    </div>
                    <div className="order_history_description">
                        <p>Below is a detailed view of all your past orders. Items and statuses in this list are updated 3 times daily, so additions or changes made recently may not appear straight away.</p>
                        <p>By clicking on any returns buttons below, a document will open which you can print. You will need <Link href={"wishlist"}>Adobe Acrobat Reader</Link> installed on your computer to be able to open the file. If you do not have this installed download it <Link href="managecards">here</Link>.</p>
                        
                    </div>
                    <div className="order_details">
                        <div className="order_period"><p> <Link href={"/"}> THE LAST 6 MONTHS</Link></p></div>
                        <div className="order_open_orders"><p><Link href={"/"}>OPEN ORDERS</Link></p></div>
                        <div className="order_complete_history"><p><Link href={"/"}>Complete History</Link></p></div>
                    </div>
                    <div className="order_count">No Order Found</div>
                    <div className="order_number"><span>0 Orders</span></div>

                    <div className="order_footer">
                        <div className="order_footer_description">
                       <p> This website is secure and your personal details are protected. For more information, view our <Link href={"/"}> Terms & Conditions</Link> and our<Link href={"/"}> Security</Link>, <Link href={"/"}>Privacy & Cookie Policy</Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    
            <Footer />
    
    
    
    
    
    
    </>
  )
}

export default page