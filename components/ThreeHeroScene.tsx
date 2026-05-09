'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

const orbitColors = ['#2dd4bf', '#34d399', '#38bdf8', '#fbbf24', '#fb7185', '#a78bfa'];

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
    <div className="relative h-[590px] overflow-hidden rounded-[2.25rem] border border-white/10 bg-slate-950/35 shadow-2xl shadow-teal-950/20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(45,212,191,0.2),transparent_24rem),radial-gradient(circle_at_78%_18%,rgba(56,189,248,0.16),transparent_19rem)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(45,212,191,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(45,212,191,0.045)_1px,transparent_1px)] bg-[size:38px_38px] opacity-70" />
      <Canvas
        camera={{ position: [0, 0.75, 8.1], fov: 37 }}
        dpr={[1, 1.7]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          preserveDrawingBuffer: process.env.NODE_ENV !== 'production'
        }}
        onCreated={({ gl }) => {
          gl.outputColorSpace = THREE.SRGBColorSpace;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.toneMappingExposure = 1.05;
        }}
        shadows={!reducedMotion}
        performance={{ min: 0.65 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.72} />
          <hemisphereLight args={[0xeaffff, 0x07111f, 2.6]} />
          <directionalLight position={[4, 6, 5]} intensity={3.4} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
          <directionalLight position={[-5, 1.5, 3]} intensity={1.35} color="#5eead4" />
          <pointLight position={[0, 1.6, 2.8]} intensity={18} color="#2dd4bf" distance={6.2} />
          <ProductScene reducedMotion={reducedMotion} />
          {process.env.NODE_ENV !== 'production' ? <CanvasPixelProbe /> : null}
        </Suspense>
      </Canvas>

      <SceneBadge className="left-5 top-9" dot="bg-emerald-300" label="Games" value="10+" />
      <SceneBadge className="right-5 top-28" dot="bg-cyan-300" label="Apps" value="6+" />
      <SceneBadge className="bottom-8 left-7" dot="bg-amber-300" label="Ideas" value="15+" />
      <div className="pointer-events-none absolute bottom-7 right-7 hidden rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-right text-xs font-bold text-slate-300 shadow-2xl backdrop-blur-md md:block">
        <span className="block text-sm text-white">Interactive build</span>
        Mouse ile hafifçe eğilir
      </div>
    </div>
  );
}

