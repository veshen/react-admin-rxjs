import { combineEpics } from 'redux-observable';

import fetchTodolistEpic from './todolist';

const epics = combineEpics(
  ...fetchTodolistEpic,
);

export default epics
