import React, { Component } from "react";

import "../App.css";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header>
      <div className="container-fluid">
        <div className="container-fluid" style={{ paddingTop: 20 }}>
          <div className="row">
            <div className="col-sm-12">
              <div className="top-right pull-right" style={{}}>
                <div className="currency" style={{}}>
                  <form action="#" method="post" id="currency">
                    <div className="btn-group">
                      <button
                        className="btn btn-link dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <img src="image/header/united-arab-emirates.svg" />{" "}
                        <strong>USD</strong>{" "}
                        <img
                          className="down-arrow"
                          src="image/header/down-arrow.svg"
                        />{" "}
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#">Euro</a>
                        </li>
                        <li>
                          <a href="#">Pound</a>
                        </li>
                        <li>
                          <a href="#">USD</a>
                        </li>
                      </ul>
                    </div>
                  </form>
                </div>
                <div className="language">
                  <form action="#" method="post" id="language">
                    <div className="btn-group">
                      <button
                        className="btn btn-link dropdown-toggle"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {" "}
                        <img
                          className="lang-flag"
                          src="image/header/640px-Flag_of_the_United_Kingdom.svg.png"
                        />{" "}
                        English{" "}
                        <img
                          className="down-arrow"
                          src="image/header/down-arrow.svg"
                        />
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#">Arabic</a>
                        </li>
                        <li>
                          <a href="#"> English</a>
                        </li>
                      </ul>
                    </div>
                  </form>
                </div>
                <div id="top-links" className="nav pull-right">
                  <ul className="list-inline">
                    <li className="account for-desktop">
                      <a href="signin.html">
                        <img src="image/header/user%20(1).svg" />
                        <span>Sign In</span>
                      </a>
                      <span className="account-ver-line">|</span>
                      <a href="signup.html">
                        <span>Sign Up</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" id="shopping-cart" title="Wish List (0)">
                        <img src="image/header/shopping-cart%20(1).svg" />
                      </a>
                    </li>
                    {/* <li>
                      <a href="#" id="notification" title="Wish List (0)">
                        <img src="image/header/bell.svg" />
                      </a>
                    </li>
                    <li>
                      <a href="#" id="wishlist-total" title="Wish List (0)">
                        <img src="image/header/like.svg" />
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="header-inner"
          style={{ paddingTop: 30, paddingBottom: 30 }}
        >
          <div id="logo" style={{ position: "absolute", top: 30 }}>
            <a href="index.html">
              <img
                src="image/logo.svg"
                title="E-Commerce"
                alt="E-Commerce"
                className="img-responsive"
              />
            </a>
          </div>
          <div className="col-sm-3 col-xs-12 header-left">
            <div className="head-social-media for-mobile">
              <a href="#">
                <img src="image/header/facebook.svg" />
              </a>
              <a href="#">
                <img src="image/header/instagram.svg" />
              </a>
              <a href="#">
                <img src="image/header/linkedin.svg" />
              </a>
              <a href="#">
                <img src="image/header/twitter.svg" />
              </a>
            </div>
          </div>
          <div className="col-sm-9 col-xs-9 header-right">
            <div className="top-left pull-left">
              <button className="head-gift-btn">
                <img src="image/header/gift.svg" /> Gift Finder{" "}
              </button>
            </div>
            <div id="search" className="input-group">
              <input
                type="text"
                name="search"
                placeholder="Search Store"
                className="form-control input-lg"
                style={{ height: "123%" }}
              />
              <span className="input-group-btn">
                <button
                  type="button"
                  className="btn btn-default btn-lg bg-yellow"
                >
                  <span>
                    <i className="fa fa-search"></i>
                  </span>
                </button>
              </span>
            </div>

            <div className="helpful-text-links help-store-loc for-desktop">
              <ul className="list-inline">
                <li>
                  <a href="">
                    <img src="image/header/location-pin.svg" />
                    Store Locator
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src="image/header/help.svg" />
                    Help
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <NavBar />
    </header>
  );
}
