import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';

export default function Room({room}) {
  const { name, slug, images, price } = room;

  //defaultImg по замовчуванню якщо немає інших картинок
  return (
    <article className='room'>
      <div className='img-container'>
        <img src={images[0]} alt='single room' />
        <div className='price-top'>
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className='btn-primary room-link'>Features</Link>
      </div>
    </article>
  );
}
