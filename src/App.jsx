import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";


import { UserLayout, AdminLayout } from "./components/layout";
import {
  ProtectedRoute,
  SplitterComponent,
  UniversalComponent,
} from "./components";

import { AboutUs, Home } from "./pages";
import { AboutUS } from "./pages/institut/aboutUs";
import { Mission} from "./pages/institut/mission";
import {ContactUs} from "./pages/institut/contactUs/ContactUs"
// import { News } from "./pages/news";
import { Announcement } from "./pages/announcement";

import WorkPlan from "./pages/institut/workPlan";
import Corruption from "./pages/institut/corrupsion/Corrupsion";
import { Details, DetailsElon } from "./components/details";
import History from "./pages/institut/history";

function App() {


  return (
    <div className={open ? "h-screen--open" : "h-screen"}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div className="max-w-3xl mx-auto px-4 py-6 space-y-6 container">
                  <div className="animate-pulse">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-8 bg-gray-200 rounded"></div>
                    <div className="h-6 bg-gray-200 rounded"></div>
                  </div>
                </div>
              }
            >
              <UserLayout />
            </Suspense>
          }
        >
          <Route index element={<Home />} />
          <Route path="institut/biz-haqimiqda" element={<AboutUS />} />
          <Route path="institut/bog'nalish" element={<ContactUs />} />
          <Route path="institut/Missiyamiz" element={<Mission/>} />
          <Route path="institut/ish-reja" element={<WorkPlan />} />
          <Route path="institut/tarix" element={<History/>} />
          {/* <Route path="test" element={<Test/>} /> */}
          <Route path="institut/korrupsiya" element={<Corruption />} />
          {/* <Route path="news" element={<News />} /> */}
          <Route path="elon" element={<Announcement />} />
          <Route
            path="/:page/:id/"
            element={
              <SplitterComponent>
                <UniversalComponent />
              </SplitterComponent>
            }
          />
          <Route path="/:page/:id/:name" element={<UniversalComponent />} />
          <Route path="/elon/:id" element={<DetailsElon />} />
          <Route path="/news/:id" element={<Details />} />
        </Route>

        <Route
          path="adminPanel"
          element={
            <Suspense>
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            </Suspense>
          }
        >
          <Route index element={<h1 className="text-3xl">Dashboard</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
