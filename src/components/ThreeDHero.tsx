import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Sparkles, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
    const sphereRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (sphereRef.current) {
            sphereRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
            sphereRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <Sphere ref={sphereRef} args={[1.5, 64, 64]}>
                <MeshDistortMaterial
                    color="#10b981"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                    emissive="#064e3b"
                    emissiveIntensity={0.5}
                />
            </Sphere>
        </Float>
    );
}

function WireframeGlobe() {
    const globeRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (globeRef.current) {
            globeRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <Sphere ref={globeRef} args={[2.2, 32, 32]}>
            <meshStandardMaterial
                color="#34d399"
                wireframe
                transparent
                opacity={0.15}
            />
        </Sphere>
    );
}

export default function ThreeDHero() {
    return (
        <div className="absolute inset-0 w-full h-full -z-0 pointer-events-none opacity-60">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} color="#10b981" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#0284c7" />

                <AnimatedSphere />
                <WireframeGlobe />

                <Sparkles
                    count={200}
                    scale={12}
                    size={2}
                    speed={0.4}
                    opacity={0.3}
                    color="#34d399"
                />

                {/* OrbitControls disabled for zoom so it doesn't mess with native scroll, but autoRotate adds a nice global spin */}
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    enableRotate={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                />
            </Canvas>
        </div>
    );
}
