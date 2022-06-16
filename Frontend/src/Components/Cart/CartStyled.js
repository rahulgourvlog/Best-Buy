import styled from "styled-components";

export const CartStyled = styled.div`
  font-family: Human BBY, Arial, sans-serif;
  font-size: 16px;
  line-height: 20px;
  color: #1d252c;

  .Cart_header {
    padding: 16px 0 0 16px;
    font-weight: 700;
    background: #fff;
    max-width: 1280px;
    margin: 0 auto;
    box-sizing: border-box;

    .Cart_header-title {
      font-size: 24px;
      line-height: 32px;
      margin: 0;
      font-weight: 400;
    }
  }

  .Cart_info {
    height: auto;
    position: relative;
    transition: height 0.5s cubic-bezier(0.19, 1, 0.22, 1);

    > .Cart_info-container {
      transition: all 0.5s, opacity 0.2s;
      opacity: 1;
      z-index: 1;

      > .Cart_info-section {
        position: relative;
        background: -webkit-linear-gradient(
          left,
          #f4f6f9,
          #f4f6f9 50%,
          hsla(0, 0%, 100%, 0) 0,
          hsla(0, 0%, 100%, 0)
        );
        background: linear-gradient(
          90deg,
          #f4f6f9,
          #f4f6f9 50%,
          hsla(0, 0%, 100%, 0) 0,
          hsla(0, 0%, 100%, 0)
        );
        margin-top: 16px;
        overflow: hidden;

        font-family: Human BBY, Arial, sans-serif;
        font-size: 16px;
        line-height: 20px;
        color: #1d252c;
        margin-left: calc(-50vw + 50%);
        margin-right: calc(-50vw + 50%);
        width: 100%;

        > div {
          max-width: 1280px;
          margin: auto;
          width: 100%;
          display: flex;

          > .Cart_info-Products {
            float: left;
            width: 70%;
            background-color: #f4f6f9;
            padding: 24px 16px 32px;

            > div {
              > div:not(:nth-of-type(1)) {
                margin-top: 8px;
              }

              > h3 {
                padding: 0 0 16px;
                font-size: 14px;
                line-height: 20px;
                margin: 0;
                font-weight: 600;

                > .Cart_info-soldBy {
                  padding: 0 0 16px;
                  font-size: 14px;
                  line-height: 20px;
                  margin: 0;
                  font-weight: 600;
                  display: flex;

                  > img {
                    width: 24px;
                    height: 16px;
                    margin: 2px 8px 2px 0;
                    overflow: hidden;
                  }
                }
              }

              > .Cart_info-Products-list {
                position: relative;

                > div {
                  margin: initial;
                  opacity: 1;
                  max-height: 3000px;
                  overflow: hidden;
                  margin: 0 4px;
                  transition: max-height 0.5s cubic-bezier(0.87, 0, 0.13, 1)
                    0.5s;
                  background-color: #fff;
                  border-radius: 4px;
                  box-shadow: 0 0 2px 0 #c5cbd5;

                  .Cart_info-items {
                    padding: 24px 32px;
                    border-bottom: 1px solid #e0e6ef;

                    > .Cart_info-productDetails {
                      display: flex;

                      > .Cart_info-imageContainer {
                        margin: 0;
                        flex: 0 0 112px;
                        width: 112px;
                        height: 112px;
                      }
                      > .Cart_info-detailsContainer {
                        margin: 0 0 0 24px;
                        height: 100%;
                        width: 100%;

                        > .leftContainer {
                          display: inline-block;
                          max-width: 300px;

                          > a {
                            text-decoration: none;
                            color: #1d252c;
                            cursor: pointer;
                            font-size: 14px;
                            line-height: 20px;

                            :hover {
                              text-decoration: underline;
                            }
                          }
                        }

                        > .rightContainer {
                          margin-top: 0;
                          text-align: right;
                          position: absolute;
                          right: 0;
                          top: 0;
                          padding: 24px 32px 0 0;

                          > div {
                            position: relative;
                            transition: height 0.5s
                              cubic-bezier(0.19, 1, 0.22, 1);
                            display: flex;
                            flex-direction: column;

                            > span {
                              font-size: 12px;
                              font-weight: 600;
                              color: #bb0628;
                              white-space: nowrap;
                              display: inline-block;
                            }

                            > span:nth-of-type(2) {
                              font-size: 18px;
                              display: inline-block;
                            }

                            > .productSaleEnds {
                              font-size: 12px;
                              line-height: 16px;
                              color: #55555a;
                            }
                          }
                        }

                        > .lastContainer {
                          > .available {
                            line-height: 16px;
                            font-size: 12px;
                            color: #55555a;
                            margin-bottom: 0;
                            display: block;

                            > p {
                              display: flex;
                              color: #55555a;
                              height: 26px;
                              align-items: center;
                              font-size: 12px;
                              line-height: 16px;
                              gap: 4px;
                              font-weight: 400;

                              > span > svg {
                                fill: #308800;
                              }
                            }
                          }

                          > .Buttons-container {
                            margin: 16px 0 0;

                            > div {
                              display: flex;
                            }

                            > .quantity-btns {
                              display: flex;
                              align-items: center;

                              > div {
                                height: 100%;

                                > svg {
                                  min-width: 23.85px;
                                  min-height: 23.85px;
                                  transition: all 0.5s ease-out;
                                }
                              }

                              > .quantity {
                                outline: none;
                                font-size: 16px;
                                font-weight: 600;
                                padding: 0 24px;
                                height: 24px;
                                box-sizing: border-box;
                                width: 10%;
                                text-overflow: ellipsis;
                                border: none;
                                text-align: center;
                                transition: color 0.5s ease-out;

                                ::-webkit-outer-spin-button,
                                ::-webkit-inner-spin-button {
                                  -webkit-appearance: none;
                                  margin: 0;
                                }
                              }
                            }

                            > .remove-btn {
                              display: flex;

                              > div {
                                margin: 16px 16px 16px 0;
                                > span {
                                  display: flex;
                                  align-items: center;
                                  color: #0046be;
                                  flex-wrap: nowrap;
                                  cursor: pointer;
                                  font-weight: 600;
                                  font-size: 14px;
                                  line-height: 1.15;

                                  :hover {
                                    text-decoration: underline;
                                  }

                                  > svg {
                                    width: 18px;
                                    height: 18px;
                                    margin-right: 8px;
                                    transition: fill 0.5s ease-out;
                                    fill: #0046be;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }

                  .Cart_info-protection {
                    margin-left: 164px;
                    margin-right: 24px;
                    padding: 24px 32px;
                    padding-right: 0;
                    padding-left: 4px;
                    border-bottom: 1px solid #e0e6ef;
                    display: flex;
                    flex-direction: column;

                    > .Cart_info-protection-logo > img {
                      height: 24px;
                      width: 90px;
                      float: left;
                    }

                    > .Cart_info-protection-benefits {
                      width: 300px;
                      margin-top: 16px;

                      > a {
                        cursor: pointer;
                        font-weight: 600;
                        position: relative;
                        padding-right: 1.2em;
                        text-decoration: none;
                        font-size: 14px;
                        line-height: 20px;

                        :hover {
                          text-decoration: underline;
                        }

                        > svg {
                          position: absolute;
                          fill: currentColor;
                          width: 1.2em;
                          height: 100%;
                          right: 0;
                          top: 0;
                          min-height: 0;
                          min-width: 0;
                        }
                      }
                    }

                    .Cart_info-protection-plans {
                      > .Cart_info-protection-warranty {
                        margin-bottom: 8px;
                        margin-top: 16px;
                        font-weight: 600;
                        font-size: 14px;
                        line-height: 20px;
                      }

                      > .Cart_info-protection-prices {
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 4px;

                        > .Cart_info-protection-warrantyBoxContainer {
                          width: 100%;
                          position: relative;
                          height: auto;
                          transition: height 0.5s cubic-bezier(0.19, 1, 0.22, 1);
                          transition: all 0.5s, opacity 0.2s;
                          opacity: 1;
                          z-index: 1;
                          max-width: 300px;

                          .Cart_info-protection-text {
                            border: 1px solid #c5cbd5;
                            border-radius: 4px;
                            color: #0046be;
                            position: relative;
                            cursor: pointer;
                            display: inline-block;
                            font-weight: 600;
                            text-align: center;
                            padding: 5px 0 4px;
                            margin-right: 8px;
                            margin-bottom: 8px;
                            -webkit-user-select: none;
                            -moz-user-select: none;
                            -ms-user-select: none;
                            user-select: none;
                            box-sizing: border-box;
                            font-size: 14px;
                            line-height: 20px;
                            width: 88px;
                            height: 50px;
                            vertical-align: top;

                            :focus,
                            :hover {
                              box-shadow: inset 0 0 0 1px #0046be;
                              border: 1px solid #0046be;
                            }
                          }

                          .text1 {
                            margin: 10px 0px 0px 0px;
                          }

                          .text {
                            font-size: 14px;
                            font-weight: 600;
                            line-height: 20px;
                            margin: 0;
                          }

                          .price {
                            display: block;
                            color: #55555a;
                            font-weight: 400;
                            line-height: 16px;
                            font-size: 12px;
                            margin: 0;
                          }

                          .isSelected,
                          .isSelected:active,
                          .isSelected:focus,
                          .isSelected:hover {
                            background-color: #001e73;
                            box-shadow: none;
                            border: none;
                            cursor: default;
                            color: #fff;
                            box-sizing: border-box;
                          }
                        }
                      }
                    }
                  }

                  .Cart_info-product-total {
                    padding: 24px 32px;
                    padding-left: 164px;
                    border-bottom: 1px solid #e0e6ef;

                    .Cart_info-subTotalTable {
                      width: 100%;

                      .Cart_info-subTotalText {
                        text-align: left;
                        width: 70%;
                      }

                      .Cart_info-subTotalValue {
                        font-weight: 600;
                        text-align: right;
                        font-size: 16px;
                        position: relative;
                      }
                    }
                  }
                }
              }
            }
          }

          .Cart_info-Payment {
            background-color: #fff;
            padding: 16px;
            float: right;
            width: 30%;
            box-sizing: border-box;
            margin: 0;

            > .Cart_info-Payment-first {
              font-size: 14px;
              border-bottom: 1px solid #e0e6ef;
              padding-bottom: 4px;
              margin-bottom: 12px;

              > .Cart_info-Payment-updatePostalCode {
                font-family: Human BBY, Arial, sans-serif;
                line-height: 20px;
                color: #1d252c;

                > .Cart_info-Payment-epcHeader {
                  display: flex;
                  align-items: center;
                  margin-bottom: 4px;
                  flex-direction: row;

                  > .Cart_info-Payment-imgCol {
                    margin-right: 8px;
                    width: 32px;
                    height: 32px;
                    min-width: 32px;
                    min-height: 32px;
                    background-size: 32px auto;
                    background-position: 50%;
                  }

                  > .Cart_info-Payment-textCol {
                    order: 2;
                    display: flex;
                    align-items: center;

                    > h2 {
                      font-size: 20px;
                      line-height: 24px;
                      font-weight: 600;
                      padding: 0;
                      margin: 0 0 0;
                    }
                  }
                }

                > .Cart_info-Payment-epcHeaderRow {
                  margin-bottom: 8px;
                }
              }

              > .Cart_info-Payment-postalCodeContainer {
                display: flex;
                align-items: flex-start;

                > .Cart_info-Payment-input-container {
                  font-family: Human BBY, Arial, sans-serif;
                  position: relative;
                  padding: 0 0 16px;
                  text-align: left;
                  position: relative;
                  height: 100%;

                  > .Cart_info-Payment-bbyInput {
                    position: relative;

                    > div > #postalCode {
                      border: 1px solid #c5cbd5;
                      border-right: 0;
                      border-radius: 2px 0 0 2px;
                      width: 100%;
                      height: 48px;
                      outline: 0;
                      padding: 0 8px;
                      font-size: 14px;
                      text-transform: uppercase;

                      :hover {
                        box-shadow: inset 1px 0 0 1px #0046be;
                        border-top: 1px solid #0046be;
                        border-bottom: 1px solid #0046be;
                        border-left: 0;
                        padding-left: 9px;
                      }
                    }

                    > div > .highlight {
                      pointer-events: none;
                      position: absolute;
                      box-sizing: border-box;
                      border-radius: 2px;
                      bottom: 0;
                      height: 100%;
                      width: 100%;
                      margin: 0 auto;
                      border: 2px solid transparent;
                      transition: border-color 0.4s;
                    }

                    > div > #postalCode:focus ~ .highlight {
                      box-shadow: 0 0 0 4px rgb(8 94 185 / 15%);
                      border-color: #001e73;
                    }
                  }

                  .Cart_info-Payment-error-msg {
                    margin-top: 0;
                    max-height: 0;
                    opacity: 0;
                    overflow: hidden;
                    font-size: 12px;
                    line-height: 16px;
                    height: auto;
                    color: #bb0628;
                    transition: all 0.2s ease-in-out 0ms, opacity 1s;
                  }
                }

                .Cart_info-Payment-button {
                  transition: border-color 0.2s ease-out,
                    box-shadow 0.2s ease-out;
                  box-shadow: 0 0 0 4px rgb(8 94 185 / 0%);
                  position: relative;
                  background: none;
                  border: 0;
                  border-radius: 0.125rem;
                  box-sizing: border-box;
                  color: #1d252c;
                  cursor: pointer;
                  display: inline-block;
                  font-family: Human BBY, Arial, sans-serif;
                  font-size: 0.875rem;
                  text-decoration: none;
                  text-align: center;
                  height: auto;
                  line-height: 1rem;
                  overflow: visible;
                  padding: 0;
                  width: auto;
                  outline: none;
                }

                > button:nth-of-type(1) {
                  border-top-left-radius: 0;
                  border-bottom-left-radius: 0;
                  height: 50px;
                  width: auto;
                  text-align: center;
                  font-weight: 600;
                  background-color: #0046be;
                  color: #fff;
                  border: none;
                  font-size: 0.875rem;
                  line-height: 1;

                  :hover {
                    background-color: #001e73;
                    border: none;
                  }

                  > span {
                    display: block;
                    position: relative;
                    padding: 0.938rem 1.5rem;
                    -webkit-transition: background-color 0.2s ease-out;
                    transition: background-color 0.2s ease-out;
                    text-align: center;
                    font-weight: 600;
                  }
                }

                > button:nth-of-type(2) {
                  position: relative;
                  width: 48px;
                  height: 50px;
                  border-radius: 2px;
                  margin-left: 16px;
                  background-color: #0046be;
                  color: #fff;
                  border: none;
                  font-size: 0.875rem;
                  font-weight: 600;
                  line-height: 1;

                  :hover {
                    background-color: #001e73;
                    border: none;
                  }

                  > span > div {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    margin: -15px 0 0 -15px;
                    width: 30px;
                    height: 30px;

                    > svg {
                      min-width: 16px;
                      min-height: 16px;
                      overflow: hidden;
                      fill: #fff;
                    }
                  }
                }
              }
            }

            > .Cart_info-Payment-second {
              font-family: Human BBY, Arial, sans-serif;
              line-height: 20px;
              color: #1d252c;
              font-size: 14px;
              margin-bottom: 0;

              > h2 {
                font-size: 20px;
                line-height: 24px;
                font-weight: 600;
                padding: 0;
                margin: 0 0 16px;
              }

              > .Cart_info-Payment-summary {
                margin-bottom: 8px;

                > .Cart_info-Payment-summary-continer {
                  height: auto;
                  position: relative;
                  -webkit-transition: height 0.5s cubic-bezier(0.19, 1, 0.22, 1);
                  transition: height 0.5s cubic-bezier(0.19, 1, 0.22, 1);
                  z-index: 1;
                  transition: all 0.5s, opacity 0.2s;
                  opacity: 1;

                  > table {
                    font-size: 14px;
                    width: 100%;
                    text-align: left;
                    border-spacing: 0;

                    > tbody > tr > th {
                      font-weight: 400;
                      text-align: left;
                      padding: 0 0 8px;
                      margin: 0;
                    }

                    > tbody > tr > td {
                      padding-bottom: 8px;
                      white-space: nowrap;
                      text-align: right;

                      > div {
                        color: #bb0628;
                      }
                    }

                    > tfoot {
                      > tr > th {
                        font-weight: 600;
                        padding-top: 16px;
                        border-top: 1px solid #e0e6ef;
                        font-weight: 600;
                        border-top: 1px solid #e0e6ef;
                        text-align: left;
                        padding-bottom: 8px;
                        margin: 0;
                      }

                      > tr > td {
                        font-weight: 600;
                        padding-top: 16px;
                        border-top: 1px solid #e0e6ef;
                        text-align: right;
                        padding-bottom: 8px;
                        white-space: nowrap;
                      }
                    }
                  }
                }
              }

              > .Cart_info-Payment-checkoutFlowSelector {
                border-top: 1px solid #e0e6ef;
                font-family: Human BBY, Arial, sans-serif;
                padding-top: 16px;
                padding-bottom: 24px;

                > h2 {
                  font-size: 12px;
                  line-height: 24px;
                  padding: 0;
                  font-weight: 600;
                  margin-bottom: 16px;
                }

                > .qpuInCartStateMessage {
                  font-size: 12px;
                  line-height: 16px;
                  margin: -8px 16px 0 24px;
                }

                > .Cart_info-Payment-checkout-input-container {
                  padding: 0;
                  position: relative;
                  height: 100%;

                  > .radio-group > .bbyRadioButton {
                    margin-bottom: 20px;

                    > .radioInput {
                      position: relative;
                      padding: 0;

                      > label {
                        display: block;
                        padding-left: 24px;
                        cursor: pointer;
                        position: relative;
                        font-size: 14px;
                        color: #1d252c;
                        line-height: 20px;
                        margin: 0 0 3px;

                        > input:checked ~ p {
                          color: #001e73;
                          font-weight: 600;
                        }

                        > input {
                          opacity: 0;
                          position: absolute;
                          top: 0;
                          box-sizing: border-box;
                          padding: 0;
                          font-size: 100%;
                          line-height: 1.15;
                          margin: 0;
                        }

                        > .highlight {
                          pointer-events: none;
                          position: absolute;
                          box-sizing: border-box;
                          border-radius: 2px;
                          bottom: 0;
                          height: 100%;
                          width: 100%;
                          margin: 0 auto;
                          border: 2px solid transparent;
                          transition: border-color 0.4s;
                        }

                        > input:checked ~ .checkmark {
                          background-color: #003b64;
                          border: 1px solid #003b64;
                          opacity: 1;

                          :after {
                            margin-left: 3px;
                            margin-top: 3px;
                            width: 6px;
                            height: 6px;
                            background-color: #fff;
                            opacity: 1;
                          }
                        }

                        > input:focus ~ .checkmark {
                          box-shadow: 0 0 0 4px rgb(8 94 185 / 15%);
                          border-color: #001e73;
                        }

                        .checkmark {
                          background-color: #003b64;
                          border: 1px solid #003b64;
                          opacity: 1;
                          height: 14px;
                          width: 14px;
                          margin-top: -7px;
                          position: absolute;
                          box-sizing: border-box;
                          top: 9px;
                          left: 0;
                          border-radius: 50%;
                          transition: all 0.2s;

                          :after {
                            content: "";
                            position: absolute;
                            opacity: 0;
                            margin-left: -3px;
                            margin-top: -3px;
                            width: 6px;
                            height: 6px;
                            width: 8px;
                            height: 8px;
                            border-radius: 50%;
                            transition: all 0.2s;
                          }
                        }
                      }

                      .disabled {
                        color: #c5cbd5;
                        cursor: default;
                        padding-left: 24px;
                        position: relative;
                        font-size: 14px;
                        display: block;
                        line-height: 20px;
                        margin: 0 0 3px;

                        > span {
                          position: absolute;
                          box-sizing: border-box;
                          top: 9px;
                          left: 0;
                          border-radius: 50%;
                          transition: all 0.2s;
                          background-color: #f4f6f9;
                          border: 1px solid #c5cbd5;
                          height: 14px;
                          width: 14px;
                          margin-top: -7px;

                          :after {
                            content: "";
                            background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBzdHJva2U9IiM1NTU1NUEiIGQ9Ik0yNS45MyA2LjE0QTE0IDE0IDAgMDA2LjA4IDI1Ljg3IDE0IDE0IDAgMDAyNS45MyA2LjE0ek0xNiAzLjhhMTIuMTQgMTIuMTQgMCAwMTggM0w2Ljc3IDI0QTEyLjE5IDEyLjE5IDAgMDExNiAzLjh6bTAgMjQuNGExMi4xNCAxMi4xNCAwIDAxLTgtM0wyNS4yMyA4QTEyLjE5IDEyLjE5IDAgMDExNiAyOC4yeiIvPjwvc3ZnPg==)
                              no-repeat;
                            background-size: 10px 10px;
                            display: block;
                            width: 10px;
                            height: 10px;
                            position: absolute;
                            left: 1px;
                            top: 1px;
                          }
                        }
                      }
                    }
                  }
                }
              }

              > .checkoutbutton {
                text-decoration: none;
                color: #1d252c;
                width: 100%;
                height: auto;
                background-color: #ffce00;
                border: none;
                font-size: 0.875rem;
                font-weight: 600;
                line-height: 1;

                transition: border-color 0.2s ease-out, box-shadow 0.2s ease-out;
                box-shadow: 0 0 0 4px rgb(8 94 185 / 0%);
                position: relative;
                border: 0;
                border-radius: 0.125rem;
                box-sizing: border-box;
                cursor: pointer;
                display: inline-block;
                font-family: Human BBY, Arial, sans-serif;
                text-align: center;
                overflow: visible;
                padding: 0;
                margin-bottom: 16px;

                :hover {
                  background-color: #fff200;
                  border: none;
                }

                > span {
                  display: block;
                  position: relative;
                  padding: 0.938rem 1.5rem;
                  transition: background-color 0.2s ease-out;
                }
              }

              > .buttonSeparation {
                text-align: center;
                font-size: 16px;
                line-height: 24px;
                font-weight: 600;
                margin: 0;
              }

              > .paypalButton {
                text-decoration: none;
                background-color: #009cde;
                border: none;
                text-align: center;
                display: block;
                box-shadow: none;
                height: 48px;
                min-width: 150px;
                transition: box-shadow 0.15s ease-in-out;
                color: #1d252c;
                max-width: 243px;
                margin: auto;

                :hover {
                  background-color: #009cde;
                  border: none;
                  text-decoration: none;
                  box-shadow: inset 0 0 100px 100px rgb(0 0 0 / 5%);
                }

                > span {
                  display: block;
                  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
                  color: #fff;
                  font-style: italic;
                  font-weight: 200;
                  margin: 0;
                  padding: 6px;

                  > img {
                    height: 24px;
                    margin-left: 5px;
                    margin-right: 3px;
                    position: relative;
                    top: 4px;
                    width: 91px;
                    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
                    color: #fff;
                    font-style: italic;
                    font-weight: 200;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .content {
    display: flex;
    max-width: 1280px;
    margin: 0 auto;
    position: relative;
    padding: 18px;
    justify-content: space-between;

    > div > h2 {
      font-weight: 600;
      line-height: 24px;
      font-size: 20px;
      margin: 0 0 16px;
    }

    > div > p {
      font-weight: 400;
      margin: 0 0 16px;
    }

    > svg {
      width: 120px;
      height: 120px;
      min-width: 16px;
      min-height: 16px;
    }
  }
`;

