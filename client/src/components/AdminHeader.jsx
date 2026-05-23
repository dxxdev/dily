import React from "react";
import { Bell, Search, User } from "lucide-react";

const AdminHeader = () => {
  return (
    <header className="h-20 bg-white/80 backdrop-blur-md shadow-sm flex items-center justify-between px-8 sticky top-0 z-50">
      {/* Search */}
      <div className="flex items-center bg-light-gray rounded-10 px-4 py-2 w-96 border border-transparent focus-within:border-bright-green transition-slice">
        <Search size={20} className="text-address-gray" />
        <input
          type="text"
          placeholder="Search everywhere..."
          className="bg-transparent border-none outline-none ml-3 w-full text-dark-gray placeholder-address-gray"
        />
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6">
        <button className="relative text-dark-gray hover:text-bright-green transition-slice">
          <Bell size={24} />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
            3
          </span>
        </button>
        <div className="h-10 w-[1px] bg-medium-gray"></div>
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-full bg-light-green flex items-center justify-center text-bright-green font-bold group-hover:shadow-product-card-shadow transition-slice">
            <User size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-dark-gray leading-tight">Admin User</span>
            <span className="text-xs text-address-gray">Super Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
