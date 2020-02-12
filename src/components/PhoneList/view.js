import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import PhoneCard from '../PhoneCard';
import Navbar from '../Navbar';

function PhoneList({ list }) {
  return (
    <div className="PhoneList">
      <Navbar />
      <h1>Check out our models here</h1>
      <div className="PhoneList__list">
        {list.map(phone => (
          <div key={phone.id} className='PhoneList__list__card'>
            <Link
              className="PhoneList__list__link"
              
              to={`/phones/${phone.id}`}
            >
              <PhoneCard phone={phone} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhoneList;
