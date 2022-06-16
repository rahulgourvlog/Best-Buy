import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartStyled, LoadingStyled } from "./CartStyled";
import LogoSVG from "./LogoSVG.svg";
import ProtectionSvg from "./ProtectionSvg.svg";
import Paypal from "./Paypal.svg";
import axios, { AxiosResponse } from "axios";
import { CartCount_Context } from "../../Context/cartCounter";

type Product = {
  _id: string;
  title: string;
  quantity: number;
  save_amount: number;
  price: number;
  imageUrl: string;
  sale_End: string;
  protection: boolean;
};

const Cart = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { isChanged, setIsChanged } = useContext(CartCount_Context);
  const [cartData, setCartData] = useState<Product[]>([]);
  const [postalCode, setPostalCode] = useState("M5G 2C3");
  const [quantity, setQuantity] = useState<number | string>(1);

  const getData = () => {
    setIsLoading(true);
    axios
      .get("http://localhost:8080/cart/")
      .then((res: AxiosResponse<Product[]>) => {
        console.log("res.data:", res.data);
        setCartData(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  };

  const deleteFunction = (id: string) => {
    axios
      .delete(`http://localhost:8080/cart/${id}`)
      .then((res) => {
        console.log("res.data:", res.data);
        setIsChanged(!isChanged);
        getData();
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {}, [quantity]);

  return (
    <CartStyled>
      <div className="Cart_header">
        <h1 className="Cart_header-title" style={{ paddingBottom: "0px" }}>
          Your Cart
        </h1>
      </div>

      {cartData.length === 0 ? (
        <div className="content">
          <div className="textContainer">
            <h2>Looks like it's empty!</h2>
            <p>Why not add something?</p>
          </div>
          <svg className="darkGrey icon" viewBox="0 0 32 32">
            <path d="M27,23A3.94,3.94,0,0,0,25,22.43H10.35a1.43,1.43,0,0,1,0-2.85h16.1a.9.9,0,0,0,.87-.7l.78-3.32a7.45,7.45,0,0,1-2.09,1l-.27,1.16H10.35l-.17,0-3.24-15A.9.9,0,0,0,6.06,2H2.9a.92.92,0,0,0,0,1.83H5.34L8.47,18.39a3.27,3.27,0,0,0,.33,5.45,3.79,3.79,0,0,0-.85,2.39,3.7,3.7,0,1,0,7.39,0,3.8,3.8,0,0,0-.55-2h7a3.81,3.81,0,0,0-.55,2,3.7,3.7,0,1,0,7.39,0A3.56,3.56,0,0,0,27,23Zm-15.4,5.14a1.95,1.95,0,1,1,1.9-1.95A1.93,1.93,0,0,1,11.65,28.17Zm13.25,0a1.95,1.95,0,0,1,0-3.89h0l.16,0a2,2,0,0,1,1.23.48,2,2,0,0,1,.5,1.48A1.93,1.93,0,0,1,24.89,28.17Z"></path>
            <path d="M10.39,8.22h6a7.45,7.45,0,0,1,.55-1.83H10.39a.92.92,0,0,0,0,1.83Z"></path>
            <path d="M23.77,15.69a6.24,6.24,0,1,0-6.23-6.24A6.24,6.24,0,0,0,23.77,15.69ZM20.7,9.28a4.48,4.48,0,0,1,.22-1.47,3.23,3.23,0,0,1,.63-1.1,2.69,2.69,0,0,1,1-.7,3.15,3.15,0,0,1,1.24-.24A3.2,3.2,0,0,1,25,6a2.68,2.68,0,0,1,1,.68,3.12,3.12,0,0,1,.63,1.1,4.53,4.53,0,0,1,.22,1.46v.33A4.82,4.82,0,0,1,26.62,11,3.13,3.13,0,0,1,26,12.17a2.72,2.72,0,0,1-1,.71,3.41,3.41,0,0,1-2.55,0,2.7,2.7,0,0,1-1-.7,3.15,3.15,0,0,1-.61-1.1,4.64,4.64,0,0,1-.21-1.46Z"></path>
            <path d="M23.79,11.93A1.28,1.28,0,0,0,25,11.35a3.33,3.33,0,0,0,.37-1.76V9.26a3.19,3.19,0,0,0-.39-1.72,1.3,1.3,0,0,0-1.17-.61,1.32,1.32,0,0,0-1.17.6,3.13,3.13,0,0,0-.4,1.74v.34a3,3,0,0,0,.41,1.75A1.36,1.36,0,0,0,23.79,11.93Z"></path>
          </svg>
        </div>
      ) : (
        <>
          {isLoading ? (
            <LoadingStyled className="loadingContainer">
              <div style={{ height: "210px" }} className="loader loading">
                <div className="loadingScreen">
                  <div className="pageLoader">
                    <div
                      className="loaderContainer"
                      aria-busy="true"
                      style={{ width: "50px" }}
                    >
                      <svg className="spinner" viewBox="25 25 50 50">
                        <circle
                          className="circle"
                          cx="50"
                          cy="50"
                          r="20"
                          fill="none"
                          strokeWidth="3"
                          strokeMiterlimit="10"
                        ></circle>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </LoadingStyled>
          ) : (
            <div className="Cart_info">
              <div className="Cart_info-container">
                <div className="Cart_info-section">
                  <div>
                    <div className="Cart_info-Products">
                      <div>
                        <h3 className="Cart_info-header">
                          <span className="Cart_info-soldBy">
                            <img src={LogoSVG} alt="" />
                            Sold and shipped by Best Buy Canada
                          </span>
                        </h3>

                        {cartData &&
                          cartData.map((item) => (
                            <div
                              key={item._id}
                              className="Cart_info-Products-list"
                            >
                              <div>
                                <div className="Cart_info-items">
                                  <div className="Cart_info-productDetails">
                                    <div className="Cart_info-imageContainer">
                                      <Link to="">
                                        <img
                                          style={{ width: "100%" }}
                                          itemProp="image"
                                          src={item.imageUrl}
                                          alt="image placeHolder"
                                          width="100%"
                                        />
                                      </Link>
                                    </div>
                                    <div className="Cart_info-detailsContainer">
                                      <div className="leftContainer">
                                        <Link className="title-link" to="/">
                                          {item.title}
                                        </Link>
                                      </div>
                                      <div className="rightContainer">
                                        <div>
                                          <span className="productSaving">
                                            SAVE ${item.save_amount}
                                          </span>
                                          <span>${item.price}</span>
                                          <div className="productSaleEnds">
                                            SALE ends:{" "}
                                            <time
                                              itemProp="priceValidUntil"
                                              dateTime="2022-06-17T06:59:59Z"
                                            >
                                              {item.sale_End}
                                            </time>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="lastContainer">
                                        <div className="available">
                                          <p>
                                            <span>
                                              <svg
                                                width="16"
                                                height="16"
                                                viewBox="0 0 32 32"
                                              >
                                                <path d="M12.22,24.64a.94.94,0,0,1-1.34,0L4.07,17.69a1,1,0,0,1,0-1.37.93.93,0,0,1,1.34,0l6.17,6.25,15-15.21a.93.93,0,0,1,1.34,0,1,1,0,0,1,0,1.36Z"></path>
                                              </svg>
                                            </span>
                                            <span className="container">
                                              Available to ship
                                            </span>
                                          </p>
                                        </div>

                                        <div className="Buttons-container">
                                          <div className="quantity-btns">
                                            <div>
                                              <svg
                                                onClick={(e) => {
                                                  setQuantity((prev) => {
                                                    if (prev > 1) {
                                                      return +prev - 1;
                                                    } else {
                                                      return +prev;
                                                    }
                                                  });
                                                }}
                                                fill={
                                                  item.quantity <= 1
                                                    ? "#c5cbd5"
                                                    : "#0046be"
                                                }
                                                className="darkGrey_oThXm icon_2kG7b icon_q2ZYd"
                                                viewBox="0 0 32 32"
                                              >
                                                <path d="M20.09,15H11.91a1,1,0,0,0,0,2h8.18a1,1,0,0,0,0-2Z"></path>
                                                <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26.2A12.2,12.2,0,1,1,28.2,16,12.21,12.21,0,0,1,16,28.2Z"></path>
                                              </svg>
                                            </div>
                                            <input
                                              maxLength={1}
                                              minLength={0}
                                              type="number"
                                              name="quantity"
                                              className="quantity"
                                              autoComplete="off"
                                              value={item.quantity}
                                              onChange={(e) =>
                                                setQuantity(
                                                  +e.target.value.slice(0, 1)
                                                )
                                              }
                                            />
                                            <div>
                                              <svg
                                                onClick={(e) => {
                                                  setQuantity((prev) => {
                                                    return +prev + 1;
                                                  });
                                                }}
                                                fill="#0046be"
                                                className="darkGrey_oThXm icon_2kG7b icon_q2ZYd"
                                                viewBox="0 0 32 32"
                                              >
                                                <path d="M16,.1A15.9,15.9,0,1,0,31.9,16,15.91,15.91,0,0,0,16,.1Zm4,16.8H16.9V20a.9.9,0,1,1-1.8,0V16.9H12a.9.9,0,1,1,0-1.8h3.1V12a.9.9,0,0,1,1.8,0v3.1H20a.9.9,0,0,1,0,1.8Z"></path>
                                              </svg>
                                            </div>
                                          </div>

                                          <div className="remove-btn">
                                            <div
                                              className="linkButton"
                                              data-automation="remove-button"
                                            >
                                              <span
                                                className="content"
                                                onClick={() =>
                                                  deleteFunction(item._id)
                                                }
                                              >
                                                <svg
                                                  viewBox="0 0 32 32"
                                                  className="blue_2GwtG trashIcon_8UA2U icon_q2ZYd"
                                                  data-name="Layer 1"
                                                >
                                                  <path d="M27,8.1A.89.89,0,0,0,26.1,9l-1,21a.17.17,0,0,1-.15.14H7A.17.17,0,0,1,6.85,30L5.9,9A.9.9,0,0,0,4.1,9l1,21A2,2,0,0,0,7,31.9H25A2,2,0,0,0,26.94,30l1-21A.9.9,0,0,0,27,8.1Z"></path>
                                                  <path d="M31,4.1H1A.9.9,0,0,0,1,5.9H31a.9.9,0,0,0,0-1.8Z"></path>
                                                  <path d="M13.68,1.9h4.64a.9.9,0,0,0,0-1.8H13.68a.9.9,0,0,0,0,1.8Z"></path>
                                                  <path d="M13.9,22V14a.9.9,0,0,0-1.8,0v8a.9.9,0,1,0,1.8,0Z"></path>
                                                  <path d="M19.9,22V14a.9.9,0,0,0-1.8,0v8a.9.9,0,0,0,1.8,0Z"></path>
                                                </svg>
                                                Remove
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {item.protection && (
                                  <div className="Cart_info-protection">
                                    <div className="Cart_info-protection-logo">
                                      <img src={ProtectionSvg} alt="" />
                                    </div>
                                    <div className="Cart_info-protection-benefits">
                                      <a
                                        className="link_18NOy withChevron_3zNWv"
                                        href=""
                                        target="_self"
                                        rel="external"
                                      >
                                        See benefits
                                        <svg
                                          className="darkGrey_oThXm chevron_3C_IW icon_q2ZYd"
                                          focusable="false"
                                          viewBox="-6 -2 32 32"
                                          aria-hidden="true"
                                        >
                                          <path d="M16,20.5a1,1,0,0,1-.74-.29l-7-6.91a1,1,0,0,1,0-1.48,1.06,1.06,0,0,1,1.49,0L16,17.92l6.18-6.13a1.06,1.06,0,0,1,1.49,0,1,1,0,0,1,0,1.48l-7,6.91A1,1,0,0,1,16,20.5Z"></path>
                                        </svg>
                                      </a>
                                    </div>
                                    <div className="Cart_info-protection-plans">
                                      <p className="Cart_info-protection-warranty">
                                        Choose your plan:
                                      </p>
                                      <div className="Cart_info-protection-prices">
                                        <div className="Cart_info-protection-warrantyBoxContainer">
                                          <div
                                            className="Cart_info-protection-text isSelected"
                                            role="button"
                                          >
                                            <p className="text1">No Plan</p>
                                          </div>
                                          <div
                                            className="Cart_info-protection-text"
                                            role="button"
                                          >
                                            <p className="text">2 Years</p>
                                            <p className="price">$39.99</p>
                                          </div>
                                          <div
                                            className="Cart_info-protection-text"
                                            role="button"
                                          >
                                            <p className="text">3 Years</p>
                                            <p className="price">$49.99</p>
                                          </div>
                                          <div
                                            className="Cart_info-protection-text"
                                            role="button"
                                          >
                                            <p className="text">4 Years</p>
                                            <p className="price">$69.99</p>
                                          </div>
                                        </div>

                                        <p className="Cart_info-protection-selected-price">
                                          <span>$0.00</span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                )}

                                <div className="Cart_info-product-total">
                                  <table className="Cart_info-subTotalTable">
                                    <tbody>
                                      <tr>
                                        <td className="Cart_info-subTotalText">
                                          <strong>Product Total</strong>
                                        </td>
                                        <td className="Cart_info-subTotalValue">
                                          <strong>
                                            <span>
                                              ${item.price * item.quantity}
                                            </span>
                                          </strong>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>

                    <div className="Cart_info-Payment">
                      <div className="Cart_info-Payment-first">
                        <div className="Cart_info-Payment-updatePostalCode">
                          <div className="Cart_info-Payment-epcHeader">
                            <div className="Cart_info-Payment-imgCol">
                              <svg
                                className="black_139k1 deliveryIcon_CV3wI icon_3f7hE"
                                viewBox="0 0 32 32"
                              >
                                <path d="M27.86,17.09H27.4l-2.24-4.55a.84.84,0,0,0-.76-.47H20.85V6.17A.85.85,0,0,0,20,5.32H5.52a.85.85,0,0,0-.85.85V8.05a.86.86,0,1,0,1.71,0V7H19.14v10H6.38v-.44a.86.86,0,1,0-1.71,0v5a2.12,2.12,0,0,0,2.12,2.12h.7a3.08,3.08,0,0,0,6.16,0h7.82a3.09,3.09,0,0,0,6.17,0h.22A2.14,2.14,0,0,0,30,21.58V19.23A2.14,2.14,0,0,0,27.86,17.09ZM10.57,25A1.39,1.39,0,1,1,12,23.59,1.38,1.38,0,0,1,10.57,25Zm14,0a1.39,1.39,0,1,1,1.39-1.38A1.38,1.38,0,0,1,24.55,25Zm3.74-3.39a.43.43,0,0,1-.43.43H27.2a3.07,3.07,0,0,0-5.3,0H13.22a3.07,3.07,0,0,0-5.3,0H6.79a.41.41,0,0,1-.41-.41V18.79H20.09A.86.86,0,0,0,21,18V13.78h2.91l2.24,4.54a.85.85,0,0,0,.77.48h1a.43.43,0,0,1,.43.43Z"></path>
                                <path d="M9.86,13.76A.86.86,0,0,0,9,12.91H2.85a.86.86,0,0,0,0,1.72h0l6.14,0A.86.86,0,0,0,9.86,13.76Z"></path>
                                <path d="M5.49,11.76H9A.86.86,0,1,0,9,10H5.49a.86.86,0,0,0,0,1.71Z"></path>
                              </svg>
                            </div>
                            <div className="Cart_info-Payment-textCol">
                              <h2>What's your postal code?</h2>
                            </div>
                          </div>
                          <div className="Cart_info-Payment-epcHeaderRow">
                            It'll help us estimate shipping and delivery.
                          </div>
                          <div className="Cart_info-Payment-epcHeaderRow">
                            Change Postal Code
                          </div>
                        </div>

                        <div className="Cart_info-Payment-postalCodeContainer">
                          <div className="Cart_info-Payment-input-container">
                            <div className="Cart_info-Payment-bbyInput">
                              <div className="false">
                                <input
                                  type="text"
                                  id="postalCode"
                                  name="postalCode"
                                  maxLength={7}
                                  onChange={(e) =>
                                    setPostalCode(e.target.value)
                                  }
                                  value={postalCode}
                                />
                                <div className="highlight"></div>
                              </div>
                            </div>
                            <div className="Cart_info-Payment-error-msg">
                              Please enter a valid postal code.
                            </div>
                          </div>
                          <button
                            className="Cart_info-Payment-button secondary_2Lchg searchBtn_3_HLW regular_1jnnf"
                            type="button"
                          >
                            <span
                              className="Cart_info-Payment-button-content"
                              tabIndex={-1}
                            >
                              Search
                            </span>
                          </button>
                          <button
                            className="Cart_info-Payment-button secondary_2Lchg geolocateBtn_2s3c- regular_1jnnf"
                            type="button"
                          >
                            <span
                              className="Cart_info-Payment-button-content"
                              tabIndex={-1}
                            >
                              <div className="locationIcon">
                                <svg
                                  className="white_3qh7k  icon_q2ZYd"
                                  viewBox="0 0 32 32"
                                >
                                  <path d="M16,23.07A7.07,7.07,0,1,1,23.07,16,7.06,7.06,0,0,1,16,23.07ZM24.94,15A9,9,0,0,0,17,7.06V6a1,1,0,1,0-2,0V7.06A9,9,0,0,0,7.06,15H6a1,1,0,1,0,0,2H7.06A9,9,0,0,0,15,24.94V26a1,1,0,1,0,2,0V24.94A9,9,0,0,0,24.94,17H26a1,1,0,1,0,0-2ZM16,12.07A3.93,3.93,0,1,0,19.93,16,3.93,3.93,0,0,0,16,12.07Z"></path>
                                </svg>
                              </div>
                            </span>
                          </button>
                        </div>
                      </div>

                      <div className="Cart_info-Payment-second">
                        <h2>Order Summary</h2>

                        <div className="Cart_info-Payment-summary">
                          <div
                            className="Cart_info-Payment-summary-continer"
                            style={{ height: "auto" }}
                          >
                            <table>
                              <tbody>
                                <tr>
                                  <th>Product Subtotal</th>
                                  <td>$429.99</td>
                                </tr>
                                <tr className="discount">
                                  <th>Order Discounts</th>
                                  <td>
                                    <div>-$100.00</div>
                                  </td>
                                </tr>
                                <tr>
                                  <th>Estimated Shipping</th>
                                  <td>Free</td>
                                </tr>
                                <tr>
                                  <th>Estimated Taxes</th>
                                  <td>$42.90</td>
                                </tr>
                              </tbody>
                              <tfoot>
                                <tr className="total">
                                  <th>Estimated Total</th>
                                  <td>$372.89</td>
                                </tr>
                              </tfoot>
                            </table>
                          </div>
                        </div>

                        <div className="Cart_info-Payment-checkoutFlowSelector">
                          <h2>Choose how you'd like to get your order:</h2>

                          <div className="Cart_info-Payment-checkout-input-container">
                            <div className="radio-group" role="group">
                              <div className="bbyRadioButton  checked">
                                <div className="radioInput">
                                  <label htmlFor="radioGroup_getItShipped">
                                    <p>Get it Shipped</p>
                                    <input
                                      id="radioGroup_getItShipped"
                                      name="radioGroup"
                                      type="radio"
                                      value="getItShipped"
                                      defaultChecked
                                    />
                                    <div className="highlight"></div>
                                    <span className="checkmark"></span>
                                  </label>
                                  <div className="radioChildren"></div>
                                </div>
                              </div>
                              <div className="bbyRadioButton disabled">
                                <div className="radioInput">
                                  <label
                                    htmlFor="radioGroup_pickUpAtAStore"
                                    className="disabled"
                                  >
                                    Pick Up at Store
                                    <input
                                      className="radioGroup_pickUpAtAStore"
                                      name="radioGroup"
                                      type="radio"
                                      disabled={true}
                                      value="pickUpAtAStore"
                                    />
                                    <div className="highlight"></div>
                                    <span className="disabledCheckmark"></span>
                                  </label>
                                  <div className="radioChildren"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="qpuInCartStateMessage">
                            The item in your cart is only available to ship
                          </p>
                        </div>

                        <Link to="/Payment" className="checkoutbutton">
                          <span className="checkoutcontent" tabIndex={-1}>
                            <span>Continue to Checkout</span>
                          </span>
                        </Link>

                        <p className="buttonSeparation">or</p>

                        <Link
                          className="paypalButton"
                          data-automation="paypal-button"
                          to="#"
                        >
                          <span className="paypalContent">
                            <img className="paypalButtonLogo" src={Paypal} />
                            Checkout
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </CartStyled>
  );
};

export default Cart;
