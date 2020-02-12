import React from 'react';
import { Link } from 'react-router-dom'

import Navbar from '../Navbar';

import './style.scss';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="Home__title">
      <img src="https://images.ctfassets.net/5gv1edeicqfs/bomBQDobMA6eyu4CkuYmM/6f5debe74cf1e335bb0be7e3ecbba40b/gs-logo.png" alt='guideSmith logo' />
        <Link to={'/phones'} >Shop Phones</Link>
      </div>
    </div>
  );
}

export default Home;