function ProductScene({ reducedMotion }: { reducedMotion: boolean }) {
  const rig = useRef<THREE.Group>(null);
  const phone = useRef<THREE.Group>(null);
  const particleRef = useRef<THREE.Points>(null);

  const particlePositions = useMemo(() => {
    const count = 130;
    const values = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      const radius = 1.8 + Math.random() * 2.8;
      const angle = Math.random() * Math.PI * 2;
      values[index * 3] = Math.cos(angle) * radius;
      values[index * 3 + 1] = (Math.random() - 0.44) * 4.7;
      values[index * 3 + 2] = Math.sin(angle) * 1.35 - 0.45;
    }
    return values;
  }, []);

  useFrame((state) => {
    const elapsed = reducedMotion ? 0 : state.clock.elapsedTime;
    const pointerX = THREE.MathUtils.clamp(state.pointer.x, -0.8, 0.8);
    const pointerY = THREE.MathUtils.clamp(state.pointer.y, -0.8, 0.8);

    if (phone.current) {
      phone.current.rotation.y = THREE.MathUtils.lerp(phone.current.rotation.y, -0.22 + pointerX * 0.28 + Math.sin(elapsed * 0.32) * 0.06, 0.08);
      phone.current.rotation.x = THREE.MathUtils.lerp(phone.current.rotation.x, -0.06 + pointerY * 0.12, 0.08);
      phone.current.position.y = Math.sin(elapsed * 0.58) * 0.09;
    }

    if (rig.current) {
      rig.current.rotation.z = Math.sin(elapsed * 0.22) * 0.035;
      rig.current.position.y = Math.sin(elapsed * 0.42) * 0.035;
    }

    if (particleRef.current) {
      particleRef.current.rotation.y = elapsed * 0.035;
      particleRef.current.rotation.x = Math.sin(elapsed * 0.18) * 0.035;
    }
  });

  return (
    <group ref={rig}>
      <mesh position={[0, -2.45, -0.45]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[3.25, 96]} />
        <meshBasicMaterial color="#2dd4bf" transparent opacity={0.07} />
      </mesh>

      <group ref={phone} rotation={[0, -0.22, -0.03]}>
        <PhoneModel />
        <ScreenExperience />
        <FloatingProductCard position={[-1.95, 1.24, 0.7]} rotation={[0.04, 0.2, -0.08]} color="#38bdf8" label="game" />
        <FloatingProductCard position={[1.9, -0.62, 0.86]} rotation={[-0.08, -0.25, 0.08]} color="#34d399" label="app" />
      </group>

      <mesh rotation={[Math.PI / 2.48, 0, -0.28]}>
        <torusGeometry args={[2.52, 0.018, 10, 128]} />
        <meshBasicMaterial color="#5eead4" transparent opacity={0.38} />
      </mesh>
      <mesh rotation={[Math.PI / 2.25, 0, 0.48]}>
        <torusGeometry args={[3.02, 0.012, 8, 128]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.18} />
      </mesh>

      {orbitColors.map((color, index) => (
        <OrbitingObject key={color} color={color} index={index} reducedMotion={reducedMotion} />
      ))}

      <group position={[-2.85, -0.95, 0.2]} rotation={[0.1, 0.28, -0.12]}>
        <GamepadGlyph />
      </group>

      <group position={[2.55, 1.02, 0.12]} rotation={[0.06, -0.32, 0.2]}>
        <PrototypeStack />
      </group>

      <points ref={particleRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particlePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#99f6e4" size={0.024} transparent opacity={0.42} depthWrite={false} />
      </points>
    </group>
  );
}

function PhoneModel() {
  return (
    <group>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2.72, 5.1, 0.28]} />
        <meshPhysicalMaterial color="#101722" roughness={0.34} metalness={0.48} clearcoat={0.85} clearcoatRoughness={0.22} />
      </mesh>
      <mesh position={[0, 0, 0.18]} castShadow>
        <boxGeometry args={[2.42, 4.78, 0.08]} />
        <meshPhysicalMaterial color="#06111f" roughness={0.2} metalness={0.15} clearcoat={1} clearcoatRoughness={0.08} />
      </mesh>
      <mesh position={[0, 0.26, 0.225]}>
        <boxGeometry args={[2.22, 4.08, 0.035]} />
        <meshBasicMaterial color="#0b2030" />
      </mesh>
      <mesh position={[0, 2.1, 0.27]}>
        <boxGeometry args={[0.84, 0.09, 0.05]} />
        <meshStandardMaterial color="#263241" roughness={0.65} />
      </mesh>
      <mesh position={[0.76, 2.1, 0.28]}>
        <circleGeometry args={[0.055, 24]} />
        <meshBasicMaterial color="#2dd4bf" transparent opacity={0.9} />
      </mesh>
    </group>
  );
}

