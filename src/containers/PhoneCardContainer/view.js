import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import PhoneCard from '../../components/PhoneCard';
import Navbar from '../../components/Navbar';

import { requestPhoneId } from '../../state/actions';

import './style.scss';


function PhoneCardContainer({ list }) {
  let { id } = useParams();

  let phone = list.filter(phone => phone.id.toString() === id)[0];

  return (
    <div className="PhoneCardContainer">
      <Navbar />
      <div className="PhoneCardContainer__back">
        <Link to={'/phones'}>&larr; back to catalog</Link>
      </div>
      <div className="PhoneCard__phone">
        <PhoneCard phone={phone} className={PhoneCard} />
      </div>
    </div>
  );
}

export default PhoneCardContainer;
