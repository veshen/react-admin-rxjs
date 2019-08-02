import { ActionType, getType } from 'typesafe-actions';
import * as actions from "./../actions";
type Action = ActionType<typeof actions>;

export interface starterNavigationState{
    isPinging : boolean
    navOpenState : {
      isOpen : boolean
      width : number
    }
}

const initalState = {
    isPinging: false,
    navOpenState : {
      isOpen : true,
      width : 304
    }
}

export const starterNavigationReducer = (state : starterNavigationState = initalState, action:any): starterNavigationState => {
  switch (action.type) {
    case getType(actions.activeMenuIsOpen):
      return { ...state, navOpenState:{ ...state.navOpenState, ...action.payload} };
    default:
      return state;
  }
};
