import { Card } from "@/components/ui/card";
import { Users, Heart } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
            Experience & Activities
          </h2>

          <div className="space-y-6">
            {/* Organization */}
            <Card className="p-8 shadow-elegant hover:shadow-glow transition-all animate-slide-in-left">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">
                    BINUS Square Student Committee 15 Presidency
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Staff in Self-Development Division in Art Sub-Division | Nov 2024 - Nov 2025
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Organization which is able to create and provide human resources that have global 
                    competitiveness and are able to play an active role in developing the inner talent 
                    and social awareness of boarders.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Coordinator of Public Documentation at the 2025 Art Workshop Event</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Served in Public Documentation Division</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Designed visually appealing posters for events and promotions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Created custom lanyard designs tailored to brand identity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Volunteer */}
            <Card className="p-8 shadow-elegant hover:shadow-glow transition-all animate-slide-in-right">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 flex-shrink-0">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">
                    Volunteer - Perpustakaan Gratis
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    2025
                  </p>
                  <p className="text-muted-foreground">
                    Collaborated with TFI Binus, assisting in daily activities and supporting children 
                    during educational and recreational programs. Responsible for supervising and guiding 
                    children, ensuring a safe and engaging environment.
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

export default Experience;
