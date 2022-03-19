import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../Helpers/services'
import ReviewCard from '../Components/Layout/ReviewCard'
import axios from 'axios'
import '../App.css'
import ProductDetailsBottom from '../Pages/ProductDetailsBottom'
import Carousel from 'react-material-ui-carousel'
import product1 from '../image/product/toy-1.png'
import truck from '../image/product/black-truck.png'
import rotate from '../image/product/rotate-box.png'
import secure from '../image/product/secure-payment.png'
import deliveryTruck from '../image/product/delivery-truck.png'
import savingIcon from '../image/product/gift-box.png'
import gurrantyImage from '../image/product/gift-box (1).png'
import callsupportImage from '../image/product/support.png'
import trainImage from '../image/product/train-toy.png'
import ReactImageMagnify from 'react-image-magnify'
import ReactSlick from 'react-slick'

export default function ProductDetails(props) {
  let { slug } = useParams()
  const [item, setitem] = React.useState({})
  const [product, setproduct] = React.useState(null)

  useEffect(() => {
    console.log(slug)
    axios.get(api.getProduct + slug, null).then((response) => {
      // console.log(response);
      setproduct(response.data.data)
      console.log(response.data.data)
    })
  }, [])

  if (product) {
    return (
      <>
        <div className="mainbanner">
          <div className="top-banner">
            <div className="page-title">
              <h1>Product Detail</h1>
            </div>
            <img
              src={api.images + product.media[0].file_name}
              alt="listing-banner"
              className="img-responsive"
            />
          </div>
        </div>
        <div className="container">
          <ol className="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Page</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li className="active">
              <a href="#">Product</a>
            </li>
          </ol>
        </div>

        <section className="content">
          <div className="container">
            <div className="row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                 
                    <div className="tab-pane active" id="pic-1">
                    <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: 'Wristwatch by Versace',
                                    isFluidWidth: true,
                                    src: `${api.images + product.media[0].file_name}`,
                                    // srcSet: src.srcSet,
                                },
                                largeImage: {
                                    src: `${api.images + product.media[0].file_name}`,
                                    width: 1426,
                                    height: 2000
                                },
                                // lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                            }}
                          
                        />
                    </div>
               

                  <div className="tab-pane" id="pic-2">
                    <img src={api.images + product.media[1].file_name} />
                  </div>
                  <div className="tab-pane" id="pic-3">
                    <img src="image/product/product-3.png" />
                  </div>
                  <div className="tab-pane" id="pic-4">
                    <img src="image/product/product-4.png" />
                  </div>
                </div>

                <ul className="preview-thumbnail nav nav-tabs">
                  {product.media.map((i) => (
                    <li className="active" key={i.id}>
                      <a data-target="#pic-1" data-toggle="tab">
                        <img src={api.images + i.file_name} className="description__thumbnail" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="details col-md-6">
                <div className="product__name">
                  <h3 className="product-title">{product.name}</h3>
                  <span className="fa fa-heart-o"></span>
                </div>
                <div className="prod-row">
                  <div className="price__box">
                    <h4 className="discount__price">
                      <span>AED {product.price}</span>
                    </h4>
                    <h4 className="price">
                      <span>AED {product.price}</span>
                    </h4>
                  </div>

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
                    </span>{' '}
                  </div>
                  <div className="reviews-num">
                    <span className="percent-reviews">4.4</span> |{' '}
                    <span className="total-reviews">236 Reviews</span>
                  </div>

                  <div className="status-stock">
                    <span className="title">Status:-</span>{' '}
                    <span>In Stock</span>
                  </div>
                </div>
                <p className="point-text">
                  If you're buying this product you will be getting 5.4 this
                  many points
                </p>
                <span className="share">Share Now</span>
                <div className="social__box">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    className="social facebook"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Facebook</title>
                    <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"></path>
                  </svg>
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    className="social twitter"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Twitter</title>
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path>
                  </svg>
                  <svg
                    role="img"
                    className="social whatsappIcon"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>WhatsApp</title>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="social mailIcon"
                    viewBox="0 0 512 512"
                  >
                    <path d="M467 61H45c-6.927 0-13.412 1.703-19.279 4.51L255 294.789l51.389-49.387.005-.007.005-.004L486.286 65.514C480.418 62.705 473.929 61 467 61zM507.496 86.728L338.213 256.002 507.49 425.279c2.807-5.867 4.51-12.352 4.51-19.279V106c0-6.923-1.699-13.407-4.504-19.272zM4.51 86.721C1.703 92.588 0 99.073 0 106v300c0 6.923 1.701 13.409 4.506 19.274L173.789 256 4.51 86.721z"></path>
                    <path d="M317.002 277.213l-51.396 49.393c-2.93 2.93-6.768 4.395-10.605 4.395s-7.676-1.465-10.605-4.395L195 277.211 25.714 446.486C31.582 449.295 38.071 451 45 451h422c6.927 0 13.412-1.703 19.279-4.51L317.002 277.213z"></path>
                  </svg>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="gift-wrap">
                      <label className="select-title">Gift Wrap</label>
                      <div className="images">
                        <a href="#">
                          <img src="image/gift-wrap-1.png" />
                        </a>
                        <a href="#">
                          <img src="image/gift-wrap-2.png" />
                        </a>
                        <a href="#">
                          <img src="image/gift-wrap-1.png" />
                        </a>
                        <a href="#">
                          <img src="image/gift-wrap-2.png" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="filter__box">
                    <div className="age__box">
                      <div className="age-opt">
                        <label className="select-title">Age</label>
                        <select className="form-control age">
                          <option>Choose an Option</option>
                          <option>0 to 2 years</option>
                          <option>2 to 4 years</option>
                          <option>4 to 6 years</option>
                          <option>6 to 8 years</option>
                        </select>
                      </div>
                    </div>

                    <div className="color__box">
                      <label className="select-title">Color</label>
                      <div className="color-picker">
                        <select className="form-control">
                          <option>Red</option>
                          <option>Green</option>
                          <option>Blue</option>
                          <option>Yellow</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 quantity">
                    <label className="select-title">Quantity</label>
                    <div className="cart__box">
                      <div className="plusIcon">
                        <span>-</span>
                      </div>
                      <div className="inputQuantity">
                        <input type="number" value="1" readOnly />
                      </div>
                      <div className="plusIcon">
                        <span>+</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 color-opt"></div>
                  <div className="col-md-12 cart__button">
                    <button className="add-to-cart">Add to Cart</button>
                    <button className="buy-now">Buy Now</button>
                  </div>

                  <div id="product-accordion">
                    <div className="accordion-header" id="headingOne">
                      <h5>
                        <button
                          className="btn-link"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <span className="fa fa-angle-down rotate-icon"></span>
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapseOne"
                      className="collapse in"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    ></div>

                    <div className="accordion-header" id="headingFour">
                      <hr className="offer" />
                      <div className="gurranty__box">
                        <div className="free__shipping">
                          <h5>
                            <button
                              className="btn-link collapsed"
                              data-toggle="collapse"
                              data-target="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                            >
                              <img src={truck} />
                              <span className="text__style">Free Shipping</span>
                              <span className="fa fa-angle-down rotate-icon"></span>
                            </button>
                          </h5>
                        </div>

                        <div className="free__shipping">
                          <h5>
                            <button
                              className="btn-link collapsed"
                              data-toggle="collapse"
                              data-target="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                            >
                              <img src={rotate} />{' '}
                              <span className="text__style">
                                30 Days Return Policy
                              </span>
                              <span className="fa fa-angle-down rotate-icon"></span>
                            </button>
                          </h5>
                        </div>

                        <div className="free__shipping">
                          <h5>
                            <button
                              className="btn-link collapsed"
                              data-toggle="collapse"
                              data-target="#collapseFour"
                              aria-expanded="false"
                              aria-controls="collapseFour"
                            >
                              <img src={secure} />{' '}
                              <span className="text__style">
                                100% Secured Payment
                              </span>
                              <span className="fa fa-angle-down rotate-icon"></span>
                            </button>
                          </h5>
                        </div>
                      </div>
                      <hr className="offer" />
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      aria-labelledby="headingFour"
                      data-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p className="product-description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="description">
              <span>Description</span>
              <p>{product.description}</p>
            </div>
          </div>
        </section>

        {product.approved_reviews.length > 0 && (
          <section
            className="product-reviews content pt-100 pb-100"
            style={{ background: '#efefef' }}
          >
            <div className="container">
              <h1>All reviews ({product.approved_reviews.length})</h1>
              <hr />
              <div className="reviews row">
                <div className="customer-reviews col-md-6">
                  {product.approved_reviews.map((item, i) => {
                    return <ReviewCard item={item} />
                  })}
                </div>

                <div className="reviews-rating col-md-6">
                  <div className="row">
                    <div className="col-sm-3">
                      <div className="rating-block">
                        <h2 className="bold padding-bottom-7">
                          {product.approved_reviews_avg_rating}
                        </h2>
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
                          </span>{' '}
                        </div>
                        <h4>Average Rating</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <section id="top-products" class="content hot-sellers details__part">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xs-12 col-md-12">
                <div class="heading problem">
                  <h2>Top Products</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="space__rightLeft">
                <Carousel>
                  <>
                    <div className="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
                      <div className="item">
                        <div className="product-thumb">
                          <div className="image product-imageblock">
                            <div className="btn new bg-red">20% OFF</div>
                            <div className="btn percent bg-yellow">
                              New
                            </div>{' '}
                            <a href="product.html">
                              <img
                                src={product1}
                                alt="iPod Classic"
                                title="iPod Classic"
                                className="img-responsive"
                              />
                            </a>
                          </div>
                          <div className="caption product-detail">
                            <h4 className="product-name">
                              <a
                                href="#"
                                title="Casual Shirt With Ruffle Hem"
                                style={{
                                  fontSize: '1.6vmax'
                                }}
                              >
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
                              </span>{' '}
                            </div>
                            <div
                              className="price__box"
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                            >
                              <p
                                className="discount"
                                style={{
                                  fontSize: '1.4vmax',
                                  paddingRight: '10px',
                                  marginBottom: '20px'
                                }}
                              >
                                AED 200
                              </p>
                              <p
                                className="price product-price"
                                style={{ fontSize: '1.8vmax' }}
                              >
                                AED 122.00
                              </p>
                            </div>
                            <div className="btn-shooping-cart">
                              <button
                                type="button"
                                className="quick-view bg-blue"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Quick View"
                              >
                                <i className="fa fa-eye"></i>
                              </button>

                              <button
                                type="button"
                                className="wishlist bg-purple"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wish List"
                              >
                                <i className="fa fa-heart-o"></i>
                              </button>

                              <button
                                type="button"
                                className="addtocart-btn bg-green"
                                title="Add to Cart"
                              >
                                {' '}
                                <i className="fa fa-shopping-cart"></i>{' '}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
                      <div className="item">
                        <div className="product-thumb">
                          <div className="image product-imageblock">
                            <div className="btn new bg-red">20% OFF</div>
                            <div className="btn percent bg-yellow">
                              New
                            </div>{' '}
                            <a href="product.html">
                              <img
                                src={product1}
                                alt="iPod Classic"
                                title="iPod Classic"
                                className="img-responsive"
                              />
                            </a>
                          </div>
                          <div className="caption product-detail">
                            <h4 className="product-name">
                              <a
                                href="#"
                                title="Casual Shirt With Ruffle Hem"
                                style={{
                                  fontSize: '1.6vmax'
                                }}
                              >
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
                              </span>{' '}
                            </div>
                            <div
                              className="price__box"
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                            >
                              <p
                                className="discount"
                                style={{
                                  fontSize: '1.4vmax',
                                  paddingRight: '10px',
                                  marginBottom: '20px'
                                }}
                              >
                                AED 200
                              </p>
                              <p
                                className="price product-price"
                                style={{ fontSize: '1.8vmax' }}
                              >
                                AED 122.00
                              </p>
                            </div>
                            <div className="btn-shooping-cart">
                              <button
                                type="button"
                                className="quick-view bg-blue"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Quick View"
                              >
                                <i className="fa fa-eye"></i>
                              </button>

                              <button
                                type="button"
                                className="wishlist bg-purple"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wish List"
                              >
                                <i className="fa fa-heart-o"></i>
                              </button>

                              <button
                                type="button"
                                className="addtocart-btn bg-green"
                                title="Add to Cart"
                              >
                                {' '}
                                <i className="fa fa-shopping-cart"></i>{' '}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
                      <div className="item">
                        <div className="product-thumb">
                          <div className="image product-imageblock">
                            <div className="btn new bg-red">20% OFF</div>
                            <div className="btn percent bg-yellow">
                              New
                            </div>{' '}
                            <a href="product.html">
                              <img
                                src={product1}
                                alt="iPod Classic"
                                title="iPod Classic"
                                className="img-responsive"
                              />
                            </a>
                          </div>
                          <div className="caption product-detail">
                            <h4 className="product-name">
                              <a
                                href="#"
                                title="Casual Shirt With Ruffle Hem"
                                style={{
                                  fontSize: '1.6vmax'
                                }}
                              >
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
                              </span>{' '}
                            </div>
                            <div
                              className="price__box"
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                            >
                              <p
                                className="discount"
                                style={{
                                  fontSize: '1.4vmax',
                                  paddingRight: '10px',
                                  marginBottom: '20px'
                                }}
                              >
                                AED 200
                              </p>
                              <p
                                className="price product-price"
                                style={{ fontSize: '1.8vmax' }}
                              >
                                AED 122.00
                              </p>
                            </div>
                            <div className="btn-shooping-cart">
                              <button
                                type="button"
                                className="quick-view bg-blue"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Quick View"
                              >
                                <i className="fa fa-eye"></i>
                              </button>

                              <button
                                type="button"
                                className="wishlist bg-purple"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wish List"
                              >
                                <i className="fa fa-heart-o"></i>
                              </button>

                              <button
                                type="button"
                                className="addtocart-btn bg-green"
                                title="Add to Cart"
                              >
                                {' '}
                                <i className="fa fa-shopping-cart"></i>{' '}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
                      <div className="item">
                        <div className="product-thumb">
                          <div className="image product-imageblock">
                            <div className="btn new bg-red">20% OFF</div>
                            <div className="btn percent bg-yellow">
                              New
                            </div>{' '}
                            <a href="product.html">
                              <img
                                src={product1}
                                alt="iPod Classic"
                                title="iPod Classic"
                                className="img-responsive"
                              />
                            </a>
                          </div>
                          <div className="caption product-detail">
                            <h4 className="product-name">
                              <a
                                href="#"
                                title="Casual Shirt With Ruffle Hem"
                                style={{
                                  fontSize: '1.6vmax'
                                }}
                              >
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
                              </span>{' '}
                            </div>
                            <div
                              className="price__box"
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}
                            >
                              <p
                                className="discount"
                                style={{
                                  fontSize: '1.4vmax',
                                  paddingRight: '10px',
                                  marginBottom: '20px'
                                }}
                              >
                                AED 200
                              </p>
                              <p
                                className="price product-price"
                                style={{ fontSize: '1.8vmax' }}
                              >
                                AED 122.00
                              </p>
                            </div>
                            <div className="btn-shooping-cart">
                              <button
                                type="button"
                                className="quick-view bg-blue"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Quick View"
                              >
                                <i className="fa fa-eye"></i>
                              </button>

                              <button
                                type="button"
                                className="wishlist bg-purple"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Add to Wish List"
                              >
                                <i className="fa fa-heart-o"></i>
                              </button>

                              <button
                                type="button"
                                className="addtocart-btn bg-green"
                                title="Add to Cart"
                              >
                                {' '}
                                <i className="fa fa-shopping-cart"></i>{' '}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="viewmore">
                      <a
                        href="#"
                        className="btn"
                        style={{
                          backgroundColor: '#E20025'
                        }}
                      >
                        View All
                      </a>
                    </div>
                  </>
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        <section id="features" class="content our-features ">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-12">
                <div class="heading features">
                  <h2>Our Features</h2>
                </div>
              </div>
            </div>
            <div class="features row">
              <div class="col-md-4">
                <div class="feautes">
                  <div class="icon">
                    <img class="text-center" src={deliveryTruck} />
                  </div>
                  <div class="description">
                    <h1>Worldwide Delivery</h1>
                    <p>On order over $150-7 days</p>
                  </div>
                </div>
                <div class="feautes">
                  <div class="icon">
                    <img class="text-center" src={savingIcon} />
                  </div>
                  <div class="description">
                    <h1>Great Saving</h1>
                    <p>How to save money?</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="icon">
                  <img class="text-center" src={trainImage} />
                </div>
              </div>
              <div class="col-md-4">
                <div class="feautes">
                  <div class="icon">
                    <img class="text-center" src={gurrantyImage} />
                  </div>
                  <div class="description">
                    <h1>Money Back Guarantee</h1>
                    <p>Send within 30 days</p>
                  </div>
                </div>
                <div class="feautes">
                  <div class="icon">
                    <img class="text-center" src={callsupportImage} />
                  </div>
                  <div class="description">
                    <h1>24x7 Support</h1>
                    <p>Call us 24/7 at 000-123-456</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ProductDetailsBottom />
      </>
    )
  } else {
    return <></>
  }
}
