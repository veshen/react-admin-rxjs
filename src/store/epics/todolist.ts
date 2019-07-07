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
        mapTo({ type: 'PONG' })
    );

// const todolistEpic: Epic<Action, Action, RootState> = (action$, store, api) =>
//     action$.pipe(
//         filter(isActionOf(actions.todoListAddItemAction)),
//         map(item => {
//             return {type: 'ADD_TODOLIST_ITEM_RE',text:item.payload}
//         }),
//     );

const fetchTodolistEpic: Epic<Action, Action, RootState, any> = (action$, store, api) =>
    action$.pipe(
        filter(isActionOf(actions.fetchTodoListAction)),
        switchMap(()=>api.getTodoList()),
        // catchError( error => console.log('error=====>',error) ),
        map(item => {
            return {type: 'ADD_FETCH_TODOLIST_ITEM',payload:item}
        })
    );

export default [
    pingEpic,
    // todolistEpic,
    fetchTodolistEpic,
];
