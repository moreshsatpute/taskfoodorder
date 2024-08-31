import React from "react";
import "../styles/variables.scss";

const ProductItem = ({ image, title, calories, price, quantity }) => {
  return (
    <div className="flex items-end justify-between p-[10px] bg-white rounded-[10px] shadow mb-4 h-[100px]">
      <div className="flex items-center">
        <img
          src={image}
          alt={title}
          className="w-[80px] h-[80px] rounded-[10px]"
        />
        <div className="ml-4">
          <h2 className="text-[14px] font-semibold  mt-0">{title}</h2>
          <p className="text-gray-400 text-[10px] mb-3 font-semibold">{calories} Kcal</p>
          <p className="text-primary text-[14px] font-bold mb-0">₹ {price}</p>
        </div>
      </div>
      <div className="flex items-end">
        <button className="w-[100px] h-[32px] border border-primary flex items-center justify-between rounded-[6px]  text-primary">
          <span className="text-[20px] font-semibold w-[24px] flex items-center justify-center">
            -
          </span>
          <span className="text-[15px] font-semibold w-[20px] flex items-center justify-center">
            {quantity}
          </span>
          <span className="text-[20px] font-semibold w-[24px] flex items-center justify-center">
            +
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
