import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthContext from "./AuthContext.jsx/AuthContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <BrowserRouter>
    <AuthContext>
      <App />
    </AuthContext>
    </BrowserRouter>
  </ChakraProvider>
);
