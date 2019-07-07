import { combineEpics } from 'redux-observable';
// import { pingEpic, todolistEpic } from './ping';
import fetchTodolistEpic from './todolist';

const epics = combineEpics(
    // pingEpic,
    // todolistEpic,
  ...fetchTodolistEpic,
);

export default epics
