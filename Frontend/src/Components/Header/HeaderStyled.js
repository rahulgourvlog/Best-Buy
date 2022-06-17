import styled from "styled-components";

export const HeaderDiv = styled.div`
  background: #0046be;
  width: 100%;
  position: relative;
  z-index: 1050;
  font-family: Human BBY, Arial, sans-serif;

  > div:first-child {
    font-size: 30px;
    color: #fff;
    max-width: 1280px;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0 0 16px 16px;

    > div:first-child {
      padding: 16px 0;
      display: flex;
      -webkit-box-pack: end;
      justify-content: flex-end;
      width: 100%;

      .upperlinks {
        color: #fff;
        padding: 0 8px !important;
        line-height: 16px;
        text-decoration: none;
        font-size: 12px;
        font-weight: 400;

        :hover {
          text-decoration: underline;
        }
      }
    }

    > div:last-child {
      height: 48px;
      min-height: 48px;
      display: flex;
      position: relative;

      > a {
        font-size: 0;

        > img {
          width: 82px;
          height: 48px;
          overflow: hidden;
        }
      }

      > div:nth-of-type(1) {
        display: block;
        padding: 0 32px;
        width: 100%;

        > div:nth-of-type(1) {
          max-width: 460px;
          height: 45px;
          background-color: #fff;
          border-radius: 2px;
          -webkit-box-flex: 1;
          -webkit-flex-grow: 1;
          flex-grow: 1;
          position: relative;
          display: flex;
          align-items: center;

          > div {
            > .searchBar {
              -webkit-appearance: textfield;
              outline-offset: -2px;
              height: 48px !important;
              border-radius: 2px;
              padding: 1px 2px;
              display: block !important;
              font-family: Human BBY, Arial, sans-serif;
              height: 40px !important;
              line-height: normal;
              overflow: hidden;
              width: 97%;
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none;
              border: none;
              padding-left: 12px;
              outline: none;
              font-size: 14px;
            }
          }
        }

        div:nth-of-type(2) {
          position: absolute;
          right: 0;
          top: 0;
          height: 100%;

          > button:nth-of-type(1) {
            border: 0;
            cursor: pointer;
            font-weight: 600;
            padding: 0;
            color: #0046be;
            outline: none;
            -webkit-tap-highlight-color: transparent;

            position: absolute;
            left: -96px;
            height: 100%;
            width: 48px;
            background-color: #fff;
            pointer-events: none;
            opacity: 0;
            visibility: hidden;
            -webkit-transition: visibility 0.5s,
              opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1);
            transition: visibility 0.5s,
              opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1);

            > svg {
              min-width: 16px;
              min-height: 16px;
              fill: #c5cbd5;
              overflow: hidden;
              position: absolute;
              right: 0;
              opacity: 0;
              color: #0046be;
              height: 28px;
              top: 10px;
              padding: 0;
              -webkit-transition: right 0.5s cubic-bezier(0.19, 1, 0.22, 1),
                opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1);
              transition: right 0.5s cubic-bezier(0.19, 1, 0.22, 1),
                opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1);
            }

            ::after {
              content: "";
              position: absolute;
              right: -10px;
              height: 25px;
              top: 11px;
              opacity: 0;
              visibility: hidden;
              z-index: 10;
              border-right: 1px solid #c5cbd5;
              -webkit-transition: visibility 0.5s,
                opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1),
                right 0.5s cubic-bezier(0.19, 1, 0.22, 1);
              transition: visibility 0.5s,
                opacity 0.5s cubic-bezier(0.19, 1, 0.22, 1),
                right 0.5s cubic-bezier(0.19, 1, 0.22, 1);
            }
          }

          .activeInput::after {
            right: 0 !important;
            opacity: 1 !important;
            visibility: visible !important;
          }

          > .searchBtn {
            position: absolute;
            right: 0;
            padding: 0 12px;
            height: 100%;
            width: 48px;
            line-height: 0;
            background-color: transparent;
            border: none;

            > svg {
              fill: #0046be;
            }
          }
        }
      }

      > div:nth-of-type(2) {
        min-width: 410px;
        display: flex;
        align-items: center;
        justify-content: right;

        > div > a,
        > a {
          display: flex;
          align-items: center;
          padding: 0 24px 0 8px;
          color: #fff;
          font-family: Human BBY, Arial, sans-serif;
          text-decoration: none;
          /* display: block; */
          position: relative;
          z-index: 20;
          height: 24px;
          cursor: pointer;

          > svg {
            height: 24px;
            width: 24px;
            fill: #fff;
            padding-right: 8px;
          }

          > div,
          > span {
            font-family: Human BBY, Arial, sans-serif;
            font-size: 14px;
            font-weight: 600;
            color: #fff;
            text-transform: none;
          }

          .counter {
            color: #1d252c;
            background-color: #ffce00;
            display: block;
            width: 16px;
            height: 16px;
            line-height: 16px;
            border-radius: 50%;
            position: absolute;
            text-align: center;
            font-size: 10px;
            font-weight: 600;
            left: 22px;
            top: -4px;
            z-index: 30;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          :hover {
            > div,
            > span:not(.counter) {
              color: #fff200;
            }

            > svg {
              fill: #fff200;
            }
          }
        }
      }
    }
  }

  > .Dropdowns {
    background-color: #003da6;

    > div {
      color: #fff;
      max-width: 1280px;
      box-sizing: border-box;
      margin: 0 auto;
      padding: 0 0 0 16px;

      > div {
        height: auto;
        width: 100%;
        display: flex;

        > div {
          display: flex;
          max-width: 100%;
          position: static;
        }
      }
    }
  }

  .rootMenu_ul {
    list-style: none;
    padding: 12px 0;
    margin: 0;
    display: flex;

    li {
      position: relative;
      display: inline;
      margin-right: 24px;
      line-height: 24px;
      align-items: center;

      > button {
        padding: inherit;
        background: none;
        border-bottom: none;
        color: #fff;
        width: inherit;
        text-align: center;
        font-size: 100%;
        font-weight: 600;
        outline: none;
        border: none;
        display: flex;
        align-items: center;

        > img {
          height: 24px;
          width: 24px;
          padding-right: 8px;
        }
      }
    }
  }

  .menuArrow {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -12px;
    opacity: 0;
    width: 0;
    height: 0;
    border: 3px solid transparent;
    border-bottom-color: #fff;
    border-width: 8px 10px;
    z-index: 99999999;
    transition: opacity 0.4s ease-in-out;
  }

  .menuArrowActive {
    opacity: 1;
  }

  .menu {
    @media (min-width: 1025px) {
      top: 100%;
      height: 0;
      transform: translateY(-20px);
      margin-top: 12px;
      z-index: -1;
    }

    @media (min-width: 768px) {
      width: 320px;
    }

    opacity: 0;
    visibility: hidden;
    position: absolute;
    height: 100%;
    background-color: #fff;
    left: 0;
    box-sizing: border-box;
    transition: all 0.3s ease-in-out;
    transform: translateX(100vw);
    overflow-x: hidden;
    overflow-y: auto;
  }

  .menuActive {
    @media (min-width: 1025px) {
      height: auto;
      transform: translateY(0);
      overflow: visible;
    }
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }

  .menu > div {
    overflow-y: scroll;
    overflow-x: hidden;
    width: 100%;
    height: 100%;
  }

  .menu > div > .menuLink {
    margin-top: 8px;

    @media (min-width: 1025px) {
      width: 100%;
      padding: 10px 16px 10px 24px;
      border: none;
      margin: 0;
    }
  }

  .menu .categoryTitle,
  .menu .menuLink {
    padding: 14px 16px;
    background-color: #fff;
    border-bottom: 1px solid #e0e6ef;
    color: #1d252c;
    text-align: left;
    font-size: 14px;
    font-family: Human BBY, Arial, sans-serif;
    line-height: 20px;
    text-decoration: none;
  }

  .menuLink:hover {
    background-color: #f4f6f9;
    color: #0046be;
    text-decoration: none;
  }

  .menu .menuLink {
    font-weight: 100;

    @media (min-width: 1025px) {
      width: 100%;
    }

    @media (min-width: 768px) {
      width: 320px;
    }
  }

  .menuLink {
    width: 100%;
    color: #000;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 100%;
    box-sizing: border-box;

    > svg {
      height: 24px;
      width: 24px;
      padding-right: 8px;
    }
  }

  .menuInner {
    width: 100%;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    height: 100%;
    background-color: #fff;
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease-in-out;

    @media (min-width: 1025px) {
      margin-top: 0;
    }
    @media (min-width: 1025px) {
      left: 100%;
    }

    @media (min-width: 1025px) {
      border-width: 1px;
      border-left: 1px solid #e0e6ef;
    }

    @media (min-width: 768px) {
      width: 320px;
    }

    > div {
      .categoryTitle {
        margin-top: 8px;
        padding-top: 10px;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin: 0;
        border: none;
        width: auto;
        font-size: 16px;
        line-height: 24px;
        font-weight: 600;
        padding: 10px 16px 10px 24px;
      }

      .sectionHeader {
        color: #1d252c;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        font-family: Human BBY, Arial, sans-serif;
        padding: 12px 12px 12px 16px;
      }

      .menuLink {
        width: 100%;
        padding: 10px 16px 10px 24px;
        border: none;
        margin: 0;
      }
    }
  }

  .menuInnerActive {
    visibility: visible;
    opacity: 1;
    left: 100%;

    > div {
      overflow-y: scroll;
      overflow-x: hidden;
      width: 100%;
      height: 100%;
    }
  }
`;
