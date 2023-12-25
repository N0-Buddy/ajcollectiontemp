import React from 'react'
import Link from 'next/link'
import Navigation from '../components/Navgation/navigation'
import {AiOutlineCheck} from 'react-icons/ai';
const page = () => {
  return (
    <>
       <Navigation />
    <div className="u_login_main_container">
    <div className="u_login_login_section">
        <h1 className='u_login_login_type'>Already Registered?</h1>
        <form >
            <div className="u_login_border">
                <div className="u_login_form_group">
                    <label>Email Address</label>
                    <input type="text" className="u_login_input_box" placeholder="Enter Your Email "/>
                    <small id="emailHelp" className="u_login_form_text">We'll never share your email with anyone
                        else.</small>
                </div>
                <div className="u_login_form_group">
                    <label>Password</label>
                    <input type="text" className="u_login_input_box" placeholder="Enter Your Password"/>
                </div>
                <div className="u_login_form_group">
                  <Link href={"/"} className="u_login_form_link">Forgotten your password?
                    </Link>
                </div>
            </div>
            <Link href={"/accountinformation"}>
            <button className="u_login_signin_btn">Sign in securely</button>
            </Link>
        </form>
    </div>
    <div className="u_login_login_section">
        <h1 className='u_login_login_type'>New User?</h1>
        <form>
            <div className="u_login_signup_border">
                <div className="u_login_rows">
                    <div className="u_login_icon"><AiOutlineCheck/></div>
                    <div>Receive special offers and promotions.</div>
                </div>
                <div className="u_login_rows">
                    <div className="u_login_icon"><AiOutlineCheck/></div>
                    <div>Speed your way through checkout.</div>
                </div>
                <div className="u_login_rows">
                    <div className="u_login_icon"><AiOutlineCheck/></div>
                    <div>View your order history and your current addresses.</div>
                </div>
                <div className="u_login_rows">
                    <div className="u_login_icon"><AiOutlineCheck/></div>
                    <div>Access your saved items.</div>
                </div>
                <div className="u_login_rows">
                    <div className="u_login_icon"><AiOutlineCheck/></div>
                    <div>Instant access to your account.</div>
                </div>
                <div className="u_login_signup_btn">
                </div>
            </div>
            <Link href={"/signup"}>
            <button className="u_login_signin_btn">Continue securely</button>
            </Link>
        </form>
    </div>
</div>    
    </>
  )
}

export default page