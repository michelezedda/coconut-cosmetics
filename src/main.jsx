import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import App from "./App.jsx";
import ProductPage from "./pages/ProductPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<App />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
