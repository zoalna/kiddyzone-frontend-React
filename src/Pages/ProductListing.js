import React, { Component } from "react";
import { Link } from "react-router-dom"; 

import "../App.css";

export default function ProductListing() {
  return (
    <>
    <div className="mainbanner">
  <div className="top-banner">
  	<div className="page-title"><h1>Product Listing</h1></div>
    <img src="image/banners/listing.png" alt="listing-banner" className="img-responsive" />
  </div>
</div>

<div className="container">
    <ol className="breadcrumb">
    	<li><a href="#">Home</a></li>
    	<li><a href="#">Page</a></li>
   		<li className="active"><a href="#">Shop</a></li>
    </ol>
</div>

<section className="content">
    <div className="container">
    <div className="col-lg-3">
    	<div className="sidebar-filter"><h2>Filters</h2>
        	<div className="categories-filter">
                <h2>CATEGORIES</h2>
                <ul>
                    <li><a href="#">Magic Toy <span className="cat-count">(15)</span></a></li>
                    <li><a href="#">Magic Toy <span className="cat-count">(115)</span></a></li>
                    <li><a href="#">Magic Toy <span className="cat-count">(51)</span></a></li>
                    <li><a href="#">Magic Toy <span className="cat-count">(12)</span></a></li>
                </ul>
            </div>
            <div className="shopbyage-filter">
                <h2>Shop By Ages</h2>
                <ul>
                    <li><a href="#">0 to 2 years</a></li>
                    <li><a href="#">03-04 Years</a></li>
                    <li><a href="#">05-07 Years</a></li>
                </ul>
            </div>
            
            <div className="price-filter">
                <h2>PRICE FILTER</h2>
                <div className="price-range">
                <div className="range-box">
                <h3>Ranger: </h3>
                <p>
                  <input type="text" id="min-amount" readonly /> - <input type="text" id="max-amount" readonly />
                </p>
                </div>
                <div id="slider-range"></div>
                
                </div>
            </div>
            <div className="color-filter">
                <h2>COLORS</h2>
                <ul>
                     <li>
                        <div className="checkbox">
                        	<input type="checkbox" id="blue" name="color" />
                        	<label for="blue"></label>
                        </div>
                    </li>
                     <li>
                        <div className="checkbox">
                        	<input type="checkbox" id="red" name="color" />
                        	<label for="red"></label>
                        </div>
                    </li>
                    <li>
                        <div className="checkbox">
                        	<input type="checkbox" id="black" name="color" />
                        	<label for="black"></label>
                        </div>
                    </li>
                  	
                    
                     <li>
                        <div className="checkbox">
                        	<input type="checkbox" id="yellow" name="color" />
                        	<label for="yellow"></label>
                        </div>
                    </li>
                     <li>
                        <div className="checkbox">
                        	<input type="checkbox" id="green" name="color" />
                        	<label for="green"></label>
                        </div>
                    </li>
                    <li>
                        <div className="checkbox">
                        	<input type="checkbox" id="pink" name="color" />
                        	<label for="pink"></label>
                        </div>
                    </li>
                </ul>
            </div>
            
            <div className="top-rated">
                <h2>TOP RATED</h2>
                <div className="product-row">
                	<div className="pro-image"><a href="product.html"><img src="image/product/toy-1.png" alt="iPod classNameic" title="" className="img-responsive" /></a></div>
                    <div className="pro-text"><h4 className="product-name"><a href="#" title="">High Speed Magic Toy</a></h4> <p className="price product-price">$122.00</p></div>
                </div>
                <div className="product-row">
                	<div className="pro-image"><a href="product.html"><img src="image/product/toy-2.png" alt="iPod classNameic" title="" className="img-responsive" /></a></div>
                    <div className="pro-text"><h4 className="product-name"><a href="#" title="">High Speed Magic Toy</a></h4> <p className="price product-price">$122.00</p></div>
                </div>
                <div className="product-row">
                	<div className="pro-image"><a href="product.html"><img src="image/product/toy-3.png" alt="iPod classNameic" title="" className="img-responsive" /></a></div>
                    <div className="pro-text"><h4 className="product-name"><a href="#" title="">High Speed Magic Toy</a></h4> <p className="price product-price">$122.00</p></div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-9">
    	<div className="row">
        <div className="listing-top">
        <div className="product-results">Showing 1–12 of 44 results</div>
        <div className="product-sorting"><span>Sort by newness </span>
			<svg xmlns="http://www.w3.org/2000/svg" width="26" height="25" viewBox="0 0 26 25">
              <g id="Group_4298" data-name="Group 4298" transform="translate(-1784 -923.896)">
                <rect id="Rectangle_473" data-name="Rectangle 473" width="26" height="25" transform="translate(1784 923.896)" fill="#040303"/>
                <g id="Group_4297" data-name="Group 4297">
                  <g id="Group_4059" data-name="Group 4059" transform="translate(1788.403 927.369)">
                    <rect id="Rectangle_474" data-name="Rectangle 474" width="6" height="6" transform="translate(-0.403 -0.473)" fill="#fff"/>
                    <rect id="Rectangle_475" data-name="Rectangle 475" width="5" height="6" transform="translate(6.597 -0.473)" fill="#fff"/>
                    <rect id="Rectangle_476" data-name="Rectangle 476" width="5" height="6" transform="translate(12.597 -0.473)" fill="#fff"/>
                  </g>
                  <g id="Group_4058" data-name="Group 4058" transform="translate(1788.403 934.247)">
                    <rect id="Rectangle_479" data-name="Rectangle 479" width="6" height="5" transform="translate(-0.403 -0.351)" fill="#fff"/>
                    <rect id="Rectangle_478" data-name="Rectangle 478" width="5" height="5" transform="translate(6.597 -0.351)" fill="#fff"/>
                    <rect id="Rectangle_477" data-name="Rectangle 477" width="5" height="5" transform="translate(12.597 -0.351)" fill="#fff"/>
                  </g>
                  <g id="Group_4057" data-name="Group 4057" transform="translate(1788.403 940.265)">
                    <rect id="Rectangle_482" data-name="Rectangle 482" width="6" height="6" transform="translate(-0.403 -0.369)" fill="#fff"/>
                    <rect id="Rectangle_481" data-name="Rectangle 481" width="5" height="6" transform="translate(6.597 -0.369)" fill="#fff"/>
                    <rect id="Rectangle_480" data-name="Rectangle 480" width="5" height="6" transform="translate(12.597 -0.369)" fill="#fff"/>
                  </g>
                </g>
              </g>
            </svg>
        </div>
        </div>
        <hr />
            <div className="product-layout  product-grid  col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                <div className="sale-tag"><div className="btn bg-blue">SALE</div><div className="btn percent bg-yellow">20% OFF</div></div>
                  <div className="image product-imageblock"> 
                  <Link to="/ProductDetail" className="parent link">
                            <img src="image/product/toy-1.png" alt="iPod classNameic" title="iPod classNameic" className="img-responsive" />
                  </Link>
                    <ul className="button-group">
                      <li>
                        <button type="button" className="addtocart-btn bg-green" title="Add to Cart"> <i className="fa fa-shopping-cart"></i> </button>
                      </li>
                      <li>
                        <button type="button" className="wishlist bg-purple" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i className="fa fa-heart-o"></i></button>
                      </li>
                      <li>
                        <button type="button" className="quick-view bg-blue" data-toggle="tooltip" data-placement="top" title="Quick View" ><i className="fa fa-eye"></i></button>
                      </li>
                      
                    </ul>
                  </div>
                  <div className="caption product-detail">
                   <h4 className="product-name"><Link to="/ProductDetail" className="parent link">
                            <span>High Speed Magic Toy</span>
                            </Link></h4>
                    <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> </div>
                    <p className="price product-price">$122.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout  product-grid  col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                <div className="sale-tag"><div className="btn bg-blue">SALE</div><div className="btn percent bg-yellow">20% OFF</div></div>
                  <div className="image product-imageblock"> <Link to="/ProductDetail" className="parent link"><img src="image/product/toy-2.png" alt="iPod classNameic" title="iPod classNameic" className="img-responsive" /></Link>
                    <ul className="button-group">
                      <li>
                        <button type="button" className="addtocart-btn bg-green" title="Add to Cart"> <i className="fa fa-shopping-cart"></i> </button>
                      </li>
                      <li>
                        <button type="button" className="wishlist bg-purple" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i className="fa fa-heart-o"></i></button>
                      </li>
                      <li>
                        <button type="button" className="quick-view bg-blue" data-toggle="tooltip" data-placement="top" title="Quick View" ><i className="fa fa-eye"></i></button>
                      </li>
                      
                    </ul>
                  </div>
                  <div className="caption product-detail">
                   <h4 className="product-name"><Link to="/ProductDetail" className="parent link">
                            <span>High Speed Magic Toy</span>
                            </Link></h4>
                    <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
                    <p className="price product-price">$122.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout  product-grid  col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                <div className="sale-tag"><div className="btn bg-blue">SALE</div><div className="btn percent bg-yellow">20% OFF</div></div>
                  <div className="image product-imageblock"> <a href="product.html"><img src="image/product/toy-3.png" alt="iPod classNameic" title="iPod classNameic" className="img-responsive" /></a>
                    <ul className="button-group">
                      <li>
                        <button type="button" className="addtocart-btn bg-green" title="Add to Cart"> <i className="fa fa-shopping-cart"></i> </button>
                      </li>
                      <li>
                        <button type="button" className="wishlist bg-purple" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i className="fa fa-heart-o"></i></button>
                      </li>
                      <li>
                        <button type="button" className="quick-view bg-blue" data-toggle="tooltip" data-placement="top" title="Quick View" ><i className="fa fa-eye"></i></button>
                      </li>
                      
                    </ul>
                  </div>
                  <div className="caption product-detail">
                   <h4 className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">High Speed Magic Toy</a></h4>
                    <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
                    <p className="price product-price">$122.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout  product-grid  col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                <div className="sale-tag"><div className="btn bg-blue">SALE</div><div className="btn percent bg-yellow">20% OFF</div></div>
                  <div className="image product-imageblock"> <a href="product.html"><img src="image/product/toy-4.png" alt="iPod classNameic" title="iPod classNameic" className="img-responsive" /></a>
                    <ul className="button-group">
                      <li>
                        <button type="button" className="addtocart-btn bg-green" title="Add to Cart"> <i className="fa fa-shopping-cart"></i> </button>
                      </li>
                      <li>
                        <button type="button" className="wishlist bg-purple" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i className="fa fa-heart-o"></i></button>
                      </li>
                      <li>
                        <button type="button" className="quick-view bg-blue" data-toggle="tooltip" data-placement="top" title="Quick View" ><i className="fa fa-eye"></i></button>
                      </li>
                      
                    </ul>
                  </div>
                  <div className="caption product-detail">
                   <h4 className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">High Speed Magic Toy</a></h4>
                    <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
                    <p className="price product-price">$122.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout  product-grid  col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                <div className="sale-tag"><div className="btn bg-blue">SALE</div><div className="btn percent bg-yellow">20% OFF</div></div>
                  <div className="image product-imageblock"> <a href="product.html"><img src="image/product/toy-1.png" alt="iPod classNameic" title="iPod classNameic" className="img-responsive" /></a>
                    <ul className="button-group">
                      <li>
                        <button type="button" className="addtocart-btn bg-green" title="Add to Cart"> <i className="fa fa-shopping-cart"></i> </button>
                      </li>
                      <li>
                        <button type="button" className="wishlist bg-purple" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i className="fa fa-heart-o"></i></button>
                      </li>
                      <li>
                        <button type="button" className="quick-view bg-blue" data-toggle="tooltip" data-placement="top" title="Quick View" ><i className="fa fa-eye"></i></button>
                      </li>
                      
                    </ul>
                  </div>
                  <div className="caption product-detail">
                   <h4 className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">High Speed Magic Toy</a></h4>
                    <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> </div>
                    <p className="price product-price">$122.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout  product-grid  col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                <div className="sale-tag"><div className="btn bg-blue">SALE</div><div className="btn percent bg-yellow">20% OFF</div></div>
                  <div className="image product-imageblock"> <a href="product.html"><img src="image/product/toy-2.png" alt="iPod classNameic" title="iPod classNameic" className="img-responsive" /></a>
                    <ul className="button-group">
                      <li>
                        <button type="button" className="addtocart-btn bg-green" title="Add to Cart"> <i className="fa fa-shopping-cart"></i> </button>
                      </li>
                      <li>
                        <button type="button" className="wishlist bg-purple" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i className="fa fa-heart-o"></i></button>
                      </li>
                      <li>
                        <button type="button" className="quick-view bg-blue" data-toggle="tooltip" data-placement="top" title="Quick View" ><i className="fa fa-eye"></i></button>
                      </li>
                      
                    </ul>
                  </div>
                  <div className="caption product-detail">
                   <h4 className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">High Speed Magic Toy</a></h4>
                    <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
                    <p className="price product-price">$122.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout  product-grid  col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                <div className="sale-tag"><div className="btn bg-blue">SALE</div><div className="btn percent bg-yellow">20% OFF</div></div>
                  <div className="image product-imageblock"> <a href="product.html"><img src="image/product/toy-3.png" alt="iPod classNameic" title="iPod classNameic" className="img-responsive" /></a>
                    <ul className="button-group">
                      <li>
                        <button type="button" className="addtocart-btn bg-green" title="Add to Cart"> <i className="fa fa-shopping-cart"></i> </button>
                      </li>
                      <li>
                        <button type="button" className="wishlist bg-purple" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i className="fa fa-heart-o"></i></button>
                      </li>
                      <li>
                        <button type="button" className="quick-view bg-blue" data-toggle="tooltip" data-placement="top" title="Quick View" ><i className="fa fa-eye"></i></button>
                      </li>
                      
                    </ul>
                  </div>
                  <div className="caption product-detail">
                   <h4 className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">High Speed Magic Toy</a></h4>
                    <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
                    <p className="price product-price">$122.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout  product-grid  col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                <div className="sale-tag"><div className="btn bg-blue">SALE</div><div className="btn percent bg-yellow">20% OFF</div></div>
                  <div className="image product-imageblock"> <a href="product.html"><img src="image/product/toy-4.png" alt="iPod classNameic" title="iPod classNameic" className="img-responsive" /></a>
                    <ul className="button-group">
                      <li>
                        <button type="button" className="addtocart-btn bg-green" title="Add to Cart"> <i className="fa fa-shopping-cart"></i> </button>
                      </li>
                      <li>
                        <button type="button" className="wishlist bg-purple" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i className="fa fa-heart-o"></i></button>
                      </li>
                      <li>
                        <button type="button" className="quick-view bg-blue" data-toggle="tooltip" data-placement="top" title="Quick View" ><i className="fa fa-eye"></i></button>
                      </li>
                      
                    </ul>
                  </div>
                  <div className="caption product-detail">
                   <h4 className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">High Speed Magic Toy</a></h4>
                    <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
                    <p className="price product-price">$122.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-layout  product-grid  col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                <div className="sale-tag"><div className="btn bg-blue">SALE</div><div className="btn percent bg-yellow">20% OFF</div></div>
                  <div className="image product-imageblock"> <a href="product.html"><img src="image/product/toy-1.png" alt="iPod classNameic" title="iPod classNameic" className="img-responsive" /></a>
                    <ul className="button-group">
                      <li>
                        <button type="button" className="addtocart-btn bg-green" title="Add to Cart"> <i className="fa fa-shopping-cart"></i> </button>
                      </li>
                      <li>
                        <button type="button" className="wishlist bg-purple" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i className="fa fa-heart-o"></i></button>
                      </li>
                      <li>
                        <button type="button" className="quick-view bg-blue" data-toggle="tooltip" data-placement="top" title="Quick View" ><i className="fa fa-eye"></i></button>
                      </li>
                      
                    </ul>
                  </div>
                  <div className="caption product-detail">
                   <h4 className="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">High Speed Magic Toy</a></h4>
                    <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> </div>
                    <p className="price product-price">$122.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
        
    </div>
</section>

<div className="container">
 <div className="row">
    <div className="col-lg-12 text-center">
        
            <ul className="pagination ">
                <li className="page-item"><a className="page-link" href="#" data-abc="true"><i className="fa fa-angle-left"></i><i className="fa fa-angle-left"></i></a></li>
                <li className="page-item active"><a className="page-link" href="#" data-abc="true">1</a></li>
                <li className="page-item"><a className="page-link" href="#" data-abc="true">2</a></li>
                <li className="page-item"><a className="page-link" href="#" data-abc="true">3</a></li>
                <li className="page-item"><a className="page-link" href="#" data-abc="true">4</a></li>
                <li className="page-item"><a className="page-link" href="#" data-abc="true">5...</a></li>
                <li className="page-item"><a className="page-link" href="#" data-abc="true"><i className="fa fa-angle-right"></i><i className="fa fa-angle-right"></i></a></li>
            </ul>
        
    </div>
  </div>
</div>
    </>
  );
}
