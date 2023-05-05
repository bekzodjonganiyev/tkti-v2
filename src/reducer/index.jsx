import { combineReducers } from "redux";

import { aboutUsReducer } from "../pages/institut/about_us";

export const rootReducers = combineReducers({
    aboutUs: aboutUsReducer
})