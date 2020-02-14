import React from 'react';

import './style.scss';

function SearchBox({ searchChange }) {
  return <div className='SearchBox'>
            <input className='SearchBox__input' type='search' placeholder='search phones here...' onChange={searchChange} />
  </div>;
}

export default SearchBox;
