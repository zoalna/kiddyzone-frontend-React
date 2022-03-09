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
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/ProductDetail" className="parent link">
                <span>About Us</span>
              </Link>
            </li>
            <li>
              <a href="#" className="active parent">
                Categories
              </a>
              <ul>
                <li>
                  <a href="category.html">Category Page</a>
                </li>
                <li>
                  <a href="cart.html">Cart Page</a>
                </li>
                <li>
                  <a href="checkout.html">Checkout Page</a>
                </li>
                <li>
                  <a href="blog.html">Blog Page</a>
                </li>
                <li>
                  <a href="single-blog.html">Singale Blog Page</a>
                </li>
                <li>
                  <a href="register.html">Register Page</a>
                </li>
                <li>
                  <a href="contact.html">Contact Page</a>
                </li>
                <li>
                  <a href="affiliate.html">Affiliate</a>
                </li>
                <li>
                  <a href="forgetpassword.html">Forget Password</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="category.html" className="parent">
                Mystery Box
              </a>{" "}
            </li>
            <li>
              <a href="category.html" className="parent">
                E-Learning
              </a>{" "}
            </li>

            <li>
              <a href="blog.html" className="parent">
                Gift Cards
              </a>
            </li>
            <li>
              <a href="about-us.html">Rewards & Giveaways</a>
            </li>
            <li>
              <a href="contact.html">Promotions</a>{" "}
            </li>
            <li className="help-store-loc for-mobile">
              <a href="#">
                <span>Store Locator</span>
              </a>
            </li>
            <li className="help-store-loc for-mobile">
              <a href="#">
                <span>Help</span>
              </a>
            </li>
            <li className="account for-mobile">
              <a href="#">
                <span>Sign In</span>
              </a>
            </li>
            <li className="account for-mobile">
              <a href="#">
                <span>Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
