import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { UserLayout, AdminLayout } from "./components/layout";
import { AddForm2, ProtectedRoute } from "./components";

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
  ResearchView,

  //Media
  Media,

  //Rahbariyat
  Lidership,
  LidershipCreate,
  LidershipEdit,

  //Fakultet
  Faculty,
  FacultyCreate,
  FacultyEdit,

  //Kafedra
  Kafedra,
  KafedraCreate,
  KafedraEdit,

  //Bo'lim
  Department,
  DepartmentCreate,
  DepartmentEdit,

  //Markaz
  Center,
  CenterCreate,
  CenterEdit,

  //Yangiliklar
  News,
  NewsCreate,
  NewsEdit,

  // Xodimlar
  Employees,
  EmployeesCreate,
  EmployeesEdit

} from "./pages/admin";
import { Faoliyat } from "./pages/admin/foliyat";
import FaoliyatCreate from "./pages/admin/foliyat/FaoliyatCreate";
import { FaoliyatEdit } from "./pages/admin/foliyat/edit";
import { FaoliyatView } from "./pages/admin/foliyat/view";
import { FaoliyatChildEdit } from "./pages/admin/foliyat/childEdit";


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

          <Route 
            path="institute" 
            element={<AddForm2 
            hasSelect={true} 
            selectUrl={"Fak_data/all"} url={"Kafedra_data/add"}/>}
          />

          <Route path="lidership" element={<Lidership />} />
          <Route path="lidership/add" element={<LidershipCreate />} />
          <Route path="lidership/edit/:id" element={<LidershipEdit />} />

          <Route path="employees" element={<Employees />} />
          <Route path="employees/add" element={<EmployeesCreate />} />
          <Route path="employees/edit/:id" element={<EmployeesEdit />} />

          <Route path="faculty" element={<Faculty />} />
          <Route path="faculty/add" element={<FacultyCreate />} />
          <Route path="faculty/edit/:id" element={<FacultyEdit />} />

          <Route path="kafedra" element={<Kafedra />} />
          <Route path="kafedra/add" element={<KafedraCreate />} />
          <Route path="kafedra/edit/:id" element={<KafedraEdit />} />

          <Route path="department" element={<Department />} />
          <Route path="department/add" element={<DepartmentCreate />} />
          <Route path="department/edit/:id" element={<DepartmentEdit />} />

          <Route path="center" element={<Center />} />
          <Route path="center/add" element={<CenterCreate />} />
          <Route path="center/edit/:id" element={<CenterEdit />} />

          <Route path="news" element={<News />} />
          <Route path="news/add" element={<NewsCreate />} />
          <Route path="news/edit/:id" element={<NewsEdit />} />

          <Route path="int_connections" element={<XalqaroAloqa />} />
          <Route path="int_connections/add" element={<XalqaroCreate />} />
          <Route path="int_connections/edit/:page/:id" element={<XalqaroChildEdit />}/>
          <Route path="int_connections/view/:page/:id" element={<XalqaroView />} />

          <Route path="pressclub" element={<Pressclub />} />
          <Route path="pressclub/add" element={<PressclubCreate />} />
          <Route path="pressclub/edit/:page/:id" element={<PressclubChildEdit />} />
          <Route path="pressclub/view/:page/:id" element={<PressclubView />} />

          <Route path="student" element={<Student />} />
          <Route path="student/add" element={<StudentCreate />} />
          <Route path="student/edit/:page/:id" element={<StudentChildEdit />} />
          <Route path="student/view/:page/:id" element={<StudentView />} />

          <Route path="faoliyat/add" element={<FaoliyatCreate/>} />
          <Route path="faoliyat/edit/:id" element={<FaoliyatEdit/>} />
          <Route path="faoliyat/edit/child/:id" element={<FaoliyatChildEdit/>} />
          <Route path="faoliyat/view/:page/:id" element={<FaoliyatView/>} />
          <Route path="faoliyat" element={<Faoliyat/>} />

          <Route path="education" element={<Education />} />
          <Route path="education/add" element={<EducationCreate />} />
          <Route path="education/edit/:page/:id" element={<EducationChildEdit />} />
          <Route path="education/view/:page/:id" element={<EducationView />} />

          <Route path="research" element={<Research />} />
          <Route path="research/edit/:page/:id" element={<ResearchChildEdit />} />
          <Route path="research/view/:page/:id" element={<ResearchView />} />
          <Route path="research/add" element={<ResearchCreate />} />


          <Route path="students" element={<Student />} />
          <Route path="students/add" element={<StudentCreate />} />
          <Route path="students/edit/:page/:id" element={<StudentChildEdit />} />
          <Route path="students/view/:page/:id" element={<StudentView />} />

          <Route path="admission" element={<Qabul />} />
          <Route path="admission/add" element={<QabulCreate />} />
          <Route path="admission/edit/:page/:id" element={<QabulChildEdit />} />
          <Route path="admission/view/:page/:id" element={<QabulView />} />

          <Route path="my-tkti" element={<MyInstitute />} />
          <Route path="my-tkti/add" element={<MyInstituteCreate />} />
          <Route path="my-tkti/edit/:page/:id" element={<MyInstituteChildEdit />} />
          <Route path="my-tkti/view/:page/:id" element={<MyInstituteView />} />

          <Route path="media" element={<Media />}/>
        </Route>
        <Route path="*" element={<h1>404</h1>}/>
      </Routes>
    </div>
  );
}

export default App;
