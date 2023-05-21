import { combineReducers } from "redux";

import { aboutUsReducer } from "../pages/institut/about_us";
import { univerUsReducer } from "../pages/admin/institust/reducer";
import { fakultetUsReducer } from "../pages/admin/institust/childReducer";
export const rootReducers = combineReducers({
    aboutUs: aboutUsReducer,
    univer: univerUsReducer,
    fakultet: fakultetUsReducer
})