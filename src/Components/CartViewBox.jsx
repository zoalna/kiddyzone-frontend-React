import { Box, Snackbar, Alert, CircularProgress } from '@mui/material'
import React, { Component, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { api } from '../Helpers/services';
import trush from "../../src/image/cart/trash.png";

const CartViewBox = (props) => {
  const [cart, setcart] = useState(props.cart)
  const [subtotal, setsubtotal] = useState(0)
  const [isloading, setloading] = useState(false)
  const [showing, setshowing] = useState(false)
  const [error, seterror] = useState('')
  const [token, settoken] = useState(null)

  const add  = (index, qty) => 
  {
    let items = [...cart];
    let item = {...items[index]};
    item.quantity = item.quantity +  (qty);
    item.product_subTotal = item.quantity * item.unit_price
    if (item.quantity == 0) return
    items[index] = item;
    setcart(items);
    const subtotal = items.reduce((prev,next) => prev + next.product_subTotal,0);
    setsubtotal(subtotal)
    localStorage.setItem("cart", JSON.stringify(items))
    let usr = localStorage.getItem("user")
    if (usr!= null)
    {
      let tkn = JSON.parse(usr)
      settoken(tkn.auth_token);
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
      var data = JSON.stringify({
        "product_id": item.product_id,
        "quantity": item.quantity
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
      .catch(function (error)  
      {})
    }
  }

  const remove  = (id) => 
  {
    let cart = localStorage.getItem("cart")
    let cartitems =  JSON.parse(cart)
     cartitems = cartitems.filter(function(item) {
      return item.product_id != id;
    });
    setcart(cartitems)
    const subtotal = cartitems.reduce((prev,next) => prev + next.product_subTotal,0);
    setsubtotal(subtotal)
    if (cartitems.length == 0)
    {
      localStorage.removeItem("cart");
    }
    else
    {
      localStorage.setItem("cart", JSON.stringify(cartitems))
    }
    let usr = localStorage.getItem("user")
    if (usr!= null)
    {
      let tkn = JSON.parse(usr)
      settoken(tkn.auth_token);
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tkn.auth_token}`
      }
      var data = JSON.stringify({
        "product_id": id
      });

                 console.log(data)

      axios.post(api.remove_cart, data, {
        headers: headers
      })
      .then(function (response) {
        
        if (response.data.data.length > 0) {
          localStorage.setItem("cart", JSON.stringify(response.data.data))
          
        }

      })
      .catch(function (error)  
      {})
    }
  }

  useEffect(() => {

    const subtotal = cart.reduce((prev,next) => prev + next.product_subTotal,0);
    setsubtotal(subtotal)
   
  }, []);


  return (
    <Box className="cart-checkout">
      <div className="container">
        <div className="row cartView">
          <div className="col-sm-12 col-md-8">


            <table className="quantityBox">
              <tr>
                <th className='items__box'>Items</th>
                <th>color & Size</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Subtotal</th>
              </tr>
              {
                cart.map((item, i) => {

                  return (
                    <tr>
                      <td className="items__box">
                        <div className="item__image__cart">
                          <img src={item.product_image_url} className='productImg__cart' />
                        </div>
                        <div className="nameRemove__box">
                          <span>{item.product_name}</span>
                          <div className="remove__box"  onClick={e => remove(item.product_id)}>
                            <img src={trush} className="trashBox" />
                            <span>Remove</span>
                          </div>
                        </div>
                      </td>
                      <td>

                        {
                          item.extras &&
                          <>

                            {

                              Object.keys(item.extras).map((key) => {
                                return (
                                  <span key={key}>{key} : {item.extras[key]}</span>
                                )
                              })}


                          </>
                        }
                      </td>
                      <td>
                        <div className="quanity__box__cart main">
                          <button onClick={e => add(i,-1)}>-</button>
                          <span>{item.quantity}</span>
                          <button onClick={e => add(i,1)}>+</button>
                        </div>
                      </td>
                      <td>
                        <span className='price__cart'>AED {item.unit_price}</span>
                      </td>
                      <td>
                        <span className='price__cart'>AED {item.product_subTotal}</span>
                      </td>
                    </tr>
                  )
                })}
            </table>

            <Box py={2} bgcolor={'#D8F3FF'} className="col-sm-12 cart-btn">
              <div>
                <button type="button" className="btn bg-green text-white">
                  Order By WhatsApp
                </button>
                <button type="button" className="btn bg-red text-white">
                  UPDATE CART
                </button>
                <button type="button" className="btn bg-green text-white">
                  CONTINUE SHOPPING
                </button>
              </div>
            </Box>
          </div>

          <div
            className="col-md-4 subtotal"
            style={{ backgroundColor: '#F6F6F6' }}
          >
            <h2>Order Summary</h2>
            <table className="table table-hover table-right">
              <thead>
                <tr>
                  <td>
                    <h5>Subtotal</h5>
                  </td>
                  <td className="text-right">
                    <h5>
                      <strong>AED {subtotal}</strong>
                    </h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Items Discount</h5>
                  </td>
                  <td className="text-right">
                    <h5>
                      <strong>AED 0.00</strong>
                    </h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Estimate VAT%</h5>
                  </td>
                  <td className="text-right">
                    <h5>
                      <strong>AED 0.00</strong>
                    </h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Shipping</h5>
                  </td>
                  <td className="text-right">
                    <h5>
                      <strong>Free Shipping</strong>
                    </h5>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>payment methods</h5>
                  </td>
                  <td className="text-right">
                    <img
                      className="text-right"
                      src={'/image/cart/payment-method.png'}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Total</h5>
                  </td>
                  <td className="text-right">
                    <h5>
                      <strong>AED {subtotal}</strong>
                    </h5>
                  </td>
                </tr>
              </thead>
            </table>
            <button
              type="button"
              className="btn bg-green text-white proceed-checkout"
            >
              Proceed To Checkout
            </button>
          </div>

        </div>
      </div>
    </Box>
  )
}

export default CartViewBox
