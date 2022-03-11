import React, { Component } from "react";

import "../../App.css";

export default function ShopBanners() {
  return (
    <section className="small-shop-banner">
      <div className="container-fluid">
        <div className="row">
          <div className="cms_banner">
            <div className="col-xs-12 col-md-6">
              <div id="subbanner1" className="banner1 sub-hover">
                <a href="#">
                  <img
                  src="image/banners/banners4.png"
                    alt="Sub Banner1"
                    className="img-responsive"
                  />
                </a>
                <div className="bannertext">
                  <p className="upto-text"> UPTO</p>
                  <p className="fifty-percent">50%</p>
                  <p>OFF</p>
                  {/* <h2>Soft & Push Pull Toy</h2> */}
                  <button className="btn">Shop Now</button>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div id="subbanner2" className="banner2 sub-hover">
                <a href="#">
                  <img
                    src="image/banners/mystery-boxes.png"

                   
                    alt="Sub Banner2"
                    className="img-responsive"
                  />
                </a>
                <div className="bannertext">
                  <p className="Subscribe_Now"><b>Subscribe Now & Explore Our</b></p>
                  <button className="MYSTERY_BOXES">MYSTERY BOXES</button>
                  <h2>Toys That Make Playing </h2>
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
