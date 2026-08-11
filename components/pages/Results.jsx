"use client";
import React from "react";
import { Icon } from "@/components/icons";
import { Layout, PageHero, CTABlock } from "@/components/shared";
import { Sections3 } from "@/components/sections3";

// ═══════════════════════════════════════════════════════════════════════════
// ⚠️  PLACEHOLDER DATA — REPLACE BEFORE LAUNCH
//
// Every entry below is a template, not a real client. Publishing invented
// results as if they were real is both dishonest and, for a marketing agency
// making performance claims, a legal problem (FTC endorsement rules).
//
// Replace each entry with a real client, real numbers you can evidence, and a
// quote you have written permission to use. Delete any case you can't back up.
// If you have no case studies yet, delete the CASES array and the "Case
// studies" section — the rest of this page stands on its own.
// ═══════════════════════════════════════════════════════════════════════════
const CASES = [
  {
    name: "[Company name]",
    trade: "[Trade]",
    location: "[City, ST]",
    hero: { n: "#[X]", l: "map pack position, from [starting position]" },
    stats: [
      { n: "[X]", l: "days to top 3" },
      { n: "[X]", l: "leads per month" },
      { n: "$[X]", l: "cost per booked job" },
    ],
    quote: "[Real client quote, used with written permission.]",
    quoteBy: "[Name], [Role]",
  },
  {
    name: "[Company name]",
    trade: "[Trade]",
    location: "[City, ST]",
    hero: { n: "[X]", l: "LSA leads in the first 30 days" },
    stats: [
      { n: "[X]", l: "leads month one" },
      { n: "$[X]", l: "cost per lead" },
      { n: "[X]%", l: "leads that booked" },
    ],
    quote: "[Real client quote, used with written permission.]",
    quoteBy: "[Name], [Role]",
  },
  {
    name: "[Company name]",
    trade: "[Trade]",
    location: "[City, ST]",
    hero: { n: "[X]×", l: "more booked estimates year over year" },
    stats: [
      { n: "[X]", l: "keywords in the top 3" },
      { n: "[X]", l: "new Google reviews" },
      { n: "[X]", l: "months on the program" },
    ],
    quote: "[Real client quote, used with written permission.]",
    quoteBy: "[Name], [Role]",
  },
];

