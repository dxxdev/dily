import React from "react";
import { TrendingUp, Users, ShoppingBag, DollarSign, Activity, User } from "lucide-react";

const StatCard = ({ title, value, icon, trend, isPositive }) => (
  <div className="bg-white p-6 rounded-10 shadow-sm border border-light-gray flex flex-col justify-between hover:shadow-menu-shadow transition-slice">
    <div className="flex justify-between items-start">
      <div>
        <p className="text-address-gray text-sm font-semibold mb-1">{title}</p>
        <h3 className="text-2xl font-bold text-dark-gray">{value}</h3>
      </div>
      <div className="p-3 rounded-10 bg-light-green text-bright-green">
        {icon}
      </div>
    </div>
    <div className="mt-4 flex items-center text-sm">
      <TrendingUp size={16} className={`mr-1 ${isPositive ? 'text-bright-green' : 'text-red-500'}`} />
      <span className={`font-semibold ${isPositive ? 'text-bright-green' : 'text-red-500'}`}>
        {trend}
      </span>
      <span className="text-address-gray ml-2">vs last month</span>
    </div>
  </div>
);

const DashboardOverview = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-dark-gray">Dashboard Overview</h1>
          <p className="text-address-gray text-sm mt-1">Welcome back, here's what's happening today.</p>
        </div>
        <button className="bg-bright-green text-white px-4 py-2 rounded-10 font-semibold flex items-center gap-2 hover:bg-green-600 transition-slice shadow-product-card-shadow">
          <Activity size={18} /> Generate Report
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Revenue" value="$45,231.89" icon={<DollarSign size={24} />} trend="+20.1%" isPositive={true} />
        <StatCard title="Active Users" value="+2350" icon={<Users size={24} />} trend="+15.2%" isPositive={true} />
        <StatCard title="Total Orders" value="12,234" icon={<ShoppingBag size={24} />} trend="+5.4%" isPositive={true} />
        <StatCard title="Bounce Rate" value="23.5%" icon={<Activity size={24} />} trend="-2.1%" isPositive={false} />
      </div>

      {/* Charts & Tables Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart Placeholder */}
        <div className="lg:col-span-2 bg-white p-6 rounded-10 shadow-sm border border-light-gray h-96 flex flex-col">
          <h3 className="text-lg font-bold text-dark-gray mb-4">Revenue Overview</h3>
          <div className="flex-1 border-2 border-dashed border-light-gray rounded-10 flex items-center justify-center bg-light-gray/30">
             <span className="text-address-gray font-semibold">Chart Placeholder (Recharts / Chart.js)</span>
          </div>
        </div>
        
        {/* Recent Activity */}
        <div className="bg-white p-6 rounded-10 shadow-sm border border-light-gray h-96 overflow-hidden flex flex-col">
          <h3 className="text-lg font-bold text-dark-gray mb-4">Recent Activity</h3>
          <div className="flex-1 overflow-y-auto space-y-4 pr-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex gap-4 items-start border-b border-light-gray pb-4 last:border-0">
                <div className="w-10 h-10 rounded-full bg-light-green flex-shrink-0 flex items-center justify-center text-bright-green">
                  <User size={16} />
                </div>
                <div>
                  <p className="text-sm text-dark-gray"><span className="font-semibold">New user</span> registered</p>
                  <p className="text-xs text-address-gray">{i * 10} mins ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
