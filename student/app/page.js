"use client";
import { Canvas  } from '@react-three/fiber';
import {  OrbitControls } from '@react-three/drei';
import React from 'react';
import { Suspense } from 'react';
import { Text } from "@react-three/drei";
import NeuralNetwork from "./components/globe";

import { Box } from '@react-three/drei';
import Navigation from "./components/navigation";
import Login from './Login/page';


// ...


import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'



export default function Home() {
  return (
    <>
      <Navigation />
      <Canvas       
      gl={{
        powerPreference: "high-performance",
        alpha: false,
        antialias: false,
        stencil: false,
        depth: false
      }}
 camera={{ position: [0, 0, 7] }}>
        <ambientLight intensity={0.5} />
        <OrbitControls enableZoom={true} />


      <Login/>
<Suspense>
<Box args={[10, 10, 10]}>
      <meshStandardMaterial color="red" emissive="blue" emissiveIntensity={5} 
    />
    </Box>
</Suspense>
      
      <EffectComposer>
        <Bloom luminanceThreshold={.00001} luminanceSmoothing={.9} height={700}  intensity={1.5} />

      </EffectComposer>
  

















        {/* <NeuralNetwork /> */}
       
         
        {/* <mesh emitLight
        >
          <Text position={[0, 1, 0]} scale={1} color="white" fillOpacity={100}>
            Student Management System
          </Text>
        </mesh> */}
      
       
        {/* <mesh>
          <Text
            position={[0, -0.5, 0]}
            scale={0.3}
            color="white"
            fillOpacity={100}
            maxWidth={30}
            textAlign="center"
            castShadow={true}
            outlineColor={"green"}
          >
            Welcome to Student Management System, Comprehensive system for
            managing your students data
          </Text>
        </mesh> */}


         


      </Canvas>
    </>
  );
}
