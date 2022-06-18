import { Checkbox } from "@mui/material";
import React from "react";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Check() {
  return (
    <div>
      <>
        <Checkbox {...label} />
        {/* <Checkbox {...label} />
        <Checkbox {...label} disabled />
        <Checkbox {...label} disabled checked /> */}
      </>
    </div>
  );
}

export default Check;
