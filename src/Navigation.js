import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Edit from "./pages/Edit";
import Main from "./pages/Main";
import ProductDetails from "./pages/ProductDetails.jsx";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin-panel" element={<Admin />} />
        <Route path="/admin-panel/add" element={<Add />} />
        <Route path="/admin-panel/edit/:id" element={<Edit />} />
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
