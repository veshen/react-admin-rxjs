import { combineReducers } from "redux";

import { pingpongReducer, pingpongState } from "./pingpongReducer";

export type RootState = {
  pingpong: pingpongState;
};

const reducers = combineReducers({
  pingpong: pingpongReducer,
});

export default reducers;
