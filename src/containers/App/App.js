import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import './App.scss';
import PhoneList from '../../components/PhoneList';
import PhoneCard from '../../components/PhoneCard';

import { hanldePhones } from '../../state/reducers'




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/phones/:id" exact component={PhoneCard} />
          <Route path="/phones" exact component={PhoneList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
