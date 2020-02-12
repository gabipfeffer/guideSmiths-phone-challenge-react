import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { requestPhones } from '../../state/actions';

import Home from '../../components/Home';
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
            <Route
              path="/phones/:id"
              render={() =>
                isPending ? (
                  <Loader
                    type="Circles"
                    color="#00BFFF"
                    height={200}
                    width={200}
                    timeout={10000}
                  />
                ) : (
                  <PhoneCardContainer list={data} />
                )
              }
            />
            <Route
              path="/phones"
              render={() =>
                isPending ? (
                  <Loader
                    type="Circles"
                    color="#00BFFF"
                    height={200}
                    width={200}
                    timeout={10000}
                  />
                ) : (
                  <PhoneList list={data} />
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
