const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t">
      <div className="container mx-auto px-6">
        <div className="text-center text-muted-foreground">
          <p className="mb-2">
            © {new Date().getFullYear()} Hans Leonard. All rights reserved.
          </p>
          <p className="text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
