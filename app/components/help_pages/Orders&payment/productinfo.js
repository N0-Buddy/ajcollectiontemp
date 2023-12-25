import React, { useState } from 'react';
import { IoIosAddCircleOutline } from "react-icons/io";
import Link from 'next/link';
import { GrSubtractCircle } from "react-icons/gr";
import { PiShirtFolded } from "react-icons/pi";
import { GiTrousers } from "react-icons/gi";
import { GiSonicShoes } from "react-icons/gi";

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

const Product_info = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  // For Navbar Clicks
  const [activeTab, setActiveTab] = useState(null);
    // For controling the iside nav option buttons
  const [navactiveTab, setnavActiveTab] = useState(null);

  const handleToggleDropdown = (index) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  // For Navbar Clicks
  const handleTabClick = (tab) => {
    setActiveTab(tab === activeTab ? null : tab);
  };
  // For controling the iside nav option buttons
  const navhandleTabClick = (tab) => {
    setnavActiveTab(tab === activeTab ? null : tab);
  };

  const dropdownData = [
    {
      title: "How do I find my size?",
      content: (
        <>
          <p>Sizes vary with different brands and styles.</p>
          <p>We have <Link href={""}>Size guide</Link> that will show you clothing and footwear sizes to help you make an informed decision about your purchase.</p>
        </>
      ),
    },
    {
      title: "Item out of stock?",
      content: (
        <>
          <p>Sometimes you need to be quick! We only show items on our website that are in stock. Check back as we re-stock as well as getting new items regularly.</p>
          <p>Our Customer Service team will not know if an item is coming back in stock.</p>
        </>
      ),
    },
    {
      title: "Is there a limit to how many products I can buy?",
      content: (
        <>
          <p>If you are buying large quantities of one particular product or we are running low on the product that you are trying to buy, you will see the following message:</p>
          <p>You have requested quantities for a product that exceeds our stock level. Please reduce the amount or remove the items and try again.</p>
          <p>If you see this message, please reduce the quantity of items in your shopping bag to continue with your purchase.</p>
        </>
      ),
    },
    {
      title: "Size Guide",
      content: (
        <>
          <div className="help_pinfo_main">
            <div className="help_pinfo_navbar">
              <ul>
                <li className={`women ${activeTab === 'women' ? 'click' : ''}`} onClick={() => handleTabClick('women')}>Women</li>
                <li className={`men ${activeTab === 'men' ? 'click' : ''}`} onClick={() => handleTabClick('men')}>Men</li>
                <li className={`child ${activeTab === 'child' ? 'click' : ''}`} onClick={() => handleTabClick('child')}>Kids</li>
              </ul>
            </div>
            <div className="help_pinfo_con">
              <div className="help_pinfo_women_title" >
                <p>Please note all conversions are approximate and may vary by label, brand, or personal preference of fit.</p>
              </div>
              {activeTab === 'women' && (
                <div className="help_pinfo_women_form">
                  <div className='help_pinfo_women_form_nav'>
                    <ul>
                      <li>UK</li>
                      <li>US/Canada</li>
                      <li>Europe</li>
                      <li>Australia</li>
                    </ul>
                  </div>
                  <div className="help_pinfo_women_form_tabel">
                    <table>
                      <thead>
                        <tr>
                          <th style={{ border: "0px" }}></th>
                          <th>SIZE</th>
                          <th>BUSI</th>
                          <th>WAIST</th>
                          <th>HIPS</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <label>4</label>
                          <td>XS</td>
                          <td>31.25</td>
                          <td>24.25</td>
                          <td>34.5</td>
                        </tr>
                        <tr>
                          <label>6</label>
                          <td>S</td>
                          <td>32.25</td>
                          <td>25.25</td>
                          <td>35.5</td>
                        </tr>
                        <tr>
                          <label>8</label>
                          <td>M</td>
                          <td>34</td>
                          <td>26.75</td>
                          <td>37</td>
                        </tr>
                        <tr>
                          <label>10</label>
                          <td>L</td>
                          <td>34</td>
                          <td>26.75</td>
                          <td>37</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
              {activeTab === 'men' && (
                <>
                <div className="help_pinfo_men_select_cate">
                  <ul>
                    <li className={`tops ${navactiveTab === 'tops' ? 'lolo' : ''}`} onClick={() => navhandleTabClick('tops')}><PiShirtFolded style={{ fontSize: "1.5rem" }} /> Tops</li>
                    <li className={`trousers ${navactiveTab === 'trousers' ? 'lolo' : ''}`} onClick={() => navhandleTabClick('trousers')}> <GiTrousers style={{ fontSize: "1.5rem" }} /> Trousers</li>
                    <li className={`shoes ${navactiveTab === 'shoes' ? 'lolo' : ''}`} onClick={() => navhandleTabClick('shoes')}><GiSonicShoes style={{ fontSize: "1.5rem" }} /> Shoes</li>
                  </ul>
                  <style jsx>{`
                  .lolo{
                    background-color:  #f2f2f2;;
                  }
                  `}</style>
                </div>
                <div className="help_pinfo_men_select_cate_con">
                {navactiveTab === 'tops' && (
                  <div className="help_pinfo_men_select_cate_tops_con">
                    <table>
                      <thead>
                        <tr>
                            <th>SIZE</th>
                            <th>INCHES</th>
                            <th>CENTIMETRES</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>XXS</td>
                          <td>30"-32"</td>
                          <td>76-81</td>
                        </tr>
                        <tr>
                          <td>XS</td>
                          <td>32"-34"</td>
                          <td>81-86</td>
                        </tr>
                        <tr>
                          <td>S</td>
                          <td>34"-36"</td>
                          <td>86-91</td>
                        </tr>
                        <tr>
                          <td>M</td>
                          <td>34"-36"</td>
                          <td>91-97</td>
                        </tr>
                        <tr>
                          <td>L</td>
                          <td>34"-38"</td>
                          <td>97-102</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
                {navactiveTab === 'trousers' && (
                  <div className="help_pinfo_men_select_cate_tops_con">
                    <label>Waist Size</label>
                    <table>
                      <thead>
                        <tr>
                          <th></th>
                            <th>SIZE</th>
                            <th>INCHES</th>
                            <th>CENTIMETRES</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>XS</td>
                          <td>28</td>
                          <td>28</td>
                          <td>71</td>
                        </tr>
                        <tr>
                          <td>S</td>
                          <td>30"</td>
                          <td>30"</td>
                          <td>76</td>
                        </tr>
                        <tr>
                          <td>M</td>
                          <td>32</td>
                          <td>32</td>
                          <td>81</td>
                        </tr>
                        <tr>
                          <td>L</td>
                          <td>34</td>
                          <td>34</td>
                          <td>86</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
                {navactiveTab === 'shoes' && (
                  <div className="help_pinfo_men_select_cate_tops_con">
                    <table>
                      <thead>
                        <tr>
                          <th></th>
                            <th>SIZE</th>
                            <th>INCHES</th>
                            <th>CENTIMETRES</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>XS</td>
                          <td>28</td>
                          <td>28</td>
                          <td>71</td>
                        </tr>
                        <tr>
                          <td>S</td>
                          <td>30"</td>
                          <td>30"</td>
                          <td>76</td>
                        </tr>
                        <tr>
                          <td>M</td>
                          <td>32</td>
                          <td>32</td>
                          <td>81</td>
                        </tr>
                        <tr>
                          <td>L</td>
                          <td>34</td>
                          <td>34</td>
                          <td>86</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
                </div>
                </>
              )}
              {activeTab === 'child' && (
                <div className="help_pinfo_child_title" >
                   <table style={{width:"100%"}}>
                      <thead>
                        <tr>
                            <th>SIZE</th>
                            <th>INCHES</th>
                            <th>CENTIMETRES</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>XXS</td>
                          <td>30"-32"</td>
                          <td>76-81</td>
                        </tr>
                        <tr>
                          <td>XS</td>
                          <td>32"-34"</td>
                          <td>81-86</td>
                        </tr>
                        <tr>
                          <td>S</td>
                          <td>34"-36"</td>
                          <td>86-91</td>
                        </tr>
                        <tr>
                          <td>M</td>
                          <td>34"-36"</td>
                          <td>91-97</td>
                        </tr>
                        <tr>
                          <td>L</td>
                          <td>34"-38"</td>
                          <td>97-102</td>
                        </tr>
                      </tbody>
                    </table>
                </div>
              )}
            </div>
          </div>
        </>
      ),
    }
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

export default Product_info;
