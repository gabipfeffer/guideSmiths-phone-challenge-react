import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../../components/Home';
import PhoneListContainer from '../PhoneListContainer';
import PhoneCardContainer from '../PhoneCardContainer/';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/phones/:id" component={PhoneCardContainer} />
            <Route path="/phones" component={PhoneListContainer} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
