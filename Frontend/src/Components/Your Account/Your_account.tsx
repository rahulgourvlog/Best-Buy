import axios, { AxiosResponse } from "axios";
import React, { useContext, useEffect, useState } from "react";
import { CartCount_Context } from "../../Context/cartCounter";
import { User } from "../Userspage/Users";
import { YourAccountStyled } from "./YourAccountStyled";

const Your_account = () => {
  const [active, setActive] = useState("order");
  const { isChanged, isLogged } = useContext(CartCount_Context);
  const [userData, setUserData] = useState<User>();

  const getData = () => {
    axios
      .get(`https://best-buy-web-clone.herokuapp.com/auth/${isLogged}`)
      .then((res: AxiosResponse<User>) => {
        // console.log("res.data:", res.data);
        setUserData(res.data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getData();
  }, [isChanged]);

  return (
    <>
      <div
        className="links"
        style={{ display: "flex", margin: "10px 0px 0 50px" }}
      >
        <a href="/">Home</a>
        <div>
          <svg
            style={{ width: "16px" }}
            className="arrow userIcons"
            viewBox="0 0 28 28"
          >
            <path d="M20.5,16a1,1,0,0,1-.29.74l-6.91,7a1,1,0,0,1-1.48,0,1.06,1.06,0,0,1,0-1.49L17.92,16,11.79,9.82a1.06,1.06,0,0,1,0-1.49,1,1,0,0,1,1.48,0l6.91,7A1,1,0,0,1,20.5,16Z"></path>
          </svg>
        </div>
        <span className="x-crumb">Your Account</span>
      </div>
      <YourAccountStyled>
        <div className="menu">
          <div>
            <span>
              <svg className="_13Pgk _3oC5G _2kWmn" viewBox="0 0 32 32">
                <path d="M11.5,16a1,1,0,0,1,.29-.74l6.91-7a1,1,0,0,1,1.48,0,1.06,1.06,0,0,1,0,1.49L14.08,16l6.13,6.18a1.06,1.06,0,0,1,0,1.49,1,1,0,0,1-1.48,0l-6.91-7A1,1,0,0,1,11.5,16Z"></path>
              </svg>
            </span>
            <span className="">Your Account</span>
          </div>

          <div
            onClick={() => setActive("order")}
            style={{
              backgroundColor: active == "order" ? "#001e73" : "",
            }}
          >
            <span>
              <svg
                style={{
                  fill: active == "order" ? "#fff" : "",
                }}
                className="_13Pgk _3nhJI _2kWmn"
                viewBox="0 0 32 32"
              >
                <path d="M16,1.81A14,14,0,0,0,7,5V3.69a.87.87,0,0,0-.87-.87h0a.87.87,0,0,0-.87.87V7.08A.87.87,0,0,0,6.15,8H9.78a.87.87,0,1,0,0-1.73H8.33A12.3,12.3,0,0,1,16,3.55,12.43,12.43,0,1,1,5.07,10.06a.87.87,0,1,0-1.53-.83A14.18,14.18,0,1,0,16,1.81Z"></path>
                <path d="M16,8.5a.86.86,0,0,0-.86.87v8.32s0,0,0,.08a1.42,1.42,0,0,0,0,.2.69.69,0,0,0,0,.1.85.85,0,0,0,.14.21s0,0,0,0l.1.1,5.32,3.72a.82.82,0,0,0,.49.16.87.87,0,0,0,.71-.37.86.86,0,0,0-.21-1.2l-4.95-3.47V9.37A.87.87,0,0,0,16,8.5Z"></path>
              </svg>
            </span>
            <span
              className="_2240T
                DHqM_"
              style={{
                color: active == "order" ? "#fff" : "",
              }}
            >
              Order History
            </span>
          </div>

          <div
            onClick={() => setActive("payment")}
            style={{
              backgroundColor: active == "payment" ? "#001e73" : "",
            }}
          >
            <span>
              <svg
                style={{
                  fill: active == "payment" ? "#fff" : "",
                }}
                className="_13Pgk _3nhJI _2kWmn"
                viewBox="0 0 36 36"
              >
                <path d="M33,19.55a.9.9,0,0,0,.9-.91V9.83a3,3,0,0,0-3-3H5.14a3,3,0,0,0-3,3V26.17a3,3,0,0,0,3,3H30.86a3,3,0,0,0,3-3,.9.9,0,0,0-1.8,0,1.25,1.25,0,0,1-1.24,1.24H5.14A1.25,1.25,0,0,1,3.9,26.17V23.33H33a.9.9,0,1,0,0-1.8H3.9V9.83A1.24,1.24,0,0,1,5.14,8.59H30.86A1.24,1.24,0,0,1,32.1,9.83v8.81A.9.9,0,0,0,33,19.55Z"></path>
                <path d="M18.9,13.33a.9.9,0,0,0-.9-.9H7.29a.9.9,0,0,0,0,1.8H18A.9.9,0,0,0,18.9,13.33Z"></path>
                <path d="M6.65,16.29a.91.91,0,0,0-.19.29.84.84,0,0,0-.07.35.8.8,0,0,0,.07.34.81.81,0,0,0,.19.29.94.94,0,0,0,.29.2.84.84,0,0,0,.35.07.9.9,0,0,0,.63-.27.84.84,0,0,0,.2-.29,1,1,0,0,0,.07-.34,1,1,0,0,0-.07-.35,1.12,1.12,0,0,0-.19-.29A.94.94,0,0,0,6.65,16.29Z"></path>
                <path d="M9.87,16.29a.94.94,0,0,0-.2.29,1,1,0,0,0-.07.35,1,1,0,0,0,.07.34,1,1,0,0,0,.49.49.83.83,0,0,0,.34.07.84.84,0,0,0,.35-.07.94.94,0,0,0,.29-.2.81.81,0,0,0,.19-.29.8.8,0,0,0,.07-.34.84.84,0,0,0-.07-.35.91.91,0,0,0-.19-.29A.94.94,0,0,0,9.87,16.29Z"></path>
              </svg>
            </span>
            <span
              className="_2240T
                DHqM_"
              style={{
                color: active == "payment" ? "#fff" : "",
              }}
            >
              Payment Methods
            </span>
          </div>

          <div
            onClick={() => setActive("addresses")}
            style={{
              backgroundColor: active == "addresses" ? "#001e73" : "",
            }}
          >
            <span>
              <svg
                style={{
                  fill: active == "addresses" ? "#fff" : "",
                }}
                className="_13Pgk _3nhJI _2kWmn"
                viewBox="0 0 36 36"
              >
                <path d="M5.43,14.52v6.81a.9.9,0,1,0,1.8,0V14.52a.9.9,0,0,0-1.8,0Z"></path>
                <path d="M29.19,2.14H8.62A3.19,3.19,0,0,0,5.43,5.33V8.74a.9.9,0,0,0,1.8,0V5.33A1.4,1.4,0,0,1,8.62,3.94H29.19a1.4,1.4,0,0,1,1.39,1.39V30.67a1.4,1.4,0,0,1-1.39,1.39H8.62a1.4,1.4,0,0,1-1.39-1.39V27.11a.9.9,0,0,0-1.8,0v3.56a3.19,3.19,0,0,0,3.19,3.19H29.19a3.2,3.2,0,0,0,3.19-3.19V5.33A3.2,3.2,0,0,0,29.19,2.14Z"></path>
                <path d="M4.52,12.53H8.14a.9.9,0,1,0,0-1.8H4.52a.9.9,0,0,0,0,1.8Z"></path>
                <path d="M9,24.22a.9.9,0,0,0-.9-.9H4.52a.9.9,0,0,0,0,1.8H8.14A.9.9,0,0,0,9,24.22Z"></path>
                <path d="M18.91,27a.88.88,0,0,0,.58-.22c1.14-1,6.83-6,6.83-10.55A7.3,7.3,0,0,0,19,8.89h-.25a7.3,7.3,0,0,0-7.29,7.29c0,4.53,5.69,9.58,6.83,10.55A.88.88,0,0,0,18.91,27ZM13.29,16.18a5.51,5.51,0,0,1,5.56-5.49H19a5.49,5.49,0,0,1,5.49,5.49c0,2.86-3.29,6.58-5.61,8.67C16.59,22.75,13.29,19,13.29,16.18Z"></path>
                <path d="M22.31,16.05a3.41,3.41,0,1,0-3.41,3.41A3.41,3.41,0,0,0,22.31,16.05ZM18.9,17.66a1.61,1.61,0,1,1,1.61-1.61A1.62,1.62,0,0,1,18.9,17.66Z"></path>
              </svg>
            </span>
            <span
              className="_2240T
                DHqM_"
              style={{
                color: active == "addresses" ? "#fff" : "",
              }}
            >
              Addresses
            </span>
          </div>

          <div
            onClick={() => setActive("personal")}
            style={{
              backgroundColor: active == "personal" ? "#001e73" : "",
            }}
          >
            <span>
              <svg
                style={{
                  fill: active == "personal" ? "#fff" : "",
                }}
                className="_3nhJI"
                data-automation="_3nhJI"
                fill="black"
                viewBox="0 0 32 32"
              >
                <path d="M12.14,12A3.86,3.86,0,1,1,16,15.87,3.85,3.85,0,0,1,12.14,12Zm13.93,12.3V23.08A8.71,8.71,0,0,0,23,16.44a1,1,0,1,0-1.25,1.46,6.8,6.8,0,0,1,2.39,5.18v3.13a13,13,0,0,1-16.28,0V23.08a6.83,6.83,0,0,1,4.67-6.45,5.8,5.8,0,1,0-1.41-1.52,8.78,8.78,0,0,0-5.19,8v1.25A13.08,13.08,0,1,1,29.08,16,13,13,0,0,1,26.07,24.33ZM16,1A15,15,0,1,0,31,16,15,15,0,0,0,16,1Z"></path>
                <path d="M0 0h24v24H0z" fill="none"></path>
              </svg>
            </span>
            <span
              className="_2240T
                DHqM_"
              style={{
                color: active == "personal" ? "#fff" : "",
              }}
            >
              Personal Details
            </span>
          </div>
        </div>

        <div className="Menu_Content">
          <div className="personal_info">
            <div>
              <h1>Personal Details</h1>
              <p>Update your name, email, and account password at any time.</p>
            </div>

            <div>
              <div className="user_info">
                <div>
                  <div>Name</div>
                  <div>
                    {userData?.firstName} {userData?.lastName}
                  </div>
                </div>
                <div>Edit</div>
              </div>
              <div className="user_info">
                <div>
                  <div>Email Address</div>
                  <div>{userData?.email}</div>
                </div>
                <div>Edit</div>
              </div>
              <div className="user_info">
                <div>
                  <div>Account Password</div>
                  <div>{userData?.password}</div>
                </div>
                <div>Edit</div>
              </div>
            </div>
          </div>
        </div>
      </YourAccountStyled>
    </>
  );
};

export default Your_account;
