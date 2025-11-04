import javaLogo from "@/assets/java.svg";
import sqlLogo from "@/assets/sql.svg";
import javascriptLogo from "@/assets/javascript.svg";
import reactLogo from "@/assets/react.svg";
import springLogo from "@/assets/spring.svg";
import hibernateLogo from "@/assets/hibernate.svg";
import mysqlLogo from "@/assets/mysql.svg";
import htmlLogo from "@/assets/html.svg";
import gitLogo from "@/assets/git.svg";
import testingLogo from "@/assets/testing.svg";

const skills = [
  { name: "Java", logo: javaLogo },
  { name: "SQL", logo: sqlLogo },
  { name: "JavaScript", logo: javascriptLogo },
  { name: "React", logo: reactLogo },
  { name: "Spring Boot", logo: springLogo },
  { name: "Hibernate", logo: hibernateLogo },
  { name: "MySQL", logo: mysqlLogo },
  { name: "HTML & CSS", logo: htmlLogo },
  { name: "Git", logo: gitLogo },
  { name: "Manual Testing", logo: testingLogo },
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
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform p-3">
                  <img src={skill.logo} alt={`${skill.name} logo`} className="w-full h-full object-contain" />
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
