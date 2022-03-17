import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from '../Helpers/services';
import ReviewCard from "../Components/Layout/ReviewCard";
import axios from 'axios';
import "../App.css";

export default function ProductDetails(props) {
  let { slug } = useParams();
  const [item, setitem] = React.useState({});
  const [product, setproduct] = React.useState(null);


  useEffect(() => {


    console.log(slug);
    axios.get(api.getProduct + slug, null)
      .then(response => {
        // console.log(response);
        setproduct(response.data.data);
        console.log(response.data.data)

      }
      );


  }, []);




  if (product) {
    return (
      <>
        <div className="mainbanner">
          <div className="top-banner">
            <div className="page-title">
              <h1>Product Detail { }</h1>
            </div>

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
        <section className="content pb-100">
          <div className="container">
            <div className="row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1">
                    <img src={api.images + product.media[0].file_name} />
                  </div>
                  <div className="tab-pane" id="pic-2">
                    <img src={api.images + product.media[0].file_name} />
                  </div>
                  <div className="tab-pane" id="pic-3">
                    <img src={api.images + product.media[0].file_name} />
                  </div>
                  <div className="tab-pane" id="pic-4">
                    <img src={api.images + product.media[0].file_name} />
                  </div>
                </div>
                <ul className="preview-thumbnail nav nav-tabs">
                  <li className="active">
                    <a data-target="#pic-1" data-toggle="tab">
                      <img src={api.images + product.media[0].file_name} />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-2" data-toggle="tab">
                      <img src={api.images + product.media[0].file_name} />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-3" data-toggle="tab">
                      <img src={api.images + product.media[0].file_name} />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-4" data-toggle="tab">
                      <img src={api.images + product.media[0].file_name} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">{product.name}</h3>
                <span className="fa fa-heart-o"></span>

                <div className="prod-row">
                  <h4 className="price">
                    <span>${product.price}</span>
                  </h4>
                  <div className="rating">
                    {" "}
                    <span className="fa fa-stack">
                      <i className="fa fa-star-o fa-stack-2x"></i>
                      <i className="fa fa-star fa-stack-2x"></i>
                    </span>{" "}
                    <span className="fa fa-stack">
                      <i className="fa fa-star-o fa-stack-2x"></i>
                      <i className="fa fa-star fa-stack-2x"></i>
                    </span>{" "}
                    <span className="fa fa-stack">
                      <i className="fa fa-star-o fa-stack-2x"></i>
                      <i className="fa fa-star fa-stack-2x"></i>
                    </span>{" "}
                    <span className="fa fa-stack">
                      <i className="fa fa-star-o fa-stack-2x"></i>
                      <i className="fa fa-star fa-stack-2x"></i>
                    </span>{" "}
                    <span className="fa fa-stack">
                      <i className="fa fa-star-o fa-stack-2x"></i>
                    </span>{" "}
                  </div>
                  <div className="reviews-num">
                    <span className="percent-reviews">6.4</span> |{" "}
                    <span className="total-reviews">236 Reviews</span>
                  </div>
                  <div className="status-stock">
                    <span className="title">Status:-</span> <span>In Stock</span>
                  </div>
                </div>
                <p className="point-text">
                  If you're buying this product you will be getting 5.4 this many
                  points
                </p>
                <div className="buy-from-whatsapp">
                  <a href="#">
                    <img src="image/buy-whatsapp.svg" /> Buy From Whatsapp
                    {/* <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 23.4 15.8"
                    xml:space="preserve"
                  >
                    <path
                      id="XMLID_3_"
                      className="st0"
                      d="M14.6,1.3c-0.4,0.4-0.4,0.9,0,1.3l4.3,4.3H2.6c-0.5,0-0.9,0.4-0.9,0.9s0.4,0.9,0.9,0.9h16.3
                            L14.6,13c-0.4,0.4-0.3,0.9,0,1.3c0.4,0.4,0.9,0.4,1.3,0l5.8-5.8c0.1-0.1,0.1-0.2,0.2-0.3c0-0.1,0.1-0.2,0.1-0.4
                            c0-0.2-0.1-0.5-0.3-0.6l-5.8-5.8C15.5,0.9,14.9,0.9,14.6,1.3"
                    />
                    <path
                      id="XMLID_2_"
                      className="st1"
                      d="M14.6,1.3c-0.4,0.4-0.4,0.9,0,1.3l4.3,4.3H2.6c-0.5,0-0.9,0.4-0.9,0.9s0.4,0.9,0.9,0.9h16.3
                            L14.6,13c-0.4,0.4-0.3,0.9,0,1.3c0.4,0.4,0.9,0.4,1.3,0l5.8-5.8c0.1-0.1,0.1-0.2,0.2-0.3c0-0.1,0.1-0.2,0.1-0.4
                            c0-0.2-0.1-0.5-0.3-0.6l-5.8-5.8C15.5,0.9,14.9,0.9,14.6,1.3z"
                    />
                  </svg> */}
                  </a>
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
                  <div className="col-md-6">
                    <div className="age-opt">
                      <label className="select-title">Age</label>
                      <select className="form-control">
                        <option>0 to 2 years</option>
                        <option>2 to 4 years</option>
                        <option>4 to 6 years</option>
                        <option>6 to 8 years</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 quantity">
                    <label className="select-title">Quantity</label>
                    <div className="input-group">
                      <span className="input-group-btn">
                        <button
                          type="button"
                          className="quantity-left-minus btn btn-danger btn-number"
                          data-type="minus"
                          data-field=""
                        >
                          <span className="glyphicon glyphicon-minus"></span>
                        </button>
                      </span>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        className="form-control input-number"
                        min="1"
                        max="100"
                        value={product.quantity}
                      />
                      <span className="input-group-btn">
                        <button
                          type="button"
                          className="quantity-right-plus btn btn-success btn-number"
                          data-type="plus"
                          data-field=""
                        >
                          <span className="glyphicon glyphicon-plus"></span>
                        </button>
                      </span>
                    </div>
                  </div>

                  <div className="col-md-6 color-opt">
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
                  <div className="col-md-12">
                    <button className="single-pro add-to-cart">
                      Add to Cart
                    </button>
                    <button className="single-pro add-to-cart buy-now">
                      Buy Now
                    </button>
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

                          <span>Description</span>
                          <span className="fa fa-angle-down rotate-icon"></span>
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapseOne"
                      className="collapse in"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p className="product-description">
                          {product.description}
                        </p>
                      </div>
                    </div>
                    <hr />

                    <div className="accordion-header" id="headingTwo">
                      <h5>
                        <button
                          className="btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <img src="image/buy-now-icon.png" />{" "}
                          <span>Buy Now</span>
                          <span className="fa fa-angle-down rotate-icon"></span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p className="product-description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
                      </div>
                    </div>
                    <hr />

                    <div className="accordion-header" id="headingThree">
                      <h5>
                        <button
                          className="btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <img src="image/video-play.png" />{" "}
                          <span>Video Links</span>
                          <span className="fa fa-angle-down rotate-icon"></span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p className="product-description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
                      </div>
                    </div>
                    <hr />

                    <div className="accordion-header" id="headingFour">
                      <h5>
                        <button
                          className="btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          <img src="image/black-truck.png" />{" "}
                          <span>Free Shipping</span>
                          <span className="fa fa-angle-down rotate-icon"></span>
                        </button>
                      </h5>
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
                    <hr />

                    <div className="accordion-header" id="headingFive">
                      <h5>
                        <button
                          className="btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <img src="image/rotate-box.png" />{" "}
                          <span>30 Days Return Policy</span>
                          <span className="fa fa-angle-down rotate-icon"></span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseFive"
                      className="collapse"
                      aria-labelledby="headingFive"
                      data-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p className="product-description">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="accordion-header" id="headingSix">
                      <h5>
                        <button
                          className="btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseSix"
                          aria-expanded="false"
                          aria-controls="collapseSix"
                        >
                          <img src="image/secure-payment.png" />{" "}
                          <span>100% Secured Payment</span>
                          <span className="fa fa-angle-down rotate-icon"></span>
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseSix"
                      className="collapse"
                      aria-labelledby="headingSix"
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
          </div>
        </section>
        {product.approved_reviews.length > 0 &&
       <section className="product-reviews content pt-100 pb-100" style={{ backgroun: '#efefef' }}>

       <div className="container">
         <h1>All reviews ({product.approved_reviews.length})</h1><hr />
         <div className="reviews row">
           <div className="customer-reviews col-md-6">


             {
               product.approved_reviews.map((item, i) => {

                 return (

                   <ReviewCard item={item} />
                 )
               })}



           </div>



           <div className="reviews-rating col-md-6">

             <div className="row">
               <div className="col-sm-3">
                 <div className="rating-block">
                   <h2 className="bold padding-bottom-7">{product.approved_reviews_avg_rating}</h2>
                   <div className="rating"> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span> <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i></span> </div>
                   <h4>Average Rating</h4>
                 </div>
               </div>
               <div className="col-sm-3">
                 <div className="pull-left">
                   <div className="pull-left" style={{ width: 35, lineHeight: 1 }}>
                     <div style={{ height: 15, margin: 20 - 20 }}>5 <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span></div>
                   </div>
                   <div className="pull-left" style={{ width: 180 }}>
                     <div className="progress" style={{ height: 15, margin: 8 }}>
                       <div className="progress-bar" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="5" style={{ width: '70%' }}>
                         <span className="sr-only">80% Complete (danger)</span>
                       </div>
                     </div>
                   </div>
                   <div className="pull-right" style={{ marginLeft: 10 }}>188</div>
                 </div>
                 <div className="pull-left">
                   <div className="pull-left" style={{ width: 35, lineHeight: 1 }}>
                     <div style={{ height: 15, margin: 20 - 20 }}>4 <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span></div>
                   </div>
                   <div className="pull-left" style={{ width: 180 }}>
                     <div className="progress" style={{ height: 15, margin: 8 }}>
                       <div className="progress-bar" role="progressbar" aria-valuenow="4" aria-valuemin="0" aria-valuemax="5" style={{ width: '50%' }}>
                         <span className="sr-only">80% Complete (danger)</span>
                       </div>
                     </div>
                   </div>
                   <div className="pull-right" style={{ marginLeft: 10 }}>56</div>
                 </div>
                 <div className="pull-left">
                   <div className="pull-left" style={{ width: 35, lineHeight: 1 }}>
                     <div style={{ height: 15, margin: 20 - 20 }}>3 <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span></div>
                   </div>
                   <div className="pull-left" style={{ width: 180 }}>
                     <div className="progress" style={{ height: 15, margin: 8 }}>
                       <div className="progress-bar" role="progressbar" aria-valuenow="3" aria-valuemin="0" aria-valuemax="5" style={{ width: '30%' }}>
                         <span className="sr-only">80% Complete (danger)</span>
                       </div>
                     </div>
                   </div>
                   <div className="pull-right" style={{ marginLeft: 10 }}>24</div>
                 </div>
                 <div className="pull-left">
                   <div className="pull-left" style={{ width: 35, lineHeight: 1 }}>
                     <div style={{ height: 15, margin: 20 - 20 }}>2 <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span></div>
                   </div>
                   <div className="pull-left" style={{ width: 180 }}>
                     <div className="progress" style={{ height: 15, margin: 8 }}>
                       <div className="progress-bar" role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="5" style={{ width: '10%' }}>
                         <span className="sr-only">80% Complete (danger)</span>
                       </div>
                     </div>
                   </div>
                   <div className="pull-right" style={{ marginLeft: 10 }}>16</div>
                 </div>
                 <div className="pull-left">
                   <div className="pull-left" style={{ width: 35, lineHeight: 1 }}>
                     <div style={{ height: 15, margin: 20 - 20 }}>1 <span className="fa fa-stack"><i className="fa fa-star-o fa-stack-2x"></i><i className="fa fa-star fa-stack-2x"></i></span></div>
                   </div>
                   <div className="pull-left" style={{ width: 180 }}>
                     <div className="progress" style={{ height: 15, margin: 8 }}>
                       <div className="progress-bar" role="progressbar" aria-valuenow="1" aria-valuemin="0" aria-valuemax="5" style={{ width: '0%' }}>
                         <span className="sr-only">80% Complete (danger)</span>
                       </div>
                     </div>
                   </div>
                   <div className="pull-right" style={{ marginLeft: 10 }}>8</div>
                 </div>
               </div>
             </div>

           </div>

         </div>
       </div>


     </section>
      }


        

        {/* <section id="top-products" className="content hot-sellers ">
    <div className="container-fluid">
        <div className="row">
        	<div className="col-xs-12 col-md-12">
            	<div className="heading">
                	<h2>Top Products</h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                <div className="sale-tag"><div className="btn bg-blue">SALE</div><div className="btn percent bg-yellow">20% OFF</div></div>
                  <div className="image product-imageblock"> <a ><img src="image/product/toy-1.png" alt="iPod classNameic" title="iPod classNameic" className="img-responsive" /></a>
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
            <div className="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                
                  <div className="image product-imageblock"> <a ><img src="image/product/toy-2.png" alt="iPod classNameic" title="iPod classNameic" className="img-responsive" /></a>
                   
                  <div className="btn bg-blue">SALE</div>
                <div className="btn percent bg-yellow">20% OFF</div>
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
            <div className="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                <div className="sale-tag"><div className="btn bg-blue">SALE</div><div className="btn percent bg-yellow">20% OFF</div></div>
                  <div className="image product-imageblock"> <a ><img src="image/product/toy-3.png" alt="iPod classNameic" title="iPod classNameic" className="img-responsive" /></a>
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
            <div className="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                <div className="sale-tag"><div className="btn bg-blue">SALE</div><div className="btn percent bg-yellow">20% OFF</div></div>
                  <div className="image product-imageblock"> <a ><img src="image/product/toy-4.png" alt="iPod classNameic" title="iPod classNameic" className="img-responsive" /></a>
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
          </div>
        <div className="row">
            <div className="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                <div className="sale-tag"><div className="btn bg-blue">SALE</div><div className="btn percent bg-yellow">20% OFF</div></div>
                  <div className="image product-imageblock"> <a ><img src="image/product/toy-1.png" alt="iPod classNameic" title="iPod classNameic" className="img-responsive" /></a>
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
            <div className="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                <div className="sale-tag"><div className="btn bg-blue">SALE</div><div className="btn percent bg-yellow">20% OFF</div></div>
                  <div className="image product-imageblock"> <a ><img src="image/product/toy-2.png" alt="iPod classNameic" title="iPod classNameic" className="img-responsive" /></a>
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
            <div className="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                <div className="sale-tag"><div className="btn bg-blue">SALE</div><div className="btn percent bg-yellow">20% OFF</div></div>
                  <div className="image product-imageblock"> <a ><img src="image/product/toy-3.png" alt="iPod classNameic" title="iPod classNameic" className="img-responsive" /></a>
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
            <div className="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="item">
                <div className="product-thumb">
                <div className="sale-tag"><div className="btn bg-blue">SALE</div><div className="btn percent bg-yellow">20% OFF</div></div>
                  <div className="image product-imageblock"> <a ><img src="image/product/toy-4.png" alt="iPod classNameic" title="iPod classNameic" className="img-responsive" /></a>
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
          </div>
    </div>
</section> 

<section id="features" className="content our-features ">
    <div className="container">
        <div className="row">
        	<div className="col-xs-12 col-md-12">
            	<div className="heading">
                	<h2>Our Features</h2>
                </div>
            </div>
        </div>
        <div className="features row">
            <div className="col-md-4">
                <div className="feautes">
                <div className="icon"><img className="text-center" src="image/delivery-truck.png"/></div>
                <div className="description">
                <h1>Worldwide Delivery</h1>    
                <p>On order over $150-7 days</p>    
                </div>
                </div>
                <div className="feautes">
                <div className="icon"><img className="text-center" src="image/gift-box.png"/></div>
                <div className="description">
                <h1>Great Saving</h1>    
                <p>How to save money?</p>    
                </div>
                </div>

            </div>
            <div className="col-md-4">
                <div className="icon"><img className="text-center" src="image/train-toy.png"/></div>

            </div>
            <div className="col-md-4">
                <div className="feautes">
                <div className="icon"><img className="text-center" src="image/gift-box.png"/></div>
                <div className="description">
                <h1>Money Back Guarantee</h1>    
                <p>Send within 30 days</p>    
                </div>
                </div>
                <div className="feautes">
                <div className="icon"><img className="text-center" src="image/support.png"/></div>
                <div className="description">
                <h1>24x7 Support</h1>    
                <p>Call us 24/7 at 000-123-456</p>    
                </div>
                </div>

            </div>
            
            
          </div>
    </div>
</section> 
 */}



      </>
    );
  }
  else {
    return (<></>);

  }
}