function ScreenExperience() {
  return (
    <group position={[0, 0, 0.31]}>
      <mesh position={[-0.69, 1.48, 0]}>
        <boxGeometry args={[0.54, 0.54, 0.08]} />
        <meshStandardMaterial color="#2dd4bf" roughness={0.35} metalness={0.12} emissive="#0f766e" emissiveIntensity={0.22} />
      </mesh>
      <mesh position={[0, 1.48, 0]}>
        <boxGeometry args={[0.54, 0.54, 0.08]} />
        <meshStandardMaterial color="#38bdf8" roughness={0.35} metalness={0.1} emissive="#075985" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[0.69, 1.48, 0]}>
        <boxGeometry args={[0.54, 0.54, 0.08]} />
        <meshStandardMaterial color="#fbbf24" roughness={0.38} metalness={0.08} />
      </mesh>

      <mesh position={[0, 0.58, 0.015]}>
        <boxGeometry args={[1.72, 0.86, 0.08]} />
        <meshStandardMaterial color="#13263a" roughness={0.42} metalness={0.1} />
      </mesh>
      <mesh position={[-0.52, 0.58, 0.08]}>
        <boxGeometry args={[0.48, 0.48, 0.09]} />
        <meshStandardMaterial color="#34d399" roughness={0.38} metalness={0.08} />
      </mesh>
      <mesh position={[0.32, 0.72, 0.09]}>
        <boxGeometry args={[0.62, 0.08, 0.04]} />
        <meshBasicMaterial color="#ccfbf1" transparent opacity={0.95} />
      </mesh>
      <mesh position={[0.46, 0.47, 0.09]}>
        <boxGeometry args={[0.88, 0.07, 0.04]} />
        <meshBasicMaterial color="#67e8f9" transparent opacity={0.65} />
      </mesh>

      <ProgressBar position={[0, -0.32, 0.02]} width={1.75} fill={1.22} color="#2dd4bf" />
      <ProgressBar position={[0, -0.68, 0.02]} width={1.75} fill={0.86} color="#38bdf8" />

      <group position={[-0.42, -1.42, 0.04]}>
        <MonogramN />
      </group>
      <group position={[0.42, -1.42, 0.04]}>
        <MonogramP />
      </group>
    </group>
  );
}

function ProgressBar({ position, width, fill, color }: { position: [number, number, number]; width: number; fill: number; color: string }) {
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[width, 0.1, 0.035]} />
        <meshBasicMaterial color="#163247" transparent opacity={0.95} />
      </mesh>
      <mesh position={[-(width - fill) / 2, 0, 0.028]}>
        <boxGeometry args={[fill, 0.1, 0.035]} />
        <meshBasicMaterial color={color} transparent opacity={0.95} />
      </mesh>
    </group>
  );
}

function MonogramN() {
  return (
    <group>
      <LetterBlock position={[-0.16, 0, 0]} size={[0.08, 0.56, 0.06]} />
      <LetterBlock position={[0.16, 0, 0]} size={[0.08, 0.56, 0.06]} />
      <mesh position={[0, 0, 0]} rotation={[0, 0, -0.46]}>
        <boxGeometry args={[0.08, 0.66, 0.06]} />
        <meshBasicMaterial color="#99f6e4" />
      </mesh>
    </group>
  );
}

function MonogramP() {
  return (
    <group>
      <LetterBlock position={[-0.16, 0, 0]} size={[0.08, 0.56, 0.06]} />
      <LetterBlock position={[0.04, 0.16, 0]} size={[0.34, 0.08, 0.06]} />
      <LetterBlock position={[0.17, 0.02, 0]} size={[0.08, 0.32, 0.06]} />
      <LetterBlock position={[0.04, -0.12, 0]} size={[0.34, 0.08, 0.06]} />
    </group>
  );
}

function LetterBlock({ position, size }: { position: [number, number, number]; size: [number, number, number] }) {
  return (
    <mesh position={position}>
      <boxGeometry args={size} />
      <meshBasicMaterial color="#99f6e4" />
    </mesh>
  );
}

function FloatingProductCard({
  position,
  rotation,
  color,
  label
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
  label: 'game' | 'app';
}) {
  return (
    <group position={position} rotation={rotation}>
      <mesh castShadow>
        <boxGeometry args={[1.02, 1.28, 0.08]} />
        <meshPhysicalMaterial color="#f8fafc" roughness={0.5} metalness={0.04} clearcoat={0.65} clearcoatRoughness={0.18} />
      </mesh>
      <mesh position={[0, 0.3, 0.08]}>
        <boxGeometry args={[0.64, 0.42, 0.06]} />
        <meshStandardMaterial color={color} roughness={0.4} />
      </mesh>
      <mesh position={[-0.17, -0.32, 0.08]}>
        <boxGeometry args={[0.48, 0.07, 0.04]} />
        <meshBasicMaterial color="#0f172a" transparent opacity={0.75} />
      </mesh>
      <mesh position={[0.12, -0.52, 0.08]}>
        <boxGeometry args={[0.64, 0.06, 0.04]} />
        <meshBasicMaterial color="#64748b" transparent opacity={0.65} />
      </mesh>
      {label === 'game' ? <MiniJoystick /> : <MiniAppGrid />}
    </group>
  );
}

