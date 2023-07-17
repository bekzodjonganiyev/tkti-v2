import { combineReducers } from "redux";

import { aboutUsReducer } from "./about_us";

const rootReducer = combineReducers({
  aboutUs: aboutUsReducer,
});

export default rootReducer;
