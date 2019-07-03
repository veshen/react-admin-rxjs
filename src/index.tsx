import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import store from './store/store'
// import routes from './routes-config.js'
import Home from './pages/home';
import Login from './pages/login';
interface TypeOfRouterItem {
    path : string
    exact? : boolean
    component : JSX.Element
}
const routes:[TypeOfRouterItem] = [
    {   path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/login',
        component: Login,
    },
    // {
    //     path: '/user',
    //     component: User,
    // },
    // {
    //     path: '*',
    //     component: NotFound
    // }
];
ReactDOM.render(
  <Provider store={store}>
    <Router>{renderRoutes(routes)}</Router>
  </Provider>,
  document.getElementById('root')
)
