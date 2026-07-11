// src/App.jsx
import React, { useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import CategoryProducts from "./pages/CategoryProducts";
import ProductDetail from "./pages/ProductDetail";
import OriginalCategoryProducts from "./pages/OriginalCategoryProducts";
import Save from "./pages/Save";
import PageNotFound from "./pages/PageNotFound";
import ServisesPage from "./pages/ServisesPage";
import ServisesRepairDetail from "./pages/ServisesRepairDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Searched from "./pages/Searched";

// Admin Imports
import AdminLayout from "./layouts/AdminLayout";
import DashboardOverview from "./pages/admin/DashboardOverview";
import AdminProducts from "./pages/admin/AdminProducts";
import PendingProviders from "./pages/admin/PendingProviders";

// Marketplace (usta) Imports — Bosqich 1-7
import ProviderRegister from "./pages/ProviderRegister";
import ProviderPending from "./pages/ProviderPending";
import FindProvider from "./pages/FindProvider";
import IncomingRequests from "./pages/provider/IncomingRequests";
import MyRequests from "./pages/MyRequests";

import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const [one, setone] = useState(0);
  let finder = one;
  const [saving, setSaving] = useState([]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<MainLayout one={one} />}>
          {/* Mahsulot qismi — o'zgarmadi */}
          <Route
            index
            element={
              <Home
                setone={setone}
                one={one}
                finder={finder}
                saving={saving}
                setSaving={setSaving}
              />
            }
          />
          <Route
            path="/products/:categoryName"
            element={<CategoryProducts one={one} setone={setone} />}
          />
          <Route
            path="/products/:categoryName/:originalCategory"
            element={<OriginalCategoryProducts one={one} setone={setone} />}
          />
          <Route
            path="/products/:categoryName/:originalCategory/:id"
            element={<ProductDetail one={one} setone={setone} />}
          />
          <Route path="/saved" element={<Save one={one} setone={setone} />} />
          <Route path="/Servises" element={<ServisesPage />} />
          <Route path="/Servises/:title" element={<ServisesRepairDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Searched />} />

          {/* Ustalar marketplace — mijoz tomoni */}
          <Route path="/find-provider" element={<FindProvider />} />
          <Route
            path="/my-requests"
            element={
              <ProtectedRoute>
                <MyRequests />
              </ProtectedRoute>
            }
          />

          {/* Usta bo'lish oqimi */}
          <Route
            path="/provider/register"
            element={
              <ProtectedRoute>
                <ProviderRegister />
              </ProtectedRoute>
            }
          />
          <Route
            path="/provider/pending"
            element={
              <ProtectedRoute>
                <ProviderPending />
              </ProtectedRoute>
            }
          />
          <Route
            path="/provider/requests"
            element={
              <ProtectedRoute requiredRole="provider">
                <IncomingRequests />
              </ProtectedRoute>
            }
          />

          <Route path="/*" element={<PageNotFound one={one} />} />
        </Route>

        {/* Admin panel */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardOverview />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="pending-providers" element={<PendingProviders />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;