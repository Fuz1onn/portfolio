import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";

const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 90 },
  { name: "Bootstrap", level: 90 },
  { name: "PHP", level: 90 },
  { name: "React", level: 80 },
  { name: "TypeScript", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "React Native", level: 50 },
  { name: "Flutter", level: 50 },
  { name: "MySQL", level: 80 },
  { name: "Figma", level: 60 },
];

const SkillsSection = () => (
  <AnimatedSection id="skills" className="bg-gray-900">
    <h2 className="text-3xl font-bold text-white mb-8 text-center">Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {skills.map((skill, index) => (
        <Card key={index} className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">{skill.name}</CardTitle>
            <CardDescription className="text-gray-400">
              {skill.level}% Proficiency
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2.5 rounded-full"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </AnimatedSection>
);
export default SkillsSection;
