import { Box } from '@mui/material'

const CartViewBox = () => {
  return (
    <Box className="cart-checkout">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <table className="table table-hover table-left">
              <thead>
                <tr>
                  <th className="text-center">Product</th>
                  <th className="text-center">Color & Size</th>
                  <th className="text-center">Quantity</th>
                  <th className="text-center">Price</th>
                  <th className="text-center">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col-sm-4 col-md-4 product-thumb">
                    <div className="media">
                      <a className="thumbnail pull-left" href="#">
                        {' '}
                        <img
                          className="media-object"
                          src="image/cart/product-image.png"
                        />{' '}
                      </a>
                      <div className="media-body">
                        <h4 className="media-heading">
                          <a href="#">High Speed Magic Toy</a>
                        </h4>
                      </div>
                    </div>
                  </td>
                  <td className="col-sm-2 col-md-2">
                    <strong>
                      Size: XL <br />
                      Color: Black
                    </strong>
                  </td>
                  <td
                    className="col-sm-2 col-md-2"
                    style={{ textAlign: 'center' }}
                  >
                    <input
                      type="number"
                      className="form-control"
                      id="quantity"
                      value="0"
                    />
                  </td>
                  <td className="col-sm-2 col-md-2 text-center">
                    <strong>$120</strong>
                  </td>
                  <td className="col-sm-2 col-md-2 text-center">
                    <strong>$120</strong>
                  </td>
                </tr>
              </tbody>
            </table>
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
            <div className="total-price">
              <span className="total">Total</span>
              <span className="t-price">$400</span>
            </div>
          </div>

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
      </div>
    </Box>
  )
}

export default CartViewBox
