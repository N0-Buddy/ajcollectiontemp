"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";

const LatestDrops = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="latest_drops">
      <div className="ltdrop_title">The Latest Drops</div>
      <div className="ltdrop_crousel_mob">
        <Carousel
          className="ltdrop_carousel"
          responsive={responsive}
          swipeable={true}
          draggable={true}
          // showDots={true}
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
        >
          <div className="carousel_item">
            <Image
              className="ltdrop_img"
              src="/imgs/ltdrop/coats.jpg"
              alt="carousel img"
              width={2000}
              height={2000}
            />
            <div className="ltdrop_item_title">New season outwear</div>
            <button className="ltdrop_shop">Shop Now</button>
          </div>
          <div className="carousel_item">
            <Image
              className="ltdrop_img"
              src="/imgs/ltdrop/denim.jpg"
              alt="carousel img"
              width={2000}
              height={2000}
            />
            <div className="ltdrop_item_title">
              Denim designed to be lived in
            </div>
            <button className="ltdrop_shop">Shop Now</button>
          </div>
          <div className="carousel_item">
            <Image
              className="ltdrop_img"
              src="/imgs/ltdrop/knitwear.jpg"
              alt="carousel img"
              width={2000}
              height={2000}
            />
            <div className="ltdrop_item_title">Laying essntials</div>
            <button className="ltdrop_shop">Shop Now</button>
          </div>
        </Carousel>
      </div>

      {/* COMPUTER RES */}
      <div className="ltdrop_items">
        <div className="carousel_item">
          <Image
            className="ltdrop_img"
            src="/imgs/ltdrop/coats.jpg"
            alt="carousel img"
            width={2000}
            height={2000}
          />
          <div className="ltdrop_item_title">New season outwear</div>
          <button className="ltdrop_shop">Shop Now</button>
        </div>
        <div className="carousel_item">
          <Image
            className="ltdrop_img"
            src="/imgs/ltdrop/denim.jpg"
            alt="carousel img"
            width={2000}
            height={2000}
          />
          <div className="ltdrop_item_title">Denim designed to be lived in</div>
          <button className="ltdrop_shop">Shop Now</button>
        </div>
        <div className="carousel_item">
          <Image
            className="ltdrop_img"
            src="/imgs/ltdrop/knitwear.jpg"
            alt="carousel img"
            width={2000}
            height={2000}
          />
          <div className="ltdrop_item_title">Laying essntials</div>
          <button className="ltdrop_shop">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default LatestDrops;
