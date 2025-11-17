import { MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" />
              <span className="font-medium">Location:</span>
              <span>Bangalore, India</span>
            </div>
            <span className="hidden sm:inline">•</span>
            <span>Available for remote opportunities worldwide</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Sandeep Gouda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
