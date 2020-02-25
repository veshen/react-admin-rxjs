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
    case getType(actions.homePongAction):
      return { ...state, isPinging: false };
    case getType(actions.todoListAddItemAction):
      return { ...state, toDoList : [...state.toDoList,{text:action.payload.text,id:action.payload.text+'a'}]};
    // case getType(actions.todoListFetchAddItemAction):
    //   return { ...state, toDoList : [...state.toDoList,...action.payload]};
    default:
      return state;
  }
};
