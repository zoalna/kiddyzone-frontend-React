import React, { Component } from "react";
import Carousel from "react-material-ui-carousel";
import ProductCard from "../Layout/ProductCard";

import "../../App.css";

export default function RecentlyViewed(props) {
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
      <div className="bg-yellow" style={{background:'#f7f7f7'}} id="recentlyBg">
 
        <div className="container-fluid">
        {/* <Carousel> */}
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



{/* </Carousel> */}
                
        </div>
      </div>
    </section>
  );
}
