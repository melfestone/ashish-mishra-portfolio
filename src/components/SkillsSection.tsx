const skillGroups = [
  {
    title: "Product Marketing",
    skills: ["Go-To-Market Strategy", "Product Positioning & Messaging", "Competitive Analysis", "Launch Planning", "User Research", "Storytelling & Narrative"],
  },
  {
    title: "Growth & Analytics",
    skills: ["Conversion Rate Optimization", "Performance Marketing", "Funnel Design", "Retention & CRM", "A/B Testing", "Data-Driven Experimentation"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Google Analytics 4", "Meta Ads", "Google Ads", "MoEngage", "Mixpanel", "Hotjar", "SEMrush", "HubSpot"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4 font-body">Skills</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold mb-14">
          What I <span className="text-gradient">Bring</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div key={group.title} className="card-gradient border border-border rounded-2xl p-8">
              <h3 className="font-heading text-xl font-semibold mb-5">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground font-body"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
