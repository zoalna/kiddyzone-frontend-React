import React, { Component, useRef } from 'react'
import './cart.css'
import '../../App.css'
import NavBar from './NavBar'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {

  const switcherTab = useRef(null)
  const imageTab = useRef(null)

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      document.querySelector('.header__effect').classList.add('active')
      document.querySelector('img.img-responsive.logo').classList.add('active')
    } else {
      document.querySelector('.header__effect').classList.remove('active')
      document
        .querySelector('img.img-responsive.logo')
        .classList.remove('active')
    }
  })
   
  const handleSubmit = () =>{
    let cart = document.querySelector("#shopping-cart");
    let button = document.querySelector(".cart__box");
      if(cart.click){
        button.style.display = "block";
      }
      else{
        button.style.display = "none";
      }
  }
 
  const removeSubmit = () =>{
    let button = document.querySelector(".cart__box");
    let cross = document.querySelector(".cross__option")
      if(cross.click){
        button.style.display = "none";
      }
      else{
        button.style.display = "block";
      }
  }

  return (
    <>
      {/* <div className="preloader loader" style={{ display: "block" }}>
        <img src="image/loader.gif" alt="#" />
      </div> */}
      <div className="announcements">
        <div className="animation">
          <div className="main-upper-header">
            <img
              src="image/truck-icon.svg"
              style={{ fill: ' #e20025', height: '23px' }}
            />
          </div>
          <span>Free Shipping 99 QR</span>
        </div>
      </div>
      <header className="header__effect" useRef={switcherTab}>
        <div className="container-fluid">
          <div className="container-fluid" style={{ paddingTop: 20 }}>
            <div className="row">
              <div className="col-sm-12">
                <div className="top-right pull-right" style={{}}>
                  <div className="currency" style={{}}>
                    <form action="#" method="post" id="currency">
                      <div className="btn-group">
                        <button
                          className="btn btn-link dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          <img
                            src="image/header/united-arab-emirates.svg"
                            style={{ margin: '0px 10px' }}
                          />{' '}
                          <strong style={{ margin: '0px 5px' }}>USD</strong>{' '}
                          <img
                            className="down-arrow"
                            src="image/header/down-arrow.svg"
                            style={{
                              margin: '0px 10px',
                              marginTop: '-5px'
                            }}
                          />{' '}
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="#">Euro</a>
                          </li>
                          <li>
                            <a href="#">Pound</a>
                          </li>
                          <li>
                            <a href="#">USD</a>
                          </li>
                        </ul>
                      </div>
                    </form>
                  </div>
                  <div className="language">
                    <form action="#" method="post" id="language">
                      <div className="btn-group">
                        <button
                          className="btn btn-link dropdown-toggle"
                          data-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {' '}
                          <img
                            className="lang-flag"
                            src="image/header/640px-Flag_of_the_United_Kingdom.svg.png"
                          />{' '}
                          English{' '}
                          <img
                            className="down-arrow"
                            src="image/header/down-arrow.svg"
                          />
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a href="#">Arabic</a>
                          </li>
                          <li>
                            <a href="#"> English</a>
                          </li>
                        </ul>
                      </div>
                    </form>
                  </div>
                  <div id="top-links" className="nav pull-right">
                    <ul className="list-inline">
                      <li className="account for-desktop">
                        <img src="image/header/user%20(1).svg" />
                        <Link to="/Login">
                          <span style={{ fontSize: '22px' }}>Login</span>
                        </Link>

                        <span className="account-ver-line">|</span>

                        <Link to="/SignUp">
                          <span style={{ fontSize: '22px' }}>Register</span>
                        </Link>
                      </li>
                      <li>
                        <a href="#" id="shopping-cart" title="Wish List (0)" onClick={handleSubmit} useRef={switcherTab}>
                          <img src="image/header/shopping-cart%20(1).svg" />
                        </a>
                      </li>
                      {/* <li>
                      <a href="#" id="notification" title="Wish List (0)">
                        <img src="image/header/bell.svg" />
                      </a>
                    </li> */}
                      <li>
                        <a href="#" id="wishlist-total" title="Wish List (0)">
                          <img src="image/header/like.svg" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="header-inner"
            style={{ paddingTop: 20, paddingBottom: 20 }}
          >
            <div className="container">
              <div id="logo">
                <a href="index.html">
                  <img
                    src="image/header/logo.svg"
                    title="E-Commerce"
                    alt="E-Commerce"
                    className="img-responsive logo"
                    useRef={imageTab}
                  />
                </a>
              </div>
              <div className="col-sm-3 col-xs-12 header-left">
                <div className="head-social-media for-mobile">
                  <a href="#">
                    <img src="image/header/facebook.svg" />
                  </a>
                  <a href="#">
                    <img src="image/header/instagram.svg" />
                  </a>
                  <a href="#">
                    <img src="image/header/linkedin.svg" />
                  </a>
                  <a href="#">
                    <img src="image/header/twitter.svg" />
                  </a>
                </div>
              </div>
              <div className="col-sm-9 col-xs-9 header-right">
                <div className="top-left pull-left">
                  <button className="head-gift-btn">
                    <img src="image/header/gift.svg" /> Gift Finder{' '}
                  </button>
                </div>
                <div id="search" className="input-group">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search products here"
                    className="form-control input-lg"
                    style={{ height: '123%' }}
                  />
                  <span className="input-group-btn">
                    <button
                      type="button"
                      className="btn btn-default btn-lg bg-yellow"
                    >
                      <span>
                        <i className="fa fa-search"></i>
                      </span>
                    </button>
                  </span>
                </div>

                <div className="helpful-text-links help-store-loc for-desktop">
                  <ul className="list-inline">
                    <li>
                      <Link to="/StoreLocator" className="parent link">
                        <img src="image/header/location-pin.svg" />
                        <span style={{ fontSize: '20px' }}>Store Locator</span>
                      </Link>
                    </li>
                    <li>
                      <a href="" style={{ fontSize: '20px' }}>
                        <img src="image/header/help.svg" />
                        Help
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NavBar />
      </header>

      {/* sideCart option */}

      <>
        <div className="cart__box" useRef={switcherTab}>
          <div className="header__box">
            <div className="text__sidecart">
              <h1>Shopping Cart (2)</h1>
            </div>
            <div className="cross__option" useRef={switcherTab} onClick={removeSubmit}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29.383"
                height="29.383"
                viewBox="0 0 29.383 29.383"
              >
                <g
                  id="Group_4317"
                  data-name="Group 4317"
                  transform="translate(-16305.379 367.621)"
                >
                  <line
                    id="Line_43"
                    data-name="Line 43"
                    x2="25.14"
                    y2="25.14"
                    transform="translate(16307.5 -365.5)"
                    fill="none"
                    stroke="#707070"
                    stroke-linecap="round"
                    stroke-width="3"
                  ></line>
                  <line
                    id="Line_44"
                    data-name="Line 44"
                    x1="25.14"
                    y2="25.14"
                    transform="translate(16307.5 -365.5)"
                    fill="none"
                    stroke="#707070"
                    stroke-linecap="round"
                    stroke-width="3"
                  ></line>
                </g>
              </svg>
            </div>
          </div>

          {/*side Cart option */}
          <div className="cart__items">
            <div className="singleProduct">

              <div className="cartItem__box">
                <div className="product__image__cart">
                  <img
                    src="https://www.toysrus.ca/dw/image/v2/BDFX_PRD/on/demandware.static/-/Sites-toys-master-catalog/default/dw864cd86b/images/746908DF_1.jpg?sw=100&sh=100&sm=fit"
                    alt=""
                  />
                </div>
                <div className="name__quantity__box">
                      <span>Hight Speed Magic Toy</span>
                      <span className='product__id'>Sku: 1254545</span>
                      <div className="quanity__box__cart">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                      </div>
                </div>
                <div className="product__price__cart">
                  <span>AED 123</span>
                  <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29.383"
                height="29.383"
                viewBox="0 0 29.383 29.383"
              >
                <g
                  id="Group_4317"
                  data-name="Group 4317"
                  transform="translate(-16305.379 367.621)"
                >
                  <line
                    id="Line_43"
                    data-name="Line 43"
                    x2="25.14"
                    y2="25.14"
                    transform="translate(16307.5 -365.5)"
                    fill="none"
                    stroke="#707070"
                    stroke-linecap="round"
                    stroke-width="3"
                  ></line>
                  <line
                    id="Line_44"
                    data-name="Line 44"
                    x1="25.14"
                    y2="25.14"
                    transform="translate(16307.5 -365.5)"
                    fill="none"
                    stroke="#707070"
                    stroke-linecap="round"
                    stroke-width="3"
                  ></line>
                </g>
              </svg>
                </div>
              </div>

              <div className="cartItem__box">
                <div className="product__image__cart">
                  <img
                    src="https://www.toysrus.ca/dw/image/v2/BDFX_PRD/on/demandware.static/-/Sites-toys-master-catalog/default/dw864cd86b/images/746908DF_1.jpg?sw=100&sh=100&sm=fit"
                    alt=""
                  />
                </div>
                <div className="name__quantity__box">
                      <span>Hight Speed Magic Toy</span>
                      <span className='product__id'>Sku: 1254545</span>
                      <div className="quanity__box__cart">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                      </div>
                </div>
                <div className="product__price__cart">
                  <span>AED 123</span>
                  <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29.383"
                height="29.383"
                viewBox="0 0 29.383 29.383"
              >
                <g
                  id="Group_4317"
                  data-name="Group 4317"
                  transform="translate(-16305.379 367.621)"
                >
                  <line
                    id="Line_43"
                    data-name="Line 43"
                    x2="25.14"
                    y2="25.14"
                    transform="translate(16307.5 -365.5)"
                    fill="none"
                    stroke="#707070"
                    stroke-linecap="round"
                    stroke-width="3"
                  ></line>
                  <line
                    id="Line_44"
                    data-name="Line 44"
                    x1="25.14"
                    y2="25.14"
                    transform="translate(16307.5 -365.5)"
                    fill="none"
                    stroke="#707070"
                    stroke-linecap="round"
                    stroke-width="3"
                  ></line>
                </g>
              </svg>
                </div>
              </div>

              </div>

              {/* shopping summary */}
                 <div className="product__summary">
                     <h1>Summary</h1>
                     <div className="price__total__box">
                       <div className="first__varse__cart">
                        <span>Subtotal inc. tax</span>
                        <span>$141.45</span>
                        </div>
                        <hr className='style' />
                        <div className="first__varse__cart">
                        <span>Shipping Dpd Curier</span>
                        <span>$10.45</span>
                        </div>
                        <hr className='style' />
                        <div className="first__varse__cart">
                        <span>Payment (cash on delivery)</span>
                        </div>
                        <hr className='style' />
                        <div className="first__varse__cart">
                        <span className='strong'>Total inc. tax</span>
                        <span className='strong'>$160.45</span>
                        </div>
                     </div>
                     <div className="checkout__box">
              <button>Continue Shopping</button>
              <button>Go to Checkout</button>
            </div>
                 </div>             

          </div>


        </div>
      </>
    </>
  )
}
