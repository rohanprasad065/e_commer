import React from 'react';
import './bredcrum.css';
import arrow_icon from '../assets/breadcrum_arrow.png';

const Bredcrum = ({ product }) => {
  return (
    <div className='bredcrum'>
      HOME
      <img src={arrow_icon} alt="" />
      Shop
      <img src={arrow_icon} alt="" />
      {product.category}
      <img src={arrow_icon} alt="" />
      {product.name}
    </div>
  );
};

export default Bredcrum;
