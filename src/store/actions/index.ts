import { createAction } from "typesafe-actions";

import { HOME_PING, HOME_PONG, TODO_FETCH_DATA, ADD_TODOLIST_ITEM, ADD_TODOLIST_FETCH_ITEM } from "./../constants";

export const homePingAction = createAction(HOME_PING);
export const homePongAction = createAction(HOME_PONG);

export const fetchTodoListAction = createAction(TODO_FETCH_DATA);

export const todoListFetchAddItemAction = createAction(ADD_TODOLIST_FETCH_ITEM, resolve => (item: any) => resolve(item));
export const todoListAddItemAction = createAction(ADD_TODOLIST_ITEM, resolve => (text: string) => resolve({text}));
//
// export const weatherErrorAction = createAction(WEATHER_ERROR, resolve => (error: Error) => resolve(error));
//
// export const mapReadyAction = createAction(MAP_READY);


export const ping = () => ({ type: 'PING' });
