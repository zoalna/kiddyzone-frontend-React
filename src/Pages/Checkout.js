import React, { Component } from 'react'

import '../App.css'
import PartnerDiscount from '../Components/Home/PartnerDiscount'

export default function About() {
  return (
    <>
      <div class="container">
        <ol class="breadcrumb">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Page</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li class="active">
            <a href="#">Checkout</a>
          </li>
        </ol>
      </div>

      <section id="checkout-sec" class="cart-checkout">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-8">
              <form id="contact-form" method="post" action="" role="form">
                <h2>BILLING DETAILS</h2>
                <div class="messages"></div>
                <div class="controls">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="form_name">
                          First Name <span class="text-red">*</span>
                        </label>
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          class="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label for="form_lastname">
                          Last Name <span class="text-red">*</span>
                        </label>
                        <input
                          id="form_lastname"
                          type="text"
                          name="surname"
                          class="form-control"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="form_email">
                          Email Address <span class="text-red">*</span>
                        </label>
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          class="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="form_gps-location">
                          GPS Location <span class="text-red">*</span>
                        </label>
                        <input
                          id="form_gps-location"
                          type="text"
                          placeholder="Location"
                          name="gps-location"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="gps-location">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.3012030251!2d54.9475610883428!3d25.076381466775658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1642426034582!5m2!1sen!2s"></iframe>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="form_postcode_zip">
                          Postcode / Zip <span class="text-red">*</span>
                        </label>
                        <input
                          id="form_postcode_zip"
                          type="text"
                          name="postcode_zip"
                          placeholder="Postcode / Zip"
                          class="form-control"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="form_town_city">
                          Town / City <span class="text-red">*</span>
                        </label>
                        <input
                          id="form_town_city"
                          type="text"
                          name="town_city"
                          placeholder="Town / City"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 select-mobile">
                      <div class="form-group">
                        <label for="form_mobile">
                          Mobile Number <span class="text-red">*</span>
                        </label>
                        <select>
                          <option value="0">
                            <img src="image/flag.png" /> +971
                          </option>
                          <option value="0">
                            <img src="image/flag.png" /> +972
                          </option>
                          <option value="0">
                            <img src="image/flag.png" /> +973
                          </option>
                          <option value="0">
                            <img src="image/flag.png" /> +974
                          </option>
                        </select>
                        <input
                          id="form_mobile"
                          type="tel"
                          placeholder="Mobile Number"
                          name="mobile"
                          class="form-control"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div class="col-md-4 subtotal">
              <div class="order-edit">
                <h3>Review your order</h3>
                <a href="#">Edit Cart</a>
              </div>
              <table
                id="checkout-edit-cart"
                class="table table-hover table-right"
              >
                <tr>
                  <td>
                    <div class="media">
                      <a class="thumbnail pull-left" href="#">
                        {' '}
                        <img
                          class="media-object"
                          src="image/cart/product-image.png"
                        />{' '}
                      </a>
                      <div class="media-body">
                        <h4 class="media-heading">High Speed Magic Toy</h4>
                        <h3 class="media-qty">Qty : 1</h3>
                        <div class="amount-discount">
                          <h3>AED 4.50</h3>
                          <h3>
                            <b>Discount:</b> AED 0.00
                          </h3>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="media">
                      <a class="thumbnail pull-left" href="#">
                        {' '}
                        <img
                          class="media-object"
                          src="image/cart/product-image.png"
                        />{' '}
                      </a>
                      <div class="media-body">
                        <h4 class="media-heading">High Speed Magic Toy</h4>
                        <h3 class="media-qty">Qty : 1</h3>
                        <div class="amount-discount">
                          <h3>AED 4.50</h3>
                          <h3>
                            <b>Discount:</b> AED 0.00
                          </h3>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
              <hr />
              <table class="table table-hover table-right">
                <tr>
                  <td>
                    <h5>Estimate VAT%</h5>
                  </td>
                  <td class="text-right">
                    <h5>
                      <strong>AED 0.00</strong>
                    </h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Items Discount (you saved)</h5>
                  </td>
                  <td class="text-right">
                    <h5>
                      <strong>AED 0.00</strong>
                    </h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Shipping</h5>
                  </td>
                  <td class="text-right">
                    <h5>
                      <strong>AED 0.00</strong>
                    </h5>
                  </td>
                </tr>
                <tr class="total-amount">
                  <td>
                    <h5>Total</h5>
                  </td>
                  <td class="text-right">
                    <h5>AED 400</h5>
                  </td>
                </tr>
              </table>

              {/* <hr>
                <div class="payment-cards"><h3>Payment Method:-</h3><img src="image/cart/payment-method.png"/></div>
                <div class="checkbox-right-side">
                    <form>
                        <div class="form-group">
                        <input type="checkbox" id="cash-on-delivery" />
                        <label for="cash-on-delivery">Cash on delivery</label>
                        </div>
                        <div class="form-group">
                        <input type="checkbox" id="credit-card" />
                        <label for="credit-card">Pay by Credit/Debit Card</label>
                        </div>
                        <div class="form-group">
                        <input type="checkbox" id="loyalty-points" />
                        <label for="loyalty-points">Pay by loyalty Points: 201 points</label>
                        </div>
                    </form>
                </div>
                <div class="coupon">
                    <input type="text" placeholder="Enter a coupon" />
                    <button class="bg-green" type="button">Apply</button>
                </div>
                </hr> */}
            </div>
            <div class="col-sm-12 cart-btn">
              <button type="button" class="btn bg-green place-order text-white">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="create-account" class="checkout-account bg-yellow">
        <div class="container">
          <div class="row d-flex">
            <div class="col-md-6 left-col">
              <div class="img-box">
                <img src="image/checkout-gift-box.png" />
              </div>
            </div>
            <div class="col-md-6 right-col">
              <div class="text-center content-box">
                <h2>Create Account</h2>
                <p>Enjoy %10 by your first order</p>
                <a href="#" class="bg-green btn">
                  Sign Up
                </a>
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
                <img src="image/cart/truck.jpg" />
                <span>
                  <h2>Easy to buy & return</h2>
                  <p>single click to buy & return</p>
                </span>
              </div>
            </div>
            <div class="col-md-3">
              <div class="service two">
                <img src="image/cart/payment-card.jpg" />
                <span>
                  <h2>Secure Payments</h2>
                  <p>100% payment security</p>
                </span>
              </div>
            </div>
            <div class="col-md-3">
              <div class="service three">
                <img src="image/cart/support.jpg" />
                <span>
                  <h2>24x7 Support Available</h2>
                  <p>support 24 hours a day</p>
                </span>
              </div>
            </div>
            <div class="col-md-3">
              <div class="service four">
                <img src="image/cart/mobile-app.jpg" />
                <span>
                  <h2>Shop with our App</h2>
                  <p>Download app & get offers</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
