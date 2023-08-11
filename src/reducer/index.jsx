import { combineReducers } from "redux";

import { aboutUsReducer } from "../pages/institut/about_us";

import { xalqaroParentReducer, xalqaroChildReducer } from "../pages/admin/xalqaro_aloqa";
import { pressclubParentReducer, pressclubChildReducer } from "../pages/admin/press_club";
import { educationParentReducer, educationChildReducer } from "../pages/admin/education";
import { myInstituteChildReducer, myInstituteParentReducer } from "../pages/admin/my_institute";
import { studentChildReducer, studentParentReducer } from "../pages/admin/student";
import { researchChildReducer, researchParentReducer } from "../pages/admin/research";
import { qabulChildReducer, qabulParentReducer } from "../pages/admin/qabul";

import { userReducer } from "../pages/login/reducer";
import { mediaReducer } from "../pages/admin/media";
import { form2Reducer } from "../components/form_comp2";
import { newsReducer } from "../pages/admin/news";
import { lidershipChildReducer, lidershipParentReducer } from "../pages/admin/lidership";
import { faoliyatReducer } from "../pages/admin/foliyat";

export const rootReducers = combineReducers({
  aboutUs: aboutUsReducer,

  xalqaroParent: xalqaroParentReducer,
  xalqaroChild: xalqaroChildReducer,

  studentParent: studentParentReducer,
  studentChild: studentChildReducer,

  researchParent: researchParentReducer,
  researchChild: researchChildReducer,

  educationParent: educationParentReducer,
  educationChild: educationChildReducer,
  
  lidershipParent: lidershipParentReducer,
  lidershipChild: lidershipChildReducer,

  pressclubParent: pressclubParentReducer,
  pressclubChild: pressclubChildReducer,

  myInstituteParent: myInstituteParentReducer,
  myInstituteChild: myInstituteChildReducer,

  qabulChild: qabulChildReducer,
  qabulParent: qabulParentReducer,

  user: userReducer,
  media: mediaReducer,
  form2: form2Reducer,
  news: newsReducer,
  employees: newsReducer,
  faoliyat: faoliyatReducer
});
