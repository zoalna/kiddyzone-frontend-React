import React, { Component } from "react";

import "../App.css";
import PartnerDiscount from "../Components/Home/PartnerDiscount";

export default function AboutUs() {
  return (
      <>
    <div className="mainbanner left">
    <div className="top-banner">
        <div className="page-title">
          <h1>Mystery Box</h1>
          <p>Use Promo Code MTB5 and get 5$ off your first month box when you sign up for a 3,6 or -12month subscription of Mystery Toy Box classNameNameic!</p>
        </div>
      <img src="image/banners/subscription-banner.png" alt="listing-banner" classNameName="img-responsive" />
    </div>
  </div>
  {/* <PartnerDiscount/> */}

  <div id="partners-discount" class="container-fluid">
    <div class="heading">
        <h2>Our Partners<br /> Discount</h2>
    </div>
  <div id="brand_carouse" class="owl-carousel brand-logo">
    <div class="item text-center"> <a href="#"><img src="image/brand/brand1.png" alt="Disney" class="img-responsive" /></a> </div>
    <div class="item text-center"> <a href="#"><img src="image/brand/brand2.png" alt="Dell" class="img-responsive" /></a> </div>
    <div class="item text-center"> <a href="#"><img src="image/brand/brand3.png" alt="Harley" class="img-responsive" /></a> </div>
    <div class="item text-center"> <a href="#"><img src="image/brand/brand4.png" alt="Canon" class="img-responsive" /></a> </div>
    <div class="item text-center"> <a href="#"><img src="image/brand/brand5.png" alt="Canon" class="img-responsive" /></a> </div>
    <div class="item text-center"> <a href="#"><img src="image/brand/brand6.png" alt="Canon" class="img-responsive" /></a> </div>
    <div class="item text-center"> <a href="#"><img src="image/brand/brand7.png" alt="Canon" class="img-responsive" /></a> </div>
  </div>
</div>   

  <section id="how-it-works" className="toys-every-month">
    <div className="container">
        <div className="row">
            <div className="heading">
                <h2>HERE IS HOW IT WORK</h2>
            </div>
            <div className="row video">
            <div className="col-md-1"></div>
            <div className="col-md-10">
                <div className="vid-block text-center">
                    <a href="#"><img src="image/video.png"/></a>
                </div>
            </div>
            <div className="col-md-1"></div> 
            </div>
                <div className="col-md-4">
                    <div className="text-center step one">
                        <div className="img-box"><img src="image/subscription/basic-package.png"/></div>
                        <h3>Mystery Box</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="text-center step two">
                        <div className="img-box"><img src="image/subscription/standard-package.png"/></div>
                        <h3>Mystery Box</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="text-center step three">
                        <div className="img-box"><img src="image/subscription/premium-package.png"/></div>
                        <h3>Mystery Box</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>   
          </div>
    </div>
</section>

<section id="create-account" className="checkout-account bg-yellow">
    <div className="container">
        <div className="row d-flex">
            <div className="col-md-6 left-col">
                <div className="img-box"><img src="image/checkout-gift-box.png"/></div>
            </div>    
            <div className="col-md-6 right-col">
                <div className="text-center content-box">
                    <h2>Get mystery box cards</h2>
                    <p>Our original and most popular classNameic Mystery Toy Box!</p>
                    <a href="#" className="bg-green btn">Shop Now</a>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="mystery-box" className="content">
    <div className="container">
        <div className="row">
            <div className="heading">
                <h2>SUBSCRIBE BY PACKAGES</h2>
            </div>
                <div className="col-md-4">
                    <div className="text-center single-package first">
                        <div className="img-box"><img src="image/subscription/basic-package.png"/></div>
                        <h3>Basic Package</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <h4>£ 60 - £ 80</h4>
                        <a className="bg-green text-white btn select" href="#">Select</a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="text-center single-package second">
                        <div className="img-box"><img src="image/subscription/standard-package.png"/></div>
                        <h3>Standard Package</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <h4>£ 60 - £ 80</h4>
                        <a className="bg-green text-white btn select" href="#">Select</a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="text-center single-package third">
                        <div className="img-box"><img src="image/subscription/premium-package.png"/></div>
                        <h3>Premium Package</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <h4>£ 60 - £ 80</h4>
                        <a className="bg-green text-white btn select" href="#">Select</a>
                    </div>
                </div>   
          </div>
    </div>
</section>

<section id="browse-brand">
<div className="container-fluid">
    <div className="heading">
        <h2>Browsec By <br />Brand</h2>
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
