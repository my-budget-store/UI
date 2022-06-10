import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Orders from "./Pages/Orders";
import Products from "./Pages/Products";
import Account from "./Pages/Account";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function Mobile() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Mobile;
