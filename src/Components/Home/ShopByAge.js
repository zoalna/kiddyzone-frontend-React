import React, { Component } from "react";
import { Link } from "react-router-dom"; 

import "../../App.css";

export default function ShopByAge() {
  return (
    <section id="shop-by-age" className="shop-by-age title-bg">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-12 center">
            <div className="heading">
              <h2>Shop By Age</h2>
            </div>
          </div>
        </div>
        <div className="row agebox">
          <div className="col-xs-12 age-block">
            <img src="image/2years.png" />
            <div className="age-text">
              <h2>
              {/* <a href="#ProductDetail" className="text-blue">
                  01-02 Years
                </a> */}
              
              <Link to="/ProductListing" className="parent link">
                <span>01-02</span>
              </Link>
          
              </h2>
            </div>
          </div>
          <div className="col-xs-12 age-block">
            <img src="image/4years.png" />
            <div className="age-text">
              <h2>
              <Link to="/ProductListing" className="parent link">
                <span>03-04</span>
              </Link>
              </h2>
            </div>
          </div>
          <div className="col-xs-12 age-block">
            <img src="image/7years.png" />
            <div className="age-text">
              <h2>
              <Link to="/ProductListing" className="parent link">
                <span>05-06</span>
              </Link>
              </h2>
            </div>
          </div>
          <div className="col-xs-12 age-block">
            <img src="image/10years.png" />
            <div className="age-text">
              <h2>
              <Link to="/ProductListing" className="parent link">
                <span>07-08</span>
              </Link>
              </h2>
            </div>
          </div>
          <div className="col-xs-12 age-block">
            <img src="image/11years.png" />
            <div className="age-text">
              <h2>
              <Link to="/ProductListing" className="parent link">
                <span>+11</span>
              </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
