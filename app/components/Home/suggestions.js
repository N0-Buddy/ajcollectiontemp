import Image from "next/image";
import React from "react";

const Suggestions = () => {
  return (
    <div className="suggestions">
      <div className="sg_items">
        <div className="sg_item">
          <Image
            className="sg_img"
            src={"/imgs/sg/sg1.jpg"}
            width={2000}
            height={2000}
            alt="Suggested Item"
          />
          <div className="sg_item_detail">
            <div className="sg_item_title">New In</div>
            <button className="sg_item_btn">Shop now</button>
          </div>
        </div>
        <div className="sg_item">
          <Image
            className="sg_img"
            src={"/imgs/sg/sg2.jpg"}
            width={2000}
            height={1000}
            alt="Suggested Item"
          />
          <div className="sg_item_detail">
            <div className="sg_item_title">Dresses</div>
            <button className="sg_item_btn">Shop now</button>
          </div>
        </div>
        <div className="sg_item">
          <Image
            className="sg_img"
            src={"/imgs/sg/sg3.jpg"}
            width={2000}
            height={1000}
            alt="Suggested Item"
          />
          <div className="sg_item_detail">
            <div className="sg_item_title">Tops</div>
            <button className="sg_item_btn">Shop now</button>
          </div>
        </div>
        <div className="sg_item">
          <Image
            className="sg_img"
            src={"/imgs/sg/sg4.jpg"}
            width={2000}
            height={1000}
            alt="Suggested Item"
          />
          <div className="sg_item_detail">
            <div className="sg_item_title">Denim</div>
            <button className="sg_item_btn">Shop now</button>
          </div>
        </div>
        <div className="sg_item">
          <Image
            className="sg_img"
            src={"/imgs/sg/sg5.jpg"}
            width={2000}
            height={1000}
            alt="Suggested Item"
          />
          <div className="sg_item_detail">
            <div className="sg_item_title">Tailoring</div>
            <button className="sg_item_btn">Shop now</button>
          </div>
        </div>
        <div className="sg_item">
          <Image
            className="sg_img"
            src={"/imgs/sg/sg6.jpg"}
            width={2000}
            height={1000}
            alt="Suggested Item"
          />
          <div className="sg_item_detail">
            <div className="sg_item_title">Shorts</div>
            <button className="sg_item_btn">Shop now</button>
          </div>
        </div>
        <div className="sg_item">
          <Image
            className="sg_img"
            src={"/imgs/sg/sg7.jpg"}
            width={2000}
            height={1000}
            alt="Suggested Item"
          />
          <div className="sg_item_detail">
            <div className="sg_item_title">Skirts</div>
            <button className="sg_item_btn">Shop now</button>
          </div>
        </div>
        <div className="sg_item">
          <Image
            className="sg_img"
            src={"/imgs/sg/sg8.jpg"}
            width={2000}
            height={1000}
            alt="Suggested Item"
          />
          <div className="sg_item_detail">
            <div className="sg_item_title">Outwear</div>
            <button className="sg_item_btn">Shop now</button>
          </div>
        </div>
        <div className="sg_item sg_item_last">
          <Image
            className="sg_img"
            src={"/imgs/sg/sglast.jpg"}
            width={2000}
            height={1000}
            alt="Suggested Item"
          />
          <div className="sg_item_detail">
            <div className="sg_item_title">Jeans</div>
            <button className="sg_item_btn">Shop now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
