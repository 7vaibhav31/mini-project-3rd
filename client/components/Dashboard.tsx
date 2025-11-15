import { ExternalLink } from "lucide-react";

export function Dashboard() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fadeUp">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
            Explore the Live{" "}
            <span className="text-accent">Trend Dashboard</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive into trending memes, topics, and insights visualized in
            real-time. Interact with our comprehensive dashboard to explore
            emerging patterns across social media platforms.
          </p>
        </div>

        {/* Dashboard Preview Card */}
        <div className="relative animate-slideUp">
          <div className="relative p-8 rounded-2xl glass dark:glass-dark overflow-hidden border-gradient">
            {/* Background gradient */}
            <div className="absolute inset-0 opacity-20 dark:opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary via-accent to-secondary" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center py-20 space-y-8">
              {/* Dashboard Icon/Illustration */}
              <div className="space-y-4 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary/30 to-accent/30">
                  <svg
                    className="w-10 h-10 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <p className="text-xl font-semibold text-foreground">
                  Real-time Trend Visualization
                </p>
                <p className="text-muted-foreground max-w-sm">
                  Access comprehensive dashboards with interactive charts,
                  clustering visualizations, and trend insights
                </p>
              </div>

              {/* CTA Button */}
              {/*
                DASHBOARD URL CONFIGURATION
                This is the original TrendLoom AI dashboard.
                Replace the href value with your Streamlit dashboard URL.
                Example: href="https://your-streamlit-app.streamlit.app"
                The target="_blank" attribute will open the dashboard in a new tab.
              */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="btn-trendloom-dashboard"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-secondary to-accent text-white font-semibold hover:shadow-xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105 group"
              >
                Open Dashboard
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Features List */}
              <div className="grid sm:grid-cols-3 gap-6 pt-8 w-full max-w-2xl">
                {["Interactive Charts", "Live Updates", "Trend Analytics"].map(
                  (feature, idx) => (
                    <div
                      key={idx}
                      className="text-center p-4 rounded-lg bg-white/5 dark:bg-black/20 border border-border"
                    >
                      <p className="text-sm font-medium text-foreground">
                        {feature}
                      </p>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
