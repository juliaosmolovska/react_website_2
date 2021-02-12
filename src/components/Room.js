import React from 'react';
import { Links } from 'react-router-dom';
import defaultImg from '../images/room-1.jpeg';

export default function Room({room}) {
  const { name, slug, images, price } = room;

  //defaultImg по замовчуванню якщо немає інших картинок
  return (
    <article className='room'>
      <div className='img-container'>
        <img src={images[0]} alt='single room' />
      </div>
    </article>
  )
}
