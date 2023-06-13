import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";


import { UserLayout, AdminLayout } from "./components/layout";
import { Details } from "./components/details";
import TreeInstitute from "./components/tree/TreeComp"
import {
  ProtectedRoute,
  SplitterComponent,
  TabComponent,
  UniversalComponent,
} from "./components";

import {  Home } from "./pages";
import { AboutUS } from "./pages/institut/aboutUs";
import { Mission} from "./pages/institut/mission";
import {ContactUs} from "./pages/institut/contactUs/ContactUs"
import WorkPlan from "./pages/institut/workPlan";
import Corruption from "./pages/institut/corrupsion/Corrupsion";
import History from "./pages/institut/history";
import { News } from "./pages/news";



function App() {


  return (
    <div className={`h-screen`}>
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
          <Route path="institut/korrupsiya" element={<Corruption />} />
          <Route path="institut/tuzilma" element={<TreeInstitute/>} />
          <Route path="elon" element={<TreeInstitute />} />
          <Route path="news" element={<News />} />
          <Route path="test" element={<TabComponent />} />
          <Route path="/institute/structute/:element/:name/:id" element={<TabComponent />} />
          <Route path="/institute/structute/:name/:id" element={<TabComponent />} />
          
          {/* TODO - splitter va universal componentlarni optimizatsiya qilish kerak, misol uchun memoga o'rash kerek va hk */}
          <Route path="/:page/:id/"  element={<SplitterComponent><UniversalComponent /></SplitterComponent> } />
          <Route path="/:page/:id/:name" element={<UniversalComponent />} />
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
