import React, { Component } from "react";
import { Link } from "react-router-dom"; 

import "../../App.css";

export default function ShopByAge() {
  return (
    <section id="shop-by-age" className="shop-by-age title-bg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-12 center">
            <div className="heading">
              <h2 style={{ fontSize: "1.7vmax" }}>Shop By Age</h2>
            </div>
          </div>
        </div>
        <div className="row agebox">
          <div className="col-xs-12 age-block">
            <img src="image/shopByAge/2years.png" />
            <div className="age-text">
              <h2>
              {/* <a href="#ProductDetail" className="text-blue">
                  01-02 Years
                </a> */}
              
              <Link to="/ProductListing" className="parent link">
                <span style={{fontSize:"1.8vmax"}}>0 TO 2 Y</span>
              </Link>
          
              </h2>
            </div>
          </div>
          <div className="col-xs-12 age-block">
            <img src="image/shopByAge/4years.png" />
            <div className="age-text">
              <h2>
              <Link to="/ProductListing" className="parent link">
                <span style={{fontSize:"1.8vmax"}}>3 TO 5 Y</span>
              </Link>
              </h2>
            </div>
          </div>
          <div className="col-xs-12 age-block">
            <img src="image/shopByAge/7years.png" />
            <div className="age-text">
              <h2>
              <Link to="/ProductListing" className="parent link">
                <span style={{fontSize:"1.8vmax"}}>6 TO 8 Y</span>
              </Link>
              </h2>
            </div>
          </div>
          <div className="col-xs-12 age-block">
            <img src="image/shopByAge/10years.png" />
            <div className="age-text">
              <h2>
              <Link to="/ProductListing" className="parent link">
                <span style={{fontSize:"1.8vmax"}}>9 TO 10 Y</span>
              </Link>
              </h2>
            </div>
          </div>
          <div className="col-xs-12 age-block">
            <img src="image/shopByAge/11years.png" />
            <div className="age-text">
              <h2>
              <Link to="/ProductListing" className="parent link">
                <span style={{fontSize:"1.8vmax"}}>11 Y +</span>
              </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
