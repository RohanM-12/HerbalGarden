import React from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, PresentationControls, Float } from "@react-three/drei";

const Plant = ({ position, rotation, scale, modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return (
    <primitive
      object={scene}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  );
};

const GardenScene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <PresentationControls
        global
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
        rotation={[0, 2.5, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <Float speed={3} rotationIntensity={2.5} floatIntensity={2.2}>
          {/* Replace these with actual 3D model paths */}
          <Plant
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={10}
            modelPath="/PlantModels/prayer_plant.glb"
          />
          <Plant
            position={[-1, 0, 2]}
            rotation={[0, Math.PI / 4, 0]}
            scale={1}
            modelPath="/PlantModels/plant_pack.glb"
          />
          <Plant
            position={[-1, 0, -2]}
            rotation={[0, -Math.PI / 4, 0]}
            scale={1}
            modelPath="/PlantModels/stylized_foliage.glb"
          />
        </Float>
      </PresentationControls>
    </>
  );
};

export default GardenScene;
