import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden flex items-center">
      {/* Floating 3D Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Abstract UI Card - Top Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute top-32 right-[10%] floating-element"
        >
          <div className="w-48 h-32 bg-gradient-card rounded-2xl shadow-float p-4 border border-border/50">
            <div className="w-16 h-2 bg-secondary/30 rounded-full mb-3" />
            <div className="w-24 h-2 bg-muted rounded-full mb-2" />
            <div className="w-20 h-2 bg-muted rounded-full" />
            <div className="flex gap-2 mt-4">
              <div className="w-8 h-8 bg-primary/20 rounded-lg" />
              <div className="w-8 h-8 bg-secondary/30 rounded-lg" />
            </div>
          </div>
        </motion.div>

        {/* Abstract Device Mockup - Bottom Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-32 left-[8%] floating-element-delayed hidden lg:block"
        >
          <div className="w-24 h-44 bg-gradient-card rounded-3xl shadow-float p-2 border border-border/50">
            <div className="w-full h-full bg-muted/50 rounded-2xl flex items-start justify-center pt-6">
              <div className="w-8 h-8 bg-secondary/40 rounded-full" />
            </div>
          </div>
        </motion.div>

        {/* Floating Shape - Top Left */}
        <motion.div
          initial={{ opacity: 0, rotate: -20 }}
          animate={{ opacity: 0.6, rotate: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute top-48 left-[15%] floating-element-slow"
        >
          <div className="w-20 h-20 bg-gradient-primary rounded-2xl shadow-card rotate-12 opacity-20" />
        </motion.div>

        {/* Accent Circle - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-48 right-[15%] floating-element"
        >
          <div className="w-32 h-32 rounded-full border-4 border-secondary/30" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-soft mb-8"
          >
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-muted-foreground">
              Available for freelance projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6"
          >
            Roshan{" "}
            <span className="text-gradient">Parab</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-secondary font-medium mb-6"
          >
            UI/UX Designer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Crafting intuitive, user-centered digital experiences through thoughtful 
            wireframing, prototyping, and visual design. Transforming complex problems 
            into elegant solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-primary text-primary-foreground rounded-xl font-semibold shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-card text-foreground border border-border rounded-xl font-semibold shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs font-medium">Scroll to explore</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;