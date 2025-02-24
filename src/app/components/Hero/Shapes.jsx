"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Float, Environment, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Shapes() {
  return (
    <div className="row-span-1 row-start-1 -mt-9 aspect-square md:col-span-1 md:col-start-2 md:mt-0">
      <Canvas
        className="z-0 z-0 max-w-full"
        shadows
        gl={{ antialias: false }}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 25], fov: 30, near: 1, far: 40 }}
      >
        <Suspense fallback={null}>
          {/* ✅ Only the sofa model remains */}
          <SofaModel position={[1, -2, 0]} />
          <ContactShadows position={[0, -3.5, 0]} opacity={0.65} scale={40} blur={1} far={9} />
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}

// ✅ Load and display only the sofa model
const SofaModel = ({ position }) => {
  const { scene } = useGLTF("/sofa_chair.glb"); // Load sofa model from public folder
  const meshRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ctx = gsap.context(() => {
      setVisible(true);
      gsap.from(meshRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: gsap.utils.random(0.8, 1.2),
        ease: "elastic.out(1,0.3)",
        delay: gsap.utils.random(0, 0.5),
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <group ref={meshRef} position={position}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <primitive object={scene} scale={4.5} />
      </Float>
    </group>
  );
};
