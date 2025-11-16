import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
}

export function ScrollReveal({
  children,
  className = "",
  duration = 0.8,
  delay = 0,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.animation = `scrollReveal ${duration}s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s forwards`;
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [duration, delay]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(40px) scale(0.95)",
      }}
    >
      {children}
    </div>
  );
}
