import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../App.css";

export default function ProductCard(props) {

const [item,setitem] = React.useState(props.item);
const [slug,setslug] = React.useState("/ProductDetail/" + props.item.slug);

  return (
<>
            <div className="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="item">

              {/* <Link to={{
    pathname: "/ProductDetail",
    state:item 
  }} className="parent link" > */}
<Link to={{pathname: `/ProductDetail/${props.item.slug}`}} className="parent link">
            
                <div className="product-thumb">
                  <div className="image product-imageblock">
                    <div className="btn new bg-red">20% OFF</div>
                    <div className="btn percent bg-yellow">New</div>{" "}
                    <a >
                      <img
                        src={item.image_url}
                        alt="iPod Classic"
                        title="iPod Classic"
                        className="img-responsive"
                      />
                    </a>
                 
                  </div>
                  <div className="caption product-detail">
                    <h4 className="product-name">
                      <a title="Casual Shirt With Ruffle Hem"
                      style={{
                        fontSize: "1.6vmax",
                      }}
                      >
                        {item.name}
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
                        AED {item.price}
                      </p>
                      <p
                        className="price product-price"
                        style={{ fontSize: "1.8vmax" }}
                      >
                        AED {item.price}
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

                </Link>
              </div>
            </div>
         
         {/* )  */}
      

    </>
  );
}
