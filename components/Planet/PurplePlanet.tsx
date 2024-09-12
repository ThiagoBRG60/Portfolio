'use client'
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as THREE from 'three';

const Model = () => {
  const gltf = useLoader(GLTFLoader, '/models/purple_planet-lighter.glb');
  const modelRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (modelRef.current) {
      modelRef.current.scale.set(1.9, 1.9, 1.9);
      modelRef.current.rotation.x = Math.PI / 10; 
      modelRef.current.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          if (child.material instanceof THREE.MeshStandardMaterial) {
            child.material.emissiveIntensity = 0.6;
          }
        }
      });
    }
  }, [gltf]);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y -= 0.002;
    }
  });

  return <primitive object={gltf.scene} ref={modelRef} />;
};

const PurplePlanet = () => {
  const [showPlanet, setShowPlanet] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowPlanet(entry.isIntersecting)
      },
      {threshold: 0.1}
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div ref={ref} className='w-[300px] h-[300px] xxs:w-[350px] xxs:h-[350px] md:w-[400px] md:h-[400px] xl:w-[500px] xl:h-[500px] 2xl:w-[550px] 2xl:h-[550px]'>
      {showPlanet && 
         <Canvas className='animate-fadeInScale cursor-grab active:cursor-grabbing' camera={{ position: [0, 0, 5], fov: 50 }}>
         <Model />
         <OrbitControls 
           enableDamping={true}
           enableZoom={false}
           enablePan={false}
           minPolarAngle={Math.PI / 2}
           maxPolarAngle={Math.PI / 2}
         />
       </Canvas>
      }
    </div>
  );
};

export default PurplePlanet;