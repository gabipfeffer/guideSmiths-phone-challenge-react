import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { requestPhones } from '../../state/actions';

import PhoneList from '../../components/PhoneList';
import PhoneCardContainer from '../PhoneCardContainer/view';

import './App.scss';

const mapStateToProps = state => {
  return {
    isPending: state.requestPhones.isPending,
    list: state.requestPhones.list,
    error: state.requestPhones.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestPhones: () => dispatch(requestPhones())
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestPhones();
  }

  render() {
    const { list, isPending } = this.props;
    const { data } = list;

    return (
      <div className="App">
      <Router>
        <Switch>
          <Route path='/phones/:id' render={ () => isPending ? <h1>Loading</h1> : <PhoneCardContainer list={data} />} />
          <Route path='/phones' render={ () => isPending ? <h1>Loading</h1> : <PhoneList list={data} />} />
        </Switch>
      </Router>
        
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
