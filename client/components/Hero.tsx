import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/5 dark:to-accent/5" />

        {/* Animated grid background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(26, 188, 206, 0.05) 25%, rgba(26, 188, 206, 0.05) 26%, transparent 27%, transparent 74%, rgba(26, 188, 206, 0.05) 75%, rgba(26, 188, 206, 0.05) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(26, 188, 206, 0.05) 25%, rgba(26, 188, 206, 0.05) 26%, transparent 27%, transparent 74%, rgba(26, 188, 206, 0.05) 75%, rgba(26, 188, 206, 0.05) 76%, transparent 77%, transparent)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* Glowing circles */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-15 dark:opacity-10 animate-blob" />
        <div className="absolute top-40 right-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-15 dark:opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-15 dark:opacity-10 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        <div className="space-y-8 animate-fadeUp">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold font-heading text-foreground leading-tight">
            Discover What's Trending{" "}
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Right Now
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            AI-powered platform that detects cultural trends from social media
            in real-time. Analyze emerging patterns across Twitter and Reddit
            with advanced machine learning.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            {/*
              DASHBOARD URL CONFIGURATION
              Replace the href="#" below with your Streamlit dashboard URL.
              Example: href="https://your-streamlit-app.streamlit.app"
              Make sure to use the target="_blank" attribute to open in a new tab.
            */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-secondary to-accent text-white font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
            >
              View Dashboard
              <ArrowRight className="w-5 h-5" />
            </a>
            <button
              onClick={() => scrollToSection("about")}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent/10 transition-colors duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
