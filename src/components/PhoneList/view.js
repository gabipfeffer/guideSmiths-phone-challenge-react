import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import PhoneCard from '../PhoneCard';
import Navbar from '../Navbar';

function PhoneList({ list }) {
  return (
    <div className="PhoneList">
    <Navbar />
      <h1>Phone List</h1>
      <div className="PhoneList__list">
        {list.map(phone => (
          <Link
            className="PhoneList__list__link"
            key={phone.id}
            to={`/phones/${phone.id}`}
          >
            <PhoneCard phone={phone} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PhoneList;
