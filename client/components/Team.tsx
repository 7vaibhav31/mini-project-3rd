import { Github, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Vaibhav Sharma",
    role: "Full Stack Developer",
    initials: "VS",
  },
  {
    name: "Sourabh Saxena",
    role: "Data Analyst",
    initials: "SS",
  },
  {
    name: "Kumar Bhaskar",
    role: "AI Engineer",
    initials: "KB",
  },
  {
    name: "Jatin Gound",
    role: "ML Specialist",
    initials: "JG",
  },
];

export function Team() {
  return (
    <section
      id="team"
      className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-accent/5 dark:to-accent/10"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4 animate-fadeUp">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
            Meet the <span className="text-accent">Team Behind TrendLoom</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A dedicated team of developers, data scientists, and AI engineers
            building the future of trend detection
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group animate-fadeUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative p-8 rounded-2xl glass dark:glass-dark hover:shadow-lg transition-all duration-300 border-gradient h-full flex flex-col items-center text-center space-y-4">
                {/* Profile Photo Placeholder */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-accent/50">
                    {member.initials}
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary to-accent opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300" />
                </div>

                {/* Name */}
                <div className="space-y-1">
                  <h3 className="text-xl font-bold font-heading text-foreground">
                    {member.name}
                  </h3>
                  <p className="text-sm text-accent font-medium">
                    {member.role}
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 pt-4">
                  <button className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-accent/20 text-muted-foreground hover:text-accent transition-colors duration-200">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-accent/20 text-muted-foreground hover:text-accent transition-colors duration-200">
                    <Github className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
