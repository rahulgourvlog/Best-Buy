import React from "react";
import "./Sas.css";
import BasicSwitches from "./Switch";

interface propstype {
  sortd: (val: number) => void;
}

function Navofout(props: propstype) {
  return (
    <div className="outletnav">
      <p>Results</p>
      <div className="instock">
        <div className="aie">
          <div>In Stock</div>
          <BasicSwitches />
        </div>
        <div className="aie">
          <div>Best Buy only</div>
          <BasicSwitches />
        </div>
        <div className="instock">
          <p>Sort</p>
          <select onChange={(e) => props.sortd(+e.target.value)}>
            <option value={0}>Best Match</option>
            <option value={1}>Price Low-High</option>
            <option value={-1}>Price High-Low</option>
            <option value={0}>Highest Rated</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Navofout;
