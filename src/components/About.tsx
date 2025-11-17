const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="glass-card rounded-2xl p-8 sm:p-10 hover-lift">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I am a 2025 graduate, Software Development Intern, and Full-Stack & AI Developer with a passion for building intelligent, scalable, and high-performance applications. With strong skills in <span className="text-accent font-semibold">Java</span>, <span className="text-accent font-semibold">Python</span>, <span className="text-accent font-semibold">React</span>, <span className="text-accent font-semibold">SQL</span>, and <span className="text-accent font-semibold">Spring Boot</span>, I combine frontend precision, backend reliability, and AI-driven problem-solving to create impactful digital solutions.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I enjoy integrating ML capabilities into applications, automating workflows, and enhancing user experiences through smart features. Known for my <span className="font-semibold text-foreground">adaptability</span>, <span className="font-semibold text-foreground">quick learning</span>, and <span className="font-semibold text-foreground">collaborative mindset</span>, I thrive in dynamic environments and consistently deliver clean, maintainable, and efficient code.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm always exploring new technologies and pushing myself to build smarter, more optimized systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
