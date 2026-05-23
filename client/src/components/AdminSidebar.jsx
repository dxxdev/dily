import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

const AdminSidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/admin", icon: <LayoutDashboard size={20} /> },
    { name: "Products", path: "/admin/products", icon: <Package size={20} /> },
    { name: "Users", path: "/admin/users", icon: <Users size={20} /> },
    { name: "Settings", path: "/admin/settings", icon: <Settings size={20} /> },
  ];

  return (
    <aside className="w-64 bg-white shadow-menu-shadow h-screen flex flex-col transition-all duration-300">
      {/* Logo Area */}
      <div className="h-20 flex items-center justify-center border-b border-light-gray">
        <Link to="/admin" className="text-2xl font-bold text-bright-green">
          Dily <span className="text-dark-gray">Admin</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-10 transition-slice ${
                isActive
                  ? "bg-bright-green text-white shadow-product-card-shadow"
                  : "text-dark-gray hover:bg-light-green hover:text-bright-green"
              }`}
            >
              {item.icon}
              <span className="font-semibold">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-light-gray">
        <button className="flex items-center gap-3 px-4 py-3 rounded-10 text-dark-gray hover:bg-red-50 hover:text-red-500 w-full transition-slice">
          <LogOut size={20} />
          <span className="font-semibold">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
