import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
export default function MainLayout({ children }) {
    return (
        <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 bg-gray-50">
        <Header />

        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
    );
}   
            