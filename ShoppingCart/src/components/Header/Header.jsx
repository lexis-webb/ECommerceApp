import React from 'react';
import "./Header.scss";

function Header() {
  return (
    <div className='header'>
      <div className='container'>
        <div className='left'>
          <h2>Cart</h2>
        </div>
          <div className='right'>
            <i className='fas fa-cart-plus'></i>
            <div className='count'>1</div>
          </div>
      </div>
    </div>
  )
}

export default Header;