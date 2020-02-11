import React, { useState, useEffect } from 'react';

import './style.scss';
import PhoneCard from '../PhoneCard';

import { getPhones } from '../../services/phoneApi';

function PhoneList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    async function fetchPhones() {
      const list = await getPhones();

      setList(list);
    }

    fetchPhones();
  }, []);

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
