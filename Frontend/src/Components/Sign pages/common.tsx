import React from "react";
import { VscChevronRight } from "react-icons/vsc";
import RightSection from "./RightSection";
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";
const Common = () => {
    const navigate=useNavigate()
    const handlenav=()=>{
        navigate("/login")
      }
  return (
    <>
      <div style={{width:"80%",marginLeft:"80px"}}>
        <div style={{
    fontSize:" 24px",
    lineHeight:" 32px",
   fontWeight: "700",
   marginTop:"140px",
   marginBottom:"-130px"
}}>Don't have an account?</div>
<div ><RightSection/></div>

        <div>
          <span
            style={{
              marginTop: "10px",
              fontSize: "16px",
              color: "#0046be",
              fontWeight: "600",
              cursor:"pointer"
            }}
            onClick={handlenav}
          >
          <Link to="/login" className="linkt">  Create an account</Link>
          </span>
        
          <VscChevronRight />
        </div>
      </div>
    </>
  );
};

export default Common;
