import React from 'react'
import Image from 'next/image'
const HomeComp = () => {
  return (
    <>
      <div className="home">
        <div className="home_bg">
          <Image
            src={"/imgs/home/home.png"}
            width={2000}
            height={1000}
            alt="Category Image"
            objectFit="cover"
          />
          <div className="home_main_btn">
            <button className='home_shop_btn'>Shop Now</button>
          </div>
        </div>
        <div className="res_home">
          <Image
            src={"/imgs/home/res-home.png"}
            width={1000}
            height={1000}
            alt="Category Image"
            objectFit="cover"
          />
          <div className="home_main_btn">
            <button className='home_shop_btn'>Shop Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeComp