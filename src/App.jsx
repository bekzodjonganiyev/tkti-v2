import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { UserLayout, AdminLayout } from "./components/layout";
import { ProtectedRoute, UniversalComponent } from "./components";

import { AboutUs, Home } from "./pages";
import { News } from "./pages/news";
import { Announcement } from "./pages/announcement";

import { Details, DetailsElon } from "./components/details";
function App() {
  return (
    <div className="h-screen">
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
          <Route path="news" element={<News/>} />
          <Route path="elon" element={<Announcement/>} />
          <Route path="/:page/:id/:name" element={<UniversalComponent />}/>
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
