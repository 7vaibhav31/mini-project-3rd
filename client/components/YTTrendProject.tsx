import { ExternalLink, BarChart3, Database, Zap, TrendingUp } from "lucide-react";

export function YTTrendProject() {
  const features = [
    {
      icon: Database,
      title: "Data",
      description: "Metadata + TF-IDF text features (title, tags, description)",
    },
    {
      icon: Zap,
      title: "Feature Engineering",
      description: "Engagement ratios, publish hour, text embeddings",
    },
    {
      icon: BarChart3,
      title: "Models Tested",
      description: "Logistic Regression, Random Forest, XGBoost",
    },
    {
      icon: TrendingUp,
      title: "Dashboard Features",
      description: "CSV upload, trend probability, sensitivity controls",
    },
  ];

  const modelResults = [
    {
      name: "Logistic Regression",
      f1: "0.43",
      rocAuc: "0.64",
      selected: false,
    },
    {
      name: "Random Forest",
      f1: "0.56",
      rocAuc: "0.71",
      selected: false,
    },
    {
      name: "XGBoost",
      f1: "0.55",
      rocAuc: "0.77",
      selected: true,
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fadeUp">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
            YouTube Trend <span className="text-accent">Prediction System</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Predicts which YouTube videos are likely to trend using video
            metadata, text features from titles and descriptions, and publish
            timing. Trained on multiple ML models with XGBoost achieving the
            best ROC-AUC score of 0.77.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Features */}
          <div className="space-y-8">
            {/* Features Grid */}
            <div className="grid gap-4">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-lg glass dark:glass-dark border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg group"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/30 to-accent/30 group-hover:from-secondary/50 group-hover:to-accent/50 transition-all duration-300">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-foreground">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <a
              href="https://trend-prediction-youtube.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-secondary to-accent text-white font-semibold hover:shadow-xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 group w-full justify-center md:w-auto"
              aria-label="Open YouTube Trend Prediction Dashboard (opens in new tab)"
            >
              Open YT Trend Dashboard
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right Column - Model Results */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl glass dark:glass-dark border-gradient">
              <h3 className="text-2xl font-bold font-heading text-foreground mb-8">
                Model Performance
              </h3>

              {/* Model Comparison Table */}
              <div className="space-y-4">
                {modelResults.map((model, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg border transition-all duration-300 ${
                      model.selected
                        ? "bg-accent/10 border-accent shadow-lg shadow-accent/20"
                        : "bg-white/5 dark:bg-black/20 border-border"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4
                          className={`font-semibold ${
                            model.selected
                              ? "text-accent"
                              : "text-foreground"
                          }`}
                        >
                          {model.name}
                        </h4>
                        {model.selected && (
                          <span className="text-xs font-semibold text-accent mt-1 block">
                            ✓ Selected
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">
                          F1 Score
                        </p>
                        <p className="text-lg font-bold text-foreground">
                          {model.f1}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs text-muted-foreground uppercase tracking-wider">
                          ROC-AUC
                        </p>
                        <p className="text-lg font-bold text-accent">
                          {model.rocAuc}
                        </p>
                      </div>
                    </div>

                    {/* ROC-AUC Bar */}
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full transition-all duration-500 ${
                            model.selected
                              ? "bg-gradient-to-r from-secondary to-accent"
                              : "bg-secondary"
                          }`}
                          style={{
                            width: `${(parseFloat(model.rocAuc) / 1) * 100}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Insight */}
              <div className="mt-8 p-4 rounded-lg bg-accent/5 border border-accent/30">
                <p className="text-sm text-foreground">
                  <span className="font-semibold text-accent">XGBoost</span>{" "}
                  achieved the highest ROC-AUC of{" "}
                  <span className="font-bold text-accent">0.77</span>, making it
                  the optimal choice for production deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
