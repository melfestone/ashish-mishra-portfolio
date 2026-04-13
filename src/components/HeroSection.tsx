import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-72 h-72 rounded-full bg-primary/3 blur-3xl" />

      <div className="relative z-10 max-w-4xl">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6 font-body">
          Product Marketing Manager
        </p>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-700 leading-tight mb-6">
          Driving Product Growth Through{" "}
          <span className="text-gradient">Data, Storytelling</span>{" "}
          & GTM Strategy
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-body">
          Scaled DTC revenue to <span className="text-foreground font-semibold">₹30Cr+</span>, 
          improved conversion rates from <span className="text-foreground font-semibold">0.3% to 3.5%</span>, 
          and reduced CAC by <span className="text-foreground font-semibold">35%</span> through 
          full-funnel growth systems.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#case-studies"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-lg font-semibold text-sm tracking-wide hover:opacity-90 transition-opacity font-body"
          >
            View Case Studies
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border text-foreground px-7 py-3.5 rounded-lg font-semibold text-sm tracking-wide hover:bg-secondary transition-colors font-body"
          >
            Contact Me
          </a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce">
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default HeroSection;
