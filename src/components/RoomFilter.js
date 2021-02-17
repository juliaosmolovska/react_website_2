import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../context';
import Title from './Title';

export default function RoomFilter() {
  const context = useContext(RoomContext);
  console.log(context);
  return (
    <div>
      Hello from RoomFilter
    </div>
  )
}
