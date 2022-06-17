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

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname === "/login" ||
      location.pathname === "/signin" ? null : (
        <Header />
      )}

      <Routes>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/user" element={<Users />}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Home" element={<Best />} />
      </Routes>

      {location.pathname === "/login" ||
      location.pathname === "/signin" ? null : (
        <Footer />
      )}
    </div>
  );
}

export default App;
