import { combineReducers } from "redux";

import { pingpongReducer, pingpongState } from "./pingpongReducer";
import { starterNavigationReducer, starterNavigationState } from "./starterNavigationReducer";

export type RootState = {
  pingpong: pingpongState;
  starterNavigation: starterNavigationState;
};

const reducers = combineReducers({
  pingpong: pingpongReducer,
  starterNavigation: starterNavigationReducer
});

export default reducers;
