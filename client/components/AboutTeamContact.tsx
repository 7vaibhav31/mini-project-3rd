import { useState } from "react";
import {
  Download,
  Cpu,
  Zap,
  TrendingUp,
  BarChart3,
  Network,
  Mail,
  Phone,
  Linkedin,
  Github,
} from "lucide-react";
import {
  CustomTabs,
  CustomTabsList,
  CustomTabsTrigger,
  CustomTabsContent,
} from "@/components/CustomTabs";
import { Card3D } from "./Card3D";
import { WorkflowModal } from "./WorkflowModal";

const processSteps = [
  {
    icon: Download,
    title: "Collect Data",
    description: "Gather real-time data from Reddit",
  },
  {
    icon: Cpu,
    title: "Preprocess",
    description: "Clean and normalize text and images",
  },
  {
    icon: Zap,
    title: "Extract Features",
    description: "Use SBERT models for embeddings",
  },
  {
    icon: TrendingUp,
    title: "Combine Embeddings",
    description: "Merge text and image feature vectors",
  },
  {
    icon: Network,
    title: "Cluster Trends",
    description: "Apply KMeans clustering",
  },
  {
    icon: BarChart3,
    title: "Visualize Insights",
    description: "Display results in interactive dashboard",
  },
];

const teamMembers = [
  {
    name: "Vaibhav Sharma",
    role: "Full Stack Developer",
    initials: "VS",
    linkedinUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Sourabh Saxena",
    role: "Data Analyst",
    initials: "SS",
    linkedinUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Kumar Bhaskar",
    role: "AI Engineer",
    initials: "KB",
    linkedinUrl: "#",
    githubUrl: "#",
  },
  {
    name: "Jatin Gound",
    role: "ML Specialist",
    initials: "JG",
    linkedinUrl: "#",
    githubUrl: "#",
  },
];

export function AboutTeamContact() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-accent/5 dark:to-accent/10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div
          className="text-center mb-12 space-y-4"
          style={{ animation: "fadeUp 0.8s ease-out both" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground">
            Learn More <span className="text-accent">About Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our process, meet our team, and get in touch with us
          </p>
        </div>

        <CustomTabs defaultValue="about">
          <CustomTabsList>
            <CustomTabsTrigger value="about">About</CustomTabsTrigger>
            <CustomTabsTrigger value="team">Team</CustomTabsTrigger>
            <CustomTabsTrigger value="contact">Contact</CustomTabsTrigger>
          </CustomTabsList>

          <CustomTabsContent value="about">
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <Card3D
                      key={index}
                      className="group relative cursor-pointer"
                    >
                      <div
                        onClick={() => setSelectedStep(index + 1)}
                        className="relative p-8 rounded-2xl glass dark:glass-dark hover:shadow-lg transition-all duration-300 h-full border-gradient hover:border-accent/50 active:scale-95"
                      >
                        <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>

                        <div className="mb-6 relative">
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 group-hover:from-secondary/40 group-hover:to-accent/40 transition-all duration-300">
                            <Icon className="w-8 h-8 text-accent" />
                          </div>
                        </div>

                        <h3 className="text-xl font-bold font-heading text-foreground mb-2">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>

                      {index < processSteps.length - 1 && (
                        <div className="hidden lg:block absolute -right-8 top-1/2 w-6 h-1 bg-gradient-to-r from-accent to-transparent" />
                      )}
                    </Card3D>
                  );
                })}
              </div>

              <div className="relative p-8 md:p-12 rounded-2xl glass dark:glass-dark border-gradient">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="space-y-2">
                    <p className="text-3xl font-bold text-accent">Real-time</p>
                    <p className="text-muted-foreground">
                      Live trend detection
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-3xl font-bold text-accent">KMeans</p>
                    <p className="text-muted-foreground">
                      Advanced clustering algorithm
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-3xl font-bold text-accent">
                      Intelligent
                    </p>
                    <p className="text-muted-foreground">
                      Advanced ML clustering
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CustomTabsContent>

          <CustomTabsContent value="team">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card3D
                  key={index}
                  className="group"
                >
                  <div className="relative p-8 rounded-2xl glass dark:glass-dark hover:shadow-lg transition-all duration-300 border-gradient h-full flex flex-col items-center text-center space-y-4">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl group-hover:shadow-accent/50">
                        {member.initials}
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
                        target={
                          member.linkedinUrl !== "#" ? "_blank" : undefined
                        }
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
          </CustomTabsContent>

          <CustomTabsContent value="contact">
            <div className="max-w-2xl mx-auto">
              <div className="relative p-8 md:p-12 rounded-2xl glass dark:glass-dark border-gradient space-y-8">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-accent uppercase tracking-wider">
                      Get in Touch
                    </p>
                    <h3 className="text-3xl font-bold font-heading text-foreground">
                      Contact Us
                    </h3>
                    <p className="text-muted-foreground">
                      Have questions? We'd love to hear from you. Send us a
                      message and we'll respond as soon as possible.
                    </p>
                  </div>

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
                </div>
              </div>
            </div>
          </CustomTabsContent>
        </CustomTabs>
      </div>

      <WorkflowModal
        isOpen={selectedStep !== null}
        stepNumber={selectedStep || 1}
        title=""
        description=""
        details={[]}
        onClose={() => setSelectedStep(null)}
      />
    </section>
  );
}
