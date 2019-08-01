import React, { Component, useState } from 'react';
// import { Router, Route, browserHistory } from 'react-router-dom';
import { BrowserRouter as Router, Route, BrowserRouter} from "react-router-dom";
// import { Router, Route, browserHistory } from "react-router";
import { Provider } from 'react-redux'
import { createBrowserHistory } from "history";
// import App from './App';
import HomePage from '../pages/HomePage';
import SettingsPage from '../pages/SettingsPage';
import store from './../store/store'
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config'
import Home from './../pages/home/index.connect';
import Page from '@atlaskit/page';
import StarterNavigation from '../components/StarterNavigation/StarterNavigation.connect';

const history = createBrowserHistory()

interface TypeOfRouterItem {
    path : string
    exact? : boolean
    component : any
}

const routes:Array<TypeOfRouterItem> = [
    {   path: '/',
        exact: true,
        component: Home,
    },
];



interface TypeOfMainRouter{

}

const MainRouter:React.SFC<TypeOfMainRouter> = () => {
  // const [ navOpenState, setNavOpenState ] = useState({
  //   isOpen: true,
  //   width: 304,
  // })

  // const getChildContext = () => ({navOpenState});
  // const appWithPersistentNav = () => (props:any) => {
  //   debugger
  //   return (
  //   <App
  //     onNavResize={onNavResize}
  //     {...props}
  //   />
  // )}
  // const onNavResize = (navOpenState:any) => {
  //   setNavOpenState(navOpenState);
  // }
  return(
    <Provider store={store}>
      <BrowserRouter>
        <Page
          navigation={<StarterNavigation/>}
        >
          {renderRoutes(routes)}
        </Page>

      </BrowserRouter>
    </Provider>
  )
}
export default MainRouter;
