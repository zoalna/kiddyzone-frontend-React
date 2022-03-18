import { Box } from '@mui/material'
import React, { Component } from 'react'
import CartViewBox from '../Components/CartViewBox'

export default function Cart() {
  return (
    <>
      <Box className="container">
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
            <a href="#">Cart</a>
          </li>
        </ol>
      </Box>

      <CartViewBox />
      <section id="delivery-services" className="services-icons">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="service one">
                <img src="image/cart/truck.jpg" />
                <span>
                  <h2>Easy to buy & return</h2>
                  <p>single click to buy & return</p>
                </span>
              </div>
            </div>
            <div className="col-md-3">
              <div className="service two">
                <img src="image/cart/payment-card.jpg" />
                <span>
                  <h2>Secure Payments</h2>
                  <p>100% payment security</p>
                </span>
              </div>
            </div>
            <div className="col-md-3">
              <div className="service three">
                <img src="image/cart/support.jpg" />
                <span>
                  <h2>24x7 Support Available</h2>
                  <p>support 24 hours a day</p>
                </span>
              </div>
            </div>
            <div className="col-md-3">
              <div className="service four">
                <img src="image/cart/mobile-app.jpg" />
                <span>
                  <h2>Shop with our App</h2>
                  <p>Download app & get offers</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="similar-products" className="content hot-sellers ">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-12">
              <div className="heading">
                <h2>Similar Products</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                  <div className="sale-tag">
                    <div className="btn bg-blue">SALE</div>
                    <div className="btn percent bg-yellow">20% OFF</div>
                  </div>
                  <div className="image product-imageblock">
                    {' '}
                    <a href="product.html">
                      <img
                        src="image/product/toy-1.png"
                        alt="iPod classNameic"
                        title="iPod classNameic"
                        className="img-responsive"
                      />
                    </a>
                    <ul className="button-group">
                      <li>
                        <button
                          type="button"
                          className="addtocart-btn bg-green"
                          title="Add to Cart"
                        >
                          {' '}
                          <i className="fa fa-shopping-cart"></i>{' '}
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
                    </ul>
                  </div>
                  <div className="caption product-detail">
                    <h4 className="product-name">
                      <a href="#" title="Casual Shirt With Ruffle Hem">
                        High Speed Magic Toy
                      </a>
                    </h4>
                    <div className="rating">
                      {' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                    </div>
                    <p className="price product-price">$122.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                  <div className="sale-tag">
                    <div className="btn bg-blue">SALE</div>
                    <div className="btn percent bg-yellow">20% OFF</div>
                  </div>
                  <div className="image product-imageblock">
                    {' '}
                    <a href="product.html">
                      <img
                        src="image/product/toy-2.png"
                        alt="iPod classNameic"
                        title="iPod classNameic"
                        className="img-responsive"
                      />
                    </a>
                    <ul className="button-group">
                      <li>
                        <button
                          type="button"
                          className="addtocart-btn bg-green"
                          title="Add to Cart"
                        >
                          {' '}
                          <i className="fa fa-shopping-cart"></i>{' '}
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
                    </ul>
                  </div>
                  <div className="caption product-detail">
                    <h4 className="product-name">
                      <a href="#" title="Casual Shirt With Ruffle Hem">
                        High Speed Magic Toy
                      </a>
                    </h4>
                    <div className="rating">
                      {' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                      </span>{' '}
                    </div>
                    <p className="price product-price">$122.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                  <div className="sale-tag">
                    <div className="btn bg-blue">SALE</div>
                    <div className="btn percent bg-yellow">20% OFF</div>
                  </div>
                  <div className="image product-imageblock">
                    {' '}
                    <a href="product.html">
                      <img
                        src="image/product/toy-3.png"
                        alt="iPod classNameic"
                        title="iPod classNameic"
                        className="img-responsive"
                      />
                    </a>
                    <ul className="button-group">
                      <li>
                        <button
                          type="button"
                          className="addtocart-btn bg-green"
                          title="Add to Cart"
                        >
                          {' '}
                          <i className="fa fa-shopping-cart"></i>{' '}
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
                    </ul>
                  </div>
                  <div className="caption product-detail">
                    <h4 className="product-name">
                      <a href="#" title="Casual Shirt With Ruffle Hem">
                        High Speed Magic Toy
                      </a>
                    </h4>
                    <div className="rating">
                      {' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                      </span>{' '}
                    </div>
                    <p className="price product-price">$122.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                  <div className="sale-tag">
                    <div className="btn bg-blue">SALE</div>
                    <div className="btn percent bg-yellow">20% OFF</div>
                  </div>
                  <div className="image product-imageblock">
                    {' '}
                    <a href="product.html">
                      <img
                        src="image/product/toy-4.png"
                        alt="iPod classNameic"
                        title="iPod classNameic"
                        className="img-responsive"
                      />
                    </a>
                    <ul className="button-group">
                      <li>
                        <button
                          type="button"
                          className="addtocart-btn bg-green"
                          title="Add to Cart"
                        >
                          {' '}
                          <i className="fa fa-shopping-cart"></i>{' '}
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
                    </ul>
                  </div>
                  <div className="caption product-detail">
                    <h4 className="product-name">
                      <a href="#" title="Casual Shirt With Ruffle Hem">
                        High Speed Magic Toy
                      </a>
                    </h4>
                    <div className="rating">
                      {' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                      </span>{' '}
                    </div>
                    <p className="price product-price">$122.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                  <div className="sale-tag">
                    <div className="btn bg-blue">SALE</div>
                    <div className="btn percent bg-yellow">20% OFF</div>
                  </div>
                  <div className="image product-imageblock">
                    {' '}
                    <a href="product.html">
                      <img
                        src="image/product/toy-1.png"
                        alt="iPod classNameic"
                        title="iPod classNameic"
                        className="img-responsive"
                      />
                    </a>
                    <ul className="button-group">
                      <li>
                        <button
                          type="button"
                          className="addtocart-btn bg-green"
                          title="Add to Cart"
                        >
                          {' '}
                          <i className="fa fa-shopping-cart"></i>{' '}
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
                    </ul>
                  </div>
                  <div className="caption product-detail">
                    <h4 className="product-name">
                      <a href="#" title="Casual Shirt With Ruffle Hem">
                        High Speed Magic Toy
                      </a>
                    </h4>
                    <div className="rating">
                      {' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                    </div>
                    <p className="price product-price">$122.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                  <div className="sale-tag">
                    <div className="btn bg-blue">SALE</div>
                    <div className="btn percent bg-yellow">20% OFF</div>
                  </div>
                  <div className="image product-imageblock">
                    {' '}
                    <a href="product.html">
                      <img
                        src="image/product/toy-2.png"
                        alt="iPod classNameic"
                        title="iPod classNameic"
                        className="img-responsive"
                      />
                    </a>
                    <ul className="button-group">
                      <li>
                        <button
                          type="button"
                          className="addtocart-btn bg-green"
                          title="Add to Cart"
                        >
                          {' '}
                          <i className="fa fa-shopping-cart"></i>{' '}
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
                    </ul>
                  </div>
                  <div className="caption product-detail">
                    <h4 className="product-name">
                      <a href="#" title="Casual Shirt With Ruffle Hem">
                        High Speed Magic Toy
                      </a>
                    </h4>
                    <div className="rating">
                      {' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                      </span>{' '}
                    </div>
                    <p className="price product-price">$122.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                  <div className="sale-tag">
                    <div className="btn bg-blue">SALE</div>
                    <div className="btn percent bg-yellow">20% OFF</div>
                  </div>
                  <div className="image product-imageblock">
                    {' '}
                    <a href="product.html">
                      <img
                        src="image/product/toy-3.png"
                        alt="iPod classNameic"
                        title="iPod classNameic"
                        className="img-responsive"
                      />
                    </a>
                    <ul className="button-group">
                      <li>
                        <button
                          type="button"
                          className="addtocart-btn bg-green"
                          title="Add to Cart"
                        >
                          {' '}
                          <i className="fa fa-shopping-cart"></i>{' '}
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
                    </ul>
                  </div>
                  <div className="caption product-detail">
                    <h4 className="product-name">
                      <a href="#" title="Casual Shirt With Ruffle Hem">
                        High Speed Magic Toy
                      </a>
                    </h4>
                    <div className="rating">
                      {' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                      </span>{' '}
                    </div>
                    <p className="price product-price">$122.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                  <div className="sale-tag">
                    <div className="btn bg-blue">SALE</div>
                    <div className="btn percent bg-yellow">20% OFF</div>
                  </div>
                  <div className="image product-imageblock">
                    {' '}
                    <a href="product.html">
                      <img
                        src="image/product/toy-4.png"
                        alt="iPod classNameic"
                        title="iPod classNameic"
                        className="img-responsive"
                      />
                    </a>
                    <ul className="button-group">
                      <li>
                        <button
                          type="button"
                          className="addtocart-btn bg-green"
                          title="Add to Cart"
                        >
                          {' '}
                          <i className="fa fa-shopping-cart"></i>{' '}
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
                    </ul>
                  </div>
                  <div className="caption product-detail">
                    <h4 className="product-name">
                      <a href="#" title="Casual Shirt With Ruffle Hem">
                        High Speed Magic Toy
                      </a>
                    </h4>
                    <div className="rating">
                      {' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                        <i className="fa fa-star fa-stack-2x"></i>
                      </span>{' '}
                      <span className="fa fa-stack">
                        <i className="fa fa-star-o fa-stack-2x"></i>
                      </span>{' '}
                    </div>
                    <p className="price product-price">$122.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
