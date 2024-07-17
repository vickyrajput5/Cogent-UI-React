/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../assets/images/white.png";
import facebook from "../assets/images/facebook-2.png";
import linkedin from "../assets/images/linkedin-2.png";
import youtube from "../assets/images/youtube.png";
import skype from "../assets/images/skype.png";
import google from "../assets/images/google-plus.png";
export const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="footer-section">
            <div className="footer-menu d-flex align-items-center justify-content-between">
              <div className="menu-left">
                <img src={Logo} alt="" />
              </div>
              <div className="menu-right d-flex align-items-center">
                <ul className="menu-ul mb-0 d-flex align-items-center justify-content-between">
                  <li className="menu-li">
                    <a href="#" className="menu-link">
                      Home
                    </a>
                  </li>
                  <li className="menu-li">
                    <a href="#" className="menu-link">
                      Blog
                    </a>
                  </li>
                  <li className="menu-li">
                    <a href="#" className="menu-link">
                      Product
                    </a>
                  </li>
                  <li className="menu-li">
                    <a href="#" className="menu-link">
                      Contact
                    </a>
                  </li>
                </ul>
                <div className="d-flex left-btn">
                  <button className="btn" type="submit">
                    Sign In
                  </button>
                  <button className="btn" type="submit">
                    Sign up
                  </button>
                </div>
              </div>
            </div>
            <div className="footer-social d-flex justify-content-between">
              <div className="social-left">
                <p>
                  udix is a market-leading provider of digital marketing
                  services, using proprietary tools and methodologies to
                  generate high-value engagement for our customers.
                </p>
              </div>
              <div className="social-right">
                <ul className="social-ul d-flex align-items-center">
                  <li className="social-li">
                    <a href="#" className="social-link">
                      <img src={facebook} alt="" />
                    </a>
                  </li>
                  <li className="social-li">
                    <a href="#" className="social-link">
                      <img src={youtube} alt="" />
                    </a>
                  </li>
                  <li className="social-li">
                    <a href="#" className="social-link">
                      <img src={linkedin} alt="" />
                    </a>
                  </li>
                  <li className="social-li">
                    <a href="#" className="social-link">
                      <img src={google} alt="" />
                    </a>
                  </li>
                  <li className="social-li">
                    <a href="#" className="social-link">
                      <img src={skype} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
