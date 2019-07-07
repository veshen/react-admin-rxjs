import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import  rootEpic  from './epics';
// import pingReducer from './reducers/pingpong';
import reducers, { RootState } from "./reducers";
import * as api from './../axios/index'

const epicMiddleware = createEpicMiddleware({
  dependencies: { ...api }
});

const store = createStore(
  reducers,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);

export default store
