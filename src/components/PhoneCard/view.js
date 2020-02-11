import React from 'react';

import './style.scss';

function PhoneCard({ phone }) {
  return (
    <div className="PhoneCard">
      <h2>{phone.name}</h2>
      <img
        src=""
        alt={phone.imageFileName}
      />
      <h5>by {phone.manufacturer}</h5>
      <div className="PhoneCard__desc">
        <h4>Description:</h4>
        <p>{phone.description}</p>
      </div>
      <div className="PhoneCard__addInfo">
        <p>
          <b>Screen: </b>{phone.screen}</p>
        <p>
          <b>Processor: </b>{phone.processor}</p>
        <p>
          <b>RAM: </b>{phone.ram}</p>
          <p>
          <b>Color: </b>{phone.color}</p>
      </div>
      <div className="PhoneCard__price">
        <h4>${phone.price}</h4>
      </div>
    </div>
  );
}

export default PhoneCard;
