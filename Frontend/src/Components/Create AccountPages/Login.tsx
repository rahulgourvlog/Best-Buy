import React from "react";
import Header from "../Sign pages/Header";
import RightSection from "../Sign pages/RightSection";
import Bottom from "../Sign pages/Bottom";
import LeftSection from "./LeftSection";
const Login = () => {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          width: "100%",
          backgroundColor: "#fbfcfd",
          paddingBottom: "100px",
        }}
      >
        <LeftSection />
        <RightSection />
      </div>
      <Bottom />
    </>
  );
};

export default Login;
