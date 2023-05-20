import { combineReducers } from "redux";

import { aboutUsReducer } from "../pages/institut/about_us";
import {bannerReducer} from '../components/banner';
import {newsReducer} from '../pages/news';
import { announcementReducer} from '../pages/announcement';
import {videoNewsReducer} from '../pages/videoNews';


export const rootReducers = combineReducers({
    aboutUs: aboutUsReducer,
    banner:bannerReducer,
    news:newsReducer,
    announcement: announcementReducer,
    videoNews: videoNewsReducer
    
    
})