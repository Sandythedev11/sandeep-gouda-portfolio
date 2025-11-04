import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Sandeep Gouda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
