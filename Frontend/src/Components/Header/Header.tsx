import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BrandsMenu from "./BrandsMenu";
import { HeaderDiv } from "./HeaderStyled";
import Logosvg from "./Logosvg.svg";
import DownDropDown from "./DownDropDown.svg";
import UpDropDown from "./UpDropDown.svg";
import ShopMenu from "./ShopMenu";
import axios, { AxiosResponse } from "axios";

type Product = {
  title: string;
  quantity: number;
  save_amount: number;
  price: number;
  imageUrl: string;
  sale_End: string;
};

const Header = () => {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("");
  const [cartData, setCartData] = useState<Product[]>([]);

  const getData = () => {
    axios
      .get("http://localhost:8080/cart/")
      .then((res: AxiosResponse<Product[]>) => {
        setCartData(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <HeaderDiv>
        <div>
          <div>
            <Link className="upperlinks" to="/">
              Order Status
            </Link>
            <Link className="upperlinks" to="/">
              Blog
            </Link>
            <Link className="upperlinks" to="/">
              Best Buy Business
            </Link>
            <Link className="upperlinks" to="/">
              Français
            </Link>
          </div>
          <div>
            <Link to="/">
              <img src={Logosvg} alt="" />
            </Link>
            <div>
              <div>
                <div
                  style={{
                    width: "90%",
                  }}
                >
                  <input
                    className="searchBar"
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    value={search}
                    type="text"
                    placeholder="Search Best Buy"
                    onBlur={() => setShow(false)}
                  />
                </div>
                <div>
                  <button
                    className={search.length > 0 ? "activeInput" : ""}
                    style={
                      search.length > 0
                        ? { opacity: "1", pointerEvents: "all" }
                        : { opacity: "0" }
                    }
                  >
                    <svg
                      style={
                        search.length > 0
                          ? {
                              right: "10px",
                              opacity: "1",
                              visibility: "visible",
                            }
                          : { right: "0px", opacity: "0", visibility: "hidden" }
                      }
                      onClick={() => setSearch("")}
                      focusable="false"
                      viewBox="-8 -8 48 48"
                      aria-hidden="true"
                    >
                      <path d="M21.66,10.34a1,1,0,0,1,0,1.42L17.41,16l4.25,4.24a1,1,0,0,1-1.42,1.42L16,17.41l-4.24,4.25a1,1,0,0,1-1.42-1.42L14.59,16l-4.25-4.24a1,1,0,0,1,1.42-1.42L16,14.59l4.24-4.25A1,1,0,0,1,21.66,10.34ZM25.9,6.1a14,14,0,1,0,0,19.8A14,14,0,0,0,25.9,6.1Z"></path>
                    </svg>
                  </button>
                  <button className="searchBtn">
                    <svg
                      className="blue_1P4D2 searchIcon_18ax0 icon_6Cowp"
                      data-name="Layer 1"
                      viewBox="0 0 32 32"
                    >
                      <path d="M6,13.5A7.5,7.5,0,1,1,13.5,21,7.5,7.5,0,0,1,6,13.5ZM27.72,26.39,21,19.62A9.57,9.57,0,1,0,19.62,21l6.77,6.77a.94.94,0,0,0,.67.28.9.9,0,0,0,.66-.28A.94.94,0,0,0,27.72,26.39Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <Link to="/">
                <svg viewBox="0 0 32 32">
                  <path d="M27.92,12.2h-3.5a.91.91,0,0,0,0,1.81h3.5a.23.23,0,0,1,.24.23V27.05a.24.24,0,0,1-.24.24H23.28V23a1.4,1.4,0,0,0-1.4-1.4h-9A1.34,1.34,0,0,0,11.55,23v4.25H7A.25.25,0,0,1,6.72,27V16.4H21.23a.91.91,0,0,0,.91-.91V3.81a.9.9,0,0,0-.9-.91H6.58A.9.9,0,0,0,6,3.15L2.32,6.59A.91.91,0,0,0,2,7.25V12a.91.91,0,0,0,.27.65l2.63,2.56s0,.08,0,.13V27A2.06,2.06,0,0,0,7,29.1h21a2,2,0,0,0,2-2.05V14.24A2,2,0,0,0,27.92,12.2ZM3.84,7.64l3.1-2.93H20.33v9.88H6.94l-3.1-3ZM21.47,27.29H18.26V23.45h3.21Zm-8.11-3.84h3.09v3.84H13.36ZM7.11,9.55a.91.91,0,1,1-.91-.9A.9.9,0,0,1,7.11,9.55Z"></path>
                </svg>
                <div>Stores</div>
              </Link>
              <div>
                <Link to="/">
                  <svg
                    fill="#FFFFFF"
                    viewBox="0 0 32 32"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.14,12A3.86,3.86,0,1,1,16,15.87,3.85,3.85,0,0,1,12.14,12Zm13.93,12.3V23.08A8.71,8.71,0,0,0,23,16.44a1,1,0,1,0-1.25,1.46,6.8,6.8,0,0,1,2.39,5.18v3.13a13,13,0,0,1-16.28,0V23.08a6.83,6.83,0,0,1,4.67-6.45,5.8,5.8,0,1,0-1.41-1.52,8.78,8.78,0,0,0-5.19,8v1.25A13.08,13.08,0,1,1,29.08,16,13,13,0,0,1,26.07,24.33ZM16,1A15,15,0,1,0,31,16,15,15,0,0,0,16,1Z"></path>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                  </svg>
                  <span>Account</span>
                </Link>
              </div>
              <div>
                <Link to="/Cart">
                  <svg viewBox="0 1 32 32">
                    <path d="M26.8,26.22a1.91,1.91,0,1,1-1.91-1.95h.17a1.72,1.72,0,0,1,1.74,2Zm-15.15,2a2,2,0,1,1,1.9-2A1.93,1.93,0,0,1,11.65,28.17Zm-1.3-8.59h16.1a.91.91,0,0,0,.87-.7L30,7.51a1,1,0,0,0-.17-.78.9.9,0,0,0-.71-.35H10.39a.92.92,0,0,0,0,1.84H28l-2.23,9.53H10.35l-.18,0-3.23-15A.91.91,0,0,0,6.06,2H2.9a.92.92,0,0,0,0,1.83H5.34L8.47,18.39a3.27,3.27,0,0,0,.33,5.45A3.8,3.8,0,0,0,8,26.22a3.7,3.7,0,1,0,7.39,0,3.82,3.82,0,0,0-.55-2h7a3.82,3.82,0,0,0-.54,2,3.7,3.7,0,1,0,7.39,0A3.57,3.57,0,0,0,27.05,23a4,4,0,0,0-2.06-.6H10.35a1.43,1.43,0,0,1,0-2.85Z"></path>
                  </svg>
                  <span className="counter">{cartData.length}</span>
                  <span className="label">Cart</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="Dropdowns">
          <div>
            <div>
              <div className="rootMenu_1l1Ix">
                <ul className="rootMenu_ul">
                  <li className="rootMenuItem">
                    <button
                      onClick={() => {
                        if (active === "Shop") {
                          setActive("");
                          document.body.style.overflow = "visible";
                        } else {
                          setActive("Shop");
                          document.body.style.overflow = "hidden";
                        }
                      }}
                    >
                      <span>Shop</span>
                      <img
                        src={active === "Shop" ? UpDropDown : DownDropDown}
                      />
                    </button>

                    <div
                      className={`menuArrow ${
                        active === "Shop" ? "menuArrowActive" : ""
                      }`}
                    ></div>
                    <div
                      className={`menu ${
                        active === "Shop" ? "menuActive" : ""
                      }`}
                    >
                      <ShopMenu />
                    </div>
                  </li>

                  <li className="rootMenuItem">
                    <button
                      onClick={() => {
                        if (active === "Brands") {
                          setActive("");
                          document.body.style.overflow = "visible";
                        } else {
                          setActive("Brands");
                          document.body.style.overflow = "hidden";
                        }
                      }}
                    >
                      <span>Brands</span>
                      <img
                        src={active === "Brands" ? UpDropDown : DownDropDown}
                      />
                    </button>
                    <div
                      className={`menuArrow ${
                        active === "Brands" ? "menuArrowActive" : ""
                      }`}
                    ></div>
                    <div
                      className={`menu ${
                        active === "Brands" ? "menuActive" : ""
                      }`}
                    >
                      <BrandsMenu />
                    </div>
                  </li>

                  <li className="rootMenuItem">
                    <button
                      onClick={() => {
                        if (active === "Deals") {
                          setActive("");
                          document.body.style.overflow = "visible";
                        } else {
                          setActive("Deals");
                          document.body.style.overflow = "hidden";
                        }
                      }}
                    >
                      <span>Deals</span>
                      <img
                        src={active === "Deals" ? UpDropDown : DownDropDown}
                      />
                    </button>

                    <div
                      className={`menuArrow ${
                        active === "Deals" ? "menuArrowActive" : ""
                      }`}
                    ></div>

                    <div
                      className={`menu ${
                        active === "Deals" ? "menuActive" : ""
                      }`}
                      title="Deals"
                    >
                      <div
                        className="menu-main-l1"
                        style={{ maxHeight: "calc(100vh - 160px)" }}
                      >
                        <a className="menuLink" title="Top Deals" href="/">
                          Top Deals
                        </a>
                        <a
                          className="menuLink"
                          title="Best Buy Outlet"
                          href="/"
                        >
                          Best Buy Outlet
                        </a>
                      </div>
                    </div>
                  </li>

                  <li className="rootMenuItem">
                    <button
                      onClick={() => {
                        if (active === "Services") {
                          setActive("");
                          document.body.style.overflow = "visible";
                        } else {
                          setActive("Services");
                          document.body.style.overflow = "hidden";
                        }
                      }}
                    >
                      <span>Services</span>
                      <img
                        src={active === "Services" ? UpDropDown : DownDropDown}
                      />
                    </button>

                    <div
                      className={`menuArrow ${
                        active === "Services" ? "menuArrowActive" : ""
                      }`}
                    ></div>

                    <div
                      className={`menu ${
                        active === "Services" ? "menuActive" : ""
                      }`}
                      title="Services"
                    >
                      <div
                        className="menu-main-l1"
                        style={{ maxHeight: "calc(100vh - 160px)" }}
                      >
                        <a
                          className="menuLink"
                          title="Geek Squad Services"
                          href="/"
                        >
                          Geek Squad Services
                        </a>
                        <a
                          className="menuLink"
                          title="In-Home Advisor"
                          href="/"
                        >
                          In-Home Advisor
                        </a>
                        <a
                          className="menuLink"
                          title="Best Buy Business"
                          href="/"
                        >
                          Best Buy Business
                        </a>
                        <a
                          className="menuLink"
                          title="Best Buy Health"
                          href="/"
                        >
                          Best Buy Health
                        </a>
                        <a
                          className="menuLink"
                          title="Trade-In Program"
                          href="/"
                        >
                          Trade-In Program
                        </a>
                        <a
                          className="menuLink"
                          title="Electronics Recycling"
                          href="/"
                        >
                          Electronics Recycling
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </HeaderDiv>
      <div className={active !== "" ? "globalOverlay" : ""}></div>
    </>
  );
};

export default Header;
