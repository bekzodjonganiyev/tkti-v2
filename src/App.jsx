import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { UserLayout, AdminLayout } from "./components/layout";
import { ProtectedRoute } from "./components";

import { AboutUs, Home, Login } from "./pages";
import { 
  // Xalqaro aloqa
  XalqaroAloqa,
  XalqaroCreate,
  XalqaroView,
  XalqaroChildEdit,

  //Education
  Education,
  EducationCreate,
  EducationView,
  EducationChildEdit,

  // My institute
  MyInstitute,
  MyInstituteCreate,
  MyInstituteChildEdit,
  MyInstituteView,
  // Qabul
  Qabul,
  QabulCreate,
  QabulChildEdit,
  QabulView,
  // Matbuot
  Pressclub,
  PressclubCreate,
  PressclubChildEdit,
  PressclubView,
  //Student
  Student,
  StudentCreate,
  StudentChildEdit,
  StudentView,
  //Researche
  Research,
  ResearchCreate,
  ResearchChildEdit,
  ResearchView
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
          <Route path="login" element={<Login />} />
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


          <Route path="int_connections" element={<XalqaroAloqa />} />
          <Route path="int_connections/add" element={<XalqaroCreate />} />
          <Route path="int_connections/edit/:id" element={<XalqaroChildEdit />}/>
          <Route path="int_connections/view/:id" element={<XalqaroView />} />

          <Route path="pressclub" element={<Pressclub />} />
          <Route path="pressclub/add" element={<PressclubCreate />} />
          <Route path="pressclub/edit/:id" element={<PressclubChildEdit />} />
          <Route path="pressclub/view/:id" element={<PressclubView />} />

          <Route path="student" element={<Student />} />
          <Route path="student/add" element={<StudentCreate />} />
          <Route path="student/edit/:id" element={<StudentChildEdit />} />
          <Route path="student/view/:id" element={<StudentView />} />


          <Route path="education" element={<Education />} />
          <Route path="education/add" element={<EducationCreate />} />
          <Route path="education/edit/:id" element={<EducationChildEdit />} />
          <Route path="education/view/:id" element={<EducationView />} />

          <Route path="research" element={<Research />} />
          <Route path="research/edit/:id" element={<ResearchChildEdit />} />
          <Route path="research/view/:id" element={<ResearchView />} />
          <Route path="research/add" element={<ResearchCreate />} />


          <Route path="students" element={<Student />} />
          <Route path="students/add" element={<StudentCreate />} />
          <Route path="students/edit/:id" element={<StudentChildEdit />} />
          <Route path="students/view/:id" element={<StudentView />} />

          <Route path="admission" element={<Qabul />} />
          <Route path="admission/add" element={<QabulCreate />} />
          <Route path="admission/edit/:id" element={<QabulChildEdit />} />
          <Route path="admission/view/:id" element={<QabulView />} />

          <Route path="my-tkti" element={<MyInstitute />} />
          <Route path="my-tkti/add" element={<MyInstituteCreate />} />
          <Route path="my-tkti/edit/:id" element={<MyInstituteChildEdit />} />
          <Route path="my-tkti/view/:id" element={<MyInstituteView />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