function MiniJoystick() {
  return (
    <group position={[0.29, 0.3, 0.14]}>
      <mesh>
        <torusGeometry args={[0.11, 0.018, 8, 22]} />
        <meshBasicMaterial color="#0f172a" />
      </mesh>
      <mesh position={[0, 0, 0.02]}>
        <circleGeometry args={[0.036, 18]} />
        <meshBasicMaterial color="#0f172a" />
      </mesh>
    </group>
  );
}

function MiniAppGrid() {
  return (
    <group position={[0.29, 0.3, 0.14]}>
      {[
        [-0.07, 0.07],
        [0.07, 0.07],
        [-0.07, -0.07],
        [0.07, -0.07]
      ].map(([x, y]) => (
        <mesh key={`${x}-${y}`} position={[x, y, 0]}>
          <boxGeometry args={[0.07, 0.07, 0.025]} />
          <meshBasicMaterial color="#0f172a" />
        </mesh>
      ))}
    </group>
  );
}

function OrbitingObject({ color, index, reducedMotion }: { color: string; index: number; reducedMotion: boolean }) {
  const ref = useRef<THREE.Group>(null);
  const radius = 2.42 + (index % 3) * 0.24;
  const speed = 0.28 + index * 0.025;

  useFrame((state) => {
    if (!ref.current) return;
    const elapsed = reducedMotion ? 0 : state.clock.elapsedTime;
    const angle = index * 1.05 + elapsed * speed;
    ref.current.position.set(Math.cos(angle) * radius, Math.sin(angle * 0.9) * 1.28, Math.sin(angle) * 0.92);
    ref.current.rotation.x = elapsed * (0.5 + index * 0.08);
    ref.current.rotation.y = elapsed * (0.42 + index * 0.05);
  });

  return (
    <group ref={ref}>
      {index % 3 === 0 ? <Coin color={color} /> : index % 3 === 1 ? <Sparkle color={color} /> : <CubeToken color={color} />}
    </group>
  );
}

function Coin({ color }: { color: string }) {
  return (
    <mesh castShadow rotation={[Math.PI / 2, 0, 0]}>
      <cylinderGeometry args={[0.17, 0.17, 0.045, 36]} />
      <meshStandardMaterial color={color} roughness={0.36} metalness={0.24} emissive={color} emissiveIntensity={0.08} />
    </mesh>
  );
}

