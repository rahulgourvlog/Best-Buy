import styled from "styled-components";

export const FooterDiv = styled.div`
  border-top: 1px solid #e0e6ef;
  background: #fff;
  grid-row: 2/3;
  font-family: Human BBY, Arial, sans-serif;

  .Footer_ul {
    display: flex;
    max-width: 976px;
    padding: 48px 16px;
    justify-content: space-between;
    font-family: Human BBY, Arial, sans-serif;
    list-style: none;
    margin: 0 auto;
    box-sizing: border-box;

    > li {
      margin-bottom: 0;
      padding-right: 56px;
      display: flex;
      font-size: 16px;
      list-style: disc;
      line-height: 24px;

      > a {
        align-items: flex-start;
        display: inline-flex;
        color: #0046be;
        font-size: 16px;
        font-weight: 700;
        fill: #0046be;
        text-decoration: none;

        :hover {
          text-decoration: underline;
        }

        > svg {
          overflow: hidden;
          margin-right: 16px;
          min-height: 40px;
          min-width: 40px;
          height: 40px;
          width: 40px;
        }

        > span {
          margin: 0;
          line-height: 20px;
          width: auto;
          font-size: 16px;
          font-weight: 700;
          fill: #0046be;
        }
      }
    }
  }

  .Footer_info {
    background: #f4f6f9;
    display: flex;

    > div {
      box-sizing: border-box;
      padding: 16px 24px 0;
      max-width: 1280px;
      margin: 0 auto;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -webkit-flex-direction: row;
      flex-direction: row;
      display: flex;
      width: 100%;

      .Footer_links {
        width: 70%;

        @media (min-width: 768px) {
          display: flex;
          flex-wrap: wrap;
          box-sizing: border-box;
          margin: 0 -16px;
        }

        @media (min-width: 768px) {
          font-family: Human BBY, Arial, sans-serif;
          background: #f4f6f9;
          vertical-align: top;
        }

        .Footer_link-Group {
          @media (min-width: 768px) {
            padding: 8px;
            flex-basis: 30%;
          }

          @media (min-width: 1768px) {
            flex: 1;
            flex-basis: 33%;
          }

          .Footer_link-Group-continer {
            display: flex;
            flex-direction: column;
            border: none;

            .Footer_link-Group-heading {
              color: #1d252c;
              cursor: auto;
              padding: 0 16px;
              font-weight: 600;
              font-size: 14px;
              line-height: 1.5;
              margin-right: 16px;
            }

            .Footer_link-Group-inner-continer {
              padding: 0 16px;

              .Footer_link-Group-inner-continer-links {
                display: block;
                max-height: none;
                padding: 0;

                > ul {
                  margin-bottom: 16px;
                  padding: 16px 0 0;
                  list-style: none;
                  margin: 0 16px 0 0;

                  > li {
                    font-size: 12px;
                    line-height: 16px;
                    margin-bottom: 16px;
                    padding: 0;

                    > a {
                      color: #1d252c;
                      text-decoration: none;
                      :hover {
                        color: #0046be;
                      }
                    }

                    .Footer_link-Icon {
                      position: relative;
                      padding-left: 24px;

                      > svg {
                        position: absolute;
                        height: 16px;
                        width: 16px;
                        left: 0;
                        top: -1px;
                      }

                      :hover {
                        > svg {
                          > g {
                            > path:nth-child(2) {
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
          }
        }
      }
    }
  }

  .Footer_socials {
    width: 30%;
    border-left: 1px solid #e0e6ef;
    border-top: none;

    .Footer_socials-inner {
      padding: 8px 24px 24px;

      .Footer_socials-title {
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        margin-bottom: 8px;
      }

      .Footer_socials-subtitle {
        font-size: 12px;
        margin-bottom: 8px;
        color: initial;
        line-height: 1.5;
      }

      .Footer_form {
        display: flex;
        flex-direction: row;
        align-items: center;

        .Footer_form_input-container {
          position: relative;
          height: 100%;

          .Footer_form-input {
            font-family: Human BBY, Arial, sans-serif;
            font-weight: 300;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            position: relative;
            display: block;
            width: 100%;
            box-sizing: border-box;
            font-size: 14px;
            line-height: 20px;
            height: 48px;
            padding: 12px;
            border: 1px solid #adadad;
            border-radius: 2px;
            text-overflow: ellipsis;
            outline: none;
          }

          .highlight {
            pointer-events: none;
            position: absolute;
            box-sizing: border-box;
            border-radius: 2px;
            bottom: 0;
            height: 100%;
            width: 100%;
            margin: 0 auto;
            border: 2px solid transparent;
            -webkit-transition: border-color 0.4s;
            transition: border-color 0.4s;
          }

          .Footer_form-input:focus ~ .highlight {
            box-shadow: 0 0 0 4px rgb(8 94 185 / 15%);
            border-color: #001e73;
          }
        }

        .Footer_form-error-msg {
          margin-top: 0;
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          line-height: 16px;
          height: auto;
          color: #bb0628;
          transition: all 0.2s ease-in-out 0ms, opacity 1s;
        }

        .Footer_form-button {
          background-color: #0046be;
          border: none;
          font-weight: 600;
          line-height: 1;
          font-size: 0.875rem;
          color: #fff;

          order: 2;
          min-height: 48px;
          min-width: 84px;
          border-top-left-radius: 0 !important;
          border-bottom-left-radius: 0 !important;
          outline: none;

          transition: border-color 0.2s ease-out, box-shadow 0.2s ease-out;
          box-shadow: 0 0 0 4px rgb(8 94 185 / 0%);
          position: relative;
          border-radius: 0.125rem;
          box-sizing: border-box;
          cursor: pointer;
          display: inline-block;
          font-family: Human BBY, Arial, sans-serif;
          text-decoration: none;
          text-align: center;
          height: auto;
          overflow: visible;
          padding: 0;
          width: auto;
        }
      }
    }

    .Footer_social-icons {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      justify-content: center;

      > a {
        display: flex;
        justify-content: center;
        width: fit-content;
        margin: auto;

        > svg {
          height: 20px;
          width: 20px;
        }
      }
    }
  }

  .Footer_Police {
    background-color: #f4f6f9;

    > div {
      box-sizing: border-box;
      padding: 16px 24px;
      max-width: 1280px;
      color: #55555a;
      font-family: Human BBY, Arial, sans-serif;
      font-size: 10px;
      padding: 16px;
      margin: 0 auto;

      > p {
        font-size: inherit;
        margin: 0 0 8px;
        border-top: 1px solid #e0e6ef;
        padding-top: 16px;
      }

      > ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        padding-left: 0;
        margin-bottom: 0;
        margin: 0 0 16px;
        color: #55555a;
        font-family: Human BBY, Arial, sans-serif;
        font-size: 10px;
        line-height: 1.5;

        > li:nth-of-type(1) {
          > a::before {
            content: none !important;
          }
        }

        > li {
          font-size: inherit;
          margin-bottom: 0;
          padding-left: 0;

          > a {
            border-left: none;
            padding-left: 0;
            color: #1d252c;
            margin-right: 8px;
            line-height: 24px;
            text-decoration: none;

            ::before {
              color: #1d252c;
              content: "|";
              padding-right: 8px;
            }
          }
        }
      }
    }
  }
`;
