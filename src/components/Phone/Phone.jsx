import React from 'react';
import './Phone.css'

const Phone = ({ phone }) => {

    const { id, image, price, name } = phone

    return (
        <div className='phone-details'>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <h4>{price}</h4>
            <p>ID: {id}</p>
            <button className='buy-now-btn'>Buy Now</button>
        </div>
    );
};

export default Phone; <h1>This is From Phone Page</h1>