import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { UseCases } from "@/components/UseCases";
import { TrendHubHero } from "@/components/TrendHubHero";
import { TrendHubModal } from "@/components/TrendHubModal";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";
import { FloatingElements } from "@/components/FloatingElements";
import { ScrollGradientBackground } from "@/components/ScrollGradientBackground";
import { useState, useEffect } from "react";

export default function Index() {
  const [trendHubOpen, setTrendHubOpen] = useState(false);

  useEffect(() => {
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Global Effects */}
      <ScrollGradientBackground />
      <CursorGlow />
      <FloatingElements />

      {/* Main Content */}
      <Header />
      <Hero />
      <div id="about">
        <TrendHubHero onDiscoverTrends={() => setTrendHubOpen(true)} />
      </div>
      <Features />
      <UseCases />
      <Footer />

      {/* Trend Hub Modal */}
      <TrendHubModal
        isOpen={trendHubOpen}
        onClose={() => setTrendHubOpen(false)}
      />
    </div>
  );
}
