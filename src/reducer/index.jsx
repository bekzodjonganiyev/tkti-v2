import { combineReducers } from "redux";
import { detailsReducer } from "../components/details";
import { aboutUsReducer } from "../pages/institut/about_us";
import { bannerReducer } from "../components/banner";
import { newsReducer } from "../pages/news";
import { announcementReducer } from "../pages/announcement";
import { genericComReducer } from "../components/universal_component";
import { splitterCompReducer } from "../components/splitter_component";

export const rootReducers = combineReducers({
  details: detailsReducer,
  aboutUs: aboutUsReducer,
  banner: bannerReducer,
  news: newsReducer,
  announcement: announcementReducer,
  genericCom: genericComReducer,
  splitterComp: splitterCompReducer,
});
