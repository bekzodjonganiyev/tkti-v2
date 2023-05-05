import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { UserLayout, AdminLayout } from "./components/layout";
import { ProtectedRoute } from "./components";

import { AboutUs } from "./pages";

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
          <Route
            index
            element={
              <Suspense
            
              >
                <Home />
              </Suspense>
            }
          />
          <Route index element={<h1 className="text-3xl">HOME</h1>} />
          <Route path="a" element={<AboutUs />} />
          <Route path="b" element={<h1 className="text-3xl">HOME B</h1>} />
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
