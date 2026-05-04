import { NavLink } from "react-router-dom";
import {
  MdSpaceDashboard,
  MdShoppingCart,
  MdPeople,
  MdError,
  MdInventory,
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
      <div className="mb-10 p-2 text-3xl font-extrabold text-green-600">
        Sedap<span className="text-orange-500">.</span>
      </div>

      <nav className="space-y-3">
        <NavLink to="/" className={menuClass}>
          <MdSpaceDashboard size={24} />
          <span>Dashboard</span>
        </NavLink>

        {/* ✅ FIX PRODUK */}
        <NavLink to="/products" className={menuClass}>
          <MdInventory size={24} />
          <span>Produk</span>
        </NavLink>

        <NavLink to="/orders" className={menuClass}>
          <MdShoppingCart size={24} />
          <span>Order List</span>
        </NavLink>

        <NavLink to="/customers" className={menuClass}>
          <MdPeople size={24} />
          <span>Customers</span>
        </NavLink>

        <hr className="my-4" />

        <NavLink to="/error-400" className={menuClass}>
          <MdError size={24} />
          <span>Error 400</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;