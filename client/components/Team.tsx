import { Github, Linkedin } from "lucide-react";
import { Card3D } from "./Card3D";

// SOCIAL MEDIA LINKS CONFIGURATION
// =====================================
// Add your LinkedIn and GitHub URLs below for each team member
// LinkedIn URL format: https://linkedin.com/in/your-profile
// GitHub URL format: https://github.com/your-username
// =====================================

const teamMembers = [
  {
    name: "Vaibhav Sharma",
    role: "Data Analyst",
    initials: "VS",
    // PASTE VAIBHAV'S LINKEDIN URL HERE:
    linkedinUrl: "#",
    // PASTE VAIBHAV'S GITHUB URL HERE:
    githubUrl: "#",
  },
  {
    name: "Sourabh Saxena",
    role: "Data Analyst",
    initials: "SS",
    // PASTE SOURABH'S LINKEDIN URL HERE:
    linkedinUrl: "#",
    // PASTE SOURABH'S GITHUB URL HERE:
    githubUrl: "#",
  },
  {
    name: "Kumar Bhaskar",
    role: "AI Engineer",
    initials: "KB",
    // PASTE KUMAR'S LINKEDIN URL HERE:
    linkedinUrl: "#",
    // PASTE KUMAR'S GITHUB URL HERE:
    githubUrl: "#",
  },
  {
    name: "Jatin Gound",
    role: "ML Specialist",
    initials: "JG",
    // PASTE JATIN'S LINKEDIN URL HERE:
    linkedinUrl: "#",
    // PASTE JATIN'S GITHUB URL HERE:
    githubUrl: "#",
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
        <div
          className="text-center mb-20 space-y-4"
          style={{ animation: "fadeUp 0.8s ease-out both" }}
        >
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
            <Card3D
              key={index}
              className="group"
              style={{
                animation: `fadeUp 0.8s ease-out ${index * 100}ms both`,
              }}
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
                {/*
                  SOCIAL MEDIA LINKS SECTION
                  Update the linkedinUrl and githubUrl in the teamMembers array above
                  to add clickable links to each team member's profile
                  Replace "#" with actual LinkedIn and GitHub URLs
                */}
                <div className="flex gap-3 pt-6">
                  {/* LinkedIn Link */}
                  {/* Update linkedinUrl value above to make this clickable */}
                  <a
                    href={member.linkedinUrl}
                    target={member.linkedinUrl !== "#" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-accent/20 text-muted-foreground hover:text-accent transition-colors duration-200"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>

                  {/* GitHub Link */}
                  {/* Update githubUrl value above to make this clickable */}
                  <a
                    href={member.githubUrl}
                    target={member.githubUrl !== "#" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-accent/20 text-muted-foreground hover:text-accent transition-colors duration-200"
                    aria-label={`${member.name} GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
}
