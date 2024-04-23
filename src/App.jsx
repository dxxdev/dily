import React from "react";
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
import Save from "./pages/Save";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/products/:categoryName" element={<CategoryProducts />} />
        <Route
          path="/products/:categoryName/:originalCategory/:id"
          element={<ProductDetail />}
        />
        <Route
          path="/saved"
          element={<Save />}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
