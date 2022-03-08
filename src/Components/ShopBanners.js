import React, { Component } from "react";

import "../App.css";

export default function ShopBanners() {
  return (
    <section className="small-shop-banner">
      <div className="container">
        <div className="row">
          <div className="cms_banner">
            <div className="col-xs-12 col-md-6">
              <div id="subbanner1" className="banner sub-hover">
                <a href="#">
                  <img
                    src="image/banners/subbanner1.jpg"
                    alt="Sub Banner1"
                    className="img-responsive"
                  />
                </a>
                <div className="bannertext">
                  <p>Save 35% - 45% OFF</p>
                  <h2>Soft & Push Pull Toy</h2>
                  <button className="btn">Shop Now</button>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div id="subbanner2" className="banner sub-hover">
                <a href="#">
                  <img
                    src="image/banners/subbanner2.jpg"
                    alt="Sub Banner2"
                    className="img-responsive"
                  />
                </a>
                <div className="bannertext">
                  <p>New Arrivals</p>
                  <h2>Toys That Make Playing </h2>
                  <button className="btn">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
