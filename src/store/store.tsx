import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { ActionType } from "typesafe-actions";

import rootEpic  from './epics';
import reducers, { RootState } from "./reducers";
import * as api from './../axios/index'
import * as actions from "./actions";

type Action = ActionType<typeof actions>;

const epicMiddleware = createEpicMiddleware<Action, Action, RootState>({
  dependencies: { ...api }
});

const store = createStore(
  reducers,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);

export default store
