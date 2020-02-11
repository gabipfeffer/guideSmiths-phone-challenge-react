import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';
import PhoneList from './components/PhoneList';
import PhoneCard from './components/PhoneCard';
import Home from './containers/Home';

function App() {


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/phones/:id" exact component={PhoneCard} />
          <Route path="/phones" exact component={PhoneList} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
