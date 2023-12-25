import Image from "next/image";
import React from "react";

const PayMethods = () => {
  return (
    <div className="pay_methods">
      <Image
        className="pay_method_img"
        src={"/imgs/footer/paymethods.svg"}
        alt="Payment methods"
        height={1000}
        width={1000}
      />
    </div>
  );
};

export default PayMethods;
