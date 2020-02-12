import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../Navbar';

import './style.scss';

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <div className="Home__title">
        <h1>GuideSmith's Phone Catalog</h1>
        <h2>All the lastest models here</h2>
      </div>
    </div>
  );
}

export default Home;
