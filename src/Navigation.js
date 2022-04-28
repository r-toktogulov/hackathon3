import React from "react";
import Add from "./pages/Add";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import Edit from "./pages/Edit";
import Main from "./pages/Main";
import ProductDetails from "./pages/ProductDetails.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FiltersBlock from "./components/FiltersBlock";
import FooterBlock from "./components/FooterBlock";
import NavBar from "./components/NavBar";
import AboutUs from "./pages/AboutUs";
import ProductPage from "./pages/ProductPage";
import Phones from "./pages/Phones";

const Navigation = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <FiltersBlock />
      <Routes>
        <Route path="/admin-panel" element={<Admin />} />
        <Route path="/admin-panel/add" element={<Add />} />
        <Route path="/admin-panel/edit/:id" element={<Edit />} />
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/phones" element={<Phones />} />

        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <FooterBlock />
    </BrowserRouter>
  );
};

export default Navigation;
