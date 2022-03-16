import React, { Component } from "react";

import "../../App.css";

export default function PartnerDiscount(props) {
  return (
    <div id="partners-discount" className="container-fluid">
      <div className="heading">
        <h2 style={{fontSize:'1.2vmax'}}>
          Our Partners Discount
        </h2>
      </div>
      <div id="brand_carousel" className="brand-logo">

        
      {
        props.data.map((item, i) => {     
          
           return (


        <div className="item text-center">
         
          <a href="#">
            <img
              src={item.image_url}
              alt={item.name}
              className="img-responsive"
            />
          </a>{" "}
        </div>
) 
})}
      </div>
    </div>
  );
}
