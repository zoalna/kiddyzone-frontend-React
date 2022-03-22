import React, { Component } from "react";
import { Link } from "react-router-dom"; 

import "../../App.css";

export default function ShopByAge(props) {
  return (
    <section id="shop-by-age" className="shop-by-age title-bg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-12 center">
            <div className="heading">
              <h2 style={{ fontSize: "1.7vmax" }}>Shop By Age</h2>
            </div>
          </div>
        </div>

        
            <div className="row agebox">
              
            {
        props.data.map((item, i) => {     
          
           return (
            <div className="col-xs-12 age-block">
            <img src={item.image_url} />
            <div className="age-text">
              <h2>   
              
              <Link to="/ProductListing" className="parent link">
                <span style={{fontSize:"1.8vmax"}}>{item.from_age} TO {item.to_age} Y</span>
              </Link>
          
              </h2>
            </div>
          </div>

           ) 
        })}

</div> 



      </div>
    </section>
  );
}
