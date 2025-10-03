import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hans.leonardd@gmail.com",
      href: "mailto:hans.leonardd@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+62 811 6327 766",
      href: "tel:+6281163277666"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jakarta Barat, Indonesia",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/HansLeon-stack",
      color: "hover:bg-foreground hover:text-background"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hans-leonard-839169346/",
      color: "hover:bg-primary hover:text-primary-foreground"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in">
            Get In Touch
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Contact Information */}
            <Card className="p-8 shadow-elegant animate-slide-in-left">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className={`flex items-center gap-4 p-3 rounded-lg transition-all ${
                      item.href !== "#" 
                        ? "hover:bg-primary/10 cursor-pointer" 
                        : "cursor-default"
                    }`}
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Social Media */}
            <Card className="p-8 shadow-elegant animate-slide-in-right">
              <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
              <p className="text-muted-foreground mb-6">
                Feel free to reach out through any of these platforms. I'm most active on GitHub and LinkedIn.
              </p>
              <div className="flex flex-col gap-3">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    asChild
                    className={`justify-start ${social.color} transition-all`}
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3"
                    >
                      <social.icon className="w-5 h-5" />
                      {social.label}
                    </a>
                  </Button>
                ))}
              </div>
            </Card>
          </div>

          {/* Additional Info */}
          <Card className="p-6 bg-gradient-primary text-white shadow-glow text-center">
            <p className="text-lg mb-4">
              Currently seeking opportunities in software development and web technologies.
            </p>
            <Button 
              variant="secondary"
              size="lg"
              asChild
              className="shadow-elegant"
            >
              <a href="mailto:hans.leonardd@gmail.com">
                Send Me an Email
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
