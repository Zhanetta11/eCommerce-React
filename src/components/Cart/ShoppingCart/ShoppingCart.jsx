import React from 'react';
import './ShoppingCart.css'; 
import CartImg from "./../../../img/cart-image.png";

const ShoppingCart = () => {
  return (
    <div className='cart-container'>
      <div className="shopping-cart">
        <div className="cart-main">
          <div className="column-labels">
            <ul className="product-cart">
              <li className="product-name">Product</li>
              <li className="product-price">Price</li>
              <li className="product-quantity">Quantity</li>
              <li className="product-line-price">Subtotal</li>
              </ul>
          </div>

          <div className="product">
            <img className="image"  src={CartImg}/>
            <div className="product-details">
              <p className="name">Sofa</p>
              <p className="price">250,000.00</p>
              <p className="quantity"/>
              <input type="number" value="1" min="1"/>
              <p className="line-price">250,000.00</p>
              <p className="removal"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                </svg>
              </p>
            </div>
          </div>
        </div>
        <div className="totals">
            <p className="cart-totals">Cart Totals</p>
            <div className="subtotal-details">
              <p className="subtotal">Subtotal</p>
              <p className="subtotal-value" >250,000.00</p>
            </div>
            <div className="total-details">
              <p className="total">Total</p>
              <p className="total-value">250,000.00</p>
            </div>
            <button className="checkout">Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
