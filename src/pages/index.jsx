import { lazy } from "react";

const AboutUs = lazy(() => import("./institut/about_us").then(module => ({default: module.AboutUs})))

export {
    AboutUs
}