import { Languages as LanguagesIcon } from "lucide-react";

const languages = [
  { name: "English", proficiency: "Fluent", flag: "🇬🇧" },
  { name: "Hindi", proficiency: "Native", flag: "🇮🇳" },
  { name: "Kannada", proficiency: "Native", flag: "🇮🇳" },
  { name: "Tamil", proficiency: "Conversational", flag: "🇮🇳" },
  { name: "Marathi", proficiency: "Conversational", flag: "🇮🇳" },
];

const Languages = () => {
  return (
    <section id="languages" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Languages <span className="gradient-text">Known</span>
        </h2>
        
        <div className="glass-card rounded-2xl p-8">
          <div className="flex items-center justify-center gap-3 mb-8">
            <LanguagesIcon className="h-8 w-8 text-accent" />
            <p className="text-lg text-muted-foreground">
              Multilingual communicator with proficiency in:
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {languages.map((lang, index) => (
              <div
                key={lang.name}
                className="flex flex-col items-center p-4 rounded-xl bg-muted/50 hover:bg-accent/10 hover-lift group cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-4xl mb-2 group-hover:scale-110 transition-transform">
                  {lang.flag}
                </span>
                <h4 className="font-semibold mb-1 group-hover:text-accent transition-colors">
                  {lang.name}
                </h4>
                <span className="text-xs text-muted-foreground">{lang.proficiency}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
