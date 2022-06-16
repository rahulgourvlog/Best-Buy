import React from "react";
import { CartStyled } from "./CartStyled";
import LogoSVG from "./LogoSVG.svg";
import ProtectionSvg from "./ProtectionSvg.svg";

const Cart = () => {
  return (
    <CartStyled>
      <div className="Cart_header">
        <h1 className="Cart_header-title" style={{ paddingBottom: "0px" }}>
          Your Cart
        </h1>
      </div>

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

                  <div className="Cart_info-Products-list">
                    <div>
                      <div className="Cart_info-items"></div>

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

                      <div className="Cart_info-product-total">
                        <table className="Cart_info-subTotalTable">
                          <tbody>
                            <tr>
                              <td className="Cart_info-subTotalText">
                                <strong>Product Total</strong>
                              </td>
                              <td className="Cart_info-subTotalValue">
                                <strong>
                                  <span>$329.99</span>
                                </strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="Cart_info-Payment">
                <div className="Cart_info-Payment-first">
                  <div
                    className="updatePostalCode_3C6cq"
                    data-automation="enter-postal-code"
                  >
                    <div className="epcHeader_fRkVs">
                      <div className="imgCol_2IlO-">
                        <svg
                          className="black_139k1 deliveryIcon_CV3wI icon_3f7hE"
                          viewBox="0 0 32 32"
                        >
                          <path d="M27.86,17.09H27.4l-2.24-4.55a.84.84,0,0,0-.76-.47H20.85V6.17A.85.85,0,0,0,20,5.32H5.52a.85.85,0,0,0-.85.85V8.05a.86.86,0,1,0,1.71,0V7H19.14v10H6.38v-.44a.86.86,0,1,0-1.71,0v5a2.12,2.12,0,0,0,2.12,2.12h.7a3.08,3.08,0,0,0,6.16,0h7.82a3.09,3.09,0,0,0,6.17,0h.22A2.14,2.14,0,0,0,30,21.58V19.23A2.14,2.14,0,0,0,27.86,17.09ZM10.57,25A1.39,1.39,0,1,1,12,23.59,1.38,1.38,0,0,1,10.57,25Zm14,0a1.39,1.39,0,1,1,1.39-1.38A1.38,1.38,0,0,1,24.55,25Zm3.74-3.39a.43.43,0,0,1-.43.43H27.2a3.07,3.07,0,0,0-5.3,0H13.22a3.07,3.07,0,0,0-5.3,0H6.79a.41.41,0,0,1-.41-.41V18.79H20.09A.86.86,0,0,0,21,18V13.78h2.91l2.24,4.54a.85.85,0,0,0,.77.48h1a.43.43,0,0,1,.43.43Z"></path>
                          <path d="M9.86,13.76A.86.86,0,0,0,9,12.91H2.85a.86.86,0,0,0,0,1.72h0l6.14,0A.86.86,0,0,0,9.86,13.76Z"></path>
                          <path d="M5.49,11.76H9A.86.86,0,1,0,9,10H5.49a.86.86,0,0,0,0,1.71Z"></path>
                        </svg>
                      </div>
                      <div className="textCol_1DN1y">
                        <h2>What's your postal code?</h2>
                      </div>
                    </div>
                    <div className="epcHeaderRow_2h2kJ">
                      It'll help us estimate shipping and delivery.
                    </div>
                    <div className="epcHeaderRow_2h2kJ">Change Postal Code</div>
                  </div>
                </div>

                <div className="Cart_info-Payment-second"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CartStyled>
  );
};

export default Cart;
