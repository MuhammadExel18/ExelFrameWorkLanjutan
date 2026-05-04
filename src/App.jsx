import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

// Lazy Load Pages
const Dashboard = React.lazy(() => import("./pages/main/Dashboard"));
const Orders = React.lazy(() => import("./pages/main/Orders"));
const Customers = React.lazy(() => import("./pages/main/Customers"));
const NotFound = React.lazy(() => import("./pages/main/NotFound"));

const Error400 = React.lazy(() => import("./pages/main/Error400"));
const Error401 = React.lazy(() => import("./pages/main/Error401"));
const Error403 = React.lazy(() => import("./pages/main/Error403"));

const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Loading = React.lazy(() => import("./components/Loading"));

// ✅ FIX NAMA (HARUS HURUF BESAR)
const Produk = React.lazy(() => import("./pages/main/Produk"));
const ProductDetail = React.lazy(() => import("./pages/main/ProductDetail"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* MAIN LAYOUT */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />

          {/* ✅ PRODUK FIX */}
          <Route path="/products" element={<Produk />} />
          <Route path="/products/:id" element={<ProductDetail />} />

          {/* ERROR */}
          <Route path="/error-400" element={<Error400 />} />
          <Route path="/error-401" element={<Error401 />} />
          <Route path="/error-403" element={<Error403 />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* AUTH */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;