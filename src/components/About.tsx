import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Lightbulb, Palette } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "User-Focused",
    description: "Every design decision centers around user needs and goals",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Turning complex challenges into intuitive solutions",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "Working seamlessly with teams to bring visions to life",
  },
  {
    icon: Palette,
    title: "Detail-Oriented",
    description: "Pixel-perfect execution with aesthetic excellence",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-card relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
              About Me
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
              Designing with <span className="text-gradient">Purpose</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a motivated UI/UX designer passionate about creating digital 
                experiences that are not just visually appealing, but genuinely 
                helpful to users. With a foundation in user-centered design principles, 
                I approach every project with curiosity and empathy.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My journey includes freelancing for diverse clients, taking on 
                self-initiated redesign projects to sharpen my skills, and continuously 
                learning from industry best practices. I believe great design is 
                invisible—it simply works.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not designing, I'm exploring new tools, studying design 
                systems, and finding inspiration in everyday interactions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="p-6 bg-background rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;