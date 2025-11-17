import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "University Name",
    duration: "2021 - 2024",
    cgpa: "8.46",
    icon: "🎓",
  },
  {
    degree: "12th Grade (Pre-University)",
    institution: "GOVT MARIKAMBA PU COLLEGE SIRSI",
    duration: "Year of Passout: 2022",
    cgpa: "75.5%",
    icon: "📚",
  },
  {
    degree: "10th Grade (Secondary School)",
    institution: "SHARADAMBA HIGHSCHOOL, BHAIRUMBE",
    duration: "Year of Passout: 2020",
    cgpa: "84.2%",
    icon: "📖",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Education <span className="gradient-text">Timeline</span>
        </h2>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{edu.icon}</div>
                
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <span className="text-sm text-accent font-semibold">{edu.duration}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <GraduationCap className="h-4 w-4 text-accent" />
                    <span>{edu.institution}</span>
                  </div>
                  
                  {edu.cgpa !== "Completed" && (
                    <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                      CGPA: {edu.cgpa}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
