import { Footer } from "./footer/Footer";
import { Sidebar } from "./sidebar/Sidebar";
import { FunctionalHeader } from "./functional_header/FunctionalHeader";
import { Outlet } from "react-router-dom";
import { Navbar } from "../layout/Navbar/Navbar";

export const UserLayout = () => {
  return (
    <div className="min-h-full flex flex-col">
      <Navbar />
      <main className="flex-auto ">
        <Outlet />
      </main>
      <Footer />
    </div>
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
