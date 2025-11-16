import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import * as THREE from "three";

interface WorkflowModalProps {
  isOpen: boolean;
  stepNumber: number;
  title: string;
  description: string;
  details: string[];
  onClose: () => void;
}

const stepDetails: Record<
  number,
  { title: string; description: string; details: string[] }
> = {
  1: {
    title: "Collect Data",
    description: "Gather real-time data from Reddit",
    details: [
      "Connect to Reddit API endpoints",
      "Stream posts, comments, and engagement metrics",
      "Filter by trending topics and hashtags",
      "Store raw data with timestamps for analysis",
    ],
  },
  2: {
    title: "Preprocess",
    description: "Clean and normalize text and images",
    details: [
      "Remove duplicates and spam content",
      "Normalize text encoding and formatting",
      "Extract images and videos from posts",
      "Apply language detection for multi-lingual content",
    ],
  },
  3: {
    title: "Extract Features",
    description: "Use SBERT models for embeddings",
    details: [
      "Generate dense vector embeddings using SBERT",
      "Normalize embeddings to unit vectors",
      "Create semantic representations of content",
    ],
  },
  4: {
    title: "Combine Embeddings",
    description: "Merge text and image feature vectors",
    details: [
      "Fuse text and image embeddings with weighted averaging",
      "Apply dimensionality reduction techniques",
      "Create unified trend vectors",
      "Preserve semantic relationships across modalities",
    ],
  },
  5: {
    title: "Cluster Trends",
    description: "Apply KMeans clustering",
    details: [
      "Use KMeans++ initialization for stability",
      "Determine optimal cluster count with silhouette analysis",
      "Identify emerging and existing trend groups",
    ],
  },
  6: {
    title: "Visualize Insights",
    description: "Display results in interactive dashboard",
    details: [
      "Create interactive 3D scatter plots",
      "Build real-time trend timeline visualizations",
      "Generate trend heat maps and word clouds",
      "Export reports with trend predictions",
    ],
  },
};

export function WorkflowModal({
  isOpen,
  stepNumber,
  onClose,
}: WorkflowModalProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const step = stepDetails[stepNumber] || stepDetails[1];

  // 3D animation in modal
  useEffect(() => {
    if (!isOpen || !canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      canvasRef.current.clientWidth / canvasRef.current.clientHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(
      canvasRef.current.clientWidth,
      canvasRef.current.clientHeight,
    );
    renderer.setClearColor(0x000000, 0);
    canvasRef.current.appendChild(renderer.domElement);

    camera.position.z = 2.5;

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 50;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 5;
      posArray[i + 1] = (Math.random() - 0.5) * 5;
      posArray[i + 2] = (Math.random() - 0.5) * 5;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3),
    );
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.15,
      color: 0x1abcce,
      sizeAttenuation: true,
      emissive: 0x1abcce,
      emissiveIntensity: 1,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Create rotating cube
    const cubeGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const cubeMaterial = new THREE.MeshPhongMaterial({
      color: 0x3b82f6,
      emissive: 0x1abcce,
      emissiveIntensity: 1,
      wireframe: true,
      linewidth: 2,
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    scene.add(cube);

    // Add light
    const light = new THREE.PointLight(0x1abcce, 1, 100);
    light.position.set(5, 5, 5);
    scene.add(light);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.003;
      cube.rotation.y += 0.004;
      cube.rotation.z += 0.002;

      particles.rotation.x += 0.0005;
      particles.rotation.y += 0.0008;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      if (
        canvasRef.current &&
        renderer.domElement.parentNode === canvasRef.current
      ) {
        canvasRef.current.removeChild(renderer.domElement);
      }
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      cubeGeometry.dispose();
      cubeMaterial.dispose();
      renderer.dispose();
    };
  }, [isOpen]);

  // Track mouse for modal tilt
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x, y });
    };

    if (isOpen) {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={containerRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl mx-4 max-h-[90vh] overflow-hidden rounded-2xl glass dark:glass-dark border-gradient shadow-2xl"
        style={{
          transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * -5}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.3s ease-out",
        }}
      >
        {/* 3D Canvas Background with overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 to-background/90 pointer-events-none" />
        <div
          ref={canvasRef}
          className="absolute inset-0 opacity-20 pointer-events-none"
        />

        {/* Content */}
        <div className="relative z-10 p-8 overflow-y-auto max-h-[90vh]">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-lg bg-muted hover:bg-accent/20 text-muted-foreground hover:text-accent transition-all duration-200"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Step Badge */}
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-secondary to-accent text-white font-bold text-lg mb-6 animate-fadeUp">
            {stepNumber}
          </div>

          {/* Title */}
          <h2 className="text-4xl font-bold font-heading text-white drop-shadow-lg mb-2 animate-fadeUp">
            {step.title}
          </h2>

          {/* Description */}
          <p className="text-lg text-cyan-300 font-medium mb-8 animate-fadeUp drop-shadow-md">
            {step.description}
          </p>

          {/* Details */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white drop-shadow-md mb-6">
              Key Points:
            </h3>
            {step.details.map((detail, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-4 rounded-lg bg-white/5 dark:bg-black/20 border border-border hover:border-accent/50 transition-all duration-300"
                style={{
                  animation: `fadeUp 0.8s ease-out ${idx * 100}ms both`,
                }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold text-sm">
                  {idx + 1}
                </div>
                <p className="text-white leading-relaxed flex-1 drop-shadow-sm">
                  {detail}
                </p>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-secondary/20 to-accent/20 border border-accent/50 backdrop-blur-sm">
            <p className="text-white mb-4 drop-shadow-sm">
              This step is crucial for accurate trend detection and pattern
              recognition.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-secondary to-accent text-white font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
