import React, { useEffect, useState } from "react";
import Best from "./components/best";
import Data from "./components/data";
// import Check from "./components/Check";

import "./App.css";
import Qandans from "./components/Qandans";
import Shopour from "./components/Shopour";
// import Moredeals from "./components/Moredeals";
//import SimpleAccordion from "./components/Sas";
import Explore from "./components/explore";

function App() {
  return (
    <div className="App">
      <>
        <h1></h1>

        <Best />
        <Explore />

        <Shopour />
        <Data />
        <Qandans />
      </>
    </div>
  );
}

export default App;
