import { Zap, TrendingUp } from "lucide-react";

interface TrendHubHeroProps {
  onDiscoverTrends: () => void;
}

export function TrendHubHero({ onDiscoverTrends }: TrendHubHeroProps) {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-background to-accent/5 dark:to-accent/10">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Intro */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">
              ✨ Trend Hub
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold font-heading text-foreground leading-tight">
            Your Gateway to <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Trend Intelligence</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leverage our AI-powered systems to monitor real-time trends and predict
            viral content. Two powerful dashboards, one unified insight platform.
          </p>
        </div>

        {/* Two Options */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Live Trends Card */}
          <div className="group relative p-8 md:p-10 rounded-2xl glass dark:glass-dark border border-border hover:border-secondary/50 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/10">
            <div className="absolute top-6 right-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/20 group-hover:bg-secondary/30 transition-all">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-3">
              📊 Live Trends
            </h3>

            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Monitor real-time cultural trends across social media. Discover what's
              viral <span className="text-accent font-semibold">right now</span> using
              advanced clustering algorithms and live data feeds.
            </p>

            <ul className="space-y-2 mb-8">
              {[
                "Real-time trend detection",
                "Interactive 3D clustering",
                "Trend severity metrics",
                "Viral content tracking",
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="text-secondary font-bold mt-0.5">→</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={onDiscoverTrends}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-secondary/80 to-secondary text-white font-semibold hover:shadow-lg hover:shadow-secondary/50 transition-all duration-300 hover:scale-105 group"
            >
              Explore Live Trends
              <Zap className="w-4 h-4 group-hover:animate-pulse" />
            </button>
          </div>

          {/* Prediction Card */}
          <div className="group relative p-8 md:p-10 rounded-2xl glass dark:glass-dark border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
            <div className="absolute top-6 right-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/20 group-hover:bg-accent/30 transition-all">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-3">
              🎯 Predictions
            </h3>

            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Predict YouTube trending videos before they go viral. Our XGBoost
              model analyzes metadata and engagement patterns to forecast
              <span className="text-accent font-semibold"> viral potential</span>.
            </p>

            <ul className="space-y-2 mb-8">
              {[
                "XGBoost prediction engine (77% ROC-AUC)",
                "Video metadata analysis",
                "Engagement forecasting",
                "CSV upload & demo data",
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="text-accent font-bold mt-0.5">→</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://trend-prediction-youtube.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-accent/80 to-accent text-white font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105 group"
            >
              Start Predicting
              <TrendingUp className="w-4 h-4 group-hover:animate-pulse" />
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Want to explore both dashboards in detail?
          </p>
          <button
            onClick={onDiscoverTrends}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors duration-300"
          >
            View Trend Hub
          </button>
        </div>
      </div>
    </section>
  );
}
