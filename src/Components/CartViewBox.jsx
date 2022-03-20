import { Box } from '@mui/material'
import trush from "../../src/image/cart/trash.png";

const CartViewBox = () => {
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
               <tr>
                 <td className="items__box">
                   <div className="item__image__cart">
                   <img src="http://206.189.138.26/cache/large/product/178/6DjQoVAGp1YzIAc2G0kPP8ynNwoNSS3IGHGseoUz.png" className='productImg__cart' />
                   </div>
                   <div className="nameRemove__box">
                   <span>Test name</span>
                   <div className="remove__box">
                     <img src={trush} className="trashBox" />
                   <span>Remove</span>
                   </div>
                   </div>
                 </td>
                 <td>
                    <span>color: Green</span>
                    <span>Age: 05-07 Years </span>
                 </td>
                 <td>
                 <div className="quanity__box__cart main">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                      </div>
                 </td>
                 <td>
                     <span className='price__cart'>AED 10</span>
                 </td>
                 <td>
                 <span className='price__cart'>AED 15</span>
                 </td>
               </tr>
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
                      <strong>AED 4.50</strong>
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
                      <strong>AED 4.50</strong>
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
