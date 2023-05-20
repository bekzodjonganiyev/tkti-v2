import { lazy } from "react";

import { Home } from "./home/Home";

const AboutUs = lazy(() => import("./institut/about_us").then(module => ({default: module.AboutUs})))

export {

    AboutUs,
    Home
}