import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
            About Me
          </h2>
          
          <Card className="p-8 mb-8 shadow-elegant animate-slide-in-left">
            <p className="text-lg text-muted-foreground leading-relaxed">
              My name is Hans Leonard, currently a 3rd-year Computer Science student at Binus University. 
              I demonstrate excellent academic performance with a GPA of 3.51/4.00, proficiency in English and 
              Mandarin communication, and the ability to collaborate within diverse teams. I am open-minded, 
              flexible, and enthusiastic about learning new skills while contributing to meaningful projects.
            </p>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Education Card */}
            <Card className="p-6 shadow-elegant hover:shadow-glow transition-all animate-slide-in-left">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="font-medium text-foreground">
                    Universitas Bina Nusantara
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    Bachelor of Computer Science
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Sep 2023 - Sep 2027 (Expected)
                  </p>
                  <p className="text-sm font-semibold text-primary mt-2">
                    GPA: 3.51/4.00
                  </p>
                </div>
              </div>
            </Card>

            {/* Work Experience Card */}
            <Card className="p-6 shadow-elegant hover:shadow-glow transition-all animate-slide-in-right">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10">
                  <Briefcase className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
                  <p className="font-medium text-foreground">CV Primajasa</p>
                  <p className="text-sm text-muted-foreground mb-2">Employee</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    Aug 2022 - Aug 2023
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Provided reliable tax solutions to help clients manage obligations, 
                    ensure compliance, and achieve financial stability.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