export const LoadingStyled = styled.div`
  > .loader {
    transition: height 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    display: block;
    overflow: hidden;
    position: relative;

    > .loadingScreen {
      height: auto;
      opacity: 1;
      pointer-events: auto;

      z-index: 10;
      transition: opacity 0.2s;
      position: absolute;
      width: 100%;
      overflow: hidden;

      :before {
        content: " ";
        display: table;
      }

      :after {
        content: " ";
        display: table;
        clear: both;
      }

      > .pageLoader {
        text-align: center;

        > .loaderContainer {
          position: relative;
          color: #1d252c;
          margin: 50px auto;

          :before {
            content: "";
            display: block;
            padding-top: 100%;
          }

          > .spinner {
            overflow: hidden;

            animation: rotate 2s linear infinite;
            transform-origin: center center;
            height: 100%;
            width: 100%;
            /* position: absolute; */
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;

            > .circle {
              stroke-dasharray: 1, 200;
              stroke-dashoffset: 0;
              animation: dash 1.5s ease-in-out infinite,
                dark_1tpAy 6s ease-in-out infinite;
              stroke-linecap: round;

              @keyframes dash {
                0% {
                  stroke-dasharray: 1, 200;
                  stroke-dashoffset: 0;
                }
                50% {
                  stroke-dasharray: 89, 200;
                  stroke-dashoffset: -35px;
                }
                100% {
                  stroke-dasharray: 89, 200;
                  stroke-dashoffset: -124px;
                }
                0%,
                40%,
                66%,
                80%,
                90%,
                100% {
                  stroke: #1d252c;
                }
              }
            }

            @keyframes rotate {
              100% {
                transform: rotate(1turn);
              }
            }
          }
        }
      }
    }
  }
`;
