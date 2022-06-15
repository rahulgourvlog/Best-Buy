import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Tdpage from "./Components/Top deals/Tdpage";

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
      <Tdpage/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
