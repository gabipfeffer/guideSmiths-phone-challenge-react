import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { requestPhones, setSearchField } from '../../state/actions';

import Home from '../../components/Home';
import PhoneListContainer from '../PhoneListContainer';
import PhoneCardContainer from '../PhoneCardContainer/view';

import './App.scss';

const mapStateToProps = state => {
  return {
    searchField: state.setSearchField.searchField,
    isPending: state.requestPhones.isPending,
    list: state.requestPhones.list,
    error: state.requestPhones.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestPhones: () => dispatch(requestPhones())
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestPhones();
  }

  render() {
    const { list, isPending, searchField, onSearchChange } = this.props;

    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              path="/phones/:id"
              render={() =>
                isPending ? (
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
                  <PhoneCardContainer list={list} />
                )
              }
            />
            <Route
              path="/phones"
              render={() =>
                isPending ? (
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
                  <PhoneListContainer
                    onSearchChange={onSearchChange}
                    list={list}
                    searchField={searchField}
                  />
                )
              }
            />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
