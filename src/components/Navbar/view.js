import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="Navbar__logo">
        <img
          src="https://images.ctfassets.net/5gv1edeicqfs/bomBQDobMA6eyu4CkuYmM/6f5debe74cf1e335bb0be7e3ecbba40b/gs-logo.png"
          alt="GuideSmiths Logo"
        />
      </div>
      <div className="Navbar__links">
        <Link to={'/'}>HOME</Link>
        <Link to={'/phones'}>PHONES</Link>
      </div>
    </nav>
  );
}

export default Navbar;
