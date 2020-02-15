import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';
import ListCard from '../ListCard';

function PhoneList({ list, deletePhoneId }) {
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
            <button
              className="PhoneList__button"
              type="button"
              onClick={() => deletePhoneId(phone.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhoneList;
