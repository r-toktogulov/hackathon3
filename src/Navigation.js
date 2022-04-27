import React from "react";
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Edit from "./pages/Edit";
import Main from "./pages/Main";
import ProductDetails from "./pages/ProductDetails.jsx";
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FiltersBlock from "./components/FiltersBlock";
import FooterBlock from "./components/FooterBlock";
import NavBar from "./components/NavBar";
import AboutUs from "./pages/AboutUs";
import Main from "./pages/Main";
import ProductPage from "./pages/ProductPage";
>>>>>>> bfe0492c3d3b6d9b11193cfe585125756a69168d

const Navigation = () => {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Routes>
        <Route path="/admin-panel" element={<Admin />} />
        <Route path="/admin-panel/add" element={<Add />} />
        <Route path="/admin-panel/edit/:id" element={<Edit />} />
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details/:id" element={<ProductDetails />} />
      </Routes>
=======
      <NavBar />
      <FiltersBlock />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <FooterBlock />
>>>>>>> bfe0492c3d3b6d9b11193cfe585125756a69168d
    </BrowserRouter>
  );
};

export default Navigation;
