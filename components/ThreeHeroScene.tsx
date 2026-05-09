'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

export function ThreeHeroScene() {
  const [mobile, setMobile] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const sync = () => {
      setMobile(window.innerWidth < 640);
      setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    };
    sync();
    window.addEventListener('resize', sync, { passive: true });
    return () => window.removeEventListener('resize', sync);
  }, []);

  if (mobile) {
    return <StaticMobileScene />;
  }

  return (
    <div className="relative h-[560px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(45,212,191,0.18),transparent_34rem)]" />
      <Canvas
        camera={{ position: [0, 0.7, 8.4], fov: 38 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance', preserveDrawingBuffer: process.env.NODE_ENV !== 'production' }}
        shadows={!reducedMotion}
        performance={{ min: 0.6 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <hemisphereLight args={[0xffffff, 0x07111f, 2.2]} />
          <directionalLight position={[4, 5, 6]} intensity={3.2} castShadow />
          <directionalLight position={[-5, 2, 4]} intensity={1.2} color="#5eead4" />
          <ProductScene reducedMotion={reducedMotion} />
          {process.env.NODE_ENV !== 'production' ? <CanvasPixelProbe /> : null}
        </Suspense>
      </Canvas>
      <SceneBadge className="left-6 top-24" color="bg-coral-400" label="Games" />
      <SceneBadge className="right-8 bottom-24" color="bg-teal-300" label="Apps" />
    </div>
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

function ProductScene({ reducedMotion }: { reducedMotion: boolean }) {
  const rig = useRef<THREE.Group>(null);
  const phone = useRef<THREE.Group>(null);
  const particles = useRef<THREE.Points>(null);

  const particlePositions = useMemo(() => {
    const count = 90;
    const values = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      values[index * 3] = (Math.random() - 0.5) * 6.4;
      values[index * 3 + 1] = (Math.random() - 0.5) * 5.4;
      values[index * 3 + 2] = (Math.random() - 0.5) * 2 - 0.9;
    }
    return values;
  }, []);

  useFrame((state) => {
    const elapsed = reducedMotion ? 0 : state.clock.elapsedTime;
    const pointerX = state.pointer.x;
    const pointerY = state.pointer.y;

    if (phone.current) {
      phone.current.rotation.y = Math.sin(elapsed * 0.42) * 0.18 + pointerX * 0.18;
      phone.current.rotation.x = -0.08 + pointerY * 0.08;
      phone.current.position.y = Math.sin(elapsed * 0.65) * 0.08;
    }

    if (rig.current) {
      rig.current.rotation.z = Math.sin(elapsed * 0.25) * 0.03;
    }

    if (particles.current) {
      particles.current.rotation.y = elapsed * 0.03;
    }
  });

  return (
    <group ref={rig}>
      <group ref={phone}>
        <mesh castShadow receiveShadow>
          <boxGeometry args={[2.7, 4.9, 0.22]} />
          <meshStandardMaterial color="#151a22" roughness={0.52} metalness={0.18} />
        </mesh>
        <mesh position={[0, 0, 0.17]} castShadow>
          <boxGeometry args={[2.34, 4.48, 0.08]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.76} />
        </mesh>
        <mesh position={[0, 1.94, 0.25]}>
          <boxGeometry args={[0.84, 0.08, 0.05]} />
          <meshStandardMaterial color="#cbd5e1" roughness={0.85} />
        </mesh>
        <AppTile position={[-0.74, 1.1, 0.34]} color="#38bdf8" />
        <AppTile position={[0, 1.1, 0.34]} color="#34d399" />
        <AppTile position={[0.74, 1.1, 0.34]} color="#fbbf24" />
        <AppTile position={[-0.37, 0.34, 0.34]} color="#fb7185" small />
        <AppTile position={[0.37, 0.34, 0.34]} color="#14b8a6" small />
        <UILine position={[0, -0.42, 0.29]} width={1.76} />
        <UILine position={[0, -0.74, 0.29]} width={1.76} />
        <UILine position={[-0.34, -1.06, 0.29]} width={1.08} />
      </group>

      <mesh rotation={[Math.PI / 2.55, 0, -0.35]}>
        <torusGeometry args={[2.45, 0.018, 10, 112]} />
        <meshBasicMaterial color="#5eead4" transparent opacity={0.36} />
      </mesh>

      {['#38bdf8', '#34d399', '#fbbf24', '#fb7185', '#14b8a6', '#a78bfa'].map((color, index) => (
        <OrbitNode key={color} color={color} index={index} reducedMotion={reducedMotion} />
      ))}

      <points ref={particles}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particlePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#5eead4" size={0.026} transparent opacity={0.32} />
      </points>
    </group>
  );
}

function AppTile({ position, color, small = false }: { position: [number, number, number]; color: string; small?: boolean }) {
  return (
    <mesh position={position} castShadow>
      <boxGeometry args={small ? [0.52, 0.52, 0.16] : [0.58, 0.58, 0.16]} />
      <meshStandardMaterial color={color} roughness={0.5} metalness={0.06} />
    </mesh>
  );
}

function UILine({ position, width }: { position: [number, number, number]; width: number }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[width, 0.08, 0.05]} />
      <meshStandardMaterial color="#dbe7e4" roughness={0.85} />
    </mesh>
  );
}

function OrbitNode({ color, index, reducedMotion }: { color: string; index: number; reducedMotion: boolean }) {
  const ref = useRef<THREE.Mesh>(null);
  const radius = 2.28 + (index % 2) * 0.28;

  useFrame((state) => {
    if (!ref.current) return;
    const elapsed = reducedMotion ? 0 : state.clock.elapsedTime;
    const angle = index * 1.05 + elapsed * (0.32 + index * 0.018);
    ref.current.position.set(Math.cos(angle) * radius, Math.sin(angle * 0.92) * 1.22, Math.sin(angle) * 0.78);
    ref.current.rotation.x = elapsed * 0.8;
    ref.current.rotation.y = elapsed * 0.55;
  });

  return (
    <mesh ref={ref} castShadow>
      <icosahedronGeometry args={[0.16 + (index % 2) * 0.04, 0]} />
      <meshStandardMaterial color={color} roughness={0.46} metalness={0.12} />
    </mesh>
  );
}

function SceneBadge({ className, color, label }: { className: string; color: string; label: string }) {
  return (
    <div className={`pointer-events-none absolute hidden items-center gap-3 rounded-2xl border border-white/10 bg-white/90 px-4 py-3 text-sm font-black text-slate-950 shadow-2xl sm:flex ${className}`}>
      <span className={`h-4 w-4 rounded-md ${color}`} />
      {label}
    </div>
  );
}

function StaticMobileScene() {
  return (
    <div className="scene-fallback-grid relative mx-auto h-[400px] max-w-sm overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/60">
      <div className="absolute inset-8 rounded-full bg-teal-300/15 blur-3xl" />
      <div className="absolute left-1/2 top-10 h-72 w-44 -translate-x-1/2 rotate-3 rounded-[2rem] border-[10px] border-slate-800 bg-slate-100 shadow-2xl">
        <div className="mx-auto mt-6 h-2 w-16 rounded-full bg-slate-300" />
        <div className="mt-10 grid grid-cols-3 gap-3 px-5">
          <span className="aspect-square rounded-xl bg-cyan-400 shadow-lg" />
          <span className="aspect-square rounded-xl bg-emerald-400 shadow-lg" />
          <span className="aspect-square rounded-xl bg-amber-300 shadow-lg" />
          <span className="aspect-square rounded-xl bg-rose-400 shadow-lg" />
          <span className="aspect-square rounded-xl bg-teal-500 shadow-lg" />
        </div>
      </div>
      <div className="absolute left-8 top-28 h-10 w-10 rounded-xl bg-emerald-300/80 shadow-2xl" />
      <div className="absolute bottom-20 right-8 h-10 w-10 rounded-full bg-teal-300/80 shadow-2xl" />
    </div>
  );
}
