import React from 'react';

import './style.scss';

function PhoneCard({ phone }) {
  return (
    <div className="PhoneCard">
      <img
        src={`http://localhost:3005/${phone.imageFileName}`}
        alt={phone.imageFileName}
      />
      <div className='PhoneCard__container'>
        <div className="PhoneCard__mainInfo">
          <h1>{phone.name}</h1>
          <h3>by {phone.manufacturer}</h3>
          <h2>${phone.price}</h2>
        </div>
        <div className="PhoneCard__desc">
          <p>{phone.description}</p>
        </div>
        <div className="PhoneCard__specifics">
          <p>
            <b>Screen: </b>
            {phone.screen}
          </p>
          <p>
            <b>Processor: </b>
            {phone.processor}
          </p>
          <p>
            <b>RAM: </b>
            {phone.ram}
          </p>
          <p>
            <b>Color: </b>
            {phone.color}
          </p>
        </div>
        <div className='PhoneCard__button'>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default PhoneCard;
