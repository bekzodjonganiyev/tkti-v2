import { NavLink } from "react-router-dom";

import { sidebarItems } from "../../../config/sidebarItems.config";

export const Sidebar = () => {


  const userAccess = (arr) => {
    const isSuperAdmin = "is_active" in permissionKeys;
    return !isSuperAdmin ? arr : arr.filter((item) => item.permissionKey);
  };
  return (
    <aside className="bg-slate-400 h-screen">
      <h1 className="text-3xl">Admin Panel</h1>
      <ul className="mt-10">
        {sidebarItems.map((item) => (
          <li key={item.name}>
            <NavLink to={item.url} className="flex gap-4 py-3 px-4 rounded-lg">
              {/* <span>{item.icon}</span> */}
              <p>{item.name}</p>
            </NavLink>
          </li>
        ))}
      </ul>

      <button
        className="text-red-600 flex mt-10 ml-4"
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/triumf-enter";
        }}
      >
        Chiqish
      </button>
    </aside>
  );
};
