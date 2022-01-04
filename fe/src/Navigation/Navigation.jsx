import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";

function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Navigation;
