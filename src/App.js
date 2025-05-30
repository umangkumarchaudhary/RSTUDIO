import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Services from "./components/Services";
import WeightManagement from "./components/WeightManagement";
// Import other service pages as you create them

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Slider />
      <Routes>
        <Route path="/" element={<Services />} />
        <Route path="/weight-management" element={<WeightManagement />} />
        {/* Add more routes for other services as you create those components */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
