import React from "react";

import { Header } from "./header/Header";
import  Footer  from "./footer/Footer";
import { Sidebar } from "./sidebar/Sidebar";
import { FunctionalHeader } from "./functional_header/FunctionalHeader";
import { Outlet } from "react-router-dom";

export const UserLayout = () => {
  return (
    <div className="min-h-full flex flex-col">
      <Header />
      <main className="flex-auto bg-green-200">
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
        <main className="bg-cyan-200 flex-1 px-4 py-2">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
