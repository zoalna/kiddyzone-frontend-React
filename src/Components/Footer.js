import React, { Component } from "react";

import "../App.css";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="cms_searvice">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="text-center">
                <img className="ftr-logo" src="image/logo.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 footer-block">
            <h5 className="footer-title">Information</h5>
            <hr />
            <ul className="list-unstyled ul-wrapper footer-list">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Store Locations</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Advertise with us</a>
              </li>
              <li>
                <a href="#">Join us</a>
              </li>
            </ul>
            <div className="qatar-logo">
              <img src="image/Qatat-logo.svg" />
            </div>
          </div>
          <div className="col-sm-3 footer-block footer-list">
            <h5 className="footer-title">Policies</h5>
            <hr />
            <ul className="list-unstyled ul-wrapper">
              <li>
                <a href="#">Return Policy</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Security Policy</a>
              </li>
              <li>
                <a href="#">Delivery Policy</a>
              </li>
              <li>
                <a href="#">Terms of Sale</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3 footer-block footer-list">
            <h5 className="footer-title">Account</h5>
            <hr />
            <ul className="list-unstyled ul-wrapper">
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">Wishlist</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3 footer-block">
            <div className="content_footercms_right">
              <div className="footer-contact footer-list">
                <h5 className="contact-title footer-title">Contact</h5>
                <hr />
                <ul className="ul-wrapper">
                  <li>
                    <img src="image/CALL.svg" />
                    <span className="phone2">
                      <a href="tel:+97-345-345678">+974 6653 5414</a>
                    </span>
                  </li>
                  <li>
                    <img src="image/envelope.svg" />
                    <span className="mail2">
                      <a href="#">online@qntgc.com</a>
                    </span>
                  </li>
                  <li>
                    <img src="image/location.svg" />
                    <span className="mail2">
                      <a href="#">
                        Kiddy Zone at Landmark Mall Basement Floor Qatar Ar
                        Rayyan
                      </a>
                    </span>
                  </li>
                </ul>
                <div className="social-media">
                  <ul className="footer-link">
                    <li>
                      <a href="#">
                        <img src="image/FACEBOOK (1).svg" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="image/INSTA.svg" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="image/twitter.svg" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="image/youtube.svg" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="whatsapp">
                  <a href="#">
                    <img src="image/whatsapp-icon.svg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div id="bottom-footer">
              <div className="col-md-6 copyright left">
                {" "}
                Copyright © Kiddy Zone
              </div>
              <div className="col-md-6 copyright right">
                {" "}
                ©2020 - All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </div>
      <a id="scrollup">Scroll</a>
    </footer>
  );
}
