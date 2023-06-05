import { lazy } from "react";

import { Home } from "./home/Home";

// import {LatestNews} from "./latest_news/LatestNews";
// import {ActualNews} from "./actual_news/ActualNews";
// import {VideoNews} from "./video_news/VideoNews";
const AboutUs = lazy(() => import("./institut/about_us").then(module => ({default: module.AboutUs})))




export {
    // LatestNews,
    // ActualNews,
    // VideoNews,
  
    AboutUs,
    Home
}