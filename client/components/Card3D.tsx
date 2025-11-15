import { useRef, useEffect, useState } from "react";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
}

export function Card3D({ children, className = "" }: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    let isMoving = false;
    let nextX = 0;
    let nextY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const x = e.clientX - centerX;
      const y = e.clientY - centerY;

      nextX = (y / (rect.height / 2)) * -8;
      nextY = (x / (rect.width / 2)) * 8;

      if (!isMoving) {
        isMoving = true;
        requestAnimationFrame(() => {
          setRotateX(nextX);
          setRotateY(nextY);
          isMoving = false;
        });
      }
    };

    const handleMouseLeave = () => {
      setRotateX(0);
      setRotateY(0);
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={className}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: "preserve-3d",
        transition: "transform 0.2s cubic-bezier(0.23, 1, 0.320, 1)",
      }}
    >
      {children}
    </div>
  );
}
