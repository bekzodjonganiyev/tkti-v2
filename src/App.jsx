import { lazy } from "react";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { UserLayout, AdminLayout } from "./components/layout";
import { ProtectedRoute } from "./components";

import { AboutUs, Home } from "./pages";
import { UnverAdd , Institute } from "./pages/admin";
import { View } from "./pages/admin/View";
import { adminPages } from "./config/adminPages.config";

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
          <Route path="b" element={<h1 className="text-3xl">HOME B</h1>} />
        </Route>

        <Route
          path="adminPanel"
          element={
            <Suspense fallback={<h1>Loading ...</h1>}>
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            </Suspense>
          }
        >
          <Route index element={<h1 className="text-3xl">Dashboard</h1>} />
          
            
        <Route path="institute" element = {<Institute/>}/>
        <Route path="/adminPanel/:name/add" element={<UnverAdd/>}/>
        <Route path="/adminPanel/:name/view/:id" element={<View/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
