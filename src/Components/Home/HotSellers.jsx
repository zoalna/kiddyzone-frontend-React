import React, { Component } from "react";
import Carousel from "react-material-ui-carousel";
import ProductCard from "../Layout/ProductCard";

import "../../App.css";

export default function HotSellers(props) {
  return (
    <section id="hot-Sellers" className="content hot-sellers ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="heading hotSeller">
              <h2 style={{ fontSize: "1.7vmax" }}>Hot Sellers</h2>
            </div>
          </div>
        </div>

      </div>
      <div className="bg-blue" style={{ background: "#f7f7f7" }} id="hotSellerId">
        <div className="container-fluid">

        {/* <div className="arrow__navigation" style={{
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
            opacity:0.5
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
        </div> */}

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
        </div>
      </div>
    </section>
  );
}
