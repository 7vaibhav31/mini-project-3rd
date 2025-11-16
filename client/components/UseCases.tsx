import { Lightbulb, Target, Zap, Users } from "lucide-react";
import { Card3D } from "./Card3D";

const useCases = [
  {
    icon: Lightbulb,
    title: "Marketing Teams",
    subtitle: "Campaign Strategy",
    description:
      "Identify emerging trends early and adjust marketing campaigns in real-time for maximum impact and engagement.",
    benefits: [
      "Trending insights",
      "Audience analysis",
      "Content optimization",
    ],
  },
  {
    icon: Target,
    title: "Product Managers",
    subtitle: "Feature Planning",
    description:
      "Understand what users want before they ask by monitoring trend discussions and feature requests across platforms.",
    benefits: ["User feedback", "Market demand", "Roadmap planning"],
  },
  {
    icon: Zap,
    title: "Content Creators",
    subtitle: "Growth Strategy",
    description:
      "Stay ahead of content trends and create viral-worthy content by understanding audience interests and preferences.",
    benefits: ["Trend forecasting", "Engagement boost", "Audience growth"],
  },
  {
    icon: Users,
    title: "Researchers",
    subtitle: "Data Analysis",
    description:
      "Analyze cultural and social trends with advanced AI models for academic research and market analysis.",
    benefits: ["Data insights", "Pattern recognition", "Trend analysis"],
  },
];

export function UseCases() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-accent/3 dark:to-accent/5">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(26, 188, 206, 0.05) 25%, rgba(26, 188, 206, 0.05) 26%, transparent 27%, transparent 74%, rgba(26, 188, 206, 0.05) 75%, rgba(26, 188, 206, 0.05) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(26, 188, 206, 0.05) 25%, rgba(26, 188, 206, 0.05) 26%, transparent 27%, transparent 74%, rgba(26, 188, 206, 0.05) 75%, rgba(26, 188, 206, 0.05) 76%, transparent 77%, transparent)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Animated blobs */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-blob" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <div
          className="text-center mb-20 space-y-4"
          style={{ animation: "fadeUp 0.8s ease-out both" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
            Use Cases & <span className="text-accent">Applications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            TrendLoom powers insights across different industries and use cases
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Card3D
                key={index}
                className="group"
                style={{
                  animation: `fadeUp 0.8s ease-out ${index * 100}ms both`,
                }}
              >
                <div className="relative p-8 rounded-2xl glass dark:glass-dark hover:shadow-lg transition-all duration-300 h-full border-gradient flex flex-col">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/40 to-accent/40 group-hover:from-secondary/60 group-hover:to-accent/60 transition-all duration-300">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold font-heading text-foreground mb-1">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-accent font-semibold mb-4">
                    {useCase.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {useCase.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-2 pt-6 border-t border-border/50">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wider">
                      Key Benefits
                    </p>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card3D>
            );
          })}
        </div>

        {/* Bottom Callout */}
        <div className="relative p-8 md:p-12 rounded-2xl glass dark:glass-dark border-gradient animate-slideUp overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-accent" />
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <p className="text-xl font-semibold text-foreground mb-4">
              Whatever your role, TrendLoom gives you insights that matter
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform adapts to your specific needs and use
              case, providing actionable insights that drive decision-making and
              growth
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
