import React, { Component } from "react";

import "../App.css";
import PartnerDiscount from "../Components/Home/PartnerDiscount";

export default function Cart() {
  return (
      <>
    <div class="container">
    <ol class="breadcrumb">
    	<li><a href="#">Home</a></li>
    	<li><a href="#">Page</a></li>
   		<li><a href="#">Shop</a></li>
        <li class="active"><a href="#">Cart</a></li>
    </ol>
</div>
    

<section id="cart-sec" class="cart-checkout">
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-8">
            <table class="table table-hover table-left">
                <thead>
                    <tr>
                        <th class="text-center">Product</th>
                        <th class="text-center">Color & Size</th>
                        <th class="text-center">Quantity</th>
                        <th class="text-center">Price</th>
                        <th class="text-center">Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="col-sm-4 col-md-4 product-thumb">
                        <div class="media">
                            <a class="thumbnail pull-left" href="#"> <img class="media-object" src="image/cart/product-image.png" /> </a>
                            <div class="media-body">
                                <h4 class="media-heading"><a href="#">High Speed Magic Toy</a></h4>
                            </div>
                        </div></td>
                        <td class="col-sm-2 col-md-2"><strong>Size: XL <br />Color: Black</strong></td>    
                        <td class="col-sm-2 col-md-2" style={{textAlign: 'center'}}>
                        <input type="number" class="form-control" id="quantity" value="0" />
                        </td>
                        <td class="col-sm-2 col-md-2 text-center"><strong>$120</strong></td>
                        <td class="col-sm-2 col-md-2 text-center"><strong>$120</strong></td>
                    </tr>
                    <tr>
                        <td class="col-sm-4 col-md-4 product-thumb">
                        <div class="media">
                            <a class="thumbnail pull-left" href="#"> <img class="media-object" src="image/cart/product-image.png" /> </a>
                            <div class="media-body">
                                <h4 class="media-heading"><a href="#">High Speed Magic Toy</a></h4>
                            </div>
                        </div></td> 
                        <td class="col-sm-2 col-md-2"><strong>Size: XL <br />Color: Black</strong></td>    
                        <td class="col-sm-2 col-md-2" style={{textAlign: 'center'}}>
                        <input type="number" class="form-control" id="quantity" value="0" />
                        </td>
                        <td class="col-sm-2 col-md-2 text-center"><strong>$120</strong></td>
                        <td class="col-sm-2 col-md-2 text-center"><strong>$120</strong></td>
                    </tr>
                    <tr>
                        <td class="col-sm-4 col-md-4 product-thumb">
                        <div class="media">
                            <a class="thumbnail pull-left" href="#"> <img class="media-object" src="image/cart/product-image.png" /> </a>
                            <div class="media-body">
                                <h4 class="media-heading"><a href="#">High Speed Magic Toy</a></h4>
                            </div>
                        </div></td>
                        <td class="col-sm-2 col-md-2"><strong>Size: XL <br />Color: Black</strong></td>    
                        <td class="col-sm-2 col-md-2" style={{textAlign: 'center'}}>
                        <input type="number" class="form-control" id="quantity" value="0" />
                        </td>
                        <td class="col-sm-2 col-md-2 text-center"><strong>$120</strong></td>
                        <td class="col-sm-2 col-md-2 text-center"><strong>$120</strong></td>
                    </tr>

                </tbody>
            </table>
        </div>
            
            <div class="col-md-4 subtotal" style={{backgroundColor:'#F6F6F6'}}>
                <h2>Order Summary</h2>
                <table class="table table-hover table-right">
                    <thead>
                        
                    <tr>
                        <td><h5>Subtotal</h5></td>
                        <td class="text-right"><h5><strong>AED 4.50</strong></h5></td>
                    </tr>
                    <tr>
                        <td><h5>Items Discount</h5></td>
                        <td class="text-right"><h5><strong>AED 0.00</strong></h5></td>
                    </tr>
                    <tr>
                        <td><h5>Estimate VAT%</h5></td>
                        <td class="text-right"><h5><strong>AED 0.00</strong></h5></td>
                    </tr>
                    <tr>
                        <td><h5>Shipping</h5></td>
                        <td class="text-right"><h5><strong>Free Shipping</strong></h5></td>
                    </tr>
                    <tr>
                        <td><h5>Total</h5></td>
                        <td class="text-right"><h5><strong>AED 4.50</strong></h5></td>
                    </tr>
                    </thead>
                </table>
                <button type="button" class="btn bg-green text-white proceed-checkout">Proceed To Checkout</button>
                <div class="total-price"><span class="total">Total</span><span class="t-price">$400</span></div>
            </div>
            
            <div class="col-sm-12 cart-btn">
                <div>
                    <button type="button" class="btn bg-green text-white">Order By WhatsApp</button>
                    <button type="button" class="btn bg-red text-white">UPDATE CART</button>
                    <button type="button" class="btn bg-green text-white">CONTINUE SHOPPING</button>
                </div>
            </div>
            

            
          </div>
    </div>
</section>    
<section id="delivery-services" class="services-icons">

   <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="service one">
                    <img src="image/cart/truck.jpg"/>
                    <span><h2>Easy to buy & return</h2><p>single click to buy & return</p></span>
                </div>
            </div>
            <div class="col-md-3">
                <div class="service two">
                    <img src="image/cart/payment-card.jpg"/>
                    <span><h2>Secure Payments</h2><p>100% payment security</p></span>
                </div>
            </div>
            <div class="col-md-3">
                <div class="service three">
                    <img src="image/cart/support.jpg"/>
                    <span><h2>24x7 Support Available</h2><p>support 24 hours a day</p></span>
                </div>
            </div>
            <div class="col-md-3">
                <div class="service four">
                    <img src="image/cart/mobile-app.jpg"/>
                    <span><h2>Shop with our App</h2><p>Download app & get offers</p></span>
                </div>
            </div>
        </div>
   </div>
    
</section>
    
<section id="similar-products" class="content hot-sellers ">
    <div class="container">
        <div class="row">
        	<div class="col-xs-12 col-md-12">
            	<div class="heading">
                	<h2>Similar Products</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div class="item">
                <div class="product-thumb">
                <div class="sale-tag"><div class="btn bg-blue">SALE</div><div class="btn percent bg-yellow">20% OFF</div></div>
                  <div class="image product-imageblock"> <a href="product.html"><img src="image/product/toy-1.png" alt="iPod Classic" title="iPod Classic" class="img-responsive" /></a>
                    <ul class="button-group">
                      <li>
                        <button type="button" class="addtocart-btn bg-green" title="Add to Cart"> <i class="fa fa-shopping-cart"></i> </button>
                      </li>
                      <li>
                        <button type="button" class="wishlist bg-purple" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i class="fa fa-heart-o"></i></button>
                      </li>
                      <li>
                        <button type="button" class="quick-view bg-blue" data-toggle="tooltip" data-placement="top" title="Quick View" ><i class="fa fa-eye"></i></button>
                      </li>
                      
                    </ul>
                  </div>
                  <div class="caption product-detail">
                   <h4 class="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">High Speed Magic Toy</a></h4>
                    <div class="rating"> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> </div>
                    <p class="price product-price">$122.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div class="item">
                <div class="product-thumb">
                <div class="sale-tag"><div class="btn bg-blue">SALE</div><div class="btn percent bg-yellow">20% OFF</div></div>
                  <div class="image product-imageblock"> <a href="product.html"><img src="image/product/toy-2.png" alt="iPod Classic" title="iPod Classic" class="img-responsive" /></a>
                    <ul class="button-group">
                      <li>
                        <button type="button" class="addtocart-btn bg-green" title="Add to Cart"> <i class="fa fa-shopping-cart"></i> </button>
                      </li>
                      <li>
                        <button type="button" class="wishlist bg-purple" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i class="fa fa-heart-o"></i></button>
                      </li>
                      <li>
                        <button type="button" class="quick-view bg-blue" data-toggle="tooltip" data-placement="top" title="Quick View" ><i class="fa fa-eye"></i></button>
                      </li>
                      
                    </ul>
                  </div>
                  <div class="caption product-detail">
                   <h4 class="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">High Speed Magic Toy</a></h4>
                    <div class="rating"> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span> </div>
                    <p class="price product-price">$122.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div class="item">
                <div class="product-thumb">
                <div class="sale-tag"><div class="btn bg-blue">SALE</div><div class="btn percent bg-yellow">20% OFF</div></div>
                  <div class="image product-imageblock"> <a href="product.html"><img src="image/product/toy-3.png" alt="iPod Classic" title="iPod Classic" class="img-responsive" /></a>
                    <ul class="button-group">
                      <li>
                        <button type="button" class="addtocart-btn bg-green" title="Add to Cart"> <i class="fa fa-shopping-cart"></i> </button>
                      </li>
                      <li>
                        <button type="button" class="wishlist bg-purple" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i class="fa fa-heart-o"></i></button>
                      </li>
                      <li>
                        <button type="button" class="quick-view bg-blue" data-toggle="tooltip" data-placement="top" title="Quick View" ><i class="fa fa-eye"></i></button>
                      </li>
                      
                    </ul>
                  </div>
                  <div class="caption product-detail">
                   <h4 class="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">High Speed Magic Toy</a></h4>
                    <div class="rating"> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span> </div>
                    <p class="price product-price">$122.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div class="item">
                <div class="product-thumb">
                <div class="sale-tag"><div class="btn bg-blue">SALE</div><div class="btn percent bg-yellow">20% OFF</div></div>
                  <div class="image product-imageblock"> <a href="product.html"><img src="image/product/toy-4.png" alt="iPod Classic" title="iPod Classic" class="img-responsive" /></a>
                    <ul class="button-group">
                      <li>
                        <button type="button" class="addtocart-btn bg-green" title="Add to Cart"> <i class="fa fa-shopping-cart"></i> </button>
                      </li>
                      <li>
                        <button type="button" class="wishlist bg-purple" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i class="fa fa-heart-o"></i></button>
                      </li>
                      <li>
                        <button type="button" class="quick-view bg-blue" data-toggle="tooltip" data-placement="top" title="Quick View" ><i class="fa fa-eye"></i></button>
                      </li>
                      
                    </ul>
                  </div>
                  <div class="caption product-detail">
                   <h4 class="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">High Speed Magic Toy</a></h4>
                    <div class="rating"> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span> </div>
                    <p class="price product-price">$122.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div class="row">
            <div class="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div class="item">
                <div class="product-thumb">
                <div class="sale-tag"><div class="btn bg-blue">SALE</div><div class="btn percent bg-yellow">20% OFF</div></div>
                  <div class="image product-imageblock"> <a href="product.html"><img src="image/product/toy-1.png" alt="iPod Classic" title="iPod Classic" class="img-responsive" /></a>
                    <ul class="button-group">
                      <li>
                        <button type="button" class="addtocart-btn bg-green" title="Add to Cart"> <i class="fa fa-shopping-cart"></i> </button>
                      </li>
                      <li>
                        <button type="button" class="wishlist bg-purple" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i class="fa fa-heart-o"></i></button>
                      </li>
                      <li>
                        <button type="button" class="quick-view bg-blue" data-toggle="tooltip" data-placement="top" title="Quick View" ><i class="fa fa-eye"></i></button>
                      </li>
                      
                    </ul>
                  </div>
                  <div class="caption product-detail">
                   <h4 class="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">High Speed Magic Toy</a></h4>
                    <div class="rating"> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> </div>
                    <p class="price product-price">$122.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div class="item">
                <div class="product-thumb">
                <div class="sale-tag"><div class="btn bg-blue">SALE</div><div class="btn percent bg-yellow">20% OFF</div></div>
                  <div class="image product-imageblock"> <a href="product.html"><img src="image/product/toy-2.png" alt="iPod Classic" title="iPod Classic" class="img-responsive" /></a>
                    <ul class="button-group">
                      <li>
                        <button type="button" class="addtocart-btn bg-green" title="Add to Cart"> <i class="fa fa-shopping-cart"></i> </button>
                      </li>
                      <li>
                        <button type="button" class="wishlist bg-purple" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i class="fa fa-heart-o"></i></button>
                      </li>
                      <li>
                        <button type="button" class="quick-view bg-blue" data-toggle="tooltip" data-placement="top" title="Quick View" ><i class="fa fa-eye"></i></button>
                      </li>
                      
                    </ul>
                  </div>
                  <div class="caption product-detail">
                   <h4 class="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">High Speed Magic Toy</a></h4>
                    <div class="rating"> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span> </div>
                    <p class="price product-price">$122.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div class="item">
                <div class="product-thumb">
                <div class="sale-tag"><div class="btn bg-blue">SALE</div><div class="btn percent bg-yellow">20% OFF</div></div>
                  <div class="image product-imageblock"> <a href="product.html"><img src="image/product/toy-3.png" alt="iPod Classic" title="iPod Classic" class="img-responsive" /></a>
                    <ul class="button-group">
                      <li>
                        <button type="button" class="addtocart-btn bg-green" title="Add to Cart"> <i class="fa fa-shopping-cart"></i> </button>
                      </li>
                      <li>
                        <button type="button" class="wishlist bg-purple" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i class="fa fa-heart-o"></i></button>
                      </li>
                      <li>
                        <button type="button" class="quick-view bg-blue" data-toggle="tooltip" data-placement="top" title="Quick View" ><i class="fa fa-eye"></i></button>
                      </li>
                      
                    </ul>
                  </div>
                  <div class="caption product-detail">
                   <h4 class="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">High Speed Magic Toy</a></h4>
                    <div class="rating"> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span> </div>
                    <p class="price product-price">$122.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div class="item">
                <div class="product-thumb">
                <div class="sale-tag"><div class="btn bg-blue">SALE</div><div class="btn percent bg-yellow">20% OFF</div></div>
                  <div class="image product-imageblock"> <a href="product.html"><img src="image/product/toy-4.png" alt="iPod Classic" title="iPod Classic" class="img-responsive" /></a>
                    <ul class="button-group">
                      <li>
                        <button type="button" class="addtocart-btn bg-green" title="Add to Cart"> <i class="fa fa-shopping-cart"></i> </button>
                      </li>
                      <li>
                        <button type="button" class="wishlist bg-purple" data-toggle="tooltip" data-placement="top" title="Add to Wish List" ><i class="fa fa-heart-o"></i></button>
                      </li>
                      <li>
                        <button type="button" class="quick-view bg-blue" data-toggle="tooltip" data-placement="top" title="Quick View" ><i class="fa fa-eye"></i></button>
                      </li>
                      
                    </ul>
                  </div>
                  <div class="caption product-detail">
                   <h4 class="product-name"><a href="#" title="Casual Shirt With Ruffle Hem">High Speed Magic Toy</a></h4>
                    <div class="rating"> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span> </div>
                    <p class="price product-price">$122.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
</section>     
  </>
  );
}
