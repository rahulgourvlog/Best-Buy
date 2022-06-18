import React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";
import Signin from "./Components/Sign pages/Signin";
import Login from "./Components/Create AccountPages/Login";
import Users from "./Components/Userspage/Users";
import Tdpage from "./Components/Top deals/Tdpage";
import GeekSquad from "./Components/Services/GeekSquad";
import ProductDetailPage from "./Components/ProductDetailPage/ProductDetailPage";
import Checkout from "./Components/Checkout/Checkout";
import Payment from "./Components/Checkout/Payment";
import Otp from "./Components/Otp & success/Otp";
import Your_account from "./Components/Your Account/Your_account";
import BestOutlet from "./Components/BestOutlet/BestOutlet";
import HomePage from "./Components/Home/HomePage";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === "/login" ||
      location.pathname === "/signin" ? null : (
        <Header />
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<Users />} />
        <Route path="/user" element={<Users />} />
        <Route path="/account" element={<Your_account />} />
        <Route path="/topdeals" element={<Tdpage />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/geeksquad" element={<GeekSquad />} />
        <Route path="/ProductDetailPage:id" element={<ProductDetailPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/bestoutlet" element={<BestOutlet />} />
      </Routes>

      {location.pathname === "/login" ||
      location.pathname === "/signin" ? null : (
        <Footer />
      )}
    </div>
  );
}

export default App;
