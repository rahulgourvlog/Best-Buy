import * as React from "react";
import Switch from "@mui/material/Switch";

const label = { inputProps: { "aria-label": "Switch demo" } };
interface props {
  handleFilter: (val: boolean) => void;
}

export default function BasicSwitches(props: props) {
  return (
    <div>
      <Switch
        onChange={(e) => {
          props.handleFilter(e.target.checked);
        }}
        {...label}
      />
    </div>
  );
}
