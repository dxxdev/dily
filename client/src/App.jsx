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
import { products } from "./data/data";
import Administration from "./pages/Administration";
import DashLayouts from "./layouts/DashLayouts";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const [one, setone] = useState(0);
  let finder = one;
  const [saving, setSaving] = useState([]);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout one={one} />}>
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
        <Route path="/dash" element={<DashLayouts />}>
          <Route path="/dash" index element={<Dashboard />} />
          <Route path="/dash/administration" index element={<Administration />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
