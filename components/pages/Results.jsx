"use client";
import { Layout, PageHero, CTABlock } from "@/components/shared";
import { Sections3 } from "@/components/sections3";

function CaseStudy({ name, trade, location, hero, stats, quote, quoteBy }) {
  return (
    <div
      style={{
        background: "hsl(var(--card))",
        border: "1px solid hsl(var(--border))",
        borderRadius: 20,
        overflow: "hidden",
        transition: "all 0.2s var(--ease-default)",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "var(--shadow-card)"; e.currentTarget.style.borderColor = "hsl(var(--accent) / 0.4)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "hsl(var(--border))"; }}
    >
      <div style={{ display: "grid", gridTemplateColumns: window.innerWidth < 900 ? "1fr" : "1fr 1.4fr" }}>
        {/* Left meta */}
        <div style={{
          padding: 32,
          borderRight: window.innerWidth < 900 ? "none" : "1px solid hsl(var(--border))",
          borderBottom: window.innerWidth < 900 ? "1px solid hsl(var(--border))" : "none",
          background: "linear-gradient(160deg, hsl(250 60% 98.5%), hsl(252 52% 95%))",
        }}>
          <div style={{
            width: 48, height: 48,
            borderRadius: "50%",
            background: "hsl(var(--foreground))",
            color: "hsl(var(--background))",
            display: "grid", placeItems: "center",
            fontWeight: 700, fontSize: 16, letterSpacing: "-0.02em",
            marginBottom: 20,
          }}>{name.split(" ").map(w => w[0]).slice(0, 2).join("")}</div>
          <div style={{ fontWeight: 650, fontSize: 18, letterSpacing: "-0.01em" }}>{name}</div>
          <div style={{ fontSize: 13, color: "hsl(var(--muted-foreground))", marginTop: 2, fontFamily: "var(--font-mono)", letterSpacing: "0.02em", textTransform: "uppercase" }}>
            {trade} · {location}
          </div>
          <div style={{ marginTop: 24, padding: "18px 0 0", borderTop: "1px solid hsl(252 40% 90%)" }}>
            <div className="cc-eyebrow" style={{ marginBottom: 10 }}>HEADLINE</div>
            <div style={{ fontSize: 38, fontWeight: 750, letterSpacing: "-0.03em", lineHeight: 1 }}>{hero.n}</div>
            <div style={{ fontSize: 13.5, color: "hsl(var(--muted-foreground))", marginTop: 8 }}>{hero.l}</div>
          </div>
        </div>

        {/* Right detail */}
        <div style={{ padding: 32, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "grid", gridTemplateColumns: window.innerWidth < 600 ? "1fr 1fr" : "repeat(3, 1fr)", gap: 16, marginBottom: 24 }}>
            {stats.map((s) => (
              <div key={s.l}>
                <div style={{ fontSize: 26, fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>{s.n}</div>
                <div style={{ fontSize: 11.5, color: "hsl(var(--muted-foreground))", marginTop: 5, fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.04em" }}>{s.l}</div>
              </div>
            ))}
          </div>
          <div style={{ margin: "auto 0 0" }}>
            {/* testimonial styled as an incoming text message */}
            <div style={{
              display: "inline-block",
              maxWidth: "94%",
              background: "hsl(var(--muted))",
              color: "hsl(var(--foreground))",
              padding: "13px 17px",
              fontSize: 15, lineHeight: 1.5, fontWeight: 500,
              letterSpacing: "-0.005em",
              borderRadius: 20,
              borderBottomLeftRadius: 6,
            }}>
              {quote}
            </div>
            <div style={{ marginTop: 10, fontSize: 13, color: "hsl(var(--muted-foreground))" }}>— {quoteBy}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResultsPage() {
  const cases = [
    {
      name: "Apex Roofing", trade: "Roofing", location: "Austin TX",
      hero: { n: "$184k", l: "in recovered revenue in 90 days" },
      stats: [
        { n: "47s", l: "avg reply time" },
        { n: "3.2×", l: "book rate" },
        { n: "412", l: "new 5★ reviews" },
      ],
      quote: "We stopped missing calls and started booking more jobs immediately. The text-back alone paid for the system in the first week.",
      quoteBy: "Jared M., Owner",
    },
    {
      name: "BlueLine Plumbing", trade: "Plumbing", location: "Denver CO",
      hero: { n: "#3", l: "local Google rank (from page 2)" },
      stats: [
        { n: "+248%", l: "google rank moves" },
        { n: "94%", l: "review request rate" },
        { n: "4.9★", l: "rolling rating" },
      ],
      quote: "Reviews went from inconsistent to steady 5-stars every week. Our local Google rank moved from page 2 to spot #3.",
      quoteBy: "Sandra L., Office Manager",
    },
    {
      name: "Northwind HVAC", trade: "HVAC", location: "Phoenix AZ",
      hero: { n: "61%", l: "of long-tail leads booked" },
      stats: [
        { n: "61%", l: "12-mo conversion" },
        { n: "$2.4k", l: "avg recovered job" },
        { n: "0", l: "manual follow-ups" },
      ],
      quote: "The follow-up alone paid for everything. People I'd given up on six months ago started booking again.",
      quoteBy: "Carlos R., Owner",
    },
    {
      name: "GreenStep Landscaping", trade: "Landscaping", location: "Raleigh NC",
      hero: { n: "2.4×", l: "more booked jobs YoY" },
      stats: [
        { n: "2.4×", l: "more jobs" },
        { n: "−68%", l: "ghosted leads" },
        { n: "31 hrs", l: "saved per week" },
      ],
      quote: "Didn't think automating would feel personal. Customers reply like they're texting me directly.",
      quoteBy: "Megan K., Owner",
    },
  ];

  return (
    <Layout active="results">
      <PageHero
        eyebrow="RESULTS"
        title={<>Real shops. <br /><span style={{ color: "hsl(var(--muted-foreground))" }}>Real numbers.</span></>}
        sub="No vanity metrics. No cherry-picked screenshots. Here's what CleanerClicks is actually doing for the home-service businesses running it right now."
        cta="See if we can do this for you"
      />

      {/* Big stats strip */}
      <section className="cc-section cc-section--dark" style={{ padding: "48px 0" }}>
        <div className="cc-container">
          <div style={{ display: "grid", gridTemplateColumns: window.innerWidth < 700 ? "1fr 1fr" : "repeat(4, 1fr)", gap: 24 }}>
            {[
              { n: "$2.1M", l: "lead revenue recovered, 2025" },
              { n: "47s", l: "avg first reply, network-wide" },
              { n: "94%", l: "of jobs end in a 5★ review" },
              { n: "412", l: "shops on the system" },
            ].map((s) => (
              <div key={s.l} style={{ textAlign: window.innerWidth < 700 ? "left" : "center" }}>
                <div style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1 }}>{s.n}</div>
                <div style={{ fontSize: 13, color: "hsl(var(--muted-foreground))", marginTop: 8, fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.04em" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="cc-section cc-section--card" id="cases">
        <div className="cc-container">
          <div style={{ marginBottom: 40 }}>
            <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 16 }}>CASE STUDIES</div>
            <h2 className="cc-h2">Four shops. Four very different recoveries.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
            {cases.map((c) => <CaseStudy key={c.name} {...c} />)}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Sections3.Testimonials />

      <CTABlock title="Want to be the next case study?" sub="20-minute call. We'll show you what you'd recover from missed calls alone — in your own numbers." />
    </Layout>
  );
}

export default ResultsPage;
