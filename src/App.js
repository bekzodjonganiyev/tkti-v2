import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./index.css";

import Footer from "./components/footer";
import Header from "./components/header/header";
import HomePage from "./pages/home/home";

//Qabul
import Qabul from "./pages/qabul/qabul";
import Qushma from "./pages/qabul/qushma/qushma";
import Xalqaro from "./pages/institut/xalqaroAloqalar/Xalqaro";
import Bakalavr from "./pages/qabul/bakalavr/bakalavr";
import Doktarantura from "./pages/qabul/doktantura/doktarantura";
import Magistratura from "./pages/qabul/magistratura/magistratura";

// news 
import ElonlarItem from "./pages/elonlar/elonItem";
import Elonlar from "./pages/elonlar/elonlar";

import Yangiliklar from "./pages/news/news/news";
import YengiItem from "./pages/news/news/yengiItem";


//Talabalar
import Students from "./pages/students/Students";
import Bedroom from "./pages/students/bedroom/Bedroom";
import Finance from "./pages/students/finance/Finance";
import MedPunkt from "./pages/students/MedPunkt/MedPunkt";
import SelectStudent from "./pages/students/select/Select";
import StudentInfo from "./pages/students/studentInfo/StudentInfo";
import Accessibility from "./pages/students/accessibility/Accessibility";

//Bitiruvchilar
import Graduates from "./pages/students/Graduates/Graduates";

//Tuzilma
import Rectorat from "./pages/rektorat/rectorat/rectorat";
import RectoratItem from "./pages/rektorat/rectoratItem/rectoratitem";
import PageStaticAkademikFilial from "./pages/filiallar/filial";
import YoshlarIttifoqi from "./pages/rektorat/yoshlar_ittifoqi";

import FacultetFrond from "./pages/structure/FakultetId/FacultetFrond";
import FakultetId from "./pages/structure/FakultetId/FakultetId";

import KafedraName from "./pages/structure/Kafedra/KafedraFrond";
import KafedraId from "./pages/structure/Kafedra/KafedraId";

import BolimMarkaz from "./pages/structure/BolimMarkaz/BolimMarkaz";
import BolimMarkazId from "./pages/structure/BolimMarkaz/BolimMarkazId";
import MarkazId from "./pages/structure/BolimMarkaz/MarkazId";

//Faoliyat
import BusinessActivity from "./pages/biznesaktivity";
import TKTIFaoliyat from "./components/Faoliyat/Faoliyat";
import Silbol from "./pages/simbol/Silbol";

//Institut
import HighSchool from "./pages/institut/HighSchool/HighSchool";
import ActivityDocuments from "./pages/institut/activitydocuments/ActivityDocuments";
import BizBilanAloqa from "./pages/institut/bizbilanaloqa";
import Corruption from "./pages/institut/corruption/Corruption";
import InteractiveServices from "./pages/institut/interaktivservis";
import WorkPlan from "./pages/institut/workPlan/WorkPlan";

//Ilmiy-Tadqiqot
import Startup from "./pages/students/startup/Startup";
import TKTIProject from "./pages/ilmiy";

//Talim-Dasturi
import DarsJadval from "./pages/talimdasturi/darsjadval";

//Admin
import Admin from "./pages/admin";
import Fakultet from "./pages/admin/fakultet/Fakultet";
import Kafedra from "./pages/admin/kafedra/Kafedra";
import Bolim from "./pages/admin/bolim/Bolim";
import Markaz from "./pages/admin/markaz/Markaz";
import Faoliyat from "./pages/admin/foliyat/Faoliyat";
import Syllabus from "./pages/admin/syllabus/Syllabus";
import Yangilik from "./pages/admin/yangilik/Yangilik";
import Elon from "./pages/admin/elon/Elon";

import Dashboard from "./pages/admin/dashboard/Dashboard";
import StudentBolim from "./pages/admin/student-bolim/StudentBolim";
import Rahbariyat from "./pages/admin/rectorat/Rektorat"
import Sertifikat from "./pages/admin/sertifikat/Setrifikat"
import Matbuot from "./pages/admin/matbuot/Matbuot"
import FamousStudent from "./pages/admin/famous-student/FamousStudent"
import StatisticsForStudent from "./pages/admin/statistics/Statistics"
import QabulData from "./pages/admin/qabul/Qabul"





