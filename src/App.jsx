import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { UserLayout, AdminLayout } from "./components/layout";
import {
  ProtectedRoute,
  SplitterComponent,
  UniversalComponent,
} from "./components";

import { AboutUs, Home } from "./pages";
import { News } from "./pages/news";
import { Announcement } from "./pages/announcement";
import { Details, DetailsElon } from "./components/details";

function App() {
  const { open } = useSelector((state) => state.news);

  return (
    <div className={open ? "h-screen--open" : "h-screen"}>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<h1 className="text-3xl">Loading...</h1>}>
              <UserLayout />
            </Suspense>
          }
        >
          <Route index element={<Home />} />
          <Route path="a" element={<AboutUs />} />
          <Route path="news" element={<News />} />
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
          <Route path="/elon/:id" element={< DetailsElon/>} />
          <Route path="/news/:id" element={< Details/>} />
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
