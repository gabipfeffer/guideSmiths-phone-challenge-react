import React from 'react';
import { useParams, Link } from 'react-router-dom';

import PhoneCard from '../../components/PhoneCard';
import Navbar from '../../components/Navbar'

import './style.scss';

function PhoneCardContainer({ list }) {
  let { id } = useParams();
  let phone = list.filter(phone => phone.id.toString() === id)[0];

  return (
    <div className='PhoneCardContainer'>
      <Navbar />
      <PhoneCard phone={phone} />
      <Link to={'/phones'}>Go Back</Link>
    </div>
  );
}

export default PhoneCardContainer;
