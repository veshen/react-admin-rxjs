import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import MainRouter from './modules/MainRouter';

import store from './store/store'
// import routes from './routes-config.js'
import Home from './pages/home/index.connect';
import HomePage from './pages/HomePage';
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
    {
        path: '/homePage',
        component: HomePage,
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
// ReactDOM.render(
//   <Provider store={store}>
//     <Router>{renderRoutes(routes)}</Router>
//   </Provider>,
//   document.getElementById('root')
// )

// eslint-disable-next-line no-undef
ReactDOM.render(<MainRouter />, document.getElementById('root'));
