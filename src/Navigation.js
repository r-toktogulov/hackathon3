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

import SearchBlock from "./components/SearchBlock";
import Macbooks from "./pages/Macbooks";
import Ipads from "./pages/Ipads";
import Imacs from "./pages/Imacs";
import Watchs from "./pages/Watchs";
import checkOutPage from "./pages/CheckOutPage";
import PaymentPage from "./pages/PaymentPage";
import CheckOutPage from "./pages/CheckOutPage";
const Navigation = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <SearchBlock />
      <FiltersBlock />
      <Routes>
        <Route path="/admin-panel" element={<Admin />} />
        <Route path="/admin-panel/add" element={<Add />} />
        <Route path="/admin-panel/edit/:id" element={<Edit />} />
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/macbooks" element={<Macbooks />} />
        <Route path="/ipads" element={<Ipads />} />
        <Route path="/imacs" element={<Imacs />} />
        <Route path="/watchs" element={<Watchs />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <FooterBlock />
    </BrowserRouter>
  );
};

export default Navigation;
