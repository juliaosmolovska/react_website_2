import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from './Title';

export default function RoomFilter() {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;
  
  return (
    <section className='filter-container'>
      <Title title='search rooms'></Title>
        <form className='filter-form'>
          {/* select type */}
          <div className='form-group'>
            <label htmlFor='type'>room type</label>
            <select
              name='type'
              id='type'
              value={type}
              className='form-control'
              onChange={handleChange}
            />
          </div>
          {/* end select type */}
        </form>
    </section>
  );
}
