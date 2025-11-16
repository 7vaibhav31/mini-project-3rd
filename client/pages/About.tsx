import { useState } from "react";
import {
  Download,
  Cpu,
  Zap,
  TrendingUp,
  BarChart3,
  Network,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card3D } from "@/components/Card3D";
import { WorkflowModal } from "@/components/WorkflowModal";
import { CursorGlow } from "@/components/CursorGlow";
import { FloatingElements } from "@/components/FloatingElements";
import { ScrollGradientBackground } from "@/components/ScrollGradientBackground";

const liveTrackingSteps = [
  {
    icon: Download,
    title: "Collect Data",
    description: "Gather real-time data from Reddit communities",
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
    icon: Network,
    title: "Cluster Trends",
    description: "Apply KMeans/DBSCAN clustering algorithms",
  },
  {
    icon: BarChart3,
    title: "Visualize Insights",
    description: "Display results in interactive 3D dashboard",
  },
];

const predictionSteps = [
  {
    icon: Download,
    title: "Collect Video Data",
    description: "Gather YouTube video metadata and engagement data",
  },
  {
    icon: Cpu,
    title: "Extract Metadata",
    description: "Process video features and engagement metrics",
  },
  {
    icon: Zap,
    title: "Analyze Patterns",
    description: "Identify key features that influence virality",
  },
  {
    icon: Network,
    title: "Train Model",
    description: "Use XGBoost for viral prediction with 77% accuracy",
  },
  {
    icon: TrendingUp,
    title: "Make Predictions",
    description: "Forecast viral potential before publishing",
  },
  {
    icon: BarChart3,
    title: "Display Results",
    description: "Show predictions and confidence scores",
  },
];

export default function About() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollGradientBackground />
      <CursorGlow />
      <FloatingElements />

      <Header />

      {/* Live Trend Tracking Workflow */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-secondary/5 dark:to-secondary/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div
            className="text-center mb-20 space-y-4"
            style={{ animation: "fadeUp 0.8s ease-out both" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30">
              <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                📊 Live Tracking
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
              Current Trend <span className="text-secondary">Analysis</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Monitor real-time trends as they emerge across social media. Our
              system continuously analyzes Reddit communities to identify
              trending topics instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {liveTrackingSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card3D
                  key={index}
                  className="group relative cursor-pointer"
                  style={{
                    animation: `fadeUp 0.8s ease-out ${index * 100}ms both`,
                  }}
                >
                  <div
                    onClick={() => setSelectedStep(index + 1)}
                    className="relative p-8 rounded-2xl glass dark:glass-dark hover:shadow-lg transition-all duration-300 h-full border-gradient hover:border-secondary/50 active:scale-95"
                  >
                    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-secondary to-secondary/50 flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>

                    <div className="mb-6 relative">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/20 group-hover:from-secondary/40 group-hover:to-secondary/40 transition-all duration-300">
                        <Icon className="w-8 h-8 text-secondary" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {index < liveTrackingSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-8 top-1/2 w-6 h-1 bg-gradient-to-r from-secondary to-transparent" />
                  )}
                </Card3D>
              );
            })}
          </div>

          <div className="relative p-8 md:p-12 rounded-2xl glass dark:glass-dark border-gradient bg-secondary/5">
            <div className="grid md:grid-cols-2 gap-8 text-center">
              <div className="space-y-2">
                <p className="text-3xl font-bold text-secondary">Real-time</p>
                <p className="text-muted-foreground">Live data from Reddit</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-secondary">KMeans</p>
                <p className="text-muted-foreground">
                  Advanced clustering for trend detection
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Viral Prediction Workflow */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-accent/5 dark:to-accent/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div
            className="text-center mb-20 space-y-4"
            style={{ animation: "fadeUp 0.8s ease-out both" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                🎯 Predictions
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
              Future Trend <span className="text-accent">Prediction</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Predict which content will go viral before it happens. Our ML
              model analyzes video data to forecast engagement and viral
              potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {predictionSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card3D
                  key={index}
                  className="group relative cursor-pointer"
                  style={{
                    animation: `fadeUp 0.8s ease-out ${index * 100}ms both`,
                  }}
                >
                  <div
                    onClick={() => setSelectedStep(index + 1)}
                    className="relative p-8 rounded-2xl glass dark:glass-dark hover:shadow-lg transition-all duration-300 h-full border-gradient hover:border-accent/50 active:scale-95"
                  >
                    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-accent to-accent/50 flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>

                    <div className="mb-6 relative">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-accent/20 group-hover:from-accent/40 group-hover:to-accent/40 transition-all duration-300">
                        <Icon className="w-8 h-8 text-accent" />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold font-heading text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {index < predictionSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-8 top-1/2 w-6 h-1 bg-gradient-to-r from-accent to-transparent" />
                  )}
                </Card3D>
              );
            })}
          </div>

          <div className="relative p-8 md:p-12 rounded-2xl glass dark:glass-dark border-gradient bg-accent/5">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <p className="text-3xl font-bold text-accent">77%</p>
                <p className="text-muted-foreground">ROC-AUC Model Accuracy</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-accent">XGBoost</p>
                <p className="text-muted-foreground">Advanced ML Algorithm</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl font-bold text-accent">YouTube</p>
                <p className="text-muted-foreground">Video prediction engine</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WorkflowModal
        isOpen={selectedStep !== null}
        stepNumber={selectedStep || 1}
        title=""
        description=""
        details={[]}
        onClose={() => setSelectedStep(null)}
      />

      <Footer />
    </div>
  );
}
