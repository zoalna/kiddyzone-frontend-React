import React, { Component } from "react";
// import { NavItem } from "react-bootstrap";

import "../../App.css";

export default function ShopCategories(props) {
  return (
    <section id="shop-categories" className="shop-by-category">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="heading">
              <h2 style={{fontSize:'1.4vmax'}}>  
                Shop By Category
              </h2>
            </div>
          </div>
        </div>
        <div className="row agebox">
        {
        props.data.map((item, i) => {     
          
           return (
          <div className="col-xs-12 age-block borderNone">
            <img src={item.image_url} />
            <div className="age-text">
              <h2>
                <a href="#" className="text-purple">
                  {item.name}
                </a>
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
