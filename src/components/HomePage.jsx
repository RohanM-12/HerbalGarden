import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import GardenScene from "./GardenScene";
import HerbalInfo from "./HerbalInfo";

const HomePage = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <Leaf className="text-emerald-600" size={32} />
          <h1 className="text-4xl font-bold text-emerald-800">
            Virtual Herbal Garden
          </h1>
        </div>
        <p className="text-emerald-600 text-lg">
          Explore the healing power of nature
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="h-[450px] rounded-lg overflow-hidden shadow-xl">
          <Canvas>
            <Suspense fallback={null}>
              <Environment preset="sunset" />
              <OrbitControls enableZoom={true} maxPolarAngle={Math.PI / 2} />
              <GardenScene />
            </Suspense>
          </Canvas>
        </div>

        <div className="space-y-5">
          <HerbalInfo />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
