import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner';

import './style.scss';

import Navbar from '../../components/Navbar';
import SearchBox from '../../components/SearchBox';
import PhoneList from '../../components/PhoneList';
import Scroll from '../../components/Scroll';

function PhoneListContainer({
  list,
  requestPhones,
  isPending,
  searchField,
  setSearchField
}) {
  useEffect(() => {
    if (isPending) {
      requestPhones();
    }
  }, [isPending, requestPhones]);

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
      <SearchBox searchChange={setSearchField} />
      {isPending ? (
        <div className="App__spinner">
          <Loader
            type="Circles"
            color="#17ae8e"
            height={200}
            width={200}
            timeout={30000}
          />
        </div>
      ) : (
        <Scroll>
          <PhoneList list={filteredPhones} />
        </Scroll>
      )}
    </div>
  );
}

export default PhoneListContainer;
