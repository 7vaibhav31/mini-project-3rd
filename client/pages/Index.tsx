import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Statistics } from "@/components/Statistics";
import { UseCases } from "@/components/UseCases";
import { Dashboard } from "@/components/Dashboard";
import { Testimonials } from "@/components/Testimonials";
import { Team } from "@/components/Team";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";
import { FloatingElements } from "@/components/FloatingElements";
import { useEffect } from "react";

export default function Index() {
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
      <CursorGlow />
      <FloatingElements />

      {/* Main Content */}
      <Header />
      <Hero />
      <Features />
      <Statistics />
      <About />
      <UseCases />
      <Dashboard />
      <Testimonials />
      <Team />
      <Footer />
    </div>
  );
}
