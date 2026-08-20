"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Steam Particles inside 3D Scene
function SteamParticles({ count = 120 }) {
  const points = useRef<THREE.Points>(null!);

  const [positions, opacityArray] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const op = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 1.8; // X
      pos[i * 3 + 1] = Math.random() * 3.5 - 0.5; // Y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 1.8; // Z
      op[i] = Math.random();
    }
    return [pos, op];
  }, [count]);

  useFrame((state, delta) => {
    if (!points.current) return;
    const positionAttr = points.current.geometry.attributes.position;
    const array = positionAttr.array as Float32Array;

    for (let i = 0; i < count; i++) {
      array[i * 3 + 1] += delta * 0.45; // Move upwards
      array[i * 3] += Math.sin(state.clock.elapsedTime * 1.2 + i) * 0.003; // Gentle sway

      // Reset when particle reaches top
      if (array[i * 3 + 1] > 3.2) {
        array[i * 3 + 1] = -0.5;
        array[i * 3] = (Math.random() - 0.5) * 1.8;
      }
    }
    positionAttr.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        color="#D9A441"
        transparent
        opacity={0.35}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// 3D Teacup Primitive Object
function TeacupModel() {
  const meshRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.25;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
  });

  return (
    <group ref={meshRef} position={[0, -0.6, 0]} scale={[1.2, 1.2, 1.2]}>
      {/* Teacup Body */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[1, 0.5, 1.2, 32]} />
        <meshStandardMaterial
          color="#2B211A"
          roughness={0.4}
          metalness={0.6}
          emissive="#C1662F"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Tea Liquid surface inside cup */}
      <mesh position={[0, 0.88, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.92, 32]} />
        <meshStandardMaterial
          color="#D9A441"
          roughness={0.1}
          metalness={0.8}
          emissive="#C1662F"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Teacup Saucer */}
      <mesh position={[0, -0.25, 0]}>
        <cylinderGeometry args={[1.5, 1.2, 0.15, 32]} />
        <meshStandardMaterial color="#1C1510" roughness={0.3} metalness={0.7} />
      </mesh>
    </group>
  );
}

export function TeaSteamCanvas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-48 h-48 rounded-full border border-terracotta/30 animate-pulse flex items-center justify-center bg-espresso/40">
          <span className="text-terracotta text-xs tracking-widest uppercase font-mono">Loading 3D Steam...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative">
      <Canvas
        camera={{ position: [0, 1, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 5]} intensity={1.5} color="#D9A441" />
        <pointLight position={[-4, -2, -3]} intensity={1.2} color="#C1662F" />
        
        <TeacupModel />
        <SteamParticles count={150} />
      </Canvas>
    </div>
  );
}
