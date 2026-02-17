import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [{



  title: "Skate Z - Skateboard Website",
  category: "Website",
  problem: "Local skateboard brand needed an online presence to showcase products and build credibility",
  process: "UI/UX design, layout planning, responsive design, and website development",
  outcome: "Created a clean, modern website that highlights products and brand identity",
  color: "from-primary to-secondary",
  link: "https://www.behance.net/gallery/244100497/SKATE-Z?platform=direct"
     },


  {
    title: "Healthcare Dashboard",
    category: "Web Application",
    problem: "Medical professionals needed quick access to patient data without information overload",
    process: "Stakeholder interviews, information architecture, iterative design, accessibility audit",
    outcome: "Improved task completion time by 40% with intuitive data visualization",
    color: "from-secondary to-teal-accent",
  },
 
 {
  title: "Cryztal Zone - Online Game Store Platform",
  category: "Website",
  problem: "Gamers look for affordable game purchasing options and a trustworthy platform with smooth browsing experience",
  process: "UI/UX design, user flow design, wireframing, prototyping, responsive layout",
  outcome: "Designed a clean and intuitive platform that makes discovering and buying discounted games easier",
  color: "from-primary to-teal-accent",
  link: "https://cryztalzone.shop/?srsltid=AfmBOoodPg2EMtBO9lLH-QqpbeLU9P0jsa38soDAB32VacNpWiYZOD2s"
},
<<<<<<< HEAD
=======

>>>>>>> d7c190caa7c87a2a4acd0cca74831d62f7a75ef1
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-card relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A collection of UI/UX case studies showcasing my design process and problem-solving approach
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="group bg-background rounded-2xl shadow-card overflow-hidden hover:shadow-float transition-all duration-500"
              >
                {/* Project Header */}
                <div className={`h-48 bg-gradient-to-br ${project.color} p-6 flex flex-col justify-between relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 right-4 w-32 h-32 rounded-xl bg-white/20 rotate-12 group-hover:rotate-6 transition-transform duration-500" />
                    <div className="absolute bottom-4 left-4 w-24 h-24 rounded-full border-4 border-white/20 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="relative z-10">
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="relative z-10 font-display text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>

                {/* Project Details */}
                <div className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1">
                        Problem
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1">
                        Process
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {project.process}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1">
                        Outcome
                      </h4>
                      <p className="text-sm text-foreground font-medium">
                        {project.outcome}
                      </p>
                    </div>
                  </div>

                  <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-secondary transition-colors">
                    View Case Study
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
