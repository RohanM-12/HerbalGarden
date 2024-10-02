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
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.5}>
          {/* Replace these with actual 3D model paths */}
          <Plant
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            modelPath="/models/herb1.glb"
          />
          <Plant
            position={[2, 0, 2]}
            rotation={[0, Math.PI / 4, 0]}
            scale={1}
            modelPath="/models/herb2.glb"
          />
          <Plant
            position={[-2, 0, -2]}
            rotation={[0, -Math.PI / 4, 0]}
            scale={1}
            modelPath="/models/herb3.glb"
          />
        </Float>
      </PresentationControls>
    </>
  );
};

export default GardenScene;
