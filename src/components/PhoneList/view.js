import React from 'react';

import './style.scss';
import PhoneCard from '../PhoneCard';


function PhoneList({ list }) {

  return (
    <div className="PhoneList">
      <h1>Phone List</h1>
      <div className="PhoneList__list">
        {list.map(phone => (
          <PhoneCard phone={phone} key={phone.id} />
        ))}
      </div>
    </div>
  );
}

export default PhoneList;
