import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import PlantCatalog from "./components/PlantCatalog";
import PlantDetailsPage from "./components/PlantDetailsPage";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-green-100">
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/plants" element={<PlantCatalog />} />
          <Route path="/plants/:id" element={<PlantDetailsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
