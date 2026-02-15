import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Award, Calendar } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "UI/UX Designer",
    organization: "Freelance",
    period: "January 2024 - Present",
    highlights: [
      "Delivered 15% faster project turnaround through efficient design workflows",
      "Improved user engagement metrics for multiple client projects",
      "Collaborated with developers to ensure pixel-perfect implementations",
      "Conducted user research and usability testing sessions",
    ],
  },
];

const education = [
  {
    degree: "Bachelor in Automation and Robotics",
    institution: "University",
    status: "Pursuing",
    icon: GraduationCap,
  },
];

const certifications = [
  {
    name: "Google UX Design Professional Certificate",
    issuer: "Google via Coursera",
    icon: Award,
  },
  {
    name: "High-Fidelity Prototyping in Figma",
    issuer: "Figma / Online",
    icon: Award,
  },
  {
    name: "UI/UX Design Workshop",
    issuer: "IIT Bombay",
    icon: Award,
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
              Background
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
              Experience & <span className="text-gradient">Education</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Experience
                </h3>
              </div>

              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className="relative pl-8 pb-8 border-l-2 border-border last:pb-0"
                >
                  <div className="absolute left-[-9px] top-0 w-4 h-4 bg-secondary rounded-full border-4 border-background" />
                  
                  <div className="bg-card rounded-2xl p-6 shadow-soft">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <h4 className="font-semibold text-lg text-foreground">
                      {exp.title}
                    </h4>
                    <p className="text-secondary font-medium mb-4">
                      {exp.organization}
                    </p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Education & Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Education */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Education
                  </h3>
                </div>

                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="bg-card rounded-2xl p-6 shadow-soft"
                  >
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-muted-foreground text-sm">{edu.institution}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-secondary/20 text-secondary text-xs font-medium rounded-full">
                      {edu.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    Certifications
                  </h3>
                </div>

                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow"
                    >
                      <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center shrink-0">
                        <cert.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground text-sm">
                          {cert.name}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {cert.issuer}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;