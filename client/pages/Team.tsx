import { Github, Linkedin } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card3D } from "@/components/Card3D";
import { CursorGlow } from "@/components/CursorGlow";
import { FloatingElements } from "@/components/FloatingElements";
import { ScrollGradientBackground } from "@/components/ScrollGradientBackground";

const teamMembers = [
  {
    name: "Vaibhav Sharma",
    role: "Data Analyst",
    initials: "VS",
    photo:
      "https://cdn.builder.io/api/v1/image/assets%2Fa3264a186d0c49d69e14d91b84a719f3%2F0b6c486121e543789d242494733ce0fb?format=webp&width=800",
    linkedinUrl: "https://www.linkedin.com/in/vaibhav731/",
    githubUrl: "https://github.com/7vaibhav31",
  },
  {
    name: "Sourabh Saxena",
    role: "Data Analyst",
    initials: "SS",
    photo:
      "https://cdn.builder.io/api/v1/image/assets%2Fa3264a186d0c49d69e14d91b84a719f3%2F7796bfcf520f4ac1acb0916b119272aa?format=webp&width=800",
    linkedinUrl: "https://www.linkedin.com/in/sourabh-saxena-596024218",
    githubUrl: "https://github.com/sourabh4900",
  },
  {
    name: "Kumar Bhaskar",
    role: "Frontend Devloper",
    initials: "KB",
    photo: "https://i.ibb.co/VWQrqd9v/image.jpg",
    linkedinUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Jatin Gound",
    role: "UNKOWN",
    initials: "JG",
    photo: "https://i.ibb.co/d02R9KkT/image.jpg",
    linkedinUrl: "#",
    githubUrl: "#",
  },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollGradientBackground />
      <CursorGlow />
      <FloatingElements />

      <Header />

      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-accent/5 dark:to-accent/10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div
            className="text-center mb-20 space-y-4"
            style={{ animation: "fadeUp 0.8s ease-out both" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
              Meet the{" "}
              <span className="text-accent">Team Behind TrendLoom</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A dedicated team of developers, data scientists, and AI engineers
              building the future of trend detection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card3D
                key={index}
                className="group"
              >
                <div className="relative p-8 rounded-2xl glass dark:glass-dark hover:shadow-lg transition-all duration-300 border-gradient h-full flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-accent/50 overflow-hidden">
                      {member.photo ? (
                        <img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        member.initials
                      )}
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary to-accent opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-300" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-bold font-heading text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm text-accent font-medium">
                      {member.role}
                    </p>
                  </div>

                  <div className="flex gap-3 pt-6">
                    <a
                      href={member.linkedinUrl}
                      target={member.linkedinUrl !== "#" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-muted hover:bg-accent/20 text-muted-foreground hover:text-accent transition-colors duration-200"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>

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

      <Footer />
    </div>
  );
}
