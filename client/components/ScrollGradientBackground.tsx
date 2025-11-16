import { useEffect, useState } from "react";

export function ScrollGradientBackground() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = scrollHeight > 0 ? scrolled / scrollHeight : 0;
      setScrollProgress(Math.min(progress, 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Light mode color stops
  const lightColors = [
    { pos: 0, color: "rgb(100, 200, 255)" }, // Light cyan blue
    { pos: 0.25, color: "rgb(147, 112, 219)" }, // Medium purple
    { pos: 0.5, color: "rgb(255, 105, 180)" }, // Hot pink
    { pos: 0.75, color: "rgb(26, 188, 206)" }, // Cyan accent
    { pos: 1, color: "rgb(100, 200, 255)" }, // Back to cyan
  ];

  // Dark mode color stops
  const darkColors = [
    { pos: 0, color: "rgba(26, 188, 206, 0.15)" }, // Dark cyan
    { pos: 0.25, color: "rgba(147, 112, 219, 0.15)" }, // Dark purple
    { pos: 0.5, color: "rgba(236, 72, 153, 0.15)" }, // Dark pink
    { pos: 0.75, color: "rgba(59, 130, 246, 0.15)" }, // Dark blue
    { pos: 1, color: "rgba(26, 188, 206, 0.15)" }, // Back to cyan
  ];

  // Determine if dark mode
  const isDark =
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark");

  const colors = isDark ? darkColors : lightColors;

  // Calculate current color based on scroll progress
  const getColorAtProgress = (progress: number): string => {
    // Normalize progress to 0-1 range
    const normalizedProgress = Math.max(0, Math.min(1, progress));

    // Find the two colors to interpolate between
    let startColor = colors[0];
    let endColor = colors[colors.length - 1];

    for (let i = 0; i < colors.length - 1; i++) {
      if (
        normalizedProgress >= colors[i].pos &&
        normalizedProgress <= colors[i + 1].pos
      ) {
        startColor = colors[i];
        endColor = colors[i + 1];
        break;
      }
    }

    // Calculate interpolation factor
    const segmentProgress =
      (normalizedProgress - startColor.pos) / (endColor.pos - startColor.pos);
    const clampedProgress = Math.max(0, Math.min(1, segmentProgress));

    // Parse RGB values
    const parseRGB = (color: string) => {
      const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (match) {
        return [parseInt(match[1]), parseInt(match[2]), parseInt(match[3])];
      }
      return [100, 100, 100];
    };

    const start = parseRGB(startColor.color);
    const end = parseRGB(endColor.color);

    // Interpolate
    const r = Math.round(start[0] + (end[0] - start[0]) * clampedProgress);
    const g = Math.round(start[1] + (end[1] - start[1]) * clampedProgress);
    const b = Math.round(start[2] + (end[2] - start[2]) * clampedProgress);

    // Determine opacity for dark mode
    const opacity = isDark ? "0.15" : "1";

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  const currentColor = getColorAtProgress(scrollProgress);

  return (
    <div
      className="fixed inset-0 -z-20 transition-colors duration-300 pointer-events-none"
      style={{
        background: `radial-gradient(circle at 50% 0%, ${currentColor}, transparent 50%)`,
        opacity: isDark ? 0.5 : 0.3,
      }}
    />
  );
}
