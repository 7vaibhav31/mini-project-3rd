import { useEffect, useRef } from "react";

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      glowX += (mouseX - glowX) * 0.1;
      glowY += (mouseY - glowY) * 0.1;

      glow.style.left = glowX - 40 + "px";
      glow.style.top = glowY - 40 + "px";

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="fixed w-20 h-20 pointer-events-none hidden lg:block"
      style={{
        background:
          "radial-gradient(circle, rgba(26, 188, 206, 0.3) 0%, rgba(26, 188, 206, 0) 70%)",
        borderRadius: "50%",
        filter: "blur(20px)",
        zIndex: 40,
      }}
    />
  );
}
