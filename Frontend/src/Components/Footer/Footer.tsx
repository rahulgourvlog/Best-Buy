import React from "react";
import { Link } from "react-router-dom";
import { FooterDiv } from "./FooterStyled";

const Footer = () => {
  return (
    <FooterDiv>
      <ul className="Footer_ul">
        <li>
          <Link to="/" target="_self" rel="">
            <svg
              className="blue_1P4D2 valuePropIcon_317Cd icon_6Cowp"
              viewBox="0 0 32 32"
            >
              <path d="M22.14,5l1.09-2a.9.9,0,0,0-1.59-.86L20.47,4.25a13,13,0,0,0-3.14-.6V2.4h1.1a.9.9,0,0,0,0-1.8h-4a.9.9,0,0,0,0,1.8h1.1V3.65A12.94,12.94,0,0,0,6.9,7.81.9.9,0,0,0,8.23,9a11.1,11.1,0,1,1-.09,14.85.9.9,0,0,0-1.35,1.2A12.89,12.89,0,1,0,22.14,5Z"></path>
              <path d="M11.2,16.5a.9.9,0,0,0-.9-.9H1.57a.9.9,0,1,0,0,1.8H10.3A.9.9,0,0,0,11.2,16.5Z"></path>
              <path d="M9.2,20.5a.9.9,0,0,0-.9-.9H3.57a.9.9,0,0,0,0,1.8H8.3A.9.9,0,0,0,9.2,20.5Z"></path>
              <path d="M3.57,13.4H10.3a.9.9,0,1,0,0-1.8H3.57a.9.9,0,1,0,0,1.8Z"></path>
              <path d="M19.63,8.71a.9.9,0,0,0-1.22.36l-3.77,7a.9.9,0,0,0,.06.95l4,5.6a.9.9,0,0,0,1.47-1.05l-3.68-5.14L20,9.93A.89.89,0,0,0,19.63,8.71Z"></path>
            </svg>
            <span className="valuePropsContainerText_3H1Zm">
              Quick and Easy Store Pickup
            </span>
          </Link>
        </li>
        <li>
          <Link to="/" target="_self" rel="">
            <svg
              className="blue_3dMIe valuePropIcon_317Cd icon_19_s_"
              viewBox="0 0 35 30"
            >
              <path d="M27.86,17.09H27.4l-2.24-4.55a.84.84,0,0,0-.76-.47H20.85V6.17A.85.85,0,0,0,20,5.32H5.52a.85.85,0,0,0-.85.85V8.05a.86.86,0,1,0,1.71,0V7H19.14v10H6.38v-.44a.86.86,0,1,0-1.71,0v5a2.12,2.12,0,0,0,2.12,2.12h.7a3.08,3.08,0,0,0,6.16,0h7.82a3.09,3.09,0,0,0,6.17,0h.22A2.14,2.14,0,0,0,30,21.58V19.23A2.14,2.14,0,0,0,27.86,17.09ZM10.57,25A1.39,1.39,0,1,1,12,23.59,1.38,1.38,0,0,1,10.57,25Zm14,0a1.39,1.39,0,1,1,1.39-1.38A1.38,1.38,0,0,1,24.55,25Zm3.74-3.39a.43.43,0,0,1-.43.43H27.2a3.07,3.07,0,0,0-5.3,0H13.22a3.07,3.07,0,0,0-5.3,0H6.79a.41.41,0,0,1-.41-.41V18.79H20.09A.86.86,0,0,0,21,18V13.78h2.91l2.24,4.54a.85.85,0,0,0,.77.48h1a.43.43,0,0,1,.43.43Z"></path>
              <path d="M9.86,13.76A.86.86,0,0,0,9,12.91H2.85a.86.86,0,0,0,0,1.72h0l6.14,0A.86.86,0,0,0,9.86,13.76Z"></path>
              <path d="M5.49,11.76H9A.86.86,0,1,0,9,10H5.49a.86.86,0,0,0,0,1.71Z"></path>
            </svg>
            <span className="valuePropsContainerText_3H1Zm">
              Free shipping over $35
            </span>
          </Link>
        </li>
        <li>
          <Link to="/" target="_self" rel="">
            <svg className="valuePropIcon_317Cd icon_6Cowp" viewBox="0 0 35 30">
              <path
                color="blue"
                d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26.2A12.2,12.2,0,1,1,28.2,16,12.21,12.21,0,0,1,16,28.2Z"
              ></path>
              <path
                color="blue"
                d="M16.61,15.19c-1.89-.45-2.19-.78-2.19-1.42v0c0-.63.59-1.05,1.47-1.05a3.82,3.82,0,0,1,2.13.7.86.86,0,0,0,.46.13.82.82,0,0,0,.84-.83.81.81,0,0,0-.39-.71,5.12,5.12,0,0,0-2.06-.8.86.86,0,0,0,0-.17V8.89a.9.9,0,0,0-1.81,0V11a.86.86,0,0,0,0,.16,2.76,2.76,0,0,0-2.48,2.71v0c0,1.76,1.12,2.37,3.17,2.86,1.76.41,2.07.77,2.07,1.38v0c0,.67-.64,1.12-1.6,1.12a4,4,0,0,1-2.59-1,.84.84,0,1,0-1,1.35,6,6,0,0,0,2.45,1.08.87.87,0,0,0,0,.2v2.14a.9.9,0,0,0,1.81,0V21a.85.85,0,0,0,0-.13A2.82,2.82,0,0,0,19.66,18v0C19.66,16.53,18.78,15.72,16.61,15.19Z"
              ></path>
            </svg>
            <span className="valuePropsContainerText_3H1Zm">
              Low Price Guarantee
            </span>
          </Link>
        </li>
        <li>
          <Link
            to="/en-ca/event/new-tech-products/blteaf4620e33f91220"
            target="_self"
            rel=""
          >
            <svg
              className="valuePropIcon_317Cd blue_1P4D2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 35 30"
            >
              <path d="M31.64,10.36a.91.91,0,0,0-1.28,0l-5,5a.9.9,0,0,0-.26.64v5a.9.9,0,0,0,1.8,0V16.37l4.74-4.73A.91.91,0,0,0,31.64,10.36Z"></path>
              <path d="M26,24.1a.9.9,0,0,0-.9.9v5.1H6.9V16a.9.9,0,0,0-.26-.64l-5-5A.91.91,0,1,0,.36,11.64L5.1,16.37V31a.9.9,0,0,0,.9.9H26a.9.9,0,0,0,.9-.9V25A.9.9,0,0,0,26,24.1Z"></path>
              <path d="M9.93,20.54a.9.9,0,0,0,.23.92l2.29,2.24-.54,3.15a.89.89,0,0,0,.36.88.9.9,0,0,0,.53.17.92.92,0,0,0,.42-.1l2.83-1.49,2.83,1.49a.9.9,0,0,0,1.3-.95l-.54-3.15,2.29-2.24a.9.9,0,0,0,.23-.92.92.92,0,0,0-.73-.61l-3.16-.46L16.85,16.6a.9.9,0,0,0-1.61,0l-1.42,2.87-3.16.46A.92.92,0,0,0,9.93,20.54Zm4.62.64a.89.89,0,0,0,.68-.49L16.05,19l.81,1.66a.89.89,0,0,0,.68.49l1.83.27-1.32,1.29a.86.86,0,0,0-.26.79l.31,1.82-1.64-.85a.87.87,0,0,0-.83,0L14,25.35l.31-1.82a.86.86,0,0,0-.26-.79l-1.32-1.29Z"></path>
              <path d="M24,4.9a.91.91,0,0,0,.64-.27A.94.94,0,0,0,24.9,4a.84.84,0,0,0-.07-.35.81.81,0,0,0-.19-.29,1.15,1.15,0,0,0-.29-.2.92.92,0,0,0-.69,0,1,1,0,0,0-.29.2.88.88,0,0,0,0,1.27A.89.89,0,0,0,24,4.9Z"></path>
              <path d="M23,7.9a.91.91,0,0,0,.64-.27A.94.94,0,0,0,23.9,7a.84.84,0,0,0-.07-.35.81.81,0,0,0-.19-.29,1.15,1.15,0,0,0-.29-.2.93.93,0,0,0-1,.2.88.88,0,0,0,0,1.27A.89.89,0,0,0,23,7.9Z"></path>
              <path d="M21.36,10.63a.89.89,0,0,0,1.28,0,.81.81,0,0,0,.19-.29A.83.83,0,0,0,22.9,10a.84.84,0,0,0-.07-.35.71.71,0,0,0-.08-.15.76.76,0,0,0-.11-.14.93.93,0,0,0-1.28,0,.94.94,0,0,0-.26.64.83.83,0,0,0,.07.34A1,1,0,0,0,21.36,10.63Z"></path>
              <path d="M16,9.9a.9.9,0,0,0,.9-.9V1a.9.9,0,1,0-1.8,0V9A.9.9,0,0,0,16,9.9Z"></path>
              <path d="M8,4.9a.91.91,0,0,0,.64-.27.91.91,0,0,0,0-1.27.93.93,0,0,0-1.28,0,.91.91,0,0,0,0,1.27A.91.91,0,0,0,8,4.9Z"></path>
              <path d="M8.37,6.36A.88.88,0,0,0,8.1,7a.9.9,0,0,0,.27.63A.89.89,0,0,0,9,7.9a.91.91,0,0,0,.64-.27A.89.89,0,0,0,9.9,7a.84.84,0,0,0-.07-.35.81.81,0,0,0-.19-.29,1,1,0,0,0-.29-.2,1,1,0,0,0-.69,0A1,1,0,0,0,8.37,6.36Z"></path>
              <path d="M9.5,9.25a.69.69,0,0,0-.13.11.81.81,0,0,0-.12.14.71.71,0,0,0-.08.15A.84.84,0,0,0,9.1,10a.83.83,0,0,0,.07.34.84.84,0,0,0,.2.29.89.89,0,0,0,.63.27.91.91,0,0,0,.64-.27.81.81,0,0,0,.19-.29A.83.83,0,0,0,10.9,10a.84.84,0,0,0-.07-.35.71.71,0,0,0-.08-.15.76.76,0,0,0-.11-.14.93.93,0,0,0-1-.2A.83.83,0,0,0,9.5,9.25Z"></path>
            </svg>
            <span className="valuePropsContainerText_3H1Zm">
              Latest and Greatest Tech
            </span>
          </Link>
        </li>
      </ul>

      <div className="Footer_info">
        <div>
          <div className="Footer_links">
            <div className="Footer_link-Group">
              <div className="Footer_link-Group-continer">
                <div className="Footer_link-Group-heading">
                  Customer Support
                </div>
                <div className="Footer_link-Group-inner-continer">
                  <div className="Footer_link-Group-inner-continer-links">
                    <ul>
                      <li>
                        <a href="/" target="_self" rel="">
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="/" target="_self" rel="">
                          Help Centre
                        </a>
                      </li>
                      <li>
                        <a href="/" target="_self" rel="">
                          Returns &amp; Exchanges
                        </a>
                      </li>
                      <li>
                        <a href="/" target="_self" rel="">
                          Best Buy Financing
                        </a>
                      </li>
                      <li>
                        <a href="/" target="_self" rel="">
                          Best Buy Gift Card
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="Footer_link-Group">
              <div className="Footer_link-Group-continer">
                <div className="Footer_link-Group-heading">Account</div>
                <div className="Footer_link-Group-inner-continer">
                  <div className="Footer_link-Group-inner-continer-links">
                    <ul>
                      <li>
                        <a href="/" target="_self" rel="external">
                          Order Status
                        </a>
                      </li>
                      <li>
                        <a href="/" target="_self" rel="external">
                          Manage Account
                        </a>
                      </li>
                      <li>
                        <a href="/" target="_self" rel="external">
                          Email Preferences
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="Footer_link-Group">
              <div className="Footer_link-Group-continer">
                <div className="Footer_link-Group-heading">Services</div>
                <div className="Footer_link-Group-inner-continer">
                  <div className="Footer_link-Group-inner-continer-links">
                    <ul>
                      <li>
                        <a href="/" target="_self" rel="">
                          Geek Squad
                        </a>
                      </li>
                      <li>
                        <a href="/" target="_self" rel="">
                          In-Home Advisor
                        </a>
                      </li>
                      <li>
                        <a href="/" target="_self" rel="">
                          Trade-In Program
                        </a>
                      </li>
                      <li>
                        <a href="/" target="_self" rel="">
                          Electronics Recycling
                        </a>
                      </li>
                      <li>
                        <a href="/" target="_self" rel="">
                          Best Buy Health
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="Footer_link-Group">
              <div className="Footer_link-Group-continer">
                <div className="Footer_link-Group-heading">About Us</div>
                <div className="Footer_link-Group-inner-continer">
                  <div className="Footer_link-Group-inner-continer-links">
                    <ul>
                      <li>
                        <a href="/" target="_self" rel="">
                          Careers
                        </a>
                      </li>
                      <li>
                        <a href="/" target="_self" rel="">
                          Corporate Information
                        </a>
                      </li>
                      <li>
                        <a href="/" target="_self" rel="">
                          About Best Buy Marketplace
                        </a>
                      </li>
                      <li>
                        <a href="/" target="_self" rel="">
                          Sell on Best Buy Marketplace
                        </a>
                      </li>
                      <li>
                        <a href="/" target="_self" rel="">
                          Best Buy Affiliate Program
                        </a>
                      </li>
                      <li>
                        <a href="/" target="_self" rel="">
                          Advertise with Best Buy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="Footer_link-Group">
              <div className="Footer_link-Group-continer">
                <div className="Footer_link-Group-heading">
                  International Sites
                </div>
                <div className="Footer_link-Group-inner-continer">
                  <div className="Footer_link-Group-inner-continer-links">
                    <ul>
                      <li>
                        <a
                          href="/"
                          target="_blank"
                          rel="external"
                          hrefLang="en-us"
                        >
                          Best Buy US
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="Footer_link-Group">
              <div className="Footer_link-Group-continer">
                <div className="Footer_link-Group-heading">Mobile Apps</div>
                <div className="Footer_link-Group-inner-continer">
                  <div className="Footer_link-Group-inner-continer-links">
                    <ul>
                      <li>
                        <a
                          className="Footer_link-Icon"
                          href="/"
                          target="_blank"
                          rel="external"
                        >
                          <svg
                            className="icon_1Sa2Y icon_6Cowp"
                            viewBox="0 0 24 24"
                          >
                            <g fill="none" fillRule="evenodd">
                              <path d="M0 0h24v24H0z"></path>
                              <path
                                d="M6.6 17.5c0 .504.405.917.9.917h.9v3.208c0 .76.603 1.375 1.35 1.375a1.36 1.36 0 0 0 1.35-1.375v-3.208h1.8v3.208c0 .76.603 1.375 1.35 1.375a1.36 1.36 0 0 0 1.35-1.375v-3.208h.9c.495 0 .9-.413.9-.917V8.333H6.6V17.5zM4.35 8.333A1.36 1.36 0 0 0 3 9.708v6.417c0 .76.603 1.375 1.35 1.375a1.36 1.36 0 0 0 1.35-1.375V9.708a1.36 1.36 0 0 0-1.35-1.375zm15.3 0a1.36 1.36 0 0 0-1.35 1.375v6.417c0 .76.603 1.375 1.35 1.375A1.36 1.36 0 0 0 21 16.125V9.708a1.36 1.36 0 0 0-1.35-1.375zM15.177 2.98l1.17-1.192a.46.46 0 0 0 0-.65.44.44 0 0 0-.639 0l-1.332 1.356A5.178 5.178 0 0 0 12 1.917c-.864 0-1.674.21-2.394.577L8.265 1.137a.44.44 0 0 0-.639 0 .46.46 0 0 0 0 .651L8.805 2.99A5.517 5.517 0 0 0 6.6 7.417h10.8a5.5 5.5 0 0 0-2.223-4.437zM10.2 5.583h-.9v-.916h.9v.916zm4.5 0h-.9v-.916h.9v.916z"
                                fillOpacity=".87"
                                fill="#000"
                                fillRule="nonzero"
                              ></path>
                            </g>
                          </svg>
                          Android App
                        </a>
                      </li>
                      <li>
                        <a
                          className="Footer_link-Icon"
                          href="/"
                          target="_blank"
                          rel="external"
                        >
                          <svg
                            className="icon_1Sa2Y icon_6Cowp"
                            viewBox="0 0 24 24"
                          >
                            <g fill="none" fillRule="evenodd">
                              <path d="M0 0h24v24H0z"></path>
                              <path
                                d="M15.519 4.512c.823-.93 1.374-2.224 1.222-3.512-1.181.04-2.614.737-3.46 1.667-.76.823-1.427 2.14-1.247 3.401 1.318.096 2.665-.627 3.485-1.556M21.63 17.14c-.03.078-.493 1.579-1.627 3.128-.978 1.34-1.995 2.678-3.596 2.704-1.573.028-2.079-.873-3.877-.873-1.8 0-2.362.847-3.85.9-1.545.055-2.723-1.448-3.71-2.783-2.018-2.732-3.557-7.72-1.487-11.085a5.807 5.807 0 0 1 4.86-2.758c1.519-.028 2.95.955 3.878.955.928 0 2.667-1.182 4.497-1.01.765.031 2.915.29 4.297 2.183-.11.065-2.566 1.404-2.54 4.188.032 3.33 3.12 4.437 3.155 4.45"
                                fillOpacity=".87"
                                fill="#000"
                                fillRule="nonzero"
                              ></path>
                            </g>
                          </svg>
                          iOS App
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="Footer_socials">
            <div className="Footer_socials-inner">
              <div className="Footer_socials-title">Be the first to know</div>
              <div className="Footer_socials-subtitle">
                Sign up to stay in the loop about the hottest deals, coolest new
                products, and exclusive sales events.
              </div>
              <div className="Footer_form">
                <div className="Footer_form_input-container">
                  <div className="Footer_form_input-div">
                    <input
                      className="Footer_form-input"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    />
                    <div className="highlight"></div>
                  </div>
                  <div className="Footer_form-error-msg">
                    Please enter a valid email address.
                  </div>
                </div>
                <button className="Footer_form-button" type="submit">
                  <span className="content_3Dbgg" tabIndex={-1}>
                    Sign Up
                  </span>
                </button>
              </div>
            </div>

            <div className="Footer_social-icons">
              <a
                aria-label="Facebook Best Buy Canada"
                href="https://www.facebook.com/BestBuyCanada"
                target="_blank"
                rel="external"
              >
                <svg
                  className="socialIcon_2tIzw icon_6Cowp"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path
                      d="M13.3333333,9.33333333 L13.3333333,7.73333333 C13.3333333,7.04 13.4933333,6.66666667 14.6133333,6.66666667 L16,6.66666667 L16,4 L13.8666667,4 C11.2,4 10.1333333,5.76 10.1333333,7.73333333 L10.1333333,9.33333333 L8,9.33333333 L8,12 L10.1333333,12 L10.1333333,20 L13.3333333,20 L13.3333333,12 L15.68,12 L16,9.33333333 L13.3333333,9.33333333 Z"
                      id="path-Facebook"
                    ></path>
                  </defs>
                  <g
                    id="logos/social/facebook"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g id="facebook">
                      <rect
                        id="bounds"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      ></rect>
                      <mask id="mask-2" fill="white">
                        <use xlinkHref="#path-Facebook"></use>
                      </mask>
                      <use
                        className="black_19uD4"
                        id="Mask"
                        fill="#000000"
                        xlinkHref="#path-Facebook"
                      ></use>
                    </g>
                  </g>
                </svg>
              </a>
              <a
                aria-label="Instagram Best Buy Canada"
                href="https://www.instagram.com/bestbuycanada"
                target="_blank"
                rel="external"
              >
                <svg
                  className="socialIcon_2tIzw icon_6Cowp"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path
                      d="M12,5.442 C14.136,5.442 14.3893333,5.45 15.2333333,5.48866667 C17.4013333,5.58733333 18.414,6.616 18.5126667,8.768 C18.5513333,9.61133333 18.5586667,9.86466667 18.5586667,12.0006667 C18.5586667,14.1373333 18.5506667,14.39 18.5126667,15.2333333 C18.4133333,17.3833333 17.4033333,18.414 15.2333333,18.5126667 C14.3893333,18.5513333 14.1373333,18.5593333 12,18.5593333 C9.864,18.5593333 9.61066667,18.5513333 8.76733333,18.5126667 C6.594,18.4133333 5.58666667,17.38 5.488,15.2326667 C5.44933333,14.3893333 5.44133333,14.1366667 5.44133333,12 C5.44133333,9.864 5.45,9.61133333 5.488,8.76733333 C5.58733333,6.616 6.59733333,5.58666667 8.76733333,5.488 C9.61133333,5.45 9.864,5.442 12,5.442 L12,5.442 Z M12,4 C9.82733333,4 9.55533333,4.00933333 8.702,4.048 C5.79666667,4.18133333 4.182,5.79333333 4.04866667,8.70133333 C4.00933333,9.55533333 4,9.82733333 4,12 C4,14.1726667 4.00933333,14.4453333 4.048,15.2986667 C4.18133333,18.204 5.79333333,19.8186667 8.70133333,19.952 C9.55533333,19.9906667 9.82733333,20 12,20 C14.1726667,20 14.4453333,19.9906667 15.2986667,19.952 C18.2013333,19.8186667 19.82,18.2066667 19.9513333,15.2986667 C19.9906667,14.4453333 20,14.1726667 20,12 C20,9.82733333 19.9906667,9.55533333 19.952,8.702 C19.8213333,5.79933333 18.2073333,4.182 15.2993333,4.04866667 C14.4453333,4.00933333 14.1726667,4 12,4 Z M12,7.892 C9.73133333,7.892 7.892,9.73133333 7.892,12 C7.892,14.2686667 9.73133333,16.1086667 12,16.1086667 C14.2686667,16.1086667 16.108,14.2693333 16.108,12 C16.108,9.73133333 14.2686667,7.892 12,7.892 Z M12,14.6666667 C10.5273333,14.6666667 9.33333333,13.4733333 9.33333333,12 C9.33333333,10.5273333 10.5273333,9.33333333 12,9.33333333 C13.4726667,9.33333333 14.6666667,10.5273333 14.6666667,12 C14.6666667,13.4733333 13.4726667,14.6666667 12,14.6666667 Z M16.2706667,6.77 C15.74,6.77 15.31,7.2 15.31,7.73 C15.31,8.26 15.74,8.69 16.2706667,8.69 C16.8006667,8.69 17.23,8.26 17.23,7.73 C17.23,7.2 16.8006667,6.77 16.2706667,6.77 Z"
                      id="path-Instagram"
                    ></path>
                  </defs>
                  <g
                    id="logos/social/instagram"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g id="instagram">
                      <rect
                        id="bounds"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      ></rect>
                      <mask id="mask-2" fill="white">
                        <use xlinkHref="#path-Instagram"></use>
                      </mask>
                      <use
                        className="black_19uD4"
                        id="Mask"
                        fill="#000000"
                        xlinkHref="#path-Instagram"
                      ></use>
                    </g>
                  </g>
                </svg>
              </a>
              <a
                aria-label="Linkedin Best Buy Canada"
                href="https://www.linkedin.com/company/best-buy"
                target="_blank"
                rel="external"
              >
                <svg
                  className="socialIcon_2tIzw icon_6Cowp"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path
                      d="M7.32,5.63043478 C7.32,6.53108696 6.58,7.26086957 5.66666667,7.26086957 C4.75333333,7.26086957 4.01333333,6.53108696 4.01333333,5.63043478 C4.01333333,4.73043478 4.75333333,4 5.66666667,4 C6.58,4 7.32,4.73043478 7.32,5.63043478 Z M7.33333333,8.56521739 L4,8.56521739 L4,19 L7.33333333,19 L7.33333333,8.56521739 Z M12.6546667,8.56521739 L9.34266667,8.56521739 L9.34266667,19 L12.6553333,19 L12.6553333,13.5223913 C12.6553333,10.4767391 16.6746667,10.2276087 16.6746667,13.5223913 L16.6746667,19 L20,19 L20,12.3928261 C20,7.25369565 14.052,7.44086957 12.6546667,9.97065217 L12.6546667,8.56521739 Z"
                      id="path-Linkedin"
                    ></path>
                  </defs>
                  <g
                    id="logos/social/linkedin"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g id="linkedIn">
                      <rect
                        id="bounds"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      ></rect>
                      <mask id="mask-2" fill="white">
                        <use xlinkHref="#path-Linkedin"></use>
                      </mask>
                      <use
                        className="black_19uD4"
                        id="Mask"
                        fill="#000000"
                        xlinkHref="#path-Linkedin"
                      ></use>
                    </g>
                  </g>
                </svg>
              </a>
              <a
                aria-label="Pinterest Best Buy Canada"
                href="https://www.pinterest.com/bestbuycanada/"
                target="_blank"
                rel="external"
              >
                <svg
                  className="socialIcon_2tIzw icon_6Cowp"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path
                      d="M16.0693746,5.22941694 C17.0571228,5.98601485 17.7447342,7.07614774 17.9288414,8.46313189 L17.9289257,8.46311943 C18.0034121,9.02050857 18.0186346,9.58434206 17.9779651,10.1375151 C17.8806691,11.4605937 17.4642074,12.7287981 16.7748137,13.7099286 C16.0781224,14.7014494 15.1037367,15.4010471 13.8980362,15.5735933 C13.5997653,15.6162613 13.2883675,15.6266542 12.9646861,15.6011705 L12.9640478,15.6011705 C12.2385851,15.5412059 11.8348207,15.2517261 11.3620824,14.9128113 C11.2704105,14.847102 11.1760052,14.7794241 11.0773606,14.7121697 C10.8899589,15.7052615 10.6766755,16.6732595 10.3511393,17.5295542 C9.993003,18.4715911 9.49977894,19.278058 8.75907462,19.835272 L8.54010774,20 L8.50225634,19.7218477 C8.17405889,17.3094096 8.6809513,15.3505144 9.17353706,13.4468942 C9.34365782,12.7894771 9.51205537,12.1386605 9.64089271,11.4910797 C9.34967883,10.9459157 9.27306163,10.2338375 9.37274219,9.56074522 C9.44336276,9.08392016 9.60249999,8.62374304 9.83644853,8.25384086 C10.077659,7.87245741 10.3996427,7.58482218 10.7891392,7.4670363 C11.0904925,7.3759056 11.4271571,7.38749481 11.7917008,7.53690777 L11.7917008,7.53756823 C13.0004399,8.03339721 12.5785706,9.40342744 12.1568951,10.7727603 C12.0243728,11.2031042 11.8918514,11.633386 11.8144379,12.0342861 C11.6591785,12.8382376 11.7482613,13.4944815 12.6241294,13.6755843 L12.6241294,13.6762447 C13.1142099,13.7789147 13.5513137,13.6833104 13.9281849,13.4477883 C14.4468675,13.1236656 14.8574279,12.5345875 15.1408598,11.8277604 C15.4290862,11.1089456 15.5843823,10.2726825 15.58826,9.46817073 C15.5933783,8.40693936 15.3366441,7.4062268 14.7755095,6.81698089 C14.1443325,6.15456695 13.367389,5.82331619 12.5682722,5.75886198 C11.7969734,5.69665433 11.0046352,5.88159508 10.300835,6.25648563 C9.59593041,6.63196175 8.980771,7.19689041 8.56510221,7.89392224 C8.11658248,8.64605932 7.90026463,9.55365248 8.05500607,10.5442047 C8.10158869,10.8431303 8.24051736,11.0802097 8.37395432,11.3078927 C8.669154,11.8116104 8.94124341,12.2759118 8.42041652,13.230905 L8.36120079,13.3394823 L8.24390177,13.3126652 C7.42446754,13.1252574 6.86844044,12.714216 6.51275741,12.1347115 C6.16285782,11.5646373 6.01293421,10.8360367 6,10.0009701 L6,9.99700734 C6.01755881,8.42003678 6.56573515,7.02480198 7.4872145,5.9785104 C8.41325473,4.92704898 9.71518125,4.22864556 11.2333522,4.05294479 C11.3820482,4.03564829 11.5317311,4.02256374 11.6821615,4.01361643 C11.8290272,4.00489341 11.9785175,4.00038237 12.1302846,4.00002101 C13.6179273,3.99655672 15.0145973,4.42150556 16.06938,5.22941995 L16.0693746,5.22941694 Z"
                      id="path-Pinterest"
                    ></path>
                  </defs>
                  <g
                    id="logos/social/pinterest"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g id="pinterest">
                      <rect
                        id="bounds"
                        x="0"
                        y="0"
                        width="24"
                        height="24"
                      ></rect>
                      <mask id="mask-2" fill="white">
                        <use xlinkHref="#path-Pinterest"></use>
                      </mask>
                      <use
                        className="black_19uD4"
                        id="Mask"
                        fill="#000000"
                        xlinkHref="#path-Pinterest"
                      ></use>
                    </g>
                  </g>
                </svg>
              </a>
              <a
                aria-label="Twitter Best Buy Canada"
                href="https://www.twitter.com/bestbuycanada"
                target="_blank"
                rel="external"
              >
                <svg
                  className="socialIcon_2tIzw icon_6Cowp"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path
                      d="M9.7172,18 C15.3776,18 18.4736,13.3828816 18.4736,9.37893733 C18.4736,9.24779605 18.4736,9.11724549 18.4646,8.98728566 C19.0668988,8.55836555 19.5868133,8.02728384 20,7.41890678 C19.4383274,7.66394118 18.8424976,7.82463467 18.2324,7.89562307 C18.8748464,7.51695678 19.3556741,6.92138037 19.5854,6.21973197 C18.9812945,6.57266466 18.3203877,6.82139402 17.6312,6.95518647 C16.6772497,5.95650086 15.1614316,5.71206904 13.9337296,6.35895435 C12.7060275,7.00583966 12.071765,8.38316486 12.3866,9.71860508 C9.91213744,9.5964721 7.60668547,8.44578042 6.044,6.55290172 C5.22717365,7.93735478 5.64439273,9.70847972 6.9968,10.5976061 C6.50704472,10.583315 6.02796762,10.4532403 5.6,10.2183597 C5.6,10.230765 5.6,10.2437609 5.6,10.2567569 C5.60040088,11.6990706 6.63305089,12.9413343 8.069,13.2269298 C7.61592176,13.3485841 7.14054835,13.3663674 6.6794,13.2789137 C7.08256876,14.5131912 8.23794474,15.3587341 9.5546,15.3830816 C8.46484102,16.2263035 7.11863571,16.6840549 5.7326,16.6826799 C5.48774214,16.6822171 5.24312244,16.6676208 5,16.6389661 C6.40738157,17.5281729 8.04494804,17.9998328 9.7172,17.9976371"
                      id="path-Twitter"
                    ></path>
                  </defs>
                  <g
                    id="logos/social/twitter"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g id="twitter">
                      <polygon
                        id="bounds"
                        points="0 0 24 0 24 24 0 24"
                      ></polygon>
                      <mask id="mask-2" fill="white">
                        <use xlinkHref="#path-Twitter"></use>
                      </mask>
                      <use
                        className="black_19uD4"
                        id="Mask"
                        fill="#000000"
                        xlinkHref="#path-Twitter"
                      ></use>
                    </g>
                  </g>
                </svg>
              </a>
              <a
                aria-label="Youtube Best Buy Canada"
                href="https://www.youtube.com/user/CanadaBestBuy"
                target="_blank"
                rel="external"
              >
                <svg
                  className="socialIcon_2tIzw icon_6Cowp"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs>
                    <path
                      d="M17.0766667,6.12275013 C14.674,5.95875013 9.32266667,5.95941679 6.92333333,6.12275013 C4.32533333,6.30008346 4.01933333,7.86941679 4,12.0000835 C4.01933333,16.1234168 4.32266667,17.6994168 6.92333333,17.8774168 C9.32333333,18.0407501 14.674,18.0414168 17.0766667,17.8774168 C19.6746667,17.7000835 19.9806667,16.1307501 20,12.0000835 C19.9806667,7.87675013 19.6773333,6.30075013 17.0766667,6.12275013 Z M10,14.6667501 L10,9.33341679 L15.3333333,11.9954168 L10,14.6667501 L10,14.6667501 Z"
                      id="path-Youtube"
                    ></path>
                  </defs>
                  <g
                    id="logos/social/youtube"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g id="youtube">
                      <polygon
                        id="bounds"
                        points="0 0 24 0 24 24 0 24"
                      ></polygon>
                      <mask id="mask-2" fill="white">
                        <use xlinkHref="#path-Youtube"></use>
                      </mask>
                      <use
                        className="black_19uD4"
                        id="Mask"
                        fill="#000000"
                        xlinkHref="#path-Youtube"
                      ></use>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="Footer_Police">
        <div className="secondaryLinkListContainer_2YLUZ">
          <p className="copyright_-0-2I">
            © Best Buy Canada Ltd. Suite #102, 425 West 6th Avenue, Vancouver,
            BC V5Y 1L3
          </p>
          <ul className="secondaryLinkList_2Ptfc">
            <li className="secondaryLinks_3tf9A">
              <a
                href="/en-ca/help/policies-and-terms-and-conditions/terms-and-conditions"
                target="_self"
                rel=""
              >
                Terms &amp; Conditions
              </a>
            </li>
            <li className="secondaryLinks_3tf9A">
              <a
                href="/en-ca/help/policies-and-terms-and-conditions/conditions-of-use"
                target="_self"
                rel=""
              >
                Conditions of Use
              </a>
            </li>
            <li className="secondaryLinks_3tf9A">
              <a
                href="/en-ca/help/policies-and-terms-and-conditions/online-policies"
                target="_self"
                rel=""
              >
                Online Policies
              </a>
            </li>
            <li className="secondaryLinks_3tf9A">
              <a
                href="/en-ca/help/policies-and-terms-and-conditions/interest-based-ads"
                target="_self"
                rel=""
              >
                Interest-Based Ads
              </a>
            </li>
            <li className="secondaryLinks_3tf9A">
              <a
                href="/en-ca/help/policies-and-terms-and-conditions/privacy-policy"
                target="_self"
                rel=""
              >
                Privacy Policy
              </a>
            </li>
            <li className="secondaryLinks_3tf9A">
              <a
                href="/en-ca/help/policies-and-terms-and-conditions/accessibility-policy"
                target="_self"
                rel=""
              >
                Accessibility Policy
              </a>
            </li>
            <li className="secondaryLinks_3tf9A">
              <a
                href="/en-ca/help/policies-and-terms-and-conditions/geek-squad-terms-and-conditions"
                target="_self"
                rel=""
              >
                Geek Squad Terms &amp; Conditions
              </a>
            </li>
            <li className="secondaryLinks_3tf9A">
              <a
                href="https://www.bestbuy.ca/en-ca/help/haul-away-recycling-and-recalls/product-recalls"
                target="_self"
                rel=""
              >
                Product Recalls
              </a>
            </li>
            <li className="secondaryLinks_3tf9A">
              <a
                href="/en-ca/help/policies-and-terms-and-conditions/credits"
                target="_self"
                rel=""
              >
                Credits
              </a>
            </li>
          </ul>
        </div>
      </div>
    </FooterDiv>
  );
};

export default Footer;
