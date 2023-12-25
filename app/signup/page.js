import React from 'react'
import { TfiMenuAlt } from 'react-icons/tfi';
import { BsChatDots } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import Navigation from '../components/Navgation/navigation';
const page = () => {
  return (
    <>
       <Navigation />
      <div className="u_signup_container">
        <div className="u_signup_input_section">
          <h1 className='u_signup_hone'>Registration</h1>
          <form>
            <div className="u_signup_page_border">
              <div className="u_signup_formgroup">
                <label>Title</label>
                <br />
                <select className='signup_gender'>
                  <option value="Mr">Mr</option>
                  <option value="Mr">Mrs</option>
                  <option value="Mr">Miss</option>
                  <option value="Mr">Ms</option>
                </select>
              </div>
              <div className="u_signup_formgroup">
                <label>First Name</label>
                <br />
                <input className='u_signup_inpu_box' type="text" placeholder='Enter your first name' />
              </div>
              <div className="u_signup_formgroup">
                <label>Last Name</label>
                <br />
                <input className='u_signup_inpu_box' type="text" placeholder='Enter your last name' />
              </div>
              <div className="u_signup_formgroup">
                <label>Email address</label>
                <br />
                <input className='u_signup_inpu_box' type="text" placeholder='Enter your email' />
              </div>
              <div className="u_signup_formgroup">
                <label>Date of birth(option)</label>
                <div>
                  <input className='u_signup_inpu_box' type="date" />
                </div>
              </div>
              <div className="u_signup_formgroup">
                <label>Password</label>
                <br />
                <input className='u_signup_inpu_box' type="text" placeholder='Enter your password' />
                <br />
                <small>Your password needs to contaim at least 6 characters</small>
              </div>
              <div className="u_signup_formgroup">
                <label>Confirm password</label>
                <br />
                <input className='u_signup_inpu_box' type="text" placeholder='Re-enter your password' />
              </div>
              <div className="u_signup_privacy_policy">
                <input className="u_signup_checkbox" type="checkbox" />
                <label><b>Yes</b>, i would like to hear from Azhars about the lattest arrivals, exclusive products, and promotions in line with our <a className='underline_bold' href="/">privacy policy</a></label>
              </div>
              <div className="u_signup_term_conditon">
                <p>By clicking register you are accepting <a className='underline_bold' href="/">Term & Conditions</a> and <a className='underline_bold' href="/">Security,Privacy & Cookie Policy</a></p>
              </div>
            </div>
          </form>
          <div className="u_signup_input_sec_btns">
            <div className="u_signup_cancel_btn">
              <a href="/">Cancel</a>
            </div>
            <div className="u_signup_register_btn">
              <a href="/">Register</a>
            </div>
          </div>
        </div>
        <div className="u_signup_benefit_section">
          <form >
            <div className="u_signup_benefits_border">
              <h1 className='u_signup_hone'>Account Benefits</h1>
              <div className="u_signup_benefit_one">
                <div className="u_signup_benefit_icon"><TfiMenuAlt size={32} /></div>
                <div className="u_signup_benefit_description">
                  <label className='u_signup-benefit_name'>Track Order</label>
                  <div className="u_signup-benefit_about">Track and view order history</div>
                </div>
              </div>
              <div className="u_signup_benefit_two">
                <div className="u_signup_benefit_icon"><BsChatDots size={32} /></div>
                <div className="u_signup_benefit_description">
                  <label className='u_signup-benefit_name'>Latest Launches</label>
                  <div className="u_signup-benefit_about">Be the first to know about our daily deals</div>
                </div>
              </div>
              <div className="u_signup_benefit_three">
                <div className="u_signup_benefit_icon"><AiOutlineHeart size={32} /></div>
                <div className="u_signup_benefit_description">
                  <label className='u_signup-benefit_name'>Save For Later</label>
                  <div className="u_signup-benefit_about">Save your favourite products for later</div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>



      {/* <div className="u_signup_benefit_icon"><BsChatDots /></div> */}
      {/* <div className="u_signup_benefit_icon"><AiOutlineHeart /></div> */}









    </>
  )
}

export default page