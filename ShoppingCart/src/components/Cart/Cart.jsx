import React from 'react';
import './Cart.scss';

const Cart = () => {
  return (
    <div className='cart'>
      <div className='cart-box'>
        <div className='cart-img'>
          <img src="hffs" />
          <p>hahfhf</p>
        </div>

        <div>
          <button>+</button>
          <button>1</button>
          <button>-</button>
        </div>

        <div>
          <span>1</span>
          <button>Remove</button>
        </div>

        <div className='total'>
          <span>Total Price: $price</span>
        </div>
      </div>
    </div>
  )
}

export default Cart;