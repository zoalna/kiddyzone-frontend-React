import React, { Component } from "react";

import "../../App.css";

export default function RecentlyViewed() {
  return (
    <section id="recently-veiw-products" className="content recent-products">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="heading recently__viewed">
              <h2 style={{fontSize:'1.1vmax'}}>
                Recently Viewed Products
              </h2>
            </div>
           
          </div>
        </div>

      </div>
      <div className="bg-yellow" style={{background:'#f7f7f7'}}>
      <div className="arrow__navigation" style={{
          display:"flex",
          alignItems:"center",
          justifyContent:"flex-end"
        }}>
          <div className="right__arow" style={{
            width:"40px",
            height:"40px",
            borderRadius:"100%",
            backgroundColor:"#00B4E3",
            marginRight:"1px",
            cursor:"pointer",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            opacity:.5
          }}>
            <span style={{color:"red",fontSize:"1.3vmax",marginTop:"5px",marginLeft:"0px"}}>◀</span>
          </div>
          <div className="left__arow" style={{
            width:"40px",
            height:"40px",
            borderRadius:"100%",
            backgroundColor:"#00B4E3",
            cursor:"pointer",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}>
            <span style={{color:"red",fontSize:"1.3vmax",marginTop:"5px",marginLeft:"5px"}}>▶</span>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
          
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
          </div>
                

          <div className="viewmore">
          <a href="#" className="btn" style={{
                backgroundColor:"#E20025",
                color:"#fff"
              }}>
                View All
              </a>
            </div>


        </div>
      </div>
    </section>
  );
}
