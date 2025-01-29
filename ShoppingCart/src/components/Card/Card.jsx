import React from 'react';
import './Card.scss';


const Card = ({item}) => {
  const {id, title, description, category, price, image} = item || {};
  return (
    <div className='card'>
      <div className='container' key={id}>
        <img src={image} alt="" />
        <p>{category}</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>${price}</p>
        <button>Add To Cart</button>
      </div>

    </div>
  )
}

export default Card;