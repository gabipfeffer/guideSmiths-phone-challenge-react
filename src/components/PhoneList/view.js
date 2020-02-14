import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import ListCard from '../ListCard';

function PhoneList({ list }) {
  return (
    <div className="PhoneList">
      <div className="PhoneList__list">
        {list.map(phone => (
          <div key={phone.id} className="PhoneList__list__card">
            <Link
              className="PhoneList__list__card__link"
              to={`/phones/${phone.id}`}
            >
              <ListCard phone={phone} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhoneList;
