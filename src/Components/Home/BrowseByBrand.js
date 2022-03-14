import React, { Component } from "react";

import "../../App.css";

export default function BrowseByBrand(props) {
  return (
    <section id="browse-brand">
      <div className="container-fluid">
        <div className="heading brand">
          <h2 style={{ fontSize:'1.7vmax'}}>
            Browse By Brand
          </h2>
        </div>
        <div className="brand-logo">
          <ul>


          {
        props.data.map((item, i) => {     
          
           return (


            <li>
              {" "}
              <a href="#">
                <img src={item.image_url} />
              </a>
            </li>
) 
})}
          </ul>
        </div>
      </div>
    </section>
  );
}
