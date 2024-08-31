import React from 'react';
import Header from './components/Header';
import ProductItem from './components/ProductItem';
import OrderDetails from './components/OrderDetails';
import Burger from "./assets/Burger.png";
import burger2 from "./assets/burger2.png";

import './styles/main.scss';
import FrequentlyOrdered from './components/FrequentlyOrdered';
import ProceedToCheckout from './components/Proceedtocheckout';

const App = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />
      <div className="p-3">
        <ProductItem
          image={Burger}
          title="Caribbean Spicy Zinger Burger"
          calories="350"
          price="319"
          quantity="1"
        />
        <ProductItem
          image={burger2}
          title="Cajun Veg Burger"
          calories="250"
          price="219"
          quantity="2"
        />
        <FrequentlyOrdered />
        <OrderDetails />
        <div className="p-4">
          <ProceedToCheckout />
        </div>
      </div>
    </div>
  );
};

export default App;