function Sparkle({ color }: { color: string }) {
  return (
    <group>
      <mesh>
        <octahedronGeometry args={[0.18, 0]} />
        <meshStandardMaterial color={color} roughness={0.34} metalness={0.18} emissive={color} emissiveIntensity={0.12} />
      </mesh>
      <mesh rotation={[0, 0, Math.PI / 4]}>
        <torusGeometry args={[0.22, 0.01, 6, 24]} />
        <meshBasicMaterial color={color} transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

function CubeToken({ color }: { color: string }) {
  return (
    <mesh castShadow>
      <boxGeometry args={[0.25, 0.25, 0.25]} />
      <meshStandardMaterial color={color} roughness={0.42} metalness={0.1} />
    </mesh>
  );
}

function GamepadGlyph() {
  return (
    <group>
      <mesh castShadow>
        <boxGeometry args={[0.9, 0.42, 0.16]} />
        <meshPhysicalMaterial color="#f8fafc" roughness={0.42} metalness={0.04} clearcoat={0.7} />
      </mesh>
      <mesh position={[-0.56, 0, 0]} castShadow>
        <sphereGeometry args={[0.26, 24, 16]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.42} />
      </mesh>
      <mesh position={[0.56, 0, 0]} castShadow>
        <sphereGeometry args={[0.26, 24, 16]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.42} />
      </mesh>
      <LetterBlock position={[-0.28, 0, 0.12]} size={[0.24, 0.055, 0.04]} />
      <LetterBlock position={[-0.28, 0, 0.12]} size={[0.055, 0.24, 0.04]} />
      <mesh position={[0.28, 0.06, 0.12]}>
        <circleGeometry args={[0.055, 18]} />
        <meshBasicMaterial color="#2dd4bf" />
      </mesh>
      <mesh position={[0.44, -0.06, 0.12]}>
        <circleGeometry args={[0.055, 18]} />
        <meshBasicMaterial color="#38bdf8" />
      </mesh>
    </group>
  );
}

function PrototypeStack() {
  return (
    <group>
      <mesh position={[-0.24, -0.18, 0]} castShadow>
        <boxGeometry args={[0.46, 0.46, 0.46]} />
        <meshStandardMaterial color="#38bdf8" roughness={0.42} metalness={0.12} />
      </mesh>
      <mesh position={[0.16, 0.1, 0.1]} castShadow>
        <boxGeometry args={[0.42, 0.42, 0.42]} />
        <meshStandardMaterial color="#2dd4bf" roughness={0.36} metalness={0.12} />
      </mesh>
      <mesh position={[0.02, 0.5, -0.04]} castShadow>
        <tetrahedronGeometry args={[0.32, 0]} />
        <meshStandardMaterial color="#fbbf24" roughness={0.4} metalness={0.08} />
      </mesh>
    </group>
  );
}

function SceneBadge({ className, dot, label, value }: { className: string; dot: string; label: string; value: string }) {
  return (
    <div className={`pointer-events-none absolute hidden items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/68 px-4 py-3 text-sm font-black text-white shadow-2xl backdrop-blur-md sm:flex ${className}`}>
      <span className={`h-3.5 w-3.5 rounded-md shadow-lg ${dot}`} />
      <span className="text-slate-300">{label}</span>
      <span className="text-teal-200">{value}</span>
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

function StaticMobileScene() {
  return (
    <div className="scene-fallback-grid relative mx-auto h-[440px] max-w-sm overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/55 shadow-2xl shadow-teal-950/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_40%,rgba(45,212,191,0.28),transparent_15rem),radial-gradient(circle_at_80%_25%,rgba(56,189,248,0.18),transparent_10rem)]" />
      <div className="absolute left-1/2 top-12 h-72 w-44 -translate-x-1/2 rotate-3 rounded-[2rem] border-[10px] border-slate-800 bg-slate-950 shadow-2xl">
        <div className="mx-auto mt-5 h-2 w-16 rounded-full bg-slate-600" />
        <div className="mx-4 mt-7 rounded-2xl bg-slate-800/95 p-3">
          <div className="grid grid-cols-3 gap-2">
            <span className="aspect-square rounded-xl bg-teal-300 shadow-lg shadow-teal-400/30" />
            <span className="aspect-square rounded-xl bg-cyan-300 shadow-lg shadow-cyan-400/30" />
            <span className="aspect-square rounded-xl bg-amber-300 shadow-lg shadow-amber-300/30" />
          </div>
          <div className="mt-4 h-16 rounded-xl bg-gradient-to-br from-teal-300 to-cyan-400 shadow-lg shadow-teal-400/20" />
          <div className="mt-4 space-y-2">
            <span className="block h-2 rounded-full bg-teal-200/80" />
            <span className="block h-2 w-3/4 rounded-full bg-cyan-200/70" />
          </div>
        </div>
      </div>
      <div className="absolute left-6 top-24 rounded-2xl border border-white/10 bg-white/90 px-3 py-2 text-xs font-black text-slate-950 shadow-2xl">Games 10+</div>
      <div className="absolute bottom-24 right-6 rounded-2xl border border-white/10 bg-slate-950/78 px-3 py-2 text-xs font-black text-teal-100 shadow-2xl backdrop-blur-md">Apps 6+</div>
      <div className="absolute bottom-14 left-12 h-12 w-12 rotate-12 rounded-2xl bg-emerald-300/90 shadow-2xl shadow-emerald-300/20" />
      <div className="absolute right-14 top-12 h-10 w-10 rotate-45 rounded-xl bg-cyan-300/85 shadow-2xl shadow-cyan-300/20" />
      <div className="absolute bottom-32 left-8 h-9 w-9 rounded-full bg-amber-300/90 shadow-2xl shadow-amber-300/20" />
    </div>
  );
}
