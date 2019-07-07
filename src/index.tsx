import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import store from './store/store'
// import routes from './routes-config.js'
import Home from './pages/home/index.connect';
import Login from './pages/login';
// import NotFound from './404';
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