function CaseStudy({ name, trade, location, hero, stats, quote, quoteBy }) {
  const narrow = window.innerWidth < 900;
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
      <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "1fr 1.4fr" }}>
        {/* Left meta */}
        <div style={{
          padding: 32,
          borderRight: narrow ? "none" : "1px solid hsl(var(--border))",
          borderBottom: narrow ? "1px solid hsl(var(--border))" : "none",
          background: "hsl(var(--page))",
          position: "relative",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(circle at 20% 0%, hsl(var(--accent) / 0.10), transparent 60%)",
            pointerEvents: "none",
          }} />
          <div style={{ position: "relative" }}>
            <div style={{
              width: 48, height: 48,
              borderRadius: 12,
              background: "hsl(var(--accent))",
              color: "hsl(30 10% 8%)",
              display: "grid", placeItems: "center",
              marginBottom: 20,
            }}>
              <Icon.hardHat size={22} stroke={2} />
            </div>
            <div style={{ fontWeight: 650, fontSize: 18, letterSpacing: "-0.01em" }}>{name}</div>
            <div style={{ fontSize: 13, color: "hsl(var(--muted-foreground))", marginTop: 2, fontFamily: "var(--font-mono)", letterSpacing: "0.02em", textTransform: "uppercase" }}>
              {trade} · {location}
            </div>
            <div style={{ marginTop: 24, padding: "18px 0 0", borderTop: "1px solid hsl(var(--border))" }}>
              <div className="cc-eyebrow" style={{ marginBottom: 10 }}>HEADLINE</div>
              <div style={{ fontSize: 38, fontWeight: 750, letterSpacing: "-0.03em", lineHeight: 1 }}>{hero.n}</div>
              <div style={{ fontSize: 13.5, color: "hsl(var(--muted-foreground))", marginTop: 8 }}>{hero.l}</div>
            </div>
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
  const narrow = window.innerWidth < 900;
  return (
    <Layout active="results">
      <PageHero
        eyebrow="RESULTS"
        title={<>Measured in booked jobs. <br /><span style={{ color: "hsl(var(--muted-foreground))" }}>Not impressions.</span></>}
        sub="Every contractor we work with gets the same four numbers every month. Here's what we track, how we track it, and what happened for the companies running it."
        cta="See where you'd stand"
      />

      {/* What we measure */}
      <section className="cc-section cc-section--card" id="what-we-measure">
        <div className="cc-container">
          <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "0.85fr 1.15fr", gap: narrow ? 28 : 64, alignItems: "start" }}>
            <div>
              <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 16 }}>HOW WE SCORE OURSELVES</div>
              <h2 className="cc-h2" style={{ fontSize: "clamp(26px, 3vw, 38px)", marginBottom: 16 }}>
                Four numbers, and none of them are "reach".
              </h2>
              <p className="cc-lede" style={{ margin: 0 }}>
                Most agency reports are designed to look impressive rather than be useful. Ours are
                built so you can work out, in about ten seconds, whether we earned the fee.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: window.innerWidth < 600 ? "1fr" : "1fr 1fr", gap: 16 }}>
              {[
                { icon: "mapPin", t: "Map pack position", b: "Tracked per keyword, from inside your service area — not from a data center three states away." },
                { icon: "phone", t: "Leads by channel", b: "LSA, organic, map pack, direct. So you know which channel is carrying the month." },
                { icon: "calendar", t: "Booked estimates", b: "Leads that turned into an appointment. The only lead number that means anything." },
                { icon: "dollar", t: "Cost per booked job", b: "Everything you spent, divided by jobs won. Compare it against your average ticket." },
              ].map((m) => {
                const Ic = Icon[m.icon] || Icon.chart;
                return (
                  <div key={m.t} style={{
                    padding: 24,
                    background: "hsl(var(--page))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: 16,
                  }}>
                    <div style={{ color: "hsl(var(--accent))", marginBottom: 14 }}><Ic size={20} /></div>
                    <div style={{ fontWeight: 650, fontSize: 16, marginBottom: 6 }}>{m.t}</div>
                    <p style={{ margin: 0, fontSize: 13.5, lineHeight: 1.55, color: "hsl(var(--muted-foreground))" }}>{m.b}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="cc-section cc-section--card" id="cases">
        <div className="cc-container">
          <div style={{ marginBottom: 40 }}>
            <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 16 }}>CASE STUDIES</div>
            <h2 className="cc-h2">Contractors running the system.</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
            {CASES.map((c, i) => <CaseStudy key={i} {...c} />)}
          </div>
        </div>
      </section>

      {/* What we won't claim */}
      <section className="cc-section cc-section--gradient">
        <div className="cc-container">
          <div style={{ display: "grid", gridTemplateColumns: narrow ? "1fr" : "0.9fr 1.1fr", gap: narrow ? 28 : 64, alignItems: "start" }}>
            <div>
              <div className="cc-eyebrow cc-eyebrow--muted" style={{ marginBottom: 16 }}>STRAIGHT TALK</div>
              <h2 className="cc-h2" style={{ fontSize: "clamp(26px, 3vw, 38px)" }}>
                What we won't claim.
              </h2>
            </div>
            <div className="cc-stack-md" style={{ fontSize: 16, lineHeight: 1.65, color: "hsl(var(--muted-foreground))" }}>
              <p style={{ margin: 0 }}>
                We won't tell you a number from another contractor's account is what you'll get.
                Markets differ, competition differs, and what you close depends on how you sell.
              </p>
              <p style={{ margin: 0 }}>
                What we will commit to is on the{" "}
                <a href="/guarantee" className="cc-link" style={{ display: "inline-flex" }}>guarantee page</a> — top 3 in
                the map pack in 90 days, and 5 LSA leads in your first 30 days, with every condition
                written out before you sign.
              </p>
              <p style={{ margin: 0, color: "hsl(var(--foreground))", fontWeight: 550 }}>
                If we can't hit those in your market, we'd rather tell you on the call than take the money.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Sections3.Testimonials />

      <CTABlock
        title="Want to see where you'd rank?"
        sub="20-minute call. We'll pull your profile and your three closest competitors up live and show you the gap — no report to wait for."
      />
    </Layout>
  );
}

export default ResultsPage;
