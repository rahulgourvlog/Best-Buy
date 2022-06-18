import styled from "styled-components";

export const UserDiv = styled.div`
  .userIcons {
    height: 20px;
    width: 20px;
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

  .pageHeading {
    padding: 48px 0 32px;
    border-bottom: 1px solid #e0e6ef;
    background: linear-gradient(135deg, #fff, #f4f6f9);
    padding: 64px 0 32px;

    > div {
      padding: 0 24px;
      box-sizing: border-box;
      margin: 0 auto;
      max-width: 1023px;

      > h2 {
        font-size: 48px;
        line-height: 60px;
        color: #0046be;
        font-weight: 800;
        margin: 0;
        word-break: break-word;
        font-family: Human BBY, Arial, sans-serif;
      }

      > span {
        font-size: 24px;
        line-height: 32px;
        display: block;
      }
    }
  }

  .userPages {
    padding: 24px 16px 16px;
    margin-bottom: 16px;
    margin: 0 auto;
    max-width: 1280px;
    box-sizing: border-box;

    > div {
      padding: 0;
      margin: 0 -8px;
      display: flex;
      width: 100%;
      margin: 0;
      flex-wrap: wrap;
      box-sizing: border-box;
      display: flex;
      flex: 0 1 auto;
      flex-direction: row;
      flex-wrap: wrap;

      > div {
        flex-basis: 33.33333333%;
        max-width: 33.33333333%;
        flex: 0 0 auto;
        padding-right: 12px;
        padding-left: 12px;
        box-sizing: border-box;
        margin-bottom: 85px;

        @media screen and (min-width: 1428px) {
          flex-basis: 50%;
          max-width: 50%;
        }

        > div {
          position: relative;
          border-radius: 8px;
          border: 1px solid #e0e6ef;
          -webkit-transition: -webkit-transform 75ms ease-in-out,
            -webkit-box-shadow 75ms ease-in-out;
          transition: -webkit-transform 75ms ease-in-out,
            -webkit-box-shadow 75ms ease-in-out;
          -o-transition: transform 75ms ease-in-out, box-shadow 75ms ease-in-out;
          transition: transform 75ms ease-in-out, box-shadow 75ms ease-in-out;
          transition: transform 75ms ease-in-out, box-shadow 75ms ease-in-out,
            -webkit-transform 75ms ease-in-out,
            -webkit-box-shadow 75ms ease-in-out;
          margin: 0;
          flex: 0 0 auto;
          min-height: 100%;
          padding: 32px;
          display: flex;

          :hover {
            border: 1px solid #0046be;
            transform: translateY(-8px);
            box-shadow: 0 40px 32px -32px rgb(0 0 0 / 32%);

            > .content_Div > div:nth-of-type(2) {
              text-decoration: underline;
            }
          }

          > div {
            align-items: flex-start;
            position: relative;
            margin: 0;
          }

          > .svg_div {
            display: block;
            margin-right: 16px;
            color: #0046be;

            > svg {
              width: 28px;
              height: 28px;
              min-width: 16px;
              min-height: 16px;
              fill: #0046be;
            }
          }

          > .content_Div {
            min-height: 155px;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            > div > h3 {
              color: #0046be;
              margin: 0;
            }

            > div:nth-of-type(2) {
              display: flex;
              align-items: center;
              color: #0046be;
              font-size: 14px;
              line-height: 20px;
              font-weight: 700;
              white-space: nowrap;
              cursor: pointer;

              > svg {
                height: 16px;
                width: 16px;
                fill: #0046be;
              }
            }

            > div > p:nth-of-type(1) {
              margin: 0 0 16px;
              line-height: 24px;
              font-size: 14px;
              color: #55555a;
            }

            > div > p:nth-of-type(2) {
              font-weight: 700;
              line-height: 20px;
              margin-bottom: 0;
              margin: 0 0 24px;

              > span {
                display: flex;
                margin-left: -32px;
                justify-content: flex-start;
                font-size: 14px;
                color: #55555a;

                > span:first-child {
                  min-height: 10px;
                  min-width: 10px;
                  max-height: 10px;
                  max-width: 10px;
                  background-color: #ffce00;
                  border-radius: 5px;
                  margin: 0;
                  margin-right: 24px;
                  line-height: 20px;
                  margin-top: 5px;
                }
              }
            }
          }
        }
      }
    }
  }
`;
