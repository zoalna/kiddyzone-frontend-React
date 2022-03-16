import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";

function NavBar() {
  return (
    <nav id="menu" className="navbar">
      <div className="nav-inner">
        <div className="navbar-header">
          <span id="category" className="visible-xs">
            Categories
          </span>
          <button type="button" className="btn btn-navbar navbar-toggle">
            <i className="fa fa-bars"></i>
          </button>
        </div>
        <div className="navbar-collapse">
          <ul className="main-navigation">
            <li>
              <Link to="/" className="parent link">
                <span className="nav__items">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/About" className="parent link">
                <span className="nav__items">About Us</span>
              </Link>
            </li>
            <li>
              <a href="#" className="active parent">
                Categories
              </a>
              <div className="nav__menu">
                <div className="first__varse">
                 <a href="#" className="banner__name">Bags</a>
                 <a href="#" className="baneer__items">Shop</a>
                 <a href="#" className="baneer__items">Shop</a>
                 <a href="#" className="baneer__items">Shop</a>
                 <a href="#" className="baneer__items">Shop</a>
                 <a href="#" className="banner__name">Kids Fashion</a>
                 <a href="#" className="baneer__items">Shop</a>
                 <a href="#" className="baneer__items">Shop</a>
                 <a href="#" className="baneer__items">Shop</a>
                 <a href="#" className="baneer__items">Shop</a>
                 <a href="#" className="banner__name">Popular Brands</a>
                <div className="image__navbar">
                <img src="image/header/marvel.png" />
                 <img src="image/header/marvel.png" />
                 <img src="image/header/marvel.png" />
                 <img src="image/header/marvel.png" />
                 <img src="image/header/marvel.png" />
                 <img src="image/header/marvel.png" />
                </div>
                 </div>

                 <div className="first__varse">
                 <a href="#" className="banner__name">Women's Fashion</a>
                 <a href="#" className="baneer__items">Shop</a>
                 <a href="#" className="baneer__items">Shop</a>
                 <a href="#" className="baneer__items">Shop</a>
                 <a href="#" className="baneer__items">Shop</a>
                 <a href="#" className="banner__name">Health & Beauty</a>
                 <a href="#" className="baneer__items">Shop</a>
                 <a href="#" className="baneer__items">Shop</a>
                 <a href="#" className="baneer__items">Shop</a>
                 <a href="#" className="baneer__items">Shop</a>
                 </div>

                 <div className="first__varse">
                 <a href="#" className="banner__name">Bags</a>
                 <a href="#" className="baneer__items">Shop</a>
                 <a href="#" className="baneer__items">Shop</a>
                 <a href="#" className="baneer__items">Shop</a>
                 <a href="#" className="baneer__items">Shop</a>
                 <a href="#" className="baneer__items">Shop</a>
                 <a href="#" className="baneer__items">Shop</a>
                 <a href="#" className="baneer__items">Shop</a>
                 </div>

                 <div className="first__varse">
                   <img src="image/header/product2.jpg" />
                 </div>
                 </div>
            </li>
            <li>
            <Link to="/AboutUs" className="parent link">
                <span className="nav__items">Mystery Box</span>
              </Link>
            </li>
            <li>
            <Link to="/Elarning" className="parent link">
                <span className="nav__items">E-Learning</span>
              </Link>
            </li>

            <li>
            <Link to="/GiftCards" className="parent link">
                <span className="nav__items">GiftCards</span>
              </Link>
            </li>
            <li>
              <a href="about-us.html">Rewards & Giveaways</a>
            </li>
            <li>
              <a href="contact.html">Promotions</a>{" "}
            </li>
            <li className="help-store-loc for-mobile">
            <Link to="/StoreLocator" className="parent link">
                <span className="nav__items">Store Locator</span>
              </Link>
            </li>
            <li className="help-store-loc for-mobile">
              <a href="#">
                <span className="nav__items">Help</span>
              </a>
            </li>
            <li className="account for-mobile">
              <a href="#">
                <span className="nav__items">Sign In</span>
              </a>
            </li>
            <li className="account for-mobile">
              <a href="#">
                <span className="nav__items">Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
