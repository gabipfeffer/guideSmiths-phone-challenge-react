import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { useParams, Link } from 'react-router-dom';

import PhoneCard from '../../components/PhoneCard';
import Navbar from '../../components/Navbar';

import './style.scss';

function PhoneCardContainer({ phone, phonePending, requestPhoneId }) {
  let { id } = useParams();

  useEffect(() => {
    if (phonePending){
      requestPhoneId(id);
    }
  }, [requestPhoneId, id, phonePending]);

  return (
    <div className="PhoneCardContainer">
      <Navbar />
      <div className="PhoneCardContainer__back">
        <Link to={'/phones'}>&larr; back to catalog</Link>
      </div>
      <div className="PhoneCard__phone">
        {phonePending ? (
          <Loader
            type="Circles"
            color="#17ae8e"
            height={200}
            width={200}
            timeout={30000}
          />
        ) : (
          <PhoneCard phone={phone} className={PhoneCard} />
        )}
      </div>
    </div>
  );
}

export default PhoneCardContainer;
