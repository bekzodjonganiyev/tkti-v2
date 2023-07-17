import { Outlet } from "react-router-dom";

import { Footer } from "./footer/Footer";
import { Sidebar } from "./sidebar/Sidebar";
import { FunctionalHeader } from "./functional_header/FunctionalHeader";
import { Navbar } from "./navbar";
import AppContextProvider from "../../context/app.context";

export const UserLayout = () => {
  return (
    <AppContextProvider>
      <div className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-auto  bg-[#f2f2f2]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </AppContextProvider>
  );
};

export const AdminLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <FunctionalHeader />
        <main className="bg-cyan-200 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
