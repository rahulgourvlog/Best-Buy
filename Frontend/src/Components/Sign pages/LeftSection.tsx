import React, { useContext, useState } from "react";
import axios from "axios";
import styled from "./LeftSection.module.css";
import { CartCount_Context } from "../../Context/cartCounter";
import { red } from "@mui/material/colors";

type errType = {
  message: string;
  error: string;
};

const Left = () => {
  const [formData, Setformdata] = useState({});
  const [pass, Setpass] = useState("text");
  const { isLogged, setIsLogged } = useContext(CartCount_Context);
  const [logError, setlogError] = useState<errType>({
    error: "",
    message: "",
  });

  const handleclick = () => {
    Setpass(pass === "text" ? "password" : "text");
  };
  const handlechange = (e: any) => {
    let name = e.target.name;
    Setformdata({
      ...formData,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let timer: string | number | NodeJS.Timeout | undefined;
    clearTimeout(timer);
    axios.post("http://localhost:8080/auth/login", formData).then((res) => {
      if (res.data.error) {
        setlogError(res.data);
        timer = setTimeout(() => {
          setlogError({
            error: "",
            message: "",
          });
        }, 3000);
      }
      const user = res.data;
      console.log("user:", user);
      setIsLogged(res.data._id);
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
                    <div
                      style={
                        logError.error == "email"
                          ? {
                              boxShadow: "0 0 0 4px rgba(245,111,14,.15)",
                              borderColor: "#bb0628",
                            }
                          : undefined
                      }
                      className={styled.hoverShadow}
                    ></div>
                    {logError.error == "email" ? (
                      <div
                        style={{ marginTop: "8px" }}
                        className={styled.highlight}
                      >
                        {logError.message}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className={styled.field}>
                <div className={styled.container}>
                  <label className={styled.label}>Password</label>
                  <div
                    style={{
                      display: "flex",
                      border: " 1px solid #adadad",
                      paddingRight: "5px",
                    }}
                  >
                    <input
                      className={styled.input}
                      type={pass}
                      name={"password"}
                      onChange={handlechange}
                      style={{ border: "none" }}
                    />
                    <div
                      style={
                        logError.error == "email"
                          ? {
                              boxShadow: "0 0 0 4px rgba(245,111,14,.15)",
                              borderColor: "#bb0628",
                            }
                          : undefined
                      }
                      className={styled.hoverShadow}
                    ></div>

                    <div
                      onClick={handleclick}
                      style={{
                        padding: "10px",
                        color: "rgb(0, 70, 190)",
                        fontWeight: "400",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {pass === "text" ? "show" : "hide"}
                    </div>
                  </div>
                  {logError.error == "password" ? (
                    <div
                      style={{ marginTop: "8px" }}
                      className={styled.highlight}
                    >
                      {logError.message}
                    </div>
                  ) : null}
                  {logError.error == "error" ? (
                    <div
                      style={{ marginTop: "8px" }}
                      className={styled.highlight}
                    >
                      {logError.message}
                    </div>
                  ) : null}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  width: "400px",
                  gap: "27px",
                }}
              >
                <input
                  className={styled.signInBtn}
                  type="submit"
                  value="Sign In"
                  style={{
                    backgroundColor: " #0046be",
                    border: "none",
                    padding: "0.938rem 1.5rem",
                    width: "150px",
                    color: "white",
                    fontSize: "15px",
                    cursor: "pointer",
                  }}
                />
                <div>
                  <p
                    style={{
                      color: " #0046be",
                      fontWeight: "700",
                      cursor: "pointer",
                    }}
                  >
                    Forgot Password?
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Left;
