import React from "react";
import "./App.css";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import Cart from "./features/cart/Cart";
import Checkout from "./pages/Checkout";
import ProductDetailPage from "./pages/ProductDetailPage";
import Secure from "./features/auth/Components/Secure";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <LandingPage />,
  },
  {
    path: "/signin",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/",
    element: (
      <Secure>
        <HomePage />
      </Secure>
    ),
  },
  {
    path: "/cart",
    element: (
      <Secure>
        <Cart />
      </Secure>
    ),
  },
  {
    path: "/checkout",
    element: (
      <Secure>
        <Checkout />,
      </Secure>
    ),
  },
  {
    path: "/detail/:id",
    element: (
      <Secure>
        <ProductDetailPage />,
      </Secure>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
