import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { UserLayout, AdminLayout } from "./components/layout";
import { Details } from "./components/details";
import TreeInstitute from "./components/tree/TreeComp";
import {
  ProtectedRoute,
  SplitterComponent,
  TabComponent,
  UniversalComponent,
} from "./components";

import {
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
} from "./pages";
import { SillabusPage } from "./components/sillabus/SillabusPage";

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
          <Route path=":lang/institut/biz-haqimiqda" element={<AboutUS />} />
          <Route path=":lang/institut/bog'nalish" element={<ContactUs />} />
          <Route path=":lang/institut/Missiyamiz" element={<Mission/>} />
          <Route path=":lang/institut/ish-reja" element={<WorkPlan />} />
          <Route path=":lang/institut/tarix" element={<History/>} />
          <Route path=":lang/institut/korrupsiya" element={<Corruption />} />
          <Route path=":lang/institut/structure" element={<TreeInstitute/>} />
          <Route path="/filter/result" element={<SillabusPage/>} />
          <Route path=":lang/elon" element={<TreeInstitute />} />
          <Route path=":lang/news" element={<News />} />
          <Route path=":lang/foydali-havolalar" element={<InteractiveLink />} />
          <Route path="test" element={<TabComponent />} />
          <Route path=":lang/institute/structute/:element/:name/:id" element={<TabComponent />} />
          <Route path=":lang/institute/structute/:name/:id" element={<TabComponent />} />
          
          {/* TODO - splitter va universal componentlarni optimizatsiya qilish kerak, misol uchun memoga o'rash kerek va hk */}
          <Route path=":lang/:page/:id/"  element={<SplitterComponent><UniversalComponent /></SplitterComponent> } />
          <Route path=":lang/:page/details/:id" element={<UniversalComponent />} />
          <Route path=":lang/news/:id" element={<Details />} />
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
