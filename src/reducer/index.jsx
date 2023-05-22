import { combineReducers } from "redux";

import { aboutUsReducer } from "../pages/institut/about_us";
import { univerUsReducer } from "../pages/admin/institust/reducer";
import { fakultetUsReducer } from "../pages/admin/institust/childReducer";

import { xalqaroParentReducer, xalqaroChildReducer } from "../pages/admin/xalqaro_aloqa";
import { studentChildReducer, studentParentReducer } from "../pages/admin/student";
import { qabulChildReducer, qabulParentReducer } from "../pages/admin/qabul";

export const rootReducers = combineReducers({
  aboutUs: aboutUsReducer,
  univer: univerUsReducer,
  fakultet: fakultetUsReducer,

  xalqaroParent: xalqaroParentReducer,
  xalqaroChild: xalqaroChildReducer,

  studentParent:studentParentReducer,
  studentChild:studentChildReducer,

  qabulParent:qabulParentReducer,
  qabulChild:qabulChildReducer
});
