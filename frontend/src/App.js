import React from "react";
import "./App.css";
import {Counter} from './features/counter/Counter';
import ProductList from "./features/product-list/ProductList";
import Navbar from "./features/navbar/Navbar";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      {/* <HomePage/> */}
      <SignUpPage/>
      {/* <ProductList/> */}
    </div>
  );
}

export default App;
