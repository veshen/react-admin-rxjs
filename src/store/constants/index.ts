// NOTE
// DO NOT USE dynamic string operations(like template string) as action type property.
// see more details: https://github.com/piotrwitek/typesafe-actions#--the-actions
export const HOME_PING   = "@@home/PING";
export const HOME_PONG   = "@@home/PONG";
export const TODO_FETCH_DATA = "@@todo/FETCHLIST";
export const ADD_TODOLIST_ITEM = "@@todo/ADDITEM";
export const ADD_TODOLIST_FETCH_ITEM = "@@todo/ADDFETCHITEM";

// export const WEATHER_ERROR = "@@weather/ERROR";
export const ACTIVE_MENU_STATE = "@@starterNavigation/ACTIVE_IS_OPEN";
