import React from 'react';

import './style.scss';
import PhoneCard from '../PhoneCard';

function PhoneList() {
  return (
    <div className="PhoneList">
      <h1>Phone List</h1>
      <div className="PhoneList__list">
        <PhoneCard />
        <PhoneCard />
        <PhoneCard />
        <PhoneCard />
        <PhoneCard />
        <PhoneCard />
        <PhoneCard />
        <PhoneCard />
        <PhoneCard />
        <PhoneCard />
      </div>
    </div>
  );
}

export default PhoneList;
