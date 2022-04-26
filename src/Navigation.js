import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FiltersBlock from "./components/FiltersBlock";
import FooterBlock from "./components/FooterBlock";
import NavBar from "./components/NavBar";
import Main from "./pages/Main";
import ProductPage from "./pages/ProductPage";

const Navigation = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <FiltersBlock />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<ProductPage />} />
      </Routes>
      <FooterBlock />
    </BrowserRouter>
  );
};

export default Navigation;
