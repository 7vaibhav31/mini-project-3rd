import { Zap, Shield, TrendingUp, Brain, Gauge, RefreshCw } from "lucide-react";
import { Card3D } from "./Card3D";

const features = [
  {
    icon: Zap,
    title: "Real-Time Detection",
    description:
      "Instantly detect emerging trends as they happen across social media platforms",
  },
  {
    icon: Brain,
    title: "AI-Powered",
    description:
      "Advanced machine learning models (SBERT) for deep content understanding",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description:
      "Enterprise-grade security with encrypted data processing and storage",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    description: "Forecast trend trajectories and predict viral potential",
  },
  {
    icon: Gauge,
    title: "High Performance",
    description:
      "Process millions of data points with sub-second latency and accuracy",
  },
  {
    icon: RefreshCw,
    title: "Continuous Learning",
    description:
      "Models improve over time with adaptive learning from new trend patterns",
  },
];

export function Features() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* 3D Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/3 to-background dark:via-accent/3" />

        {/* Animated shapes */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-blob" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <div
          className="text-center mb-20 space-y-4"
          style={{ animation: "fadeUp 0.8s ease-out both" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
            Powerful <span className="text-accent">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with cutting-edge technology to deliver insights you can trust
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card3D
                key={index}
                className="group"
                style={{
                  animation: `fadeUp 0.8s ease-out ${index * 100}ms both`,
                }}
              >
                <div className="relative p-8 rounded-2xl glass dark:glass-dark hover:shadow-lg transition-all duration-300 h-full border-gradient flex flex-col">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/30 to-accent/30 group-hover:from-secondary/50 group-hover:to-accent/50 transition-all duration-300">
                      <Icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold font-heading text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {feature.description}
                  </p>

                  {/* Hover indicator */}
                  <div className="mt-6 pt-4 border-t border-border/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs text-accent font-medium">
                      Learn more →
                    </p>
                  </div>
                </div>
              </Card3D>
            );
          })}
        </div>
      </div>
    </section>
  );
}
