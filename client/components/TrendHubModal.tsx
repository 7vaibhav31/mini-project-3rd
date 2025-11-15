import { useState } from "react";
import { X, Zap, TrendingUp } from "lucide-react";

interface TrendHubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TrendHubModal({ isOpen, onClose }: TrendHubModalProps) {
  if (!isOpen) return null;

  const trendOptions = [
    {
      id: "current",
      title: "📊 Live Current Trends",
      description: "Discover what's trending right now across social media. Real-time analysis of cultural trends, memes, and viral topics using advanced clustering algorithms.",
      features: [
        "Real-time trend detection",
        "Interactive clustering visualization",
        "Emerging pattern analysis",
        "Trend severity metrics"
      ],
      buttonText: "Explore Live Trends",
      link: "#",
      icon: Zap,
    },
    {
      id: "predict",
      title: "🎯 Predict Next Trends",
      description: "Predict which YouTube videos will become trending using machine learning. Analyze video metadata, engagement patterns, and content features to forecast viral potential.",
      features: [
        "XGBoost trend prediction",
        "Video metadata analysis",
        "Engagement forecasting",
        "CSV upload & analysis"
      ],
      buttonText: "Try Trend Prediction",
      link: "https://trend-prediction-youtube.streamlit.app/",
      icon: TrendingUp,
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl glass dark:glass-dark border-gradient shadow-2xl animate-fadeUp"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-lg bg-muted hover:bg-accent/20 text-muted-foreground hover:text-accent transition-all duration-200 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
              Welcome to <span className="text-accent">Trend Hub</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose how you want to explore trends. Monitor what's viral now or
              predict the next big thing.
            </p>
          </div>

          {/* Trend Options Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {trendOptions.map((option) => {
              const Icon = option.icon;
              return (
                <div
                  key={option.id}
                  className="group relative p-8 rounded-2xl glass dark:glass-dark border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10 flex flex-col h-full"
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/30 to-accent/30 group-hover:from-secondary/50 group-hover:to-accent/50 transition-all duration-300">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold font-heading text-foreground mb-2">
                    {option.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {option.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8 space-y-2">
                    {option.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-accent text-lg leading-none mt-0.5">
                          ✓
                        </span>
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href={option.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-secondary to-accent text-white font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105 group"
                  >
                    {option.buttonText}
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
                  </a>
                </div>
              );
            })}
          </div>

          {/* Footer Info */}
          <div className="mt-12 p-6 rounded-lg bg-accent/5 border border-accent/30 text-center">
            <p className="text-sm text-foreground">
              Both dashboards use advanced ML algorithms to provide actionable
              insights. Switch between monitoring current trends or predicting
              future ones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
