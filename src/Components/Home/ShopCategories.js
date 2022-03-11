import React, { Component } from "react";

import "../../App.css";

export default function ShopCategories() {
  return (
    <section id="shop-categories" className="shop-by-category">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="heading">
              <h2 style={{fontSize:'16px'}}>  
                Shop By
                <br /> Category
              </h2>
            </div>
          </div>
        </div>
        <div className="row agebox">
          <div className="col-xs-12 age-block">
            <img src="image/2years.png" />
            <div className="age-text">
              <h2>
                <a href="#" className="text-purple">
                  Vehicles & Cars
                </a>
              </h2>
            </div>
          </div>
          <div className="col-xs-12 age-block">
            <img src="image/4years.png"  className="age-by-img"/>
            <div className="age-text">
              <h2>
                <a href="#" className="text-blue">
                  Riding Toys
                </a>
              </h2>
            </div>
          </div>
          <div className="col-xs-12 age-block">
            <img src="image/7years.png" />
            <div className="age-text">
              <h2>
                <a href="#" className="text-green">
                  Dolls & Dollhouse
                </a>
              </h2>
            </div>
          </div>
          <div className="col-xs-12 age-block">
            <img src="image/10years.png" />
            <div className="age-text">
              <h2>
                <a href="#" className="text-red">
                  Action Figures
                </a>
              </h2>
            </div>
          </div>
          <div className="col-xs-12 age-block">
            <img src="image/11years.png" />
            <div className="age-text">
              <h2>
                <a href="#" className="text-yellow">
                  Stuffed Animals
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
