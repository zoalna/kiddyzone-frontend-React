import React, { Component } from "react";

import "../App.css";
import PartnerDiscount from "../Components/Home/PartnerDiscount";

export default function StoreLocator() {
  return (
      <>
    <div className="mainbanner">
  <div className="top-banner">
  	<div className="page-title">
        <h1>Store Locator</h1>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.</p>
      </div>
    <img src="image/banners/subscription-banner.png" alt="listing-banner" className="img-responsive" />
  </div>
</div>

<section id="store-locator">
    <div className="container">
        <div className="row">
            <div className="heading">
                <h2>Store Locator</h2>
            </div>
            <div className="col-md-12 text-center">
                <p>Our stores are now open once more and we are delighted to welcome you back inside! Just to be on the safe side our store teams will continue to wear a mask and we politely ask our customers to do the same. We will also encourage social distancing and provide hand sanitiser for our customers to use.</p>
            </div>
        </div>
    </div>
</section>

<section id="search-location" style={{background:'#eeeeee'}}>
    <div class="container">
        <div class="row">
            <div class="col-md-7 search-col">
                <h1>Store locator</h1>
                <div class="form-group">
                    <input id="form_name" type="text" placeholder="First Name" class="form-control" required="" />
                    <button type="button">Search</button>
                    
                </div>
                <h3>Browse By Stores :-</h3>
                <div class="browse-stores">
                    <a class="uae bg-green text-white" href="#">UAE</a>
                    <a class="qatar" href="#">Qatar</a>
                </div>
            </div>
            <div class="col-md-5 map-col">
                <div class="text-center store-map-locate">
                    <img src="image/map-location.png"/>
                </div>
            </div>
        </div>
    </div>
</section>     


<section id="browse-brand">
<div className="container-fluid">
    <div className="heading">
        <h2>Browsec By<br /> Brand</h2>
    </div>
  <div className="brand-logo">
  <ul>
    <li> <a href="#"><img src="image/smart-games.png"/></a> </li>
    <li> <a href="#"><img src="image/Marvel.png"/></a> </li>
    <li> <a href="#"><img src="image/chicco.png"/></a> </li>
    <li> <a href="#"><img src="image/sparkle-girls.png"/></a> </li>
    <li> <a href="#"><img src="image/smart-games.png"/></a> </li>
    <li> <a href="#"><img src="image/Marvel.png"/></a> </li>
  </ul>  
  </div>
</div>

</section>
  </>
  );
}
