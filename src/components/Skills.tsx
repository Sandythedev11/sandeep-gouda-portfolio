const skills = [
  { name: "Java", level: 90 },
  { name: "SQL", level: 85 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 80 },
  { name: "Spring Boot", level: 80 },
  { name: "Hibernate", level: 75 },
  { name: "MySQL", level: 85 },
  { name: "HTML & CSS", level: 90 },
  { name: "Git", level: 85 },
  { name: "Manual Testing", level: 75 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-card rounded-xl p-6 hover-lift group cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-2xl font-bold gradient-text">{skill.level}%</span>
                </div>
                <h3 className="font-semibold text-sm group-hover:text-accent transition-colors">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
