import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BemVindo from "./Pages/BemVindo";
import Espera from "./Pages/Espera";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<BemVindo />} />
        <Route path="/home" element={<Home />} />
        <Route path="/espera" element={<Espera />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
