import React, { Component } from "react";

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
                <a href="#" className="text-purple">
                  0 to 2 years
                </a>
              </h2>
            </div>
          </div>
          <div className="col-xs-12 age-block">
            <img src="image/4years.png" />
            <div className="age-text">
              <h2>
                <a href="#" className="text-blue">
                  03-04 Years
                </a>
              </h2>
            </div>
          </div>
          <div className="col-xs-12 age-block">
            <img src="image/7years.png" />
            <div className="age-text">
              <h2>
                <a href="#" className="text-green">
                  05-07 Years
                </a>
              </h2>
            </div>
          </div>
          <div className="col-xs-12 age-block">
            <img src="image/10years.png" />
            <div className="age-text">
              <h2>
                <a href="#" className="text-red">
                  08-10 Years
                </a>
              </h2>
            </div>
          </div>
          <div className="col-xs-12 age-block">
            <img src="image/11years.png" />
            <div className="age-text">
              <h2>
                <a href="#" className="text-yellow">
                  11+ Years
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
