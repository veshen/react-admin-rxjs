import { Epic } from 'redux-observable';
import { map, switchMap, filter, mapTo, delay } from 'rxjs/operators'; //catchError

import { ActionType, isActionOf } from 'typesafe-actions'; //
import * as actions from "./../actions";

import { RootState } from "./../reducers";
type Action = ActionType<typeof actions>;

const pingEpic: Epic<Action, Action, RootState> = (action$, store) =>
    action$.pipe(
        filter(isActionOf(actions.homePingAction)),
        delay(1000),
        map(actions.homePongAction)
    );

const fetchTodolistEpic: Epic<Action, Action, RootState, any> = (action$, store, api) =>
    action$.pipe(
        filter(isActionOf(actions.fetchTodoListAction)),
        switchMap(()=>api.getTodoList()),
        // catchError( error => console.log('error=====>',error) ),
        map(item => actions.todoListFetchAddItemAction(item))
    );

export default [
    pingEpic,
    fetchTodolistEpic,
];
