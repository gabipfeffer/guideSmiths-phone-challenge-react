import React from 'react';

import './style.scss';

function ListCard({ phone }) {
  return (
    <div className="ListCard">
      <img
        src={`http://localhost:3005/${phone.imageFileName}`}
        alt={phone.imageFileName}
      />
      <h2>{phone.name}</h2>
      <p>by: <b>{phone.manufacturer}</b></p>
      <h3>${phone.price}</h3>
    </div>
  );
}

export default ListCard;
