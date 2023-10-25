import { lazy } from "react";

import { Home } from "./home/Home";
import { InteractiveLink } from "./InteractiveLInk/index";
import { MoreNews } from "./MoreDetails";
import { News } from "./news";
import { Statistics } from "./statistics";
import { UsefulLinks } from "./usefulLinks";
import { AboutUS } from "./institut/aboutUs";
import { ActivityDocuments } from "./institut/activitydocuments/ActivityDocuments";
import { ContactUs } from "./institut/contactUs/ContactUs";
import { Corruption } from "./institut/corrupsion/Corrupsion";
import { History } from "./institut/history";
import { Mission } from "./institut/mission";
import { WorkPlan } from "./institut/workPlan";
import { Brm } from "./brm/Brm"
import { BrmSingle } from "./brm/BrmSingle"

const AboutUs = lazy(() => import("./institut/about_us").then(module => ({ default: module.AboutUs })))




export {
    AboutUs,
    Home,
    AboutUS,
    ActivityDocuments,
    ContactUs,
    Corruption,
    History,
    InteractiveLink,
    Mission,
    MoreNews,
    News,
    Statistics,
    UsefulLinks,
    WorkPlan,
    Brm,
    BrmSingle
}