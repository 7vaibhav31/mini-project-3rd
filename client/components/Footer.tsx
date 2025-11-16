export function Footer() {
  return (
    <footer
      id="footer"
      className="relative py-12 bg-gradient-to-b from-background to-foreground/5 border-t border-border"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Quick Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div style={{ animation: "fadeUp 0.8s ease-out both" }}>
            <h3 className="text-lg font-bold font-heading text-foreground mb-4">
              TrendLoom
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              An AI-powered platform for discovering and analyzing emerging
              trends in real-time across social media.
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ animation: "fadeUp 0.8s ease-out 100ms both" }}>
            <h3 className="text-lg font-bold font-heading text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Home", id: "home" },
                { label: "Features", id: "features" },
                { label: "Dashboard", id: "dashboard" },
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

          {/* Resources */}
          <div style={{ animation: "fadeUp 0.8s ease-out 200ms both" }}>
            <h3 className="text-lg font-bold font-heading text-foreground mb-4">
              Resources
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Documentation", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Support", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
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
