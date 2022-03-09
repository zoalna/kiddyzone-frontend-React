import React, { Component } from "react";

import "../../App.css";

export default function SmallShopBanner3() {
  return (
    <section id="mystery-boxes" className="small-shop-banner">
      <div className="container">
        <div className="row">
          <div className="cms_banner">
            <div className="col-xs-12 col-md-6">
              <div className="banner sub-hover off-sale">
                <a href="#">
                  <img
                    src="image/banners4.png"
                    alt="Sub Banner1"
                    className="img-responsive"
                  />
                </a>
                <div className="bannertext">
                  <p className="upto">UPTO</p>
                  <h2 className="text-white">50%</h2>
                  <p className="off">OFF</p>
                  <button className="btn">Shop Now</button>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="banner sub-hover mystery">
                <a href="#">
                  <img
                    src="image/mystery%20boxes.png"
                    alt="Sub Banner2"
                    className="img-responsive"
                  />
                </a>
                <div className="bannertext">
                  <p>Subscribe Now & Explore Our</p>
                  <button className="btn bg-purple text-yellow">
                    MYSTERY BOXES
                  </button>
                  <p>Don't Miss Out!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
