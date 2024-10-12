// src/components/PlantCatalog/Plant3DViewer.js

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";

const Plant3DModel = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} />;
};

const Plant3DViewer = ({ modelPath }) => {
  return (
    <div className="w-full h-[300px] bg-emerald-50 rounded-lg">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Plant3DModel modelPath={modelPath} />
          </Stage>
        </Suspense>
        <OrbitControls
          autoRotate
          autoRotateSpeed={4}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default Plant3DViewer;
