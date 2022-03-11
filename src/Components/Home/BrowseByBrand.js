import React, { Component } from "react";

import "../../App.css";

export default function BrowseByBrand() {
  return (
    <section id="browse-brand">
      <div className="container-fluid">
        <div className="heading">
          <h2 style={{ fontSize:'16px'}}>
            Browse By
            <br /> Brand
          </h2>
        </div>
        <div className="brand-logo">
          <ul>
            <li>
              {" "}
              <a href="#">
                <img src="image/smart-games.png" />
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">
                <img src="image/Marvel.png" />
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">
                <img src="image/chicco.png" />
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">
                <img src="image/sparkle-girls.png" />
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">
                <img src="image/smart-games.png" />
              </a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">
                <img src="image/Marvel.png" />
              </a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
