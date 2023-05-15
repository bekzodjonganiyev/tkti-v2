import { lazy } from "react";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { UserLayout, AdminLayout } from "./components/layout";
import { ProtectedRoute } from "./components";

import { AboutUs, Home, Institute } from "./pages";

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
          {adminPages.map((item) => (
            <Route
              key={item.route}
              path={item.route}
              Component={lazy(() =>
                import(
                  /* @vite-ignore */ `./pages/admin/${item.component}`
                ).then((module) => ({
                  default: module[`${item.component}`],
                }))
              )}
            />
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
