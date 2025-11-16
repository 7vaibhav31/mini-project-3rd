import { ExternalLink, BarChart3, Database, Zap, TrendingUp } from "lucide-react";
import { Card3D } from "./Card3D";

interface ProjectsShowcaseProps {
  onDiscoverTrends: () => void;
}

export function ProjectsShowcase({ onDiscoverTrends }: ProjectsShowcaseProps) {
  const projects = [
    {
      id: "trendloom",
      title: "TrendLoom AI",
      subtitle: "Real-time Cultural Trend Detection",
      description:
        "Detects cultural trends from social media in real-time using advanced machine learning. Analyzes emerging patterns across Reddit with KMeans clustering to identify viral content.",
      features: [
        "Real-time trend detection",
        "Advanced clustering (KMeans)",
        "Interactive 3D visualizations",
        "Trend severity metrics"
      ],
      tech: ["SBERT", "KMeans", "React", "Streamlit"]
    },
    {
      id: "youtube",
      title: "YouTube Trend Prediction",
      subtitle: "XGBoost-Powered Prediction System",
      description:
        "Predicts which YouTube videos will trend using video metadata, text features, and publish timing. Achieved 0.77 ROC-AUC using XGBoost - the best-performing model among alternatives.",
      features: [
        "XGBoost prediction engine",
        "Metadata & text analysis (TF-IDF)",
        "CSV upload & demo datasets",
        "Interactive probability dashboard"
      ],
      tech: ["XGBoost", "TF-IDF", "Python", "Streamlit", "Pandas"]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fadeUp">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
            Explore Our <span className="text-accent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Two powerful systems to monitor and predict trends using cutting-edge
            machine learning and real-time data analysis.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, idx) => (
            <Card3D
              key={project.id}
              className="group h-full"
              style={{
                animation: `fadeUp 0.8s ease-out ${idx * 100}ms both`,
              }}
            >
              <div className="relative p-8 rounded-2xl glass dark:glass-dark hover:shadow-lg transition-all duration-300 border-gradient h-full flex flex-col">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 w-fit mb-4 px-3 py-1 rounded-full bg-accent/10 border border-accent/30">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                  <span className="text-xs font-semibold text-accent">
                    {project.id === "trendloom" ? "Active" : "Latest"}
                  </span>
                </div>

                {/* Project Header */}
                <h3 className="text-2xl font-bold font-heading text-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-accent font-medium mb-4 text-sm">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-6 flex-grow">
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent text-lg leading-none flex-shrink-0">
                          •
                        </span>
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-secondary/20 text-secondary border border-secondary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card3D>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative p-8 md:p-12 rounded-2xl glass dark:glass-dark border-gradient overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-20 dark:opacity-10">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary via-accent to-secondary" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
                Ready to Explore
                <span className="text-accent"> Trends?</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-xl">
                Choose between monitoring real-time trends or predicting the next viral content. Both powered by advanced ML.
              </p>
            </div>

            <button
              onClick={onDiscoverTrends}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-secondary to-accent text-white font-semibold hover:shadow-xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 whitespace-nowrap flex-shrink-0 group"
            >
              Discover Trends
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