function App() {
  const [variant, setVariant] = useState("");

  return (
    <div className="my__container">
      <Header />
      <Routes>
        <Route path="*" element={<HomePage />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/qabul" element={<Qabul />} />
        <Route path="/qabul/bakalavr" element={<Bakalavr />} />
        <Route path="/qabul/magistratura" element={<Magistratura />} />
        <Route path="/qabul/doktarantura" element={<Doktarantura />} />
        <Route path="/qabul/qushma" element={<Qushma />} />
        <Route path="/talabalar" element={<Students />} />
        <Route path="/talabalar/moliya" element={<Finance />} />
        <Route path="/talabalar/turar-joy" element={<Bedroom />} />
        <Route path="/talabalar/tibbiyot-bolimi" element={<MedPunkt />} />
        <Route path="/talabalar/iqtidorli-talabalar" element={<Graduates />} />
        <Route path="/talabalar/ijtimoiy-yordam" element={<Accessibility />} />
        <Route path="/talabalar/tanlovlar" element={<SelectStudent />} />
        <Route path="/talabalar/startup-loyihalar" element={<Startup />} />
        <Route path="/talabalar/baholash" element={<StudentInfo />} />
        <Route path="/bitiruvchilar" element={<Graduates />} />
        <Route path="/davlat-ramzlari" element={<Silbol />} />

        <Route path="/elon" element={<Elonlar />} />
        <Route path="/elon/:id" element={<ElonlarItem />} />
        <Route path="/news" element={<Yangiliklar />} />
            <Route path="/news/:id" element={<YengiItem />} />

        <Route path="/rektorat" element={<Rectorat />} />
        <Route path="/rektorat/:id" element={<RectoratItem />} />

        <Route path="/faculty" element={<FacultetFrond />} />
        <Route path="/facultyId/:id" element={<FakultetId />} />

        <Route path="/bolimMarkaz" element={<BolimMarkaz />} />
        <Route path="/bolimMarkazId/:id" element={<BolimMarkazId />} />

        <Route path="/kafedrafrond" element={<KafedraName />} />
        <Route path="/kafedraId/:id" element={<KafedraId />} />

        
      
        <Route path="/markazId/:id" element={<MarkazId />} />

        <Route path="/filiallar" element={<PageStaticAkademikFilial />} />
        <Route path="/yoshlar-ittifoqi" element={<YoshlarIttifoqi />} />

        <Route
          path="/moliyaviy-faoliyat"
          element={<BusinessActivity setVariant={setVariant} />}
        />
        <Route
          path="/moliyaviy-faoliyat/hammasi"
          element={<TKTIFaoliyat variant={variant} />}
        />

        <Route path="/faoliyat-hujjatlari" element={<ActivityDocuments />} />
        <Route path="/biz-bilan-aloqa" element={<BizBilanAloqa />} />
        <Route path="/xalqaro-aloqalar" element={<Xalqaro />} />
        <Route path="/interaktiv-hizmatlar" element={<InteractiveServices />} />
        <Route path="/tkti-ish-rejasi" element={<WorkPlan />} />
        <Route path="/korrupsiya" element={<Corruption />} />
        <Route path="/litsey" element={<HighSchool />} />

        <Route path="/institut-loyihalari" element={<TKTIProject />} />
        <Route path="/startup-loyihalar" element={<Startup />} />

        <Route path="/dars-jadvali" element={<DarsJadval />} />
        <Route path="/admin" element={<Admin />}>
          <Route index element={<Dashboard />} />
          <Route path="fakultet" element={<Fakultet />} />
          <Route path="kafedra" element={<Kafedra />} />
          <Route path="bolim" element={<Bolim />} />
          <Route path="markaz" element={<Markaz />} />
          <Route path="faoliyat" element={<Faoliyat />} />
          <Route path="syllabus" element={<Syllabus />} />
          <Route path="yangilik" element={<Yangilik />} />
          <Route path="elon" element={<Elon />} />
          <Route path="student-bolim" element={<StudentBolim />} />
          <Route path="rektorat" element={<Rahbariyat />} />
          <Route path="sertifikat" element={<Sertifikat />} />
          <Route path="nashriyot" element={<Matbuot />} />
          <Route path="famous-student" element={<FamousStudent />} />
          <Route path="statistics-of-student" element={<StatisticsForStudent />} />
          <Route path="qabul" element={<QabulData />} />

        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
