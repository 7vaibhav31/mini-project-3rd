import { useEffect, useRef, useState } from "react";

interface StatItem {
  label: string;
  value: string;
  prefix?: string;
  suffix?: string;
}

const stats: StatItem[] = [
  {
    label: "Data Sources",
    value: "4",
    prefix: "",
    suffix: "+",
  },
  {
    label: "Accuracy Rate",
    value: "94",
    prefix: "",
    suffix: "%",
  },
];

interface AnimatedCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
}

function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = value / 30;
          const interval = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(interval);
            } else {
              setCount(Math.floor(start));
            }
          }, 50);

          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.5 },
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={counterRef} className="text-5xl font-bold text-accent">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

export function Statistics() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-accent/5 to-secondary/5 dark:from-accent/10 dark:to-secondary/10">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background to-background opacity-50" />

        {/* Floating shapes */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <div
          className="text-center mb-20 space-y-4"
          style={{ animation: "fadeUp 0.8s ease-out both" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
            By The <span className="text-accent">Numbers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            TrendLoom AI is trusted by thousands to understand what's happening
            in real-time
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl glass dark:glass-dark border-gradient hover:shadow-lg transition-all duration-300"
              style={{
                animation: `fadeUp 0.8s ease-out ${index * 150}ms both`,
              }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-accent/20 to-secondary/20" />

              {/* Content */}
              <div className="relative z-10 text-center space-y-4">
                <div className="text-5xl font-bold text-accent">
                  <AnimatedCounter
                    value={parseInt(stat.value)}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                  />
                </div>
                <p className="text-foreground font-semibold text-lg">
                  {stat.label}
                </p>
                <div className="h-1 w-8 mx-auto bg-gradient-to-r from-secondary to-accent rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-20 text-center space-y-4 animate-slideUp">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            And counting... Join thousands of users leveraging AI-powered trend
            intelligence to stay ahead of the curve
          </p>
        </div>
      </div>
    </section>
  );
}
