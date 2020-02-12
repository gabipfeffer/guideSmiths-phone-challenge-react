import React from 'react';

import './style.scss';

function PhoneCard({ phone }) {
  return (
    <div className="PhoneCard">
      <div className="PhoneCard__img">
        <img
          src={`http://localhost:3005/${phone.imageFileName}`}
          alt={phone.imageFileName}
        />
      </div>
      <div className="PhoneCard__mainInfo">
        <h2>{phone.name}</h2>
        <h3>by {phone.manufacturer}</h3>
        <h2>${phone.price}</h2>
        <p>{phone.description}</p>
        <div className="PhoneCard__mainInfo__specifics">
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
      </div>
    </div>
  );
}

export default PhoneCard;
