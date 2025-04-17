import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";
import { Github, ArrowUpRight, Laptop2 } from "lucide-react";

const projects = [
  {
    title: "Online Library Catalog Viewing System",
    description:
      "This website offers e-commerce features like user authentication and checkout, enhanced by a resource scheduling system. It allows users to browse library items and book resources.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
    imageUrl: "/images/projects/Project1.png", // Placeholder image
    githubUrl: "https://github.com/Fuz1onn/PHACTO", // Replace with actual GitHub URL
    liveUrl: "https://fuz1onn.github.io/PHACTO1/",
  },
  {
    title: "Home Buys Plus",
    description:
      "Built with HTML and CSS from a mockup, this website showcases the implementation of a provided design. It demonstrates the ability to create a visually accurate web presence.",
    technologies: ["HTML", "CSS"],
    imageUrl: "/images/projects/Project2.png", // Placeholder image
    githubUrl: "https://github.com/Fuz1onn/HomeBuysPlus",
    liveUrl: "https://fuz1onn.github.io/HomeBuysPlus/",
  },
  {
    title: "Web Employment Searching and Employing System",
    description:
      "This basic web application (PHP, HTML, CSS, JS, MySQL) functions as a job search platform. It enables users to browse available employment opportunities online.",
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "MySQL"],
    imageUrl: "/images/projects/Project3.png", // Placeholder
    githubUrl: "https://github.com/Fuz1onn/gottawork",
    liveUrl: "https://fuz1onn.github.io/gottawork/",
  },
];

const ProjectsSection = () => {
  return (
    <AnimatedSection id="projects" className="bg-gray-900/50">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="bg-gray-800 border-gray-700 hover:shadow-lg transition-shadow"
          >
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Laptop2 className="w-5 h-5" /> {project.title}
              </CardTitle>
              <CardDescription className="text-gray-400">
                {project.technologies.join(" | ")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto rounded-md mb-4"
              />
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  asChild
                  className="text-white hover:bg-white/10 border-cyan-500/30"
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                </Button>
                {project.liveUrl && (
                  <Button
                    variant="outline"
                    asChild
                    className="text-white hover:bg-white/10 border-purple-500/30"
                  >
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ArrowUpRight className="w-4 h-4" /> Live
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;
