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
import KafedraComponent from "./pages/structure/Kafedra";
import FacultetComponent from "./pages/structure/fakultet";
import BolimMarkaz from "./pages/structure/BolimMarkaz";
import FakultetSingle from "./pages/structure/fakultet/Single";
import KafedraSingle from "./pages/structure/Kafedra/Single";
import BolimMarkazSingle from "./pages/structure/BolimMarkaz/Single";
// import FacultetComponent from "./pages/structure/fakultet/index.jsx";
// import FakultetSingle from "./pages/structure/fakultet/Single.jsx";
// import BolimMarkaz from "./pages/structure/bolimMarkazi/index.jsx";
// import BolimMarkazSingle from "./pages/structure/bolimMarkazi/Single.jsx";
// import KafedraComponent from "./pages/structure/kafedra/index.jsx";
// import KafedraSingle from "./pages/structure/kafedra/Single.jsx";

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
          <Route path={"/:lang"} element={<Home />} />
          <Route path={"/search"} element={<Home />} />
          <Route path=":lang/institut/biz-haqimiqda" element={<AboutUS />} />
          <Route path=":lang/institut/bog'nalish" element={<ContactUs />} />
          <Route path=":lang/institut/Missiyamiz" element={<Mission/>} />
          <Route path=":lang/institut/ish-reja" element={<WorkPlan />} />
          <Route path=":lang/institut/tarix" element={<History/>} />
          <Route path=":lang/institut/korrupsiya" element={<Corruption />} />
          <Route path=":lang/institut/structure" element={<TreeInstitute/>} />



          <Route path=":lang/institut/fakultetlar" element={<FacultetComponent/>} />
          <Route path=":lang/institut/kafedralar" element={<KafedraComponent/>} />
          <Route path=":lang/institut/bolim-va-markazlar" element={<BolimMarkaz/>} />
          <Route path=":lang/institut/structute/faculty/:id" element={<TabComponent/>} />
          <Route path=":lang/institut/structute/kafedra/:id" element={<TabComponent/>} />
          <Route path=":lang/institut/structute/department/:id" element={<TabComponent/>} />
          <Route path=":lang/institut/structute/center/:id" element={<TabComponent/>} />


          <Route path="/filter/result" element={<SillabusPage/>} />
          <Route path=":lang/elon" element={<TreeInstitute />} />
          <Route path=":lang/news" element={<News />} />
          <Route path=":lang/foydali-havolalar" element={<InteractiveLink />} />
          <Route path="test" element={<TabComponent />} />
          <Route path=":lang/institute/structute/:element/:name/:id" element={<TabComponent />} />
          <Route path=":lang/institute/structute/:name/:id" element={<TabComponent />} />

          {/* =--------------- Tuzilma Page uchun ---------------------------= */}
          {/*<Route path="/fakultetlar" element={<FacultetComponent />} />*/}
          {/*<Route path="/fakultetlar/:id" element={<FakultetSingle />} />*/}
          {/*<Route path="/bolimMarkaz" element={<BolimMarkaz />} />*/}
          {/*<Route path="/bolimlar/:id" element={<BolimMarkazSingle myKey='bolim' />} />*/}
          {/*<Route path="/markazlar/:id" element={<BolimMarkazSingle myKey='markaz' />} />*/}
          {/*<Route path="/kafedralar" element={<KafedraComponent />} />*/}
          {/*<Route path="/kafedralar/:id" element={<KafedraSingle />} />*/}
          
          {/* TODO - splitter va universal componentlarni optimizatsiya qilish kerak, misol uchun memoga o'rash kerek va hk */}
          <Route path=":lang/:page/:id/"  element={<SplitterComponent><UniversalComponent /></SplitterComponent> } />
          <Route path=":lang/details/:page/:id" element={<UniversalComponent />} />
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
