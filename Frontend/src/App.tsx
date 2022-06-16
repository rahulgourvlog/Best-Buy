import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Signin from "./Components/Sign pages/Signin";
import Login from "./Components/Create AccountPages/Login";
import Users from "./Components/Userspage/Users";
function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/user" element={<Users/>}></Route>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
