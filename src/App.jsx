import { Routes, Route } from "react-router-dom";

//import Dashboard from "./pages/main/Dashboard";
//import Orders from "./pages/main/Orders";
//import Customers from "./pages/main/Customers";
//import NotFound from "./pages/main/NotFound";

// 🔥 Import Error Pages
//import Error400 from "./pages/main/Error400";
//import Error401 from "./pages/main/Error401";
//import Error403 from "./pages/main/Error403";
//import { MainLayout } from "./layouts/MainLayout";  
//import AuthLayout from "./layouts/AuthLayout";
//import Login from "./pages/auth/Login";
//import Register from "./pages/auth/Register";
//import Forgot from "./pages/auth/Forgot";
import React, { Suspense } from "react";

const Dashboard = React.lazy(() => import("./pages/main/Dashboard"))
const Orders = React.lazy(() => import("./pages/main/Orders"))
const Customers = React.lazy(() => import("./pages/main/Customers"))
const NotFound = React.lazy(() => import("./pages/main/NotFound"))
const Error400 = React.lazy(() => import("./pages/main/Error400"))
const Error401 = React.lazy(() => import("./pages/main/Error401"))
const Error403 = React.lazy(() => import("./pages/main/Error403"))
const Login = React.lazy(() => import("./pages/auth/Login"))
const Register = React.lazy(() => import("./pages/auth/Register"))
const Forgot = React.lazy(() => import("./pages/auth/Forgot"))
const MainLayout = React.lazy(() => import("./layouts/MainLayout"))
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))
const Loading = React.lazy(() => import("./components/Loading"))









function App() {
  return (
    <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<MainLayout />}>
            {/* Main Pages */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />

            {/* 🔥 Error Pages */}
            <Route path="/error-400" element={<Error400 />} />
            <Route path="/error-401" element={<Error401 />} />
            <Route path="/error-403" element={<Error403 />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
            
            </Route>   
              <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot" element={<Forgot/>} />
        </Route> 
          </Routes>
    </Suspense>
  );
}

export default App;