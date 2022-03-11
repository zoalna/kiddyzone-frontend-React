import React, { Component } from "react";

import "../../App.css";

export default function SmallShopBanner() {
  return (
    <section id="cards" className="small-shop-banner">
      <div className="container-fluid">
        <div className="row">
          <div className="cms_banner">
            <div className="col-xs-12 col-md-6">
              <div id="subbanner1" className="banner sub-hover bg-red">
                <a href="#">
                  <img
                    src="image/gift-cards.png"
                    alt="Sub Banner1"
                    className="img-responsive"
                  />
                </a>
                <div className="cardtext">
                  <h2 className="text-white">Gift Cards</h2>
                  <button className="btn bg-yellow text-black">Shop Now</button>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="banner sub-hover bg-green">
                <a href="#">
                  <img
                    src="image/subscriptions-cards.png"
                    alt="Sub Banner2"
                    className="img-responsive"
                  />
                </a>
                <div className="bannertext">
                  <h2 className="text-white">Subscription Cards</h2>
                  <button className="btn bg-yellow text-black">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
