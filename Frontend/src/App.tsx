import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import Best from "./Components/Products/best";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Home" element={<Best />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
