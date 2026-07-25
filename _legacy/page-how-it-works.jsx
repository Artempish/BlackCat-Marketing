/* global React, ReactDOM, Shared, Sections2, Sections3, Icon */
const { Layout, PageHero, CTABlock } = Shared;

function HowItWorksPage() {
  return (
    <Layout active="how-it-works">
      <PageHero
        eyebrow="HOW IT WORKS"
        title={<>From missed call to <br /><span style={{ color: "hsl(var(--muted-foreground))" }}>booked job in 90 seconds.</span></>}
        sub="Four steps. They all run themselves. Here's exactly what happens between a customer reaching out and them showing up on your calendar."
        cta="See it run on your business"
      />

      {/* Interactive steps */}
      <Sections2.HowItWorks />

      {/* Live demo */}
      <Sections3.LiveDemo />

      {/* Workforce */}
      <Sections2.WorkforceSection />

      {/* Setup timeline */}
      <section className="cc-section" id="setup-timeline" style={{ scrollMarginTop: 80 }}>
        <div className="cc-container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 16 }}>SETUP TIMELINE</div>
            <h2 className="cc-h2">14 days from signed agreement to live.</h2>
            <p className="cc-lede" style={{ margin: "16px auto 0", textAlign: "center" }}>
              You spend 90 minutes total. We handle the rest.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: window.innerWidth < 700 ? "1fr" : "repeat(4, 1fr)", gap: 16 }}>
            {[
              { d: "Day 1", t: "30-min kickoff", b: "Brand voice, business hours, integrations, phone numbers. Done." },
              { d: "Days 2–7", t: "Build phase", b: "We design your site, write your sequences, port your number, wire integrations." },
              { d: "Days 8–12", t: "Review & approve", b: "30-min walkthrough. You red-line copy and templates. We ship revisions same-day." },
              { d: "Day 14", t: "Go live", b: "30-min training. System turns on. First missed-call text fires that afternoon." },
            ].map((s, i) => (
              <div key={i} className="cc-step">
                <div className="cc-step__num">{s.d}</div>
                <h3>{s.t}</h3>
                <p>{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABlock title="Want this running in your business in 14 days?" />
    </Layout>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<HowItWorksPage />);
