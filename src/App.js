import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsProvider from "./Contexts/Products/ProductsProvider";
import BemVindo from "./Pages/BemVindo";
import Espera from "./Pages/Espera";
import Home from "./Pages/Home";

function App() {
  return (
    <ProductsProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<BemVindo />} />
          <Route path="/home" element={<Home />} />
          <Route path="/espera" element={<Espera />} />
        </Routes>
      </BrowserRouter>
    </ProductsProvider>
  );
}

export default App;
