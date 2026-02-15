import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Users, 
  PenTool, 
  Eye, 
  Search, 
  Brain, 
  Figma
} from "lucide-react";

const skills = [
  {
    icon: Users,
    name: "User-Centered Design",
    description: "Creating experiences that prioritize user needs and behaviors",
    level: 95,
  },
  {
    icon: PenTool,
    name: "Wireframing & Prototyping",
    description: "From low-fidelity sketches to interactive prototypes",
    level: 90,
  },
  {
    icon: Eye,
    name: "Visual Design",
    description: "Crafting beautiful, cohesive visual systems",
    level: 88,
  },
  {
    icon: Search,
    name: "UX Research",
    description: "Understanding users through research and testing",
    level: 85,
  },
  {
    icon: Brain,
    name: "Problem Solving",
    description: "Critical thinking to solve complex design challenges",
    level: 92,
  },
];

const tools = [
  { name: "Figma", icon: Figma },
  { name: "Adobe XD", icon: PenTool },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
              Expertise
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
              Skills & <span className="text-gradient">Competencies</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group p-6 bg-card rounded-2xl shadow-soft hover:shadow-card transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <skill.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {skill.description}
                    </p>
                  </div>
                </div>
                
                {/* Skill Bar */}
                <div className="mt-4">
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className="h-full bg-gradient-primary rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Tools Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="p-6 bg-gradient-primary rounded-2xl shadow-card text-primary-foreground"
            >
              <h3 className="font-semibold text-xl mb-4">Design Tools</h3>
              <p className="text-primary-foreground/80 text-sm mb-6">
                Proficient in industry-standard design software
              </p>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm"
                  >
                    <tool.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{tool.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;