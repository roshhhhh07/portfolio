import { motion } from "framer-motion";
import { Heart, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground py-12 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <a href="#" className="font-display text-2xl font-bold text-background">
                Roshan<span className="text-secondary">.</span>
              </a>
              <p className="text-muted mt-2 text-sm">
                UI/UX Designer crafting digital experiences
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="mailto:roshan.s.parab66@gmail.com"
                className="w-10 h-10 bg-background/10 hover:bg-secondary/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5 text-background" />
              </a>
              <a
                href="https://linkedin.com/in/roshanparab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 hover:bg-secondary/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5 text-background" />
              </a>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-secondary/80 transition-colors"
              >
                <ArrowUp className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-background/10">
            <p className="text-center text-muted text-sm flex items-center justify-center gap-1">
              Designed with <Heart className="w-4 h-4 text-secondary fill-secondary" /> by Roshan Parab © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;