import React from 'react';

import { BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { Route } from "react-router-dom";

import BasicLayout from "./../layouts/BasicLayout.connect";

import ThreePage from './../pages/three/index'
import Home from './../pages/home/index.connect';
import HomePage from './../pages/HomePage';
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
    {   path: '/homePage',
        component: HomePage,
    },
];

interface TypeOfMainRouter{

}

const MainRouter:React.SFC<TypeOfMainRouter> = () => {
  return(
    <Provider store={store}>
      <BrowserRouter>
        {
          false?
          <Route exact path="/" component={ThreePage} />
          :<BasicLayout>
            {renderRoutes(routes)}
          </BasicLayout>
        }
      </BrowserRouter>
    </Provider>
  )
}
// const MainRouter:React.SFC<TypeOfMainRouter> = () => {
//   return(
//     <Provider store={store}>
//       <BrowserRouter>
//         <Route exact path="/" component={ThreePage} />
//       </BrowserRouter>
//     </Provider>
//   )
// }
export default MainRouter;
