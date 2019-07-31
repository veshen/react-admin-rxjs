import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import { Router, Route, browserHistory } from 'react-router-dom';
// import { BrowserRouter as Router, Route, BrowserRouter} from "react-router-dom";
import { Router, Route, browserHistory } from "react-router";
import { Provider } from 'react-redux'
import { createBrowserHistory } from "history";
import App from './App';
import HomePage from '../pages/HomePage';
import SettingsPage from '../pages/SettingsPage';
import store from './../store/store'

import Home from './../pages/home/index.connect';
const history = createBrowserHistory()

export default class MainRouter extends Component {
  constructor() {
    super();
    this.state = {
      navOpenState: {
        isOpen: true,
        width: 304,
      }
    }
  }

  getChildContext () {
    return {
      navOpenState: this.state.navOpenState,
    };
  }

  appWithPersistentNav = () => (props) => {
    return (
    <App
      onNavResize={this.onNavResize}
      {...props}
    />
  )}

  onNavResize = (navOpenState) => {
    this.setState({
      navOpenState,
    });
  }

  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route component={this.appWithPersistentNav()}>
            <Route path="/" component={()=><Home/>} />
            <Route path="/settings" component={SettingsPage} />
          </Route>
        </Router>
      </Provider>
    );
  }
}

MainRouter.childContextTypes = {
  navOpenState: PropTypes.object,
}
