import React, { useState } from "react";
import axios from "axios";
import styled from "./LeftSection.module.css";
const Left = () => {
  const [formData, Setformdata] = useState({});
  const [pass,Setpass]=useState("text");


  
   const handleclick=()=>{
    Setpass(pass==="text"? "password":"text")
   }
  const handlechange = (e: any) => {
    let name = e.target.name;
    Setformdata({
      ...formData,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    
    e.preventDefault();
   axios.post("http://localhost:8080/login", formData).then((res) => {
        alert("Sign In Successfully")
        const user= res.data
        localStorage.setItem("user",JSON.stringify(res.data))
      console.log(res.data);
    });
  };
  return (
    <>
      <div style={{ width: "60%", marginLeft: "50px", marginTop: "50px" }}>
        <h1 className={styled.title}>
          <span>Sign In</span>
        </h1>
        <div className={styled.heading}>
          <div className={styled.head}>
            <form onSubmit={handleSubmit} className={styled.form}>
              <div className={styled.field}>
                <div className={styled.container}>
                  <label className={styled.label}>Email Address</label>
                  <div>
                    <input
                      className={styled.input}
                      type={"email"}
                      name={"email"}
                      onChange={handlechange}
                    />
                    <div className={styled.highlight}></div>
                  </div>
                </div>
              </div>
              <div className={styled.field}>
                <div className={styled.container}>
                  <label className={styled.label}>Password</label>
                  <div style={{display:"flex" ,border:" 1px solid #adadad",paddingRight:"5px"}}>
                    <input
                      className={styled.input}
                      type={pass}
                      name={"password"}
                      onChange={handlechange}
                     style={{border:'none'}}
                    />
                    <div onClick={handleclick} style={{marginTop:"15px",color:" #0046be",fontWeight:"400",cursor:'pointer'}}>{pass==="text"?"show":"hide"}</div>
                    
                  </div>
                  <div className={styled.highlight}></div>
                </div>
              </div>
              <div style={{display:"flex",width:"400px",justifyContent:"space-between",marginTop:"30px"}}>
              <input type="submit" value="Sign In" style={{backgroundColor:" #0046be",border:"none",padding:"10px 10px",width:"150px",borderRadius:'5px',color:"white",fontSize:'15px',cursor:"pointer", }}/>
              <div><p style={{color:" #0046be",fontWeight:"700",cursor:"pointer"}}>Forgot Password?</p></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Left;
