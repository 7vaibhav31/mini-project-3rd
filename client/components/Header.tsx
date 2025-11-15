import { ThemeToggle } from "./ThemeToggle";
import { Sparkles, BarChart3 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Team", path: "/team" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo Section */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2 cursor-pointer group">
              <div className="relative">
                <Sparkles className="w-7 h-7 text-accent group-hover:animate-spin transition-all" />
              </div>
              <span className="text-xl font-bold font-heading bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                TrendLoom AI
              </span>
            </Link>

            {/* Consumer Insight Button */}
            <Link
              to="/insights"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                location.pathname === "/insights"
                  ? "bg-accent/20 text-accent"
                  : "text-foreground hover:text-accent hover:bg-accent/10"
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span className="text-sm font-medium hidden sm:inline">
                Consumer Insight
              </span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "text-accent"
                    : "text-foreground hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
