import React, { Component } from 'react'
import '../App.css'
import PartnerDiscount from '../Components/Home/PartnerDiscount'

export default function Dashboard() {
  return (
    <>
      <div className="dashboard__header">
        <div className='container'>
          <div className="dashboard__header__content">
            <h1>My Account</h1>
          </div>
        </div>
      </div>

      <section id="dashboard-tab" className="content my-account-cont">
        <div className="container">
          <div className="row tab-sidebar">
            <div className="col-sm-3">
              <nav className="nav-sidebar">
                <ul className="nav tabs">
                  <li className="">
                    <a href="#tab1" data-toggle="tab">
                      Profile
                    </a>
                  </li>
                  <li className="">
                    <a href="#tab2" data-toggle="tab">
                      My Orders
                    </a>
                  </li>
                  <li className="">
                    <a href="#tab3" data-toggle="tab">
                      My Wishlist
                    </a>
                  </li>
                  <li className="">
                    <a href="#tab3" data-toggle="tab">
                      Compare
                    </a>
                  </li>
                  <li className="">
                    <a href="#tab4" data-toggle="tab">
                      Address Book
                    </a>
                  </li>
                  <li className="">
                    <a href="#tab5" data-toggle="tab">
                      Account Information
                    </a>
                  </li>
                  <li className="">
                    <a href="#tab6" data-toggle="tab">
                      Referral
                    </a>
                  </li>
                  <li className="active">
                    <a href="#tab6" data-toggle="tab">
                      Dashboard
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="tab-content">
            <div className="tab-pane active text-style" id="tab1">
              <h2>Account Information</h2>
              <div className="row information">
                <div className="col-md-6">
                  <div className="info-content content-box">
                    <h2>Information :-</h2>
                    <ul>
                      <li>
                        <span>Name :</span>
                        <span>Asher Butler</span>
                      </li>
                      <li>
                        <span>Email :</span>
                        <span>Info@gmail.com</span>
                      </li>
                      <li>
                        <span>Phone :</span>
                        <span>+111 222 333</span>
                      </li>
                    </ul>
                    <div className="edit-profile">
                      <a href="#">
                        <img src="image/dashboard/edit-profile.svg" />
                      </a>
                      <span>Edit and Change</span>{' '}
                      <span>
                        <a href="#" className="text-red">
                          Password
                        </a>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="newsletter bg-red">
                    <h2 className="text-white">Newsletter</h2>
                    <p className="text-white">
                      You aren't subscribed to our newsletter
                    </p>
                    <div className="news-edit">
                      <a href="#">
                        <img src="image/dashboard/edit.svg" />
                        <span className="text-white">Edit now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row address-book content-box">
                <h2>Address Book :-</h2>
                <div className="col-md-4 col-xs-6">
                  <div className="manage address bg-red">
                    <div className="news-edit text-center">
                      <a href="#">
                        <img src="image/dashboard/edit-red.svg" />
                        <span className="text-white">Manage Address</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-xs-6">
                  <div className="add address bg-green">
                    <div className="news-edit text-center">
                      <a href="#">
                        <img src="image/dashboard/add-icon.svg" />
                        <span className="text-white">Add New Address</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-xs-6"></div>
              </div>
              <div className="row billing-address">
                <div className="col-md-6">
                  <div className="info-content content-box">
                    <h2>Default Billing Address :-</h2>
                    <ul>
                      <li>Asher Butler</li>
                      <hr className="dasboard__item" />
                      <li>2289</li>
                      <hr className="dasboard__item" />
                      <li>Jumeiah Beach, Al Safa</li>
                      <hr className="dasboard__item" />
                      <li>Dubai, 33962</li>
                      <hr className="dasboard__item" />
                      <li>United Arab Emirates</li>
                      <hr className="dasboard__item" />
                    </ul>
                    <div className="edit-profile">
                      <a href="#">
                        <img src="image/dashboard/edit-profile.svg" />
                      </a>
                      <span>
                        <a href="#">Edit Address</a>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6"></div>
              </div>
              <div className="row recent-orders">
                <div className="col-md-12">
                  <div className="content-box">
                    <h2>Recent Orders :-</h2>
                    <div className="widget stacked widget-table action-table">
                      <div className="widget-content">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th>Order ID</th>
                              <th>Date</th>
                              <th>total</th>
                              <th>Status</th>
                              <th className="td-actions">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>000089</td>
                              <td>09/02/19</td>
                              <td>$136.00</td>
                              <td className="complete__green">Completed</td>
                              <td className="td-actions">
                                <div className="eye__icon">
                                  <a href="#">
                                    <img src="image/dashboard/Icon-awesome-eye.svg" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>000089</td>
                              <td>09/02/19</td>
                              <td>$136.00</td>
                              <td className="complete__green">Completed</td>
                              <td className="td-actions">
                                <div className="eye__icon">
                                  <a href="#">
                                    <img src="image/dashboard/Icon-awesome-eye.svg" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>000089</td>
                              <td>09/02/19</td>
                              <td>$136.00</td>
                              <td className="complete__green">Completed</td>
                              <td className="td-actions">
                                <div className="eye__icon">
                                  <a href="#">
                                    <img src="image/dashboard/Icon-awesome-eye.svg" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>000089</td>
                              <td>09/02/19</td>
                              <td>$136.00</td>
                              <td className="complete__green">Completed</td>
                              <td className="td-actions">
                                <div className="eye__icon">
                                  <a href="#">
                                    <img src="image/dashboard/Icon-awesome-eye.svg" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>000089</td>
                              <td>09/02/19</td>
                              <td>$136.00</td>
                              <td className="complete__green">Completed</td>
                              <td className="td-actions">
                                <div className="eye__icon">
                                  <a href="#">
                                    <img src="image/dashboard/Icon-awesome-eye.svg" />
                                  </a>
                                </div>
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
            <div className="tab-pane text-style" id="tab2">
              <div className="row recent-orders">
                <div className="col-md-12">
                  <div className="content-box tab-inner">
                    <h2>My Orders :-</h2>
                    <div className="widget stacked widget-table action-table">
                      <div className="widget-content">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th>Order ID</th>
                              <th>Date</th>
                              <th>total</th>
                              <th>Status</th>
                              <th className="td-actions">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>000089</td>
                              <td>09/02/19</td>
                              <td>Jon Doe</td>
                              <td>$136.00</td>
                              <td className="text-green">Completed</td>
                              <td className="td-actions">
                                {/* <button className="bg-red text-white">View</button>
                                    <button className="bg-green text-white">Track</button> */}
                              </td>
                            </tr>
                            <tr>
                              <td>000089</td>
                              <td>09/02/19</td>
                              <td>Jon Doe</td>
                              <td>$136.00</td>
                              <td className="text-green">Completed</td>
                              <td className="td-actions">
                                {/* <button className="bg-red text-white">View</button>
                                    <button className="bg-green text-white">Track</button> */}
                              </td>
                            </tr>
                            <tr>
                              <td>000089</td>
                              <td>09/02/19</td>
                              <td>Jon Doe</td>
                              <td>$136.00</td>
                              <td className="text-red">Cancel</td>
                              <td className="td-actions">
                                {/* <button className="bg-red text-white">View</button>
                                    <button className="bg-green text-white">Track</button> */}
                              </td>
                            </tr>
                            <tr>
                              <td>000089</td>
                              <td>09/02/19</td>
                              <td>Jon Doe</td>
                              <td>$136.00</td>
                              <td className="text-green">Pending</td>
                              <td className="td-actions">
                                {/* <button className="bg-red text-white">View</button>
                                    <button className="bg-green text-white">Track</button> */}
                              </td>
                            </tr>
                            <tr>
                              <td>000089</td>
                              <td>09/02/19</td>
                              <td>Jon Doe</td>
                              <td>$136.00</td>
                              <td className="text-green">Completed</td>
                              <td className="td-actions">
                                {/* <button className="bg-red text-white">View</button>
                                    <button className="bg-green text-white">Track</button> */}
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
            <div className="tab-pane text-style" id="tab3">
              <div className="row recent-orders">
                <div className="col-md-12">
                  <div className="content-box tab-inner">
                    <h2>My Wishlist :-</h2>
                    <div className="product-layout  product-grid  col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <div className="item">
                        <div className="product-thumb">
                          <div className="sale-tag stock">
                            <div className="btn bg-green">In-Stock</div>
                          </div>
                          <div className="image product-imageblock">
                            {' '}
                            <a href="product.html">
                              <img
                                src="image/product/toy-1.png"
                                alt="iPod classNameic"
                                title="iPod classNameic"
                                className="img-responsive"
                              />
                            </a>
                            <ul className="button-group">
                              <li>
                                <button
                                  type="button"
                                  className="addtocart-btn bg-green"
                                  title="Add to Cart"
                                >
                                  {' '}
                                  <i className="fa fa-shopping-cart"></i>{' '}
                                </button>
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="wishlist bg-purple"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Add to Wish List"
                                >
                                  <i className="fa fa-heart-o"></i>
                                </button>
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="quick-view bg-blue"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Quick View"
                                >
                                  <i className="fa fa-eye"></i>
                                </button>
                              </li>
                            </ul>
                          </div>
                          <div className="caption product-detail">
                            <h4 className="product-name">
                              <a href="#" title="Casual Shirt With Ruffle Hem">
                                High Speed Magic Toy
                              </a>
                            </h4>
                            <div className="rating">
                              {' '}
                              <span className="fa fa-stack">
                                <i className="fa fa-star-o fa-stack-2x"></i>
                                <i className="fa fa-star fa-stack-2x"></i>
                              </span>{' '}
                              <span className="fa fa-stack">
                                <i className="fa fa-star-o fa-stack-2x"></i>
                                <i className="fa fa-star fa-stack-2x"></i>
                              </span>{' '}
                              <span className="fa fa-stack">
                                <i className="fa fa-star-o fa-stack-2x"></i>
                                <i className="fa fa-star fa-stack-2x"></i>
                              </span>{' '}
                              <span className="fa fa-stack">
                                <i className="fa fa-star-o fa-stack-2x"></i>
                                <i className="fa fa-star fa-stack-2x"></i>
                              </span>{' '}
                              <span className="fa fa-stack">
                                <i className="fa fa-star-o fa-stack-2x"></i>
                                <i className="fa fa-star fa-stack-2x"></i>
                              </span>{' '}
                            </div>
                            <p className="price product-price">$122.00</p>
                            <button className="bg-green add-to-cart">
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-layout  product-grid  col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <div className="item">
                        <div className="product-thumb">
                          <div className="sale-tag stock">
                            <div className="btn bg-green">In-Stock</div>
                          </div>
                          <div className="image product-imageblock">
                            {' '}
                            <a href="product.html">
                              <img
                                src="image/product/toy-2.png"
                                alt="iPod classNameic"
                                title="iPod classNameic"
                                className="img-responsive"
                              />
                            </a>
                            <ul className="button-group">
                              <li>
                                <button
                                  type="button"
                                  className="addtocart-btn bg-green"
                                  title="Add to Cart"
                                >
                                  {' '}
                                  <i className="fa fa-shopping-cart"></i>{' '}
                                </button>
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="wishlist bg-purple"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Add to Wish List"
                                >
                                  <i className="fa fa-heart-o"></i>
                                </button>
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="quick-view bg-blue"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Quick View"
                                >
                                  <i className="fa fa-eye"></i>
                                </button>
                              </li>
                            </ul>
                          </div>
                          <div className="caption product-detail">
                            <h4 className="product-name">
                              <a href="#" title="Casual Shirt With Ruffle Hem">
                                High Speed Magic Toy
                              </a>
                            </h4>
                            <div className="rating">
                              {' '}
                              <span className="fa fa-stack">
                                <i className="fa fa-star-o fa-stack-2x"></i>
                                <i className="fa fa-star fa-stack-2x"></i>
                              </span>{' '}
                              <span className="fa fa-stack">
                                <i className="fa fa-star-o fa-stack-2x"></i>
                                <i className="fa fa-star fa-stack-2x"></i>
                              </span>{' '}
                              <span className="fa fa-stack">
                                <i className="fa fa-star-o fa-stack-2x"></i>
                                <i className="fa fa-star fa-stack-2x"></i>
                              </span>{' '}
                              <span className="fa fa-stack">
                                <i className="fa fa-star-o fa-stack-2x"></i>
                                <i className="fa fa-star fa-stack-2x"></i>
                              </span>{' '}
                              <span className="fa fa-stack">
                                <i className="fa fa-star-o fa-stack-2x"></i>
                                <i className="fa fa-star fa-stack-2x"></i>
                              </span>{' '}
                            </div>
                            <p className="price product-price">$122.00</p>
                            <button className="bg-green add-to-cart">
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-layout  product-grid  col-lg-4 col-md-4 col-sm-6 col-xs-12">
                      <div className="item">
                        <div className="product-thumb">
                          <div className="sale-tag stock">
                            <div className="btn bg-green">In-Stock</div>
                          </div>
                          <div className="image product-imageblock">
                            {' '}
                            <a href="product.html">
                              <img
                                src="image/product/toy-3.png"
                                alt="iPod classNameic"
                                title="iPod classNameic"
                                className="img-responsive"
                              />
                            </a>
                            <ul className="button-group">
                              <li>
                                <button
                                  type="button"
                                  className="addtocart-btn bg-green"
                                  title="Add to Cart"
                                >
                                  {' '}
                                  <i className="fa fa-shopping-cart"></i>{' '}
                                </button>
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="wishlist bg-purple"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Add to Wish List"
                                >
                                  <i className="fa fa-heart-o"></i>
                                </button>
                              </li>
                              <li>
                                <button
                                  type="button"
                                  className="quick-view bg-blue"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Quick View"
                                >
                                  <i className="fa fa-eye"></i>
                                </button>
                              </li>
                            </ul>
                          </div>
                          <div className="caption product-detail">
                            <h4 className="product-name">
                              <a href="#" title="Casual Shirt With Ruffle Hem">
                                High Speed Magic Toy
                              </a>
                            </h4>
                            <div className="rating">
                              {' '}
                              <span className="fa fa-stack">
                                <i className="fa fa-star-o fa-stack-2x"></i>
                                <i className="fa fa-star fa-stack-2x"></i>
                              </span>{' '}
                              <span className="fa fa-stack">
                                <i className="fa fa-star-o fa-stack-2x"></i>
                                <i className="fa fa-star fa-stack-2x"></i>
                              </span>{' '}
                              <span className="fa fa-stack">
                                <i className="fa fa-star-o fa-stack-2x"></i>
                                <i className="fa fa-star fa-stack-2x"></i>
                              </span>{' '}
                              <span className="fa fa-stack">
                                <i className="fa fa-star-o fa-stack-2x"></i>
                                <i className="fa fa-star fa-stack-2x"></i>
                              </span>{' '}
                              <span className="fa fa-stack">
                                <i className="fa fa-star-o fa-stack-2x"></i>
                                <i className="fa fa-star fa-stack-2x"></i>
                              </span>{' '}
                            </div>
                            <p className="price product-price">$122.00</p>
                            <button className="bg-green add-to-cart">
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane text-style" id="tab4">
              <div className="row billing-address ">
                <div className="col-md-6">
                  <div className="info-content content-box tab-inner">
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
                <div className="col-md-6"></div>
              </div>
              <div className="row address-book content-box">
                <h2>Edit Address Book :-</h2>
                <div className="col-md-4 col-xs-6">
                  <div className="manage address bg-red">
                    <div className="news-edit text-center">
                      <a href="#">
                        <img src="image/dashboard/edit-red.svg" />
                        <span className="text-white">Manage Address</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-xs-6">
                  <div className="add address bg-green">
                    <div className="news-edit text-center">
                      <a href="#">
                        <img src="image/dashboard/add-icon.svg" />
                        <span className="text-white">Add New Address</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-xs-6"></div>
              </div>
            </div>
            <div className="tab-pane text-style" id="tab5">
              <div className="row recent-orders">
                <div className="col-md-8">
                  <div className="content-box tab-inner">
                    <h2>Account Information :-</h2>
                    <div className="input-group">
                      <input
                        type="text"
                        name=""
                        className="form-control"
                        placeholder="First Name"
                      />
                      <div className="input-icon">
                        <img src="image/dashboard/Icon%20feather-user.svg" />
                      </div>
                    </div>
                    <br />
                    <div className="input-group">
                      <input
                        type="text"
                        name=""
                        className="form-control"
                        placeholder="Last Name"
                      />
                      <div className="input-icon">
                        <img src="image/dashboard/Icon%20feather-user.svg" />
                      </div>
                    </div>
                    <br />
                    <h3>Change Email And Password :-</h3>
                    <div className="input-group">
                      <input
                        type="email"
                        name=""
                        className="form-control"
                        placeholder="Email Address"
                      />
                      <div className="input-icon">
                        <img src="image/dashboard/Icon-material-email.svg" />
                      </div>
                    </div>
                    <br />
                    <div className="input-group">
                      <input
                        type="password"
                        name=""
                        className="form-control"
                        placeholder="Password"
                      />
                      <div className="input-icon">
                        <img src="image/dashboard/Icon-awesome-eye.svg" />
                      </div>
                    </div>
                    <br />
                    <div className="input-group">
                      <input
                        type="password"
                        name=""
                        className="form-control"
                        placeholder="New Password"
                      />
                      <div className="input-icon">
                        <img src="image/dashboard/Icon-awesome-eye.svg" />
                      </div>
                    </div>
                    <br />
                    <div className="input-group">
                      <input
                        type="password"
                        name=""
                        className="form-control"
                        placeholder="Confirm Password"
                      />
                      <div className="input-icon">
                        <img src="image/dashboard/Icon-awesome-eye.svg" />
                      </div>
                    </div>
                    <br />
                    <div className="input-group">
                      <button className="bg-green text-white submit update">
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane text-style" id="tab6">
              <div className="row recent-orders">
                <div className="col-md-12">
                  <div className="content-box tab-inner">
                    <h2>Referral :-</h2>
                    <div className="widget stacked widget-table action-table">
                      <div className="widget-content">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>OrderID</th>
                              <th>Date</th>
                              <th>Status</th>
                              <th className="td-actions">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>50</td>
                              <td>000089</td>
                              <td>09/02/19</td>
                              <td className="text-green">Completed</td>
                              <td className="td-actions">
                                <button className="bg-red text-white">
                                  View
                                </button>
                                <button className="bg-green text-white">
                                  Track
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>50</td>
                              <td>000089</td>
                              <td>09/02/19</td>
                              <td className="text-green">Completed</td>
                              <td className="td-actions">
                                <button className="bg-red text-white">
                                  View
                                </button>
                                <button className="bg-green text-white">
                                  Track
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>50</td>
                              <td>000089</td>
                              <td>09/02/19</td>
                              <td className="text-red">Cancel</td>
                              <td className="td-actions">
                                <button className="bg-red text-white">
                                  View
                                </button>
                                <button className="bg-green text-white">
                                  Track
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>50</td>
                              <td>000089</td>
                              <td>09/02/19</td>
                              <td className="text-green">Pending</td>
                              <td className="td-actions">
                                <button className="bg-red text-white">
                                  View
                                </button>
                                <button className="bg-green text-white">
                                  Track
                                </button>
                              </td>
                            </tr>
                            <tr>
                              <td>50</td>
                              <td>000089</td>
                              <td>09/02/19</td>
                              <td className="text-green">Completed</td>
                              <td className="td-actions">
                                <button className="bg-red text-white">
                                  View
                                </button>
                                <button className="bg-green text-white">
                                  Track
                                </button>
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
  )
}
