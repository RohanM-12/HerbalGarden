// src/components/PlantCatalog/index.js

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";

import PlantCard from "./plantCatalog/PlantCard";
import { plantsData } from "../../public/plantData";
const PlantCatalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(plantsData.map((plant) => plant.category)),
  ];

  const filteredPlants = plantsData.filter((plant) => {
    const matchesSearch =
      plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plant.botanicalName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || plant.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-14">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-emerald-800 mb-4">
          Virtual Herbal Garden
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="relative w-full sm:w-96">
            <input
              type="text"
              placeholder="Search plants..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search
              className="absolute left-3 top-2.5 text-emerald-400"
              size={20}
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 w-full sm:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category
                    ? "bg-emerald-500 text-white"
                    : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default PlantCatalog;
