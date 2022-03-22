import React, { Component, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Snackbar, Alert } from '@mui/material'
import axios from 'axios';
import { api } from '../../Helpers/services';
import "../../App.css";

export default function ProductCard(props) {

  const [item, setitem] = useState(props.item);
  const [slug, setslug] = useState("/ProductDetail/" + props.item.slug);
  const [show, setshow] = useState(false)
  const [error, seterror] = useState('')
  const [errortype, seterrortype] = useState('')


  const add = (item) => {

    


    let usr = localStorage.getItem("user")
    let cart = localStorage.getItem("cart")
    let cartitems = []
    let isexists = []

    if (cart != null) {
      cartitems = JSON.parse(cart)
      console.log(cartitems)
      isexists = cartitems.filter(function (itm) {
        debugger
        return itm.product_id === item.id;
      });
    }

    console.log(isexists)
    if (isexists.length > 0) {
      seterror('item already exists in cart')
      setshow(true)
      seterrortype('error');
      setTimeout(() => {
        setshow(false);
      
      }, 4000);
      return
    }
    else {
      seterror('item added in cart')
      setshow(true)
      seterrortype('success');
      setTimeout(() => {
        setshow(false);
      
      }, 2000);

      cartitems.push
        (
          {
            "id": 0,
            "user_id": usr ? JSON.parse(usr).user.id : 0,
            "product_id": item.id,
            "quantity": 1,
            "status": "active",
            "product_name": item.name,
            "product_subTotal": item.price,
            "unit_price": item.price,
            "product_image_url": item.image_url,
            "extras": {
              "color": "green",
              "size": "small"
            }
          }

        )
      localStorage.setItem("cart", JSON.stringify(cartitems))
    }




    if (usr != null) {
      let tkn = JSON.parse(usr)
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tkn.auth_token}`
      }
      var data = JSON.stringify({
        "product_id": item.id,
        "quantity": 1
      });

      console.log(data)

      axios.post(api.add_to_cart, data, {
        headers: headers
      })
        .then(function (response) {

          if (response.data.data.length > 0) {
            localStorage.setItem("cart", JSON.stringify(response.data.data))

          }

        })
        .catch(function (error) { })
    }
  }


  return (
   
    <>

      <div className="product-layout  product-grid  col-lg-3 col-md-3 col-sm-6 col-xs-12">
        <div className="item">




          <div className="product-thumb">
            <Link to={{ pathname: `/ProductDetail/${props.item.slug}` }} className="parent link">
              <div className="image product-imageblock">
                <div className="btn new bg-red">20% OFF</div>
                <div className="btn percent bg-yellow">New</div>{" "}
                <a >
                  <img
                    src={item.image_url}
                    alt="iPod Classic"
                    title="iPod Classic"
                    className="img-responsive"
                  />
                </a>

              </div>
            </Link>
            <div className="caption product-detail">
              <h4 className="product-name">
                <a title="Casual Shirt With Ruffle Hem"
                  style={{
                    fontSize: "1.6vmax",
                  }}
                >
                  {item.name}
                </a>
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
                  <i className="fa fa-star fa-stack-2x"></i>
                </span>{" "}
              </div>

              <div
                className="price__box"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p
                  className="discount"
                  style={{
                    fontSize: "1.4vmax",
                    paddingRight: "10px",
                    marginBottom: "20px",
                  }}
                >
                  AED {item.price}
                </p>
                <p
                  className="price product-price"
                  style={{ fontSize: "1.8vmax" }}
                >
                  AED {item.price}
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
                  onClick={e => add(item)}
                >
                  {" "}
                  <i className="fa fa-shopping-cart"></i>{" "}
                </button>
              </div>
            </div>
         
         {/* )  */}
      
          </div>


        </div>
      </div>

      {show &&

        <Snackbar open={true} autoHideDuration={4000} >
          <Alert severity={errortype} className="alert-show-msg">
            {error}
          </Alert>
        </Snackbar>
      }
    </>
  );
}
