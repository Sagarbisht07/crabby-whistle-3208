import { useState } from "react";

import "./App.css";
import AllRouths from "./Component/AllRouths";
import Footer from "./Component/Footer";
// import Home from "./Component/Home";
import Login from "./Component/Login/Login";
import Singup from "./Component/Login/Singup";
import NavbarEnd from "./Component/NavbarEnd";
import NavbarTop from "./Component/NavbarTop";
import NavBottom from "./Component/NavBottom";
import Cart from "./Component/Product.jsx/Cart";
import Product from "./Component/Product.jsx/Product";
import { UParrow } from "./UParrow";

function App() {
  return (
    <div className="App">
      <UParrow />
      <NavbarTop />
      <NavBottom />
      <NavbarEnd />
      <AllRouths />
      <Footer />
    </div>
  );
}

export default App;
