import { NavLink } from "react-router-dom";
import {
  MdSpaceDashboard,
  MdShoppingCart,
  MdPeople,
  MdError,
} from "react-icons/md";

const Sidebar = () => {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-4 space-x-2 transition-all duration-300 ${
      isActive
        ? "bg-green-100 text-green-700 font-bold border-r-4 border-green-600 shadow-sm"
        : "text-gray-500 hover:bg-gray-50 hover:text-green-600"
    }`;

  return (
    <div className="w-64 h-screen border-r bg-white p-4 shadow-md">
      <div className="mb-10 p-2 text-3xl font-extrabold text-green-600 tracking-tight">
        Sedap<span className="text-orange-500">.</span>
      </div>

      <nav className="space-y-3">
        {/* Dashboard */}
        <NavLink to="/" className={menuClass}>
          <MdSpaceDashboard size={24} />
          <span className="text-sm">Dashboard</span>
        </NavLink>

        {/* Orders */}
        <NavLink to="/orders" className={menuClass}>
          <MdShoppingCart size={24} />
          <span className="text-sm">Order List</span>
        </NavLink>

        {/* Customers */}
        <NavLink to="/customers" className={menuClass}>
          <MdPeople size={24} />
          <span className="text-sm">Customers</span>
        </NavLink>

        {/* 🔥 Divider */}
        <hr className="my-4" />

        {/* 🔥 Error Menu */}
        <NavLink to="/error-400" className={menuClass}>
          <MdError size={24} />
          <span className="text-sm">Error 400</span>
        </NavLink>

        <NavLink to="/error-401" className={menuClass}>
          <MdError size={24} />
          <span className="text-sm">Error 401</span>
        </NavLink>

        <NavLink to="/error-403" className={menuClass}>
          <MdError size={24} />
          <span className="text-sm">Error 403</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;