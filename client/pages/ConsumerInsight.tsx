import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card3D } from "@/components/Card3D";
import { CursorGlow } from "@/components/CursorGlow";
import { FloatingElements } from "@/components/FloatingElements";
import { ScrollGradientBackground } from "@/components/ScrollGradientBackground";
import {
  TrendingUp,
  BarChart3,
  Users,
  Zap,
  Target,
  Activity,
} from "lucide-react";

export default function ConsumerInsight() {
  const trendMetrics = [
    {
      label: "Active Trends",
      value: "1,247",
      change: "+23%",
      icon: TrendingUp,
    },
    {
      label: "Predicted Viral",
      value: "312",
      change: "+45%",
      icon: Target,
    },
    {
      label: "Daily Users",
      value: "8,543",
      change: "+12%",
      icon: Users,
    },
    {
      label: "Model Accuracy",
      value: "77%",
      change: "+5%",
      icon: Activity,
    },
  ];

  const topTrends = [
    {
      rank: 1,
      name: "AI Innovation",
      momentum: 94,
      category: "Technology",
      volume: "12.5K",
    },
    {
      rank: 2,
      name: "Sustainable Future",
      momentum: 87,
      category: "Environment",
      volume: "9.3K",
    },
    {
      rank: 3,
      name: "Creator Economy",
      momentum: 82,
      category: "Business",
      volume: "8.7K",
    },
    {
      rank: 4,
      name: "Mental Health Awareness",
      momentum: 78,
      category: "Wellness",
      volume: "7.2K",
    },
    {
      rank: 5,
      name: "Cybersecurity",
      momentum: 71,
      category: "Security",
      volume: "6.1K",
    },
  ];

  const youtubeInsights = [
    {
      metric: "Trending Videos Predicted",
      value: "2,341",
      description: "Accurately forecasted trending videos",
    },
    {
      metric: "Average Engagement Increase",
      value: "+34%",
      description: "Predicted videos showed higher engagement",
    },
    {
      metric: "Model ROC-AUC",
      value: "0.77",
      description: "XGBoost model performance on test set",
    },
  ];

  const categoryBreakdown = [
    { category: "Music", percentage: 28 },
    { category: "Gaming", percentage: 22 },
    { category: "Entertainment", percentage: 19 },
    { category: "Education", percentage: 18 },
    { category: "Tech", percentage: 13 },
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
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <div className="space-y-8 animate-fadeUp">
            <h1 className="text-5xl md:text-7xl font-bold font-heading text-foreground leading-tight">
              Consumer <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Trend Insights</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Real-time analytics and predictive insights into what consumers
              care about. Monitor trending topics and forecast viral content
              before it happens.
            </p>

            <div className="pt-8">
              <a
                href="https://trend-prediction-youtube.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-secondary to-accent text-white font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
              >
                View Interactive Dashboard
                <Zap className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
              Current <span className="text-accent">Performance</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real-time metrics from our trend detection and prediction systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendMetrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <Card3D key={idx} className="group">
                  <div className="relative p-8 rounded-2xl glass dark:glass-dark hover:shadow-lg transition-all duration-300 border-gradient h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/30 to-accent/30">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <span className="text-sm font-semibold text-green-500">
                        {metric.change}
                      </span>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {metric.label}
                      </p>
                      <p className="text-3xl font-bold text-foreground">
                        {metric.value}
                      </p>
                    </div>
                  </div>
                </Card3D>
              );
            })}
          </div>
        </div>
      </section>

      {/* Top Trends */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
              Top Emerging <span className="text-accent">Trends</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Most momentum topics across social media platforms
            </p>
          </div>

          <div className="rounded-2xl glass dark:glass-dark border-gradient overflow-hidden">
            <div className="p-8">
              <div className="space-y-4">
                {topTrends.map((trend, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-lg bg-white/5 dark:bg-black/20 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between gap-4 flex-wrap">
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-accent text-white font-bold flex-shrink-0">
                          {trend.rank}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground">
                            {trend.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {trend.category}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-8">
                        <div className="text-right">
                          <p className="text-xs text-muted-foreground uppercase tracking-wider">
                            Volume
                          </p>
                          <p className="text-lg font-bold text-foreground">
                            {trend.volume}
                          </p>
                        </div>

                        <div className="w-16 h-8 bg-muted rounded-lg relative overflow-hidden">
                          <div
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-secondary to-accent transition-all"
                            style={{ width: `${trend.momentum}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Trend Prediction Insights */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
              YouTube <span className="text-accent">Prediction Insights</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Performance metrics from XGBoost trend prediction model
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {youtubeInsights.map((insight, idx) => (
              <Card3D key={idx} className="group">
                <div className="relative p-8 rounded-2xl glass dark:glass-dark hover:shadow-lg transition-all duration-300 border-gradient h-full flex flex-col">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/30 to-accent/30 mb-6">
                    <BarChart3 className="w-7 h-7 text-accent" />
                  </div>

                  <h3 className="text-lg font-bold font-heading text-foreground mb-2">
                    {insight.metric}
                  </h3>

                  <p className="text-4xl font-bold text-accent mb-4">
                    {insight.value}
                  </p>

                  <p className="text-muted-foreground text-sm">
                    {insight.description}
                  </p>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </section>

      {/* Category Breakdown */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
              Trend <span className="text-accent">Distribution</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Content category breakdown across trending videos
            </p>
          </div>

          <div className="rounded-2xl glass dark:glass-dark border-gradient p-8">
            <div className="space-y-6">
              {categoryBreakdown.map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-foreground">{item.category}</p>
                    <p className="text-accent font-bold">{item.percentage}%</p>
                  </div>
                  <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-secondary to-accent rounded-full transition-all duration-500"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
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
                Ready to Explore More?
              </h2>

              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Dive deeper into trend analysis and predictions with our
                interactive dashboards.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <a
                  href="https://trend-prediction-youtube.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-secondary to-accent text-white font-semibold hover:shadow-xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
                >
                  YouTube Trend Dashboard
                  <TrendingUp className="w-5 h-5" />
                </a>

                <a
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors duration-300"
                >
                  Discover More Trends
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
