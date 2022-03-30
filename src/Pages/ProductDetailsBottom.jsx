import React, { useRef } from 'react'
import './ProductDetailsBottom.css'

const ProductDetailsBottom = () => {
  const switcherTab = useRef(null)

  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      document.querySelector('.details__box').classList.add('active')
    } else {
      document.querySelector('.details__box').classList.remove('active')
    }
  })

  return (
    <div className="details__box" ref={switcherTab}>
      <div className="main__part d__flex">
        <div className="name d__flex">
          <span>AROMA MOCHA BABYTOY</span>
        </div>
        <div className="quantity__box d__flex">
          <button className="glyphicon glyphicon-minus black"></button>
          <span className="bottom__quantity">1</span>
          <button className="glyphicon glyphicon-plus black"></button>
        </div>
        <div className="cart__box__bottom">
          <p class="product__text">
            <a class="button js-add-product" href="#" title="view cart">
              View Cart
            </a>
            <a class="button js-add-product" href="#" title="checkout">
              Checkout
            </a>
          </p>
        </div>
        <div className="cross__option">
          <span>×</span>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsBottom
