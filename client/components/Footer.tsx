import { Mail, Phone, MapPin, Linkedin, Github, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative py-24 bg-gradient-to-b from-background to-foreground/5"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Contact Section */}
        <div className="mb-16 animate-fadeUp">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-4">
              Get in <span className="text-accent">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about TrendLoom AI? We'd love to hear from you!
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Email Card */}
            <div className="p-8 rounded-2xl glass dark:glass-dark border-gradient hover:shadow-lg transition-all duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:m.7vansh31@gmail.com"
                    className="text-accent hover:text-secondary transition-colors"
                  >
                    m.7vansh31@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-8 rounded-2xl glass dark:glass-dark border-gradient hover:shadow-lg transition-all duration-300">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-1">Phone</h3>
                  <a
                    href="tel:+919625987878"
                    className="text-accent hover:text-secondary transition-colors"
                  >
                    +91 9625987878
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Institution Info */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 animate-slideUp">
          {/* College Card */}
          <div className="p-8 rounded-2xl glass dark:glass-dark border-gradient">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground mb-2">Institution</h3>
                <p className="text-foreground font-medium">IMS Engineering College</p>
                <p className="text-muted-foreground text-sm">
                  Department of CSE-AIML
                </p>
              </div>
            </div>
          </div>

          {/* Guide Card */}
          <div className="p-8 rounded-2xl glass dark:glass-dark border-gradient">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-secondary to-accent">
                  <Heart className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground mb-2">Project Guide</h3>
                <p className="text-foreground font-medium">Ms. Sonia Sharma</p>
                <p className="text-muted-foreground text-sm">
                  Faculty Advisor, CSE-AIML Department
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="#"
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

        {/* Copyright */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2025 TrendLoom AI. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Detecting trends. Predicting the future. One insight at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
