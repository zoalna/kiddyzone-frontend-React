import React, { Component } from "react";
import Carousel from "react-material-ui-carousel";
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
      <section className="content">
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
              <div className="product__name">
                <h3 className="product-title">Aroma Mocha BabyToy</h3>
                <span className="fa fa-heart-o"></span>
              </div>
              <div className="prod-row">
                <div className="price__box">
                  <h4 className="discount__price">
                    <span>$70.00</span>
                  </h4>
                  <h4 className="price">
                    <span>$50.00</span>
                  </h4>
                </div>

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
                  <span className="percent-reviews">4.4</span> |{" "}
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
              <span className="share">Share Now</span>
              <div className="social__box">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="social facebook"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Facebook</title>
                  <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"></path>
                </svg>
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="social twitter"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Twitter</title>
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path>
                </svg>
                <svg
                  role="img"
                  className="social whatsappIcon"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>WhatsApp</title>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="social mailIcon"
                  viewBox="0 0 512 512"
                >
                  <path d="M467 61H45c-6.927 0-13.412 1.703-19.279 4.51L255 294.789l51.389-49.387.005-.007.005-.004L486.286 65.514C480.418 62.705 473.929 61 467 61zM507.496 86.728L338.213 256.002 507.49 425.279c2.807-5.867 4.51-12.352 4.51-19.279V106c0-6.923-1.699-13.407-4.504-19.272zM4.51 86.721C1.703 92.588 0 99.073 0 106v300c0 6.923 1.701 13.409 4.506 19.274L173.789 256 4.51 86.721z"></path>
                  <path d="M317.002 277.213l-51.396 49.393c-2.93 2.93-6.768 4.395-10.605 4.395s-7.676-1.465-10.605-4.395L195 277.211 25.714 446.486C31.582 449.295 38.071 451 45 451h422c6.927 0 13.412-1.703 19.279-4.51L317.002 277.213z"></path>
                </svg>
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

                <div className="filter__box">
                  <div className="age__box">
                    <div className="age-opt">
                      <label className="select-title">Age</label>
                      <select className="form-control age">
                        <option>Choose an Option</option>
                        <option>0 to 2 years</option>
                        <option>2 to 4 years</option>
                        <option>4 to 6 years</option>
                        <option>6 to 8 years</option>
                      </select>
                    </div>
                  </div>

                  <div className="color__box">
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
                </div>
                <div className="col-md-6 quantity">
                  <label className="select-title">Quantity</label>
                  <div className="cart__box">
                    <div className="plusIcon">
                      <span>-</span>
                    </div>
                    <div className="inputQuantity">
                      <input type="number" value="1" readOnly />
                    </div>
                    <div className="plusIcon">
                      <span>+</span>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 color-opt"></div>
                <div className="col-md-12 cart__button">
                  <button className="add-to-cart">Add to Cart</button>
                  <button className="buy-now">Buy Now</button>
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
                        {/* <span>Description</span> */}
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
                    {/* <div className="accordion-body">
                      <p className="product-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore.
                      </p>
                    </div> */}
                  </div>

                  {/* <div className="accordion-header" id="headingTwo">
                     
                  </div> */}
                  <hr />

                  <div className="accordion-header" id="headingFour">
                    <div className="gurranty__box">
                      <div className="free__shipping">
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

                      <div className="free__shipping">
                        <h5>
                          <button
                            className="btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            <img src="image/rotate-box.png" />{" "}
                            <span>30 Days Return Policy</span>
                            <span className="fa fa-angle-down rotate-icon"></span>
                          </button>
                        </h5>
                      </div>

                      <div className="free__shipping">
                        <h5>
                          <button
                            className="btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            <img src="image/secure-payment.png" />{" "}
                            <span>100% Secured Payment</span>
                            <span className="fa fa-angle-down rotate-icon"></span>
                          </button>
                        </h5>
                      </div>
                    </div>
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
                </div>
              </div>
            </div>
          </div>
          <div className="description">
            <span>Description</span>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
              nihil enim non, fuga amet velit? Reiciendis, praesentium dicta!
              Iusto dolore dolores ad architecto rem animi vitae qui ab, enim
              earum?
            </p>
          </div>
        </div>
      </section>

      <section
        class="product-reviews content"
        style={{ background: "#efefef" }}
      >
        <div class="container">
          <h1>All reviews (456)</h1>
          <hr />
          <div class="reviews row">
            <div class="customer-reviews col-md-6">
              <div class="review">
                <div class="author">
                  <img class="text-center" src="image/user-img.png" />
                  <span class="name text-center">d****t</span>
                  <span class="date text-center">Nov 8, 2021</span>
                </div>
                <div class="description">
                  <div class="rating">
                    {" "}
                    <span class="fa fa-stack">
                      <i class="fa fa-star-o fa-stack-2x"></i>
                      <i class="fa fa-star fa-stack-2x"></i>
                    </span>{" "}
                    <span class="fa fa-stack">
                      <i class="fa fa-star-o fa-stack-2x"></i>
                      <i class="fa fa-star fa-stack-2x"></i>
                    </span>{" "}
                    <span class="fa fa-stack">
                      <i class="fa fa-star-o fa-stack-2x"></i>
                      <i class="fa fa-star fa-stack-2x"></i>
                    </span>{" "}
                    <span class="fa fa-stack">
                      <i class="fa fa-star-o fa-stack-2x"></i>
                      <i class="fa fa-star fa-stack-2x"></i>
                    </span>{" "}
                    <span class="fa fa-stack">
                      <i class="fa fa-star-o fa-stack-2x"></i>
                    </span>{" "}
                  </div>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock,
                  </p>
                </div>
              </div>
              <div class="review">
                <div class="author">
                  <img class="text-center" src="image/user-img.png" />
                  <span class="name text-center">d****t</span>
                  <span class="date text-center">Nov 8, 2021</span>
                </div>
                <div class="description">
                  <div class="rating">
                    {" "}
                    <span class="fa fa-stack">
                      <i class="fa fa-star-o fa-stack-2x"></i>
                      <i class="fa fa-star fa-stack-2x"></i>
                    </span>{" "}
                    <span class="fa fa-stack">
                      <i class="fa fa-star-o fa-stack-2x"></i>
                      <i class="fa fa-star fa-stack-2x"></i>
                    </span>{" "}
                    <span class="fa fa-stack">
                      <i class="fa fa-star-o fa-stack-2x"></i>
                      <i class="fa fa-star fa-stack-2x"></i>
                    </span>{" "}
                    <span class="fa fa-stack">
                      <i class="fa fa-star-o fa-stack-2x"></i>
                      <i class="fa fa-star fa-stack-2x"></i>
                    </span>{" "}
                    <span class="fa fa-stack">
                      <i class="fa fa-star-o fa-stack-2x"></i>
                    </span>{" "}
                  </div>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock,
                  </p>
                </div>
              </div>
              <div class="review">
                <div class="author">
                  <img class="text-center" src="image/user-img.png" />
                  <span class="name text-center">d****t</span>
                  <span class="date text-center">Nov 8, 2021</span>
                </div>
                <div class="description">
                  <div class="rating">
                    {" "}
                    <span class="fa fa-stack">
                      <i class="fa fa-star-o fa-stack-2x"></i>
                      <i class="fa fa-star fa-stack-2x"></i>
                    </span>{" "}
                    <span class="fa fa-stack">
                      <i class="fa fa-star-o fa-stack-2x"></i>
                      <i class="fa fa-star fa-stack-2x"></i>
                    </span>{" "}
                    <span class="fa fa-stack">
                      <i class="fa fa-star-o fa-stack-2x"></i>
                      <i class="fa fa-star fa-stack-2x"></i>
                    </span>{" "}
                    <span class="fa fa-stack">
                      <i class="fa fa-star-o fa-stack-2x"></i>
                      <i class="fa fa-star fa-stack-2x"></i>
                    </span>{" "}
                    <span class="fa fa-stack">
                      <i class="fa fa-star-o fa-stack-2x"></i>
                    </span>{" "}
                  </div>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock,
                  </p>
                </div>
              </div>
            </div>

            <div class="reviews-rating col-md-6">
              <div class="row">
                <div class="col-sm-3">
                  <div class="rating-block">
                    <h2 class="bold padding-bottom-7">4.6</h2>
                    <div class="rating">
                      {" "}
                      <span class="fa fa-stack">
                        <i class="fa fa-star-o fa-stack-2x"></i>
                        <i class="fa fa-star fa-stack-2x"></i>
                      </span>{" "}
                      <span class="fa fa-stack">
                        <i class="fa fa-star-o fa-stack-2x"></i>
                        <i class="fa fa-star fa-stack-2x"></i>
                      </span>{" "}
                      <span class="fa fa-stack">
                        <i class="fa fa-star-o fa-stack-2x"></i>
                        <i class="fa fa-star fa-stack-2x"></i>
                      </span>{" "}
                      <span class="fa fa-stack">
                        <i class="fa fa-star-o fa-stack-2x"></i>
                        <i class="fa fa-star fa-stack-2x"></i>
                      </span>{" "}
                      <span class="fa fa-stack">
                        <i class="fa fa-star-o fa-stack-2x"></i>
                      </span>{" "}
                    </div>
                    <h4>Average Rating</h4>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div class="pull-left">
                    <div class="pull-left" style={{ width: 35, lineHeight: 1 }}>
                      <div style={{ height: 15, margin: 20 - 20 }}>
                        5{" "}
                        <span class="fa fa-stack">
                          <i class="fa fa-star-o fa-stack-2x"></i>
                          <i class="fa fa-star fa-stack-2x"></i>
                        </span>
                      </div>
                    </div>
                    <div class="pull-left" style={{ width: 180 }}>
                      <div class="progress" style={{ height: 15, margin: 8 }}>
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="5"
                          aria-valuemin="0"
                          aria-valuemax="5"
                          style={{ width: "70%" }}
                        >
                          <span class="sr-only">80% Complete (danger)</span>
                        </div>
                      </div>
                    </div>
                    <div class="pull-right" style={{ marginLeft: 10 }}>
                      188
                    </div>
                  </div>
                  <div class="pull-left">
                    <div class="pull-left" style={{ width: 35, lineHeight: 1 }}>
                      <div style={{ height: 15, margin: 20 - 20 }}>
                        4{" "}
                        <span class="fa fa-stack">
                          <i class="fa fa-star-o fa-stack-2x"></i>
                          <i class="fa fa-star fa-stack-2x"></i>
                        </span>
                      </div>
                    </div>
                    <div class="pull-left" style={{ width: 180 }}>
                      <div class="progress" style={{ height: 15, margin: 8 }}>
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="4"
                          aria-valuemin="0"
                          aria-valuemax="5"
                          style={{ width: "50%" }}
                        >
                          <span class="sr-only">80% Complete (danger)</span>
                        </div>
                      </div>
                    </div>
                    <div class="pull-right" style={{ marginLeft: 10 }}>
                      56
                    </div>
                  </div>
                  <div class="pull-left">
                    <div class="pull-left" style={{ width: 35, lineHeight: 1 }}>
                      <div style={{ height: 15, margin: 20 - 20 }}>
                        3{" "}
                        <span class="fa fa-stack">
                          <i class="fa fa-star-o fa-stack-2x"></i>
                          <i class="fa fa-star fa-stack-2x"></i>
                        </span>
                      </div>
                    </div>
                    <div class="pull-left" style={{ width: 180 }}>
                      <div class="progress" style={{ height: 15, margin: 8 }}>
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="3"
                          aria-valuemin="0"
                          aria-valuemax="5"
                          style={{ width: "30%" }}
                        >
                          <span class="sr-only">80% Complete (danger)</span>
                        </div>
                      </div>
                    </div>
                    <div class="pull-right" style={{ marginLeft: 10 }}>
                      24
                    </div>
                  </div>
                  <div class="pull-left">
                    <div class="pull-left" style={{ width: 35, lineHeight: 1 }}>
                      <div style={{ height: 15, margin: 20 - 20 }}>
                        2{" "}
                        <span class="fa fa-stack">
                          <i class="fa fa-star-o fa-stack-2x"></i>
                          <i class="fa fa-star fa-stack-2x"></i>
                        </span>
                      </div>
                    </div>
                    <div class="pull-left" style={{ width: 180 }}>
                      <div class="progress" style={{ height: 15, margin: 8 }}>
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="2"
                          aria-valuemin="0"
                          aria-valuemax="5"
                          style={{ width: "10%" }}
                        >
                          <span class="sr-only">80% Complete (danger)</span>
                        </div>
                      </div>
                    </div>
                    <div class="pull-right" style={{ marginLeft: 10 }}>
                      16
                    </div>
                  </div>
                  <div class="pull-left">
                    <div class="pull-left" style={{ width: 35, lineHeight: 1 }}>
                      <div style={{ height: 15, margin: 20 - 20 }}>
                        1{" "}
                        <span class="fa fa-stack">
                          <i class="fa fa-star-o fa-stack-2x"></i>
                          <i class="fa fa-star fa-stack-2x"></i>
                        </span>
                      </div>
                    </div>
                    <div class="pull-left" style={{ width: 180 }}>
                      <div class="progress" style={{ height: 15, margin: 8 }}>
                        <div
                          class="progress-bar"
                          role="progressbar"
                          aria-valuenow="1"
                          aria-valuemin="0"
                          aria-valuemax="5"
                          style={{ width: "0%" }}
                        >
                          <span class="sr-only">80% Complete (danger)</span>
                        </div>
                      </div>
                    </div>
                    <div class="pull-right" style={{ marginLeft: 10 }}>
                      8
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="top-products" class="content hot-sellers details__part">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xs-12 col-md-12">
              <div class="heading problem">
                <h2>Top Products</h2>
              </div>
            </div>
          </div>
          <Carousel>

          <div className="row">
            <div className="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                  {/* <div className="sale-tag">
                   
                  </div> */}
                  <div className="image product-imageblock">
                    <div className="btn new bg-red">20% OFF</div>
                    <div className="btn percent bg-yellow">New</div>{" "}
                    <a href="product.html">
                      <img
                        src="image/product/toy-1.png"
                        alt="iPod Classic"
                        title="iPod Classic"
                        className="img-responsive"
                      />
                    </a>
                    {/* <ul className="button-group">
                      <li>
                        <button
                          type="button"
                          className="addtocart-btn bg-green"
                          title="Add to Cart"
                        >
                          {" "}
                          <i className="fa fa-shopping-cart"></i>{" "}
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="wishlist bg-purple"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Wish List"
                        >
                          <i className="fa fa-heart-o"></i>
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="quick-view bg-blue"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Quick View"
                        >
                          <i className="fa fa-eye"></i>
                        </button>
                      </li>
                    </ul> */}
                  </div>
                  <div className="caption product-detail">
                    <h4 className="product-name">
                      <a href="#" title="Casual Shirt With Ruffle Hem"
                      style={{
                        fontSize: "1.6vmax",
                      }}
                      >
                        High Speed Magic Toy
                      </a>
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
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{" "}
                    </div>

                    <div
                      className="price__box"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <p
                        className="discount"
                        style={{
                          fontSize: "1.4vmax",
                          paddingRight: "10px",
                          marginBottom: "20px",
                        }}
                      >
                        AED 200
                      </p>
                      <p
                        className="price product-price"
                        style={{ fontSize: "1.8vmax" }}
                      >
                        AED 122.00
                      </p>
                    </div>

                    <div className="btn-shooping-cart">
                      <button
                        type="button"
                        className="quick-view bg-blue"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                      >
                        <i className="fa fa-eye"></i>
                      </button>

                      <button
                        type="button"
                        className="wishlist bg-purple"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Wish List"
                      >
                        <i className="fa fa-heart-o"></i>
                      </button>

                      <button
                        type="button"
                        className="addtocart-btn bg-green"
                        title="Add to Cart"
                      >
                        {" "}
                        <i className="fa fa-shopping-cart"></i>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                  {/* <div className="sale-tag">
                    <div className="btn bg-blue">SALE</div>
                    <div className="btn percent bg-yellow">20% OFF</div>
                  </div> */}
                  <div className="image product-imageblock">
                    <div className="btn new bg-red">20% OFF</div>
                    <div className="btn percent bg-yellow">New</div>{" "}
                    <a href="product.html">
                      <img
                        src="image/product/toy-2.png"
                        alt="iPod Classic"
                        title="iPod Classic"
                        className="img-responsive"
                      />
                    </a>
                    {/* <ul className="button-group">
                      <li>
                        <button
                          type="button"
                          className="addtocart-btn bg-green"
                          title="Add to Cart"
                        >
                          {" "}
                          <i className="fa fa-shopping-cart"></i>{" "}
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="wishlist bg-purple"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Wish List"
                        >
                          <i className="fa fa-heart-o"></i>
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="quick-view bg-blue"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Quick View"
                        >
                          <i className="fa fa-eye"></i>
                        </button>
                      </li>
                    </ul> */}
                  </div>
                  <div className="caption product-detail">
                    <h4 className="product-name">
                      <a href="#" title="Casual Shirt With Ruffle Hem"
                      style={{
                        fontSize: "1.6vmax",
                      }}
                      >
                        High Speed Magic Toy
                      </a>
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
                    <div
                      className="price__box"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <p
                        className="discount"
                        style={{
                          fontSize: "1.4vmax",
                          paddingRight: "10px",
                          marginBottom: "20px",
                        }}
                      >
                        AED 200
                      </p>
                      <p
                        className="price product-price"
                        style={{ fontSize: "1.8vmax" }}
                      >
                        AED 122.00
                      </p>
                    </div>
                    <div className="btn-shooping-cart">
                      <button
                        type="button"
                        className="quick-view bg-blue"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                      >
                        <i className="fa fa-eye"></i>
                      </button>

                      <button
                        type="button"
                        className="wishlist bg-purple"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Wish List"
                      >
                        <i className="fa fa-heart-o"></i>
                      </button>

                      <button
                        type="button"
                        className="addtocart-btn bg-green"
                        title="Add to Cart"
                      >
                        {" "}
                        <i className="fa fa-shopping-cart"></i>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                  {/* <div className="sale-tag">
                    <div className="btn bg-blue">SALE</div>
                    <div className="btn percent bg-yellow">20% OFF</div>
                  </div> */}
                  <div className="image product-imageblock">
                    <div className="btn new bg-red">20% OFF</div>
                    <div className="btn percent bg-yellow">New</div>{" "}
                    <a href="product.html">
                      <img
                        src="image/product/toy-3.png"
                        alt="iPod Classic"
                        title="iPod Classic"
                        className="img-responsive"
                      />
                    </a>
                    {/* <ul className="button-group">
                      <li>
                        <button
                          type="button"
                          className="addtocart-btn bg-green"
                          title="Add to Cart"
                        >
                          {" "}
                          <i className="fa fa-shopping-cart"></i>{" "}
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="wishlist bg-purple"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Wish List"
                        >
                          <i className="fa fa-heart-o"></i>
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="quick-view bg-blue"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Quick View"
                        >
                          <i className="fa fa-eye"></i>
                        </button>
                      </li>
                    </ul> */}
                  </div>
                  <div className="caption product-detail">
                    <h4 className="product-name">
                      <a href="#" title="Casual Shirt With Ruffle Hem"
                      style={{
                        fontSize: "1.6vmax",
                      }}
                      >
                        High Speed Magic Toy
                      </a>
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
                    <div
                      className="price__box"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <p
                        className="discount"
                        style={{
                          fontSize: "1.4vmax",
                          paddingRight: "10px",
                          marginBottom: "20px",
                        }}
                      >
                        AED 200
                      </p>
                      <p
                        className="price product-price"
                        style={{ fontSize: "1.8vmax" }}
                      >
                        AED 122.00
                      </p>
                    </div>
                    <div className="btn-shooping-cart">
                      <button
                        type="button"
                        className="quick-view bg-blue"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                      >
                        <i className="fa fa-eye"></i>
                      </button>

                      <button
                        type="button"
                        className="wishlist bg-purple"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Wish List"
                      >
                        <i className="fa fa-heart-o"></i>
                      </button>

                      <button
                        type="button"
                        className="addtocart-btn bg-green"
                        title="Add to Cart"
                      >
                        {" "}
                        <i className="fa fa-shopping-cart"></i>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                  {/* <div className="sale-tag">
                    <div className="btn bg-blue">SALE</div>
                    <div className="btn percent bg-yellow">20% OFF</div>
                  </div> */}
                  <div className="image product-imageblock">
                    <div className="btn new bg-red">20% OFF</div>
                    <div className="btn percent bg-yellow">New</div>{" "}
                    <a href="product.html">
                      <img
                        src="image/product/toy-4.png"
                        alt="iPod Classic"
                        title="iPod Classic"
                        className="img-responsive"
                      />
                    </a>
                    {/* <ul className="button-group">
                      <li>
                        <button
                          type="button"
                          className="addtocart-btn bg-green"
                          title="Add to Cart"
                        >
                          {" "}
                          <i className="fa fa-shopping-cart"></i>{" "}
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="wishlist bg-purple"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Wish List"
                        >
                          <i className="fa fa-heart-o"></i>
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="quick-view bg-blue"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Quick View"
                        >
                          <i className="fa fa-eye"></i>
                        </button>
                      </li>
                    </ul> */}
                  </div>
                  <div className="caption product-detail">
                    <h4 className="product-name">
                      <a
                        href="#"
                        title="Casual Shirt With Ruffle Hem"
                        style={{
                          fontSize: "1.6vmax",
                        }}
                      >
                        High Speed Magic Toy
                      </a>
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
                    <div
                      className="price__box"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <p
                        className="discount"
                        style={{
                          fontSize: "1.4vmax",
                          paddingRight: "10px",
                          marginBottom: "20px",
                        }}
                      >
                        AED 200
                      </p>
                      <p
                        className="price product-price"
                        style={{ fontSize: "1.8vmax" }}
                      >
                        AED 122.00
                      </p>
                    </div>
                    <div className="btn-shooping-cart">
                      <button
                        type="button"
                        className="quick-view bg-blue"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                      >
                        <i className="fa fa-eye"></i>
                      </button>

                      <button
                        type="button"
                        className="wishlist bg-purple"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Wish List"
                      >
                        <i className="fa fa-heart-o"></i>
                      </button>

                      <button
                        type="button"
                        className="addtocart-btn bg-green"
                        title="Add to Cart"
                      >
                        {" "}
                        <i className="fa fa-shopping-cart"></i>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="viewmore">
            <a
              href="#"
              className="btn"
              style={{
                backgroundColor: "#E20025",
              }}
            >
              View All
            </a>
          </div>
          </div>
          
          <div className="row">
            <div className="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                  {/* <div className="sale-tag">
                   
                  </div> */}
                  <div className="image product-imageblock">
                    <div className="btn new bg-red">20% OFF</div>
                    <div className="btn percent bg-yellow">New</div>{" "}
                    <a href="product.html">
                      <img
                        src="image/product/toy-2.png"
                        alt="iPod Classic"
                        title="iPod Classic"
                        className="img-responsive"
                      />
                    </a>
                    {/* <ul className="button-group">
                      <li>
                        <button
                          type="button"
                          className="addtocart-btn bg-green"
                          title="Add to Cart"
                        >
                          {" "}
                          <i className="fa fa-shopping-cart"></i>{" "}
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="wishlist bg-purple"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Wish List"
                        >
                          <i className="fa fa-heart-o"></i>
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="quick-view bg-blue"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Quick View"
                        >
                          <i className="fa fa-eye"></i>
                        </button>
                      </li>
                    </ul> */}
                  </div>
                  <div className="caption product-detail">
                    <h4 className="product-name">
                      <a href="#" title="Casual Shirt With Ruffle Hem"
                      style={{
                        fontSize: "1.6vmax",
                      }}
                      >
                        High Speed Magic Toy
                      </a>
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
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{" "}
                    </div>

                    <div
                      className="price__box"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <p
                        className="discount"
                        style={{
                          fontSize: "1.4vmax",
                          paddingRight: "10px",
                          marginBottom: "20px",
                        }}
                      >
                        AED 200
                      </p>
                      <p
                        className="price product-price"
                        style={{ fontSize: "1.8vmax" }}
                      >
                        AED 122.00
                      </p>
                    </div>

                    <div className="btn-shooping-cart">
                      <button
                        type="button"
                        className="quick-view bg-blue"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                      >
                        <i className="fa fa-eye"></i>
                      </button>

                      <button
                        type="button"
                        className="wishlist bg-purple"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Wish List"
                      >
                        <i className="fa fa-heart-o"></i>
                      </button>

                      <button
                        type="button"
                        className="addtocart-btn bg-green"
                        title="Add to Cart"
                      >
                        {" "}
                        <i className="fa fa-shopping-cart"></i>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                  {/* <div className="sale-tag">
                    <div className="btn bg-blue">SALE</div>
                    <div className="btn percent bg-yellow">20% OFF</div>
                  </div> */}
                  <div className="image product-imageblock">
                    <div className="btn new bg-red">20% OFF</div>
                    <div className="btn percent bg-yellow">New</div>{" "}
                    <a href="product.html">
                      <img
                        src="image/product/toy-1.png"
                        alt="iPod Classic"
                        title="iPod Classic"
                        className="img-responsive"
                      />
                    </a>
                    {/* <ul className="button-group">
                      <li>
                        <button
                          type="button"
                          className="addtocart-btn bg-green"
                          title="Add to Cart"
                        >
                          {" "}
                          <i className="fa fa-shopping-cart"></i>{" "}
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="wishlist bg-purple"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Wish List"
                        >
                          <i className="fa fa-heart-o"></i>
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="quick-view bg-blue"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Quick View"
                        >
                          <i className="fa fa-eye"></i>
                        </button>
                      </li>
                    </ul> */}
                  </div>
                  <div className="caption product-detail">
                    <h4 className="product-name">
                      <a href="#" title="Casual Shirt With Ruffle Hem"
                      style={{
                        fontSize: "1.6vmax",
                      }}
                      >
                        High Speed Magic Toy
                      </a>
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
                    <div
                      className="price__box"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <p
                        className="discount"
                        style={{
                          fontSize: "1.4vmax",
                          paddingRight: "10px",
                          marginBottom: "20px",
                        }}
                      >
                        AED 200
                      </p>
                      <p
                        className="price product-price"
                        style={{ fontSize: "1.8vmax" }}
                      >
                        AED 122.00
                      </p>
                    </div>
                    <div className="btn-shooping-cart">
                      <button
                        type="button"
                        className="quick-view bg-blue"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                      >
                        <i className="fa fa-eye"></i>
                      </button>

                      <button
                        type="button"
                        className="wishlist bg-purple"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Wish List"
                      >
                        <i className="fa fa-heart-o"></i>
                      </button>

                      <button
                        type="button"
                        className="addtocart-btn bg-green"
                        title="Add to Cart"
                      >
                        {" "}
                        <i className="fa fa-shopping-cart"></i>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                  {/* <div className="sale-tag">
                    <div className="btn bg-blue">SALE</div>
                    <div className="btn percent bg-yellow">20% OFF</div>
                  </div> */}
                  <div className="image product-imageblock">
                    <div className="btn new bg-red">20% OFF</div>
                    <div className="btn percent bg-yellow">New</div>{" "}
                    <a href="product.html">
                      <img
                        src="image/product/toy-4.png"
                        alt="iPod Classic"
                        title="iPod Classic"
                        className="img-responsive"
                      />
                    </a>
                    {/* <ul className="button-group">
                      <li>
                        <button
                          type="button"
                          className="addtocart-btn bg-green"
                          title="Add to Cart"
                        >
                          {" "}
                          <i className="fa fa-shopping-cart"></i>{" "}
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="wishlist bg-purple"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Wish List"
                        >
                          <i className="fa fa-heart-o"></i>
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="quick-view bg-blue"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Quick View"
                        >
                          <i className="fa fa-eye"></i>
                        </button>
                      </li>
                    </ul> */}
                  </div>
                  <div className="caption product-detail">
                    <h4 className="product-name">
                      <a href="#" title="Casual Shirt With Ruffle Hem"
                      style={{
                        fontSize: "1.6vmax",
                      }}
                      >
                        High Speed Magic Toy
                      </a>
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
                    <div
                      className="price__box"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <p
                        className="discount"
                        style={{
                          fontSize: "1.4vmax",
                          paddingRight: "10px",
                          marginBottom: "20px",
                        }}
                      >
                        AED 200
                      </p>
                      <p
                        className="price product-price"
                        style={{ fontSize: "1.8vmax" }}
                      >
                        AED 122.00
                      </p>
                    </div>
                    <div className="btn-shooping-cart">
                      <button
                        type="button"
                        className="quick-view bg-blue"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                      >
                        <i className="fa fa-eye"></i>
                      </button>

                      <button
                        type="button"
                        className="wishlist bg-purple"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Wish List"
                      >
                        <i className="fa fa-heart-o"></i>
                      </button>

                      <button
                        type="button"
                        className="addtocart-btn bg-green"
                        title="Add to Cart"
                      >
                        {" "}
                        <i className="fa fa-shopping-cart"></i>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                  {/* <div className="sale-tag">
                    <div className="btn bg-blue">SALE</div>
                    <div className="btn percent bg-yellow">20% OFF</div>
                  </div> */}
                  <div className="image product-imageblock">
                    <div className="btn new bg-red">20% OFF</div>
                    <div className="btn percent bg-yellow">New</div>{" "}
                    <a href="product.html">
                      <img
                        src="image/product/toy-3.png"
                        alt="iPod Classic"
                        title="iPod Classic"
                        className="img-responsive"
                      />
                    </a>
                    {/* <ul className="button-group">
                      <li>
                        <button
                          type="button"
                          className="addtocart-btn bg-green"
                          title="Add to Cart"
                        >
                          {" "}
                          <i className="fa fa-shopping-cart"></i>{" "}
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="wishlist bg-purple"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Add to Wish List"
                        >
                          <i className="fa fa-heart-o"></i>
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="quick-view bg-blue"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Quick View"
                        >
                          <i className="fa fa-eye"></i>
                        </button>
                      </li>
                    </ul> */}
                  </div>
                  <div className="caption product-detail">
                    <h4 className="product-name">
                      <a
                        href="#"
                        title="Casual Shirt With Ruffle Hem"
                        style={{
                          fontSize: "1.6vmax",
                        }}
                      >
                        High Speed Magic Toy
                      </a>
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
                    <div
                      className="price__box"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <p
                        className="discount"
                        style={{
                          fontSize: "1.4vmax",
                          paddingRight: "10px",
                          marginBottom: "20px",
                        }}
                      >
                        AED 200
                      </p>
                      <p
                        className="price product-price"
                        style={{ fontSize: "1.8vmax" }}
                      >
                        AED 122.00
                      </p>
                    </div>
                    <div className="btn-shooping-cart">
                      <button
                        type="button"
                        className="quick-view bg-blue"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Quick View"
                      >
                        <i className="fa fa-eye"></i>
                      </button>

                      <button
                        type="button"
                        className="wishlist bg-purple"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to Wish List"
                      >
                        <i className="fa fa-heart-o"></i>
                      </button>

                      <button
                        type="button"
                        className="addtocart-btn bg-green"
                        title="Add to Cart"
                      >
                        {" "}
                        <i className="fa fa-shopping-cart"></i>{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="viewmore">
            <a
              href="#"
              className="btn"
              style={{
                backgroundColor: "#E20025",
              }}
            >
              View All
            </a>
          </div>
          </div>

          </Carousel>
        </div>
      </section>

      <section id="features" class="content our-features ">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-12">
              <div class="heading features">
                <h2>Our Features</h2>
              </div>
            </div>
          </div>
          <div class="features row">
            <div class="col-md-4">
              <div class="feautes">
                <div class="icon">
                  <img class="text-center" src="image/delivery-truck.png" />
                </div>
                <div class="description">
                  <h1>Worldwide Delivery</h1>
                  <p>On order over $150-7 days</p>
                </div>
              </div>
              <div class="feautes">
                <div class="icon">
                  <img class="text-center" src="image/gift-box.png" />
                </div>
                <div class="description">
                  <h1>Great Saving</h1>
                  <p>How to save money?</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="icon">
                <img class="text-center" src="image/train-toy.png" />
              </div>
            </div>
            <div class="col-md-4">
              <div class="feautes">
                <div class="icon">
                  <img class="text-center" src="image/gift-box.png" />
                </div>
                <div class="description">
                  <h1>Money Back Guarantee</h1>
                  <p>Send within 30 days</p>
                </div>
              </div>
              <div class="feautes">
                <div class="icon">
                  <img class="text-center" src="image/support.png" />
                </div>
                <div class="description">
                  <h1>24x7 Support</h1>
                  <p>Call us 24/7 at 000-123-456</p>
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
