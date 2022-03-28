//libraries
import axios from 'axios'

//constants

import { apiHeaderConfiguration } from '../../Helpers/apiHeader/ApiHeaderConfiguration'

const cartCheckout = (body, token) => {
  return new Promise((resolve, reject) => {
    apiHeaderConfiguration('auth_token', 'cart-checkout', 'POST', body)
      .then((res) => {
        resolve(res?.data)
      })
      .catch((err) => {
        reject(err?.response?.data)
      })
  })
}
export { cartCheckout }
