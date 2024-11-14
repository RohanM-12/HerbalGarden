import React from "react";
import { useParams, Link } from "react-router-dom";
import {
  Droplet,
  Sun,
  Thermometer,
  Sprout,
  Calendar,
  Globe,
  Leaf,
  ArrowLeft,
  FlowerIcon,
  Sparkles,
  AlertTriangle,
} from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
import Plant3DViewer from "./plantCatalog/plant3DViewer";
import { plantsDetailsData } from "../../public/plantDetailsData";

const PlantDetailsPage = () => {
  const { id } = useParams();
  // In a real app, you'd fetch this from your data store
  const plant = plantsDetailsData.find((p) => p.id === id);

  if (!plant) {
    return <div>Plant not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/plants"
        className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-6"
      >
        <ArrowLeft className="mr-2" size={20} />
        Back to Catalog
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - 3D View and Basic Info */}
        <div className="lg:col-span-1">
          {/* <Card> */}
          {/* <CardContent className="p-6"> */}
          <div className="h-[400px] relative mb-6">
            {/* Your 3D viewer component */}
            <Plant3DViewer modelPath={plant.modelPath} />
          </div>

          <h1 className="text-3xl font-bold text-emerald-800 mb-2">
            {plant.name}
          </h1>
          <p className="text-xl italic text-emerald-600 mb-4">
            {plant.botanicalName}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {plant.categories.map((category, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm"
              >
                {category}
              </span>
            ))}
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Sun className="text-emerald-500" size={20} />
              <span>Light: {plant.light}</span>
            </div>
            <div className="flex items-center gap-3">
              <Droplet className="text-emerald-500" size={20} />
              <span>Water: {plant.water}</span>
            </div>
            <div className="flex items-center gap-3">
              <Thermometer className="text-emerald-500" size={20} />
              <span>Temperature: {plant.temperature}</span>
            </div>
            <div className="flex items-center gap-3">
              <Sprout className="text-emerald-500" size={20} />
              <span>Height: {plant.height}</span>
            </div>
          </div>
          {/* </CardContent> */}
          {/* </Card> */}
        </div>

        {/* Right Column - Detailed Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Description */}
          {/* <Card> */}
          {/* <CardContent className="p-6"> */}
          <h2 className="text-xl font-semibold mb-4">Description</h2>
          <p className="text-gray-600">{plant.description}</p>
          {/* </CardContent> */}
          {/* </Card> */}

          {/* Scientific Classification */}
          {/* <Card> */}
          {/* <CardContent className="p-6"> */}
          <h2 className="text-xl font-semibold mb-4">
            Scientific Classification
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(plant.classification).map(([key, value]) => (
              <div key={key} className="flex items-center gap-2">
                <span className="font-medium text-emerald-700">{key}:</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
          {/* </CardContent> */}
          {/* </Card> */}

          {/* Growth and Care */}
          {/* <Card> */}
          {/* <CardContent className="p-6"> */}
          <h2 className="text-xl font-semibold mb-4">Growth & Care Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-emerald-700 mb-2">
                Soil Requirements
              </h3>
              <p className="text-gray-600 mb-4">{plant.care.soil}</p>

              <h3 className="font-medium text-emerald-700 mb-2">
                Fertilization
              </h3>
              <p className="text-gray-600 mb-4">{plant.care.fertilization}</p>

              <h3 className="font-medium text-emerald-700 mb-2">Pruning</h3>
              <p className="text-gray-600">{plant.care.pruning}</p>
            </div>

            <div>
              <h3 className="font-medium text-emerald-700 mb-2">
                Common Problems
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {plant.care.commonProblems.map((problem, index) => (
                  <li key={index}>{problem}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* </CardContent> */}
          {/* </Card> */}

          {/* Uses and Benefits */}
          {/* <Card> */}
          {/* <CardContent className="p-6"> */}
          <h2 className="text-xl font-semibold mb-4">Uses & Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium text-emerald-700 mb-2">
                Traditional Uses
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {plant.uses.traditional.map((use, index) => (
                  <li key={index}>{use}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-emerald-700 mb-2">
                Medicinal Properties
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {plant.uses.medicinal.map((prop, index) => (
                  <li key={index}>{prop}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* </CardContent> */}
          {/* </Card> */}
        </div>
      </div>
    </div>
  );
};

export default PlantDetailsPage;
