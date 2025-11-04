const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="glass-card rounded-2xl p-8 sm:p-10 hover-lift">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a dedicated Software Development Intern and Full-Stack Developer with a passion 
            for creating efficient, scalable web applications. My journey in tech is driven by 
            curiosity and a strong desire to solve real-world problems through code.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            With a solid foundation in <span className="text-accent font-semibold">Java</span>, 
            <span className="text-accent font-semibold"> React</span>, 
            <span className="text-accent font-semibold"> SQL</span>, and modern frameworks like 
            <span className="text-accent font-semibold"> Spring Boot</span>, I bring both frontend 
            finesse and backend robustness to every project.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Known for my <span className="font-semibold text-foreground">strong work ethic</span>, 
            <span className="font-semibold text-foreground"> adaptability</span>, and ability to 
            <span className="font-semibold text-foreground"> learn quickly</span>, I thrive in 
            dynamic environments and enjoy collaborating with teams to deliver outstanding results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
