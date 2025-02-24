"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {
  ContactShadows,
  Environment,
  useGLTF,
  OrbitControls,
  Center,
} from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Shapes() {
  // Fade-in effect for the canvas container
  useEffect(() => {
    gsap.to(".canvas-container", { opacity: 1, duration: 1.5, ease: "power3.inOut" });
  }, []);

  return (
    <div className="canvas-container relative w-full h-[500px] md:h-[600px] opacity-0">
      <Canvas
        className="z-0"
        shadows
        gl={{ antialias: true }}
        dpr={[1, 2]}
        camera={{ position: [0, 1, 10], fov: 45, near: 0.1, far: 100 }}
      >
        {/* Soft Ambient Lighting */}
        <ambientLight intensity={1.2} />
        <spotLight
          position={[5, 10, 5]}
          angle={0.3}
          penumbra={1}
          intensity={1.5}
          castShadow
        />

        <Suspense fallback={<LoadingIndicator />}>
          {/* Centered Model with Subtle Animation */}
          <ModernHouseModel scale={0.0125} />

          <ContactShadows
            position={[0, -3, 0]}
            opacity={0.5}
            scale={30}
            blur={1.5}
            far={9}
          />
          <Environment preset="city" />
        </Suspense>

        {/* Allows only rotation (no zoom, no pan) */}
        <OrbitControls enableRotate enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}

const ModernHouseModel = ({ scale }) => {
  // const { scene } = useGLTF("/livingroom.glb"); // Ensure file is in /public
  // const { scene } = useGLTF("/roommodel.glb"); // Ensure file is in /public
  const { scene } = useGLTF("/painted_room.glb"); // Ensure file is in /public
  // const { scene } = useGLTF("/room_maru.glb"); // Ensure file is in /public
  // const { scene } = useGLTF("/living_room_kit.glb"); // Ensure file is in /public
  const groupRef = useRef();

  useEffect(() => {
    // Entry animation for the group
    gsap.from(groupRef.current.scale, {
      x: 0,
      y: 0,
      z: 0,
      duration: 1.2,
      ease: "elastic.out(1,0.3)",
      delay: 0.3,
    });

    // Ensure the model faces the front
    if (groupRef.current) {
      // groupRef.current.rotation.y = Math.PI*1.5; // Adjust rotation as needed
      groupRef.current.rotation.y = 300; // Adjust rotation as needed
    }

    // Subtle animation for the model
    gsap.to(groupRef.current.rotation, {
      y: "+=0.1",
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <group ref={groupRef} scale={scale}>
      <Center>
        <primitive object={scene} />
      </Center>
    </group>
  );
};

// Loading indicator while the model is loading
const LoadingIndicator = () => (
  <mesh>
    <sphereGeometry args={[0.5, 32, 32]} />
    <meshStandardMaterial color="gray" />
  </mesh>
);
