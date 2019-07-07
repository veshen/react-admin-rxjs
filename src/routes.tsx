import * as React from 'react'
import { Route, Switch } from 'react-router-dom'


const renderRoutes = (routes:[], extraProps = {}, switchProps = {}) =>
routes ? (
    <Switch {...switchProps}>
        {routes.map((route:any, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={props => (
            <route.component {...props} {...extraProps} route={route} />
          )}
        />
      ))}
    </Switch>
  ) : null;
 export default renderRoutes;
