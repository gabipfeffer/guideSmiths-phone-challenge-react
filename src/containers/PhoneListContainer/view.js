import React from 'react';

import './style.scss';

import Navbar from '../../components/Navbar';
import SearchBox from '../../components/SearchBox';
import PhoneList from '../../components/PhoneList';

function PhoneListContainer({ list, searchField, onSearchChange }) {
  let filteredPhones = list.filter(phone => {
    if (phone.name.toLowerCase().includes(searchField.toLowerCase())) {
      return phone.name.toLowerCase().includes(searchField.toLowerCase());
    } else if (
      phone.manufacturer.toLowerCase().includes(searchField.toLowerCase())
    ) {
      return phone.manufacturer
        .toLowerCase()
        .includes(searchField.toLowerCase());
    }
  });

  return (
    <div className="PhoneListContainer">
      <Navbar />
      <h1>Smartphone Catalog</h1>
      <SearchBox searchChange={onSearchChange} />
      <PhoneList list={filteredPhones} />
    </div>
  );
}

export default PhoneListContainer;
