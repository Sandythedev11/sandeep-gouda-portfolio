import { Award } from "lucide-react";

const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    date: "2025",
    icon: "🤖",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    issuer: "Oracle",
    date: "2025",
    icon: "📊",
  },
  {
    title: "Oracle AI Vector Search Certified Professional",
    issuer: "Oracle",
    date: "2025",
    icon: "🔍",
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia",
    date: "2024",
    icon: "📈",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Certifications & <span className="gradient-text">Achievements</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href="https://www.linkedin.com/in/sandeep-gouda-42b5ba299/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl p-6 hover-lift group cursor-pointer block"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="font-bold mb-2 group-hover:text-accent transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Award className="h-4 w-4 text-accent" />
                    <span>{cert.issuer}</span>
                    <span>•</span>
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
