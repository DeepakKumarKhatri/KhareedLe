import React, { useState } from "react";
import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/components/ProductList";
import Cart from "../features/cart/Cart";

const HomePage = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
      <Navbar setShowCart={setShowCart} children={<ProductList />} />
      {showCart && <Cart setShowCart={setShowCart} />}
    </>
  );
};

export default HomePage;
