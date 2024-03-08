import React from "react";
import "./App.css";
import {Counter} from './features/counter/Counter';
import ProductList from "./features/product-list/ProductList";
import Navbar from "./features/navbar/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <HomePage/>
      {/* <ProductList/> */}
    </div>
  );
}

export default App;
