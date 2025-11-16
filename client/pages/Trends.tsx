import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card3D } from "@/components/Card3D";
import { CursorGlow } from "@/components/CursorGlow";
import { FloatingElements } from "@/components/FloatingElements";
import { ScrollGradientBackground } from "@/components/ScrollGradientBackground";
import { Zap, TrendingUp, Sparkles, ArrowRight } from "lucide-react";

export default function Trends() {
  const [activeTab, setActiveTab] = useState<"live" | "predict">("live");

  const liveFeatures = [
    "Real-time trend detection",
    "Interactive 3D clustering",
    "Trend severity metrics",
    "Viral content tracking",
  ];

  const predictionFeatures = [
    "Upload your video data and get instant predictions",
    "See detailed engagement forecasts",
    "Understand what makes content go viral",
    "Test multiple ideas before publishing",
  ];

  const trendCategories = [
    { name: "Technology", icon: "💻", count: "2.4K" },
    { name: "Entertainment", icon: "🎬", count: "1.8K" },
    { name: "Social Issues", icon: "🌍", count: "1.5K" },
    { name: "Gaming", icon: "🎮", count: "1.2K" },
    { name: "Health & Wellness", icon: "💪", count: "0.9K" },
    { name: "Lifestyle", icon: "✨", count: "0.7K" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollGradientBackground />
      <CursorGlow />
      <FloatingElements />

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/5 dark:to-accent/5" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-15 dark:opacity-10 animate-blob" />
          <div className="absolute top-40 right-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-15 dark:opacity-10 animate-blob animation-delay-2000" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
          <div className="space-y-8 animate-fadeUp">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                Trend Hub — Your Intelligence Platform
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-heading text-foreground leading-tight">
              Your Gateway to{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Trend Intelligence
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Leverage our AI-powered systems to monitor real-time trends and
              predict viral content. Two powerful dashboards, one unified
              insight platform.
            </p>

            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#options"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-secondary to-accent text-white font-semibold hover:shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 group"
              >
                Explore Options
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Options Section */}
      <section id="options" className="py-24 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
              Choose Your <span className="text-accent">Path</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Pick the tool that fits your needs
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-4 justify-center mb-12">
            <button
              onClick={() => setActiveTab("live")}
              className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === "live"
                  ? "bg-gradient-to-r from-secondary to-accent text-white shadow-lg shadow-secondary/50"
                  : "border-2 border-secondary text-secondary hover:bg-secondary/10"
              }`}
            >
              <Zap className="w-5 h-5" />
              Live Trends
            </button>
            <button
              onClick={() => setActiveTab("predict")}
              className={`inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === "predict"
                  ? "bg-gradient-to-r from-accent to-accent text-white shadow-lg shadow-accent/50"
                  : "border-2 border-accent text-accent hover:bg-accent/10"
              }`}
            >
              <TrendingUp className="w-5 h-5" />
              Predictions
            </button>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Selected Option Details */}
            <div className="space-y-8">
              {activeTab === "live" ? (
                <>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold font-heading text-foreground">
                      Monitor Live Trends
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Stay ahead of the curve by monitoring real-time cultural
                      trends across social media. Discover what's viral right
                      now using advanced clustering algorithms and live data
                      feeds from multiple platforms.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">
                      Key Features:
                    </h4>
                    {liveFeatures.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-lg bg-secondary/5 border border-secondary/20 hover:border-secondary/50 transition-all"
                      >
                        <span className="text-secondary font-bold text-lg flex-shrink-0">
                          →
                        </span>
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-secondary/80 to-secondary text-white font-semibold hover:shadow-lg hover:shadow-secondary/50 transition-all duration-300 hover:scale-105 w-full"
                  >
                    Explore Live Trends Dashboard
                    <Zap className="w-5 h-5" />
                  </a>
                </>
              ) : (
                <>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold font-heading text-foreground">
                      🎯 Predict Viral Content
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Get ahead of the curve by predicting which YouTube videos
                      will trend before they go viral. Receive accurate
                      predictions on engagement potential and viral likelihood
                      to help you create and market content more effectively.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">
                      What You Get:
                    </h4>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 border border-accent/20 hover:border-accent/50 transition-all">
                      <span className="text-accent font-bold text-lg flex-shrink-0">
                        →
                      </span>
                      <span className="text-foreground">
                        Predict viral potential of your content
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 border border-accent/20 hover:border-accent/50 transition-all">
                      <span className="text-accent font-bold text-lg flex-shrink-0">
                        →
                      </span>
                      <span className="text-foreground">
                        Analyze engagement patterns and trends
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 border border-accent/20 hover:border-accent/50 transition-all">
                      <span className="text-accent font-bold text-lg flex-shrink-0">
                        →
                      </span>
                      <span className="text-foreground">
                        Make data-driven content decisions
                      </span>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-accent/5 border border-accent/20 hover:border-accent/50 transition-all">
                      <span className="text-accent font-bold text-lg flex-shrink-0">
                        →
                      </span>
                      <span className="text-foreground">
                        Maximize your reach and engagement
                      </span>
                    </div>
                  </div>

                  <a
                    href="https://trend-prediction-youtube.streamlit.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-accent/80 to-accent text-white font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105 w-full"
                  >
                    Start Making Predictions
                    <TrendingUp className="w-5 h-5" />
                  </a>
                </>
              )}
            </div>

            {/* Right Column - Visual Cards */}
            <div className="space-y-8 flex flex-col justify-center">
              {activeTab === "live" ? null : (
                <Card3D className="group h-full">
                  <div className="relative p-8 rounded-2xl glass dark:glass-dark hover:shadow-lg transition-all duration-300 border-gradient h-full">
                    <div className="mb-6 space-y-4">
                      <h4 className="font-semibold text-foreground">
                        How It Helps You
                      </h4>
                      <div className="space-y-4">
                        <div className="p-4 rounded-lg bg-accent/10 border border-accent/30">
                          <p className="text-sm font-semibold text-foreground mb-2">
                            🎯 Accurate Predictions
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Get reliable forecasts on what will trend
                          </p>
                        </div>
                        <div className="p-4 rounded-lg bg-accent/10 border border-accent/30">
                          <p className="text-sm font-semibold text-foreground mb-2">
                            ⚡ Quick Insights
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Make fast decisions based on real data
                          </p>
                        </div>
                        <div className="p-4 rounded-lg bg-accent/10 border border-accent/30">
                          <p className="text-sm font-semibold text-foreground mb-2">
                            📈 Better Results
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Optimize content before you publish
                          </p>
                        </div>
                        <div className="p-4 rounded-lg bg-accent/10 border border-accent/30">
                          <p className="text-sm font-semibold text-foreground mb-2">
                            🚀 Stay Ahead
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Know what's coming before your competitors
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card3D>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trend Categories */}
      <section className="py-24 relative bg-gradient-to-b from-background to-secondary/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
              Trend <span className="text-accent">Categories</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore trends across different domains
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {trendCategories.map((category, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-xl glass dark:glass-dark border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 cursor-pointer text-center"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold font-heading text-foreground">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative p-8 md:p-12 rounded-2xl glass dark:glass-dark border-gradient overflow-hidden">
            <div className="absolute inset-0 opacity-20 dark:opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary via-accent to-secondary" />
            </div>

            <div className="relative z-10 text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
                Ready to Get Started?
              </h2>

              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Choose your dashboard and start exploring trends or making
                predictions today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a
                  href="#options"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-secondary to-accent text-white font-semibold hover:shadow-xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
                >
                  Explore Dashboards
                  <Sparkles className="w-5 h-5" />
                </a>

                <a
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors duration-300"
                >
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
