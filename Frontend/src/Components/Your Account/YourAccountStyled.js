import styled from "styled-components";

export const YourAccountStyled = styled.div`


  display: flex;
  padding-right: 24px;
  padding-left: 24px;

  .menu {
    font-size: 16px;
    flex-basis: 25%;
    max-width: 25%;
    flex: 0 0 auto;
    padding-right: 12px;
    padding-left: 84px;

    > div {
      display: flex;
      min-width: 260px;
    }

    > div:nth-of-type(1) {
      background-color: #fff;
      margin-left: 0;
      padding-left: 0;
      margin-top: 4px;
      fill: #0046be;
      display: flex;
      align-items: center;

      > span {
        height: 24px;
        /* width: 24px; */
        padding: 20px 8px 20px 16px;
        font-weight: bolder;
        color: #0046be;

        > svg {
          fill: #0046be;
          height: 24px;
          width: 24px;
        }
      }
    }

    > div:not(:nth-of-type(1)) {
      background-color: #fff;
      margin-left: 0;
      padding-left: 0;
      margin-top: 4px;
      fill: #0046be;
      display: flex;
      align-items: center;

      :hover {
        background-color: #ebebeb;
        cursor: pointer;
      }

      > span {
        height: 24px;
        /* width: 24px; */
        padding: 12px 8px 12px 16px;
        color: #0046be;

        > svg {
          fill: #0046be;
          height: 24px;
          width: 24px;
        }
      }
    }
  }

  .user_info {
    display: flex;
    justify-content: space-between;
    margin: 50px 0;
    align-items: center;

    > div:first-child {
      > div:first-child {
        font-weight: 600;
        color: #1d252c;
      }

      > div:last-child {
        color: #55555a;
        font-size: 14px;
      }
    }

    > div:last-child {
      padding: 0;
      color: #0046be;
      outline: none;
      font-size: 14px;
      font-weight: 600;
      border: none;
      background: none;
    }
  }

  .links {
    max-width: 1280px;
    margin: 0 auto;
    border: none;
    margin-bottom: 0;
    padding-left: 24px;
    padding-right: 24px;
    display: flex;
    font-size: 14px;
    line-height: 24px;
    display: flex;
    align-content: center;
    padding: 12px 0;
    margin-top: 0;

    > a {
      color: #0046be;
      margin-right: 4px;
      text-decoration: none;

      :hover {
        text-decoration: underline;
      }
    }

    > div > svg {
      height: 16px;
      position: relative;
      right: 2px;
      top: 2px;
      width: 16px;
      fill: #55555a;
    }
  }
`;
