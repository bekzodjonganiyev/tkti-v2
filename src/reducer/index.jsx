import { combineReducers } from "redux";
import { detailsReducer } from "../components/details";
import { aboutUsReducer } from "../pages/institut/about_us";
import { bannerReducer } from "../components/banner";
import { genericComReducer } from "../components/universal_component";
import { splitterCompReducer } from "../components/splitter_component";
import { newsReducer } from "../pages/news";

export const rootReducers = combineReducers({
  details: detailsReducer,
  aboutUs: aboutUsReducer,
  banner: bannerReducer,
  genericCom: genericComReducer,
  splitterComp: splitterCompReducer,
  news: newsReducer
});
