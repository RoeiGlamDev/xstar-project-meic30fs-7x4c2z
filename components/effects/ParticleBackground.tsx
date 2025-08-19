import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const particles: any[] = [];

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        if (canvasRef.current) {
            canvasRef.current.appendChild(renderer.domElement);
        }

        for (let i = 0; i < 100; i++) {
            const geometry = new THREE.SphereGeometry(0.1, 32, 32);
            const material = new THREE.MeshBasicMaterial({ color: new THREE.Color('orange') });
            const particle = new THREE.Mesh(geometry, material);
            particle.position.x = Math.random() * 10 - 5;
            particle.position.y = Math.random() * 10 - 5;
            particle.position.z = Math.random() * 10 - 5;
            particles.push(particle);
            scene.add(particle);
        }

        camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            particles.forEach((particle) => {
                particle.rotation.x += 0.01;
                particle.rotation.y += 0.01;
            });
            renderer.render(scene, camera);
        };

        animate();

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        return () => {
            renderer.dispose();
            window.removeEventListener('resize', null);
        };
    }, []);

    return (
        <div ref={canvasRef} className="absolute inset-0 z-0">
            <motion.div
                className="relative flex justify-center items-center h-screen bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-5xl font-bold text-orange-500">Welcome to GlamCS</h1>
                <p className="mt-4 text-lg text-gray-700">
                    Discover the luxurious world of GlamCS cosmetics, where elegance meets beauty.
                </p>
            </motion.div>
        </div>
    );
};

export default ParticleBackground;