import {
  Download,
  Cpu,
  Zap,
  TrendingUp,
  BarChart3,
  Network,
} from "lucide-react";
import { Card3D } from "./Card3D";

const processSteps = [
  {
    icon: Download,
    title: "Collect Data",
    description: "Gather real-time data from Twitter and Reddit",
  },
  {
    icon: Cpu,
    title: "Preprocess",
    description: "Clean and normalize text and images",
  },
  {
    icon: Zap,
    title: "Extract Features",
    description: "Use SBERT & CLIP models for embeddings",
  },
  {
    icon: TrendingUp,
    title: "Combine Embeddings",
    description: "Merge text and image feature vectors",
  },
  {
    icon: Network,
    title: "Cluster Trends",
    description: "Apply KMeans/DBSCAN clustering",
  },
  {
    icon: BarChart3,
    title: "Visualize Insights",
    description: "Display results in interactive dashboard",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-accent/5 dark:to-accent/10"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4 animate-fadeUp">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
            How TrendLoom <span className="text-accent">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our intelligent pipeline processes social media data through
            advanced AI models to identify emerging cultural trends
          </p>
        </div>

        {/* Process Flow - Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card3D
                key={index}
                className="group relative animate-fadeUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card */}
                <div className="relative p-8 rounded-2xl glass dark:glass-dark hover:shadow-lg transition-all duration-300 h-full border-gradient">
                  {/* Number badge */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 group-hover:from-secondary/40 group-hover:to-accent/40 transition-all duration-300">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                  </div>

                  {/* Text */}
                  <h3 className="text-xl font-bold font-heading text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Flow arrow on desktop */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-8 top-1/2 w-6 h-1 bg-gradient-to-r from-accent to-transparent" />
                )}
              </Card3D>
            );
          })}
        </div>

        {/* Summary Section */}
        <div className="relative p-8 md:p-12 rounded-2xl glass dark:glass-dark border-gradient animate-slideUp">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-3xl font-bold text-accent">Real-time</p>
              <p className="text-muted-foreground">Live trend detection</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-accent">Multi-modal</p>
              <p className="text-muted-foreground">Text and image analysis</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-accent">Intelligent</p>
              <p className="text-muted-foreground">Advanced ML clustering</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
