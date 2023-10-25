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
  ContactUs,
  Corruption,
  History,
  InteractiveLink,
  Mission,
  News,
  WorkPlan,
  Brm,
  BrmSingle,
} from "./pages";
import { SillabusPage } from "./components/sillabus/SillabusPage";
import KafedraComponent from "./pages/structure/Kafedra";
import FacultetComponent from "./pages/structure/fakultet";
import BolimMarkaz from "./pages/structure/BolimMarkaz";
import Rectorat from "./pages/rektorat/rectorat/rectorat";
import Silbol from "./pages/simbol/Silbol";
import { RectorateItem } from "./components/rectorate_item/RectorateItem";
import SingleFaoliyat from "./pages/faoliyat/single_page_faoliyat/SingleFaoliyat";


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
          <Route path=":lang/institut/rektorat" element={<Rectorat />} />
          <Route path=":lang/institut/rektorat/:id" element={<RectorateItem />} />
          <Route path=":lang/institut/fakultetlar" element={<FacultetComponent/>} />
          <Route path=":lang/institut/kafedralar" element={<KafedraComponent/>} />
          <Route path=":lang/institut/bolim-va-markazlar" element={<BolimMarkaz/>} />
          <Route path=":lang/institut/structute/faculty/:id" element={<TabComponent/>} />
          <Route path=":lang/institut/structute/kafedra/:id" element={<TabComponent/>} />
          <Route path=":lang/institut/structute/department/:id" element={<TabComponent/>} />
          <Route path=":lang/institut/structute/center/:id" element={<TabComponent/>} />
          <Route path=":lang/institut/brm" element={<Brm/>} />
          <Route path=":lang/institut/brm/:name" element={<BrmSingle/>} />

          <Route path=":lang/faoliyat/:id" element={<SingleFaoliyat />} />

          <Route path=":lang/davlat-ramzlari" element={<Silbol />} />

          <Route path="/filter/result" element={<SillabusPage/>} />
          <Route path=":lang/elon" element={<TreeInstitute />} />
          <Route path=":lang/news" element={<News />} />
          <Route path=":lang/foydali-havolalar" element={<InteractiveLink />} />
          <Route path="test" element={<TabComponent />} />
          <Route path=":lang/institute/structute/:element/:name/:id" element={<TabComponent />} />
          <Route path=":lang/institute/structute/:name/:id" element={<TabComponent />} />
          
          {/* TODO - splitter va universal componentlarni optimizatsiya qilish kerak, misol uchun memoga o'rash kerek va hk */}
          <Route path=":lang/:page/:id/"  element={<SplitterComponent><UniversalComponent /></SplitterComponent> } />
          <Route path=":lang/details/:page/:id" element={<UniversalComponent />} />
          <Route path=":lang/news/:id" element={<Details />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
