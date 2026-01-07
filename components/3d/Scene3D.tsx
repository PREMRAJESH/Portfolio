"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, PerspectiveCamera } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function FloatingShape({ position, color, speed = 1 }: { position: [number, number, number], color: string, speed?: number }) {
    const meshRef = useRef<THREE.Mesh>(null);
    const randomRotation = useMemo(() => [Math.random() * Math.PI, Math.random() * Math.PI, 0], []);

    useFrame((state) => {
        if (!meshRef.current) return;
        const time = state.clock.getElapsedTime();

        // Smooth rotation
        meshRef.current.rotation.x = randomRotation[0] + time * 0.2 * speed;
        meshRef.current.rotation.y = randomRotation[1] + time * 0.3 * speed;
    });

    return (
        <Float
            speed={2} // Animation speed
            rotationIntensity={1} // XYZ rotation intensity
            floatIntensity={2} // Up/down float intensity
        >
            <mesh ref={meshRef} position={position}>
                <icosahedronGeometry args={[1, 0]} />
                <meshPhysicalMaterial
                    color={color}
                    roughness={0.2}
                    metalness={0.8}
                    transmission={0.5} // Glass-like
                    thickness={2}
                    transparent
                    opacity={0.6}
                />
            </mesh>
        </Float>
    );
}

function Particles() {
    const count = 100;
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 20; // x
            pos[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5; // z
        }
        return pos;
    }, []);

    return (
        <points>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.1}
                color="#4fa1f7"
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
}

export default function Scene3D() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ffff" />

                <group>
                    {/* Main floating shapes */}
                    <FloatingShape position={[-4, 2, 0]} color="#3b82f6" speed={0.8} />
                    <FloatingShape position={[4, -2, -2]} color="#06b6d4" speed={1.2} />
                    <FloatingShape position={[0, 3, -5]} color="#8b5cf6" speed={0.5} />

                    {/* Tiny background particles */}
                    <Particles />
                </group>

                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
