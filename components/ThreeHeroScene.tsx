'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

export function ThreeHeroScene({ className = '' }: { className?: string }) {
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    const sync = () => setMobile(window.innerWidth < 640 || window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    sync();
    window.addEventListener('resize', sync, { passive: true });
    return () => window.removeEventListener('resize', sync);
  }, []);

  if (mobile) {
    return <MobileCosmicFallback className={className} />;
  }

  return (
    <div className={className}>
      <Canvas
        dpr={[1, 1.7]}
        camera={{ position: [0, 0, 6.5], fov: 50 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance', preserveDrawingBuffer: process.env.NODE_ENV !== 'production' }}
        onCreated={({ gl }) => {
          gl.outputColorSpace = THREE.SRGBColorSpace;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.08;
        }}
      >
        <Suspense fallback={null}>
          <Scene />
          {process.env.NODE_ENV !== 'production' ? <CanvasPixelProbe /> : null}
        </Suspense>
      </Canvas>
    </div>
  );
}

function MouseGroup({ children }: { children: React.ReactNode }) {
  const ref = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += (pointer.x * 0.6 - ref.current.rotation.y) * 0.05;
    ref.current.rotation.x += (-pointer.y * 0.4 - ref.current.rotation.x) * 0.05;
  });

  return <group ref={ref}>{children}</group>;
}

function Scene() {
  const stars = useMemo(() => {
    const count = 1500;
    const positions = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      const radius = 12 + Math.random() * 28;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[index * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  const sparkles = useMemo(() => {
    const count = 90;
    const positions = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      positions[index * 3] = (Math.random() - 0.5) * 10;
      positions[index * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[index * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return positions;
  }, []);

  return (
    <>
      <ambientLight intensity={0.85} />
      <directionalLight position={[5, 5, 5]} intensity={1.4} color="#ffe4f1" />
      <pointLight position={[-5, -2, -3]} intensity={2.2} color="#7df9ff" />
      <pointLight position={[4, -3, 2]} intensity={1.8} color="#ff7ad9" />
      <pointLight position={[0, 4, 4]} intensity={1.2} color="#fbbf24" />

      <MouseGroup>
        <Planet position={[0, 0, 0]} color="#c084fc" scale={1.6} />
        <Ring position={[0, 0, 0]} color="#7df9ff" />
        <Planet position={[3, 1.4, -2]} color="#ff7ad9" scale={0.8} />
        <Planet position={[-3.2, -1.2, -1]} color="#fbbf24" scale={0.6} />
        <Crystal position={[2.5, -1.5, 1]} color="#7df9ff" />
        <Crystal position={[-2.8, 1.6, 1.5]} color="#ff7ad9" />
        <Cube position={[-2, -2, 2]} color="#a78bfa" />
        <Cube position={[2.2, 2, 1.5]} color="#fbbf24" />

        <points>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[sparkles, 3]} />
          </bufferGeometry>
          <pointsMaterial color="#ffffff" size={0.045} transparent opacity={0.78} depthWrite={false} />
        </points>
      </MouseGroup>

      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[stars, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#ffffff" size={0.025} transparent opacity={0.55} depthWrite={false} />
      </points>
    </>
  );
}

function Planet({ position, color, scale = 1 }: { position: [number, number, number]; color: string; scale?: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.2;
    ref.current.scale.setScalar(scale + Math.sin(state.clock.elapsedTime * 1.1) * 0.025);
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color={color} roughness={0.2} metalness={0.3} emissive={color} emissiveIntensity={0.08} />
    </mesh>
  );
}

function Crystal({ position, color }: { position: [number, number, number]; color: string }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.8;
    ref.current.rotation.y = state.clock.elapsedTime * 0.65;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.8 + position[0]) * 0.18;
  });

  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[0.55, 0]} />
      <meshStandardMaterial color={color} metalness={0.7} roughness={0.1} emissive={color} emissiveIntensity={0.55} />
    </mesh>
  );
}

function Ring({ position, color }: { position: [number, number, number]; color: string }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.35;
    ref.current.rotation.y += delta * 0.25;
  });

  return (
    <mesh ref={ref} position={position}>
      <torusGeometry args={[1.25, 0.06, 16, 100]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.9} />
    </mesh>
  );
}

function Cube({ position, color }: { position: [number, number, number]; color: string }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.55;
    ref.current.rotation.y = state.clock.elapsedTime * 0.72;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.35 + position[0]) * 0.15;
  });

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[0.9, 0.9, 0.9, 3, 3, 3]} />
      <meshStandardMaterial color={color} metalness={0.4} roughness={0.2} emissive={color} emissiveIntensity={0.25} />
    </mesh>
  );
}

function CanvasPixelProbe() {
  const checked = useRef(false);

  useFrame((state) => {
    if (checked.current || state.clock.elapsedTime < 1) return;
    checked.current = true;

    try {
      const canvas = state.gl.domElement;
      const sample = document.createElement('canvas');
      sample.width = Math.max(1, Math.min(160, canvas.width));
      sample.height = Math.max(1, Math.min(160, canvas.height));
      const context = sample.getContext('2d');
      if (!context) return;

      context.drawImage(canvas, 0, 0, sample.width, sample.height);
      const pixels = context.getImageData(0, 0, sample.width, sample.height).data;
      let coloredPixels = 0;

      for (let index = 0; index < pixels.length; index += 4) {
        const alpha = pixels[index + 3];
        const brightness = pixels[index] + pixels[index + 1] + pixels[index + 2];
        if (alpha > 0 && brightness > 20) coloredPixels += 1;
      }

      canvas.dataset.pixelCheck = String(coloredPixels);
      console.info(`NioonyR3FPixelCheck coloredPixels=${coloredPixels}`);
    } catch (error) {
      console.warn('NioonyR3FPixelCheck failed', error);
    }
  });

  return null;
}

function MobileCosmicFallback({ className }: { className: string }) {
  return (
    <div className={`scene-fallback-grid relative overflow-hidden ${className}`}>
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/70 blur-3xl" />
      <div className="absolute left-[18%] top-[32%] h-20 w-20 rounded-full bg-magenta shadow-glow-magenta" />
      <div className="absolute right-[18%] top-[26%] h-14 w-14 rotate-45 rounded-2xl bg-cyan shadow-glow-cyan" />
      <div className="absolute bottom-[28%] left-[30%] h-16 w-16 rounded-full bg-sun shadow-glow-cyan" />
      <div className="absolute bottom-[20%] right-[26%] h-20 w-20 rotate-12 rounded-3xl bg-violet shadow-glow-magenta" />
    </div>
  );
}
