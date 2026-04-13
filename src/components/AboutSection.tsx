const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4 font-body">About</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-8">
          From SEO & Growth to{" "}
          <span className="text-gradient">Product × Marketing</span>
        </h2>
        <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed font-body">
          <p>
            My journey started in organic growth — building SEO systems, content engines, and 
            acquisition loops that scaled traffic by <span className="text-foreground font-medium">200%+</span>. 
            That deep understanding of user intent and search behavior became my foundation.
          </p>
          <p>
            Over time, I moved upstream — into product positioning, GTM strategy, and conversion 
            optimization. I realized the biggest growth levers aren't just about driving traffic, 
            but about <span className="text-foreground font-medium">connecting the right product story 
            to the right user at the right moment</span>.
          </p>
          <p>
            Today, I operate at the intersection of product, marketing, and revenue. I build 
            full-funnel systems — from acquisition to activation to retention — with a relentless 
            focus on data, experimentation, and user psychology.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
          {[
            { metric: "₹30Cr+", label: "Revenue Scaled" },
            { metric: "3.5%", label: "Peak CVR" },
            { metric: "35%", label: "CAC Reduction" },
            { metric: "200%", label: "Traffic Growth" },
          ].map((item) => (
            <div key={item.label} className="text-center p-5 rounded-xl card-gradient border border-border">
              <p className="text-2xl md:text-3xl font-bold text-gradient font-heading">{item.metric}</p>
              <p className="text-muted-foreground text-sm mt-2 font-body">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
