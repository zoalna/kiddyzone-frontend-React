import React, { Component } from "react";
import Carousel from "react-material-ui-carousel";
import ProductCard from "../Layout/ProductCard";

import "../../App.css";

export default function LatestProduct(props) {
  return (
    <section id="our-latest-products" className="content latest-products ">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="heading">
              <h2 style={{fontSize:'1.2vmax'}}>
                Our Latest Products
              </h2>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-dark- " style={{background:'#f7f7f7'}}>
    
        <div className="container-fluid">
        <Carousel>
        <div className="row">
      {
        props.data.map((item, i) => {     
          
           return (
            <ProductCard item = {item } />
             ) 
          })}
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
      </div>
    </section>
  );
}
