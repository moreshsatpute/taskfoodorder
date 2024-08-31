import React from 'react';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';

const Header = () => {
  return (
    <div className="flex items-center w-full p-4 bg-white shadow mb-2 h-[56px]">
      <ArrowLeft className="text-xl mr-4" />
      <div className="flex-1 text-center">
        <h1 className="text-gray-900 text-[14px] font-semibold mb-1">Checkout</h1>
        <h2 className="text-gray-400 text-[10px] font-semibold">POPEYES | JP NAGAR</h2>
      </div>
    </div>
  );
};

export default Header;
