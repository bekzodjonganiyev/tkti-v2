import { combineReducers } from "redux";

import { aboutUsReducer } from "../pages/institut/about_us";
import { univerUsReducer } from "../pages/admin/institust/reducer";
import { fakultetUsReducer } from "../pages/admin/institust/childReducer";

import { xalqaroParentReducer, xalqaroChildReducer } from "../pages/admin/xalqaro_aloqa";

import { pressclubParentReducer, pressclubChildReducer } from "../pages/admin/press_club";

import { educationParentReducer, educationChildReducer } from "../pages/admin/education";

import { researchParentReducer, researchChildReducer } from "../pages/admin/research";

export const rootReducers = combineReducers({
  aboutUs: aboutUsReducer,
  univer: univerUsReducer,
  fakultet: fakultetUsReducer,

  xalqaroParent: xalqaroParentReducer,
  xalqaroChild: xalqaroChildReducer,

  educationParent: educationParentReducer,
  educationChild: educationChildReducer,

  pressclubParent: pressclubParentReducer,
  pressclubChild: pressclubChildReducer,

  researchParent: researchParentReducer,
  researchChild: researchChildReducer,
});
