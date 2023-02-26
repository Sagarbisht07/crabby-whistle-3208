import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Component/Home";
import Login from "./Login/Login";
import Singup from "./Login/Singup";
import Cart from "./Product.jsx/Cart";
import Final from "./Product.jsx/Final";
import Products from "./Product.jsx/Product";


const AllRouths = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Singup />} />
        <Route path="/product" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/buy" element={<Final />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default AllRouths;
