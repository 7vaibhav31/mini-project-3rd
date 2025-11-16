import { ArrowRight } from "lucide-react";
import { RotatingGlobe } from "./RotatingGlobe";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/5 dark:to-accent/5" />

        {/* 3D Rotating Globe */}
        <div className="absolute inset-0 h-full w-full opacity-40 dark:opacity-30">
          <RotatingGlobe />
        </div>

        {/* Animated grid background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(26, 188, 206, 0.05) 25%, rgba(26, 188, 206, 0.05) 26%, transparent 27%, transparent 74%, rgba(26, 188, 206, 0.05) 75%, rgba(26, 188, 206, 0.05) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(26, 188, 206, 0.05) 25%, rgba(26, 188, 206, 0.05) 26%, transparent 27%, transparent 74%, rgba(26, 188, 206, 0.05) 75%, rgba(26, 188, 206, 0.05) 76%, transparent 77%, transparent)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Glowing circles */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-15 dark:opacity-10 animate-blob" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-15 dark:opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-15 dark:opacity-10 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        <div className="space-y-8 animate-fadeUp">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-foreground leading-tight">
            Unlock Trend{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Insights
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            AI-powered platform that detects cultural trends from social media
            in real-time. Analyze emerging patterns across Reddit with advanced
            machine learning.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-12">
            <button
              onClick={() => navigate("/trends")}
              className="group inline-flex items-center justify-center gap-3 px-12 py-5 rounded-xl bg-gradient-to-r from-secondary to-accent text-white font-bold text-lg hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <span>🚀 Discover Trends Now</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Supporting Text */}
          <div className="pt-8 space-y-2">
            <p className="text-sm text-accent font-semibold uppercase tracking-widest">
              Choose Your Path
            </p>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Monitor live trends in real-time or predict what comes next
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
