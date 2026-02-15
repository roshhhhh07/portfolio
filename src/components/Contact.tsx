import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Linkedin, Send, ArrowUpRight, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formState,
      });
      if (error) throw error;
      toast.success("Message sent successfully!");
      setFormState({ name: "", email: "", message: "" });
    } catch (err: any) {
      toast.error(err.message || "Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "roshan.s.parab66@gmail.com",
      href: "mailto:roshan.s.parab66@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8779674757",
      href: "tel:+918779674757",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://linkedin.com/in/roshan-parab-10b6a0265",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
              Get in Touch
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3">
              Let's Work <span className="text-gradient">Together</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Have a project in mind or want to discuss design opportunities? 
              I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
                <h3 className="font-display text-2xl font-bold mb-4">
                  Ready to bring your ideas to life?
                </h3>
                <p className="text-primary-foreground/80 mb-8">
                  Whether you need a complete design overhaul or just want to 
                  improve user experience, I'm here to help transform your vision 
                  into reality.
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.label === "LinkedIn" ? "_blank" : undefined}
                      rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors group"
                    >
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-primary-foreground/70">{item.label}</p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-8 shadow-card">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all text-foreground placeholder:text-muted-foreground"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all text-foreground placeholder:text-muted-foreground"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all resize-none text-foreground placeholder:text-muted-foreground"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-4 bg-gradient-primary text-primary-foreground rounded-xl font-semibold shadow-card hover:shadow-hover transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                    {sending ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;