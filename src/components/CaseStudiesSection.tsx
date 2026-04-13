import { TrendingUp, Target, Search } from "lucide-react";

interface CaseStudy {
  icon: React.ReactNode;
  tag: string;
  title: string;
  problem: string;
  actions: string[];
  results: { metric: string; label: string }[];
  learnings: string[];
}

const caseStudies: CaseStudy[] = [
  {
    icon: <TrendingUp className="text-primary" size={24} />,
    tag: "GTM Strategy · Funnel Optimization",
    title: "Scaling DTC Revenue to ₹30Cr+",
    problem:
      "Low scale, inefficient funnel, and high customer acquisition costs were capping growth potential across the DTC business.",
    actions: [
      "Built a full-funnel growth system spanning acquisition, activation, and retention",
      "Redesigned targeting & segmentation strategy using behavioral cohorts",
      "Ran systematic CRO experiments across the entire purchase journey",
    ],
    results: [
      { metric: "₹30Cr+", label: "Revenue" },
      { metric: "35%", label: "CAC Reduction" },
      { metric: "15%", label: "ROAS Improvement" },
    ],
    learnings: [
      "GTM strategy must align product positioning with channel-specific messaging",
      "Funnel optimization compounds — small wins at each stage create outsized impact",
      "Cross-functional ownership (product + marketing + analytics) is non-negotiable for scale",
    ],
  },
  {
    icon: <Target className="text-primary" size={24} />,
    tag: "CRO · Experimentation",
    title: "Conversion Rate: 0.3% → 3.5%",
    problem:
      "Product pages had poor conversion performance with high drop-off rates, generic messaging, and no trust signals.",
    actions: [
      "Ran 20+ A/B tests across layout, copy, CTAs, and social proof",
      "Redesigned UX with user psychology principles — urgency, trust, clarity",
      "Integrated AI chatbot for real-time objection handling",
      "Added trust-building elements: reviews, guarantees, certifications",
    ],
    results: [
      { metric: "10×", label: "CVR Growth" },
      { metric: "3.5%", label: "Peak Conversion" },
      { metric: "20+", label: "Experiments Run" },
    ],
    learnings: [
      "Experimentation mindset > one-time redesigns",
      "Micro-copy changes can drive macro conversion lifts",
      "AI-assisted engagement reduced friction at decision points",
    ],
  },
  {
    icon: <Search className="text-primary" size={24} />,
    tag: "SEO · Content Strategy",
    title: "Organic Growth & SEO-led Revenue",
    problem:
      "Low organic traffic and poor discoverability meant heavy dependence on paid channels with declining unit economics.",
    actions: [
      "Built a comprehensive SEO strategy covering technical, on-page, and content pillars",
      "Created a keyword-first content engine targeting high-intent search queries",
      "Optimized site architecture and internal linking for topical authority",
    ],
    results: [
      { metric: "200%", label: "Traffic Growth" },
      { metric: "225%", label: "Revenue Increase" },
      { metric: "3×", label: "Organic Rankings" },
    ],
    learnings: [
      "SEO is a compounding channel — early investment pays off exponentially",
      "Content aligned with user intent outperforms volume-based strategies",
      "Organic growth reduces CAC and improves overall channel mix health",
    ],
  },
];

const CaseStudiesSection = () => {
  return (
    <section id="case-studies" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4 font-body">
          Case Studies
        </p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-14">
          Impact in <span className="text-gradient">Action</span>
        </h2>

        <div className="space-y-10">
          {caseStudies.map((cs, i) => (
            <article
              key={i}
              className="card-gradient border border-border rounded-2xl p-8 md:p-10 hover:glow-shadow transition-shadow duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                {cs.icon}
                <span className="text-muted-foreground text-sm font-body">{cs.tag}</span>
              </div>

              <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-4">{cs.title}</h3>

              <div className="mb-6">
                <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-2 font-body">The Problem</p>
                <p className="text-muted-foreground leading-relaxed font-body">{cs.problem}</p>
              </div>

              <div className="mb-6">
                <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-2 font-body">What I Did</p>
                <ul className="space-y-2">
                  {cs.actions.map((a, j) => (
                    <li key={j} className="flex items-start gap-2 text-muted-foreground font-body">
                      <span className="text-primary mt-1.5 text-xs">●</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6 py-6 border-y border-border">
                {cs.results.map((r) => (
                  <div key={r.label} className="text-center">
                    <p className="text-2xl md:text-3xl font-bold text-gradient font-heading">{r.metric}</p>
                    <p className="text-muted-foreground text-xs mt-1 font-body">{r.label}</p>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-primary text-xs font-semibold uppercase tracking-widest mb-2 font-body">Key Learnings</p>
                <ul className="space-y-1.5">
                  {cs.learnings.map((l, j) => (
                    <li key={j} className="text-muted-foreground text-sm font-body">→ {l}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
