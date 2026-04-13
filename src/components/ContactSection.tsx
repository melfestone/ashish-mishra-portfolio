import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4 font-body">Get in Touch</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
          Let's Build & Scale{" "}
          <span className="text-gradient">Products Together</span>
        </h2>
        <p className="text-muted-foreground text-lg mb-10 font-body">
          I'm always open to discussing product growth, GTM strategy, or new opportunities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="mailto:mishraashish966@gmail.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity font-body"
          >
            <Mail size={16} />
            mishraashish966@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/ashish-mishra31/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-3.5 rounded-lg font-semibold text-sm hover:bg-secondary transition-colors font-body"
          >
            <Linkedin size={16} />
            LinkedIn
            <ArrowUpRight size={14} />
          </a>
        </div>

        <p className="text-muted-foreground text-sm font-body">
          © {new Date().getFullYear()} · Product Marketing Portfolio
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
