import { useEffect, useRef } from "react";
import * as THREE from "three";

export function RotatingGlobe() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight,
    );
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 3;

    // Create a rotating torus knot with gradient effect
    const geometry = new THREE.TorusKnotGeometry(1, 0.4, 100, 16);
    const material = new THREE.MeshPhongMaterial({
      color: 0x1abcce,
      emissive: 0x1abcce,
      emissiveIntensity: 0.8,
      wireframe: false,
      shininess: 100,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Add second rotating shape
    const geometry2 = new THREE.IcosahedronGeometry(0.8, 4);
    const material2 = new THREE.MeshPhongMaterial({
      color: 0x3b82f6,
      emissive: 0x3b82f6,
      emissiveIntensity: 1,
      wireframe: true,
      opacity: 0.7,
      transparent: true,
    });

    const mesh2 = new THREE.Mesh(geometry2, material2);
    scene.add(mesh2);

    // Add lights
    const light1 = new THREE.PointLight(0x1abcce, 1, 100);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x3b82f6, 0.5, 100);
    light2.position.set(-5, -5, 5);
    scene.add(light2);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      mesh.rotation.x += 0.002;
      mesh.rotation.y += 0.003;

      mesh2.rotation.x -= 0.001;
      mesh2.rotation.y -= 0.002;
      mesh2.rotation.z += 0.0015;

      // Apply mouse movement
      mesh.rotation.x += mouseY * 0.5 * 0.05;
      mesh.rotation.y += mouseX * 0.5 * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      if (
        containerRef.current &&
        renderer.domElement.parentNode === containerRef.current
      ) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      geometry2.dispose();
      material2.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "none" }}
    />
  );
}
