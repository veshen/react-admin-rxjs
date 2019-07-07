import { createAction } from "typesafe-actions";

import { HOME_PING, TODO_FETCH_DATA, ADD_TODOLIST_ITEM } from "./../constants";

export const homePingAction = createAction(HOME_PING);

export const fetchTodoListAction = createAction(TODO_FETCH_DATA);

export const todoListAddItemAction = createAction(ADD_TODOLIST_ITEM, resolve => (text: string) => resolve({text}));
//
// export const weatherErrorAction = createAction(WEATHER_ERROR, resolve => (error: Error) => resolve(error));
//
// export const mapReadyAction = createAction(MAP_READY);

interface payloadType {
    text : string
}

interface TypeObj {
    type : string;
    payload : payloadType
}

interface typeOfTodo {
    ( text : string ) : TypeObj
}

export const ping = () => ({ type: 'PING' });
export const addTodoListItem : typeOfTodo = (text) => ({ type: 'ADD_TODOLIST_ITEM',payload: {text}});
// export const fetchTodoList = () => ({ type: '@FETCH_TODOLIST_DATA' });
