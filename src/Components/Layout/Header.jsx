<<<<<<< HEAD
import React, { Component, useRef } from 'react'
import './cart.css'
import '../../App.css'
import NavBar from './NavBar'
import { Link, useNavigate } from 'react-router-dom'
=======
import React, { Component, useRef, useState,useEffect } from "react";
>>>>>>> 543b1b960860ed534a5f2cd49a396b05145c9a3c

export default function Header() {

<<<<<<< HEAD
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
=======
  const switcherTab = useRef(null);
  const imageTab = useRef(null);
  const [user, setuser] = useState(localStorage.getItem("user"))
  // const [username, setusername] = useState("")

   useEffect(() => {
        let usr =localStorage.getItem("user")
        console.log(usr)
        let username =  JSON.parse(usr)
        // setusername(username.user.username)
        setuser(usr)
  }, []);


const logout = () => {

  localStorage.removeItem("user");
  setuser(null)
}


  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      document.querySelector(".header__effect").classList.add("active");
      document.querySelector("img.img-responsive.logo").classList.add("active");
    }
    else {
      document.querySelector(".header__effect").classList.remove("active");
      document.querySelector("img.img-responsive.logo").classList.remove("active");
>>>>>>> 543b1b960860ed534a5f2cd49a396b05145c9a3c
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
<<<<<<< HEAD
=======
            <path
              id="Path_720"
              data-name="Path 720"
              d="M68.425,2007.174a31.315,31.315,0,0,0-5.809-.223,18.142,18.142,0,0,0-2.5.212,3.108,3.108,0,0,1-3-1.165,8.094,8.094,0,0,1-2.062-4.4,4.174,4.174,0,0,1,2.125-4.727,23.157,23.157,0,0,0,5.612-4.845,22.326,22.326,0,0,0,1.341,8.117A20.64,20.64,0,0,0,68.425,2007.174Z"
              transform="translate(-33.773 -88.176)"
              fill="#e20025"
            />
            <path
              id="Path_721"
              data-name="Path 721"
              d="M118.136,1965.391a13.286,13.286,0,0,1-1.231,5.915c-1.7,3.335-4.853,4.533-8.283,3.058a14.274,14.274,0,0,1-6.892-6.923,18.881,18.881,0,0,1-2.11-13.167c.007-.032.009-.064.017-.1,1.434-5.666,6.311-7.495,11.05-4.07,3.82,2.76,5.829,6.7,6.943,11.173A20.739,20.739,0,0,1,118.136,1965.391Zm-1.519.1a19.726,19.726,0,0,0-4.261-11.719,11.057,11.057,0,0,0-3.671-3.094c-2.977-1.505-5.749-.508-7.1,2.547a9.85,9.85,0,0,0-.809,3.561,19.119,19.119,0,0,0,3.53,11.922,11.44,11.44,0,0,0,4.565,4.079,4.757,4.757,0,0,0,6.775-2.427A12.073,12.073,0,0,0,116.617,1965.491Z"
              transform="translate(-69.436 -52.985)"
              fill="#e20025"
            />
            <path
              id="Path_722"
              data-name="Path 722"
              d="M26.414,2023.282c-1.528,2.944.272,8.128,3.419,9.5-2.212.513-4.259,1.157-6.382,1.467a2.056,2.056,0,0,1-2.136-1.008,10.119,10.119,0,0,1-1.675-4.975,2.306,2.306,0,0,1,1.415-2.233C22.735,2025.1,24.476,2024.268,26.414,2023.282Z"
              transform="translate(-5.282 -113.372)"
              fill="#e20025"
            />
            <path
              id="Path_723"
              data-name="Path 723"
              d="M42.606,2077.155c1.714-.423,3.37-.817,5.016-1.248a.8.8,0,0,1,1.07.441c.968,1.669,1.993,3.305,3.008,4.946a3.018,3.018,0,0,0,1.164,1.244c.578.3.585.875.338,1.43a2.462,2.462,0,0,1-.368.56c-1.535,1.836-1.735,1.829-3.124-.1-.979-1.357-1.981-2.7-2.917-4.086a3.164,3.164,0,0,0-1.928-1.329A2.848,2.848,0,0,1,42.606,2077.155Z"
              transform="translate(-23.803 -155.755)"
              fill="#e20025"
            />
            <path
              id="Path_724"
              data-name="Path 724"
              d="M16.04,2054.218a3.617,3.617,0,0,1-2.225-5.718A10.171,10.171,0,0,0,16.04,2054.218Z"
              transform="translate(0 -133.704)"
              fill="#e20025"
            />
            <path
              id="Path_725"
              data-name="Path 725"
              d="M126.228,1978.195a8.834,8.834,0,0,1-.943,4.4,4.042,4.042,0,0,1-5.489,1.964,10.323,10.323,0,0,1-4.261-3.691c-.315-.427-.131-.6.252-.782q2-.974,3.98-1.981a2.984,2.984,0,0,0,1.706-4.067c-.617-1.719-1.917-2.382-3.857-1.951-1.415.314-2.83.632-4.238.976-.55.134-.835.041-.874-.594a10.193,10.193,0,0,1,.9-5.372,4.059,4.059,0,0,1,5.542-2.028,9.894,9.894,0,0,1,4.356,3.862A16.763,16.763,0,0,1,126.228,1978.195Z"
              transform="translate(-80.129 -66.111)"
              fill="#e20025"
            />
            <path
              id="Path_726"
              data-name="Path 726"
              d="M119.766,2004.653a2.556,2.556,0,0,1,2.679,1.762,2.472,2.472,0,0,1-.757,3.044,43.313,43.313,0,0,1-4.963,2.562c-.34.178-.458-.091-.593-.305a13.623,13.623,0,0,1-1.885-5.226c-.048-.3-.068-.562.343-.654C116.376,2005.436,118.132,2004.9,119.766,2004.653Zm-.563,2.013c-.007,1.206.9,2.358,1.834,2.336.75-.018,1.217-.612,1.217-1.547,0-1.231-.885-2.365-1.823-2.336C119.685,2005.143,119.208,2005.744,119.2,2006.666Z"
              transform="translate(-81.541 -98.353)"
              fill="#e20025"
            />
          </g>
        </svg>{" "} */}
        <div className="animation">
          <div className="main-upper-header">
            <img src="image/truck-icon.svg" style={{ "fill": " #e20025", height: "23px" }} />
