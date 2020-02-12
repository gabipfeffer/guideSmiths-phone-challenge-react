import React from 'react';
import { useParams } from 'react-router-dom';

import PhoneCard from '../../components/PhoneCard';
import Navbar from '../../components/Navbar'

import './style.scss';

function PhoneCardContainer({ list }) {
  let { id } = useParams();
  let phone = list.filter(phone => phone.id.toString() === id)[0];

  return (
    <div className='PhoneCardContainer'>
      <Navbar />
      <PhoneCard phone={phone} className={PhoneCard} />
    </div>
  );
}

export default PhoneCardContainer;
