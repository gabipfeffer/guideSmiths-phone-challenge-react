import React from 'react';
import { Link } from 'react-router-dom'

import './style.scss';

function Navbar() {
  return (
    <nav className='Navbar'>
        <Link to={'/'}>HOME</Link>
        <Link to={'/phones'}>PHONES</Link>
    </nav>
  );
}

export default Navbar;
