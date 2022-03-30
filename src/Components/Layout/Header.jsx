import React, {
  Component,
  useRef,
  useState,
  useEffect,
  useCallback
} from 'react'
import '../../App.css'
import './cart.css'
import NavBar from './NavBar'
import { Link, useNavigate } from 'react-router-dom'
import Cart from '../../Pages/Cart'
import { useShared } from '../../Helpers/GlobalStates'

export default function Header() {
  const { userData, setuserData, changeuserData, cartCounter, closeSide } =
    useShared()

  const switcherTab = useRef(null)
  const imageTab = useRef(null)
  const [user, setuser] = useState(localStorage.getItem('user'))
  const [username, setusername] = useState(null)
  const [cartcount, setcartcount] = useState(0)
  const [sidemenu, setsidemenu] = useState(false)
  let tempcart = localStorage.getItem('cart')
  useEffect(() => {
    let usr = localStorage.getItem('user')
    let cart = localStorage.getItem('cart')
    if (cart != null) {
      let count = JSON.parse(cart)
      setcartcount(count.length)
    } else {
      setcartcount(0)
    }
    console.log(usr)
    let username = JSON.parse(usr)
    setusername(userData ? userData.user.username : null)
    setuser(userData)
  }, [tempcart, userData, cartCounter])

  useEffect(() => {
    // if (closeSide == true)
    //removeSubmit(false)
  }, [closeSide])

  const logout = () => {
    localStorage.removeItem('user')
    changeuserData(null)
    setuser(null)
  }

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

  const handleSubmit = (e) => {
    setsidemenu(e)
    let cart = document.querySelector('#shopping-cart')
    let button = document.querySelector('.cart__box')
    if (cart.click) {
      button.style.display = 'block'
    } else {
      button.style.display = 'none'
    }
  }

  const removeSubmit = (e) => {
    setsidemenu(e)
    let button = document.querySelector('.cart__box')
    let cross = document.querySelector('.cross__option')
    if (cross.click) {
      button.style.display = 'none'
    } else {
      button.style.display = 'block'
    }
  }

  return (
    <>
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
                            className="down-arrow responsive"
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
                        {user ? (
                          <>
                            <Link to="/Login" onClick={() => logout()}>
                              <span style={{ fontSize: '22px' }}>
                                {' '}
                                {username} | Logout
                              </span>
                            </Link>
                          </>
                        ) : (
                          <>
                            <Link to="/Login">
                              <span style={{ fontSize: '22px' }}>Login</span>
                            </Link>

                            <span className="account-ver-line">|</span>

                            <Link to="/SignUp">
                              <span style={{ fontSize: '22px' }}>Register</span>
                            </Link>
                          </>
                        )}
                      </li>
                      <li>
                        {/* <Link to="/Cart">
                          <img src="image/header/shopping-cart%20(1).svg" />
                          {
                            cartcount != 0 &&
                            <span className="cartitm">{cartcount}</span>
                          }

                        </Link> */}
                        {/* <a href="#" id="shopping-cart" title="Wish List (0)" onClick={handleSubmit} useRef={switcherTab}>
                          <img src="image/header/shopping-cart%20(1).svg" />
                        </a> */}
                      </li>
                      <li>
                        <a
                          href="#"
                          id="shopping-cart"
                          title="Wish List (0)"
                          onClick={() => handleSubmit(true)}
                          useRef={switcherTab}
                        >
                          <img
                            src="image/header/shopping-cart%20(1).svg"
                            style={{ height: 25 }}
                          />
                          {cartcount != 0 && (
                            <span className="cartitm">{cartcount}</span>
                          )}
                        </a>
                      </li>

                      <li>
                        <a href="#" id="wishlist-total" title="Wish List (0)">
                          <img
                            src="image/header/like.svg"
                            style={{ height: 25 }}
                          />
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
              <h1>Shopping Cart</h1>
            </div>
            <div
              className="cross__option"
              useRef={switcherTab}
              onClick={() => removeSubmit(false)}
            >
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

          <Cart sidecart={true} refresh={sidemenu} />

          {/* Cart Items */}
          {/* <div className="cart__items">
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

           
    */}
        </div>
      </>
    </>
  )
}
