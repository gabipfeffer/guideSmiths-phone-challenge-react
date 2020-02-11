import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import PhoneCard from '../PhoneCard';

function PhoneList({ list }) {
  return (
    <div className="PhoneList">
      <h1>Phone List</h1>
      <div className="PhoneList__list">
        {list.map(phone => (
          <Link key={phone.id} to={`/phones/${phone.id}`}>
            <PhoneCard phone={phone} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PhoneList;
