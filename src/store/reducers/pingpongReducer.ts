import { ActionType, getType } from 'typesafe-actions';
import * as actions from "./../actions";
type Action = ActionType<typeof actions>;

let defaultList = [
    {id: '0', text: '天气不错哦!!!', complete: false},
    {id: '1', text: '天气不错哦!!!', complete: false},
    {id: '2', text: '出去玩啊!!!', complete: true},
]

interface toDoListItem {
    id : string;
    text : string;
    complete? : boolean
}

export interface pingpongState{
    isPinging : boolean;
    toDoList : Array<toDoListItem>
}

const initalState = {
    isPinging: false,
    toDoList : defaultList
}

export const pingpongReducer = (state : pingpongState = initalState, action:any): pingpongState => {
  switch (action.type) {
    case getType(actions.homePingAction):
        console.log(action)
      return { ...state, isPinging: true };
    case 'PONG':
      return { ...state, isPinging: false };
    case getType(actions.todoListAddItemAction):
    // console.log(action)
    // return Object.assign({}, state,{toDoList:[...state.toDoList,action.payload]})
      return { ...state, toDoList : [...state.toDoList,{text:action.action.text,id:action.action.text+'a'}]};
    case 'ADD_FETCH_TODOLIST_ITEM':
      return { ...state, toDoList : [...state.toDoList,...action.payload]};
    default:
      return state;
  }
};
