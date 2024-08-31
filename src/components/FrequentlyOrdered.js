import React from 'react';
import './FrequentlyOrdered.scss';
import Fanta from "../assets/Fanta.png";

const products = [
  { id: 1, image: Fanta, name: 'Fanta - 1 PET', price: '50' },
  { id: 2, image: Fanta, name: 'Pepsi - 1 PET', price: '60' },
  { id: 3, image: Fanta, name: 'Sprite - 1 PET', price: '55' },
  { id: 4, image: Fanta, name: 'Fanta - 1 PET', price: '50' },
  { id: 5, image: Fanta, name: 'Pepsi - 1 PET', price: '60' },
  { id: 6, image: Fanta, name: 'Sprite - 1 PET', price: '55' },
  { id: 7, image: Fanta, name: 'Fanta - 1 PET', price: '50' },
  { id: 8, image: Fanta, name: 'Pepsi - 1 PET', price: '60' },
  { id: 4, image: Fanta, name: 'Fanta - 1 PET', price: '50' },
  { id: 5, image: Fanta, name: 'Pepsi - 1 PET', price: '60' },
  { id: 6, image: Fanta, name: 'Sprite - 1 PET', price: '55' },
  { id: 7, image: Fanta, name: 'Fanta - 1 PET', price: '50' },
  { id: 8, image: Fanta, name: 'Pepsi - 1 PET', price: '60' },
];

const FrequentlyOrdered = () => {
  return (
    <div className="p-1">
      <h1 className="heading p-2 font-semibold">Frequently Ordered</h1>
      <div className="overflow-x-auto whitespace-nowrap">
        {products.map((product) => (
          <div
            key={product.id}
            className="inline-block w-[148px] h-[140px] bg-white border border-gray-300 rounded-lg overflow-hidden shadow-md mr-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[76px] object-cover p-1"
            />
                 <div className="p-2 flex flex-col items-start">
              <h3 className="text-[12px] font-semibold mb-3 mt-0">{product.name}</h3> 
              <p className="text-[10px] font-bold">{`₹ ${product.price}`}</p> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyOrdered;
