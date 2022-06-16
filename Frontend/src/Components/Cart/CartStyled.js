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
        width: 100vw;

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
                    padding: 24px 12px;
                    border-bottom: 1px solid #e0e6ef;
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
            }

            > .Cart_info-Payment-second {
              font-family: Human BBY, Arial, sans-serif;
              line-height: 20px;
              color: #1d252c;
              font-size: 14px;
              margin-bottom: 40px;
            }
          }
        }
      }
    }
  }
`;
