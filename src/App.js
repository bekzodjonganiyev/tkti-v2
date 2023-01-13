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

//Faoliyat
import BusinessActivity from "./pages/biznesaktivity";

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
import Faoliyat from "./pages/admin/foliyat/Faoliyat";
import Syllabus from "./pages/admin/syllabus/Syllabus";
import Yangilik from "./pages/admin/yangilik/Yangilik";
import Elon from "./pages/admin/elon/Elon"
import Dashboard from "./pages/admin/dashboard/Dashboard";

function App() {
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

        <Route path="/rektorat" element={<Rectorat />} />
        <Route path="/rektorat/:id" element={<RectoratItem />} />
        <Route path="/filiallar" element={<PageStaticAkademikFilial />} />
        <Route path="/yoshlar-ittifoqi" element={<YoshlarIttifoqi />} />

        <Route path="/moliyaviy-faoliyat" element={<BusinessActivity />} />

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
          <Route path="faoliyat" element={<Faoliyat />} />
          <Route path="syllabus" element={<Syllabus />} />
          <Route path="yangilik" element={<Yangilik />} />
          <Route path="elon" element={<Elon />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
