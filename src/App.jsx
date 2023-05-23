import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { UserLayout, AdminLayout } from "./components/layout";
import { ProtectedRoute, EditForm, ViewComponent, AddForm } from "./components";

import { AboutUs, Home } from "./pages";
import {
  Institute,
  Research,
  Pressclub,
  PressclubCreate,
  PressclubView,
  PressclubChildEdit,
  XalqaroAloqa,
  XalqaroCreate,
  XalqaroView,
  XalqaroChildEdit,
  ResearchCreate,
  ResearchView,
  ResearchChildEdit,
  Education,
  EducationView,
  EducationCreate,
  EducationChildEdit,
} from "./pages/admin";

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

          <Route path="institute" element={<Institute />} />
          <Route path="research" element={<Research />} />

          <Route path="pressclub" element={<Pressclub />} />
          <Route path="pressclub/edit/:id" element={<PressclubChildEdit />} />
          <Route path="pressclub/view/:id" element={<PressclubView />} />
          <Route path="pressclub/add" element={<PressclubCreate />} />

          <Route path="education" element={<Education />} />
          <Route
            path="education/edit/:id"
            element={<EducationChildEdit />}
          />
          <Route path="education/view/:id" element={<EducationView/>} />
          <Route path="education/add" element={<EducationCreate />} />
          

          <Route path="int_connections" element={<XalqaroAloqa />} />
          <Route
            path="int_connections/edit/:id"
            element={<XalqaroChildEdit />}
          />
          <Route path="int_connections/view/:id" element={<XalqaroView />} />
          <Route path="int_connections/add" element={<XalqaroCreate />} />

          <Route path="research/edit/:id" element={<ResearchChildEdit />} />
          <Route path="research/view/:id" element={<ResearchView />} />
          <Route path="research/add" element={<ResearchCreate />} />

          {/* <Route path="/adminPanel/:name/add" element={<AddForm />} />
          <Route
            path="/adminPanel/:name/view/:id"
            element={<ViewComponent />}
          />
          <Route path="/adminPanel/:name/edit/:id" element={<EditForm />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
