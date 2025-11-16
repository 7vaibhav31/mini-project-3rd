import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CursorGlow } from "@/components/CursorGlow";
import { FloatingElements } from "@/components/FloatingElements";
import { ScrollGradientBackground } from "@/components/ScrollGradientBackground";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollGradientBackground />
      <CursorGlow />
      <FloatingElements />

      <Header />

      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-accent/5 dark:to-accent/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div
            className="text-center mb-12 space-y-4"
            style={{ animation: "fadeUp 0.8s ease-out both" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
              Get in <span className="text-accent">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="relative p-8 md:p-12 rounded-2xl glass dark:glass-dark border-gradient space-y-8">
              <div className="space-y-6">
                <div className="space-y-4 pt-6">
                  <a
                    href="mailto:m.7vansh31@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-accent/20 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground font-semibold group-hover:text-accent transition-colors">
                        m.7vansh31@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:saxenasourabh492@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-accent/20 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="text-foreground font-semibold group-hover:text-accent transition-colors">
                        saxenasourabh492@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+919625987878"
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-accent/20 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="text-foreground font-semibold group-hover:text-accent transition-colors">
                        +91 9625987878
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <h4 className="text-lg font-bold font-heading text-foreground mb-4">
                  Organization
                </h4>
                <p className="text-foreground font-semibold">
                  IMS Engineering College
                </p>
                <p className="text-muted-foreground mb-6">
                  Department of CSE-AIML
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://www.linkedin.com/company/ims-engineering-college/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted hover:bg-accent/20 text-muted-foreground hover:text-accent transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-muted hover:bg-accent/20 text-muted-foreground hover:text-accent transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
