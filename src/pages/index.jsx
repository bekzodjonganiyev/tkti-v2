import { lazy } from "react";

import { Home } from "./home/Home";

const AboutUs = lazy(() => import("./institut/about_us").then(module => ({default: module.AboutUs})))
const AntiCorruption = lazy(() => import("./institut/anti_corruption").then(module => ({default: module.AntiCorruption})))
const Graduets = lazy(() => import("./institut/graduets").then(module => ({default: module.Graduets})))
const History = lazy(() => import("./institut/history").then(module => ({default: module.History})))
const InteractiveServices = lazy(() => import("./institut/interactive_services").then(module => ({default: module.InteractiveServices})))
const Mission = lazy(() => import("./institut/mission").then(module => ({default: module.Mission})))
const OurLiability = lazy(() => import("./institut/our_liability").then(module => ({default: module.OurLiability})))
const Structure = lazy(() => import("./institut/structure").then(module => ({default: module.Structure})))




// const Institute = lazy(() => import("./admin/Institute").then(module => ({default: module.Institute})))

export {
    Home,
    // Institute,
    AboutUs,
    AntiCorruption,
    Graduets, 
    History, 
    InteractiveServices, 
    Mission, 
    OurLiability, 
    Structure
}