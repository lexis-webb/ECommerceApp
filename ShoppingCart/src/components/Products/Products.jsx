import React from 'react';
import products from '../../data';
import Card from '../Card/Card';
import './Products.scss';

const Products = () => {
  return (
    <div className='products'>
      {products.map((item) => (
          <Card item={item} key= {item.id} />
      ))
      }
    </div>
  )
}

export default Products;