import React, { Component } from "react";

import "../../App.css";

export default function HotSellers() {
  return (
    <section id="hot-Sellers" className="content hot-sellers ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="heading">
              <h2 style={{fontSize:'16px'}}>Hot Sellers</h2>
            </div>
            <div className="viewmore">
              <a href="#" className="btn bg-blue">
                View All
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue" style={{background:'#f7f7f7'}}>
        <div className="container-fluid">
          <div className="row">
            <div className="product-layout  product-grid  col-lg-2 col-md-3 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                  {/* <div className="sale-tag">
                   
                  </div> */}
                  <div className="image product-imageblock">
                  <div className="btn new bg-blue">SALE</div>
                    <div className="btn percent bg-yellow">20% OFF</div>
                    {" "}
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
                      <a href="#" title="Casual Shirt With Ruffle Hem">
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
                    <p className="price product-price">$122.00</p>
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
            <div className="product-layout  product-grid  col-lg-2 col-md-3 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                  {/* <div className="sale-tag">
                    <div className="btn bg-blue">SALE</div>
                    <div className="btn percent bg-yellow">20% OFF</div>
                  </div> */}
                  <div className="image product-imageblock">
                  <div className="btn new bg-blue">SALE</div>
                    <div className="btn percent bg-yellow">20% OFF</div>
                    {" "}
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
                      <a href="#" title="Casual Shirt With Ruffle Hem">
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
                    <p className="price product-price">$122.00</p>
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
            <div className="product-layout  product-grid  col-lg-2 col-md-3 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                  {/* <div className="sale-tag">
                    <div className="btn bg-blue">SALE</div>
                    <div className="btn percent bg-yellow">20% OFF</div>
                  </div> */}
                  <div className="image product-imageblock">
                  <div className="btn new bg-blue">SALE</div>
                    <div className="btn percent bg-yellow">20% OFF</div>
                    {" "}
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
                      <a href="#" title="Casual Shirt With Ruffle Hem">
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
                    <p className="price product-price">$122.00</p>
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
            <div className="product-layout  product-grid  col-lg-2 col-md-3 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                  {/* <div className="sale-tag">
                    <div className="btn bg-blue">SALE</div>
                    <div className="btn percent bg-yellow">20% OFF</div>
                  </div> */}
                  <div className="image product-imageblock">
                  <div className="btn new bg-blue">SALE</div>
                    <div className="btn percent bg-yellow">20% OFF</div>
                    {" "}
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
                      <a href="#" title="Casual Shirt With Ruffle Hem">
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
                    <p className="price product-price">$122.00</p>
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
            <div className="product-layout  product-grid  col-lg-2 col-md-3 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                  {/* <div className="sale-tag">
                    <div className="btn bg-blue">SALE</div>
                    <div className="btn percent bg-yellow">20% OFF</div>
                  </div> */}
                  <div className="image product-imageblock">
                  <div className="btn new bg-blue">SALE</div>
                    <div className="btn percent bg-yellow">20% OFF</div>
                    {" "}
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
                      <a href="#" title="Casual Shirt With Ruffle Hem">
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
                    <p className="price product-price">$122.00</p>
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
            <div className="product-layout  product-grid  col-lg-2 col-md-3 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                  {/* <div className="sale-tag">
                    <div className="btn bg-blue">SALE</div>
                    <div className="btn percent bg-yellow">20% OFF</div>
                  </div> */}
                  <div className="image product-imageblock">
                  <div className="btn new bg-blue">SALE</div>
                    <div className="btn percent bg-yellow">20% OFF</div>
                    {" "}
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
                      <a href="#" title="Casual Shirt With Ruffle Hem">
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
                    <p className="price product-price">$122.00</p>
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
          </div>
        </div>
      </div>
    </section>
  );
}
