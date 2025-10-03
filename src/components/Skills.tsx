import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Sparkles } from "lucide-react";

const Skills = () => {
  const hardSkills = [
    "HTML/CSS",
    "JavaScript",
    "PHP",
    "Python",
    "C",
    "React.js",
    "Laravel",
    "SQL"
  ];

  const softSkills = [
    "Teamwork",
    "Leadership",
    "Creativity",
    "Communication",
    "Problem-Solving",
    "Adaptability",
    "Critical-Thinking"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Hard Skills */}
            <Card className="p-8 shadow-elegant hover:shadow-glow transition-all animate-slide-in-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Technical Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {hardSkills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Soft Skills */}
            <Card className="p-8 shadow-elegant hover:shadow-glow transition-all animate-slide-in-right">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="text-sm py-2 px-4 hover:bg-accent hover:text-accent-foreground transition-all cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
