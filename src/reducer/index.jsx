import { combineReducers } from "redux";

import { aboutUsReducer } from "../pages/institut/about_us";
import { univerUsReducer } from "../pages/admin/institust/reducer";
import { fakultetUsReducer } from "../pages/admin/institust/childReducer";

import { xalqaroParentReducer, xalqaroChildReducer } from "../pages/admin/xalqaro_aloqa";

export const rootReducers = combineReducers({
  aboutUs: aboutUsReducer,
  univer: univerUsReducer,
  fakultet: fakultetUsReducer,

  xalqaroParent: xalqaroParentReducer,
  xalqaroChild: xalqaroChildReducer,
});
