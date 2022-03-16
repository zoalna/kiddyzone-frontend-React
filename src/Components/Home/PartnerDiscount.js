import React, { Component } from "react";

import "../../App.css";

export default function PartnerDiscount() {
  return (
    <div id="partners-discount" className="container-fluid">
      <div className="heading">
        <h2 style={{fontSize:'1.2vmax'}}>
          Our Partners Discount
        </h2>
      </div>
      <div id="brand_carouse" className="owl-carousel brand-logo">
        <div className="item text-center">
          {" "}
          <a href="#">
            <img
              src="image/brand/brand1.png"
              alt="Disney"
              className="img-responsive"
            />
          </a>{" "}
        </div>
        <div className="item text-center">
          {" "}
          <a href="#">
            <img
              src="image/brand/brand2.png"
              alt="Dell"
              className="img-responsive"
            />
          </a>{" "}
        </div>
        <div className="item text-center">
          {" "}
          <a href="#">
            <img
              src="image/brand/brand3.png"
              alt="Harley"
              className="img-responsive"
            />
          </a>{" "}
        </div>
        <div className="item text-center">
          {" "}
          <a href="#">
            <img
              src="image/brand/brand4.png"
              alt="Canon"
              className="img-responsive"
            />
          </a>{" "}
        </div>
        <div className="item text-center">
          {" "}
          <a href="#">
            <img
              src="image/brand/brand5.png"
              alt="Canon"
              className="img-responsive"
            />
          </a>{" "}
        </div>
        <div className="item text-center">
          {" "}
          <a href="#">
            <img
              src="image/brand/brand6.png"
              alt="Canon"
              className="img-responsive"
            />
          </a>{" "}
        </div>
        <div className="item text-center">
          {" "}
          <a href="#">
            <img
              src="image/brand/brand7.png"
              alt="Canon"
              className="img-responsive"
            />
          </a>{" "}
        </div>
      </div>
    </div>
  );
}
