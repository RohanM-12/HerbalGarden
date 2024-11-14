// src/components/PlantCatalog/PlantCard.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import Plant3DViewer from "./plant3DViewer.jsx";
import { Leaf, Droplet, Sun } from "lucide-react";
import { Link } from "react-router-dom";
const PlantCard = ({ plant }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="bg-white rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
    >
      <a href={`/plants/${plant.id}`}>
        <div
          className="cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="h-[300px] relative">
            <Plant3DViewer modelPath={plant.modelPath} />
          </div>

          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-emerald-800">
                  {plant.name}
                </h3>
                <p className="text-sm italic text-emerald-600">
                  {plant.botanicalName}
                </p>
              </div>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm">
                {plant.category}
              </span>
            </div>

            <motion.div
              initial={false}
              animate={{ height: isExpanded ? "auto" : "80px" }}
              className="overflow-hidden"
            >
              <p className="text-gray-600 mb-4">{plant.description}</p>

              {isExpanded && (
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {plant.uses.map((use, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-sm"
                      >
                        {use}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Sun className="text-emerald-500" size={20} />
                      <span className="text-sm text-gray-600">
                        {plant.growing}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Droplet className="text-emerald-500" size={20} />
                      <span className="text-sm text-gray-600">
                        Care: {plant.careLevel}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

export default PlantCard;
