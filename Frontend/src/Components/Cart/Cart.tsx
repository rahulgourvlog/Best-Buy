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
                <div className="Cart_info-Payment-first"></div>

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
