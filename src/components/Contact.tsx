import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    // Success message
    toast.success("Message sent successfully! I'll get back to you soon.");
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>
        
        <div className="glass-card rounded-2xl p-8 sm:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Write your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="glass-card"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="yourname@gmail.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="glass-card"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project or just say hi..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="glass-card min-h-[150px]"
              />
            </div>
            
            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-to-r from-accent to-[hsl(217,91%,60%)] hover:opacity-90 transition-opacity group"
            >
              <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              Send Message
            </Button>
          </form>
          
          <div className="mt-8 pt-8 border-t border-border/50 text-center">
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Mail className="h-5 w-5 text-accent" />
              <a href="mailto:sandeepgouda209@gmail.com" className="hover:text-accent transition-colors">
                sandeepgouda209@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