>>>>>>> 543b1b960860ed534a5f2cd49a396b05145c9a3c
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
<<<<<<< HEAD
                          <img
                            src="image/header/united-arab-emirates.svg"
                            style={{ margin: '0px 10px' }}
                          />{' '}
                          <strong style={{ margin: '0px 5px' }}>USD</strong>{' '}
=======
                          <img src="image/header/united-arab-emirates.svg" style={{ margin: "0px 10px" }} />{" "}
                          <strong style={{ margin: "0px 5px" }}>USD</strong>{" "}
>>>>>>> 543b1b960860ed534a5f2cd49a396b05145c9a3c
                          <img
                            className="down-arrow"
                            src="image/header/down-arrow.svg"
                            style={{
<<<<<<< HEAD
                              margin: '0px 10px',
                              marginTop: '-5px'
=======
                              margin: "0px 10px",
                              marginTop: "-5px"
>>>>>>> 543b1b960860ed534a5f2cd49a396b05145c9a3c
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
<<<<<<< HEAD
                        <Link to="/Login">
                          <span style={{ fontSize: '22px' }}>Login</span>
                        </Link>
=======
                        {user ? (
                          <>
                            <Link to="/Login" onClick={() => logout()}>
                              <span style={{ fontSize: "22px" }}> Logout</span>
                            </Link>
                          </>
                        ) : (
                          <>
                            <Link to="/Login">
                              <span style={{ fontSize: "22px" }}>Login</span>
                            </Link>
>>>>>>> 543b1b960860ed534a5f2cd49a396b05145c9a3c

                            <span className="account-ver-line">|</span>

                            <Link to="/SignUp">
                              <span style={{ fontSize: "22px" }}>Register</span>
                            </Link>
                          </>
                        )}

<<<<<<< HEAD
                        <Link to="/SignUp">
                          <span style={{ fontSize: '22px' }}>Register</span>
                        </Link>
=======
>>>>>>> 543b1b960860ed534a5f2cd49a396b05145c9a3c
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
<<<<<<< HEAD
                    <img src="image/header/gift.svg" /> Gift Finder{' '}
=======
                    <img src="image/header/gift.svg" /> Gift Finder{" "}
>>>>>>> 543b1b960860ed534a5f2cd49a396b05145c9a3c
                  </button>
                </div>
                <div id="search" className="input-group">
                  <input
                    type="text"
                    name="search"
                    placeholder="Search products here"
                    className="form-control input-lg"
<<<<<<< HEAD
                    style={{ height: '123%' }}
=======
                    style={{ height: "123%" }}
>>>>>>> 543b1b960860ed534a5f2cd49a396b05145c9a3c
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
<<<<<<< HEAD
                        <span style={{ fontSize: '20px' }}>Store Locator</span>
                      </Link>
                    </li>
                    <li>
                      <a href="" style={{ fontSize: '20px' }}>
=======
                        <span style={{ fontSize: "20px" }}>Store Locator</span>
                      </Link>

                    </li>
                    <li>
                      <a href="" style={{ fontSize: "20px" }}>
>>>>>>> 543b1b960860ed534a5f2cd49a396b05145c9a3c
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
