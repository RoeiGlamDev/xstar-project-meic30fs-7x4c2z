import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/
 * Custom hook to manage 3D interactions for GlamCS cosmetics website.
 * This hook initializes a 3D scene using three.js, providing interactive elements
 * that enhance the user experience on the GlamCS website.
 * 
 * @returns {Object} - Contains the renderer and camera for 3D rendering.
 */
const use3D = () => {
  const sceneRef = useRef<THREE.Scene>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const rendererRef = useRef<THREE.WebGLRenderer>();

  useEffect(() => {
    // Initialize the 3D scene for GlamCS
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    
    // Set renderer size and background color
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xFFFFFF); // White background
    document.body.appendChild(renderer.domElement);

    // Set camera position
    camera.position.z = 5;
    
    // Add lighting to the scene to give a luxurious feel
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1); // White light for elegance
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xFFA500, 1); // Orange light for GlamCS branding
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Create a simple 3D object (e.g., a rotating lipstick tube)
    const geometry = new THREE.CylinderGeometry(0.5, 0.5, 3, 32);
    const material = new THREE.MeshStandardMaterial({ color: 0xFFA500 }); // GlamCS orange color
    const lipstick = new THREE.Mesh(geometry, material);
    lipstick.position.y = 1.5;
    scene.add(lipstick);

    const animate = () => {
      requestAnimationFrame(animate);
      lipstick.rotation.y += 0.01; // Rotate the lipstick for an interactive effect
      renderer.render(scene, camera);
    };

    animate();

    // Clean up on unmount
    return () => {
      renderer.dispose();
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return { renderer: rendererRef.current, camera: cameraRef.current };
};

export default use3D;