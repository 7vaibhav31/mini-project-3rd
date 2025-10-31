import { Mail, Phone, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative py-16 bg-gradient-to-b from-background to-foreground/5 border-t border-border"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Contact Section */}
          <div style={{ animation: "fadeUp 0.8s ease-out both" }}>
            <h3 className="text-lg font-bold font-heading text-foreground mb-6">
              Contact
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:m.7vansh31@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">m.7vansh31@gmail.com</span>
              </a>
              <a
                href="tel:+919625987878"
                className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">+91 9625987878</span>
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div style={{ animation: "fadeUp 0.8s ease-out 100ms both" }}>
            <h3 className="text-lg font-bold font-heading text-foreground mb-6">
              Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", id: "home" },
                { label: "About", id: "about" },
                { label: "Team", id: "team" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.id);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Institution & Social Section */}
          <div style={{ animation: "fadeUp 0.8s ease-out 200ms both" }}>
            <h3 className="text-lg font-bold font-heading text-foreground mb-6">
              Organization
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              <span className="font-medium text-foreground">
                IMS Engineering College
              </span>
              <br />
              Department of CSE-AIML
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-accent/20 text-muted-foreground hover:text-accent transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-accent/20 text-muted-foreground hover:text-accent transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 TrendLoom AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
