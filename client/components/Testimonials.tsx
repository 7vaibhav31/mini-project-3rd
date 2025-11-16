import { Star } from "lucide-react";
import { Card3D } from "./Card3D";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  feedback: string;
  rating: number;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc",
    feedback:
      "TrendLoom AI completely transformed how we approach content strategy. We're catching trends 3 weeks before competitors!",
    rating: 5,
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "Digital Ventures",
    feedback:
      "The insights are incredibly accurate. We've launched 5 successful products based on trends detected by TrendLoom.",
    rating: 5,
    initials: "MC",
  },
  {
    name: "Emma Rodriguez",
    role: "Content Creator",
    company: "Creator Network",
    feedback:
      "My engagement has tripled since using TrendLoom. The trend forecasting is spot on and helps me create relevant content.",
    rating: 5,
    initials: "ER",
  },
  {
    name: "David Patel",
    role: "Research Lead",
    company: "Analytics Lab",
    feedback:
      "The AI models are sophisticated yet easy to understand. Perfect for both academic research and business intelligence.",
    rating: 5,
    initials: "DP",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background via-secondary/5 to-background dark:via-accent/5">
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10">
        {/* Animated shapes */}
        <div className="absolute -top-1/2 left-1/4 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-blob animation-delay-4000" />

        {/* Gradient mesh */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 50%, rgba(26, 188, 206, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)
              `,
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4 animate-fadeUp">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
            What Our <span className="text-accent">Users Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied users who are already leveraging
            TrendLoom AI to stay ahead
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card3D
              key={index}
              className="group animate-fadeUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative p-8 rounded-2xl glass dark:glass-dark hover:shadow-lg transition-all duration-300 h-full border-gradient flex flex-col">
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-foreground leading-relaxed mb-8 flex-1 italic">
                  "{testimonial.feedback}"
                </p>

                {/* Divider */}
                <div className="border-t border-border/50 pt-6 mb-6" />

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {testimonial.initials}
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground truncate">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground truncate">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </Card3D>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 animate-slideUp">
          {[
            "Industry Leading",
            "AI Powered",
            "Real-Time",
            "Secure",
            "Scalable",
            "Trusted",
          ].map((badge, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg border border-border text-center hover:border-accent/50 transition-colors duration-300"
            >
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                {badge}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
