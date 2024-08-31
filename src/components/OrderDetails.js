import React from "react";
import { ReactComponent as Maps } from "../assets/maps.svg";
import { ReactComponent as Bill } from "../assets/bill.svg";

const OrderDetails = () => {
  return (
    <div className="p-4 bg-white shadow rounded-lg mt-4">
      <div className="flex items-start rounded-lg mb-4">
        <Maps className="text-xl mr-4" />
        <div>
          <p className="text-gray-900 text-[14px] font-bold">Delivery to</p>
          <p className="text-gray-400 text-[14px] font-semibold">
            23rd Avenue, JP Nagar, Bangalore
          </p>
        </div>
      </div>
      <hr className="border-t border-gray-300 mb-4" />
      <div className="flex items-start">
        <Bill className="text-xl mr-4" />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <p className="text-gray-900 font-extrabold text-[14px]">Total Bill</p>
            <p className="text-gray-900 font-extrabold text-[14px]">₹ 538</p>
          </div>

          <p className="text-gray-400 text-[14px] font-semibold">
            Including Taxes
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
