import React from 'react';

import { BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'

import Page from '@atlaskit/page';
import StarterNavigation from '../components/StarterNavigation/StarterNavigation.connect';
import Home from './../pages/home/index.connect';
import SettingsPage from '../pages/SettingsPage';

import store from './../store/store'

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
    {   path: '/settings',
        component: SettingsPage,
    },
];

interface TypeOfMainRouter{

}

const MainRouter:React.SFC<TypeOfMainRouter> = () => {
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