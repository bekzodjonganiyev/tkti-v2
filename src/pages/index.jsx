import { lazy } from "react";

import { Home } from "./home/Home";

const AboutUs = lazy(() => import("./institut/about_us").then(module => ({default: module.AboutUs})))
const Login = lazy(() => import("./login/Login").then(module => ({default: module.Login})))


export {
    Home,
    AboutUs,
    Login
}