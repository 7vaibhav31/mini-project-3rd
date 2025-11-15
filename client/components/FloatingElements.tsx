export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating spheres */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`sphere-${i}`}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 100 + 50 + "px",
            height: Math.random() * 100 + 50 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            background: `radial-gradient(circle, ${i % 2 === 0 ? "rgba(26, 188, 206" : "rgba(59, 130, 246"}, 0.2) 0%, transparent 70%)`,
            filter: "blur(40px)",
            animationName: "float",
            animationDuration: `${20 + i * 3}s`,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDelay: `${i * 2}s`,
            opacity: 0.3,
            zIndex: 0,
          }}
        />
      ))}

      {/* Floating dots */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`dot-${i}`}
          className="absolute rounded-full"
          style={{
            width: "4px",
            height: "4px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            background: "rgba(26, 188, 206, 0.6)",
            animationName: "twinkle",
            animationDuration: `${3 + Math.random() * 3}s`,
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
            animationDelay: `${i * 0.5}s`,
            zIndex: 1,
          }}
        />
      ))}

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-30px) translateX(30px);
          }
          66% {
            transform: translateY(30px) translateX(-30px);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
