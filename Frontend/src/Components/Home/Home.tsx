import React from "react";
import Data from "../Products/data";
import Explore from "../Products/explore";
import Qandans from "../Products/Qandans";
import Shopour from "../Products/Shopour";
import BasicSwitches from "../Products/Switch";

const Home = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Shopour />
      <Explore />
      <BasicSwitches />
      <Data />
      <Qandans />
    </div>
  );
};

export default Home;
