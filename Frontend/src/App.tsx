import React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import Best from "./Components/Products/best";
import Signin from "./Components/Sign pages/Signin";
import Login from "./Components/Create AccountPages/Login";
import Users from "./Components/Userspage/Users";
import Tdpage from "./Components/Top deals/Tdpage";
import GeekSquad from "./Components/Services/GeekSquad";
import ProductDetailPage from "./Components/ProductDetailPage/ProductDetailPage";
import Checkout from "./Components/Checkout/Checkout";
import Payment from "./Components/Checkout/Payment";
import Otp from "./Components/Otp & success/Otp";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === "/login" ||
      location.pathname === "/signin" ? null : (
        <Header />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Home" element={<Best />} />
        <Route path="/user" element={<Users />}></Route>
        <Route path="/topdeals" element={<Tdpage />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/geeksquad" element={<GeekSquad />} />
        <Route path="ProductDetailPage:id" element={<ProductDetailPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/otp" element={<Otp />} />
      </Routes>

      {location.pathname === "/login" ||
      location.pathname === "/signin" ? null : (
        <Footer />
      )}
    </div>
  );
}

export default App;
