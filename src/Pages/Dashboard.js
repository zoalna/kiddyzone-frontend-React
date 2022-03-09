import React, { Component } from "react";

import "../App.css";
import PartnerDiscount from "../Components/Home/PartnerDiscount";

export default function Dashboard() {
  return (
      <>
    <div class="mainbanner">
  <div class="top-banner" style={{backgroundColor:'#D8F3FF',marginTop:70}}>
  	<div class="page-title"><h1 style={{color:'black', fontSize:60}}>My Account</h1></div>
  </div>
</div>

<section id="dashboard-tab" class="content my-account-cont" style={{marginTop:20}}>
    <div class="container">
    <div class="row tab-sidebar">    
    <div class="col-sm-3">
    <nav class="nav-sidebar">
		<ul class="nav tabs">
          <li class="active"><a href="#tab1" data-toggle="tab">Dashboard</a></li>
          <li class=""><a href="#tab2" data-toggle="tab">My Orders</a></li>
          <li class=""><a href="#tab3" data-toggle="tab">My Wishlist</a></li>
          <li class=""><a href="#tab4" data-toggle="tab">Address Book</a></li>
          <li class=""><a href="#tab5" data-toggle="tab">Account Information</a></li>
          <li class=""><a href="#tab6" data-toggle="tab">Referral</a></li>                               
		</ul>
	</nav>
    </div>    
    </div>
    
    	
    <div class="tab-content">
            <div class="tab-pane active text-style" id="tab1">
              <h2>Account Information</h2>
                <div class="row information">
                    <div class="col-md-6">
                        <div class="info-content content-box">
                        <h2>Information :-</h2>
                            <ul>
                            <li><span>Name :</span><span>Asher Butler</span></li>
                            <li><span>Email :</span><span>Info@gmail.com</span></li>
                            <li><span>Phone :</span><span>+111 222 333</span></li>
                            </ul>
                            <div class="edit-profile"><a href="#"><img src="image/dashboard/edit-profile.svg"/></a><span>Edit and Change</span> <span><a href="#" class="text-red">Password</a></span></div>
                        </div>
                    </div>
                    
                    
                    
                    <div class="col-md-6">
                        <div class="newsletter bg-red">
                            <h2 class="text-white">Newsletter</h2>
                            <p class="text-white">You aren't subscribed to our newsletter</p>
                            <div class="news-edit"><a href="#"><img src="image/dashboard/edit.svg"/><span class="text-white">Edit now</span></a></div>
                        </div>
                    </div>
                </div>
                <div class="row address-book content-box">
                    <h2>Address Book :-</h2>
                    <div class="col-md-4 col-xs-6">
                        <div class="manage address bg-red">
                            <div class="news-edit text-center"><a href="#"><img src="image/dashboard/edit-red.svg"/><span class="text-white">Manage Address</span></a></div>
                        </div>
                    </div>
                    <div class="col-md-4 col-xs-6">
                        <div class="add address bg-green">
                            <div class="news-edit text-center"><a href="#"><img src="image/dashboard/add-icon.svg"/><span class="text-white">Add New Address</span></a></div>
                        </div>
                    </div>
                    <div class="col-md-4 col-xs-6">
                       
                    </div>
                </div>
                <div class="row billing-address">
                    <div class="col-md-6">
                        <div class="info-content content-box">
                        <h2>Default Billing Address :-</h2>
                            <ul>
                            <li>Asher Butler</li>
                            <li>2289</li>
                            <li>Jumeiah Beach, Al Safa</li>
                            <li>Dubai, 33962</li>
                            <li>United Arab Emirates</li>
                            </ul>
                            <div class="edit-profile"><a href="#"><img src="image/dashboard/edit-profile.svg"/></a><span><a href="#">Edit Address</a></span></div>
                        </div>
                    </div>
                    <div class="col-md-6"></div>
                </div>
                <div class="row recent-orders">
                    <div class="col-md-12">
                        <div class="content-box">
                        <h2>Recent Orders :-</h2>
                            <div class="widget stacked widget-table action-table">
				<div class="widget-content">
					<table class="table table-striped">
						<thead>
							<tr>
								<th>Order#</th>
								<th>Date</th>
								<th>Ship to</th>
								<th>Order total</th>
								<th>Status</th>
								<th class="td-actions">Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>000089</td>
								<td>09/02/19</td>
								<td>Jon Doe</td>
								<td>$136.00</td>
								<td>Completed</td>
								<td class="td-actions">
									<button class="bg-red text-white">View</button>
                                    <button class="bg-green text-white">Track</button>
								</td>
							</tr>
							<tr>
								<td>000089</td>
								<td>09/02/19</td>
								<td>Jon Doe</td>
								<td>$136.00</td>
								<td>Completed</td>
								<td class="td-actions">
									<button class="bg-red text-white">View</button>
                                    <button class="bg-green text-white">Track</button>
								</td>
							</tr>
							<tr>
								<td>000089</td>
								<td>09/02/19</td>
								<td>Jon Doe</td>
								<td>$136.00</td>
								<td>Completed</td>
								<td class="td-actions">
									<button class="bg-red text-white">View</button>
                                    <button class="bg-green text-white">Track</button>
								</td>
							</tr>
							<tr>
								<td>000089</td>
								<td>09/02/19</td>
								<td>Jon Doe</td>
								<td>$136.00</td>
								<td>Completed</td>
								<td class="td-actions">
									<button class="bg-red text-white">View</button>
                                    <button class="bg-green text-white">Track</button>
								</td>
							</tr>
							<tr>
								<td>000089</td>
								<td>09/02/19</td>
								<td>Jon Doe</td>
								<td>$136.00</td>
								<td>Completed</td>
								<td class="td-actions">
									<button class="bg-red text-white">View</button>
                                    <button class="bg-green text-white">Track</button>
								</td>
							</tr>
							</tbody>
						</table>
				</div>
			
			</div>
                            
                        </div>
                    </div>
                </div>
                  
            </div>
            <div class="tab-pane text-style" id="tab2">
              
                <div class="row recent-orders">
                    <div class="col-md-12">
                        <div class="content-box tab-inner">
                        <h2>My Orders :-</h2>
                            <div class="widget stacked widget-table action-table">
				<div class="widget-content">
					<table class="table table-striped">
						<thead>
							<tr>
								<th>Order#</th>
								<th>Date</th>
								<th>Ship to</th>
								<th>Order total</th>
								<th>Status</th>
								<th class="td-actions">Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>000089</td>
								<td>09/02/19</td>
								<td>Jon Doe</td>
								<td>$136.00</td>
								<td class="text-green">Completed</td>
								<td class="td-actions">
									<button class="bg-red text-white">View</button>
                                    <button class="bg-green text-white">Track</button>
								</td>
							</tr>
							<tr>
								<td>000089</td>
								<td>09/02/19</td>
								<td>Jon Doe</td>
								<td>$136.00</td>
								<td class="text-green">Completed</td>
								<td class="td-actions">
									<button class="bg-red text-white">View</button>
                                    <button class="bg-green text-white">Track</button>
								</td>
							</tr>
							<tr>
								<td>000089</td>
								<td>09/02/19</td>
								<td>Jon Doe</td>
								<td>$136.00</td>
								<td class="text-red">Cancel</td>
								<td class="td-actions">
									<button class="bg-red text-white">View</button>
                                    <button class="bg-green text-white">Track</button>
								</td>
							</tr>
							<tr>
								<td>000089</td>
								<td>09/02/19</td>
								<td>Jon Doe</td>
								<td>$136.00</td>
								<td class="text-green">Pending</td>
								<td class="td-actions">
									<button class="bg-red text-white">View</button>
                                    <button class="bg-green text-white">Track</button>
								</td>
							</tr>
							<tr>
								<td>000089</td>
								<td>09/02/19</td>
								<td>Jon Doe</td>
								<td>$136.00</td>
								<td class="text-green">Completed</td>
								<td class="td-actions">
									<button class="bg-red text-white">View</button>
                                    <button class="bg-green text-white">Track</button>
								</td>
							</tr>
							</tbody>
						</table>
				</div>
			
			</div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane text-style" id="tab3">
              
                <div class="row recent-orders">
                    <div class="col-md-12">
                        <div class="content-box tab-inner">
                        <h2>My Wishlist :-</h2>
                            <div class="product-layout  product-grid  col-lg-4 col-md-4 col-sm-6 col-xs-12">
                              <div class="item">
                                <div class="product-thumb">
                                <div class="sale-tag stock"><div class="btn bg-green">In-Stock</div></div>
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
                                    <button class="bg-green add-to-cart">Add to cart</button>  
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="product-layout  product-grid  col-lg-4 col-md-4 col-sm-6 col-xs-12">
                              <div class="item">
                                <div class="product-thumb">
                                <div class="sale-tag stock"><div class="btn bg-green">In-Stock</div></div>
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
                                    <div class="rating"> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> </div>
                                    <p class="price product-price">$122.00</p>
                                    <button class="bg-green add-to-cart">Add to cart</button>  
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="product-layout  product-grid  col-lg-4 col-md-4 col-sm-6 col-xs-12">
                              <div class="item">
                                <div class="product-thumb">
                                <div class="sale-tag stock"><div class="btn bg-green">In-Stock</div></div>
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
                                    <div class="rating"> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i><i class="fa fa-star fa-stack-2x"></i></span> </div>
                                    <p class="price product-price">$122.00</p>
                                    <button class="bg-green add-to-cart">Add to cart</button>  
                                  </div>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tab-pane text-style" id="tab4">
                <div class="row billing-address ">
                    <div class="col-md-6">
                        <div class="info-content content-box tab-inner">
                        <h2>Address Book :-</h2>    
                        <h3>Default Billing Address :-</h3>
                            <ul>
                            <li>Asher Butler</li>
                            <li>2289</li>
                            <li>Jumeiah Beach, Al Safa</li>
                            <li>Dubai, 33962</li>
                            <li>United Arab Emirates</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6"></div>
                </div>
              <div class="row address-book content-box">
                    <h2>Edit Address Book :-</h2>
                    <div class="col-md-4 col-xs-6">
                        <div class="manage address bg-red">
                            <div class="news-edit text-center"><a href="#"><img src="image/dashboard/edit-red.svg"/><span class="text-white">Manage Address</span></a></div>
                        </div>
                    </div>
                    <div class="col-md-4 col-xs-6">
                        <div class="add address bg-green">
                            <div class="news-edit text-center"><a href="#"><img src="image/dashboard/add-icon.svg"/><span class="text-white">Add New Address</span></a></div>
                        </div>
                    </div>
                    <div class="col-md-4 col-xs-6">
                       
                    </div>
                </div>
            </div>
            <div class="tab-pane text-style" id="tab5">
                 <div class="row recent-orders">
                    <div class="col-md-8">
                        <div class="content-box tab-inner">
                            <h2>Account Information :-</h2>
                                <div class="input-group">
                                    <input type="text" name="" class="form-control" placeholder="First Name"/>
                                    <div class="input-icon"><img src="image/dashboard/Icon%20feather-user.svg"/></div>
                                </div><br />
                                <div class="input-group">
                                    <input type="text" name="" class="form-control" placeholder="Last Name"/>
                                    <div class="input-icon"><img src="image/dashboard/Icon%20feather-user.svg"/></div>
                               </div><br />
                            <h3>Change Email And Password :-</h3>
                            <div class="input-group">
                                    <input type="email" name="" class="form-control" placeholder="Email Address"/>
                                    <div class="input-icon"><img src="image/dashboard/Icon-material-email.svg"/></div>
                                </div><br />
                                <div class="input-group">
                                    <input type="password" name="" class="form-control" placeholder="Password"/>
                                    <div class="input-icon"><img src="image/dashboard/Icon-awesome-eye.svg"/></div>
                               </div><br />
                            <div class="input-group">
                                    <input type="password" name="" class="form-control" placeholder="New Password"/>
                                    <div class="input-icon"><img src="image/dashboard/Icon-awesome-eye.svg"/></div>
                                </div><br />
                                <div class="input-group">
                                    <input type="password" name="" class="form-control" placeholder="Confirm Password"/>
                                    <div class="input-icon"><img src="image/dashboard/Icon-awesome-eye.svg"/></div>
                               </div><br />
                            <div class="input-group"><button class="bg-green text-white submit update">Update</button></div>
                        </div>
                   </div>
                </div>
            </div>
            <div class="tab-pane text-style" id="tab6">
              <div class="row recent-orders">
                    <div class="col-md-12">
                        <div class="content-box tab-inner">
                        <h2>Referral :-</h2>
                            <div class="widget stacked widget-table action-table">
				<div class="widget-content">
					<table class="table table-striped">
						<thead>
							<tr>
								<th>ID</th>
                                <th>OrderID</th>
								<th>Date</th>
								<th>Status</th>
								<th class="td-actions">Action</th>
							</tr>
						</thead>
						<tbody>
							<tr>
                                <td>50</td>
								<td>000089</td>
								<td>09/02/19</td>
								<td class="text-green">Completed</td>
								<td class="td-actions">
									<button class="bg-red text-white">View</button>
                                    <button class="bg-green text-white">Track</button>
								</td>
							</tr>
							<tr>
                                <td>50</td>
								<td>000089</td>
								<td>09/02/19</td>
								<td class="text-green">Completed</td>
								<td class="td-actions">
									<button class="bg-red text-white">View</button>
                                    <button class="bg-green text-white">Track</button>
								</td>
							</tr>
							<tr>
                                <td>50</td>
								<td>000089</td>
								<td>09/02/19</td>
								<td class="text-red">Cancel</td>
								<td class="td-actions">
									<button class="bg-red text-white">View</button>
                                    <button class="bg-green text-white">Track</button>
								</td>
							</tr>
							<tr>
                                <td>50</td>
								<td>000089</td>
								<td>09/02/19</td>
								<td class="text-green">Pending</td>
								<td class="td-actions">
									<button class="bg-red text-white">View</button>
                                    <button class="bg-green text-white">Track</button>
								</td>
							</tr>
							<tr>
                                <td>50</td>
								<td>000089</td>
								<td>09/02/19</td>
								<td class="text-green">Completed</td>
								<td class="td-actions">
									<button class="bg-red text-white">View</button>
                                    <button class="bg-green text-white">Track</button>
								</td>
							</tr>
							</tbody>
						</table>
				</div>
			
			</div>
                            
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
