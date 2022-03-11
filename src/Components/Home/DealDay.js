import React, { Component } from "react";

import "../../App.css";

export default function DealDay() {
  return (
    <section id="single-product" className="content card">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="heading">
              <h2 style={{fontSize:'20px'}}>
                Deal
                <br /> Of The Day
              </h2>
            </div>
          </div>
        </div>
        <div className="row bg-yellow" style={{background:'#f7f7f7'}}>
          <div className="preview col-md-6">
            <div className="preview-pic tab-content">
              <div className="tab-pane active" id="pic-1">
                <img src="image/product/product-1.png" />
              </div>
              <div className="tab-pane" id="pic-2">
                <img src="image/product/product-4.png" />
              </div>
              <div className="tab-pane" id="pic-3">
                <img src="image/product/product-3.png" />
              </div>
              <div className="tab-pane" id="pic-4">
                <img src="image/product/product-4.png" />
              </div>
            </div>
            <ul className="preview-thumbnail nav nav-tabs">
              <li className="active">
                <a data-target="#pic-1" data-toggle="tab">
                  <img src="image/product/product-1.png" />
                </a>
              </li>
              <li>
                <a data-target="#pic-2" data-toggle="tab">
                  <img src="image/product/product-4.png" />
                </a>
              </li>
              <li>
                <a data-target="#pic-3" data-toggle="tab">
                  <img src="image/product/product-3.png" />
                </a>
              </li>
              <li>
                <a data-target="#pic-4" data-toggle="tab">
                  <img src="image/product/product-4.png" />
                </a>
              </li>
            </ul>
          </div>
          <div className="details col-md-6">
            <div className="rating" style={{display:'none'}}>
              {" "}
              <span className="fa fa-stack">
                <i className="fa fa-star-o fa-stack-2x"></i>
                <i className="fa fa-star fa-stack-2x"></i>
              </span>{" "}
              <span className="fa fa-stack">
                <i className="fa fa-star-o fa-stack-2x"></i>
                <i className="fa fa-star fa-stack-2x"></i>
              </span>{" "}
              <span className="fa fa-stack">
                <i className="fa fa-star-o fa-stack-2x"></i>
                <i className="fa fa-star fa-stack-2x"></i>
              </span>{" "}
              <span className="fa fa-stack">
                <i className="fa fa-star-o fa-stack-2x"></i>
                <i className="fa fa-star fa-stack-2x"></i>
              </span>{" "}
              <span className="fa fa-stack">
                <i className="fa fa-star-o fa-stack-2x"></i>
              </span>{" "}
            </div>
            <h3 className="product-title" style={{textAlign:'left'}}>Aroma Mocha BabyToy</h3>
            <h4 className="price"  style={{textAlign:'left'}}>
              <span>$50.00</span>
              <del>$60.00</del>
            </h4>
            <p className="product-description"  style={{textAlign:'left', fontSize:'13px', marginBottom:'20px'}}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam no
            </p>

            <h5 className="sizes"  style={{textAlign:'left'}}>
              sizes:
              <span className="size" data-toggle="tooltip" title="small">
                s
              </span>
              <span className="size" data-toggle="tooltip" title="medium">
                m
              </span>
              <span className="size" data-toggle="tooltip" title="large">
                l
              </span>
              <span className="size" data-toggle="tooltip" title="xtra large">
                xl
              </span>
            </h5>
            <h5 className="colors"  style={{textAlign:'left'}}>
              colors:
              <span
                className="color orange not-available"
                data-toggle="tooltip"
                title="Not In store"
              ></span>
              <span className="color green"></span>
              <span className="color blue"></span>
            </h5>

            <div className="row">
              <div className="col-lg-12 offset-3" style={{display:'flex'}}>
                <div className="timer">
                  <div className="days-block">
                    <span className="days counting" id="day"></span>
                    <span className="smalltext">Days</span>
                  </div>
                  <div className="hour-block">
                    <span className="hours counting" id="hour"></span>
                    <span className="smalltext">Hours</span>
                  </div>
                  <div className="min-block">
                    <span className="minutes counting" id="minute"></span>
                    <span className="smalltext">Minutes</span>
                  </div>
                  <div className="sec-block">
                    <span className="seconds counting" id="second"></span>
                    <span className="smalltext">Seconds</span>
                  </div>
                  <p id="time-up"></p>
                </div>
              </div>
            </div>
            <div className="action" style={{display:'flex'}}>
              <button className="btn btn-default bg-green" type="button">
                <span className="fa fa-eye"></span>
              </button>
              <button className="btn btn-default bg-blue" type="button">
                <span className="fa fa-heart"></span>
              </button>
              <button className="cart btn btn-default bg-purple" type="button">
                <span className="fa fa-shopping-cart"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
