import React, { Component } from "react";

import "../App.css";

export default function ProductDetails() {
  return (
    <>
      <div className="mainbanner">
        <div className="top-banner">
          <div className="page-title">
            <h1>Product Detail</h1>
          </div>
          <img
            src="image/banners/pdetail.png"
            alt="listing-banner"
            className="img-responsive"
          />
        </div>
      </div>
      <div className="container">
        <ol className="breadcrumb">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Page</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li className="active">
            <a href="#">Product</a>
          </li>
        </ol>
      </div>
      <section className="content pb-100">
        <div className="container">
          <div className="row">
            <div className="preview col-md-6">
              <div className="preview-pic tab-content">
                <div className="tab-pane active" id="pic-1">
                  <img src="image/product/product-2.png" />
                </div>
                <div className="tab-pane" id="pic-2">
                  <img src="image/product/product-1.png" />
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
                    <img src="image/product/product-2.png" />
                  </a>
                </li>
                <li>
                  <a data-target="#pic-2" data-toggle="tab">
                    <img src="image/product/product-1.png" />
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
              <h3 className="product-title">Aroma Mocha BabyToy</h3>
              <span className="fa fa-heart-o"></span>

              <div className="prod-row">
                <h4 className="price">
                  <span>$50.00</span>
                </h4>
                <div className="rating">
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
                <div className="reviews-num">
                  <span className="percent-reviews">6.4</span> |{" "}
                  <span className="total-reviews">236 Reviews</span>
                </div>
                <div className="status-stock">
                  <span className="title">Status:-</span> <span>In Stock</span>
                </div>
              </div>
              <p className="point-text">
                If you're buying this product you will be getting 5.4 this many
                points
              </p>
              <div className="buy-from-whatsapp">
                <a href="#">
                  <img src="image/buy-whatsapp.svg" /> Buy From Whatsapp
                  {/* <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 23.4 15.8"
                    xml:space="preserve"
                  >
                    <path
                      id="XMLID_3_"
                      className="st0"
                      d="M14.6,1.3c-0.4,0.4-0.4,0.9,0,1.3l4.3,4.3H2.6c-0.5,0-0.9,0.4-0.9,0.9s0.4,0.9,0.9,0.9h16.3
                            L14.6,13c-0.4,0.4-0.3,0.9,0,1.3c0.4,0.4,0.9,0.4,1.3,0l5.8-5.8c0.1-0.1,0.1-0.2,0.2-0.3c0-0.1,0.1-0.2,0.1-0.4
                            c0-0.2-0.1-0.5-0.3-0.6l-5.8-5.8C15.5,0.9,14.9,0.9,14.6,1.3"
                    />
                    <path
                      id="XMLID_2_"
                      className="st1"
                      d="M14.6,1.3c-0.4,0.4-0.4,0.9,0,1.3l4.3,4.3H2.6c-0.5,0-0.9,0.4-0.9,0.9s0.4,0.9,0.9,0.9h16.3
                            L14.6,13c-0.4,0.4-0.3,0.9,0,1.3c0.4,0.4,0.9,0.4,1.3,0l5.8-5.8c0.1-0.1,0.1-0.2,0.2-0.3c0-0.1,0.1-0.2,0.1-0.4
                            c0-0.2-0.1-0.5-0.3-0.6l-5.8-5.8C15.5,0.9,14.9,0.9,14.6,1.3z"
                    />
                  </svg> */}
                </a>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="gift-wrap">
                    <label className="select-title">Gift Wrap</label>
                    <div className="images">
                      <a href="#">
                        <img src="image/gift-wrap-1.png" />
                      </a>
                      <a href="#">
                        <img src="image/gift-wrap-2.png" />
                      </a>
                      <a href="#">
                        <img src="image/gift-wrap-1.png" />
                      </a>
                      <a href="#">
                        <img src="image/gift-wrap-2.png" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="age-opt">
                    <label className="select-title">Age</label>
                    <select className="form-control">
                      <option>0 to 2 years</option>
                      <option>2 to 4 years</option>
                      <option>4 to 6 years</option>
                      <option>6 to 8 years</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 quantity">
                  <label className="select-title">Quantity</label>
                  <div className="input-group">
                    <span className="input-group-btn">
                      <button
                        type="button"
                        className="quantity-left-minus btn btn-danger btn-number"
                        data-type="minus"
                        data-field=""
                      >
                        <span className="glyphicon glyphicon-minus"></span>
                      </button>
                    </span>
                    <input
                      type="text"
                      id="quantity"
                      name="quantity"
                      className="form-control input-number"
                      min="1"
                      max="100"
                    />
                    <span className="input-group-btn">
                      <button
                        type="button"
                        className="quantity-right-plus btn btn-success btn-number"
                        data-type="plus"
                        data-field=""
                      >
                        <span className="glyphicon glyphicon-plus"></span>
                      </button>
                    </span>
                  </div>
                </div>

                <div className="col-md-6 color-opt">
                  <label className="select-title">Color</label>
                  <div className="color-picker">
                    <select className="form-control">
                      <option>Red</option>
                      <option>Green</option>
                      <option>Blue</option>
                      <option>Yellow</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12">
                  <button className="single-pro add-to-cart">
                    Add to Cart
                  </button>
                  <button className="single-pro add-to-cart buy-now">
                    Buy Now
                  </button>
                </div>

                <div id="product-accordion">
                  <div className="accordion-header" id="headingOne">
                    <h5>
                      <button
                        className="btn-link"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        {/* <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          width="41"
                          height="41"
                          viewBox="0 0 41 41"
                        >
                          <image
                            id="NoPath"
                            width="41"
                            height="41"
                            xlink:href="data:image/png;base64,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"
                          />
                        </svg> */}
                        <span>Description</span>
                        <span className="fa fa-angle-down rotate-icon"></span>
                      </button>
                    </h5>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse in"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p className="product-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore.
                      </p>
                    </div>
                  </div>
                  <hr />

                  <div className="accordion-header" id="headingTwo">
                    <h5>
                      <button
                        className="btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <img src="image/buy-now-icon.png" />{" "}
                        <span>Buy Now</span>
                        <span className="fa fa-angle-down rotate-icon"></span>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p className="product-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore.
                      </p>
                    </div>
                  </div>
                  <hr />

                  <div className="accordion-header" id="headingThree">
                    <h5>
                      <button
                        className="btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <img src="image/video-play.png" />{" "}
                        <span>Video Links</span>
                        <span className="fa fa-angle-down rotate-icon"></span>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p className="product-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore.
                      </p>
                    </div>
                  </div>
                  <hr />

                  <div className="accordion-header" id="headingFour">
                    <h5>
                      <button
                        className="btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        <img src="image/black-truck.png" />{" "}
                        <span>Free Shipping</span>
                        <span className="fa fa-angle-down rotate-icon"></span>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseFour"
                    className="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p className="product-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore.
                      </p>
                    </div>
                  </div>
                  <hr />

                  <div className="accordion-header" id="headingFive">
                    <h5>
                      <button
                        className="btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <img src="image/rotate-box.png" />{" "}
                        <span>30 Days Return Policy</span>
                        <span className="fa fa-angle-down rotate-icon"></span>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseFive"
                    className="collapse"
                    aria-labelledby="headingFive"
                    data-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p className="product-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore.
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-header" id="headingSix">
                    <h5>
                      <button
                        className="btn-link collapsed"
                        data-toggle="collapse"
                        data-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                      >
                        <img src="image/secure-payment.png" />{" "}
                        <span>100% Secured Payment</span>
                        <span className="fa fa-angle-down rotate-icon"></span>
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseSix"
                    className="collapse"
                    aria-labelledby="headingSix"
                    data-parent="#accordion"
                  >
                    <div className="accordion-body">
                      <p className="product-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section
        className="product-reviews content pt-100 pb-100"
        style={{ backgroundColor: "#efefef" }}
      >
        <div className="container">
          <h1>All reviews (456)</h1>
          <hr />
          <div className="reviews row">
            <div className="customer-reviews col-md-6">
              <div className="review">
                <div className="author">
                  <img className="text-center" src="image/user-img.png" />
                  <span className="name text-center">d****t</span>
                  <span className="date text-center">Nov 8, 2021</span>
                </div>
                <div className="description">
                  <div className="rating">
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
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classNameical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock,
                  </p>
                </div>
              </div>
              <div className="review">
                <div className="author">
                  <img className="text-center" src="image/user-img.png" />
                  <span className="name text-center">d****t</span>
                  <span className="date text-center">Nov 8, 2021</span>
                </div>
                <div className="description">
                  <div className="rating">
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
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classNameical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock,
                  </p>
                </div>
              </div>
              <div className="review">
                <div className="author">
                  <img className="text-center" src="image/user-img.png" />
                  <span className="name text-center">d****t</span>
                  <span className="date text-center">Nov 8, 2021</span>
                </div>
                <div className="description">
                  <div className="rating">
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
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classNameical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock,
                  </p>
                </div>
              </div>
            </div>

            <div className="reviews-rating col-md-6">
              <div className="row">
                <div className="col-sm-3">
                  <div className="rating-block">
                    <h2 className="bold padding-bottom-7">4.6</h2>
                    <div className="rating">
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
                    <h4>Average Rating</h4>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="pull-left">
                    <div className="pull-left" style="width:35px; line-height:1;">
                      <div style="height:15px; margin:4px -15px;">
                        5{" "}
                        <span className="fa fa-stack">
                          <i className="fa fa-star-o fa-stack-2x"></i>
                          <i className="fa fa-star fa-stack-2x"></i>
                        </span>
                      </div>
                    </div>
                    <div className="pull-left" style="width:180px;">
                      <div className="progress" style="height:15px; margin:8px 0;">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="5"
                          aria-valuemin="0"
                          aria-valuemax="5"
                          style="width: 70%"
                        >
                          <span className="sr-only">80% Complete (danger)</span>
                        </div>
                      </div>
                    </div>
                    <div className="pull-right" style="margin-left:10px;">
                      188
                    </div>
                  </div>
                  <div className="pull-left">
                    <div className="pull-left" style="width:35px; line-height:1;">
                      <div style="height:15px; margin:4px -15px;">
                        4{" "}
                        <span className="fa fa-stack">
                          <i className="fa fa-star-o fa-stack-2x"></i>
                          <i className="fa fa-star fa-stack-2x"></i>
                        </span>
                      </div>
                    </div>
                    <div className="pull-left" style="width:180px;">
                      <div className="progress" style="height:15px; margin:8px 0;">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="4"
                          aria-valuemin="0"
                          aria-valuemax="5"
                          style="width: 50%"
                        >
                          <span className="sr-only">80% Complete (danger)</span>
                        </div>
                      </div>
                    </div>
                    <div className="pull-right" style="margin-left:10px;">
                      56
                    </div>
                  </div>
                  <div className="pull-left">
                    <div className="pull-left" style="width:35px; line-height:1;">
                      <div style="height:15px; margin:4px -15px;">
                        3{" "}
                        <span className="fa fa-stack">
                          <i className="fa fa-star-o fa-stack-2x"></i>
                          <i className="fa fa-star fa-stack-2x"></i>
                        </span>
                      </div>
                    </div>
                    <div className="pull-left" style="width:180px;">
                      <div className="progress" style="height:15px; margin:8px 0;">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="3"
                          aria-valuemin="0"
                          aria-valuemax="5"
                          style="width: 30%"
                        >
                          <span className="sr-only">80% Complete (danger)</span>
                        </div>
                      </div>
                    </div>
                    <div className="pull-right" style="margin-left:10px;">
                      22
                    </div>
                  </div>
                  <div className="pull-left">
                    <div className="pull-left" style="width:35px; line-height:1;">
                      <div style="height:15px; margin:4px -15px;">
                        2{" "}
                        <span className="fa fa-stack">
                          <i className="fa fa-star-o fa-stack-2x"></i>
                          <i className="fa fa-star fa-stack-2x"></i>
                        </span>
                      </div>
                    </div>
                    <div className="pull-left" style="width:180px;">
                      <div className="progress" style="height:15px; margin:8px 0;">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="2"
                          aria-valuemin="0"
                          aria-valuemax="5"
                          style="width: 20%"
                        >
                          <span className="sr-only">80% Complete (danger)</span>
                        </div>
                      </div>
                    </div>
                    <div className="pull-right" style="margin-left:10px;">
                      16
                    </div>
                  </div>
                  <div className="pull-left">
                    <div className="pull-left" style="width:35px; line-height:1;">
                      <div style="height:15px; margin:4px -15px;">
                        1{" "}
                        <span className="fa fa-stack">
                          <i className="fa fa-star-o fa-stack-2x"></i>
                          <i className="fa fa-star fa-stack-2x"></i>
                        </span>
                      </div>
                    </div>
                    <div className="pull-left" style="width:180px;">
                      <div className="progress" style="height:15px; margin:8px 0;">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow="1"
                          aria-valuemin="0"
                          aria-valuemax="5"
                          style="width: 10%"
                        >
                          <span className="sr-only">80% Complete (danger)</span>
                        </div>
                      </div>
                    </div>
                    <div className="pull-right" style="margin-left:10px;">
                      8
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
